"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[21458],{12358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var i=n(87462),o=(n(67294),n(3905));n(61839);const a={title:"Opsgenie",sidebar_position:11,description:"Config UI instruction for Opsgenie"},s=void 0,c={unversionedId:"Configuration/Opsgenie",id:"version-v0.21/Configuration/Opsgenie",title:"Opsgenie",description:"Config UI instruction for Opsgenie",source:"@site/versioned_docs/version-v0.21/Configuration/Opsgenie.md",sourceDirName:"Configuration",slug:"/Configuration/Opsgenie",permalink:"/docs/v0.21/Configuration/Opsgenie",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.21/Configuration/Opsgenie.md",tags:[],version:"v0.21",sidebarPosition:11,frontMatter:{title:"Opsgenie",sidebar_position:11,description:"Config UI instruction for Opsgenie"},sidebar:"docsSidebar",previous:{title:"GitLab",permalink:"/docs/v0.21/Configuration/GitLab"},next:{title:"Jenkins",permalink:"/docs/v0.21/Configuration/Jenkins"}},l={},r=[{value:"Step 1 - Add Data Connections",id:"step-1---add-data-connections",level:2},{value:"Step 1.1 - Authentication",id:"step-11---authentication",level:3},{value:"Connection Name",id:"connection-name",level:4},{value:"Endpoint URL",id:"endpoint-url",level:4},{value:"API Access Key",id:"api-access-key",level:4},{value:"Proxy URL (Optional)",id:"proxy-url-optional",level:4},{value:"Fixed Rate Limit (Optional)",id:"fixed-rate-limit-optional",level:4},{value:"Test and Save Connection",id:"test-and-save-connection",level:4},{value:"Step 1.2 - Add Data Scopes",id:"step-12---add-data-scopes",level:3},{value:"Services",id:"services",level:4},{value:"Step 2 - Collect Data in a Project",id:"step-2---collect-data-in-a-project",level:2},{value:"Step 2.1 - Create a Project",id:"step-21---create-a-project",level:3},{value:"Step 2.2 - Add a Opsgenie Connection",id:"step-22---add-a-opsgenie-connection",level:3},{value:"Step 2.3 - Set the Sync Policy",id:"step-23---set-the-sync-policy",level:3},{value:"Step 2.4 - Start Data Collection",id:"step-24---start-data-collection",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:r};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Visit Config UI at: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4000"),"."),(0,o.kt)("h2",{id:"step-1---add-data-connections"},"Step 1 - Add Data Connections"),(0,o.kt)("p",null,"On the Connections page, you can select Opsgenie and create a new connection on it."),(0,o.kt)("h3",{id:"step-11---authentication"},"Step 1.1 - Authentication"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"opsgenie-add-data-connections",src:n(29025).Z,width:"812",height:"700"})),(0,o.kt)("h4",{id:"connection-name"},"Connection Name"),(0,o.kt)("p",null,"Give your connection a unique name to help you identify it in the future."),(0,o.kt)("h4",{id:"endpoint-url"},"Endpoint URL"),(0,o.kt)("p",null,"Opsgenie makes available two types of REST API endpoints, US and EU, eg. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.opsgenie.com/")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.eu.opsgenie.com/"),". You can choose wich instance by selecting the due radio input."),(0,o.kt)("h4",{id:"api-access-key"},"API Access Key"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"API key management")," section of your Atlassian Opsgenie account settings, you can create a API key to manage your requests."),(0,o.kt)("p",null,"Learn about ",(0,o.kt)("a",{parentName:"p",href:"https://support.atlassian.com/opsgenie/docs/api-key-management/"},"how to create a Opsgenie API key"),". The following permissions are required to collect data from repositories:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Read")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Create and Update")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Configuration Access"))),(0,o.kt)("h4",{id:"proxy-url-optional"},"Proxy URL (Optional)"),(0,o.kt)("p",null,"If you are behind a corporate firewall or VPN you may need to utilize a proxy server. Enter a valid proxy server address on your network, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://your-proxy-server.com:1080")),(0,o.kt)("h4",{id:"fixed-rate-limit-optional"},"Fixed Rate Limit (Optional)"),(0,o.kt)("p",null,"DevLake uses a dynamic rate limit to collect Opsgenie data. You can adjust the rate limit if you want to increase or lower the speed."),(0,o.kt)("p",null,"Opsgenie doesn't establishes a maximum rate limit for its API request, thus you should check this ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.opsgenie.com/docs/api-rate-limiting"},"detailed doc"))," on how to calculate your rate limit, based on number of user and account plan that you hired. For now, the default rate limit is in 6,000 request/hour (100 request/minute)."),(0,o.kt)("h4",{id:"test-and-save-connection"},"Test and Save Connection"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Connection"),", if the connection is successful, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Connection")," to add the connection."),(0,o.kt)("h3",{id:"step-12---add-data-scopes"},"Step 1.2 - Add Data Scopes"),(0,o.kt)("h4",{id:"services"},"Services"),(0,o.kt)("p",null,"Choose the Opsgenie services you wish to collect either by finding them in the miller column, or searching."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"opsgenie-set-data-scope",src:n(24635).Z,width:"811",height:"547"})),(0,o.kt)("h2",{id:"step-2---collect-data-in-a-project"},"Step 2 - Collect Data in a Project"),(0,o.kt)("h3",{id:"step-21---create-a-project"},"Step 2.1 - Create a Project"),(0,o.kt)("p",null,"Collecing Opsgenie data requires creating a project first. You can visit the Project page from the side menu and create a new project by following the instructions on the user interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-a-project",src:n(41537).Z,width:"1624",height:"684"})),(0,o.kt)("h3",{id:"step-22---add-a-opsgenie-connection"},"Step 2.2 - Add a Opsgenie Connection"),(0,o.kt)("p",null,"You can add a previously configured Opsgenie connection to the project and select the boards for which you wish to collect the data for.\nPlease note: if you don't see the services you are looking for, please check if you have added them to the connection first."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add-a-connection",src:n(19562).Z,width:"2394",height:"624"})),(0,o.kt)("h3",{id:"step-23---set-the-sync-policy"},"Step 2.3 - Set the Sync Policy"),(0,o.kt)("p",null,"There are three settings for Sync Policy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Time Range: You can select the time range of the data you wish to collect. The default is set to the past six months."),(0,o.kt)("li",{parentName:"ul"},"Sync Frequency: You can choose how often you would like to sync your data in this step by selecting a sync frequency option or enter a cron code to specify your prefered schedule."),(0,o.kt)("li",{parentName:"ul"},"Skip Failed Tasks: sometime a few tasks may fail in a long pipeline; you can choose to skip them to avoid spending more time in running the pipeline all over again.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sync-policy",src:n(39529).Z,width:"2428",height:"336"})),(0,o.kt)("h3",{id:"step-24---start-data-collection"},"Step 2.4 - Start Data Collection"),(0,o.kt)("p",null,'Click on "Collect Data" to start collecting data for the whole project. You can check the status in the Status tab on the same page.\n',(0,o.kt)("img",{alt:"collect-data",src:n(36418).Z,width:"2410",height:"664"})),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you run into any problem, please check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.21/Troubleshooting/Configuration"},"Troubleshooting")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}d.isMDXComponent=!0},19562:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-a-connection-project-4032e8e9a72cb4a6df81b6ced714205e.png"},36418:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/collect-data-5919e2e6ddad525bca4fbcb46e672aff.png"},41537:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-a-project-20e220196044bbf9be564773c45c5990.png"},24635:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/opsgenie-add-data-scopes-3190f3235564d4cc411492bc97a83009.png"},29025:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/opsgenie-create-a-connection-d5d467f71e6321c9d5543bd8f2209294.png"},39529:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sync-policy-2ac941b2918fc873626375dfe4cbf5f5.png"}}]);