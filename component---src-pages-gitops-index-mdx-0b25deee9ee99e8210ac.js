(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),r=a.n(i),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,b=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+h.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===o,b=new RegExp(o+"/?(#.*)?$"),c=n.replace(b,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(p.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},i))))))},t}(o.a.Component),N=a("MjG9"),k=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),T=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:T.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,h=s.title,x=s.theme,f=s.description,w=s.keywords,y=s.date,T=Object(k.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,L=m?C.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",A=x||T;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:A,pageTitle:h,pageDescription:f,pageKeywords:w,titleType:u},Object(p.b)(O,{title:o?Object(p.b)(o,null):h,label:"label",tabs:m,theme:A}),m&&Object(p.b)(v,{title:h,slug:C,tabs:m,currentTab:L}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(P,{date:y})),Object(p.b)(g.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:L}),Object(p.b)(b.a,null))}},"5FtZ":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),b={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},s=c("AnchorLinks"),d=c("AnchorLink"),u={_frontmatter:b},m=r.a;function p(e){var t=e.components,a=Object(o.a)(e,l);return Object(i.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s,{mdxType:"AnchorLinks"},Object(i.b)(d,{mdxType:"AnchorLink"},"Synopsis"),Object(i.b)(d,{mdxType:"AnchorLink"},"Resources & Presentations"),Object(i.b)(d,{mdxType:"AnchorLink"},"Deliverables"),Object(i.b)(d,{mdxType:"AnchorLink"},"Goals"),Object(i.b)(d,{mdxType:"AnchorLink"},"Guidelines")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Synopsis"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Advise client on Agile Integration techniques utilizing RedHat GitOps & Pipeline operators."),Object(i.b)("li",{parentName:"ol"},"Advise client on the advantages of using GitOps automation to accelerate Cloud Pak adoption."),Object(i.b)("li",{parentName:"ol"},"Advise client on the advantage for adopting containerized IBM Integration products using GitOps automation."),Object(i.b)("li",{parentName:"ol"},"Position a GitOps Automation Framework to boot-strapping Client PoC activity."),Object(i.b)("li",{parentName:"ol"},"Evaluate options to create and maintain your own set of demo environments, demo assets, demo scripts, and automation scripts.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Resources & Presentations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/6oj1vcm8ppziw9xyug0985c85m4qjey6",target:"_blank"},"Session Overview Presentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://ibm.box.com/s/5buzanhqf0em1ydg15y3rih8vna1hrmc",target:"_blank"},"GitOps Automation Framework Presentation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/tech-academy-japan/gitops/lab/"},"Lab Handout")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/tech-academy-japan/gitops/labdetailed/"},"Detailed Lab Handout"))),Object(i.b)("hr",null),Object(i.b)("h2",null,"Deliverables"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Capture a screen shot of your final progress with this Lab. ",Object(i.b)("a",{href:"https://ibm.box.com/s/yict11k6kojnyw6q15e1e0vp88w5ahib ",target:"_blank"},"Upload Screen Shots Here Please"),"."),Object(i.b)("li",{parentName:"ol"},"Update your ",Object(i.b)("a",{href:"https://ibm.box.com/s/m1wucuaucc9o8ghaagg27ucsnab987wa",target:"_blank"},"Comments & Feedback")," regarding the useability of this framework in the field.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Goals"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Learn an IBM opinionated point of view regarding a GitOps centric method to manage RHOCP infrastructure, IBM integration software and application workload code."),Object(i.b)("li",{parentName:"ol"},"Develop skills using GitOps automation to deploy and manage the IBM Integration portfolio."),Object(i.b)("li",{parentName:"ol"},"Develop skills using Production Deployment Guide assets and Tech Sales Demo Git repositories."),Object(i.b)("li",{parentName:"ol"},"Complete a hands-on exercise that will deepen their understanding of the IBM GitOps Automation Framework."),Object(i.b)("li",{parentName:"ol"},"Learn how to position a GitOps Automation Framework to boot-strapping Client PoC activity.")),Object(i.b)("hr",null),Object(i.b)("h2",null,"Guidelines"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Client Facing"),":  Consider the useability or practicality for using this framework to support an IBM Integration sales opportunity."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a) Easier option for a Tech Seller to create and deliver a client facing demo."),Object(i.b)("li",{parentName:"ul"},"b) Potential to accelerate the time and effort required to get a PoC up and running."),Object(i.b)("li",{parentName:"ul"},"c) Communicate the extended value of RHOP as part of an IBM Integration transaction."),Object(i.b)("li",{parentName:"ul"},"d) Demonstration of the power of containers, container orchestration, operators, DevSecOps automation, and Day-2 operations."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Internal"),":  Can this framework enable the Technical Sales Professional to be more efficient and effective in the field?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"a) Will this asset make it easier to have a demo environment up and running and scale-able to accept release updates?"),Object(i.b)("li",{parentName:"ul"},"b) Will this asset make it easier for a Tech Seller to have their own, self managed demo configuration?"),Object(i.b)("li",{parentName:"ul"},"c) Will this asset make it easier for a Tech Seller to embrace containers, orchestration, and DevOps principles?")))))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-gitops-index-mdx-0b25deee9ee99e8210ac.js.map