var token = "<your GH PAT>";

var issuenum_pt = {
  "Massachusetts General Hospital": "1",
  "Mayo Clinic": "6",
  "University of California San Francisco": "11",
  "University of New Mexico": "16",
  "University of Washington/Seattle Childrens": "21",
  "University of California Los Angeles": "26",
  "Duke University": "31",
  "Emory University": "36",
  "University of Pittsburgh": "41",
  "University of Virginia": "46",
  "Columbia University": "51",
  "Nationwide Childrens Hospital": "56",
  "University of Florida": "61",
  "Massachusetts Institute of Technology": "66"
};

function weeklyDigest() {

  var data = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
  var lastweek = new Date();
  var lastweek = lastweek.setDate(lastweek.getDate() - 7) 
  var etlStatus = "<strong>Sites that have submitted an update on their OMOP Data status in the past week:</strong>\n <br />"
  var newDiscussions = "<strong>Discussions that have been created in the past week:</strong>\n <br />"

  var discQuery = "query{"+
                              " repository(owner: \"chorus-ai\","+
                              "   name: \"StandardsModule\""+
                              " )" + 
                              "   { discussions(last: 50) {"+
                              "   totalCount " + 
                              "   edges " + 
                              "        {"+
                              "          cursor" + 
                              "          node" + 
                              "              {"+
                              "                id" + 
                              "                title" + 
                              "                createdAt" + 
                              "                number" + 
                              "              }"+
                              "        }"+
                              "      }"+
                              "   }" + 
                              "}"
  var payload_disc = {
      "query": discQuery
      };
  var options_query = {
      "method": "POST",
      "headers": {
          "authorization": "token "+token,
          "Accept": "application/vnd.github.v3+json",
      },
      "contentType": "application/json",
      "payload": JSON.stringify(payload_disc)
  };
  var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
  const gh_data = JSON.parse(response_update.getContentText())
  edgeList = gh_data.data.repository.discussions.edges
  for (var counter = 0; counter < edgeList.length; counter = counter + 1) {
    var disc_num = edgeList[counter].node.number
    var discDate = new Date(edgeList[counter].node.createdAt)
    if (lastweek<discDate) {
      newDiscussions = newDiscussions + "  - " + edgeList[counter].node.title + " " +
          "<a href=" + "https://github.com/chorus-ai/StandardsModule/discussions/" + disc_num.toFixed(0) + '>[LINK]</a>' +  "\n <br />"
    }
  }

  for (i in data) {
    var getissue_pt = issuenum_pt[data[i][1]];
    formsubmitdate = new Date(data[i][0]);

    if(lastweek<formsubmitdate)
    {
        etlStatus = etlStatus + "  - " + data[i][1] + " " +
                    "<a href=" + "https://github.com/chorus-ai/StandardsModule/issues/" + getissue_pt + '>[Progress Tracker]</a>' +  "\n <br />"
    }

  }

  Logger.log(etlStatus)
  Logger.log(newDiscussions)
  var today = new Date()
  const todayString = Utilities.formatDate(today, 'America/New_York', 'MMMM dd, yyyy');
  var lw = new Date(today.setDate(today.getDate() - 7))
  const lastweekString = Utilities.formatDate(lw, 'America/New_York', 'MMMM dd, yyyy');
  var emailHeader = "[CHoRUS-B2AI-StandardsModule] Weekly GitHub Digest: " + lastweekString + 
                    " through " + todayString
  Logger.log(emailHeader)
  var emailBody = "See below for a brief overview of the StandardsModule GitHub activity over the past 7 days! \n\n <br />" + 
                  "<br />" +
                  etlStatus + "\n <br />" + 
                  newDiscussions + "\n <br />" +
                  "If you're responsible for reporting the progress of your data contributing site, but haven't submitted an update recently, we encourage you to do so via " +
                  "<a href=" + "<google form link>" + getissue_pt + '>[google form]</a>' +  "\n\n <br />" + 
                  "<br />" +
                  "Here are some other useful links: \n <br />" +
                  "  - Office Hours Resources " + "<a href=" + "<google drive link>" + '>[Google Drive]</a>' +  "\n <br />" + 
                  "  - Overview of Site Statuses " + "<a href=" + "https://github.com/orgs/chorus-ai/projects/11" + '>[StandardsModule GitHub Project]</a>' +  "\n <br />" + 
                  "  - CHoRUS Organization GitHub " + "<a href=" + "https://github.com/orgs/chorus-ai/" + '>[chorus-ai]</a>' +  "\n <br />" + 
                  "<br />" +
                  "Kind regards,\n\n <br />" + 
                  "<br />" +
                  "The CHoRUS StandardsModule Team"

  Logger.log(emailBody)
  MailApp.sendEmail({
    to: "demo@b2ai.org",
    subject: emailHeader,
    noReply: "True",
    htmlBody: emailBody
  });
}
