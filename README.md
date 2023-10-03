# CHoRUS Bridge2AI Standards Module

## Progress Tracking for Standards Module

### Purpose
This framework provides contributing sites an easy way to report progress in standardizing their data contributions to Bridge2AI.

This framework provides a **workspace** where sites can manually track their progress, keep notes, and reach out to the Standards Module (SM) for assistance. It also equips the SM with tools for overseeing the progress and challenges of multiple sites at once. 
  
### Overview
This framework solves three problems for the SM and the Bridge2AI contributing sites:
1) **Major milestones**: SM seeks to provide sites with a list of major milestones involved in the ETL development, use of OHDSI tools, and concept mapping necessary to standardize data for contribution to CHoRUS Bridge2AI.
2) **Progress monitoring**: SM needs to understand the overall and individual status of sites' progress in order to better tailor support to the entire group and specific sites.
3) **Discussion platform**: SM wants to host a discussion board or forum where sites can post questions or present topics for discussion with other sites and SM simultaneously.

To address these challenges, the SM introduces the following solutions:
1) **Major milestones**: The SM provides a high-level checklist of general ETL tasks to guide sites' reporting throughout the process.
2) **Progress tracking**: SM makes sites' checklists accessible to understand their OMOP transformation progress and challenges. This visibility enables tailored support for each site and content addressing common issues.
3) **Discussion forum integration**: The framework integrates with GitHub Discussions, offering a platform for sites to post questions and receive answers from SM or other sites. This integration connects discussions to issues in the Progress Tracker or Checklist and allows the creation of new topics from posted questions.

> _Please note:_ The major milestones are meant to mirror the _general_ standardization process at a _high level_ in order to guide structured progress reporting. They are _not_ meant to provide a detailed set of tasks needed to complete an OMOP ETL.

### Site Instructions
This framework uses a progress tracking system categorized into two main categories, each containing issues attached to each site's name:
1) **Milestone issues** (**Complete ETL**, **Results Sharing**, **Flowsheets**): these issues come with high-level checklists for general steps involved with the Bridge2AI data standardization process. Each issue is connected to a single milestone with a due date and a progress percentage display.
2) **Progress Tracker issue**: this single issue serves as the central hub for tracking a site's progress:
    * Serves as a landing page for each site.
    * Includes a site profile, links to the GitHub Discussions page, and lists the three milestone issues.
    * Is associated with a project that tracks specific progress attributes (e.g., data submission date, Achilles work status, etc.).

### Engagement and Benefits
The benefits a site gains from this framework are directly related to its level of engagement.
Here's how to get the most from the framework:

1. **Progress tracking**: sites should assign representatives to track their progress using the checklists. Regularly updating the checklists provides valuable insights to the SM.
2. **Regular comments**: sites should leave comments on the issues at regular intervals (weekly or bi-weekly) or whenever encountering challenges. These comments help SM provide tailored support.
3. **Status labels**: sites should use the issue labels to report their status. Labels include:  
    * **Blocked**: indicates that a site cannot proceed with work. Comments can specify whether the blockage is external or something the SM can assist with.
    * **Help Wanted**: signals that a site needs SM assistance. The reason for help can be explained in a comment.
    * **Under Review**: marks that a site has requested feedback and progress is paused until feedback is received.
    
Using these labels in conjunction with comments helps the SM understand a site's current situation and support needs.

Ultimately, any interaction with the issues, whether it is simply progress updates via comments on the Progress Tracker issue, checking boxes in the milestone issues, utilizing labels, or a combination of these methods, provides useful feedback to SM on where sites are in their standardization process.
