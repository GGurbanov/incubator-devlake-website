"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[61071],{29846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(87462),n=(a(67294),a(3905));a(61839);const r={title:"Bamboo",description:"Bamboo Plugin\n"},i=void 0,s={unversionedId:"Plugins/bamboo",id:"version-v0.21/Plugins/bamboo",title:"Bamboo",description:"Bamboo Plugin\n",source:"@site/versioned_docs/version-v0.21/Plugins/bamboo.md",sourceDirName:"Plugins",slug:"/Plugins/bamboo",permalink:"/docs/v0.21/Plugins/bamboo",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/Plugins/bamboo.md",tags:[],version:"v0.21",frontMatter:{title:"Bamboo",description:"Bamboo Plugin\n"},sidebar:"docsSidebar",previous:{title:"Azure DevOps",permalink:"/docs/v0.21/Plugins/azuredevops"},next:{title:"BitBucket Cloud",permalink:"/docs/v0.21/Plugins/bitbucket"}},l={},p=[{value:"Summary",id:"summary",level:2},{value:"Supported Versions",id:"supported-versions",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"API Sample Request",id:"api-sample-request",level:2},{value:"References",id:"references",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This plugin collects Bamboo's CI data through ",(0,n.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/server/bamboo/rest/"},"API"),". It then computes and visualizes various DevOps metrics from the Bamboo data, which helps tech leads, QA and DevOps engineers, and project managers to answer questions such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What is the deployment frequency of your team?"),(0,n.kt)("li",{parentName:"ul"},"How long does it take for your codes to get deployed?")),(0,n.kt)("h2",{id:"supported-versions"},"Supported Versions"),(0,n.kt)("p",null,"Only Bamboo v6.8.1+ is supported as of v0.20. Check ",(0,n.kt)("a",{parentName:"p",href:"https://devlake.apache.org/docs/Overview/SupportedDataSources#data-sources-and-data-plugins"},"this doc")," for more details."),(0,n.kt)("h2",{id:"entities"},"Entities"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v0.21/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Bamboo entities")," collected by this plugin."),(0,n.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v0.21/Overview/SupportedDataSources#bamboo"},"data refresh policy")," of this plugin."),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,"Metrics that can be calculated based on the data collected from Bamboo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/DeploymentFrequency"},"DORA - Deployment Frequency")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/LeadTimeForChanges"},"DORA - Lead Time for Changes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/MTTR"},"DORA - Median Time to Restore Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.21/Metrics/CFR"},"DORA - Change Failure Rate"))),(0,n.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,n.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,n.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "project1-BLUEPRINT",\n  "blueprintId": 1,\n  "plan": [\n    [\n      {\n        "plugin": "bamboo",\n        "options": {\n          "connectionId": 1,\n          "key": "TEST",\n          "transformationRules":{\n            "deploymentPattern":"",\n            "productionPattern":"",\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/v0.21/DeveloperManuals/DeveloperSetup#references"},"references"))))}c.isMDXComponent=!0}}]);