"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,g=d["".concat(p,".").concat(u)]||d[u]||s[u]||l;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"molecules/Breadcrumb",id:"molecules/Breadcrumb",title:"Breadcrumb",description:"Description",source:"@site/docs/molecules/Breadcrumb.md",sourceDirName:"molecules",slug:"/molecules/Breadcrumb",permalink:"/components/docs/molecules/Breadcrumb",draft:!1,editUrl:"https://github.com/Proglab/components/tree/main/docs/docs/molecules/Breadcrumb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Molecules",permalink:"/components/docs/category/molecules"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage/Examples",id:"usageexamples",level:2}],c={toc:m},d="wrapper";function s(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A simple breadcrumb"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Breadcrumb",src:r(2427).Z,width:"320",height:"38"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-twig"},"{{ component('proglab_breadcrumb', {\n    pages : [\n        {\n            'title' : 'Title of the link',\n            'link' : '/page'\n        }\n    ],\n    homepageUrl: 'http://localhost',\n    homepageLabel: 'Homepage',\n}\n) }}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"title")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},"Required")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"url")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"?string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The link"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"homepageUrl")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"?string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Route name"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"homepageLabel")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"?string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Label of the link"),(0,a.kt)("td",{parentName:"tr",align:null},"Homepage")))),(0,a.kt)("h2",{id:"usageexamples"},"Usage/Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-twig"},"{{ component('proglab_breadcrumb', {\n    pages : [\n        {\n            'title' : 'Title of the link'\n        }\n    ]\n}) }}\n")))}s.isMDXComponent=!0},2427:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/breadcrumb-8d550c5cb9426f51a15ad8f2333eae77.jpg"}}]);