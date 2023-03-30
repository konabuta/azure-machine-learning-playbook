"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),k=m(n),s=l,d=k["".concat(o,".").concat(s)]||k[s]||c[s]||r;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>u,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={id:"azureml-basic",title:"Azure Machine Learning \u6982\u8981"},i=void 0,u={unversionedId:"azureml/fundamentals/azureml-basic",id:"azureml/fundamentals/azureml-basic",title:"Azure Machine Learning \u6982\u8981",description:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",source:"@site/docs/azureml/fundamentals/azureml-basic.md",sourceDirName:"azureml/fundamentals",slug:"/azureml/fundamentals/azureml-basic",permalink:"/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-basic",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-basic.md",tags:[],version:"current",frontMatter:{id:"azureml-basic",title:"Azure Machine Learning \u6982\u8981"},sidebar:"azuremlSidebar",previous:{title:"Azure AI \u6982\u8981",permalink:"/azure-machine-learning-playbook/docs/azureml/fundamentals/azure-ai"},next:{title:"\u30ea\u30bd\u30fc\u30b9\u3001\u30a2\u30bb\u30c3\u30c8",permalink:"/azure-machine-learning-playbook/docs/azureml/fundamentals/azureml-resources-assets"}},o={},m=[{value:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",id:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0",level:2},{value:"Azure Machine Learning \u3068\u306f\uff1f",id:"azure-machine-learning-\u3068\u306f",level:2},{value:"Azure Machine Learning \u3067\u51fa\u6765\u308b\u3053\u3068",id:"azure-machine-learning-\u3067\u51fa\u6765\u308b\u3053\u3068",level:3},{value:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",id:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb",level:3},{value:"\u5f93\u6765\u306e\u65b9\u6cd5\u3068\u306e\u6bd4\u8f03",id:"\u5f93\u6765\u306e\u65b9\u6cd5\u3068\u306e\u6bd4\u8f03",level:3},{value:"Azure Machine Learning \u306e\u7279\u5fb4",id:"azure-machine-learning-\u306e\u7279\u5fb4",level:2},{value:"1. \u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u9ad8\u901f\u5316",id:"1-\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u9ad8\u901f\u5316",level:3},{value:"2. MLOps \u306b\u3088\u308b\u5927\u898f\u6a21\u306a\u958b\u767a\u30fb\u904b\u7528",id:"2-mlops-\u306b\u3088\u308b\u5927\u898f\u6a21\u306a\u958b\u767a\u904b\u7528",level:3},{value:"3. \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 &amp; \u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9",id:"3-\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3--\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9",level:3},{value:"4. \u8cac\u4efb\u306e\u3042\u308b AI \u306e\u5b9f\u73fe",id:"4-\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e\u5b9f\u73fe",level:3}],p={toc:m};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"},"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0"),(0,l.kt)("p",null,"\u6a5f\u68b0\u5b66\u7fd2\u30b7\u30b9\u30c6\u30e0\u306f\u975e\u5e38\u306b\u8907\u96d1\u3067\u3059\u3002\u7814\u7a76\u958b\u767a\u3084\u5b9f\u9a13\u30d5\u30a7\u30fc\u30ba\u3067\u306f\u30b7\u30f3\u30d7\u30eb\u306a\u69cb\u6210\u3067\u5b9f\u884c\u74b0\u5883\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u672c\u756a\u904b\u7528\u3092\u60f3\u5b9a\u3057\u305f\u308a\u9ad8\u3044\u4fe1\u983c\u6027\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304b\u3089\u69cb\u6210\u3055\u308c\u308b\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("p",null,"\u3053\u306e\u56f3\u306e \u300cML Code\u300d\u304c Python \u30b9\u30af\u30ea\u30d7\u30c8\u306a\u3069\u3092\u7528\u3044\u3066\u30e2\u30c7\u30eb\u5b66\u7fd2\u3059\u308b\u90e8\u5206\u306b\u306a\u308b\u304c\u3001\u4ed6\u306b\u3082\u30c7\u30fc\u30bf\u53ce\u96c6\u30fb\u5805\u8abf\u3001\u30d7\u30ed\u30bb\u30b9\u7ba1\u7406\u3001\u7279\u5fb4\u91cf\u751f\u6210\u306a\u3069\u3055\u307e\u3056\u307e\u306a\u51e6\u7406\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u5fc5\u8981\u306b\u306a\u3063\u3066\u304d\u307e\u3059\u3002"),(0,l.kt)("img",{src:n(5083).Z,width:"500"}),(0,l.kt)("br",null),"\u201cHidden Technical Debt in Machine Learning Systems,\u201d Google NIPS 2015  \u3088\u308a\u5f15\u7528",(0,l.kt)("h2",{id:"azure-machine-learning-\u3068\u306f"},"Azure Machine Learning \u3068\u306f\uff1f"),(0,l.kt)("p",null,"Azure Machine Learning (aka Azure ML) \u306f Azure \u304c\u63d0\u4f9b\u3059\u308b\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002E2E \u3067\u6a5f\u68b0\u5b66\u7fd2\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u30de\u30cd\u30fc\u30b8\u30c9\u30b5\u30fc\u30d3\u30b9 (PaaS) \u306b\u306a\u3063\u3066\u304a\u308a\u3001\u30a4\u30f3\u30d5\u30e9\u90e8\u5206\u306f Microsoft \u306b\u3088\u3063\u3066\u7ba1\u7406\u30fb\u904b\u7528\u3055\u308c\u308b\u305f\u3081\u3001\u672c\u6765\u6ce8\u529b\u3057\u305f\u3044\u6a5f\u68b0\u5b66\u7fd2\u306e\u696d\u52d9\u306b\u30d5\u30a9\u30fc\u30ab\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("img",{src:n(2819).Z,width:"500"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"azure-machine-learning-\u3067\u51fa\u6765\u308b\u3053\u3068"},"Azure Machine Learning \u3067\u51fa\u6765\u308b\u3053\u3068"),(0,l.kt)("p",null,"\u6c4e\u7528\u7684\u3067\u30aa\u30fc\u30d7\u30f3\u306a\u6a5f\u68b0\u5b66\u7fd2\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u5b9f\u88c5\u6b21\u7b2c\u3067\u306f\u304a\u5ba2\u69d8\u304c\u5b9f\u73fe\u3057\u305f\u3044\u3053\u3068\u3092\u67d4\u8edf\u306b\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30c8\u30e9\u30c7\u30a3\u30b7\u30e7\u30ca\u30eb\u306a\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u958b\u767a"),(0,l.kt)("li",{parentName:"ul"},"\u753b\u50cf\u3001\u97f3\u58f0\u3001\u30c6\u30ad\u30b9\u30c8\u306a\u3069\u306e\u975e\u69cb\u9020\u5316\u30c7\u30fc\u30bf\u3092\u7528\u3044\u3066\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u958b\u767a"),(0,l.kt)("li",{parentName:"ul"},"\u56e0\u679c\u63a2\u7d22\u30fb\u56e0\u679c\u63a8\u8ad6"),(0,l.kt)("li",{parentName:"ul"},"\u30cf\u30a4\u30d1\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u3001Neural Architecture Search (NAS)"),(0,l.kt)("li",{parentName:"ul"},"\u4e26\u5217\u5206\u6563\u51e6\u7406 (Spark\u3001Dask\u3001Ray)"),(0,l.kt)("li",{parentName:"ul"},"MLOps (\u5b9f\u9a13\u7ba1\u7406\u3001\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u81ea\u52d5\u5316\u3001\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0 \u306a\u3069)"),(0,l.kt)("li",{parentName:"ul"},"\u8cac\u4efb\u306e\u3042\u308b AI")),(0,l.kt)("p",null,"\u306a\u3069"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u3042\u304f\u307e\u3067\u6c4e\u7528\u7684\u306a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u305f\u3081\u3001\u696d\u754c\u30fb\u696d\u52d9\u306e\u30b7\u30ca\u30ea\u30aa\u306b\u7279\u5316\u3057\u3066\u3044\u308b\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u5b9f\u73fe\u3057\u305f\u3044\u3053\u3068\u304c\u660e\u78ba\u3067\u3042\u308c\u3070\u3001\u6c4e\u7528\u7684\u306a\u5b66\u7fd2\u6e08\u307f\u30e2\u30c7\u30eb\u3092\u63d0\u4f9b\u3059\u308b Azure Cognitive Services \u3084 Azure Applied AI Service \u306a\u3069\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u3054\u5229\u7528\u3044\u305f\u3060\u304f\u306e\u304c\u826f\u3044\u30b1\u30fc\u30b9\u3082\u3042\u308a\u307e\u3059\u3002"))),(0,l.kt)("h3",{id:"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"},"\u6a5f\u68b0\u5b66\u7fd2\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"),(0,l.kt)("p",null,"Azure Machine Learning \u306f\u6a5f\u68b0\u5b66\u7fd2\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb (MLOps) \u3092\u69cb\u6210\u3059\u308b 3 \u3064\u306e Loop (Prototyping\u3001Training, Operationalizing) \u306e\u5404\u8981\u7d20\u3084\u30eb\u30fc\u30d7\u9593\u304c\u9ad8\u901f\u306b\u56de\u308b\u3053\u3068\u3092\u610f\u8b58\u3057\u3066\u3044\u307e\u3059\u3002"),(0,l.kt)("img",{src:n(6101).Z,width:"1000"}),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u5f93\u6765\u306e\u65b9\u6cd5\u3068\u306e\u6bd4\u8f03"},"\u5f93\u6765\u306e\u65b9\u6cd5\u3068\u306e\u6bd4\u8f03"),(0,l.kt)("p",null,"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9 (Python/R \u306a\u3069)\u3092\u5229\u7528\u3059\u308b\u89b3\u70b9\u3067\u8a00\u3048\u3070\u3001Azure Machine Learning \u3092\u5229\u7528\u305b\u305a\u3068\u3082\u30e2\u30c7\u30eb\u5b66\u7fd2\u3084\u63a8\u8ad6\u306f\u3082\u3061\u308d\u3093\u53ef\u80fd\u3067\u3059\u304c\u3001Azure Machine Learning \u3092\u4f7f\u3046\u3053\u3068\u3067\u591a\u304f\u306e\u30e1\u30ea\u30c3\u30c8\u304c\u3042\u308a\u307e\u3059\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6a5f\u68b0\u5b66\u7fd2\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5f93\u6765\u306e\u65b9\u6cd5"),(0,l.kt)("th",{parentName:"tr",align:null},"Azure ML"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8a08\u7b97\u30ea\u30bd\u30fc\u30b9\u306e\u7528\u610f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"CPU/GPU\u306e\u30b5\u30fc\u30d0\u30fc\u3092\u8abf\u9054"),(0,l.kt)("li",null,"\u96fb\u6e90\u3092\u78ba\u4fdd\u3057\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u63a5\u7d9a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null," Azure ML \u4ed8\u5c5e\u306e\u8a08\u7b97\u74b0\u5883\u3067\u3042\u308b Compute Instance \u3084 Compute Clusters \u3092\u8d77\u52d5"),(0,l.kt)("li",null,"\u65e2\u5b58\u306e\u8a08\u7b97\u74b0\u5883\u3092\u30a2\u30bf\u30c3\u30c1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u74b0\u5883\u69cb\u7bc9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"Python \u74b0\u5883\u3068 Jupyter \u74b0\u5883\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),(0,l.kt)("li",null,"GPU \u306e\u30c9\u30e9\u30a4\u30d0/\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"Compute Instance \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6e08\u307f\u306e Python \u3084\u305d\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3001Jupyter Notebook \u3084 VSCode \uff08Remove) \u3092\u5229\u7528"),(0,l.kt)("li",null,"\u74b0\u5883 (Environment) \u3092\u5229\u7528\u3057\u3066\u5171\u6709\u306e Python \u74b0\u5883\u3092\u4f5c\u6210\u30fb\u904b\u7528"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u306e\u6e96\u5099"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"\u30b7\u30b9\u30c6\u30e0\u304b\u3089\u624b\u52d5\u3067\u30c7\u30fc\u30bf\u3092\u90fd\u5ea6\u53d6\u5f97"),(0,l.kt)("li",null,"Python \u30b3\u30fc\u30c9\u4e2d\u306b\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u5b9a\u7fa9\u3057\u3001\u30c7\u30fc\u30bf\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u3092\u53d6\u5f97")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"\u30c7\u30fc\u30bf\u30b9\u30c8\u30a2 Datastore \u3067\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u63a5\u7d9a\u60c5\u5831\u3092\u7ba1\u7406"),(0,l.kt)("li",null,"\u30c7\u30fc\u30bf Data \u3067\u30c7\u30fc\u30bf\u306e\u30b5\u30d6\u30bb\u30c3\u30c8\u3092\u5b9a\u7fa9"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u524d\u51e6\u7406\u3068\u30e2\u30c7\u30eb\u4f5c\u6210"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"\u624b\u52d5\u3067\u306e\u30c7\u30fc\u30bf\u306e\u524d\u51e6\u7406\u3084\u30e2\u30c7\u30eb\u5b66\u7fd2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"AutoML \u3084 Hyperdrive (\u30cf\u30a4\u30d1\u30fc\u30d1\u30e9\u30e1\u30fc\u30bf\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0) \u306b\u3088\u308b\u524d\u51e6\u7406\u30fb\u30e2\u30c7\u30eb\u5b66\u7fd2\u306e\u9ad8\u901f\u5316"),(0,l.kt)("li",null,"\u5b9f\u9a13\u7ba1\u7406\u3084\u518d\u5229\u7528\u53ef\u80fd\u306a\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306e\u4f5c\u6210"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u63a8\u8ad6\u30b3\u30f3\u30c6\u30ca\u306e\u4f5c\u6210"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"Dockerfile \u3092\u8a18\u8ff0\u3057\u3066\u30b3\u30f3\u30c6\u30ca\u3092\u4f5c\u6210"),(0,l.kt)("li",null,"Flaks \u3084 Fast API \u306a\u3069\u3092\u5229\u7528\u3057\u3066\u624b\u52d5\u3067\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"\u4fdd\u5b58\u6e08\u307f\u30e2\u30c7\u30eb\u306b\u5bfe\u3059\u308b\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u4ed8\u4e0e"),(0,l.kt)("li",null,"\u74b0\u5883 Environment \u3068\u63a8\u8ad6\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9a\u7fa9\u3059\u308b\u306e\u307f\u3067\u30af\u30a4\u30c3\u30af\u306b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f5c\u6210"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u30c7\u30d7\u30ed\u30a4\u30e1\u30f3\u30c8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"Kubernetes \u306a\u3069\u306b\u30b3\u30f3\u30c6\u30ca\u3092\u624b\u52d5\u3067\u30c7\u30d7\u30ed\u30a4"),(0,l.kt)("li",null,"\u624b\u52d5\u3067\u306e\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8/\u30b9\u30b1\u30fc\u30eb\u30a4\u30f3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"\u30de\u30cd\u30fc\u30b8\u30c9\u306a\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8 (Managed Endpoint) \u3078\u306e\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4"),(0,l.kt)("li",null,"Kubernetes \u3078\u306e\u30af\u30a4\u30c3\u30af\u306a\u30c7\u30d7\u30ed\u30a4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u76e3\u8996"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"\u624b\u52d5\u3067\u306e\u30ed\u30b0\u53d6\u5f97"),(0,l.kt)("li",null,"\u624b\u52d5\u3067\u306e\u30c7\u30fc\u30bf\u5909\u5316\u691c\u77e5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("li",null,"Azure Monitor \u3092\u5229\u7528\u3057\u305f\u76e3\u8996"),(0,l.kt)("li",null,"Data Drift \u306e\u81ea\u52d5\u691c\u77e5\u3068\u901a\u77e5"))))),(0,l.kt)("h2",{id:"azure-machine-learning-\u306e\u7279\u5fb4"},"Azure Machine Learning \u306e\u7279\u5fb4"),(0,l.kt)("p",null,"Azure Machine Learning \u306e\u7279\u5fb4\u7684\u306a\u5074\u9762\u3092 4 \u3064\u306b\u6574\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"1-\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u9ad8\u901f\u5316"},"1. \u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u9ad8\u901f\u5316"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u306e\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u8fc5\u901f\u306b\u69cb\u7bc9\u3067\u304d\u308b\u5b9f\u9a13\u30b5\u30fc\u30d3\u30b9 (AutoML, Designer)"),(0,l.kt)("li",{parentName:"ul"},"\u30c1\u30fc\u30e0\u30fb\u7d44\u7e54\u306e\u5171\u6709\u74b0\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u3055\u307e\u3056\u307e\u306a\u30aa\u30fc\u30d7\u30f3\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3068\u306e\u7d71\u5408 (Python/R\u3001VSCode\u3001GitHub \u306a\u3069)")),(0,l.kt)("h3",{id:"2-mlops-\u306b\u3088\u308b\u5927\u898f\u6a21\u306a\u958b\u767a\u904b\u7528"},"2. MLOps \u306b\u3088\u308b\u5927\u898f\u6a21\u306a\u958b\u767a\u30fb\u904b\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MLflow \u3092\u7528\u3044\u3066\u5b9f\u9a13\u7ba1\u7406"),(0,l.kt)("li",{parentName:"ul"},"\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u6a5f\u80fd\u306b\u3088\u308b\u51e6\u7406\u306e\u81ea\u52d5\u5316\u3068\u518d\u73fe\u6027\u306e\u78ba\u4fdd"),(0,l.kt)("li",{parentName:"ul"},"\u30a8\u30f3\u30c9\u30c4\u30fc\u30a8\u30f3\u30c9\u306e\u76e3\u8996\u306e\u4ed5\u7d44\u307f")),(0,l.kt)("h3",{id:"3-\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3--\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9"},"3. \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 & \u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Azure \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30fb\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u306e\u4ed5\u7d44\u307f"),(0,l.kt)("li",{parentName:"ul"},"\u30af\u30aa\u30fc\u30bf\u7ba1\u7406\u3084\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u8d77\u52d5\u30fb\u505c\u6b62\u6a5f\u80fd\u306b\u3088\u308b\u30b3\u30b9\u30c8\u306e\u6291\u5236")),(0,l.kt)("h3",{id:"4-\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e\u5b9f\u73fe"},"4. \u8cac\u4efb\u306e\u3042\u308b AI \u306e\u5b9f\u73fe"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Responsible AI Toolbox \u3068\u306e\u7d71\u5408"),(0,l.kt)("li",{parentName:"ul"},"\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u30c7\u30d0\u30c3\u30b0\u3068\u610f\u601d\u6c7a\u5b9a\u3078\u306e\u6d3b\u7528")))}c.isMDXComponent=!0},2819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/azureml-lifecycle-6ac1cf54c60be3f93f83771563184341.png"},6101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ml-lifecycle-ef0706e4760984752f9601f9a38a38b6.png"},5083:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mlsystem-component-2015-8093af324a78798070e1010080cd2e4f.png"}}]);