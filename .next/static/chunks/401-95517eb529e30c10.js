(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401],{3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),s=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var a;(null==n?void 0:null==(a=n.tagName)?void 0:a.toLowerCase())===e&&s.push(n)}let u=t.map(o).filter(e=>{for(let t=0,n=s.length;t<n;t++)if(i(s[t],e))return s.splice(t,1),!1;return!0});s.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(l-s.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y},default:function(){return v}});let r=n(1024),o=n(8533),i=r._(n(4887)),l=o._(n(2265)),s=n(3634),a=n(3313),u=n(2185),f=new Map,c=new Set,d=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],p=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:l="",strategy:s="afterInteractive",onError:u,stylesheets:h}=e,g=n||t;if(g&&c.has(g))return;if(f.has(t)){c.add(g),f.get(t).then(r,u);return}let y=()=>{o&&o(),c.add(g)},m=document.createElement("script"),v=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(m.innerHTML=i.__html||"",y()):l?(m.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",y()):t&&(m.src=t,f.set(t,v)),Object.entries(e))){if(void 0===r||d.includes(n))continue;let e=a.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===s&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",s),h&&p(h),document.body.appendChild(m)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");c.add(t)})}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:a="afterInteractive",onError:f,stylesheets:d,...p}=e,{updateScripts:g,scripts:y,getIsSsr:m,appDir:v,nonce:E}=(0,l.useContext)(s.HeadManagerContext),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;b.current||(o&&e&&c.has(e)&&o(),b.current=!0)},[o,t,n]);let w=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!w.current&&("afterInteractive"===a?h(e):"lazyOnload"===a&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),w.current=!0)},[e,a]),("beforeInteractive"===a||"worker"===a)&&(g?(y[a]=(y[a]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:f,...p}]),g(y)):m&&m()?c.add(t||n):m&&!m()&&h(e)),v){if(d&&d.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===a)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),l.default.createElement("script",{nonce:E,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),l.default.createElement("script",{nonce:E,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===a&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let v=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8475:function(e,t,n){e.exports=n(5935)},7168:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(2265);function o(e,t,n){(0,r.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}},609:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(2265),o=n(5818),i=n(5968),l=n(961);function s(e){let t=(0,l.h)(()=>(0,o.BX)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},4570:function(e,t,n){"use strict";let r,o;n.d(t,{v:function(){return k}});var i=n(5818),l=n(961),s=n(2265),a=n(6567);let u=new WeakMap;function f({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=u.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function c(e){e.forEach(f)}let d=new Set;var p=n(2868),h=n(9815);let g=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:g(),y:g()}),m={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function v(e,t,n,r){let o=n[t],{length:i,position:l}=m[t],s=o.current,a=n.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,p.Y)(0,o.scrollLength,o.current);let u=r-a;o.velocity=u>50?0:(0,h.R)(o.current-s,u)}let E={All:[[0,0],[1,1]]},b={start:0,center:.5,end:1};function w(e,t,n=0){let r=0;if(void 0!==b[e]&&(e=b[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let _=[0,0];var L=n(3245),S=n(4269);let x={x:0,y:0};var M=n(2363);let O=new WeakMap,A=new WeakMap,H=new WeakMap,W=e=>e===document.documentElement?window:e;var N=n(538);function C(e,t){(0,a.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let I=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function k({container:e,target:t,layoutEffect:n=!0,...i}={}){let f=(0,l.h)(I);return(n?N.L:s.useEffect)(()=>(C("target",t),C("container",e),function(e,{container:t=document.documentElement,...n}={}){let i=H.get(t);i||(i=new Set,H.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{v(e,"x",n,t),v(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=E.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):x,a=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let f=!t[i].interpolate,c=r.length;for(let e=0;e<c;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:_,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,b[e]?e:"0"]),w(o[0],n,r)-w(o[1],t)}(r[e],u[l],a[l],s[i]);f||n===t[i].interpolatorOffsets[e]||(f=!0),t[i].offset[e]=n}f&&(t[i].interpolate=(0,L.s)(t[i].offset,(0,S.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,y(),n);if(i.add(l),!O.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(M.frameData.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{M.Wi.read(e,!1,!0),M.Wi.update(n,!1,!0),M.Wi.update(l,!1,!0)};O.set(t,s);let f=W(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&A.set(t,"function"==typeof t?(d.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{d.delete(t),!d.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(c));let n=function(e,t,n){var r;if("string"==typeof e){let o=document;t&&((0,a.k)(!!t.current,"Scope provided, but no element detected."),o=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=u.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=O.get(t);return M.Wi.read(s,!1,!0),()=>{var e;(0,M.Pn)(s);let n=H.get(t);if(!n||(n.delete(l),n.size))return;let r=O.get(t);O.delete(t),r&&(W(t).removeEventListener("scroll",r),null===(e=A.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(i.offset)]),f}},3622:function(e,t,n){"use strict";n.d(t,{q:function(){return c}});var r=n(2265),o=n(5735),i=n(609),l=n(5968),s=n(538),a=n(123),u=n(1356),f=n(2363);function c(e,t={}){let{isStatic:n}=(0,r.useContext)(l._),c=(0,r.useRef)(null),d=(0,i.c)((0,o.i)(e)?e.get():e),p=()=>{c.current&&c.current.stop()};return(0,r.useInsertionEffect)(()=>d.attach((e,r)=>{if(n)return r(e);if(p(),c.current=(0,a.y)({keyframes:[d.get(),e],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),!f.frameData.isProcessing){let e=performance.now()-f.frameData.timestamp;e<30&&(c.current.time=(0,u.X)(e))}return d.get()},p),[JSON.stringify(t)]),(0,s.L)(()=>{if((0,o.i)(e))return e.on("change",e=>d.set(parseFloat(e)))},[d]),d}}}]);