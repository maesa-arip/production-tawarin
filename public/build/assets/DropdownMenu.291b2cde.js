import{r as c,R as j,j as h,a as B,F as q,I as J}from"./app.b2a6f44b.js";import{c as L}from"./clsx.m.256e9345.js";import{b as D,S as K,D as F,y as T,o as g,h as Y,u as W,d as k,X as N,p as z,C as Z,c as A,t as ee}from"./transition.7b88a4bc.js";import{e as te,L as re,I as O,n as ne,h as ae,T as oe,o as f,r as se,_ as ie,M as _,D as G,a as ue}from"./use-owner.c395fb84.js";function H(e){var r;if(e.type)return e.type;let t=(r=e.as)!=null?r:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function le(e,r){let[t,a]=c.exports.useState(()=>H(e));return D(()=>{a(H(e))},[e.type,e.as]),D(()=>{t||r.current&&r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&a("button")},[t,r]),t}function ce({container:e,accept:r,walk:t,enabled:a=!0}){let s=c.exports.useRef(r),u=c.exports.useRef(t);c.exports.useEffect(()=>{s.current=r,u.current=t},[r,t]),D(()=>{if(!e||!a)return;let o=te(e);if(!o)return;let n=s.current,l=u.current,d=Object.assign(v=>n(v),{acceptNode:n}),x=o.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;x.nextNode();)l(x.currentNode)},[e,a,s,u])}function de(e){throw new Error("Unexpected object: "+e)}var y=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(y||{});function pe(e,r){let t=r.resolveItems();if(t.length<=0)return null;let a=r.resolveActiveIndex(),s=a!=null?a:-1,u=(()=>{switch(e.focus){case 0:return t.findIndex(o=>!r.resolveDisabled(o));case 1:{let o=t.slice().reverse().findIndex((n,l,d)=>s!==-1&&d.length-l-1>=s?!1:!r.resolveDisabled(n));return o===-1?o:t.length-1-o}case 2:return t.findIndex((o,n)=>n<=s?!1:!r.resolveDisabled(o));case 3:{let o=t.slice().reverse().findIndex(n=>!r.resolveDisabled(n));return o===-1?o:t.length-1-o}case 4:return t.findIndex(o=>r.resolveId(o)===e.id);case 5:return null;default:de(e)}})();return u===-1?a:u}function V(e){return[e.screenX,e.screenY]}function me(){let e=c.exports.useRef([-1,-1]);return{wasMoved(r){let t=V(r);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(r){e.current=V(r)}}}var fe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(fe||{}),ve=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ve||{}),xe=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(xe||{});function $(e,r=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,a=ue(r(e.items.slice()),u=>u.dataRef.current.domRef.current),s=t?a.indexOf(t):null;return s===-1&&(s=null),{items:a,activeItemIndex:s}}let ge={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,r)=>{var t;let a=$(e),s=pe(r,{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...e,...a,searchQuery:"",activeItemIndex:s,activationTrigger:(t=r.trigger)!=null?t:1}},[3]:(e,r)=>{let t=e.searchQuery!==""?0:1,a=e.searchQuery+r.value.toLowerCase(),s=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find(o=>{var n;return((n=o.dataRef.current.textValue)==null?void 0:n.startsWith(a))&&!o.dataRef.current.disabled}),u=s?e.items.indexOf(s):-1;return u===-1||u===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:u,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,r)=>{let t=$(e,a=>[...a,{id:r.id,dataRef:r.dataRef}]);return{...e,...t}},[6]:(e,r)=>{let t=$(e,a=>{let s=a.findIndex(u=>u.id===r.id);return s!==-1&&a.splice(s,1),a});return{...e,...t,activationTrigger:1}}},Q=c.exports.createContext(null);Q.displayName="MenuContext";function C(e){let r=c.exports.useContext(Q);if(r===null){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return r}function Ie(e,r){return W(r.type,ge,e,r)}let ye=c.exports.Fragment;function be(e,r){let t=c.exports.useReducer(Ie,{menuState:1,buttonRef:c.exports.createRef(),itemsRef:c.exports.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:s,buttonRef:u},o]=t,n=T(r);re([u,s],(b,w)=>{var R;o({type:1}),ae(w,oe.Loose)||(b.preventDefault(),(R=u.current)==null||R.focus())},a===0);let l=g(()=>{o({type:1})}),d=c.exports.useMemo(()=>({open:a===0,close:l}),[a,l]),x=e,v={ref:n};return j.createElement(Q.Provider,{value:t},j.createElement(Y,{value:W(a,{[0]:k.Open,[1]:k.Closed})},N({ourProps:v,theirProps:x,slot:d,defaultTag:ye,name:"Menu"})))}let he="button";function Re(e,r){var t;let a=O(),{id:s=`headlessui-menu-button-${a}`,...u}=e,[o,n]=C("Menu.Button"),l=T(o.buttonRef,r),d=z(),x=g(p=>{switch(p.key){case f.Space:case f.Enter:case f.ArrowDown:p.preventDefault(),p.stopPropagation(),n({type:0}),d.nextFrame(()=>n({type:2,focus:y.First}));break;case f.ArrowUp:p.preventDefault(),p.stopPropagation(),n({type:0}),d.nextFrame(()=>n({type:2,focus:y.Last}));break}}),v=g(p=>{switch(p.key){case f.Space:p.preventDefault();break}}),b=g(p=>{if(se(p.currentTarget))return p.preventDefault();e.disabled||(o.menuState===0?(n({type:1}),d.nextFrame(()=>{var S;return(S=o.buttonRef.current)==null?void 0:S.focus({preventScroll:!0})})):(p.preventDefault(),n({type:0})))}),w=c.exports.useMemo(()=>({open:o.menuState===0}),[o]),R={ref:l,id:s,type:le(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":(t=o.itemsRef.current)==null?void 0:t.id,"aria-expanded":e.disabled?void 0:o.menuState===0,onKeyDown:x,onKeyUp:v,onClick:b};return N({ourProps:R,theirProps:u,slot:w,defaultTag:he,name:"Menu.Button"})}let we="div",Se=K.RenderStrategy|K.Static;function De(e,r){var t,a;let s=O(),{id:u=`headlessui-menu-items-${s}`,...o}=e,[n,l]=C("Menu.Items"),d=T(n.itemsRef,r),x=ne(n.itemsRef),v=z(),b=Z(),w=(()=>b!==null?(b&k.Open)===k.Open:n.menuState===0)();c.exports.useEffect(()=>{let i=n.itemsRef.current;i&&n.menuState===0&&i!==(x==null?void 0:x.activeElement)&&i.focus({preventScroll:!0})},[n.menuState,n.itemsRef,x]),ce({container:n.itemsRef.current,enabled:n.menuState===0,accept(i){return i.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(i){i.setAttribute("role","none")}});let R=g(i=>{var P,m;switch(v.dispose(),i.key){case f.Space:if(n.searchQuery!=="")return i.preventDefault(),i.stopPropagation(),l({type:3,value:i.key});case f.Enter:if(i.preventDefault(),i.stopPropagation(),l({type:1}),n.activeItemIndex!==null){let{dataRef:I}=n.items[n.activeItemIndex];(m=(P=I.current)==null?void 0:P.domRef.current)==null||m.click()}G(n.buttonRef.current);break;case f.ArrowDown:return i.preventDefault(),i.stopPropagation(),l({type:2,focus:y.Next});case f.ArrowUp:return i.preventDefault(),i.stopPropagation(),l({type:2,focus:y.Previous});case f.Home:case f.PageUp:return i.preventDefault(),i.stopPropagation(),l({type:2,focus:y.First});case f.End:case f.PageDown:return i.preventDefault(),i.stopPropagation(),l({type:2,focus:y.Last});case f.Escape:i.preventDefault(),i.stopPropagation(),l({type:1}),A().nextFrame(()=>{var I;return(I=n.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})});break;case f.Tab:i.preventDefault(),i.stopPropagation(),l({type:1}),A().nextFrame(()=>{ie(n.buttonRef.current,i.shiftKey?_.Previous:_.Next)});break;default:i.key.length===1&&(l({type:3,value:i.key}),v.setTimeout(()=>l({type:4}),350));break}}),p=g(i=>{switch(i.key){case f.Space:i.preventDefault();break}}),S=c.exports.useMemo(()=>({open:n.menuState===0}),[n]),M={"aria-activedescendant":n.activeItemIndex===null||(t=n.items[n.activeItemIndex])==null?void 0:t.id,"aria-labelledby":(a=n.buttonRef.current)==null?void 0:a.id,id:u,onKeyDown:R,onKeyUp:p,role:"menu",tabIndex:0,ref:d};return N({ourProps:M,theirProps:o,slot:S,defaultTag:we,features:Se,visible:w,name:"Menu.Items"})}let Me=c.exports.Fragment;function Pe(e,r){let t=O(),{id:a=`headlessui-menu-item-${t}`,disabled:s=!1,...u}=e,[o,n]=C("Menu.Item"),l=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===a:!1,d=c.exports.useRef(null),x=T(r,d);D(()=>{if(o.menuState!==0||!l||o.activationTrigger===0)return;let m=A();return m.requestAnimationFrame(()=>{var I,U;(U=(I=d.current)==null?void 0:I.scrollIntoView)==null||U.call(I,{block:"nearest"})}),m.dispose},[d,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let v=c.exports.useRef({disabled:s,domRef:d});D(()=>{v.current.disabled=s},[v,s]),D(()=>{var m,I;v.current.textValue=(I=(m=d.current)==null?void 0:m.textContent)==null?void 0:I.toLowerCase()},[v,d]),D(()=>(n({type:5,id:a,dataRef:v}),()=>n({type:6,id:a})),[v,a]);let b=g(()=>{n({type:1})}),w=g(m=>{if(s)return m.preventDefault();n({type:1}),G(o.buttonRef.current)}),R=g(()=>{if(s)return n({type:2,focus:y.Nothing});n({type:2,focus:y.Specific,id:a})}),p=me(),S=g(m=>p.update(m)),M=g(m=>{p.wasMoved(m)&&(s||l||n({type:2,focus:y.Specific,id:a,trigger:0}))}),i=g(m=>{p.wasMoved(m)&&(s||l&&n({type:2,focus:y.Nothing}))}),P=c.exports.useMemo(()=>({active:l,disabled:s,close:b}),[l,s,b]);return N({ourProps:{id:a,ref:x,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,disabled:void 0,onClick:w,onFocus:R,onPointerEnter:S,onMouseEnter:S,onPointerMove:M,onMouseMove:M,onPointerLeave:i,onMouseLeave:i},theirProps:u,slot:P,defaultTag:Me,name:"Menu.Item"})}let Ee=F(be),ke=F(Re),Fe=F(De),Te=F(Pe),E=Object.assign(Ee,{Button:ke,Items:Fe,Item:Te});function Ne(e,r){return c.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:r},e),c.exports.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}const Ce=c.exports.forwardRef(Ne);var $e=Ce;function Le({href:e,children:r,...t}){return h(E.Item,{children:({active:a})=>h(J,{...t,className:L(a&&"font-semibold text-gray-900","flex items-start p-3 -m-3 rounded-lg hover:bg-yellow-500"),href:e,children:r})})}function X({buttonClassName:e="",label:r,children:t}){return h(E,{className:"relative",as:"div",children:({open:a})=>B(q,{children:[B(E.Button,{className:L(a?"text-gray-900":"text-gray-500","group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:[r,h($e,{className:L("h-5 w-5 transition duration-500",a&&"rotate-180"),"aria-hidden":"true"})]}),h(ee,{as:c.exports.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:h(E.Items,{className:"absolute z-20 w-full px-2 mt-3 -ml-4 transform md:w-screen md:max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",children:h("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:h("div",{className:"relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8",children:t})})})})]})})}function Ae(){return h("div",{className:"block w-full h-px my-1 bg-gray-200"})}X.Link=Le;X.Divider=Ae;export{X as D,ce as F,y as a,E as o,le as s,me as u,pe as x};