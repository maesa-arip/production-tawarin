import{r as s,R as m}from"./app.f18dce95.js";import{H as d,I as f,y as x,t as g,_ as h,o as v}from"./App.a868e909.js";let u=s.exports.createContext(null);function c(){let r=s.exports.useContext(u);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,c),t}return r}function P(){let[r,t]=s.exports.useState([]);return[r.length>0?r.join(" "):void 0,s.exports.useMemo(()=>function(e){let o=v(i=>(t(n=>[...n,i]),()=>t(n=>{let l=n.slice(),a=l.indexOf(i);return a!==-1&&l.splice(a,1),l}))),p=s.exports.useMemo(()=>({register:o,slot:e.slot,name:e.name,props:e.props}),[o,e.slot,e.name,e.props]);return m.createElement(u.Provider,{value:p},e.children)},[t])]}let E="p",T=d(function(r,t){let e=c(),o=`headlessui-description-${f()}`,p=x(t);g(()=>e.register(o),[o,e.register]);let i=r,n={ref:p,...e.props,id:o};return h({ourProps:n,theirProps:i,slot:e.slot||{},defaultTag:E,name:e.name||"Description"})});export{T as F,P as k};