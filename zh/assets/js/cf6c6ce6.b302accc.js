"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[46813],{37358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(61839);const o={title:"Security and Authentication",sidebar_position:5,description:"How to secure your deployment and enable the Authentication"},r=void 0,l={unversionedId:"GettingStarted/Authentication",id:"GettingStarted/Authentication",title:"Security and Authentication",description:"How to secure your deployment and enable the Authentication",source:"@site/docs/GettingStarted/Authentication.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/Authentication",permalink:"/zh/docs/GettingStarted/Authentication",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/GettingStarted/Authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Security and Authentication",sidebar_position:5,description:"How to secure your deployment and enable the Authentication"},sidebar:"docsSidebar",previous:{title:"Upgrade",permalink:"/zh/docs/GettingStarted/Upgrade"},next:{title:"Environment Variables",permalink:"/zh/docs/GettingStarted/Environment"}},s={},d=[{value:"Internal Deployment (Recommended)",id:"internal-deployment-recommended",level:3},{value:"Internet Deployment (NOT Recommended)",id:"internet-deployment-not-recommended",level:3},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The document explains how you can set up Apache DevLake securely. "),(0,i.kt)("p",null,"First of all, there are 4 services included in the deployment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"database: ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," is supported, you may use it or any other compatible DBS like cloud-based systems. You should follow the document from the database to make it secure."),(0,i.kt)("li",{parentName:"ul"},"grafana: You are likely to use it most of the time, browsing built-in dashboards, and creating your own customized metric. grafana supports ",(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/administration/user-management/"},"User Management"),", please follow the official document to set it up based on your need."),(0,i.kt)("li",{parentName:"ul"},"devlake: This is the core service for Data Collection and Metric Calculation, all collected/calculated data would be stored to the database, and accessed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")," service. ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," itself doesn't support User Management of any kind, so we don't recommend that you expose its port to the outside world."),(0,i.kt)("li",{parentName:"ul"},"config-ui: A web interface to set up ",(0,i.kt)("inlineCode",{parentName:"li"},"devlake")," to do the work. You may set up an automated ",(0,i.kt)("inlineCode",{parentName:"li"},"blueprint")," to collect data. ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui")," supports ",(0,i.kt)("inlineCode",{parentName:"li"},"Basic Authentication"),", by simply set up the Environment Variable ",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_USER")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ADMIN_PASS")," for the container. There are commented lines in ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui.environment")," section in our ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," file for your convenience.\nIn General, we suggest that you reduce the Attack Surface as small as possible.")),(0,i.kt)("h3",{id:"internal-deployment-recommended"},"Internal Deployment (Recommended)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"database: Remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"ports")," if you don't need to access the database directly"),(0,i.kt)("li",{parentName:"ul"},"devlake: Remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"ports")," section. If you want to call the API directly, do it via ",(0,i.kt)("inlineCode",{parentName:"li"},"config-ui/api")," endpoint."),(0,i.kt)("li",{parentName:"ul"},"grafana: We have no choice but to expose the ",(0,i.kt)("inlineCode",{parentName:"li"},"ports")," for people to browse the dashboards. However, you may want to set up the User Management, and a read-only database account for ",(0,i.kt)("inlineCode",{parentName:"li"},"grafana")),(0,i.kt)("li",{parentName:"ul"},"config-ui: Normally, exposing the ",(0,i.kt)("inlineCode",{parentName:"li"},"ports")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"Basic Authentication")," is sufficient for Internal Deployment, you may choose to remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"ports")," and use techniques like ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s port-forwarding")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"expose-port-when-needed")," to enhance the security. Keep in mind config-ui is NOT designed to be used by many people, and it shouldn't be. Do NOT grant access if NOT necessary.")),(0,i.kt)("h3",{id:"internet-deployment-not-recommended"},"Internet Deployment (NOT Recommended)"),(0,i.kt)("p",null,"THIS IS DANGEROUS, DON'T DO IT. If you insist, here are some suggestions you may follow, please consult Security Advisor before everything:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"database: Same as above."),(0,i.kt)("li",{parentName:"ul"},"grafana: Same as above. In addition, set up the ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS")," for the transportation."),(0,i.kt)("li",{parentName:"ul"},"devlake: Same as above."),(0,i.kt)("li",{parentName:"ul"},"config-ui: Same as above. In addition, use port-forward if you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"k8s"),", otherwise, set up ",(0,i.kt)("inlineCode",{parentName:"li"},"HTTPS")," for the transportation.")),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"Security is complicated, all suggestions listed above are based on what we learned so far. Apache Devlake makes no guarantee of any kind, please consult your Security Advisor before applying."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you run into any problem, please check the ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/Troubleshooting/Installation"},"Troubleshooting")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-devlake/issues"},"create an issue")))}c.isMDXComponent=!0}}]);