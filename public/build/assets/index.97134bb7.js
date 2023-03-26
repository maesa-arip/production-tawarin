import{R as _,r as c,a as f,j as q,F as L,L as W}from"./app.84eed435.js";import{W as B}from"./transition.41e74914.js";const P=_.createContext(),D=({children:t})=>{const[e,r]=c.exports.useState(!1),s=()=>{r(a=>!a)};return f(P.Provider,{value:{open:e,setOpen:r,toggleOpen:s},children:f("div",{className:"relative",children:t})})},J=({children:t})=>{const{open:e,setOpen:r,toggleOpen:s}=c.exports.useContext(P);return q(L,{children:[f("div",{onClick:s,children:t}),e&&f("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)})]})},Q=({align:t="right",width:e="48",contentClasses:r="py-1 bg-white dark:bg-gray-700",children:s})=>{const{open:a,setOpen:o}=c.exports.useContext(P);let i="origin-top";t==="left"?i="origin-top-left left-0":t==="right"&&(i="origin-top-right right-0");let n="";return e==="48"&&(n="w-48"),f(L,{children:f(B,{as:c.exports.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:f("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${i} ${n}`,onClick:()=>o(!1),children:f("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+r,children:s})})})})},U=({href:t,method:e,as:r,children:s})=>f(W,{href:t,method:e,as:r,className:"block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800",children:s});D.Trigger=J;D.Content=Q;D.Link=U;var Lt=D;let V={data:""},X=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||V,Y=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Z=/\/\*[^]*?\*\/|  +/g,A=/\n+/g,h=(t,e)=>{let r="",s="",a="";for(let o in t){let i=t[o];o[0]=="@"?o[1]=="i"?r=o+" "+i+";":s+=o[1]=="f"?h(i,o):o+"{"+h(i,o[1]=="k"?"":e)+"}":typeof i=="object"?s+=h(i,e?e.replace(/([^,])+/g,n=>o.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=h.p?h.p(o,i):o+":"+i+";")}return r+(e&&a?e+"{"+a+"}":a)+s},w={},M=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+M(t[r]);return e}return t},G=(t,e,r,s,a)=>{let o=M(t),i=w[o]||(w[o]=(n=>{let d=0,l=11;for(;d<n.length;)l=101*l+n.charCodeAt(d++)>>>0;return"go"+l})(o));if(!w[i]){let n=o!==t?t:(d=>{let l,y,m=[{}];for(;l=Y.exec(d.replace(Z,""));)l[4]?m.shift():l[3]?(y=l[3].replace(A," ").trim(),m.unshift(m[0][y]=m[0][y]||{})):m[0][l[1]]=l[2].replace(A," ").trim();return m[0]})(t);w[i]=h(a?{["@keyframes "+i]:n}:n,r?"":"."+i)}return((n,d,l)=>{d.data.indexOf(n)==-1&&(d.data=l?n+d.data:d.data+n)})(w[i],e,s),i},K=(t,e,r)=>t.reduce((s,a,o)=>{let i=e[o];if(i&&i.call){let n=i(r),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;i=d?"."+d:n&&typeof n=="object"?n.props?"":h(n,""):n===!1?"":n}return s+a+(i==null?"":i)},"");function T(t){let e=this||{},r=t.call?t(e.p):t;return G(r.unshift?r.raw?K(r,[].slice.call(arguments,1),e.p):r.reduce((s,a)=>Object.assign(s,a&&a.call?a(e.p):a),{}):r,X(e.target),e.g,e.o,e.k)}let R,N,z;T.bind({g:1});let g=T.bind({k:1});function tt(t,e,r,s){h.p=e,R=t,N=r,z=s}function x(t,e){let r=this||{};return function(){let s=arguments;function a(o,i){let n=Object.assign({},o),d=n.className||a.className;r.p=Object.assign({theme:N&&N()},n),r.o=/ *go\d+/.test(d),n.className=T.apply(r,s)+(d?" "+d:""),e&&(n.ref=i);let l=t;return t[0]&&(l=n.as||t,delete n.as),z&&l[0]&&z(n),R(l,n)}return e?e(a):a}}var et=t=>typeof t=="function",j=(t,e)=>et(t)?t(e):t,rt=(()=>{let t=0;return()=>(++t).toString()})(),ot=t=>e=>{e&&setTimeout(()=>{let r=e.getBoundingClientRect();t(r)})},S=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),at=20,E=new Map,I=t=>{if(E.has(t))return;let e=setTimeout(()=>{E.delete(t),b({type:4,toastId:t})},1e3);E.set(t,e)},st=t=>{let e=E.get(t);e&&clearTimeout(e)},F=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,at)};case 1:return e.toast.id&&st(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return t.toasts.find(o=>o.id===r.id)?F(t,{type:1,toast:r}):F(t,{type:0,toast:r});case 3:let{toastId:s}=e;return s?I(s):t.toasts.forEach(o=>{I(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+a}))}}},C=[],O={toasts:[],pausedAt:void 0},b=t=>{O=F(O,t),C.forEach(e=>{e(O)})},it={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},nt=(t={})=>{let[e,r]=c.exports.useState(O);c.exports.useEffect(()=>(C.push(r),()=>{let a=C.indexOf(r);a>-1&&C.splice(a,1)}),[e]);let s=e.toasts.map(a=>{var o,i;return{...t,...t[a.type],...a,duration:a.duration||((o=t[a.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||it[a.type],style:{...t.style,...(i=t[a.type])==null?void 0:i.style,...a.style}}});return{...e,toasts:s}},lt=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||rt()}),$=t=>(e,r)=>{let s=lt(e,t,r);return b({type:2,toast:s}),s.id},p=(t,e)=>$("blank")(t,e);p.error=$("error");p.success=$("success");p.loading=$("loading");p.custom=$("custom");p.dismiss=t=>{b({type:3,toastId:t})};p.remove=t=>b({type:4,toastId:t});p.promise=(t,e,r)=>{let s=p.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(a=>(p.success(j(e.success,a),{id:s,...r,...r==null?void 0:r.success}),a)).catch(a=>{p.error(j(e.error,a),{id:s,...r,...r==null?void 0:r.error})}),t};var dt=t=>{let{toasts:e,pausedAt:r}=nt(t);c.exports.useEffect(()=>{if(r)return;let a=Date.now(),o=e.map(i=>{if(i.duration===1/0)return;let n=(i.duration||0)+i.pauseDuration-(a-i.createdAt);if(n<0){i.visible&&p.dismiss(i.id);return}return setTimeout(()=>p.dismiss(i.id),n)});return()=>{o.forEach(i=>i&&clearTimeout(i))}},[e,r]);let s=c.exports.useMemo(()=>({startPause:()=>{b({type:5,time:Date.now()})},endPause:()=>{r&&b({type:6,time:Date.now()})},updateHeight:(a,o)=>b({type:1,toast:{id:a,height:o}}),calculateOffset:(a,o)=>{let{reverseOrder:i=!1,gutter:n=8,defaultPosition:d}=o||{},l=e.filter(u=>(u.position||d)===(a.position||d)&&u.height),y=l.findIndex(u=>u.id===a.id),m=l.filter((u,v)=>v<y&&u.visible).length;return l.filter(u=>u.visible).slice(...i?[m+1]:[0,m]).reduce((u,v)=>u+(v.height||0)+n,0)}}),[e,r]);return{toasts:e,handlers:s}},ct=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,pt=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ut=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,mt=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ct} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${pt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ut} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ft=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,gt=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${ft} 1s linear infinite;
`,yt=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ht=g`
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
}`,xt=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ht} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,bt=x("div")`
  position: absolute;
`,vt=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,wt=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$t=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${wt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,kt=({toast:t})=>{let{icon:e,type:r,iconTheme:s}=t;return e!==void 0?typeof e=="string"?c.exports.createElement($t,null,e):e:r==="blank"?null:c.exports.createElement(vt,null,c.exports.createElement(gt,{...s}),r!=="loading"&&c.exports.createElement(bt,null,r==="error"?c.exports.createElement(mt,{...s}):c.exports.createElement(xt,{...s})))},Et=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ct=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ot="0%{opacity:0;} 100%{opacity:1;}",jt="0%{opacity:1;} 100%{opacity:0;}",Dt=x("div",c.exports.forwardRef)`
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
`,Tt=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Nt=(t,e)=>{let r=t.includes("top")?1:-1,[s,a]=S()?[Ot,jt]:[Et(r),Ct(r)];return{animation:e?`${g(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},zt=c.exports.memo(({toast:t,position:e,style:r,children:s})=>{let a=t!=null&&t.height?Nt(t.position||e||"top-center",t.visible):{opacity:0},o=c.exports.createElement(kt,{toast:t}),i=c.exports.createElement(Tt,{...t.ariaProps},j(t.message,t));return c.exports.createElement(Dt,{className:t.className,style:{...a,...r,...t.style}},typeof s=="function"?s({icon:o,message:i}):c.exports.createElement(c.exports.Fragment,null,o,i))});tt(c.exports.createElement);var Ft=(t,e)=>{let r=t.includes("top"),s=r?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...s,...a}},Pt=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Mt=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:s,children:a,containerStyle:o,containerClassName:i})=>{let{toasts:n,handlers:d}=dt(r);return c.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...o},className:i,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(l=>{let y=l.position||e,m=d.calculateOffset(l,{reverseOrder:t,gutter:s,defaultPosition:e}),u=Ft(y,m),v=l.height?void 0:ot(H=>{d.updateHeight(l.id,H.height)});return c.exports.createElement("div",{ref:v,className:l.visible?Pt:"",key:l.id,style:u},l.type==="custom"?j(l.message,l):a?a(l):c.exports.createElement(zt,{toast:l,position:y}))}))},Rt=p;export{Lt as D,Rt as E,Mt as O,p as n};
