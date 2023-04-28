import{r as p}from"./app.2e0bcbe6.js";let S={data:""},H=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||S,L=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,R=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,y=(t,e)=>{let r="",i="",o="";for(let a in t){let s=t[a];a[0]=="@"?a[1]=="i"?r=a+" "+s+";":i+=a[1]=="f"?y(s,a):a+"{"+y(s,a[1]=="k"?"":e)+"}":typeof s=="object"?i+=y(s,e?e.replace(/([^,])+/g,n=>a.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):a):s!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=y.p?y.p(a,s):a+":"+s+";")}return r+(e&&o?e+"{"+o+"}":o)+i},v={},N=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+N(t[r]);return e}return t},_=(t,e,r,i,o)=>{let a=N(t),s=v[a]||(v[a]=(n=>{let d=0,l=11;for(;d<n.length;)l=101*l+n.charCodeAt(d++)>>>0;return"go"+l})(a));if(!v[s]){let n=a!==t?t:(d=>{let l,g,m=[{}];for(;l=L.exec(d.replace(R,""));)l[4]?m.shift():l[3]?(g=l[3].replace(C," ").trim(),m.unshift(m[0][g]=m[0][g]||{})):m[0][l[1]]=l[2].replace(C," ").trim();return m[0]})(t);v[s]=y(o?{["@keyframes "+s]:n}:n,r?"":"."+s)}return((n,d,l)=>{d.data.indexOf(n)==-1&&(d.data=l?n+d.data:d.data+n)})(v[s],e,i),s},q=(t,e,r)=>t.reduce((i,o,a)=>{let s=e[a];if(s&&s.call){let n=s(r),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;s=d?"."+d:n&&typeof n=="object"?n.props?"":y(n,""):n===!1?"":n}return i+o+(s==null?"":s)},"");function T(t){let e=this||{},r=t.call?t(e.p):t;return _(r.unshift?r.raw?q(r,[].slice.call(arguments,1),e.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):r,H(e.target),e.g,e.o,e.k)}let I,z,A;T.bind({g:1});let f=T.bind({k:1});function B(t,e,r,i){y.p=e,I=t,z=r,A=i}function h(t,e){let r=this||{};return function(){let i=arguments;function o(a,s){let n=Object.assign({},a),d=n.className||o.className;r.p=Object.assign({theme:z&&z()},n),r.o=/ *go\d+/.test(d),n.className=T.apply(r,i)+(d?" "+d:""),e&&(n.ref=s);let l=t;return t[0]&&(l=n.as||t,delete n.as),A&&l[0]&&A(n),I(l,n)}return e?e(o):o}}var J=t=>typeof t=="function",j=(t,e)=>J(t)?t(e):t,Q=(()=>{let t=0;return()=>(++t).toString()})(),U=t=>e=>{e&&setTimeout(()=>{let r=e.getBoundingClientRect();t(r)})},M=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),V=20,$=new Map,D=t=>{if($.has(t))return;let e=setTimeout(()=>{$.delete(t),x({type:4,toastId:t})},1e3);$.set(t,e)},X=t=>{let e=$.get(t);e&&clearTimeout(e)},P=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,V)};case 1:return e.toast.id&&X(e.toast.id),{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return t.toasts.find(a=>a.id===r.id)?P(t,{type:1,toast:r}):P(t,{type:0,toast:r});case 3:let{toastId:i}=e;return i?D(i):t.toasts.forEach(a=>{D(a.id)}),{...t,toasts:t.toasts.map(a=>a.id===i||i===void 0?{...a,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+o}))}}},O=[],k={toasts:[],pausedAt:void 0},x=t=>{k=P(k,t),O.forEach(e=>{e(k)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Z=(t={})=>{let[e,r]=p.exports.useState(k);p.exports.useEffect(()=>(O.push(r),()=>{let o=O.indexOf(r);o>-1&&O.splice(o,1)}),[e]);let i=e.toasts.map(o=>{var a,s;return{...t,...t[o.type],...o,duration:o.duration||((a=t[o.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||Y[o.type],style:{...t.style,...(s=t[o.type])==null?void 0:s.style,...o.style}}});return{...e,toasts:i}},G=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||Q()}),w=t=>(e,r)=>{let i=G(e,t,r);return x({type:2,toast:i}),i.id},c=(t,e)=>w("blank")(t,e);c.error=w("error");c.success=w("success");c.loading=w("loading");c.custom=w("custom");c.dismiss=t=>{x({type:3,toastId:t})};c.remove=t=>x({type:4,toastId:t});c.promise=(t,e,r)=>{let i=c.loading(e.loading,{...r,...r==null?void 0:r.loading});return t.then(o=>(c.success(j(e.success,o),{id:i,...r,...r==null?void 0:r.success}),o)).catch(o=>{c.error(j(e.error,o),{id:i,...r,...r==null?void 0:r.error})}),t};var K=t=>{let{toasts:e,pausedAt:r}=Z(t);p.exports.useEffect(()=>{if(r)return;let o=Date.now(),a=e.map(s=>{if(s.duration===1/0)return;let n=(s.duration||0)+s.pauseDuration-(o-s.createdAt);if(n<0){s.visible&&c.dismiss(s.id);return}return setTimeout(()=>c.dismiss(s.id),n)});return()=>{a.forEach(s=>s&&clearTimeout(s))}},[e,r]);let i=p.exports.useMemo(()=>({startPause:()=>{x({type:5,time:Date.now()})},endPause:()=>{r&&x({type:6,time:Date.now()})},updateHeight:(o,a)=>x({type:1,toast:{id:o,height:a}}),calculateOffset:(o,a)=>{let{reverseOrder:s=!1,gutter:n=8,defaultPosition:d}=a||{},l=e.filter(u=>(u.position||d)===(o.position||d)&&u.height),g=l.findIndex(u=>u.id===o.id),m=l.filter((u,b)=>b<g&&u.visible).length;return l.filter(u=>u.visible).slice(...s?[m+1]:[0,m]).reduce((u,b)=>u+(b.height||0)+n,0)}}),[e,r]);return{toasts:e,handlers:i}},W=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,tt=f`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=f`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,rt=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tt} 0.15s ease-out forwards;
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
    animation: ${et} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,at=f`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ot=h("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${at} 1s linear infinite;
`,st=f`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,it=f`
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
}`,nt=h("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${st} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${it} 0.2s ease-out forwards;
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
`,lt=h("div")`
  position: absolute;
`,dt=h("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,pt=f`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ct=h("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${pt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ut=({toast:t})=>{let{icon:e,type:r,iconTheme:i}=t;return e!==void 0?typeof e=="string"?p.exports.createElement(ct,null,e):e:r==="blank"?null:p.exports.createElement(dt,null,p.exports.createElement(ot,{...i}),r!=="loading"&&p.exports.createElement(lt,null,r==="error"?p.exports.createElement(rt,{...i}):p.exports.createElement(nt,{...i})))},mt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ft=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,gt="0%{opacity:0;} 100%{opacity:1;}",yt="0%{opacity:1;} 100%{opacity:0;}",ht=h("div",p.exports.forwardRef)`
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
`,xt=h("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,bt=(t,e)=>{let r=t.includes("top")?1:-1,[i,o]=M()?[gt,yt]:[mt(r),ft(r)];return{animation:e?`${f(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${f(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},vt=p.exports.memo(({toast:t,position:e,style:r,children:i})=>{let o=t!=null&&t.height?bt(t.position||e||"top-center",t.visible):{opacity:0},a=p.exports.createElement(ut,{toast:t}),s=p.exports.createElement(xt,{...t.ariaProps},j(t.message,t));return p.exports.createElement(ht,{className:t.className,style:{...o,...r,...t.style}},typeof i=="function"?i({icon:a,message:s}):p.exports.createElement(p.exports.Fragment,null,a,s))});B(p.exports.createElement);var wt=(t,e)=>{let r=t.includes("top"),i=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:M()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...i,...o}},Et=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Ot=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:i,children:o,containerStyle:a,containerClassName:s})=>{let{toasts:n,handlers:d}=K(r);return p.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...a},className:s,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(l=>{let g=l.position||e,m=d.calculateOffset(l,{reverseOrder:t,gutter:i,defaultPosition:e}),u=wt(g,m),b=l.height?void 0:U(F=>{d.updateHeight(l.id,F.height)});return p.exports.createElement("div",{ref:b,className:l.visible?Et:"",key:l.id,style:u},l.type==="custom"?j(l.message,l):o?o(l):p.exports.createElement(vt,{toast:l,position:g}))}))},kt=c;export{kt as E,Ot as O,c as n};
