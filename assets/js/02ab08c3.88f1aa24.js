"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),s=l,f=d["".concat(p,".").concat(s)]||d[s]||m[s]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const o={id:"mlops-dev-method",title:"\u958b\u767a\u624b\u6cd5"},a=void 0,i={unversionedId:"azureml/mlops/mlops-dev-method",id:"azureml/mlops/mlops-dev-method",title:"\u958b\u767a\u624b\u6cd5",description:"\u30c8\u30d4\u30c3\u30af",source:"@site/docs/azureml/mlops/mlops-dev-method.md",sourceDirName:"azureml/mlops",slug:"/azureml/mlops/mlops-dev-method",permalink:"/azure-machine-learning-playbook/docs/azureml/mlops/mlops-dev-method",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/mlops/mlops-dev-method.md",tags:[],version:"current",frontMatter:{id:"mlops-dev-method",title:"\u958b\u767a\u624b\u6cd5"}},p={},u=[{value:"\u30b3\u30fc\u30c9\u898f\u7d04",id:"\u30b3\u30fc\u30c9\u898f\u7d04",level:2},{value:"\u30d6\u30e9\u30f3\u30c1\u6226\u7565",id:"\u30d6\u30e9\u30f3\u30c1\u6226\u7565",level:2},{value:"Git flow",id:"git-flow",level:3},{value:"GitHub flow",id:"github-flow",level:3},{value:"Trunk-based Development",id:"trunk-based-development",level:3},{value:"\u30c6\u30b9\u30c8",id:"\u30c6\u30b9\u30c8",level:2},{value:"\u81ea\u52d5\u5316\u3068 CI/CD",id:"\u81ea\u52d5\u5316\u3068-cicd",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30c8\u30d4\u30c3\u30af"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%82%B3%E3%83%BC%E3%83%89%E8%A6%8F%E7%B4%84"},"\u30b3\u30fc\u30c9\u898f\u7d04")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%83%96%E3%83%A9%E3%83%B3%E3%83%81%E6%88%A6%E7%95%A5"},"\u30d6\u30e9\u30f3\u30c1\u6226\u7565")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E3%83%86%E3%82%B9%E3%83%88"},"\u30c6\u30b9\u30c8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#%E8%87%AA%E5%8B%95%E5%8C%96%E3%81%A8-cicd"},"\u81ea\u52d5\u5316\u3068 CI/CD"))),(0,l.kt)("h2",{id:"\u30b3\u30fc\u30c9\u898f\u7d04"},"\u30b3\u30fc\u30c9\u898f\u7d04"),(0,l.kt)("h2",{id:"\u30d6\u30e9\u30f3\u30c1\u6226\u7565"},"\u30d6\u30e9\u30f3\u30c1\u6226\u7565"),(0,l.kt)("h3",{id:"git-flow"},"Git flow"),(0,l.kt)("h3",{id:"github-flow"},"GitHub flow"),(0,l.kt)("h3",{id:"trunk-based-development"},"Trunk-based Development"),(0,l.kt)("h2",{id:"\u30c6\u30b9\u30c8"},"\u30c6\u30b9\u30c8"),(0,l.kt)("h2",{id:"\u81ea\u52d5\u5316\u3068-cicd"},"\u81ea\u52d5\u5316\u3068 CI/CD"))}m.isMDXComponent=!0}}]);