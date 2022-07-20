"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4271],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},s=void 0,c={unversionedId:"QuickStart/DockerComposeSetup",id:"QuickStart/DockerComposeSetup",title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",source:"@site/docs/QuickStart/DockerComposeSetup.md",sourceDirName:"QuickStart",slug:"/QuickStart/DockerComposeSetup",permalink:"/zh/docs/QuickStart/DockerComposeSetup",editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/docs/QuickStart/DockerComposeSetup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Install via Docker Compose",description:"The steps to install DevLake via Docker Compose\n",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Roadmap",permalink:"/zh/docs/Overview/Roadmap"},next:{title:"Install via Kubernetes",permalink:"/zh/docs/QuickStart/KubernetesSetup"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch DevLake",id:"launch-devlake",level:2},{value:"Configure data connections and collect data",id:"configure-data-connections-and-collect-data",level:2},{value:"Upgrade to a newer version",id:"upgrade-to-a-newer-version",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker v19.03.10+")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"docker-compose v2.2.3+"))),(0,o.kt)("h2",{id:"launch-devlake"},"Launch DevLake"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commands written ",(0,o.kt)("inlineCode",{parentName:"li"},"like this")," are to be run in your terminal.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"env.example")," from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/releases/latest"},"latest release page")," into a folder."),(0,o.kt)("li",{parentName:"ol"},"Rename ",(0,o.kt)("inlineCode",{parentName:"li"},"env.example")," to ",(0,o.kt)("inlineCode",{parentName:"li"},".env"),". For Mac/Linux users, please run ",(0,o.kt)("inlineCode",{parentName:"li"},"mv env.example .env")," in the terminal."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to launch DevLake.")),(0,o.kt)("h2",{id:"configure-data-connections-and-collect-data"},"Configure data connections and collect data"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("inlineCode",{parentName:"li"},"config-ui")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:4000")," in your browser to configure data connections.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Navigate to desired plugins on the Integrations page"),(0,o.kt)("li",{parentName:"ul"},"Please reference the following for more details on how to configure each one:",(0,o.kt)("br",null),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/jira"},"Jira")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/github"},"GitHub"),": For users who'd like to collect GitHub data, we recommend reading our ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/GitHubUserGuide"},"GitHub data collection guide")," which covers the following steps in detail."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/gitlab"},"GitLab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/Plugins/jenkins"},"Jenkins")))),(0,o.kt)("li",{parentName:"ul"},"Submit the form to update the values by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Save Connection")," button on each form page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"devlake")," takes a while to fully boot up. if ",(0,o.kt)("inlineCode",{parentName:"li"},"config-ui")," complaining about api being unreachable, please wait a few seconds and try refreshing the page."))),(0,o.kt)("li",{parentName:"ol"},"Create pipelines to trigger data collection in ",(0,o.kt)("inlineCode",{parentName:"li"},"config-ui")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("em",{parentName:"li"},"View Dashboards")," button in the top left when done, or visit ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3002")," (username: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),", password: ",(0,o.kt)("inlineCode",{parentName:"li"},"admin"),").",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," as a visualization tool to build charts for the ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/DataModels/DataSupport"},"data")," stored in our database."),(0,o.kt)("li",{parentName:"ul"},"Using SQL queries, we can add panels to build, save, and edit customized dashboards."),(0,o.kt)("li",{parentName:"ul"},"All the details on provisioning and customizing a dashboard can be found in the ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/UserManuals/GrafanaUserGuide"},"Grafana Doc"),".")))),(0,o.kt)("h2",{id:"upgrade-to-a-newer-version"},"Upgrade to a newer version"),(0,o.kt)("p",null,"Support for database schema migration was introduced to DevLake in v0.10.0. From v0.10.0 onwards, users can upgrade their instance smoothly to a newer version. However, versions prior to v0.10.0 do not support upgrading to a newer version with a different database schema. We recommend users to deploy a new instance if needed."),(0,o.kt)("br",null))}m.isMDXComponent=!0}}]);