(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,b=p["".concat(i,".").concat(h)]||p[h]||d[h]||a;return n?r.a.createElement(b,s(s({ref:t},u),{},{components:n})):r.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var o=n(3),r=n(7),a=(n(0),n(104)),i={id:"introduction",title:"Introduction"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Hello \ud83d\udc4b",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/openpesa/openpesa.github.io/edit/main/docs/introduction.md",version:"current",sidebar:"someSidebar",next:{title:"Official SDKs / Libraries",permalink:"/docs/sdk_intergration"}},l=[{value:"Hello \ud83d\udc4b",id:"hello-",children:[]},{value:"What is Openpesa ?",id:"what-is-openpesa-",children:[]},{value:"Why Openpesa ?",id:"why-openpesa-",children:[]},{value:"Convinced? Wanna Contribute ?",id:"convinced-wanna-contribute-",children:[]},{value:"Thanks",id:"thanks",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"hello-"},"Hello \ud83d\udc4b"),Object(a.b)("h2",{id:"what-is-openpesa-"},"What is Openpesa ?"),Object(a.b)("p",null,"A group of individuals who have banded together to build open-source, solid, well-tested integration solutions to payment gateways using modern standards.\nCurrently focusing on Vodacom Mpesa OpenAPI\nBased In Tanzania."),Object(a.b)("h2",{id:"why-openpesa-"},"Why Openpesa ?"),Object(a.b)("p",null,"We\u2019re doing this instead of releasing code under our personal accounts for a few reasons, but the main reason is this:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A problem shared is a problem halved. Working together we take care of business quicker, can get more feedback, and respond to issues and pull requests faster."),Object(a.b)("li",{parentName:"ul"},"There are no plans to reinvent any wheels unless those wheels are old, broken, unsafe, or horrible to use. If the code cannot be installed with NOM, has an API written with BizZaroCapS, doesn\u2019t have a single unit-test, is broken or the lead developer has abandoned the project, then that is a problem which can most likely be solved with a fresh start, and we\u2019ll be on the case to make it as awesome as possible.")),Object(a.b)("h2",{id:"convinced-wanna-contribute-"},"Convinced? Wanna Contribute ?"),Object(a.b)("p",null,"Openpesa is an open-source initiative. Lots of passionate, helpful individuals have joined and voluntarily contributed every single bit throughout this initiative: From this website through the documentation to the very core of the application and project. So, if you like openpesa solutions and would like to give back some love, we'd like to see your contributions! It doesn't matter how familiar you are with programming, or whether you know how to write programs. There are plenty of ways to be helpful!\nOne of the first things you should do is advocate Openpesa, and get to know it - read about it, evangelize it, and engage with the wider community. You can also translate the user interface to your mother tongue or learn how to write more SDKs. Be creative!\nIf you'd like to help, get in touch! Also, the wiki is always a valuable resource."),Object(a.b)("h4",{id:"development-workflow"},"Development workflow"),Object(a.b)("p",null,"The main development happens in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/openpesa"},"GitHub"),". To contribute, fork one of the repos, branch off a feature branch from developing, make your changes, and commit them, push to your fork and submit a pull request.\nMost of the time we merge develop into the main branch, which results in a new release. This means you will always find the latest stable version in the main branch."),Object(a.b)("h2",{id:"thanks"},"Thanks"),Object(a.b)("p",null,"Many individuals, companies, and organizations have contributed to Openpesa. We'd like to thank them all!\nAdditionally, our thanks go out to the tens of thousands of developers and organizations who have created all the modules we depend on or contributed in some way to our ability to provide Openpesa as open source.\nWe'd also like to thank you. You, who've been making Openpesa what it is, if you've been developing awesome features, whether you're running an instance or you're just one of our diligent users."),Object(a.b)("p",null,"Thank you! \ud83d\ude0a"))}c.isMDXComponent=!0}}]);