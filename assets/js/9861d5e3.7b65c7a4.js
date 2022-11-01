"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),s=l,b=c["".concat(u,".").concat(s)]||c[s]||k[s]||r;return n?a.createElement(b,o(o({ref:t},m),{},{components:n})):a.createElement(b,o({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={id:"notebook-to-job",title:"Notebook \u306e Job \u3078\u306e\u5909\u63db"},o=void 0,i={unversionedId:"azureml/mlops/notebook-to-job",id:"azureml/mlops/notebook-to-job",title:"Notebook \u306e Job \u3078\u306e\u5909\u63db",description:"Prototyping Loop \u304b\u3089 Training Loop \u306b\u9077\u79fb\u3059\u308b\u969b\u3001Data Scientist \u306e\u6210\u679c\u7269\u3067\u3042\u308b Notebook \u3092 Azure Machine Learning \u306e Job \u3067\u5b9f\u884c\u3059\u308b\u5f62\u614b\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002",source:"@site/docs/azureml/mlops/notebook-to-job.md",sourceDirName:"azureml/mlops",slug:"/azureml/mlops/notebook-to-job",permalink:"/azure-machine-learning-playbook/docs/azureml/mlops/notebook-to-job",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/mlops/notebook-to-job.md",tags:[],version:"current",frontMatter:{id:"notebook-to-job",title:"Notebook \u306e Job \u3078\u306e\u5909\u63db"},sidebar:"azuremlSidebar",previous:{title:"Azure ML \u306b\u3088\u308b\u5b9f\u88c5",permalink:"/azure-machine-learning-playbook/docs/azureml/mlops/mlops-maturity-azureml"},next:{title:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u6982\u8981",permalink:"/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-concept"}},u={},p=[{value:"\u5168\u4f53\u306e\u6d41\u308c",id:"\u5168\u4f53\u306e\u6d41\u308c",level:2},{value:"1. Notebook \u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0",id:"1-notebook-\u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0",level:2},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831",level:3},{value:"2. \u30a2\u30bb\u30c3\u30c8\u306e\u758e\u7d50\u5408",id:"2-\u30a2\u30bb\u30c3\u30c8\u306e\u758e\u7d50\u5408",level:2},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831-1",level:3},{value:"3. \u30b8\u30e7\u30d6\u306e\u4f5c\u6210",id:"3-\u30b8\u30e7\u30d6\u306e\u4f5c\u6210",level:2},{value:"\u53c2\u8003\u60c5\u5831",id:"\u53c2\u8003\u60c5\u5831-2",level:3}],m={toc:p};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Prototyping Loop \u304b\u3089 Training Loop \u306b\u9077\u79fb\u3059\u308b\u969b\u3001Data Scientist \u306e\u6210\u679c\u7269\u3067\u3042\u308b Notebook \u3092 Azure Machine Learning \u306e Job \u3067\u5b9f\u884c\u3059\u308b\u5f62\u614b\u306b\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u63a8\u5968\u3055\u308c\u307e\u3059\u3002\n\u672c\u30da\u30fc\u30b8\u3067\u306f Notebook \u3092 Azure Machine Learning Job \u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30b9\u30c6\u30c3\u30d7\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5168\u4f53\u306e\u6d41\u308c"},"\u5168\u4f53\u306e\u6d41\u308c"),(0,l.kt)("p",null,"\u6b21\u306e\u6d41\u308c\u3067 Notebook \u3092\u5909\u63db\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-notebook-%E3%81%AE%E3%83%AA%E3%83%95%E3%82%A1%E3%82%AF%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0"},"Notebook \u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88%E3%81%AE%E7%96%8E%E7%B5%90%E5%90%88"},"\u30a2\u30bb\u30c3\u30c8\u306e\u758e\u7d50\u5408"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf   "),(0,l.kt)("li",{parentName:"ul"},"\u8a08\u7b97\u74b0\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u74b0\u5883"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-%E3%82%B8%E3%83%A7%E3%83%96%E3%81%AE%E4%BD%9C%E6%88%90"},"\u30b8\u30e7\u30d6\u306e\u4f5c\u6210"))),(0,l.kt)("br",null),(0,l.kt)("img",{src:n(1413).Z,width:"1000"}),(0,l.kt)("br",null),(0,l.kt)("br",null),"Notebook \u306f Python Script \u306e\u5909\u66f4\u3055\u308c\u3001GitHub \u3067\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002\u307e\u305f\u95a2\u9023\u3059\u308b\u30a2\u30bb\u30c3\u30c8\u306f Azure Machine Learning \u3067\u7ba1\u7406\u3059\u308b\u3053\u3068\u3067\u3001\u30c1\u30fc\u30e0\u306b\u5171\u6709\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u305f\u308a\u3001\u53ef\u89b3\u6e2c\u6027\u30fb\u518d\u73fe\u6027\u3092\u78ba\u4fdd\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"1-notebook-\u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0"},"1. Notebook \u306e\u30ea\u30d5\u30a1\u30af\u30bf\u30ea\u30f3\u30b0"),(0,l.kt)("p",null,"Notebook \u306f\u5c5e\u4eba\u5316\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u591a\u3044\u305f\u3081\u3001\u6b21\u306e\u3088\u3046\u306a\u53d6\u308a\u7d44\u307f\u3092\u884c\u3044\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u306a\u30b3\u30fc\u30c9\u3092\u524a\u9664\u3059\u308b"),(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Notebook \u306e\u4e2d\u3067\u306f\u63a2\u7d22\u7684\u306a\u76ee\u7684\u3067\u5229\u7528\u3055\u308c\u308b\u30b3\u30fc\u30c9\u304c\u3042\u308a\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6c4e\u7528\u7684\u306a\u30b3\u30fc\u30c9\u3092\u95a2\u6570 (function) \u306b\u3059\u308b"),(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5358\u4f53\u30c6\u30b9\u30c8\u304c\u5bb9\u6613\u306b\u306a\u308a\u3001\u4fdd\u5b88\u6027\u304c\u5411\u4e0a\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Notebook \u3092 Python \u30b9\u30af\u30ea\u30d7\u30c8\u306b\u5909\u63db\u3059\u308b"),(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7684\u306a python \u30b3\u30de\u30f3\u30c9\u304b\u3089\u5b9f\u884c\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("a",{parentName:"p",href:"https://papermill.readthedocs.io/en/latest/"},"papermill")," \u3092\u4f7f\u3046\u3053\u3068\u3067 Notebook \u3092\u305d\u306e\u307e\u307e\u30b3\u30de\u30f3\u30c9\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))),(0,l.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831"},"\u53c2\u8003\u60c5\u5831"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/machine-learning/v1/how-to-convert-ml-experiment-to-production#create-unit-tests-for-each-python-file"},"ML \u5b9f\u9a13\u3092\u904b\u7528 Python \u30b3\u30fc\u30c9\u306b\u5909\u63db\u3059\u308b"))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"2-\u30a2\u30bb\u30c3\u30c8\u306e\u758e\u7d50\u5408"},"2. \u30a2\u30bb\u30c3\u30c8\u306e\u758e\u7d50\u5408"),(0,l.kt)("p",null,"\u30b3\u30fc\u30c9\u306e\u4e2d\u3067\u5229\u7528\u3055\u308c\u308b\u6b21\u306e\u30a2\u30bb\u30c3\u30c8\u3092 Azure Machine Learning \u306e\u30a2\u30bb\u30c3\u30c8\u7ba1\u7406\u306e\u6a5f\u80fd\u306b\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u3067\u3001\u30c1\u30fc\u30e0\u3067\u5171\u6709\u3057\u958b\u767a\u30fb\u904b\u7528\u7ba1\u7406\u306e\u52b9\u7387\u6027\u3092\u4e0a\u3052\u307e\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u30c7\u30fc\u30bf"),(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30e2\u30c7\u30eb\u5b66\u7fd2\u3067\u7528\u3044\u308b\u30c7\u30fc\u30bf\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"Azure Machine Learning \u306e ",(0,l.kt)("inlineCode",{parentName:"li"},"Data")," \u3092\u5229\u7528\u3057\u307e\u3059\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30c7\u30fc\u30bf\u304c\u683c\u7d0d\u3055\u308c\u3066\u3044\u308b Azure Storage \u3078\u306e\u30d1\u30b9\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Python \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u6642\u306b\u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u306e\u30d1\u30b9\u3092\u5f15\u6570\u306b\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u30b3\u30fc\u30c9\u3092\u7de8\u96c6\u3057\u307e\u3059\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8a08\u7b97\u74b0\u5883"),(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8a08\u7b97\u74b0\u5883\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"Azure Machine Learning \u306e ",(0,l.kt)("inlineCode",{parentName:"li"},"Compute Cluster")," \u3092\u5229\u7528\u3057\u307e\u3059\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Azure VM \u306e\u4e2d\u304b\u3089\u4f7f\u3044\u305f\u3044\u30b9\u30da\u30c3\u30af\u3068\u53f0\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u74b0\u5883"),(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python \u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("li",{parentName:"ul"},"Azure Machine Learning \u306e ",(0,l.kt)("inlineCode",{parentName:"li"},"Environment")," \u3092\u5229\u7528\u3057\u307e\u3059\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"conda \u306e YAML \u30d5\u30a1\u30a4\u30eb\u3084 Dockerfile \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")))),(0,l.kt)("br",null),(0,l.kt)("img",{src:n(2033).Z,width:"1000"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831-1"},"\u53c2\u8003\u60c5\u5831"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../fundamentals/azureml-resources-assets"},"Fundamentals - \u30ea\u30bd\u30fc\u30b9\u3001\u30a2\u30bb\u30c3\u30c8"))),(0,l.kt)("h2",{id:"3-\u30b8\u30e7\u30d6\u306e\u4f5c\u6210"},"3. \u30b8\u30e7\u30d6\u306e\u4f5c\u6210"),(0,l.kt)("p",null,"Azure Machine Learning \u306e Job \u3092\u5229\u7528\u3057\u3066\u5b9f\u884c\u3057\u307e\u3059\u3002\u5fc5\u8981\u306a\u3082\u306e\u306f\u6b21\u306b\u6319\u3052\u308b\u3082\u306e\u3067\u3059\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"YAML \u30d5\u30a1\u30a4\u30eb"),(0,l.kt)("br",null),"\n\u5404\u30a2\u30bb\u30c3\u30c8\u306e\u60c5\u5831\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30fc\u30c9 : Python \u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30d1\u30b9"),(0,l.kt)("li",{parentName:"ul"},"Azure Machine Learning \u306e\u30a2\u30bb\u30c3\u30c8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Data")," : \u540d\u524d\u3001\u30d0\u30fc\u30b8\u30e7\u30f3\u3001\u30a2\u30af\u30bb\u30b9\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Environment")," : \u540d\u524d\u3001\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Compute Clusters")," : \u540d\u524d")))),(0,l.kt)("br",null),(0,l.kt)("img",{src:n(254).Z,width:"1000"}),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Azure CLI \u5b9f\u884c\u74b0\u5883"),(0,l.kt)("br",null),"\n\u5b9f\u884c\u74b0\u5883\u306b Azure CLI \u306e ",(0,l.kt)("inlineCode",{parentName:"p"},"ml")," \u62e1\u5f35\u6a5f\u80fd\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u65e2\u5b58\u62e1\u5f35\u6a5f\u80fd\u306e\u30a2\u30f3\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\naz extension remove -n azure-cli-ml\naz extension remove -n ml\n\n# ml \u62e1\u5f35\u6a5f\u80fd\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\naz extension add -n ml\n\n# \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u306e\u78ba\u8a8d\naz ml -h\n")),(0,l.kt)("p",null,"\u6b21\u306b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001Job \u3092\u767a\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"az ml job create -f train-job.yml\n")),(0,l.kt)("p",null,"\u7d50\u679c\u306f Azure Machine Learning studio \u306e Job \u306e\u753b\u9762\u304b\u3089\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u53c2\u8003\u60c5\u5831-2"},"\u53c2\u8003\u60c5\u5831"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/ja-jp/azure/machine-learning/how-to-configure-cli?tabs=public"},"Azure CLI (v2) \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3068\u8a2d\u5b9a"))),(0,l.kt)("hr",null))}k.isMDXComponent=!0},2033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assets-create-flow-b3a75d1f94f94311a72805a9169913f7.png"},254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/job-yaml-structure-9fd5cba8b722d9de94e254fa14626e09.png"},1413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/notebook-to-job-abstract-6b8dd341c2aaae6d2ec01faedd733ba3.png"}}]);