import{r as a,l as y,f as v,j as r,F as B,a as e,H as O}from"./app.a9c988f9.js";import{D as m,A as U}from"./App.191e828a.js";import{C as L}from"./Container.4611717f.js";import{A as P,E as _}from"./EditModal.92110b11.js";import{D as q}from"./DestroyModal.553ef36e.js";import{B as F}from"./Button.b1d1719f.js";import{C as H,E as T}from"./EditRole.2ce7a037.js";import"./XIcon.e2f09238.js";import"./clsx.m.256e9345.js";import"./transition.d344ba17.js";import"./Tawarin.938b8d9c.js";const N=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),k=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function W(o){const{data:D,meta:u,filtered:C,attributes:i}=o.users,[R,E]=a.exports.useState([]),[s,n]=a.exports.useState(C),A=a.exports.useCallback(y.exports.debounce(t=>{v.Inertia.get(route("assign.user.index"),{...y.exports.pickBy(t),page:t.page},{preserveState:!0,preserveScroll:!0})},150),[]);a.exports.useEffect(()=>A(s),[s]),a.exports.useEffect(()=>{let t=[];for(let l=i.per_page;l<i.total/i.per_page;l=l+i.per_page)t.push(l);E(t)},[]);const g=t=>n({...s,[t.target.name]:t.target.value}),x=t=>{n({...s,field:t,direction:s.direction=="asc"?"desc":"asc"})},S=()=>{c(!0)},z=t=>{b(t),d(!0)},M=t=>{b(t),p(!0)},j=()=>{v.Inertia.delete(route("roles.destroy",w.id),{onSuccess:()=>p(!1)})},[h,c]=a.exports.useState(!1),[f,d]=a.exports.useState(!1),[I,p]=a.exports.useState(!1),[w,b]=a.exports.useState([]);return r(B,{children:[e(O,{title:"Roles to User"}),e(L,{children:"Assign Roles to User "}),e(P,{isOpenAddDialog:h,setIsOpenAddDialog:c,size:"2xl",title:"Assign Roles to User",children:e(H,{isOpenAddDialog:h,setIsOpenAddDialog:c})}),e(_,{isOpenEditDialog:f,setIsOpenEditDialog:d,size:"2xl",title:"Edit Role",children:e(T,{model:w,isOpenEditDialog:f,setIsOpenEditDialog:d})}),e(q,{isOpenDestroyDialog:I,setIsOpenDestroyDialog:p,size:"2xl",title:"Delete Role",children:e(F,{color:"pink",onClick:j,children:"Delete"})}),e("div",{className:"py-12",children:r("div",{className:"mx-auto max-w-8xl sm:px-6 lg:px-8",children:[r("div",{className:"flex items-center justify-end",children:[e("div",{className:"w-1/2",children:e("div",{className:"flex items-center justify-start mb-6 gap-x-2",children:e("button",{type:"button",onClick:S,className:"px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",children:"Assign Roles to User"})})}),e("div",{className:"w-1/2",children:r("div",{className:"flex items-center justify-end mb-6 gap-x-2",children:[e("select",{name:"load",id:"load",onChange:g,value:s.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:R.map((t,l)=>e("option",{children:t},l))}),r("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:g,value:s.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),e("div",{className:"flex flex-col p-1",children:e("div",{className:"-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8",children:r("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:[e("div",{className:"overflow-visible border-b border-gray-200 shadow sm:rounded-lg",children:r("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>x("name"),children:["Name",s.field=="name"&&s.direction=="asc"&&e(N,{}),s.field=="name"&&s.direction=="desc"&&e(k,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:r("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>x("permission.roles"),children:["Roles",s.field=="permission.roles"&&s.direction=="asc"&&e(N,{}),s.field=="permission.roles"&&s.direction=="desc"&&e(k,{})]})}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:D.map((t,l)=>r("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:u.from+l}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t.roles}),e("td",{children:r(m,{children:[e(m.Trigger,{children:e("button",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),r(m.Content,{children:[e("button",{onClick:()=>z(roles),className:"block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100",children:"Edit"}),e("button",{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",onClick:()=>M(roles),children:"Delete"})]})]})})]},t.id))})]})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:u.links.map((t,l)=>e("button",{disabled:t.url==null,className:`${t.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>n({...s,page:new URL(t.url).searchParams.get("page")}),children:t.label},l))})]})})})]})})]})}W.layout=o=>e(U,{children:o});export{W as default};