"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=i,f=m["".concat(o,".").concat(k)]||m[k]||u[k]||n;return a?r.createElement(f,l(l({ref:t},c),{},{components:a})):r.createElement(f,l({ref:t},c))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={id:"rai-concept",title:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u6982\u8981"},l=void 0,s={unversionedId:"azureml/responsible-ai/rai-concept",id:"azureml/responsible-ai/rai-concept",title:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u6982\u8981",description:"1. \u8cac\u4efb\u306e\u3042\u308b AI \u6982\u8981",source:"@site/docs/azureml/responsible-ai/rai-concept.md",sourceDirName:"azureml/responsible-ai",slug:"/azureml/responsible-ai/rai-concept",permalink:"/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-concept",draft:!1,editUrl:"https://github.com/konabuta/azure-machine-learning-playbook/docs/azureml/responsible-ai/rai-concept.md",tags:[],version:"current",frontMatter:{id:"rai-concept",title:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u6982\u8981"},sidebar:"azuremlSidebar",previous:{title:"\u30b7\u30b9\u30c6\u30e0\u76e3\u8996",permalink:"/azure-machine-learning-playbook/docs/azureml/platform/system-monitoring"},next:{title:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u6280\u8853",permalink:"/azure-machine-learning-playbook/docs/category/\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e\u6280\u8853"}},o={},p=[{value:"1. \u8cac\u4efb\u306e\u3042\u308b AI \u6982\u8981",id:"1-\u8cac\u4efb\u306e\u3042\u308b-ai-\u6982\u8981",level:2},{value:"\u80cc\u666f",id:"\u80cc\u666f",level:3},{value:"Microsoft \u306e\u8cac\u4efb\u306e\u3042\u308b AI \u3078\u306e\u53d6\u308a\u7d44\u307f",id:"microsoft-\u306e\u8cac\u4efb\u306e\u3042\u308b-ai-\u3078\u306e\u53d6\u308a\u7d44\u307f",level:3},{value:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e 6 \u3064\u306e\u539f\u5247",id:"\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e-6-\u3064\u306e\u539f\u5247",level:3},{value:"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u5b9f\u8df5",id:"\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e\u5b9f\u8df5",level:3},{value:"\u539f\u5247 (Principles)",id:"\u539f\u5247-principles",level:4},{value:"\u30d7\u30e9\u30af\u30c6\u30a3\u30b9 (Practices)",id:"\u30d7\u30e9\u30af\u30c6\u30a3\u30b9-practices",level:4},{value:"\u30c4\u30fc\u30eb",id:"\u30c4\u30fc\u30eb",level:4},{value:"\u30ac\u30d0\u30ca\u30f3\u30b9",id:"\u30ac\u30d0\u30ca\u30f3\u30b9",level:4},{value:"Responsible AI Standard",id:"responsible-ai-standard",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u8cac\u4efb\u306e\u3042\u308b-ai-\u6982\u8981"},"1. \u8cac\u4efb\u306e\u3042\u308b AI \u6982\u8981"),(0,i.kt)("p",null,"\u672c\u30e2\u30b8\u30e5\u30fc\u30eb\u3067\u306f \u8cac\u4efb\u306e\u3042\u308b AI \u306b\u3064\u3044\u3066 Microsoft \u306e\u53d6\u308a\u7d44\u307f\u3092\u8e0f\u307e\u3048\u306a\u304c\u3089\u8aac\u660e\u3092\u3057\u3066\u304d\u307e\u3059\u3002"),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.kt)("p",null,"AI \u306e\u6280\u8853\u304c\u6025\u901f\u306b\u9032\u5316\u3057\u3066\u3044\u307e\u3059\u3002AI \u304c\u4eba\u9593\u306b\u8fd1\u3044\u3088\u3046\u306a\u80fd\u529b\u3092\u4fdd\u6301\u3057\u305f\u308a\u52d5\u4f5c\u3092\u3059\u308b\u3053\u3068\u3084\u3001\u793e\u4f1a\u7684\u5f71\u97ff\u3082\u5927\u304d\u3044\u3053\u3068\u304b\u3089 AI \u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u306e\u900f\u660e\u6027\u306b\u5bfe\u3059\u308b\u30cb\u30fc\u30ba\u304c\u9ad8\u307e\u3063\u3066\u3044\u307e\u3059\u3002\u900f\u660e\u6027\u304c\u7121\u3044 AI \u30b7\u30b9\u30c6\u30e0\u306f\u30b9\u30c6\u30fc\u30af\u30db\u30eb\u30c0\u30fc\u306e\u4fe1\u983c\u3092\u5931\u3044\u3001AI \u306e\u793e\u4f1a\u5b9f\u88c5\u3092\u59a8\u3052\u308b\u4e00\u3064\u306e\u5927\u304d\u306a\u8981\u56e0\u3068\u306a\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u306a\u304c\u3089\u3001\u8cac\u4efb\u306e\u3042\u308b AI \u306f\u307e\u3060\u5341\u5206\u306b\u6d78\u900f\u3057\u3066\u3044\u308b\u3068\u306f\u8a00\u3048\u307e\u305b\u3093\u3002AI \u30b7\u30b9\u30c6\u30e0\u306e\u30d7\u30e9\u30a4\u30d0\u30a4\u30b7\u30fc\u306e\u61f8\u5ff5\u3001\u8aa4\u52d5\u4f5c\u3001\u526f\u4f5c\u7528\u306a\u3069\u306e\u8ab2\u984c\u306b\u5bfe\u3057\u3066\u3001\u8ab0\u304c\u8cac\u4efb\u3092\u53d6\u308b\u306e\u304b\u3001\u3069\u306e\u3088\u3046\u306b\u5bfe\u51e6\u3059\u308b\u306e\u304b\u304c\u30eb\u30fc\u30eb\u5316\u3055\u308c\u3066\u3044\u306a\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u306f\u3001\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u6982\u5ff5\u3084\u6280\u8853\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u3001\u7686\u69d8\u306e\u4eba\u9593\u4e2d\u5fc3\u3067\u4fe1\u983c\u3055\u308c\u305f\u900f\u660e\u6027\u306e\u9ad8\u3044 AI \u30b7\u30b9\u30c6\u30e0\u306e\u69cb\u7bc9\u30fb\u904b\u7528\u7ba1\u7406\u306e\u624b\u52a9\u3051\u3068\u306a\u308b\u3053\u3068\u3092\u76ee\u7684\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'"The more powerful the tool, the greater the benefit or damage it can cause ... Technology innovation is not going to slow down. The work to manage it needs to speed up." Brad Smith, President and Chief Legal Officer, Microsoft')),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"microsoft-\u306e\u8cac\u4efb\u306e\u3042\u308b-ai-\u3078\u306e\u53d6\u308a\u7d44\u307f"},"Microsoft \u306e\u8cac\u4efb\u306e\u3042\u308b AI \u3078\u306e\u53d6\u308a\u7d44\u307f"),(0,i.kt)("p",null,"Microsoft \u81ea\u8eab\u3082\u8cac\u4efb\u306e\u3042\u308b AI \u306b\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002"),(0,i.kt)("img",{src:a(2228).Z,width:"500"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2016\u5e74 : Microsoft CEO Satya Nadella \u304c ",(0,i.kt)("a",{parentName:"li",href:"https://slate.com/technology/2016/06/microsoft-ceo-satya-nadella-humans-and-a-i-can-work-together-to-solve-societys-challenges.html"},"The Partnership of the Future")," \u3068\u3044\u3046\u8ad6\u8aac\u3092\u6295\u7a3f\u3057\u307e\u3057\u305f\u3002AI \u30b7\u30b9\u30c6\u30e0\u306e\u900f\u660e\u6027\u3001\u52b9\u7387\u6027\u3001\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u306e\u5c0a\u91cd\u3001\u30d0\u30a4\u30a2\u30b9\u304b\u3089\u306e\u4fdd\u8b77\u306a\u3069\u306b\u8a00\u53ca\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"2017\u5e74 : Aether (AI, Ethics, and Effects in Engineering and Research) \u3092\u8a2d\u7acb\u3057\u307e\u3057\u305f\u3002\u3053\u306e\u56e3\u4f53\u306f Microsoft \u793e\u5185\u306e\u8cac\u4efb\u306e\u3042\u308b AI \u306b\u95a2\u3059\u308b\u6700\u9ad8\u6a5f\u95a2\u306b\u306a\u3063\u3066\u304a\u308a\u3001\u69d8\u3005\u306a\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u8ab2\u984c\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3001\u30d7\u30ed\u30bb\u30b9\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u306b\u95a2\u3059\u308b\u63d0\u8a00\u3092\u884c\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"2018\u5e74 : ",(0,i.kt)("a",{parentName:"li",href:"https://news.microsoft.com/ja-jp/2018/01/24/180117-future-computed-artificial-intelligence-role-society/"},"The Future Computed")," \u3068\u3044\u3046\u66f8\u7c4d\u3092\u516c\u8868\u3057\u307e\u3057\u305f\u3002AI \u304c\u793e\u4f1a\u306b\u3082\u305f\u3089\u3059\u8ab2\u984c\u3001AI \u3092\u3069\u3046\u3059\u308c\u3070\u8cac\u4efb\u304c\u3042\u308b\u5f62\u3067\u958b\u767a\u3055\u308c\u3001\u904b\u7528\u3055\u308c\u308b\u306e\u304b\u3001\u3069\u306e\u3088\u3046\u306b\u30ac\u30d0\u30ca\u30f3\u30b9\u3092\u5236\u5b9a\u3059\u308c\u3070\u3044\u3044\u306e\u304b\u306b\u3064\u3044\u3066 Microsoft \u306e\u898b\u89e3\u3092\u8ff0\u3079\u3066\u3044\u308b\u3082\u306e\u3067\u3059\u3002\u5f8c\u306b\u8aac\u660e\u3059\u308b 6 \u3064\u306e\u57fa\u672c\u539f\u5247\u306b\u3064\u3044\u3066\u3082\u8a00\u53ca\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001\u9854\u8a8d\u8a3c\u6280\u8853\u306e\u900f\u660e\u3084\u72ec\u7acb\u3057\u305f\u7b2c\u4e09\u8005\u6a5f\u95a2\u306b\u3088\u308b\u30c6\u30b9\u30c8\u306e\u6cd5\u898f\u5236\u306e\u5fc5\u8981\u6027\u3092\u8a34\u3048\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"2019\u5e74 : Office of Responsible AI \u3092\u8a2d\u7acb\u3057\u307e\u3057\u305f\u3002\u30dd\u30ea\u30b7\u30fc\u3084\u30ac\u30d0\u30ca\u30f3\u30b9\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u7b56\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u307e\u305f\u3001Responsible AI Standard (v1) \u3092\u793e\u5185\u7528\u306b\u767a\u884c\u3057\u307e\u3057\u305f\u3002"),(0,i.kt)("li",{parentName:"ul"},"2020\u5e74 : RAISE (Responsible AI Strategy in Engineering) \u306f\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u5168\u4f53\u3067\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u30eb\u30fc\u30eb\u3068\u30d7\u30ed\u30bb\u30b9\u306e\u5b9f\u88c5\u3092\u4fc3\u9032\u3059\u308b\u305f\u3081\u306b\u8a2d\u7acb\u3055\u308c\u307e\u3057\u305f\u3002"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e74 : Responsible AI Standard (v2) \u3092\u793e\u5185\u7528\u306b\u767a\u884c\u3057\u307e\u3057\u305f\u3002"),(0,i.kt)("li",{parentName:"ul"},"2021\u5e74 : Responsible AI Standard (v2) \u3092\u793e\u5916\u306b\u4e00\u822c\u516c\u958b\u3057\u307e\u3057\u305f\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u307e\u305f\u6700\u8fd1\u3067\u306f Microsoft \u306e\u3053\u308c\u307e\u3067\u306e\u57f9\u3063\u3066\u304d\u305f\u77e5\u898b\u3092\u793e\u4f1a\u30fb\u304a\u5ba2\u69d8\u306b\u4f1d\u3048\u3066\u3044\u304f\u3079\u304f\u3001",(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/ja-JP/ai/ai-business-school"},"AI Business School")," \u3068\u3044\u3046\u8cac\u4efb\u306e\u3042\u308b AI \u306a\u3069\u306b\u3064\u3044\u3066\u5b66\u3079\u308b\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u5b66\u7fd2\u30b3\u30f3\u30c6\u30f3\u30c4\u3001\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3001\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059\u3002")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e-6-\u3064\u306e\u539f\u5247"},"\u8cac\u4efb\u306e\u3042\u308b AI \u306e 6 \u3064\u306e\u539f\u5247"),(0,i.kt)("p",null,"Microsoft \u306f AI \u30b7\u30b9\u30c6\u30e0\u306e\u958b\u767a\u304a\u3088\u3073\u904b\u7528\u7ba1\u7406\u306b\u304a\u3051\u308b\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u539f\u5247\u3092 6 \u3064\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("img",{src:a(1635).Z,width:"500"}),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u516c\u5e73\u6027 (Fairness)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u306f\u5168\u3066\u306e\u4eba\u3092\u516c\u5e73\u306b\u6271\u3044\u3001\u540c\u3058\u5c5e\u6027\u30fb\u72b6\u6cc1\u306e\u4eba\u305f\u3061\u306b\u5bfe\u3057\u3066\u7570\u306a\u308b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u3053\u3068\u3092\u56de\u907f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u4fe1\u983c\u6027\u3068\u5b89\u5168\u6027 (Reliability & Safety)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u306f\u4fe1\u983c\u6027\u304c\u9ad8\u304f\u5b89\u5168\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u8a2d\u8a08\u3055\u308c\u305f\u3068\u304a\u308a\u306b\u52d5\u4f5c\u3057\u3001\u65b0\u3057\u3044\u72b6\u6cc1\u306b\u3082\u5b89\u5168\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3 (Privacy & Security)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u3067\u306f\u30c7\u30fc\u30bf\u3092\u6271\u3046\u305f\u3081\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3068\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306e\u4fdd\u8b77\u304c\u5fc5\u8981\u3067\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u5305\u62ec\u6027 (Inclusiveness)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u306b\u9650\u3089\u305a\u6280\u8853\u306f\u5168\u3066\u306e\u4eba\u306b\u3082\u305f\u3089\u3055\u308c\u308b\u3079\u304d\u3067\u3001\u69d8\u3005\u306a\u30cb\u30fc\u30ba\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u900f\u660e\u6027 (Transparency)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u304c\u610f\u601d\u6c7a\u5b9a\u306b\u5229\u7528\u3055\u308c\u308b\u5834\u9762\u306a\u3069\u3067\u306f\u3001\u3069\u306e\u3088\u3046\u306b AI \u30b7\u30b9\u30c6\u30e0\u304c\u6c7a\u5b9a\u3092\u884c\u3063\u305f\u306e\u304b\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30ab\u30a6\u30f3\u30bf\u30d3\u30ea\u30c6\u30a3 (Accountability)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u3092\u8a2d\u8a08\u30fb\u69cb\u7bc9\u30fb\u904b\u7528\u7ba1\u7406\u3059\u308b\u4eba\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u304c\u3069\u306e\u3088\u3046\u306b\u52d5\u4f5c\u3059\u308b\u304b\u306b\u3064\u3044\u3066\u8aac\u660e\u8cac\u4efb\u304c\u3042\u308a\u307e\u3059\u3002")))),(0,i.kt)("h3",{id:"\u8cac\u4efb\u306e\u3042\u308b-ai-\u306e\u5b9f\u8df5"},"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u5b9f\u8df5"),(0,i.kt)("p",null,"\u3053\u308c\u3089\u306e 6 \u3064\u306e\u539f\u5247\u3092\u30d9\u30fc\u30b9\u306b\u3001\u8a2d\u8a08\u30d5\u30a7\u30fc\u30ba\u304b\u3089\u8cac\u4efb\u306e\u3042\u308b AI \u304c\u8003\u616e\u3055\u308c\u305f AI \u30b7\u30b9\u30c6\u30e0\u304c\u7d71\u5236\u306e\u52b9\u3044\u305f\u30ac\u30d0\u30ca\u30f3\u30b9\u306e\u5143\u306b\u5b9f\u88c5\u3055\u308c\u308b\u305f\u3081\u306b Microsoft \u304c\u793e\u5185\u5916\u306b\u516c\u958b\u3057\u3066\u3044\u308b\u53d6\u308a\u7d44\u307f\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("img",{src:a(8182).Z,width:"300"}),(0,i.kt)("h4",{id:"\u539f\u5247-principles"},"\u539f\u5247 (Principles)"),(0,i.kt)("p",null,"\u5148\u307b\u3069\u8ff0\u3079\u305f 6 \u3064\u306e\u539f\u5247 (Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, Accountability) \u3092\u6307\u3057\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"\u30d7\u30e9\u30af\u30c6\u30a3\u30b9-practices"},"\u30d7\u30e9\u30af\u30c6\u30a3\u30b9 (Practices)"),(0,i.kt)("p",null,"\u4eba\u9593\u4e2d\u5fc3\u306e\u30c7\u30b6\u30a4\u30f3\u3084\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306b\u304a\u3051\u308b\u554f\u984c\u3092\u4e88\u6e2c\u3057\u3001\u305d\u308c\u3092\u89e3\u6c7a\u3059\u308b\u3053\u3068\u3067\u8cac\u4efb\u306e\u3042\u308b\u65b9\u6cd5\u3067 AI \u30b7\u30b9\u30c6\u30e0\u3092\u958b\u767a\u3059\u308b\u3053\u3068\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/"},"Human-AI Guidelines"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/haxtoolkit/"},"Human-AI eXperiences (HAX)")," Toolkit \u306b\u542b\u307e\u308c\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/publication/responsible-bots/"},"Conversational AI Guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/design/inclusive/"},"Inclusive Design Guidelines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/project/ai-fairness-checklist/"},"AI Fairness Checklist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/research/project/datasheets-for-datasets/"},"Datasheets for Datasets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2019/12/06/ai-machine-learning-security/"},"AI Security Guidelines"))),(0,i.kt)("p",null,"\u305d\u306e\u53d6\u308a\u7d44\u307f\u306e\u7d50\u679c\u3068\u3057\u3066 \u4f8b\u3048\u3070 ",(0,i.kt)("a",{parentName:"p",href:"https:/.microsoft.com/en-us/legal/cognitive-services/language-service/transparency-note"},"Transparency Note for Azure Cognitive Service for Language")," \u306a\u3069\u306e Transparency Note \u3092\u516c\u958b\u3057\u3001AI \u30b7\u30b9\u30c6\u30e0\u306e\u76ee\u7684\u3001\u80fd\u529b\u3001\u9650\u754c\u306b\u3064\u3044\u3066\u306e\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u652f\u63f4\u3057\u3001\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u3068\u6280\u8853\u6587\u7ae0\u306e\u30ae\u30e3\u30c3\u30d7\u3092\u57cb\u3081\u3001\u304a\u5ba2\u69d8\u304c\u8cac\u4efb\u3092\u6301\u3063\u3066 AI \u3092\u5c0e\u5165\u3059\u308b\u305f\u3081\u306b\u77e5\u3063\u3066\u304a\u304f\u3079\u304d\u60c5\u5831\u3092\u7a4d\u6975\u7684\u306b\u4f1d\u3048\u3066\u3044\u307e\u3059\u3002\u305d\u306e\u4ed6\u3001Azure Cognitive Services \u5168\u822c\u306b\u304a\u3051\u308b\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u306f ",(0,i.kt)("a",{parentName:"p",href:"https:/.microsoft.com/ja-jp/azure/cognitive-services/responsible-use-of-ai-overview"},"Cognitive Services \u306b\u304a\u3051\u308b AI \u306e\u8cac\u4efb\u3042\u308b\u4f7f\u7528")," \u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("h4",{id:"\u30c4\u30fc\u30eb"},"\u30c4\u30fc\u30eb"),(0,i.kt)("p",null,"Data Scientist \u3084\u6a5f\u68b0\u5b66\u7fd2\u30a8\u30f3\u30b8\u30cb\u30a2\u306a\u3069\u306e\u6280\u8853\u8005\u304c AI \u306e\u69cb\u7bc9\u30fb\u904b\u7528\u306e\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u306e\u5404\u6240\u306b\u304a\u3044\u3066 AI \u3092\u7406\u89e3\u3057\u3001\u4fdd\u8b77\u3057\u3001\u5236\u5fa1\u3059\u308b\u305f\u3081\u306e\u30c4\u30fc\u30eb\u3092\u958b\u767a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u30e2\u30c7\u30eb\u958b\u767a\u30d5\u30a7\u30fc\u30ba\u306b\u304a\u3044\u3066\u306f\u3001Azure Machine Learning \u4e0a\u3067\u3042\u3089\u3086\u308b\u30c4\u30fc\u30eb\u304c\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("img",{src:a(5705).Z,width:"500"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7406\u89e3 (Understand)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AI \u30b7\u30b9\u30c6\u30e0\u306e\u6319\u52d5\u3092\u7406\u89e3\u3057\u307e\u3059\u3002\u516c\u5e73\u6027\u3001\u900f\u660e\u6027\u306e\u89b3\u70b9\u304c\u91cd\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30c4\u30fc\u30eb : InterpretML\u3001Fairlearn\u3001Error Analysis\u3001Responsible AI Toolbox \u306a\u3069\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u4fdd\u8b77 (Protect)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30e2\u30c7\u30eb\u3084\u30c7\u30fc\u30bf\u3092\u5916\u90e8\u304b\u3089\u306e\u653b\u6483\u3084\u6f5c\u5728\u7684\u306a\u30ea\u30b9\u30af\u304b\u3089\u4fdd\u8b77\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30c4\u30fc\u30eb : \u5dee\u5206\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u3001\u6a5f\u5bc6\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u306a\u3069\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u5236\u5fa1 (Control)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30ac\u30d0\u30ca\u30f3\u30b9\u7d71\u5236\u4e0b\u3067\u8cac\u4efb\u3042\u308b\u5f62\u3067\u958b\u767a\u304c\u9032\u3081\u3089\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u30c4\u30fc\u30eb : MLOps\u3001\u76e3\u67fb\u8a3c\u8de1\u3001\u30c7\u30fc\u30bf\u30b7\u30fc\u30c8\u306a\u3069\u3002")))),(0,i.kt)("p",null,"\u203b Microsoft \u304c\u63d0\u4f9b\u3059\u308b\u30c4\u30fc\u30eb\u306e\u6700\u65b0\u306e\u60c5\u5831\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/ja-JP/ai/responsible-ai-resources"},"\u8cac\u4efb\u3042\u308b AI \u306e\u30ea\u30bd\u30fc\u30b9")," \u3001\u7814\u7a76\u958b\u767a\u306e\u53d6\u308a\u7d44\u307f\u306f ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/blog/advancing-ai-trustworthiness-updates-on-responsible-ai-research/"},"Advancing AI trustworthiness: Updates on responsible AI research")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("h4",{id:"\u30ac\u30d0\u30ca\u30f3\u30b9"},"\u30ac\u30d0\u30ca\u30f3\u30b9"),(0,i.kt)("p",null,"Microsoft \u306f Hub and Spokes \u30e2\u30c7\u30eb\u3067\u30ac\u30d0\u30ca\u30f3\u30b9\u306e\u4f53\u5236\u3092\u69cb\u7bc9\u3057\u3066\u3044\u307e\u3059\u3002"),(0,i.kt)("img",{src:a(3994).Z,width:"300"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Responsible AI Council",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Microsoft \u306e\u30a8\u30b0\u30bc\u30af\u30c6\u30a3\u30d6\u30e1\u30f3\u30d0\u30fc\u3084\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u5404\u30b0\u30eb\u30fc\u30d7 (Aether Comittee, Office of Responsible AI, RAISE) \u306e\u4ee3\u8868\u8005\u304b\u3089\u69cb\u6210\u3055\u308c\u3001\u5168\u793e\u7684\u306b\u8cac\u4efb\u306e\u3042\u308b AI \u3078\u306e\u53d6\u308a\u7d44\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Aether Committee",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Aether (AI, Ethics, and Effects in Engineering and Research) \u306f Microsoft \u793e\u5185\u306e\u90e8\u9580\u3092\u6a2a\u65ad\u3059\u308b\u69d8\u3005\u306a\u5c02\u9580\u5bb6\u30b0\u30eb\u30fc\u30d7\u304b\u3089\u69cb\u6210\u3055\u308c\u3001Microsoft \u793e\u5185\u306e\u30b7\u30cb\u30a2\u30ea\u30fc\u30c0\u30fc\u30b7\u30c3\u30d7\u3084 Office of Responsible AI (ORA) \u306b\u5bfe\u3057\u3066\u3001AI \u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u3059\u308b\u7591\u554f\u30fb\u8ab2\u984c\u306a\u3069\u306b\u3064\u3044\u3066\u52a9\u8a00\u3059\u308b\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u307e\u305f 6 \u3064\u306e\u4f5c\u696d\u30b0\u30eb\u30fc\u30d7\u304c\u3042\u308a\u3001\u305d\u308c\u305e\u308c\u306e\u5206\u91ce\u3067\u6709\u76ca\u306a\u30c4\u30fc\u30eb\u3001\u30d9\u30b9\u30c8\u30d7\u30e9\u30af\u30c6\u30a3\u30b9\u3001\u5b9f\u88c5\u30ac\u30a4\u30c0\u30f3\u30b9\u306a\u3069\u3092\u958b\u767a\u3057\u3066\u3044\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Office of Responsible AI (ORA)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u539f\u5247\u3092\u5b9f\u8df5\u306b\u5411\u3051\u305f\u30ac\u30d0\u30ca\u30f3\u30b9\u306e\u5b9f\u88c5\u3068\u7ba1\u7406\u3092\u3057\u307e\u3059\u3002\u4ee3\u8868\u7684\u306a\u53d6\u308a\u7d44\u307f\u3068\u3057\u3066\u306f Responsible AI Standard \u3092\u4f5c\u6210\u3057\u3001\u793e\u5185\u306e\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u5b9f\u8df5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"RAISE (Responsible AI Strategy in Engineering)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u30b0\u30eb\u30fc\u30d7\u306b\u304a\u3051\u308b\u8cac\u4efb\u306e\u3042\u308b AI \u306e\u30eb\u30fc\u30eb\u306e\u7b56\u5b9a\u3001\u30b7\u30b9\u30c6\u30e0\u6226\u7565\u3001\u30d7\u30ed\u30bb\u30b9\u306e\u5b9f\u88c5\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Responsible AI Champs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Responsible AI Champs \u306f\u30b9\u30dd\u30fc\u30af\u306e\u5f79\u5272\u3092\u679c\u305f\u3057\u3001\u7d44\u7e54\u5168\u4f53\u306b\u308f\u305f\u308b\u30eb\u30fc\u30eb\u306e\u5b9f\u88c5\u3084\u3001\u8a8d\u77e5\u5ea6\u306e\u5411\u4e0a\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u304a\u5ba2\u69d8\u3084\u793e\u5185\u306b\u304a\u3051\u308b\u30bb\u30f3\u30b7\u30c6\u30a3\u30d6\u306a\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u306b\u5bfe\u3059\u308b\u30a2\u30c9\u30d0\u30a4\u30b6\u30ea\u30fc\u3092\u884c\u306a\u3063\u3066\u3044\u307e\u3059\u3002")))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"responsible-ai-standard"},"Responsible AI Standard"),(0,i.kt)("p",null,"2022\u5e74 Microsoft \u306f ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.microsoft.com/wp-content/uploads/prod/sites/5/2022/06/Microsoft-Responsible-AI-Standard-v2-General-Requirements-3.pdf"},"Responsible AI Standard v2")," \u3092\u793e\u5916\u306b\u516c\u958b\u3057\u307e\u3057\u305f\u3002\u5143\u3005\u306f Microsoft \u793e\u5185\u3067\u6d3b\u7528\u3055\u308c\u3066\u3044\u305f\u3082\u306e\u3067\u3059\u3002\u3053\u308c\u306f\u8cac\u4efb\u306e\u3042\u308b\u5f62\u3067 AI \u30b7\u30b9\u30c6\u30e0\u306e\u958b\u767a\u904b\u7528\u306e\u57fa\u6e96\u3068\u306a\u308b\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002"),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306e\u69cb\u6210")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Principles",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8cac\u4efb\u306e\u3042\u308b AI \u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u306e\u539f\u5247"))),(0,i.kt)("li",{parentName:"ul"},"Goals",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5404\u539f\u5247\u3067\u5b9f\u884c\u3055\u308c\u308b\u3079\u304d\u6210\u679c"))),(0,i.kt)("li",{parentName:"ul"},"Requirements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u30b4\u30fc\u30eb\u3092\u9054\u6210\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u306a\u30b9\u30c6\u30c3\u30d7"))),(0,i.kt)("li",{parentName:"ul"},"Tools and Practices",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5404\u30b9\u30c6\u30c3\u30d7\u3092\u5b9f\u884c\u3059\u308b\u306e\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30c4\u30fc\u30eb\u3084\u30d7\u30e9\u30af\u30c6\u30a3\u30b9")))),(0,i.kt)("p",null,"\u203b \u53c2\u8003\u60c5\u5831 "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://news.microsoft.com/ja-jp/2022/07/04/220704-microsofts-framework-for-building-ai-systems-responsibly/"},"\u8cac\u4efb\u3042\u308b AI \u30b7\u30b9\u30c6\u30e0\u69cb\u7bc9\u306e\u305f\u3081\u306e\u30de\u30a4\u30af\u30ed\u30bd\u30d5\u30c8\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af (\u6284\u8a33)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.microsoft.com/ja-jp/events/azurebase/blog/responsible-ai-investments-and-safeguards-for-facial-recognition/"},"\u9854\u8a8d\u8b58\u306b\u95a2\u3059\u308b\u8cac\u4efb\u3042\u308bAI\u30dd\u30ea\u30b7\u30fc\u306e\u5909\u66f4\u3068\u30ac\u30a4\u30c0\u30f3\u30b9\u306b\u3064\u3044\u3066 (\u6284\u8a33)"))),(0,i.kt)("br",null))}u.isMDXComponent=!0},5705:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/azureml_rai_process-121141d234f0bd19ac96472104703435.png"},3994:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/microsoft_rai_governance-1fb4d6dca953c00e88643207a6ed1747.png"},8182:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/microsoft_rai_into_practices-c21bf2fbf4ceb854941b0075cbdc4862.png"},2228:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/microsoft_rai_journey-10b74a83697cfbae1028e88693fa5180.png"},1635:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/microsoft_rai_principles-6ae941fbb1ca17ab83eaad9520517d41.png"}}]);