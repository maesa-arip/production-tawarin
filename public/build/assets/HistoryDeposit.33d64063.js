import{r as l,l as x,d as k,a as t,F as d,j as e,H as j}from"./app.b397b200.js";import{A as C}from"./App.0650af6f.js";import{C as R}from"./Container.f6289661.js";import{n as h}from"./helper.e37a4314.js";import{D as H,f as S}from"./AsideReservasi.b9fbedc9.js";import"./DropdownMenu.9518c36e.js";import"./clsx.m.256e9345.js";import"./transition.2cdd9121.js";import"./use-event-listener.c4ff3453.js";import"./Tawarin.08057ae7.js";function _(n){const{data:c,meta:g,filtered:f,attributes:i}=n.transactions;console.log(c);const[b,N]=l.exports.useState([]),[s,o]=l.exports.useState(f),[y,v]=l.exports.useState(!0),w=l.exports.useCallback(x.exports.debounce(r=>{k.Inertia.get(route(route().current()),{...x.exports.pickBy(r),page:r.page},{preserveState:!0,preserveScroll:!0})},150),[]);l.exports.useEffect(()=>{y?v(!1):w(s)},[s]),l.exports.useEffect(()=>{let r=[];for(let a=i.per_page;a<i.total/i.per_page;a=a+i.per_page)r.push(a);N(r)},[]);const m=r=>o({...s,[r.target.name]:r.target.value});return t(d,{children:[e(j,{title:"History"}),e(R,{children:" "}),e("div",{className:"py-12",children:t("div",{className:"mx-auto max-w-8xl sm:px-6 lg:px-8",children:[e("div",{className:"flex items-center justify-end",children:e("div",{className:"w-full px-4",children:t("div",{className:"flex items-center justify-end mb-6 gap-x-2",children:[e("select",{name:"load",id:"load",onChange:m,value:s.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:b.map((r,a)=>e("option",{children:r},a))}),t("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:m,value:s.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})}),e("div",{className:"flex flex-col p-1",children:e("div",{className:"-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8",children:t("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:[e("div",{className:"overflow-hidden border-b border-gray-200 shadow sm:rounded-lg",children:t("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:e("tr",{children:e("th",{scope:"col",className:"text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2"})})})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:c.map((r,a)=>{var p,u;return e("tr",{children:e("td",{className:"px-3 py-2 whitespace-nowrap",children:e("div",{className:"px-3 py-2 border rounded-xl",children:t("div",{className:"flex items-center justify-between mb-2",children:[t("div",{className:"flex items-center gap-x-3",children:[e("span",{className:"flex items-center justify-center text-gray-500 border border-gray-200 rounded-lg size-8 ",children:e(H,{className:"flex-shrink-0 w-6 h-6 text-teal-500"})}),t("div",{children:[e("p",{className:"flex-wrap text-sm font-medium text-gray-800 whitespace-break-spaces ",children:(p=r.meta)==null?void 0:p.message}),((u=r.meta)==null?void 0:u.type)=="uang masuk"?e(d,{children:t("p",{className:"text-xs text-teal-500 ",children:["Rp"," ",h(r.amount)]})}):e(d,{children:t("p",{className:"text-xs text-gray-500 ",children:["Rp"," ",h(r.amount)]})})]})]}),e("div",{className:"inline-flex items-center gap-x-2",children:t("div",{children:[e("p",{className:"text-xs text-gray-800 ",children:r.created_at_date}),e("p",{className:"text-xs text-teal-500 ",children:e(S,{className:"flex-shrink-0 w-4 h-4 text-teal-500 size-4"})})]})})]})})})},r.id)})})]})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:g.links.map((r,a)=>e("button",{disabled:r.url==null,className:`${r.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>o({...s,page:new URL(r.url).searchParams.get("page")}),children:r.label},a))})]})})})]})})]})}_.layout=n=>e(C,{children:n});export{_ as default};