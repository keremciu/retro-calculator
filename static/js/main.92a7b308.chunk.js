(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(3),r=n(10),l=n.n(r),o=(n(16),n(4)),i=n(5),s=n(8),u=n(6),b=n(1),j=n(7),p=n.p+"static/media/casio_logo.87b00f05.svg",d=(n(17),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("header",{className:"Head",children:[Object(a.jsx)("img",{src:p,alt:"Casio Logo"}),Object(a.jsxs)("div",{className:"SolarPower",children:[Object(a.jsxs)("div",{className:"SolarRow",children:[Object(a.jsx)("div",{className:"cell"}),Object(a.jsx)("div",{className:"cell"}),Object(a.jsx)("div",{className:"cell"}),Object(a.jsx)("div",{className:"cell"})]}),Object(a.jsx)("div",{className:"Slogan",children:"TWO WAY POWER"})]})]})}}]),n}(c.PureComponent));function f(e,t){Object(c.useEffect)((function(){function n(n){n.preventDefault(),n.stopPropagation(),n.keyCode===e&&t()}return window.addEventListener("keyup",n),function(){return window.removeEventListener("keyup",n)}}),[t,e])}var v={MAIN:"MAIN_FUNC",BASIC:"BASIC_FUNC",MEMORY:"MEMORY_FUNC",MATH:"MATH_FUNC",NUMBER:"NUMBER_FUNC"},O=v.MAIN,m=v.BASIC,y=v.MEMORY,h=v.MATH,N=[{type:O,value:"off",label:"OFF",extraClass:"-small"},{type:O,value:"clear",label:"C",extraClass:"-red"},{type:O,value:"on",label:"AC",extraClass:"-red --acbutton"},{type:m,value:"perform",label:"="},{type:m,value:"divide",label:"\xf7"},{type:m,value:"percentage",label:"%"},{type:m,value:"multiply",label:"\u2715"},{type:m,value:"minus",label:"\u2212"},{type:m,value:"plus",label:"+",extraClass:"-large"},{type:y,value:"clear",label:"MC"},{type:y,value:"recall",label:"MR"},{type:y,value:"minus",label:"M-"},{type:y,value:"plus",label:"M+"},{type:h,value:"float",label:"\u22c5"},{type:h,value:"change_sign",label:"+/-"},{type:h,value:"sqrt",label:"\u221a",extraClass:"-small"}],x=v.MAIN,E=v.BASIC,g=v.MEMORY,C=v.MATH,M="".concat(x,".on"),w="".concat(x,".off"),A="".concat(x,".clear"),U="".concat(g,".clear"),R="".concat(g,".recall"),S="".concat(g,".minus"),k="".concat(g,".plus"),B="".concat(E,".divide"),_="".concat(E,".percentage"),F="".concat(E,".multiply"),T="".concat(E,".minus"),I="".concat(E,".plus"),L="".concat(E,".perform"),W="".concat(C,".float"),H=[["","","","".concat(C,".sqrt"),w],[U,R,S,k,B],[_,7,8,9,F],["".concat(C,".change_sign"),4,5,6,T],[A,1,2,3,I],[M,0,W,L]],P=(n(18),function(e){var t=e.onChange;f(13,(function(){t(N[3])})),f(32,(function(){t(N[2])})),f(187,(function(){t(N[8])})),f(189,(function(){t(N[7])})),f(48,(function(){t({type:"NUMBER_FUNC",value:"0"})})),f(49,(function(){t({type:"NUMBER_FUNC",value:"1"})})),f(50,(function(){t({type:"NUMBER_FUNC",value:"2"})})),f(51,(function(){t({type:"NUMBER_FUNC",value:"3"})})),f(52,(function(){t({type:"NUMBER_FUNC",value:"4"})})),f(53,(function(){t({type:"NUMBER_FUNC",value:"5"})})),f(54,(function(){t({type:"NUMBER_FUNC",value:"6"})})),f(55,(function(){t({type:"NUMBER_FUNC",value:"7"})})),f(56,(function(){t({type:"NUMBER_FUNC",value:"8"})})),f(57,(function(){t({type:"NUMBER_FUNC",value:"9"})}));var n=function(e,n){var c={extraClass:"",onChange:t};if("number"===typeof e||""===e)c.type=v.NUMBER,c.label=e.toString(),c.value=e.toString();else{var r=e.split("."),l=Object(j.a)(r,2),o=l[0],i=l[1],s=N.find((function(e){return e.type===o&&e.value===i}));c.type=o,c.value=s.value,c.label=s.label,s.extraClass&&(c.extraClass=s.extraClass)}return function(e,t){return Object(a.jsx)("div",{className:"cell ".concat(e.extraClass," ").concat(e.type+e.value),children:e.label&&Object(a.jsx)("button",{onClick:function(){return e.onChange(e)},children:e.label})},t)}(c,n)};return Object(a.jsx)("div",{className:"KeyLayout",children:H.map((function(e,t){return Object(a.jsx)("div",{className:"KeyRow",children:e.map((function(e,t){return n(e,t)}))},t)}))})}),Y=(n(19),n(2));var q=function(e,t){switch(t.value){case"clear":case"on":return Object(b.a)(Object(b.a)({},e),{},{open:"clear"!==t.value||e.open,currentEntry:0,nextEntry:null,operation:null});case"off":return Object(b.a)(Object(b.a)({},e),{},{open:!1,currentEntry:0,nextEntry:null,operation:null});default:return e}};function V(e){var t=e.currentEntry,n=e.nextEntry;switch(e.operation){case"plus":return Number(t)+Number(n);case"minus":return Number(t)-Number(n);case"multiply":return Number(t)*Number(n);case"divide":return Number(t)/Number(n);case"percentage":return Number(t)/100*Number(n);default:return 0}}var K=function(e,t){var n,a=e.currentEntry,c=e.nextEntry,r=t.value;if(null===a)return e;if("perform"===t.value){var l=Object(b.a)({},e);"perform"===e.lastAction&&(l=Object(b.a)(Object(b.a)({},e),e.lastCalculation));var o=V(l);return Object(b.a)(Object(b.a)({},e),{},{operation:null,float:!1,nextEntry:null,currentEntry:o,lastAction:"perform",lastCalculation:{operation:l.operation,nextEntry:l.nextEntry}})}return null===c?Object(b.a)(Object(b.a)({},e),{},{operation:r}):(n="percentage"===t.value?V(Object(b.a)(Object(b.a)({},e),{},{operation:t.value})):V(e),Object(b.a)(Object(b.a)({},e),{},{float:!1,operation:null,nextEntry:null,currentEntry:n}))};var D=function(e,t){var n=null!==e.nextEntry?"nextEntry":"currentEntry";switch(t.value){case"clear":return Object(b.a)(Object(b.a)({},e),{},{memory:null});case"recall":return null===e.memory?e:Object(b.a)(Object(b.a)({},e),{},Object(Y.a)({},n,e.memory));case"plus":case"minus":return Object(b.a)(Object(b.a)({},e),{},{memory:V({operation:t.value,currentEntry:e.memory||0,nextEntry:e[n]})});default:return e}};var G=function(e,t){var n,a=null!==e.nextEntry?"nextEntry":"currentEntry";switch(t.value){case"sqrt":var c=-1===Math.sign(e[a]);return Object(b.a)(Object(b.a)({},e),{},Object(Y.a)({},a,c?-1*Math.sqrt(Math.abs(e[a])):Math.sqrt(e[a])));case"change_sign":return Object(b.a)(Object(b.a)({},e),{},Object(Y.a)({},a,-1*e[a]));case"float":return String(e[a]).indexOf(".")>-1?e:Object(b.a)(Object(b.a)({},e),{},(n={},Object(Y.a)(n,a,"".concat(e[a],".")),Object(Y.a)(n,"float",!0),n));default:return e}};var J,Q=function(e,t){var n,a=e.currentEntry,c=e.operation,r=null!==a&&null!==c?"nextEntry":"currentEntry";n=(e.float,null===e[r]?t.value:e[r]+t.value);var l=Number(n)<=Number.MAX_SAFE_INTEGER?Number(n):e[r];return Object(b.a)(Object(b.a)({},e),{},Object(Y.a)({float:!1,lastCalculation:{}},r,l))},X=v.MAIN,$=v.BASIC,z=v.MEMORY,Z=v.MATH,ee=v.NUMBER,te=(J={},Object(Y.a)(J,X,q),Object(Y.a)(J,$,K),Object(Y.a)(J,z,D),Object(Y.a)(J,Z,G),Object(Y.a)(J,ee,Q),J);function ne(e,t){return te[t.type](e,t)}var ae={open:!1,currentEntry:0,nextEntry:null,operation:null,float:!1,memory:null,automaticTurnOff:null,lastAction:null,lastCalculation:{}},ce=function(){var e=Object(c.useState)(ae),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{className:"Calculator",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"Screen",children:Object(a.jsxs)("div",{className:"in",children:[Object(a.jsx)("span",{className:"displayValue",children:n.open?n.nextEntry||n.currentEntry:""}),!!n.memory&&Object(a.jsxs)("span",{className:"memorySign",children:["M",Object(a.jsx)("div",{children:"\u29eb"}),"E"]})]})}),Object(a.jsxs)("div",{className:"Pad",children:[Object(a.jsx)("h2",{className:"modelText",children:"SL-300SV"}),Object(a.jsx)(P,{onChange:function(e){n.automaticTurnOff&&clearTimeout(n.automaticTurnOff),r(Object(b.a)(Object(b.a)({lastAction:null,lastCalculation:{}},ne(n,e)),{},{automaticTurnOff:setTimeout((function(){var e=N.find((function(e){return"off"===e.value}));r(ne(n,e))}),6e5)}))}})]})]})]})},re=(n(20),n.p+"static/media/photo.83f5bc36.png"),le=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("h1",{className:"App-title",children:"Retro Calculator"}),Object(a.jsx)("p",{children:"Independent memory and profit-margin percent function make this calculator a perfect choice for business use."}),Object(a.jsx)("p",{className:"App-lead",children:"Casio SL-300SV Solar Powered Standard Function Calculator"})]}),Object(a.jsxs)("div",{className:"App-intro",children:[Object(a.jsx)(ce,{}),Object(a.jsxs)("div",{className:"original-photo",children:[Object(a.jsx)("p",{className:"App-lead",children:"Original photo for comparison"}),Object(a.jsx)("img",{src:re,alt:"Original Casio SL-300SV",width:"50%"})]})]}),Object(a.jsxs)("div",{className:"Footer-text",children:["Developed by ",Object(a.jsx)("strong",{children:"Kerem Sevencan"}),". Source code"," ",Object(a.jsx)("a",{href:"https://github.com/keremciu/retro-calculator",target:"_blank",rel:"noopener noreferrer",children:"GitHub repository"}),Object(a.jsxs)("div",{className:"keyboxes",children:[Object(a.jsxs)("div",{className:"keybox",children:[Object(a.jsx)("div",{className:"keycode",children:"SPACEBAR"}),Object(a.jsx)("span",{className:"hint",children:"click to space to open"})]}),Object(a.jsxs)("div",{className:"keybox",children:[Object(a.jsx)("div",{className:"keycode",children:"ENTER"}),Object(a.jsx)("span",{className:"hint",children:"click to enter to perform"})]})]})]})]})}}]),n}(c.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(a.jsx)(le,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/retro-calculator",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/retro-calculator","/service-worker.js");oe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ie(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):ie(e)}))}}()}],[[21,1,2]]]);
//# sourceMappingURL=main.92a7b308.chunk.js.map