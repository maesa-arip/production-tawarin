import{j as O,L as Ce,u as De,r as s,R as M,a as xe,F as Ne,I as Oe}from"./app.a40e8af1.js";import{c as Y}from"./clsx.m.256e9345.js";import{l as H,S as X,D as K,y as B,o as I,c as Ie,u as j,d as A,X as U,p as Pe,C as se,b as oe,T as Le,s as be,t as Be}from"./transition.e89d00d7.js";import{e as Se,L as he,I as G,n as Z,h as Ee,T as we,o as E,r as ie,_ as Ae,M as L,D as Re,a as Ge,f as ce,E as je,b as $e,c as ae,p as le,O as V,s as W,N as ue}from"./use-event-listener.8d22d876.js";function jt({href:e,active:t,children:n,className:a,...i}){return O(Ce,{href:e,...i,className:Y(a,t||De().url==e?"inline-flex items-center px-1 border-indigo-400 text-sm font-medium leading-5 text-black focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-yellow-500 hover:border-yellow-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"),children:n})}function ge(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Fe(e,t){let[n,a]=s.exports.useState(()=>ge(e));return H(()=>{a(ge(e))},[e.type,e.as]),H(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[n,t]),n}function Ke({container:e,accept:t,walk:n,enabled:a=!0}){let i=s.exports.useRef(t),l=s.exports.useRef(n);s.exports.useEffect(()=>{i.current=t,l.current=n},[t,n]),H(()=>{if(!e||!a)return;let r=Se(e);if(!r)return;let o=i.current,u=l.current,b=Object.assign(g=>o(g),{acceptNode:o}),x=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,b,!1);for(;x.nextNode();)u(x.currentNode)},[e,a,i,l])}function Ue(e){throw new Error("Unexpected object: "+e)}var D=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(D||{});function Qe(e,t){let n=t.resolveItems();if(n.length<=0)return null;let a=t.resolveActiveIndex(),i=a!=null?a:-1,l=(()=>{switch(e.focus){case 0:return n.findIndex(r=>!t.resolveDisabled(r));case 1:{let r=n.slice().reverse().findIndex((o,u,b)=>i!==-1&&b.length-u-1>=i?!1:!t.resolveDisabled(o));return r===-1?r:n.length-1-r}case 2:return n.findIndex((r,o)=>o<=i?!1:!t.resolveDisabled(r));case 3:{let r=n.slice().reverse().findIndex(o=>!t.resolveDisabled(o));return r===-1?r:n.length-1-r}case 4:return n.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:Ue(e)}})();return l===-1?a:l}function ye(e){return[e.screenX,e.screenY]}function _e(){let e=s.exports.useRef([-1,-1]);return{wasMoved(t){let n=ye(t);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(t){e.current=ye(t)}}}var He=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(He||{}),We=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(We||{}),Ve=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(Ve||{});function ne(e,t=n=>n){let n=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,a=Ge(t(e.items.slice()),l=>l.dataRef.current.domRef.current),i=n?a.indexOf(n):null;return i===-1&&(i=null),{items:a,activeItemIndex:i}}let Xe={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,t)=>{var n;let a=ne(e),i=Qe(t,{resolveItems:()=>a.items,resolveActiveIndex:()=>a.activeItemIndex,resolveId:l=>l.id,resolveDisabled:l=>l.dataRef.current.disabled});return{...e,...a,searchQuery:"",activeItemIndex:i,activationTrigger:(n=t.trigger)!=null?n:1}},[3]:(e,t)=>{let n=e.searchQuery!==""?0:1,a=e.searchQuery+t.value.toLowerCase(),i=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(r=>{var o;return((o=r.dataRef.current.textValue)==null?void 0:o.startsWith(a))&&!r.dataRef.current.disabled}),l=i?e.items.indexOf(i):-1;return l===-1||l===e.activeItemIndex?{...e,searchQuery:a}:{...e,searchQuery:a,activeItemIndex:l,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,t)=>{let n=ne(e,a=>[...a,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},[6]:(e,t)=>{let n=ne(e,a=>{let i=a.findIndex(l=>l.id===t.id);return i!==-1&&a.splice(i,1),a});return{...e,...n,activationTrigger:1}}},pe=s.exports.createContext(null);pe.displayName="MenuContext";function ee(e){let t=s.exports.useContext(pe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ee),n}return t}function qe(e,t){return j(t.type,Xe,e,t)}let ze=s.exports.Fragment;function Je(e,t){let n=s.exports.useReducer(qe,{menuState:1,buttonRef:s.exports.createRef(),itemsRef:s.exports.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:a,itemsRef:i,buttonRef:l},r]=n,o=B(t);he([l,i],(f,F)=>{var m;r({type:1}),Ee(F,we.Loose)||(f.preventDefault(),(m=l.current)==null||m.focus())},a===0);let u=I(()=>{r({type:1})}),b=s.exports.useMemo(()=>({open:a===0,close:u}),[a,u]),x=e,g={ref:o};return M.createElement(pe.Provider,{value:n},M.createElement(Ie,{value:j(a,{[0]:A.Open,[1]:A.Closed})},U({ourProps:g,theirProps:x,slot:b,defaultTag:ze,name:"Menu"})))}let Ye="button";function Ze(e,t){var n;let a=G(),{id:i=`headlessui-menu-button-${a}`,...l}=e,[r,o]=ee("Menu.Button"),u=B(r.buttonRef,t),b=Pe(),x=I(p=>{switch(p.key){case E.Space:case E.Enter:case E.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),b.nextFrame(()=>o({type:2,focus:D.First}));break;case E.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),b.nextFrame(()=>o({type:2,focus:D.Last}));break}}),g=I(p=>{switch(p.key){case E.Space:p.preventDefault();break}}),f=I(p=>{if(ie(p.currentTarget))return p.preventDefault();e.disabled||(r.menuState===0?(o({type:1}),b.nextFrame(()=>{var h;return(h=r.buttonRef.current)==null?void 0:h.focus({preventScroll:!0})})):(p.preventDefault(),o({type:0})))}),F=s.exports.useMemo(()=>({open:r.menuState===0}),[r]),m={ref:u,id:i,type:Fe(e,r.buttonRef),"aria-haspopup":"menu","aria-controls":(n=r.itemsRef.current)==null?void 0:n.id,"aria-expanded":e.disabled?void 0:r.menuState===0,onKeyDown:x,onKeyUp:g,onClick:f};return U({ourProps:m,theirProps:l,slot:F,defaultTag:Ye,name:"Menu.Button"})}let et="div",tt=X.RenderStrategy|X.Static;function rt(e,t){var n,a;let i=G(),{id:l=`headlessui-menu-items-${i}`,...r}=e,[o,u]=ee("Menu.Items"),b=B(o.itemsRef,t),x=Z(o.itemsRef),g=Pe(),f=se(),F=(()=>f!==null?(f&A.Open)===A.Open:o.menuState===0)();s.exports.useEffect(()=>{let c=o.itemsRef.current;c&&o.menuState===0&&c!==(x==null?void 0:x.activeElement)&&c.focus({preventScroll:!0})},[o.menuState,o.itemsRef,x]),Ke({container:o.itemsRef.current,enabled:o.menuState===0,accept(c){return c.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:c.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(c){c.setAttribute("role","none")}});let m=I(c=>{var T,P;switch(g.dispose(),c.key){case E.Space:if(o.searchQuery!=="")return c.preventDefault(),c.stopPropagation(),u({type:3,value:c.key});case E.Enter:if(c.preventDefault(),c.stopPropagation(),u({type:1}),o.activeItemIndex!==null){let{dataRef:w}=o.items[o.activeItemIndex];(P=(T=w.current)==null?void 0:T.domRef.current)==null||P.click()}Re(o.buttonRef.current);break;case E.ArrowDown:return c.preventDefault(),c.stopPropagation(),u({type:2,focus:D.Next});case E.ArrowUp:return c.preventDefault(),c.stopPropagation(),u({type:2,focus:D.Previous});case E.Home:case E.PageUp:return c.preventDefault(),c.stopPropagation(),u({type:2,focus:D.First});case E.End:case E.PageDown:return c.preventDefault(),c.stopPropagation(),u({type:2,focus:D.Last});case E.Escape:c.preventDefault(),c.stopPropagation(),u({type:1}),oe().nextFrame(()=>{var w;return(w=o.buttonRef.current)==null?void 0:w.focus({preventScroll:!0})});break;case E.Tab:c.preventDefault(),c.stopPropagation(),u({type:1}),oe().nextFrame(()=>{Ae(o.buttonRef.current,c.shiftKey?L.Previous:L.Next)});break;default:c.key.length===1&&(u({type:3,value:c.key}),g.setTimeout(()=>u({type:4}),350));break}}),p=I(c=>{switch(c.key){case E.Space:c.preventDefault();break}}),h=s.exports.useMemo(()=>({open:o.menuState===0}),[o]),$={"aria-activedescendant":o.activeItemIndex===null||(n=o.items[o.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(a=o.buttonRef.current)==null?void 0:a.id,id:l,onKeyDown:m,onKeyUp:p,role:"menu",tabIndex:0,ref:b};return U({ourProps:$,theirProps:r,slot:h,defaultTag:et,features:tt,visible:F,name:"Menu.Items"})}let nt=s.exports.Fragment;function ot(e,t){let n=G(),{id:a=`headlessui-menu-item-${n}`,disabled:i=!1,...l}=e,[r,o]=ee("Menu.Item"),u=r.activeItemIndex!==null?r.items[r.activeItemIndex].id===a:!1,b=s.exports.useRef(null),x=B(t,b);H(()=>{if(r.menuState!==0||!u||r.activationTrigger===0)return;let P=oe();return P.requestAnimationFrame(()=>{var w,Q;(Q=(w=b.current)==null?void 0:w.scrollIntoView)==null||Q.call(w,{block:"nearest"})}),P.dispose},[b,u,r.menuState,r.activationTrigger,r.activeItemIndex]);let g=s.exports.useRef({disabled:i,domRef:b});H(()=>{g.current.disabled=i},[g,i]),H(()=>{var P,w;g.current.textValue=(w=(P=b.current)==null?void 0:P.textContent)==null?void 0:w.toLowerCase()},[g,b]),H(()=>(o({type:5,id:a,dataRef:g}),()=>o({type:6,id:a})),[g,a]);let f=I(()=>{o({type:1})}),F=I(P=>{if(i)return P.preventDefault();o({type:1}),Re(r.buttonRef.current)}),m=I(()=>{if(i)return o({type:2,focus:D.Nothing});o({type:2,focus:D.Specific,id:a})}),p=_e(),h=I(P=>p.update(P)),$=I(P=>{p.wasMoved(P)&&(i||u||o({type:2,focus:D.Specific,id:a,trigger:0}))}),c=I(P=>{p.wasMoved(P)&&(i||u&&o({type:2,focus:D.Nothing}))}),T=s.exports.useMemo(()=>({active:u,disabled:i,close:f}),[u,i,f]);return U({ourProps:{id:a,ref:x,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,disabled:void 0,onClick:F,onFocus:m,onPointerEnter:h,onMouseEnter:h,onPointerMove:$,onMouseMove:$,onPointerLeave:c,onMouseLeave:c},theirProps:l,slot:T,defaultTag:nt,name:"Menu.Item"})}let at=K(Je),lt=K(Ze),ut=K(rt),st=K(ot),J=Object.assign(at,{Button:lt,Items:ut,Item:st});var it=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(it||{}),ct=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(ct||{});let pt={[0]:e=>({...e,popoverState:j(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,t){return e.button===t.button?e:{...e,button:t.button}},[3](e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},[4](e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},[5](e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},de=s.exports.createContext(null);de.displayName="PopoverContext";function te(e){let t=s.exports.useContext(de);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,te),n}return t}let fe=s.exports.createContext(null);fe.displayName="PopoverAPIContext";function ve(e){let t=s.exports.useContext(fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ve),n}return t}let me=s.exports.createContext(null);me.displayName="PopoverGroupContext";function Te(){return s.exports.useContext(me)}let re=s.exports.createContext(null);re.displayName="PopoverPanelContext";function dt(){return s.exports.useContext(re)}function ft(e,t){return j(t.type,pt,e,t)}let vt="div";function mt(e,t){var n;let a=s.exports.useRef(null),i=B(t,Le(d=>{a.current=d})),l=s.exports.useRef([]),r=s.exports.useReducer(ft,{popoverState:1,buttons:l,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:s.exports.createRef(),afterPanelSentinel:s.exports.createRef()}),[{popoverState:o,button:u,buttonId:b,panel:x,panelId:g,beforePanelSentinel:f,afterPanelSentinel:F},m]=r,p=Z((n=a.current)!=null?n:u),h=s.exports.useMemo(()=>{if(!u||!x)return!1;for(let z of document.querySelectorAll("body > *"))if(Number(z==null?void 0:z.contains(u))^Number(z==null?void 0:z.contains(x)))return!0;let d=ce(),y=d.indexOf(u),C=(y+d.length-1)%d.length,_=(y+1)%d.length,q=d[C],Me=d[_];return!x.contains(q)&&!x.contains(Me)},[u,x]),$=be(b),c=be(g),T=s.exports.useMemo(()=>({buttonId:$,panelId:c,close:()=>m({type:1})}),[$,c,m]),P=Te(),w=P==null?void 0:P.registerPopover,Q=I(()=>{var d;return(d=P==null?void 0:P.isFocusWithinPopoverGroup())!=null?d:(p==null?void 0:p.activeElement)&&((u==null?void 0:u.contains(p.activeElement))||(x==null?void 0:x.contains(p.activeElement)))});s.exports.useEffect(()=>w==null?void 0:w(T),[w,T]),je(p==null?void 0:p.defaultView,"focus",d=>{var y,C,_,q;o===0&&(Q()||u&&x&&d.target!==window&&((C=(y=f.current)==null?void 0:y.contains)!=null&&C.call(y,d.target)||(q=(_=F.current)==null?void 0:_.contains)!=null&&q.call(_,d.target)||m({type:1})))},!0),he([u,x],(d,y)=>{m({type:1}),Ee(y,we.Loose)||(d.preventDefault(),u==null||u.focus())},o===0);let S=I(d=>{m({type:1});let y=(()=>d?d instanceof HTMLElement?d:"current"in d&&d.current instanceof HTMLElement?d.current:u:u)();y==null||y.focus()}),k=s.exports.useMemo(()=>({close:S,isPortalled:h}),[S,h]),R=s.exports.useMemo(()=>({open:o===0,close:S}),[o,S]),N=e,v={ref:i};return M.createElement(re.Provider,{value:null},M.createElement(de.Provider,{value:r},M.createElement(fe.Provider,{value:k},M.createElement(Ie,{value:j(o,{[0]:A.Open,[1]:A.Closed})},U({ourProps:v,theirProps:N,slot:R,defaultTag:vt,name:"Popover"})))))}let xt="button";function bt(e,t){let n=G(),{id:a=`headlessui-popover-button-${n}`,...i}=e,[l,r]=te("Popover.Button"),{isPortalled:o}=ve("Popover.Button"),u=s.exports.useRef(null),b=`headlessui-focus-sentinel-${G()}`,x=Te(),g=x==null?void 0:x.closeOthers,f=dt()!==null;s.exports.useEffect(()=>{if(!f)return r({type:3,buttonId:a}),()=>{r({type:3,buttonId:null})}},[f,a,r]);let[F]=s.exports.useState(()=>Symbol()),m=B(u,t,f?null:v=>{if(v)l.buttons.current.push(F);else{let d=l.buttons.current.indexOf(F);d!==-1&&l.buttons.current.splice(d,1)}l.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),v&&r({type:2,button:v})}),p=B(u,t),h=Z(u),$=I(v=>{var d,y,C;if(f){if(l.popoverState===1)return;switch(v.key){case E.Space:case E.Enter:v.preventDefault(),(y=(d=v.target).click)==null||y.call(d),r({type:1}),(C=l.button)==null||C.focus();break}}else switch(v.key){case E.Space:case E.Enter:v.preventDefault(),v.stopPropagation(),l.popoverState===1&&(g==null||g(l.buttonId)),r({type:0});break;case E.Escape:if(l.popoverState!==0)return g==null?void 0:g(l.buttonId);if(!u.current||h!=null&&h.activeElement&&!u.current.contains(h.activeElement))return;v.preventDefault(),v.stopPropagation(),r({type:1});break}}),c=I(v=>{f||v.key===E.Space&&v.preventDefault()}),T=I(v=>{var d,y;ie(v.currentTarget)||e.disabled||(f?(r({type:1}),(d=l.button)==null||d.focus()):(v.preventDefault(),v.stopPropagation(),l.popoverState===1&&(g==null||g(l.buttonId)),r({type:0}),(y=l.button)==null||y.focus()))}),P=I(v=>{v.preventDefault(),v.stopPropagation()}),w=l.popoverState===0,Q=s.exports.useMemo(()=>({open:w}),[w]),S=Fe(e,u),k=f?{ref:p,type:S,onKeyDown:$,onClick:T}:{ref:m,id:l.buttonId,type:S,"aria-expanded":e.disabled?void 0:l.popoverState===0,"aria-controls":l.panel?l.panelId:void 0,onKeyDown:$,onKeyUp:c,onClick:T,onMouseDown:P},R=$e(),N=I(()=>{let v=l.panel;if(!v)return;function d(){j(R.current,{[W.Forwards]:()=>V(v,L.First),[W.Backwards]:()=>V(v,L.Last)})===ue.Error&&V(ce().filter(y=>y.dataset.headlessuiFocusGuard!=="true"),j(R.current,{[W.Forwards]:L.Next,[W.Backwards]:L.Previous}),{relativeTo:l.button})}d()});return M.createElement(M.Fragment,null,U({ourProps:k,theirProps:i,slot:Q,defaultTag:xt,name:"Popover.Button"}),w&&!f&&o&&M.createElement(ae,{id:b,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}))}let gt="div",yt=X.RenderStrategy|X.Static;function It(e,t){let n=G(),{id:a=`headlessui-popover-overlay-${n}`,...i}=e,[{popoverState:l},r]=te("Popover.Overlay"),o=B(t),u=se(),b=(()=>u!==null?(u&A.Open)===A.Open:l===0)(),x=I(f=>{if(ie(f.currentTarget))return f.preventDefault();r({type:1})}),g=s.exports.useMemo(()=>({open:l===0}),[l]);return U({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:x},theirProps:i,slot:g,defaultTag:gt,features:yt,visible:b,name:"Popover.Overlay"})}let Pt="div",St=X.RenderStrategy|X.Static;function ht(e,t){let n=G(),{id:a=`headlessui-popover-panel-${n}`,focus:i=!1,...l}=e,[r,o]=te("Popover.Panel"),{close:u,isPortalled:b}=ve("Popover.Panel"),x=`headlessui-focus-sentinel-before-${G()}`,g=`headlessui-focus-sentinel-after-${G()}`,f=s.exports.useRef(null),F=B(f,t,S=>{o({type:4,panel:S})}),m=Z(f);H(()=>(o({type:5,panelId:a}),()=>{o({type:5,panelId:null})}),[a,o]);let p=se(),h=(()=>p!==null?(p&A.Open)===A.Open:r.popoverState===0)(),$=I(S=>{var k;switch(S.key){case E.Escape:if(r.popoverState!==0||!f.current||m!=null&&m.activeElement&&!f.current.contains(m.activeElement))return;S.preventDefault(),S.stopPropagation(),o({type:1}),(k=r.button)==null||k.focus();break}});s.exports.useEffect(()=>{var S;e.static||r.popoverState===1&&((S=e.unmount)==null||S)&&o({type:4,panel:null})},[r.popoverState,e.unmount,e.static,o]),s.exports.useEffect(()=>{if(!i||r.popoverState!==0||!f.current)return;let S=m==null?void 0:m.activeElement;f.current.contains(S)||V(f.current,L.First)},[i,f,r.popoverState]);let c=s.exports.useMemo(()=>({open:r.popoverState===0,close:u}),[r,u]),T={ref:F,id:a,onKeyDown:$,onBlur:i&&r.popoverState===0?S=>{var k,R,N,v,d;let y=S.relatedTarget;y&&f.current&&((k=f.current)!=null&&k.contains(y)||(o({type:1}),((N=(R=r.beforePanelSentinel.current)==null?void 0:R.contains)!=null&&N.call(R,y)||(d=(v=r.afterPanelSentinel.current)==null?void 0:v.contains)!=null&&d.call(v,y))&&y.focus({preventScroll:!0})))}:void 0,tabIndex:-1},P=$e(),w=I(()=>{let S=f.current;if(!S)return;function k(){j(P.current,{[W.Forwards]:()=>{var R;V(S,L.First)===ue.Error&&((R=r.afterPanelSentinel.current)==null||R.focus())},[W.Backwards]:()=>{var R;(R=r.button)==null||R.focus({preventScroll:!0})}})}k()}),Q=I(()=>{let S=f.current;if(!S)return;function k(){j(P.current,{[W.Forwards]:()=>{var R;if(!r.button)return;let N=ce(),v=N.indexOf(r.button),d=N.slice(0,v+1),y=[...N.slice(v+1),...d];for(let C of y.slice())if(C.dataset.headlessuiFocusGuard==="true"||(R=r.panel)!=null&&R.contains(C)){let _=y.indexOf(C);_!==-1&&y.splice(_,1)}V(y,L.First,{sorted:!1})},[W.Backwards]:()=>{var R;V(S,L.Previous)===ue.Error&&((R=r.button)==null||R.focus())}})}k()});return M.createElement(re.Provider,{value:a},h&&b&&M.createElement(ae,{id:x,ref:r.beforePanelSentinel,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w}),U({ourProps:T,theirProps:l,slot:c,defaultTag:Pt,features:St,visible:h,name:"Popover.Panel"}),h&&b&&M.createElement(ae,{id:g,ref:r.afterPanelSentinel,features:le.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:Q}))}let Et="div";function wt(e,t){let n=s.exports.useRef(null),a=B(n,t),[i,l]=s.exports.useState([]),r=I(m=>{l(p=>{let h=p.indexOf(m);if(h!==-1){let $=p.slice();return $.splice(h,1),$}return p})}),o=I(m=>(l(p=>[...p,m]),()=>r(m))),u=I(()=>{var m;let p=Se(n);if(!p)return!1;let h=p.activeElement;return(m=n.current)!=null&&m.contains(h)?!0:i.some($=>{var c,T;return((c=p.getElementById($.buttonId.current))==null?void 0:c.contains(h))||((T=p.getElementById($.panelId.current))==null?void 0:T.contains(h))})}),b=I(m=>{for(let p of i)p.buttonId.current!==m&&p.close()}),x=s.exports.useMemo(()=>({registerPopover:o,unregisterPopover:r,isFocusWithinPopoverGroup:u,closeOthers:b}),[o,r,u,b]),g=s.exports.useMemo(()=>({}),[]),f=e,F={ref:a};return M.createElement(me.Provider,{value:x},U({ourProps:F,theirProps:f,slot:g,defaultTag:Et,name:"Popover.Group"}))}let Rt=K(mt),$t=K(bt),Ft=K(It),Tt=K(ht),kt=K(wt),Kt=Object.assign(Rt,{Button:$t,Overlay:Ft,Panel:Tt,Group:kt});function Mt(e,t){return s.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),s.exports.createElement("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}))}const Ct=s.exports.forwardRef(Mt);var Dt=Ct;function Nt({href:e,children:t,...n}){return O(J.Item,{children:({active:a})=>O(Oe,{...n,className:Y(a&&"font-semibold text-gray-900","flex items-start p-3 -m-3 rounded-lg hover:bg-yellow-500"),href:e,children:t})})}function ke({buttonClassName:e="",label:t,children:n}){return O(J,{className:"relative",as:"div",children:({open:a})=>xe(Ne,{children:[xe(J.Button,{className:Y(a?"text-gray-900":"text-gray-500","group rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:[t,O(Dt,{className:Y("h-5 w-5 transition duration-500",a&&"rotate-180"),"aria-hidden":"true"})]}),O(Be,{as:s.exports.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:O(J.Items,{className:"absolute z-20 w-full px-2 mt-3 -ml-4 transform md:w-screen md:max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",children:O("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",children:O("div",{className:"relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8",children:n})})})})]})})}function Ot(){return O("div",{className:"block w-full h-px my-1 bg-gray-200"})}ke.Link=Nt;ke.Divider=Ot;export{ke as D,Ke as F,Kt as L,jt as N,D as a,J as o,Fe as s,_e as u,Qe as x};