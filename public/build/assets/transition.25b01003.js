import{r as i,R as g}from"./app.1019088c.js";import{u as $,c as X,f as W,p as Y,s as P,l as Z,S as pe,D as _,y as ee,j as w,a as te,d as fe,o as R,e as ve,X as re}from"./use-flags.dd456e98.js";let J=i.exports.createContext(null);J.displayName="OpenClosedContext";var E=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(E||{});function ne(){return i.exports.useContext(J)}function me({value:e,children:t}){return g.createElement(J.Provider,{value:e},t)}function he(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function z(e,...t){e&&t.length>0&&e.classList.add(...t)}function G(e,...t){e&&t.length>0&&e.classList.remove(...t)}function xe(e,t){let n=X();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:p}=getComputedStyle(e),[h,f]=[l,p].map(a=>{let[s=0]=a.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,x)=>x-u);return s}),c=h+f;if(c!==0){n.group(s=>{s.setTimeout(()=>{t(),s.dispose()},c),s.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&s.dispose()})});let a=n.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(t(),a())})}else t();return n.add(()=>t()),n.dispose}function ge(e,t,n,l){let p=n?"enter":"leave",h=X(),f=l!==void 0?he(l):()=>{};p==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let c=$(p,{enter:()=>t.enter,leave:()=>t.leave}),a=$(p,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),s=$(p,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return G(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),z(e,...c,...s),h.nextFrame(()=>{G(e,...s),z(e,...a),xe(e,()=>(G(e,...c),z(e,...t.entered),f()))}),h.dispose}function be({container:e,direction:t,classes:n,onStart:l,onStop:p}){let h=W(),f=Y(),c=P(t);Z(()=>{let a=X();f.add(a.dispose);let s=e.current;if(s&&c.current!=="idle"&&h.current)return a.dispose(),l.current(c.current),a.add(ge(s,n.current,c.current==="enter",()=>{a.dispose(),p.current(c.current)})),a.dispose},[t])}function y(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let H=i.exports.createContext(null);H.displayName="TransitionContext";var Ee=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ee||{});function Te(){let e=i.exports.useContext(H);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ce(){let e=i.exports.useContext(A);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let A=i.exports.createContext(null);A.displayName="NestingContext";function M(e){return"children"in e?M(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ie(e,t){let n=P(e),l=i.exports.useRef([]),p=W(),h=Y(),f=R((d,r=w.Hidden)=>{let v=l.current.findIndex(({el:o})=>o===d);v!==-1&&($(r,{[w.Unmount](){l.current.splice(v,1)},[w.Hidden](){l.current[v].state="hidden"}}),h.microTask(()=>{var o;!M(l)&&p.current&&((o=n.current)==null||o.call(n))}))}),c=R(d=>{let r=l.current.find(({el:v})=>v===d);return r?r.state!=="visible"&&(r.state="visible"):l.current.push({el:d,state:"visible"}),()=>f(d,w.Unmount)}),a=i.exports.useRef([]),s=i.exports.useRef(Promise.resolve()),u=i.exports.useRef({enter:[],leave:[],idle:[]}),x=R((d,r,v)=>{a.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([o])=>o!==d)),t==null||t.chains.current[r].push([d,new Promise(o=>{a.current.push(o)})]),t==null||t.chains.current[r].push([d,new Promise(o=>{Promise.all(u.current[r].map(([m,b])=>b)).then(()=>o())})]),r==="enter"?s.current=s.current.then(()=>t==null?void 0:t.wait.current).then(()=>v(r)):v(r)}),T=R((d,r,v)=>{Promise.all(u.current[r].splice(0).map(([o,m])=>m)).then(()=>{var o;(o=a.current.shift())==null||o()}).then(()=>v(r))});return i.exports.useMemo(()=>({children:l,register:c,unregister:f,onStart:x,onStop:T,wait:s,chains:u}),[c,f,l,x,T,u,s])}function Fe(){}let $e=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Q(e){var t;let n={};for(let l of $e)n[l]=(t=e[l])!=null?t:Fe;return n}function we(e){let t=i.exports.useRef(Q(e));return i.exports.useEffect(()=>{t.current=Q(e)},[e]),t}let ye="div",le=pe.RenderStrategy;function Re(e,t){let{beforeEnter:n,afterEnter:l,beforeLeave:p,afterLeave:h,enter:f,enterFrom:c,enterTo:a,entered:s,leave:u,leaveFrom:x,leaveTo:T,...d}=e,r=i.exports.useRef(null),v=ee(r,t),o=d.unmount?w.Unmount:w.Hidden,{show:m,appear:b,initial:oe}=Te(),[C,U]=i.exports.useState(m?"visible":"hidden"),K=Ce(),{register:L,unregister:O}=K,j=i.exports.useRef(null);i.exports.useEffect(()=>L(r),[L,r]),i.exports.useEffect(()=>{if(o===w.Hidden&&r.current){if(m&&C!=="visible"){U("visible");return}return $(C,{hidden:()=>O(r),visible:()=>L(r)})}},[C,r,L,O,m,o]);let B=P({enter:y(f),enterFrom:y(c),enterTo:y(a),entered:y(s),leave:y(u),leaveFrom:y(x),leaveTo:y(T)}),N=we({beforeEnter:n,afterEnter:l,beforeLeave:p,afterLeave:h}),k=te();i.exports.useEffect(()=>{if(k&&C==="visible"&&r.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[r,C,k]);let I=oe&&!b,ae=(()=>!k||I||j.current===m?"idle":m?"enter":"leave")(),S=fe(0),ue=R(F=>$(F,{enter:()=>{S.addFlag(E.Opening),N.current.beforeEnter()},leave:()=>{S.addFlag(E.Closing),N.current.beforeLeave()},idle:()=>{}})),ce=R(F=>$(F,{enter:()=>{S.removeFlag(E.Opening),N.current.afterEnter()},leave:()=>{S.removeFlag(E.Closing),N.current.afterLeave()},idle:()=>{}})),D=ie(()=>{U("hidden"),O(r)},K);be({container:r,classes:B,direction:ae,onStart:P(F=>{D.onStart(r,F,ue)}),onStop:P(F=>{D.onStop(r,F,ce),F==="leave"&&!M(D)&&(U("hidden"),O(r))})}),i.exports.useEffect(()=>{I&&(o===w.Hidden?j.current=null:j.current=m)},[m,I,C]);let q=d,de={ref:v};return b&&m&&(q={...q,className:ve(d.className,...B.current.enter,...B.current.enterFrom)}),g.createElement(A.Provider,{value:D},g.createElement(me,{value:$(C,{visible:E.Open,hidden:E.Closed})|S.flags},re({ourProps:de,theirProps:q,defaultTag:ye,features:le,visible:C==="visible",name:"Transition.Child"})))}function Se(e,t){let{show:n,appear:l=!1,unmount:p,...h}=e,f=i.exports.useRef(null),c=ee(f,t);te();let a=ne();if(n===void 0&&a!==null&&(n=(a&E.Open)===E.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[s,u]=i.exports.useState(n?"visible":"hidden"),x=ie(()=>{u("hidden")}),[T,d]=i.exports.useState(!0),r=i.exports.useRef([n]);Z(()=>{T!==!1&&r.current[r.current.length-1]!==n&&(r.current.push(n),d(!1))},[r,n]);let v=i.exports.useMemo(()=>({show:n,appear:l,initial:T}),[n,l,T]);i.exports.useEffect(()=>{if(n)u("visible");else if(!M(x))u("hidden");else{let m=f.current;if(!m)return;let b=m.getBoundingClientRect();b.x===0&&b.y===0&&b.width===0&&b.height===0&&u("hidden")}},[n,x]);let o={unmount:p};return g.createElement(A.Provider,{value:x},g.createElement(H.Provider,{value:v},re({ourProps:{...o,as:i.exports.Fragment,children:g.createElement(se,{ref:c,...o,...h})},theirProps:{},defaultTag:i.exports.Fragment,features:le,visible:s==="visible",name:"Transition"})))}function Pe(e,t){let n=i.exports.useContext(H)!==null,l=ne()!==null;return g.createElement(g.Fragment,null,!n&&l?g.createElement(V,{ref:t,...e}):g.createElement(se,{ref:t,...e}))}let V=_(Se),se=_(Re),Le=_(Pe),De=Object.assign(V,{Child:Le,Root:V});export{ne as C,me as c,E as d,De as t};