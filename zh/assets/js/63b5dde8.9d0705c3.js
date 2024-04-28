"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[20368],{99481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));a(61839);const l={title:"Environment Variables",sidebar_position:6,description:"How to set up environment variables for DevLake"},s=void 0,r={unversionedId:"GettingStarted/Environment",id:"GettingStarted/Environment",title:"Environment Variables",description:"How to set up environment variables for DevLake",source:"@site/docs/GettingStarted/Environment.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Environment",permalink:"/zh/docs/GettingStarted/Environment",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/Environment.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Environment Variables",sidebar_position:6,description:"How to set up environment variables for DevLake"},sidebar:"docsSidebar",previous:{title:"Security and Authentication",permalink:"/zh/docs/GettingStarted/Authentication"},next:{title:"Config UI",permalink:"/zh/docs/Config UI"}},i={},u=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"ENABLE_SUBTASKS_BY_DEFAULT",id:"enable_subtasks_by_default",level:3},{value:"How to set",id:"how-to-set",level:4},{value:"How to take effect",id:"how-to-take-effect",level:4}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document explains how to set environment variables for Apache DevLake and what environment variables can be set."),(0,o.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("h3",{id:"enable_subtasks_by_default"},"ENABLE_SUBTASKS_BY_DEFAULT"),(0,o.kt)("p",null,"This environment variable is used to enable or disable the execution of subtasks."),(0,o.kt)("h4",{id:"how-to-set"},"How to set"),(0,o.kt)("p",null,"The format is as follows: plugin_name1:subtask_name1:enabled_value,plugin_name2:subtask_name2:enabled_value,plugin_name3:subtask_name3:enabled_value"),(0,o.kt)("p",null,"Guidance on locating the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/blob/release-v1.0/backend/plugins/jira/tasks/issue_changelog_collector.go#L41"},"plugin_name and subtask_name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"plugin_name: Represents the plugin's name, such as 'jira' for the Jira plugin."),(0,o.kt)("li",{parentName:"ul"},"subtask_name: Denotes the subtask's name, like 'collectIssueChangelogs' for the Jira plugin.\"  ")),(0,o.kt)("p",null,"Example 1: Enable some subtasks that are closed by default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'ENABLE_SUBTASKS_BY_DEFAULT="jira:collectIssueChangelogs:true,jira:extractIssueChangelogs:true,jira:convertIssueChangelogs:true,tapd:collectBugChangelogs:true,tapd:extractBugChangelogs:true,tapd:convertBugChangelogs:true,zentao:collectBugRepoCommits:true,zentao:extractBugRepoCommits:true,zentao:convertBugRepoCommits:true,zentao:collectStoryRepoCommits:true,zentao:extractStoryRepoCommits:true,zentao:convertStoryRepoCommits:true,zentao:collectTaskRepoCommits:true,zentao:extractTaskRepoCommits:true,zentao:convertTaskRepoCommits:true"\n')),(0,o.kt)("p",null,"Example 2: Close some subtasks that are executed by default"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'ENABLE_SUBTASKS_BY_DEFAULT="github_graphql:Collect Job Runs:false,github_graphql:Extract Job Runs:false,github_graphql:Convert Job Runs:false"\n')),(0,o.kt)("h4",{id:"how-to-take-effect"},"How to take effect"),(0,o.kt)("p",null,"After setting the environment variable, restart the DevLake service to take effect."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Docker Compose, run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose down")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"),"."),(0,o.kt)("li",{parentName:"ul"},"For Helm, run ",(0,o.kt)("inlineCode",{parentName:"li"},"helm upgrade --install devlake apache/devlake"),".")))}c.isMDXComponent=!0}}]);