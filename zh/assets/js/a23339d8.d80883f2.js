"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[41682],{97038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));n(61839);const r={title:"Azure DevOps",description:"Azure DevOps Plugin\n"},l=void 0,s={unversionedId:"Plugins/azuredevops",id:"Plugins/azuredevops",title:"Azure DevOps",description:"Azure DevOps Plugin\n",source:"@site/docs/Plugins/azuredevops.md",sourceDirName:"Plugins",slug:"/Plugins/azuredevops",permalink:"/zh/docs/next/Plugins/azuredevops",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/azuredevops.md",tags:[],version:"current",frontMatter:{title:"Azure DevOps",description:"Azure DevOps Plugin\n"},sidebar:"docsSidebar",previous:{title:"Plugins",permalink:"/zh/docs/next/Plugins"},next:{title:"Bamboo(WIP)",permalink:"/zh/docs/next/Plugins/bamboo"}},o={},u=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This plugin collects Azure DevOps data through Azure DevOps REST API."),(0,i.kt)("h2",{id:"entities"},"Entities"),(0,i.kt)("p",null,"Check out the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/next/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Azure DevOps entities")," collected by this plugin."),(0,i.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,i.kt)("p",null,"Right now, this plugin supports only full refresh.\nCheck out the ","[data refresh policy]","(/zh/docs/next/Overview/SupportedDataSources#Azure DevOps) of this plugin."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Metrics that can be calculated based on the data collected from Azure DevOps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/CommitCount"},"Commit Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/CommitAuthorCount"},"Commit Author Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/AddedLinesOfCode"},"Added Lines of Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/DeletedLinesOfCode"},"Deleted Lines of Code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/BuildCount"},"Build Count")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/BuildDuration"},"Build Duration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/BuildSuccessRate"},"Build Success Rate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/next/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring Azure DevOps via ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/next/Configuration/AzureDevOps"},"config-ui"),"."),(0,i.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,i.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,i.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "MY PIPELINE",\n  "plan": [\n    [\n      {\n        "plugin": "azuredevops",\n        "options": {\n          "connectionId": 1,\n          "scopeId": "orgname/reponame",\n          "transformationRules": {\n            "deploymentPattern": "",\n            "productionPattern": ""\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')))}d.isMDXComponent=!0}}]);