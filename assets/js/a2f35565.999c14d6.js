"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(b,o(o({ref:r},p),{},{components:t})):n.createElement(b,o({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},267:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const a={id:"rai-tech-decision-making",title:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a"},o=void 0,c={unversionedId:"azureml/responsible-ai/rai-tech-decision-making",id:"azureml/responsible-ai/rai-tech-decision-making",title:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a",description:"2.2. \u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a",source:"@site/docs/azureml/responsible-ai/rai-tech-decision-making.md",sourceDirName:"azureml/responsible-ai",slug:"/azureml/responsible-ai/rai-tech-decision-making",permalink:"/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-tech-decision-making",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-tech-decision-making.md",tags:[],version:"current",frontMatter:{id:"rai-tech-decision-making",title:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a"},sidebar:"azuremlSidebar",previous:{title:"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u30c7\u30d0\u30c3\u30b0",permalink:"/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-tech-debugging"},next:{title:"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 & \u30d7\u30e9\u30a4\u30d0\u30b7\u30fc",permalink:"/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-tech-security-privacy"}},l={},s=[{value:"2.2. \u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a",id:"22-\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a",level:3}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"22-\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a"},"2.2. \u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u6d3b\u7528\u3057\u305f\u610f\u601d\u6c7a\u5b9a"),(0,i.kt)("p",null,"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u610f\u601d\u6c7a\u5b9a\u306b\u5229\u7528\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306f\u5165\u529b\u3068\u51fa\u529b (=\u5b66\u7fd2\u30c7\u30fc\u30bf\u3068\u6b63\u89e3\u30e9\u30d9\u30eb) \u306e\u76f8\u95a2\u95a2\u4fc2\u3092\u6349\u3048\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u304c\u3001\u5fc5\u305a\u3057\u3082\u3053\u308c\u304c\u56e0\u679c\u95a2\u4fc2\u3068\u540c\u4e00\u3067\u3042\u308b\u3068\u306f\u9650\u308a\u307e\u305b\u3093 (\u3080\u3057\u308d\u7570\u306a\u308b\u3082\u306e\u3068\u601d\u3063\u305f\u65b9\u304c\u826f\u3044\u304b\u3082\u77e5\u308c\u307e\u305b\u3093)\u3002"),(0,i.kt)("p",null,"\u203b \u7de8\u96c6\u4e2d"),(0,i.kt)("br",null))}u.isMDXComponent=!0}}]);