"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4544],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={id:"azureml-resources-assets",title:"\u30ea\u30bd\u30fc\u30b9\u3068\u30a2\u30bb\u30c3\u30c8"},o=void 0,u={unversionedId:"azureml/fundamentals/azureml-resources-assets",id:"azureml/fundamentals/azureml-resources-assets",title:"\u30ea\u30bd\u30fc\u30b9\u3068\u30a2\u30bb\u30c3\u30c8",description:"\u30ea\u30bd\u30fc\u30b9",source:"@site/docs/azureml/fundamentals/azureml-resources-assets.md",sourceDirName:"azureml/fundamentals",slug:"/azureml/fundamentals/azureml-resources-assets",permalink:"/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-resources-assets",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-resources-assets.md",tags:[],version:"current",frontMatter:{id:"azureml-resources-assets",title:"\u30ea\u30bd\u30fc\u30b9\u3068\u30a2\u30bb\u30c3\u30c8"},sidebar:"azuremlSidebar",previous:{title:"Azure Machine Learning \u3068\u306f",permalink:"/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-basic"},next:{title:"\u5b9f\u9a13\u30b5\u30fc\u30d3\u30b9",permalink:"/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-author"}},i={},s=[{value:"\u30ea\u30bd\u30fc\u30b9",id:"\u30ea\u30bd\u30fc\u30b9",level:2},{value:"\u30a2\u30bb\u30c3\u30c8",id:"\u30a2\u30bb\u30c3\u30c8",level:2},{value:"Workspace",id:"workspace",level:2},{value:"Compute",id:"compute",level:2},{value:"Datastore",id:"datastore",level:2},{value:"Model",id:"model",level:2},{value:"Environment",id:"environment",level:2},{value:"Data",id:"data",level:2},{value:"Component",id:"component",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u30ea\u30bd\u30fc\u30b9"},"\u30ea\u30bd\u30fc\u30b9"),(0,a.kt)("p",null,"Azure Machine Learning \u306e\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u3092\u652f\u3048\u308b\u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Workspace"),(0,a.kt)("li",{parentName:"ul"},"Compute"),(0,a.kt)("li",{parentName:"ul"},"Datastore")),(0,a.kt)("h2",{id:"\u30a2\u30bb\u30c3\u30c8"},"\u30a2\u30bb\u30c3\u30c8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Model"),(0,a.kt)("li",{parentName:"ul"},"Environment"),(0,a.kt)("li",{parentName:"ul"},"Data"),(0,a.kt)("li",{parentName:"ul"},"Component")),(0,a.kt)("h2",{id:"workspace"},"Workspace"),(0,a.kt)("p",null,"Workspace \u306f Azure Machine Learning \u3092\u69cb\u6210\u3059\u308b\u6700\u4e0a\u4f4d\u306e\u30ea\u30bd\u30fc\u30b9\u3067\u3059\u3002\u8a08\u7b97\u74b0\u5883\u306a\u3069\u306e\u30ea\u30bd\u30fc\u30b9\u3084\u3001\u30e2\u30c7\u30eb\u3084\u74b0\u5883\u60c5\u5831\u306a\u3069\u306e\u30a2\u30bb\u30c3\u30c8\u3068\u95a2\u9023\u4ed8\u3051\u3089\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"compute"},"Compute"),(0,a.kt)("p",null,"\u30e2\u30c7\u30eb\u5b66\u7fd2\u3084\u63a8\u8ad6\u3067\u5229\u7528\u3059\u308b\u8a08\u7b97\u74b0\u5883\u3067\u3059\u3002Compute Instance \u3068 Compute Cluster \u306f Azure Machine Learning \u304c\u63d0\u4f9b\u3059\u308b\u8a08\u7b97\u74b0\u5883\u3067\u3059\u3002\u305d\u306e\u4ed6\u306b\u3082 Kubernetes \u306a\u3069\u306e\u5916\u90e8\u306e\u8a08\u7b97\u74b0\u5883\u3092\u5229\u7528\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"datastore"},"Datastore"),(0,a.kt)("p",null,"Azure Storage \u3078\u306e\u30bb\u30ad\u30e5\u30a2\u306a\u63a5\u7d9a\u60c5\u5831\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002v2 \u3067\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b Azure \u306e\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306f\u4e0b\u8a18\u3067\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Azure Blob Container"),(0,a.kt)("li",{parentName:"ul"},"Azure File Share"),(0,a.kt)("li",{parentName:"ul"},"Azure Data Lake"),(0,a.kt)("li",{parentName:"ul"},"Azure Data Lake Gen2")),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)("p",null,"\u5b66\u7fd2\u6e08\u307f\u30e2\u30c7\u30eb\u3092\u767b\u9332\u3057\u3066\u904b\u7528\u7ba1\u7406\u3092\u3057\u307e\u3059\u3002\u4efb\u610f\u306e\u30d5\u30a1\u30a4\u30eb\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"\u30ab\u30b9\u30bf\u30e0"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"MLflow"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Triton")," \u306e 3 \u7a2e\u985e\u306e\u5f62\u5f0f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u30e2\u30c7\u30eb\u304c\u751f\u6210\u3055\u308c\u305f\u5b9f\u9a13\u306e\u7d10\u4ed8\u3051\u304c\u3067\u304d\u305f\u308a\u3001\u8cac\u4efb\u306e\u3042\u308b AI \u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u7ba1\u7406\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059 (Preview)\u3002"),(0,a.kt)("h2",{id:"environment"},"Environment"),(0,a.kt)("p",null,"\u30e2\u30c7\u30eb\u5b66\u7fd2\u3084\u63a8\u8ad6\u3067\u5229\u7528\u3059\u308b Python \u3084 Docker \u306a\u3069\u306e\u30e9\u30f3\u30bf\u30a4\u30e0\u3084\u74b0\u5883\u5909\u6570\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"data"},"Data"),(0,a.kt)("p",null,"\u30e2\u30c7\u30eb\u5b66\u7fd2\u3084\u30d0\u30c3\u30c1\u63a8\u8ad6\u306a\u3069\u3067\u5229\u7528\u3055\u308c\u308b\u30c7\u30fc\u30bf\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u3067\u3059\u3002\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f or \u8868\u5f62\u5f0f\u306e\u30c7\u30fc\u30bf\u3092\u767b\u9332\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"component"},"Component"),(0,a.kt)("p",null,"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u3092\u69cb\u6210\u3059\u308b 1 \u3064\u306e\u51e6\u7406\u3092\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3057\u3066\u3082\u306e\u3067\u3059\u3002"))}c.isMDXComponent=!0}}]);