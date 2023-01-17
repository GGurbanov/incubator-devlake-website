"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[9489],{57585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));n(61839);const r={title:"Jira",description:"Jira Plugin\n"},l=void 0,s={unversionedId:"Plugins/jira",id:"Plugins/jira",title:"Jira",description:"Jira Plugin\n",source:"@site/docs/Plugins/jira.md",sourceDirName:"Plugins",slug:"/Plugins/jira",permalink:"/docs/next/Plugins/jira",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/Plugins/jira.md",tags:[],version:"current",frontMatter:{title:"Jira",description:"Jira Plugin\n"},sidebar:"docsSidebar",previous:{title:"Jenkins",permalink:"/docs/next/Plugins/jenkins"},next:{title:"PagerDuty(WIP)",permalink:"/docs/next/Plugins/pagerduty"}},o={},u=[{value:"Summary",id:"summary",level:2},{value:"Entities",id:"entities",level:2},{value:"Data Refresh Policy",id:"data-refresh-policy",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Configuration",id:"configuration",level:2},{value:"API Sample Request",id:"api-sample-request",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This plugin collects Jira data through Jira REST API. It then computes and visualizes various engineering metrics from the Jira data."),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/Overview/SupportedDataSources#data-collection-scope-by-each-plugin"},"Jira entities")," collected by this plugin."),(0,a.kt)("h2",{id:"data-refresh-policy"},"Data Refresh Policy"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/Overview/SupportedDataSources#jira"},"data refresh policy")," of this plugin."),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Metrics that can be calculated based on the data collected from Jira:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/RequirementCount"},"Requirement Count")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/RequirementLeadTime"},"Requirement Lead Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/RequirementDeliveryRate"},"Requirement Delivery Rate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/RequirementGranularity"},"Requirement Granularity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/BugAge"},"Bug Age")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/BugCountPer1kLinesOfCode"},"Bug Count per 1k Lines of Code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/IncidentAge"},"Incident Age")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/Metrics/IncidentCountPer1kLinesOfCode"},"Incident Count per 1k Lines of Code"))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configuring Jira via ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/UserManuals/ConfigUI/Jira"},"config-ui"),"."),(0,a.kt)("li",{parentName:"ul"},"Configuring Jira via Config UI's ",(0,a.kt)("a",{parentName:"li",href:"/docs/next/UserManuals/ConfigUI/AdvancedMode#4-jira"},"advanced mode"),".")),(0,a.kt)("h2",{id:"api-sample-request"},"API Sample Request"),(0,a.kt)("p",null,"You can trigger data collection by making a POST request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/pipelines"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl \'http://localhost:8080/pipelines\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'\n{\n  "name": "MY PIPELINE",\n  "plan": [\n    [\n      {\n        "plugin": "jira",\n        "options": {\n          "connectionId": 1,\n          "boardId": 8,\n          "transformationRules": {\n            "epicKeyField": "",\n            "storyPointField": "",\n            "remotelinkCommitShaPattern": "",\n            "typeMappings": {\n              "10040": {\n                "standardType": "Incident",\n                "statusMappings": null\n              }\n            }\n          }\n        }\n      }\n    ]\n  ]\n}\n\'\n')))}d.isMDXComponent=!0}}]);