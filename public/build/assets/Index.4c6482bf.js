import{r as i,l as D,d as C,j as r,F as _,a as e,H as L}from"./app.f6fe01ec.js";import{D as g,A as T}from"./App.fc1c0b71.js";import{A as H,E as P}from"./EditModal.957f6a27.js";import{D as q}from"./DestroyModal.42293744.js";import F from"./Create.0d751738.js";import W from"./Edit.81297b59.js";import{D as Y}from"./DangerButton.87884c37.js";import{T as $}from"./ThirdButton.0c219781.js";import"./XIcon.c7eaa0ac.js";import"./clsx.m.256e9345.js";import"./transition.325e2d19.js";import"./Tawarin.08057ae7.js";import"./ExclamationIcon.e688a62d.js";import"./Form.8ebeea0b.js";import"./InputError.09e7267c.js";import"./InputLabel.20ac50ff.js";import"./PrimaryButton.8a7e45f6.js";import"./SecondaryButton.f5f02025.js";import"./TextInput.e1109bbc.js";import"./TextInputCheckbox.4f7a8098.js";const n=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),c=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function G(o){const{data:E,meta:h,filtered:S,attributes:d}=o.users,f=o.roles,[z,w]=i.exports.useState([]),[a,m]=i.exports.useState(S),M=i.exports.useCallback(D.exports.debounce(t=>{C.Inertia.get(route("users.index"),{...D.exports.pickBy(t),page:t.page},{preserveState:!0,preserveScroll:!0})},150),[]);i.exports.useEffect(()=>M(a),[a]),i.exports.useEffect(()=>{let t=[];for(let s=d.per_page;s<d.total/d.per_page;s=s+d.per_page)t.push(s);t.length===0?w([10]):w(t)},[]);const y=t=>m({...a,[t.target.name]:t.target.value}),l=t=>{m({...a,field:t,direction:a.direction=="asc"?"desc":"asc"})},j=()=>{p(!0)},A=t=>{k(t),u(!0)},I=t=>{k(t),x(!0)},U=()=>{C.Inertia.delete(route("users.destroy",v.id),{onSuccess:()=>x(!1)})},[N,p]=i.exports.useState(!1),[b,u]=i.exports.useState(!1),[B,x]=i.exports.useState(!1),[v,k]=i.exports.useState([]);return r(_,{children:[e(L,{title:"User"}),e(H,{isOpenAddDialog:N,setIsOpenAddDialog:p,size:"max-w-4xl",title:"Tambah User",children:e(F,{roles:f,isOpenAddDialog:N,setIsOpenAddDialog:p})}),e(P,{isOpenEditDialog:b,setIsOpenEditDialog:u,size:"max-w-4xl",title:"Edit User",children:e(W,{roles:f,model:v,isOpenEditDialog:b,setIsOpenEditDialog:u})}),e(q,{isOpenDestroyDialog:B,setIsOpenDestroyDialog:x,size:"max-w-4xl",title:"Delete User",warning:"Yakin hapus data ini ?",children:e(Y,{className:"ml-2",onClick:U,children:"Delete"})}),e("div",{className:"py-12",children:r("div",{className:"mx-auto max-w-8xl sm:px-6 lg:px-8",children:[r("div",{className:"flex items-center justify-between mb-2",children:[e("div",{className:"w-1/2",children:e("div",{className:"flex items-center justify-start mt-2 mb-0 gap-x-1",children:e($,{type:"button",onClick:j,children:"Tambah"})})}),e("div",{className:"w-1/2",children:r("div",{className:"flex items-center justify-end mt-2 mb-0 gap-x-1",children:[e("select",{name:"load",id:"load",onChange:y,value:a.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:z.map((t,s)=>e("option",{children:t},s))}),r("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",autoComplete:"off",name:"q",id:"q",onChange:y,value:a.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),e("div",{className:"flex flex-col",children:e("div",{className:"-my-2 sm:-mx-6 lg:-mx-8",children:r("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:[e("div",{className:"border-b border-gray-200 shadow sm:rounded-lg",children:r("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>l("username"),children:["Username",a.field=="username"&&a.direction=="asc"&&e(n,{}),a.field=="username"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>l("name"),children:["Name",a.field=="name"&&a.direction=="asc"&&e(n,{}),a.field=="name"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>l("address"),children:["Address",a.field=="address"&&a.direction=="asc"&&e(n,{}),a.field=="address"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>l("email"),children:["Email",a.field=="email"&&a.direction=="asc"&&e(n,{}),a.field=="email"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>l("created_at"),children:["Roles",a.field=="created_at"&&a.direction=="asc"&&e(n,{}),a.field=="created_at"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:E.map((t,s)=>r("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:h.from+s}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.username}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.address}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.email}),e("td",{children:t.roles.map((O,R)=>e("span",{className:"px-2 py-1 mx-1 text-xs text-blue-500 uppercase rounded-full bg-blue-50",children:O.name},R))}),e("td",{children:r(g,{children:[e(g.Trigger,{children:e("button",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),r(g.Content,{children:[e("button",{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",onClick:()=>A(t),children:"Edit"}),e("button",{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",onClick:()=>I(t),children:"Hapus"})]})]})})]},t.email))})]})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:h.links.map((t,s)=>e("button",{disabled:t.url==null,className:`${t.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>m({...a,page:new URL(t.url).searchParams.get("page")}),children:t.label},s))})]})})})]})})]})}G.layout=o=>e(T,{children:o});export{G as default};