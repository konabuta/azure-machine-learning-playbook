"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=m(r),g=a,d=s["".concat(u,".").concat(g)]||s[g]||p[g]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const i={id:"system-monitoring",title:"\u30b7\u30b9\u30c6\u30e0\u76e3\u8996"},l=void 0,o={unversionedId:"azureml/platform/system-monitoring",id:"azureml/platform/system-monitoring",title:"\u30b7\u30b9\u30c6\u30e0\u76e3\u8996",description:"\u30b7\u30b9\u30c6\u30e0\u89b3\u70b9\u3067 Azure Machine Learning \u3084\u95a2\u9023\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u306e\u76e3\u8996\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/azureml/platform/system-monitoring.md",sourceDirName:"azureml/platform",slug:"/azureml/platform/system-monitoring",permalink:"/azure-machine-learning-playbook/docs/azureml/platform/system-monitoring",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/platform/system-monitoring.md",tags:[],version:"current",frontMatter:{id:"system-monitoring",title:"\u30b7\u30b9\u30c6\u30e0\u76e3\u8996"},sidebar:"azuremlSidebar",previous:{title:"\u30b3\u30b9\u30c8\u7ba1\u7406",permalink:"/azure-machine-learning-playbook/docs/azureml/platform/cost-management"},next:{title:"MLOps \u3068\u306f",permalink:"/azure-machine-learning-playbook/docs/azureml/mlops/mlops-concept"}},u={},m=[{value:"Azure Monitor",id:"azure-monitor",level:2},{value:"Azure Machine Learning \u306e\u76e3\u8996",id:"azure-machine-learning-\u306e\u76e3\u8996",level:2},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831",level:3},{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u76e3\u8996",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u76e3\u8996",level:2},{value:"\u6d88\u8cbb\u30a8\u30cd\u30eb\u30ae\u30fc",id:"\u6d88\u8cbb\u30a8\u30cd\u30eb\u30ae\u30fc",level:2},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831-1",level:3}],c={toc:m};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u89b3\u70b9\u3067 Azure Machine Learning \u3084\u95a2\u9023\u3059\u308b\u30b5\u30fc\u30d3\u30b9\u306e\u76e3\u8996\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"azure-monitor"},"Azure Monitor"),(0,a.kt)("p",null,"Azure \u306e\u76e3\u8996\u3067\u4e2d\u5fc3\u7684\u306a\u5f79\u5272\u3092\u679c\u305f\u3059\u306e\u306f Azure Monitor \u3067\u3059\u3002Azure Monitor \u306f Azure \u4e0a\u3067\u5229\u7528\u3067\u304d\u308b\u76e3\u8996\u306b\u95a2\u9023\u3059\u308b\u591a\u6570\u306e\u6a5f\u80fd\u3092\u7d71\u5408\u3057\u3001\u4e00\u5143\u7684\u306a\u7ba1\u7406\u3092\u53ef\u80fd\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("img",{src:r(3832).Z,width:"600"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"azure-machine-learning-\u306e\u76e3\u8996"},"Azure Machine Learning \u306e\u76e3\u8996"),(0,a.kt)("p",null,"Azure Machine Learning \u3082\u540c\u69d8\u306b Azure Monitor \u3092\u7528\u3044\u3066\u76e3\u8996\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002\u4ee3\u8868\u7684\u306a \u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30ed\u30b0\u3001\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30e1\u30c8\u30ea\u30c3\u30af\u3001\u30ea\u30bd\u30fc\u30b9\u30ed\u30b0\u306e 3 \u3064\u76e3\u8996\u30c7\u30fc\u30bf\u306e\u6982\u8981\u306f\u6b21\u306e\u901a\u308a\u3067\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u76e3\u8996\u30c7\u30fc\u30bf"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,a.kt)("th",{parentName:"tr",align:null},"\u683c\u7d0d\u5148"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5206\u6790\u30c4\u30fc\u30eb"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u30ed\u30b0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3001\u8a08\u7b97\u30ea\u30bd\u30fc\u30b9\u306e\u4f5c\u6210\u30fb\u66f4\u65b0\u306a\u3069"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure Monitor \u306b\u81ea\u52d5\u3067\u53ce\u96c6\u30fb\u683c\u7d0d\u3055\u308c\u308b\u304c\u3001\u4ed6\u306e\u5834\u6240\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure Monitor \u306e\u53ef\u8996\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30e1\u30c8\u30ea\u30c3\u30af"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9f\u9a13\u306e\u5b9f\u884c\u3001\u30e2\u30c7\u30eb\u306e\u7d71\u8a08\u60c5\u5831\u3001\u30af\u30a9\u30fc\u30bf\u60c5\u5831\u306a\u3069"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure Monitor \u306b\u81ea\u52d5\u3067\u53ce\u96c6\u30fb\u683c\u7d0d\u3055\u308c\u308b\u304c\u3001\u4ed6\u306e\u5834\u6240\u306b\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u308b\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"Azure Monitor \u306e\u53ef\u8996\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u30ea\u30bd\u30fc\u30b9\u30ed\u30b0"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30a2\u30bb\u30c3\u30c8\u3084\u30b8\u30e7\u30d6\u306e\u4f5c\u6210\u30fb\u524a\u9664\u30fb\u8aad\u307f\u53d6\u308a\u306e\u30a4\u30d9\u30f3\u30c8\u60c5\u5831\u306a\u3069"),(0,a.kt)("td",{parentName:"tr",align:null},'"\u8a3a\u65ad\u8a2d\u5b9a" \u304b\u3089\u660e\u6cbb\u7684\u306b\u53ce\u96c6\u3059\u308b\u30ed\u30b0\u306e\u7a2e\u985e\u3068\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u5148\u3092\u6307\u5b9a\u3059\u308b\u3002'),(0,a.kt)("td",{parentName:"tr",align:null},"Azure Monitor \u306e\u53ef\u8996\u5316\u3001Log Analytics")))),(0,a.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831"},"\u53c2\u8003\u60c5\u5831"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-JP/azure/machine-learning/monitor-azure-machine-learning"},"Azure Machine Learning \u306e\u76e3\u8996")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-JP/azure/machine-learning/monitor-resource-reference?view=azure-ml-py"},"Azure Machine Learning \u30c7\u30fc\u30bf\u306e\u76e3\u8996\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u76e3\u8996"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u76e3\u8996"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./network-security#azure-%E5%A4%96%E9%83%A8%E3%81%B8%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E9%80%9A%E4%BF%A1%E3%81%AE%E5%BF%85%E8%A6%81%E6%80%A7"},"\u5916\u90e8\u3078\u306e\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u901a\u4fe1\u306e\u5fc5\u8981\u6027")," \u306b\u3042\u308b\u3088\u3046\u306b\u3001Data Scientist \u306f\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u4e0a\u306b\u3042\u308b\u3055\u307e\u3056\u307e\u306a\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5229\u7528\u3057\u307e\u3059\u3002Hub \u69cb\u6210\u3067 Azure Firewall \u306e\u5229\u7528\u3057\u305f\u5834\u5408\u3001\u901a\u4fe1\u30ed\u30b0\u304c\u4e00\u5143\u7684\u306b\u53d6\u5f97\u3067\u304d\u308b\u305f\u3081\u3001Azure Machine Learning \u3092\u5229\u7528\u3057\u3066\u3044\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u30a2\u30af\u30bb\u30b9\u5c65\u6b74\u3092\u5206\u6790\u3057\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u5236\u5fa1\u306e\u8a2d\u5b9a\u306b\u5f79\u7acb\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,"Azure Firewall \u306e\u76e3\u8996\u7528\u306e\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9 (Workbook) \u304c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3054\u6d3b\u7528\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("img",{src:"https://raw.githubusercontent.com/Azure/Azure-Network-Security/master/Cross%20Product/MediaFiles/Azure-Firewall/AzFwWorkbook.png",width:"600"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"\u30b5\u30f3\u30d7\u30eb : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-quickstart-templates/tree/master/quickstarts/microsoft.machinelearningservices/machine-learning-workspace-monitoring-dashboard"},"Create an Azure ML monitoring dashboard")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6d88\u8cbb\u30a8\u30cd\u30eb\u30ae\u30fc"},"\u6d88\u8cbb\u30a8\u30cd\u30eb\u30ae\u30fc"),(0,a.kt)("p",null,"\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u30e1\u30c8\u30ea\u30c3\u30af\u3067\u53ce\u96c6\u3055\u308c\u305f GPU \u30a8\u30cd\u30eb\u30ae\u30fc\u30e1\u30c8\u30ea\u30c3\u30af (GpuEnergyJoules) \u3092 Azure Machine Learning Studio \u3084 Azure Monitor \u3067\u8868\u793a\u3059\u308b\u3053\u3068g\u3042\u3067\u304d\u307e\u3059\u3002"),(0,a.kt)("img",{src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/319363i635B36204187FF30/image-size/large?v=v2&px=999",width:"500"}),(0,a.kt)("br",null),(0,a.kt)("img",{src:"https://techcommunity.microsoft.com/t5/image/serverpage/image-id/319381i123783E4F098758C/image-size/large?v=v2&px=999",width:"500"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831-1"},"\u53c2\u8003\u60c5\u5831"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/green-tech-blog/charting-the-path-towards-sustainable-ai-with-azure-machine/ba-p/2866923"},"Charting the path towards sustainable AI with Azure Machine Learning resource metrics"))))}p.isMDXComponent=!0},3832:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/azure-monitor-b8451163460c05896505ba712793bd3a.png"}}]);