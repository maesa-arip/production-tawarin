import{r as i,l as g,d as N,j as a,F as y,a as e,H as k}from"./app.f4c9d77f.js";import{A as C}from"./App.add76625.js";import{C as _}from"./Container.e26dc6de.js";import{N as j}from"./XIcon.9170e27f.js";import"./clsx.m.256e9345.js";import"./transition.94152b7d.js";import"./Tawarin.08057ae7.js";const d=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),m=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function R(n){const{data:h,meta:p,filtered:f,attributes:l}=n.roles,[w,v]=i.exports.useState([]),[r,o]=i.exports.useState(f),b=i.exports.useCallback(g.exports.debounce(s=>{N.Inertia.get(route("assign.role.index"),{...g.exports.pickBy(s),page:s.page},{preserveState:!0,preserveScroll:!0})},150),[]);i.exports.useEffect(()=>b(r),[r]),i.exports.useEffect(()=>{let s=[];for(let t=l.per_page;t<l.total/l.per_page;t=t+l.per_page)s.push(t);v(s)},[]);const u=s=>o({...r,[s.target.name]:s.target.value}),c=s=>{o({...r,field:s,direction:r.direction=="asc"?"desc":"asc"})};return i.exports.useState(!1),i.exports.useState(!1),i.exports.useState(!1),i.exports.useState([]),a(y,{children:[e(k,{title:"Permissions to Role"}),e(_,{children:"Assign Permissions to Role "}),e("div",{className:"py-12",children:a("div",{className:"mx-auto max-w-8xl sm:px-6 lg:px-8",children:[a("div",{className:"flex items-center justify-end",children:[e("div",{className:"w-1/2",children:e("div",{className:"flex items-center justify-start mb-6 gap-x-2",children:e("button",{type:"button",className:"px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Assign Permissions to Role"})})}),e("div",{className:"w-1/2",children:a("div",{className:"flex items-center justify-end mb-6 gap-x-2",children:[e("select",{name:"load",id:"load",onChange:u,value:r.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:w.map((s,t)=>e("option",{children:s},t))}),a("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:u,value:r.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),e("div",{className:"flex flex-col p-1",children:e("div",{className:"-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8",children:a("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:[e("div",{className:"overflow-visible border-b border-gray-200 shadow sm:rounded-lg",children:a("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:a("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:a("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>c("name"),children:["Name",r.field=="name"&&r.direction=="asc"&&e(d,{}),r.field=="name"&&r.direction=="desc"&&e(m,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:a("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>c("guard_name"),children:["Guard Name",r.field=="guard_name"&&r.direction=="asc"&&e(d,{}),r.field=="guard_name"&&r.direction=="desc"&&e(m,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:a("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>c("permission.permission_name"),children:["Permissions",r.field=="permission.permission_name"&&r.direction=="asc"&&e(d,{}),r.field=="permission.permission_name"&&r.direction=="desc"&&e(m,{})]})}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:h.map((s,t)=>a("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:p.from+t}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:s.name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:s.guard_name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:s.permissions.map(x=>a("div",{children:[x.name,","]},x.id))}),e("td",{children:e(j,{href:route("assign.role.edit",s.id),children:"Edit"})})]},s.id))})]})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:p.links.map((s,t)=>e("button",{disabled:s.url==null,className:`${s.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>o({...r,page:new URL(s.url).searchParams.get("page")}),children:s.label},t))})]})})})]})})]})}R.layout=n=>e(C,{children:n});export{R as default};