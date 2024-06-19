import{r as h,R as J,j as t,a as s,F as k,L as w,u as Z}from"./app.5aafc160.js";import{t as Y}from"./transition.0463cda8.js";import{L as M,N as b,D as m}from"./DropdownMenu.365762cc.js";import{L as _}from"./Tawarin.08057ae7.js";function q(e,r){return h.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),h.exports.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))}const Q=h.exports.forwardRef(q);var K=Q;function ee(e,r){return h.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),h.exports.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}const te=h.exports.forwardRef(ee);var re=te;const A=J.createContext(),D=({children:e})=>{const[r,n]=h.exports.useState(!1),i=()=>{n(o=>!o)};return t(A.Provider,{value:{open:r,setOpen:n,toggleOpen:i},children:t("div",{className:"relative",children:e})})},ne=({children:e})=>{const{open:r,setOpen:n,toggleOpen:i}=h.exports.useContext(A);return s(k,{children:[t("div",{onClick:i,children:e}),r&&t("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},ae=({align:e="right",width:r="48",contentClasses:n="py-1 bg-white",children:i})=>{const{open:o,setOpen:a}=h.exports.useContext(A);let l="origin-top";e==="left"?l="origin-top-left left-0":e==="right"&&(l="origin-top-right right-0");let d="";return r==="48"&&(d="w-48"),t(k,{children:t(Y,{as:h.exports.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${d}`,onClick:()=>a(!1),children:t("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:i})})})})},ie=({href:e,method:r,as:n,children:i})=>t(w,{href:e,method:r,as:n,className:"block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800",children:i});D.Trigger=ne;D.Content=ae;D.Link=ie;var c=D;let oe={data:""},se=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||oe,le=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,de=/\/\*[^]*?\*\/|  +/g,W=/\n+/g,C=(e,r)=>{let n="",i="",o="";for(let a in e){let l=e[a];a[0]=="@"?a[1]=="i"?n=a+" "+l+";":i+=a[1]=="f"?C(l,a):a+"{"+C(l,a[1]=="k"?"":r)+"}":typeof l=="object"?i+=C(l,r?r.replace(/([^,])+/g,d=>a.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,d):d?d+" "+u:u)):a):l!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=C.p?C.p(a,l):a+":"+l+";")}return n+(r&&o?r+"{"+o+"}":o)+i},L={},V=e=>{if(typeof e=="object"){let r="";for(let n in e)r+=n+V(e[n]);return r}return e},ce=(e,r,n,i,o)=>{let a=V(e),l=L[a]||(L[a]=(u=>{let p=0,f=11;for(;p<u.length;)f=101*f+u.charCodeAt(p++)>>>0;return"go"+f})(a));if(!L[l]){let u=a!==e?e:(p=>{let f,y,x=[{}];for(;f=le.exec(p.replace(de,""));)f[4]?x.shift():f[3]?(y=f[3].replace(W," ").trim(),x.unshift(x[0][y]=x[0][y]||{})):x[0][f[1]]=f[2].replace(W," ").trim();return x[0]})(e);L[l]=C(o?{["@keyframes "+l]:u}:u,n?"":"."+l)}let d=n&&L.g?L.g:null;return n&&(L.g=L[l]),((u,p,f,y)=>{y?p.data=p.data.replace(y,u):p.data.indexOf(u)===-1&&(p.data=f?u+p.data:p.data+u)})(L[l],r,i,d),l},ue=(e,r,n)=>e.reduce((i,o,a)=>{let l=r[a];if(l&&l.call){let d=l(n),u=d&&d.props&&d.props.className||/^go/.test(d)&&d;l=u?"."+u:d&&typeof d=="object"?d.props?"":C(d,""):d===!1?"":d}return i+o+(l==null?"":l)},"");function F(e){let r=this||{},n=e.call?e(r.p):e;return ce(n.unshift?n.raw?ue(n,[].slice.call(arguments,1),r.p):n.reduce((i,o)=>Object.assign(i,o&&o.call?o(r.p):o),{}):n,se(r.target),r.g,r.o,r.k)}let X,I,S;F.bind({g:1});let N=F.bind({k:1});function he(e,r,n,i){C.p=r,X=e,I=n,S=i}function P(e,r){let n=this||{};return function(){let i=arguments;function o(a,l){let d=Object.assign({},a),u=d.className||o.className;n.p=Object.assign({theme:I&&I()},d),n.o=/ *go\d+/.test(u),d.className=F.apply(n,i)+(u?" "+u:""),r&&(d.ref=l);let p=e;return e[0]&&(p=d.as||e,delete d.as),S&&p[0]&&S(d),X(p,d)}return r?r(o):o}}var pe=e=>typeof e=="function",T=(e,r)=>pe(e)?e(r):e,me=(()=>{let e=0;return()=>(++e).toString()})(),G=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let r=matchMedia("(prefers-reduced-motion: reduce)");e=!r||r.matches}return e}})(),fe=20,z=new Map,ge=1e3,U=e=>{if(z.has(e))return;let r=setTimeout(()=>{z.delete(e),j({type:4,toastId:e})},ge);z.set(e,r)},xe=e=>{let r=z.get(e);r&&clearTimeout(r)},H=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,fe)};case 1:return r.toast.id&&xe(r.toast.id),{...e,toasts:e.toasts.map(a=>a.id===r.toast.id?{...a,...r.toast}:a)};case 2:let{toast:n}=r;return e.toasts.find(a=>a.id===n.id)?H(e,{type:1,toast:n}):H(e,{type:0,toast:n});case 3:let{toastId:i}=r;return i?U(i):e.toasts.forEach(a=>{U(a.id)}),{...e,toasts:e.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return r.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(a=>a.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let o=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},O=[],$={toasts:[],pausedAt:void 0},j=e=>{$=H($,e),O.forEach(r=>{r($)})},ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ve=(e={})=>{let[r,n]=h.exports.useState($);h.exports.useEffect(()=>(O.push(n),()=>{let o=O.indexOf(n);o>-1&&O.splice(o,1)}),[r]);let i=r.toasts.map(o=>{var a,l;return{...e,...e[o.type],...o,duration:o.duration||((a=e[o.type])==null?void 0:a.duration)||(e==null?void 0:e.duration)||ye[o.type],style:{...e.style,...(l=e[o.type])==null?void 0:l.style,...o.style}}});return{...r,toasts:i}},be=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||me()}),E=e=>(r,n)=>{let i=be(r,e,n);return j({type:2,toast:i}),i.id},g=(e,r)=>E("blank")(e,r);g.error=E("error");g.success=E("success");g.loading=E("loading");g.custom=E("custom");g.dismiss=e=>{j({type:3,toastId:e})};g.remove=e=>j({type:4,toastId:e});g.promise=(e,r,n)=>{let i=g.loading(r.loading,{...n,...n==null?void 0:n.loading});return e.then(o=>(g.success(T(r.success,o),{id:i,...n,...n==null?void 0:n.success}),o)).catch(o=>{g.error(T(r.error,o),{id:i,...n,...n==null?void 0:n.error})}),e};var we=(e,r)=>{j({type:1,toast:{id:e,height:r}})},ke=()=>{j({type:5,time:Date.now()})},Le=e=>{let{toasts:r,pausedAt:n}=ve(e);h.exports.useEffect(()=>{if(n)return;let a=Date.now(),l=r.map(d=>{if(d.duration===1/0)return;let u=(d.duration||0)+d.pauseDuration-(a-d.createdAt);if(u<0){d.visible&&g.dismiss(d.id);return}return setTimeout(()=>g.dismiss(d.id),u)});return()=>{l.forEach(d=>d&&clearTimeout(d))}},[r,n]);let i=h.exports.useCallback(()=>{n&&j({type:6,time:Date.now()})},[n]),o=h.exports.useCallback((a,l)=>{let{reverseOrder:d=!1,gutter:u=8,defaultPosition:p}=l||{},f=r.filter(v=>(v.position||p)===(a.position||p)&&v.height),y=f.findIndex(v=>v.id===a.id),x=f.filter((v,B)=>B<y&&v.visible).length;return f.filter(v=>v.visible).slice(...d?[x+1]:[0,x]).reduce((v,B)=>v+(B.height||0)+u,0)},[r]);return{toasts:r,handlers:{updateHeight:we,startPause:ke,endPause:i,calculateOffset:o}}},Ne=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ce=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pe=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,je=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ce} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Pe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Me=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ee=P("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Me} 1s linear infinite;
`,Re=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ze=N`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Oe=P("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Re} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ze} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,$e=P("div")`
  position: absolute;
`,Te=P("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,De=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Fe=P("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${De} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Be=({toast:e})=>{let{icon:r,type:n,iconTheme:i}=e;return r!==void 0?typeof r=="string"?h.exports.createElement(Fe,null,r):r:n==="blank"?null:h.exports.createElement(Te,null,h.exports.createElement(Ee,{...i}),n!=="loading"&&h.exports.createElement($e,null,n==="error"?h.exports.createElement(je,{...i}):h.exports.createElement(Oe,{...i})))},Ie=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Se=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,He="0%{opacity:0;} 100%{opacity:1;}",Ae="0%{opacity:1;} 100%{opacity:0;}",_e=P("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,We=P("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ue=(e,r)=>{let n=e.includes("top")?1:-1,[i,o]=G()?[He,Ae]:[Ie(n),Se(n)];return{animation:r?`${N(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ye=h.exports.memo(({toast:e,position:r,style:n,children:i})=>{let o=e.height?Ue(e.position||r||"top-center",e.visible):{opacity:0},a=h.exports.createElement(Be,{toast:e}),l=h.exports.createElement(We,{...e.ariaProps},T(e.message,e));return h.exports.createElement(_e,{className:e.className,style:{...o,...n,...e.style}},typeof i=="function"?i({icon:a,message:l}):h.exports.createElement(h.exports.Fragment,null,a,l))});he(h.exports.createElement);var Ve=({id:e,className:r,style:n,onHeightUpdate:i,children:o})=>{let a=h.exports.useCallback(l=>{if(l){let d=()=>{let u=l.getBoundingClientRect().height;i(e,u)};d(),new MutationObserver(d).observe(l,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return h.exports.createElement("div",{ref:a,className:r,style:n},o)},Xe=(e,r)=>{let n=e.includes("top"),i=n?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...i,...o}},Ge=F`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,R=16,Ke=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:i,children:o,containerStyle:a,containerClassName:l})=>{let{toasts:d,handlers:u}=Le(n);return h.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:R,left:R,right:R,bottom:R,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},d.map(p=>{let f=p.position||r,y=u.calculateOffset(p,{reverseOrder:e,gutter:i,defaultPosition:r}),x=Xe(f,y);return h.exports.createElement(Ve,{id:p.id,key:p.id,onHeightUpdate:u.updateHeight,className:p.visible?Ge:"",style:x},p.type==="custom"?T(p.message,p):o?o(p):h.exports.createElement(Ye,{toast:p,position:f}))}))},et=g;function tt(){const{auth:e,categories_global:r,carts_global_count:n,notifications_count:i,permissions:o}=Z().props,a=o?o.map(l=>l.name):"null";return s(M,{className:"relative bg-white",children:[t("div",{className:"px-4 mx-auto sm:px-6",children:s("div",{className:"flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10",children:[t("div",{className:"flex justify-start",children:s("a",{className:"flex",href:"/",children:[t("span",{className:"sr-only"}),t("img",{className:"w-8 h-8",src:_,"aria-label":"TawarinLogo",alt:"Logo"}),t("p",{className:"flex items-center justify-center ml-2 text-2xl tracking-tight text-transparent bg-gradient-to-r from-amber-300 via-amber-500 to-amber-500 bg-clip-text justify-items-center",children:"Tawarin"})]})}),e.user?t(k,{children:s(b,{className:"flex items-center md:hidden justify-items-end gap-x-2",href:"/notifications",children:[s("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-bell-ringing",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),t("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}),t("path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}),t("path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"})]}),i>0?i:null]})}):t(k,{}),t("div",{className:"hidden -my-2 -mr-2 md:hidden lg:hidden",children:s(M.Button,{className:"inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[t("span",{className:"sr-only",children:"Open menu"}),t(K,{className:"w-6 h-6"})]})}),s(M.Group,{as:"nav",className:"hidden space-x-10 md:flex",children:[e.user&&t(b,{href:"/wallets",children:"Saldo"}),t("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:t("div",{className:"relative ml-3",children:s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Reservasi",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-yellow-500 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("reservation.list"),children:"Reservasi"}),t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("reservationprofile.edit"),children:"Setting Company"}),t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("reservationCounters.index"),children:"Setting Layanan"}),t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("permissions.index"),children:"Setting Jadwal"})]})]})})}),a.indexOf("atur hak akses")>-1&&t("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:t("div",{className:"relative ml-3",children:s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Permission",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("users.index"),children:"Users"}),t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("roles.index"),children:"Roles"}),t(w,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("permissions.index"),children:"Permissions"})]})]})})}),t(b,{href:route("user.list"),children:"Pengguna"}),s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Perencanaan",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(c.Link,{href:route("plan.list"),children:"Cari Perencanaan"}),a.indexOf("melakukan penawaran perencanaan")>-1&&t(c.Link,{href:"/planbids",children:"Penawaran Saya"}),a.indexOf("lihat menu perencanaan")>-1&&s(k,{children:[t(c.Link,{href:"/plans",children:"Perencanaan Saya"}),t(c.Link,{href:"/plans/create",children:"Buat Perencanaan"}),t(c.Link,{href:route("planportofolios.index"),children:"Portofolio"})]})]})]}),s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Proyek",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(c.Link,{href:route("project.list"),children:"Cari Proyek"}),a.indexOf("melakukan penawaran proyek")>-1&&t(c.Link,{href:"/planbids",children:"Penawaran Saya"}),a.indexOf("lihat menu proyek")>-1&&s(k,{children:[t(c.Link,{href:"/projects",children:"Proyek Saya"}),t(c.Link,{href:"/projects/create",children:"Buat Proyek"}),t(c.Link,{href:route("planportofolios.index"),children:"Portofolio"})]})]})]}),a.indexOf("lihat menu pendanaan")>-1&&s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Pendanaan",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(c.Link,{href:"/fundings",children:"Pendanaan Saya"}),t(c.Link,{href:route("funding.list"),children:"Cari Pendanaan"}),t(c.Link,{href:"/fundings/create",children:"Buat Pendanaan"})]})]}),a.indexOf("lihat menu admin saldo")>-1&&s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Admin",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(c.Link,{href:"/admindeposits",children:"Deposit"}),t(c.Link,{href:"/adminwithdraws",children:"Withdraw"})]})]}),a.indexOf("lihat menu admin general")>-1&&s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Admin Perencanaan",t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),t(c.Content,{children:t(c.Link,{href:"/adminplans",children:"Atur Perencanaan"})})]}),e.user?s(k,{children:[s(c,{children:[t(c.Trigger,{children:t("span",{className:"inline-flex rounded-md",children:s("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:[e.user.name,t("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),s(c.Content,{children:[t(c.Link,{href:route("dashboard"),children:"Dashboard"}),t(c.Link,{href:route("profile.edit"),children:"Edit Profile"}),t(c.Link,{href:route("users.profiles"),children:"Porfolios"}),t(c.Link,{href:route("portofolios.index"),children:"Input Porfolios"}),t(c.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]}),s(b,{className:"flex items-center justify-items-end gap-x-2",href:"/toko/carts",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),n>0?n:null]}),s(b,{className:"flex items-center justify-items-end gap-x-2",href:"/notifications",children:[s("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-bell-ringing",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[t("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),t("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),t("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}),t("path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}),t("path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"})]}),i>0?i:null]})]}):t(k,{children:s("div",{className:"justify-end hidden space-x-4 lg:flex",children:[t(w,{href:"/login",className:"inline-flex items-center px-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-transparent hover:text-yellow-500 hover:border-yellow-300 focus:outline-none focus:text-gray-700 focus:border-gray-300",children:"Masuk"}),t(w,{href:"/register",style:{backgroundColor:"rgb(245 158 11)"},className:"inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border-transparent rounded-md hover:text-black hover:border-yellow-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 bg-amber-500",children:"Daftar"})]})})]})]})}),t(Y,{as:h.exports.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(M.Panel,{focus:!0,className:"absolute inset-x-0 top-0 p-2 transition origin-top-right transform z-60 md:hidden",children:s("div",{className:"bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50",children:[t("div",{className:"px-5 pt-5 pb-6",children:s("div",{className:"flex items-center justify-between",children:[t(b,{href:"/",children:t("img",{className:"w-8 h-8 sm:h-10",src:_,"aria-label":"TawarinLogo",alt:"Logo"})}),t("div",{className:"-mr-2",children:s(M.Button,{className:"inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[t("span",{className:"sr-only",children:"Close menu"}),t(re,{className:"w-6 h-6"})]})})]})}),t("div",{className:"px-5 py-6 space-y-6",children:s("div",{className:"grid grid-cols-2 gap-y-4 gap-x-8",children:[s(m,{label:"Funding",children:[t(m.Link,{href:"/fundings",children:"Index"}),t(m.Link,{href:"/public/fundings/list",children:"List"}),t(m.Link,{href:"/fundings/create",children:"Form"})]}),s(m,{label:"Plan",children:[t(m.Link,{href:"/plans",children:"Index"}),t(m.Link,{href:"/public/plans/list",children:"List"}),t(m.Link,{href:"/plans/create",children:"Form"})]}),t(b,{href:"/toko/products",children:"Products"}),s(m,{label:"Example",children:[t(m.Link,{href:"/example/homefunding",children:"Landing Page Funding"}),t(m.Link,{href:"/example/form",children:"Form"}),t(m.Link,{href:"/example/funding",children:"Funding"}),t(m.Link,{href:"/example/descriptionlist",children:"Decription List"}),t(m.Link,{href:"/filepond",children:"Filepond"}),t(m.Link,{href:"/dropzone",children:"Dropzone"})]}),e.user?s(k,{children:[s(m,{label:e.user.name,children:[t(m.Link,{href:"/dashboard",children:"Dashboard"}),t(m.Link,{href:"/profile",children:"Profile"}),t(m.Link,{href:"/toko/carts",children:"Your Cart"}),t(m.Link,{href:"/toko/products/me",children:"Your Products"}),t(m.Link,{href:"/toko/history",children:"Your History"}),t(m.Link,{href:"/users",children:"Users"}),t(m.Link,{href:"/toko/products/table",children:"Table Products"}),t(m.Link,{href:"/logout",method:"post",as:"button",children:"Logout"})]}),s(b,{className:"flex items-center gap-x-2",href:"/toko/carts",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),n>0?n:null]})]}):s(k,{children:[t(b,{href:"/login",children:"Login"}),t(b,{href:"/register",children:"Register"})]})]})})]})})})]})}export{c as D,tt as H,Ke as I,et as _,g as n};
