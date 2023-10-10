"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[378],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3394:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"atoms/Button",id:"atoms/Button",title:"Button",description:"Description",source:"@site/docs/atoms/Button.md",sourceDirName:"atoms",slug:"/atoms/Button",permalink:"/components/docs/atoms/Button",draft:!1,editUrl:"https://github.com/Proglab/components/tree/main/docs/docs/atoms/Button.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Atoms",permalink:"/components/docs/category/atoms"},next:{title:"Molecules",permalink:"/components/docs/category/molecules"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage/Examples",id:"usageexamples",level:2}],d={toc:m},s="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(s,(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"A simple button"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bouton",src:n(3027).Z,width:"177",height:"66"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"{{ component('proglab_button', {\n    style: 'primary',\n    type: 'button',\n    label: 'This is a button 2',\n    size: null,\n    disabled: false,\n    class: null,\n    icon_before: null,\n    icon_after: null,\n}) }}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R = Required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"label")," ",(0,r.kt)("strong",{parentName:"td"},"R")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The label"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The bootstrap style"),(0,r.kt)("td",{parentName:"tr",align:null},"primary, secondary, success,",(0,r.kt)("br",null)," danger, warning, info,",(0,r.kt)("br",null)," light, dark, link"),(0,r.kt)("td",{parentName:"tr",align:null},"primary")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The button HTML type"),(0,r.kt)("td",{parentName:"tr",align:null},"button, submit, reset"),(0,r.kt)("td",{parentName:"tr",align:null},"button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The size of the button"),(0,r.kt)("td",{parentName:"tr",align:null},"sm, gd, null"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null},"true, false"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"class")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?string")),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"icon_before")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"icon before the label"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"icon_after")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"?string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"icon after the label"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("h2",{id:"usageexamples"},"Usage/Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-twig"},"  {{ component('proglab_button', {\n          label: 'Ceci est un bouton 3'\n      }) \n  }}\n")))}u.isMDXComponent=!0},3027:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/button-primary-ae1b6c74b028186289c6b04e0f939397.jpg"}}]);