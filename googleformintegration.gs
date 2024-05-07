var token = "<REDACTED>";

var dataclassificationtype = "EHR Data, Flowsheets, Waveform Data, Imaging Data"
var flowsheetoptions = "Flowsheet data format has been identified, Flowsheet data format has been identified, Flowsheet data mapping is underway, Flowsheet mappings are under review by the Standards Module"
var frequencies = "Weekly, Monthly, Quarterly, Yearly"

var issuenum_pt = {
  "Massachusetts General Hospital": "1",
  "Mayo Clinic": "6",
  "University of California San Francisco": "11",
  "University of New Mexico": "16",
  "University of Washington/Seattle Childrens": "21",
  "University of California Los Angeles": "26",
  "Duke University": "31",
  "Emory University": "36",
  "University of Pittsburgh Medical Center": "41",
  "University of Virginia": "46",
  "Columbia University": "51",
  "Nationwide Childrens Hospital": "56",
  "University of Florida": "61",
  "Massachusetts Institute of Technology": "66"
};

var issuenum_etl = {
  "Massachusetts General Hospital": "2",
  "Mayo Clinic": "7",
  "University of California San Francisco": "12",
  "University of New Mexico": "17",
  "University of Washington/Seattle Childrens": "22",
  "University of California Los Angeles": "27",
  "Duke University": "32",
  "Emory University": "37",
  "University of Pittsburgh Medical Center": "42",
  "University of Virginia": "47",
  "Columbia University": "52",
  "Nationwide Childrens Hospital": "57",
  "University of Florida": "62",
  "Massachusetts Institute of Technology": "67"
};

var issuenum_flw = {
  "Massachusetts General Hospital": "3",
  "Mayo Clinic": "8",
  "University of California San Francisco": "13",
  "University of New Mexico": "18",
  "University of Washington/Seattle Childrens": "23",
  "University of California Los Angeles": "28",
  "Duke University": "33",
  "Emory University": "38",
  "University of Pittsburgh Medical Center": "43",
  "University of Virginia": "48",
  "Columbia University": "53",
  "Nationwide Childrens Hospital": "58",
  "University of Florida": "63",
  "Massachusetts Institute of Technology": "68"
};

var issuenum_img = {
  "Massachusetts General Hospital": "4",
  "Mayo Clinic": "9",
  "University of California San Francisco": "14",
  "University of New Mexico": "19",
  "University of Washington/Seattle Childrens": "24",
  "University of California Los Angeles": "29",
  "Duke University": "34",
  "Emory University": "39",
  "University of Pittsburgh Medical Center": "44",
  "University of Virginia": "49",
  "Columbia University": "54",
  "Nationwide Childrens Hospital": "59",
  "University of Florida": "64",
  "Massachusetts Institute of Technology": "69"
};

var issuenum_res = {
  "Massachusetts General Hospital": "5",
  "Mayo Clinic": "10",
  "University of California San Francisco": "15",
  "University of New Mexico": "20",
  "University of Washington/Seattle Childrens": "25",
  "University of California Los Angeles": "30",
  "Duke University": "35",
  "Emory University": "40",
  "University of Pittsburgh Medical Center": "45",
  "University of Virginia": "50",
  "Columbia University": "55",
  "Nationwide Childrens Hospital": "60",
  "University of Florida": "65",
  "Massachusetts Institute of Technology": "70"
};

var gh_item_id = {
  "Massachusetts General Hospital": "PVTI_lADOB2W_hM4AWS1szgJsBRI",
  "Mayo Clinic": "PVTI_lADOB2W_hM4AWS1szgJsBQw",
  "University of California San Francisco": "PVTI_lADOB2W_hM4AWS1szgJsBQY",
  "University of New Mexico": "PVTI_lADOB2W_hM4AWS1szgJsBQA",
  "University of Washington/Seattle Childrens": "PVTI_lADOB2W_hM4AWS1szgJsDBk",
  "University of California Los Angeles": "PVTI_lADOB2W_hM4AWS1szgJsDBg",
  "Duke University": "PVTI_lADOB2W_hM4AWS1szgJsDBc",
  "Emory University": "PVTI_lADOB2W_hM4AWS1szgJsDBY",
  "University of Pittsburgh Medical Center": "PVTI_lADOB2W_hM4AWS1szgJsDBU",
  "University of Virginia": "PVTI_lADOB2W_hM4AWS1szgJsDBQ",
  "Columbia University": "PVTI_lADOB2W_hM4AWS1szgJsDBM",
  "Nationwide Childrens Hospital": "PVTI_lADOB2W_hM4AWS1szgJsDBI",
  "University of Florida": "PVTI_lADOB2W_hM4AWS1szgJsDBA",
  "Massachusetts Institute of Technology": "PVTI_lADOB2W_hM4AWS1szgJsDA8"
};

var gh_field_id = {
  "Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4W0",
  "Data Submission Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4XU",
  "ETL Completion Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4XY",
  "Data Quality Dashboard Run Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4Xc",
  "Data Quality Dashboard Results Shared Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4Xg",
  "Achilles Run Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4Xk",
  "Achilles Results Shared Status": "PVTSSF_lADOB2W_hM4AWS1szgOP4Xo",
  "Data Submitted Date": "PVTF_lADOB2W_hM4AWS1szgOP4Xs",
  "ETL Completion Date": "PVTF_lADOB2W_hM4AWS1szgOP4Xw",
  "Data Quality Dashboard Run Date": "PVTF_lADOB2W_hM4AWS1szgOP4X0",
  "Data Quality Dashboard Results Shared Date": "PVTF_lADOB2W_hM4AWS1szgOP4X4",
  "Achilles Run Date": "PVTF_lADOB2W_hM4AWS1szgOP4X8",
  "Achilles Results Shared Date": "PVTF_lADOB2W_hM4AWS1szgOP4YA"
}

var gh_status_options = {
  "In Progress": "98236657",
  "Blocked": "00a2bac7",
  "Planning": "f187ab3d",
  "Completed": "67fa13c7"
}

var gh_dss_options = {
  "Not Started": "0b241ad1",
  "In Progress": "93305c0e",
  "Completed": "8fa956ee",
  "Blocked": "72e04098"
}

var gh_ecs_options = {
  "Not Started": "03d2e841",
  "In Progress": "8e903978",
  "Completed": "d85a9c22",
  "Blocked": "0748397c"
}

var gh_dru_options = {
  "Not Started": "2208c5f2",
  "In Progress": "36bc40d2",
  "Completed": "2c84b00e",
  "Blocked": "d82df3c8"
}

var gh_drs_options = {
  "Not Started": "bbeaffce",
  "In Progress": "c117a36e",
  "Completed": "c7f54e31",
  "Blocked": "dea493b1"
}

var gh_aru_options = {
  "Not Started": "8098a5df",
  "In Progress": "43acc310",
  "Completed": "15705d31",
  "Blocked": "f6935034"
}

var gh_ars_options = {
  "Not Started": "99f7c332",
  "In Progress": "eb983691",
  "Completed": "57bde420",
  "Blocked": "4b132ab8"
}


function multifield2md(txtbase, txtsub) {
  var mdarray = new Array();
  mdarray = txtbase.split(", ");
  var mdarraysub = new Array();
  mdarraysub = txtsub.split(", ");
  var md_checklist = ""
  var matched = false

  for (var counter = 0; counter < mdarray.length; counter = counter + 1) {
    matched = false
    for (var counter2 = 0; counter2 < mdarraysub.length; counter2 = counter2 + 1) {
      submit = mdarraysub[counter2]
      check = mdarray[counter]
      if (submit.match(check) == check) {
        str = "- [X] " + check 
        matched = true
      }  
    }
    if (matched == false) {
      str = "- [ ] " + check
    }
    md_checklist = md_checklist + str + "\n"
  }
  return md_checklist
}

function yesnocheckbox(txtbase, txtsub) {
  if (txtsub.match("Yes") == "Yes") {
    var checkboxout = "- [X] " +  txtbase
  } else {
    var checkboxout = "- [ ] " +  txtbase
  }
  if (txtsub.match("I don't know / Not applicable") == "I don't know / Not applicable") {
    checkboxout = checkboxout + " *UNKNOWN OR N/A*"
  }
  return checkboxout
}

function convertdate(dateinput) {
  if (dateinput.length > 1){
    var datearray = dateinput.split("/")
    var year = datearray[2]
    var month = datearray[0]
    if (month.length == 1){
      month = "0" + month
    }
    var day = datearray[1]
    if (day.length == 1){
      day = "0" + day
    }
    var dateoutput = year + "-" + month + "-" + day
  } else {
    var dateoutput = "NA"
  }
  return dateoutput
}

function convertdatetime(dateinput) {
  var datearray = dateinput.split("/")
  var year = datearray[2].split(' ')[0]
  var month = datearray[0]
  if (month.length == 1){
    month = "0" + month
  }
  var day = datearray[1]
  if (day.length == 1){
    day = "0" + day
  }
  var dateoutput = year + "-" + month + "-" + day
  return dateoutput
}

function onFormSubmit(e) {

  var getissue_pt = issuenum_pt[e.values[1]];
  var getissue_etl = issuenum_etl[e.values[1]];
  var getissue_res = issuenum_res[e.values[1]];
  var getissue_flw = issuenum_flw[e.values[1]];
  var getissue_img = issuenum_img[e.values[1]];

  // Main progress tracker issue update 

  
  var dct_checklist = multifield2md(dataclassificationtype, e.values[5]);
  var flw_checklist = multifield2md(flowsheetoptions, e.values[15]);
  var discussion_str = yesnocheckbox("Join the [GitHub Discussion](https://github.com/chorus-ai/StandardsModule/discussions/)!",e.values[25]);

  var title_pt = "[" + e.values[1] + "] " + "Progress Tracker";
  
  var body_pt = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
             "### Data Contributing Site\n\n" + 
              e.values[1] + "\n\n" +
              "### Site Main Contact\n\n" +
              e.values[2] + "\n\n" +
              "### ETL Representatives\n\n" +
              e.values[3] + "\n\n" + 
              "### Site Classification\n\n" +
              e.values[4] + "\n\n" +
              "### Most recent update included information about:\n\n" +
              yesnocheckbox("Structured EHR Data", e.values[52]) + "\n" +
              yesnocheckbox("Semi-Structured Flowsheet Data", e.values[51]) + "\n" +
              yesnocheckbox("Imaging and Waveform Data", e.values[53]) + "\n\n" +
              "### Mapping Overview:\n\n" + 
              "| Mapping Prioritization | Unmappable Codes | Mapping Metadata |\n" +
              "|---|---|---|\n" +
              "| "+e.values[10]+" | "+e.values[11]+" | "+e.values[12]+" | \n\n" +
              "### Site Flowsheet Overview:\n\n" + 
              flw_checklist + "\n\n" +
              "### Community Collaboration\n\n" +
              discussion_str + "\n\n" +
              "### Issue Links\n\n" +
              "  - https://github.com/chorus-ai/StandardsModule/issues/" + getissue_etl + "\n" +
              "  - https://github.com/chorus-ai/StandardsModule/issues/" + getissue_flw + "\n" +
              "  - https://github.com/chorus-ai/StandardsModule/issues/" + getissue_img + "\n" +
              "  - https://github.com/chorus-ai/StandardsModule/issues/" + getissue_res + "\n";
  
  var payload_pt = {
    "title": title_pt,
    "body": body_pt
  };
   
  var options_pt = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_pt)
      };

  Logger.log(payload_pt)

  var response_pt = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/StandardsModule/issues/" + getissue_pt, options_pt);

  // ETL Completion Issue Update

  var title_etl = "[" + e.values[1] + "] " + "Complete ETL: Structured";
  
  var body_etl = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "## Dataset profiling and documentation\n" +
      yesnocheckbox("Create data model documentation, sample data, data dictionaries, code lists, and other relevant information", e.values[26]) + "\n" +
      yesnocheckbox("Execute database profiling scan (WhiteRabbit) on source database", e.values[27]) + "\n" +
      yesnocheckbox("Prepare mapping approach/documents based on scan reports from database profiling scan", e.values[28]) + "\n\n" +
      "## Generation of the ETL Design\n" +
      yesnocheckbox("Mapping workshop with all relevant parties to (1) understand the source, (2) define the scope of source data to be transformed, (3) define acceptance criteria for OMOP output", e.values[29]) + "\n" +
      "  - Output: draft mapping document\n" + 
      yesnocheckbox("Finalize mapping document", e.values[30]) + "\n" +
      "  - Integrate all notes/documentation from workshop\n" +
      "  - Work through mappings and verify, update, fill in gaps\n" +
      "  - Meetings/emails with data contact/technical contact (TC) as needed\n\n" +
      "## Technical architecture design\n" +
      yesnocheckbox("Continuous Integration, Continuous Deployment (CI/CD)", e.values[32]) + "\n" +
      "  - Decide on ETL dev/deployment flow\n" +
      "  - Put version control mechanisms in place\n" +
      yesnocheckbox("OHDSI Ecosystem Design", e.values[33]) + "\n" +
      "  - Evaluate infrastructure needed\n" +
      "  - Create infrastructure design documentation\n\n" +
      yesnocheckbox("Technical ETL Development", e.values[34]) + "\n" +
      yesnocheckbox("Implement ETL (Preferred Language/Structure?)", e.values[31]) + "\n" +
      yesnocheckbox("Update ETL based on testing/QA/feedback", e.values[35]) + "\n\n" +
      "## Setting up of Infrastructure\n" +
      yesnocheckbox("Deploy core servers and associated services based on infrastructure design", e.values[36]) + "\n\n" +
      "## ETL Testing and Validation\n" +
      yesnocheckbox("QA/Acceptance testing", e.values[37]) + "\n" +
      "  - Evaluate accuracy and completeness of mapping\n" +
      "  - Review and approval by Data Owner\n\n" +
      "## Documentation\n" +
      yesnocheckbox("Transformation/Technical Documentation", e.values[38]) + "\n\n" +
      "## Project Management\n" +
      yesnocheckbox("Organization and follow-up moments on tasks and milestones", e.values[39]);
  
  var payload_etl = {
    "title": title_etl,
    "body": body_etl
  };
   
  var options_etl = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_etl)
      };

  Logger.log(payload_etl)
  var update_etl_issue = e.values[52]
  if (update_etl_issue.match("Yes") == "Yes") {
    var response_etl = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/StandardsModule/issues/" + getissue_etl, options_etl);
  }

  // Flowsheet Issue Update

  var title_flw = "[" + e.values[1] + "] " + "Flowsheets";
  
  var body_flw = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "## Source Data Integrations and Semantic Mapping\n" +
      yesnocheckbox("Identify which codes are already mapped to standard vocabulary", e.values[40]) + "\n" +
      yesnocheckbox("Identify code types for codes that need to be mapped", e.values[41]) + "\n" +
      yesnocheckbox("Translation of code description/phrases to English, if/as needed", e.values[42]) + "\n" +
      yesnocheckbox("Create proposed code mappings", e.values[43]) + "\n" +
      yesnocheckbox("Generate mappings for data coming out of flowsheets (together with consortium)", e.values[44]) + "\n" +
      yesnocheckbox("Someone on site with clinical expertise is capable of reviewing and approving flowsheet mappings", e.values[45]);

  
  var payload_flw = {
    "title": title_flw,
    "body": body_flw
  };
   
  var options_flw = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_flw)
      };

  Logger.log(payload_flw)
  var update_flw_issue = e.values[51]
  if (update_flw_issue.match("Yes") == "Yes") {
    var response_flw = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/StandardsModule/issues/" + getissue_flw, options_flw);
  }

  // Results Issue Update

  var title_res = "[" + e.values[1] + "] " + "Results Sharing";
  var data_freq = multifield2md(frequencies, e.values[48]);
  var qc_freq = multifield2md(frequencies, e.values[49]);
  
  var body_res = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "### Data Submission Protocol\n" +
      yesnocheckbox("Protocols and processes for submitting OMOP data to the consortium are clear", e.values[46]) + "\n" +
      yesnocheckbox("Protocols and processes for submitting DQD and Achilles results (QC & characterization, respectively) to the consortium are clear", e.values[47]) + "\n" +
      "### Data Submission Frequency\n" +
      "Expected frequency of data submission to CHoRUS Bridge2AI\n" +
      data_freq + "\n" +
      "### QC Submission Frequency\n" +
      "Expected frequency of qc submission to CHoRUS Bridge2AI\n" +
      qc_freq;

  
  var payload_res = {
    "title": title_res,
    "body": body_res
  };
   
  var options_res = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_res)
      };

  Logger.log(payload_res)
  var update_res_issue = e.values[54]
  if (update_res_issue.match("Yes") == "Yes") {
    var response_res = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/StandardsModule/issues/" + getissue_res, options_res);
  }

  // Imaging Issue Update

  var title_img = "[" + e.values[1] + "] " + "Imaging and Waveform";
  
  var body_img = "*Updated via Google Form Submission: "  + e.values[0] + "*\n\n" +
      "### Types and Formats of Imaging Data \n" +
      e.values[55] + "\n\n" +
      "### Types and Formats of Waveform Data \n" +
      e.values[56] + "\n";

  
  var payload_img = {
    "title": title_img,
    "body": body_img
  };
   
  var options_img = {
        "method": "PATCH",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_img)
      };

  Logger.log(payload_img)
  var update_img_issue = e.values[53]
  if (update_img_issue.match("Yes") == "Yes") {
    var response_res = UrlFetchApp.fetch("https://api.github.com/repos/chorus-ai/StandardsModule/issues/" + getissue_img, options_img);
  }




  // Update statuses

  var field_ids = ["Status",
                  "Data Submission Status",
                  "ETL Completion Status",
                  "Data Quality Dashboard Run Status",
                  "Data Quality Dashboard Results Shared Status",
                  "Achilles Run Status",
                  "Achilles Results Shared Status"];

  var value_ids = [gh_status_options, 
                  gh_dss_options, 
                  gh_ecs_options, 
                  gh_dru_options, 
                  gh_drs_options, 
                  gh_aru_options, 
                  gh_ars_options];

  var input_values = [e.values[50],
                      e.values[7],
                      e.values[13],
                      e.values[16],
                      e.values[18],
                      e.values[22],
                      e.values[20]];

  var get_gh_item = gh_item_id[e.values[1]];

  var date_ids = [
    "Data Submitted Date",
    "ETL Completion Date",
    "Data Quality Dashboard Run Date",
    "Data Quality Dashboard Results Shared Date",
    "Achilles Run Date",
    "Achilles Results Shared Date"
  ]
  var input_dates = [convertdate(e.values[8]),
                    convertdate(e.values[14]),
                    convertdate(e.values[17]),
                    convertdate(e.values[19]),
                    convertdate(e.values[23]),
                    convertdate(e.values[21])]

  // Loop over status updates (columns in project)

  for (var looper = 0; looper < field_ids.length; looper = looper + 1) {
    var loop_field = field_ids[looper]
    var loop_field_id = gh_field_id[loop_field]
    var loop_field_dict = value_ids[looper]
    var field_value_input = input_values[looper]
    var field_value_id = loop_field_dict[field_value_input]

    var query = "mutation{" +
                " updateProjectV2ItemFieldValue(" + 
                " input: {" +
                "   projectId: \"PVT_kwDOB2W_hM4AWS1s\" " +
                "   itemId: \"" + get_gh_item + "\" " +
                "   fieldId: \"" + loop_field_id + "\" " +
                "   value: {" +
                "     singleSelectOptionId: \"" + field_value_id + "\" " +
                "   }" +
                " }" +
                " ) { projectV2Item { id } } }";

    var payload_update = {
    "query": query
    };

    var options_query = {
        "method": "POST",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_update)
    };
    Logger.log(loop_field)
    Logger.log(options_query)
    var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
    Logger.log(response_update)
    
  }

  // Loop over date updates (timepoints on roadmap)
  for (var looper2 = 0; looper2 < date_ids.length; looper2 = looper2 + 1) {
    var loop_field = date_ids[looper2]
    var loop_field_id = gh_field_id[loop_field]
    var field_value_input = input_dates[looper2]

    var query = "mutation{" +
                " updateProjectV2ItemFieldValue(" + 
                " input: {" +
                "   projectId: \"PVT_kwDOB2W_hM4AWS1s\" " +
                "   itemId: \"" + get_gh_item + "\" " +
                "   fieldId: \"" + loop_field_id + "\" " +
                "   value: {" +
                "     date: \"" + field_value_input + "\" " +
                "   }" +
                " }" +
                " ) { projectV2Item { id } } }";

    var payload_update = {
    "query": query
    };

    var options_query = {
        "method": "POST",
        "headers": {
            "authorization": "token "+token,
            "Accept": "application/vnd.github.v3+json",
        },
        "contentType": "application/json",
        "payload": JSON.stringify(payload_update)
    };
    var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
    Logger.log(response_update)
    
  }

  // General Discussion Questions

  var disc_gen_check = e.values[58]
  if (disc_gen_check.match("Yes") == "Yes") {
    var disc_gen_title = "[" + e.values[1] + "] " + e.values[71]
    var disc_gen_body = e.values[57]

    var disc_gen_query = "mutation{"+
                              " createDiscussion(input: {"+
                              "   repositoryId: \"R_kgDOKbcsKQ\","+
                              "   categoryId: \"DIC_kwDOKbcsKc4CZ34f\"," + 
                              "   body: \""+ disc_gen_body + "\"," + 
                              "   title: \""+ disc_gen_title + "\"" + 
                              "   }" + 
                              " )" + 
                              "   {"+
                              "    discussion {"+
                              "     id"+
                              "    }"+
                              "   }"+
                              "}"
    var payload_gen_etl = {
      "query": disc_gen_query
      };

      var options_query = {
          "method": "POST",
          "headers": {
              "authorization": "token "+token,
              "Accept": "application/vnd.github.v3+json",
          },
          "contentType": "application/json",
          "payload": JSON.stringify(payload_gen_etl)
      };
      Logger.log(options_query)
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
      Logger.log(response_update)
  }

  // EHR Discussion Questions

  var disc_etl_check = e.values[60]
  if (disc_etl_check.match("Yes") == "Yes") {
    var disc_etl_title = "[" + e.values[1] + "] " + e.values[69]
    var disc_etl_body = e.values[59]
    var disc_etl_query = "mutation{"+
                              " createDiscussion(input: {"+
                              "   repositoryId: \"R_kgDOKbcsKQ\","+
                              "   categoryId: \"DIC_kwDOKbcsKc4CZ34g\"," + 
                              "   body: \""+ disc_etl_body + "\"," + 
                              "   title: \""+ disc_etl_title + "\"" + 
                              "   }" + 
                              " )" + 
                              "   {"+
                              "    discussion {"+
                              "     id"+
                              "    }"+
                              "   }"+
                              "}"
    var payload_disc_etl = {
      "query": disc_etl_query
      };

      var options_query = {
          "method": "POST",
          "headers": {
              "authorization": "token "+token,
              "Accept": "application/vnd.github.v3+json",
          },
          "contentType": "application/json",
          "payload": JSON.stringify(payload_disc_etl)
      };
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
      Logger.log(response_update)
  }

  // Flowsheet Discussion Questions

  var disc_flw_check = e.values[62]
  if (disc_flw_check.match("Yes") == "Yes") {
    var disc_flw_title = "[" + e.values[1] + "] " + e.values[68]
    var disc_flw_body = e.values[61]
    var disc_flw_query = "mutation{"+
                              " createDiscussion(input: {"+
                              "   repositoryId: \"R_kgDOKbcsKQ\","+
                              "   categoryId: \"DIC_kwDOKbcsKc4CZ35R\"," + 
                              "   body: \""+ disc_flw_body + "\"," + 
                              "   title: \""+ disc_flw_title + "\"" + 
                              "   }" + 
                              " )" + 
                              "   {"+
                              "    discussion {"+
                              "     id"+
                              "    }"+
                              "   }"+
                              "}"
    var payload_flw_etl = {
      "query": disc_flw_query
      };

      var options_query = {
          "method": "POST",
          "headers": {
              "authorization": "token "+token,
              "Accept": "application/vnd.github.v3+json",
          },
          "contentType": "application/json",
          "payload": JSON.stringify(payload_flw_etl)
      };
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
      Logger.log(response_update)
  }

  // Imaging/Waveform Discussion Questions

  var disc_img_check = e.values[64]
  if (disc_img_check.match("Yes") == "Yes") {
    var disc_img_title = "[" + e.values[1] + "] " + e.values[67]
    var disc_img_body = e.values[63]
    var disc_img_query = "mutation{"+
                              " createDiscussion(input: {"+
                              "   repositoryId: \"R_kgDOKbcsKQ\","+
                              "   categoryId: \"DIC_kwDOKbcsKc4CZ35Y\"," + 
                              "   body: \""+ disc_img_body + "\"," + 
                              "   title: \""+ disc_img_title + "\"" + 
                              "   }" + 
                              " )" + 
                              "   {"+
                              "    discussion {"+
                              "     id"+
                              "    }"+
                              "   }"+
                              "}"
    var payload_img_etl = {
      "query": disc_img_query
      };

      var options_query = {
          "method": "POST",
          "headers": {
              "authorization": "token "+token,
              "Accept": "application/vnd.github.v3+json",
          },
          "contentType": "application/json",
          "payload": JSON.stringify(payload_img_etl)
      };
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
      Logger.log(response_update)
  }

  // Results Sharing Discussion Questions

  var disc_res_check = e.values[66]
  if (disc_res_check.match("Yes") == "Yes") {
    var disc_res_title = "[" + e.values[1] + "] " + e.values[70]
    var disc_res_body = e.values[65]
    var disc_res_query = "mutation{"+
                              " createDiscussion(input: {"+
                              "   repositoryId: \"R_kgDOKbcsKQ\","+
                              "   categoryId: \"DIC_kwDOKbcsKc4CZ35f\"," + 
                              "   body: \""+ disc_res_body + "\"," + 
                              "   title: \""+ disc_res_title + "\"" + 
                              "   }" + 
                              " )" + 
                              "   {"+
                              "    discussion {"+
                              "     id"+
                              "    }"+
                              "   }"+
                              "}"
    var payload_res_etl = {
      "query": disc_res_query
      };

      var options_query = {
          "method": "POST",
          "headers": {
              "authorization": "token "+token,
              "Accept": "application/vnd.github.v3+json",
          },
          "contentType": "application/json",
          "payload": JSON.stringify(payload_res_etl)
      };
      var response_update = UrlFetchApp.fetch("https://api.github.com/graphql", options_query);
      Logger.log(response_update)
  }
}



