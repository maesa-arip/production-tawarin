import{r as i,l as y,d as T,a as t,F as R,j as e,H as B,L as N}from"./app.b397b200.js";import{A as I}from"./App.0650af6f.js";import{C as S}from"./Container.f6289661.js";import{n as v}from"./helper.e37a4314.js";import{H}from"./Header.55faba1d.js";import{T as p}from"./ThirdButtonSmallNoLink.12c3d4bf.js";import{T as M}from"./ThirdButtonSmall.0bed11dd.js";import{T as W}from"./ThirdButton.4117333a.js";import"./DropdownMenu.9518c36e.js";import"./clsx.m.256e9345.js";import"./transition.2cdd9121.js";import"./use-event-listener.c4ff3453.js";import"./AsideReservasi.b9fbedc9.js";import"./Tawarin.08057ae7.js";const d=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),c=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function z(o){const{data:h,meta:x,filtered:b,attributes:n}=o.transactions,[k,_]=i.exports.useState([]),[r,m]=i.exports.useState(b),[C,j]=i.exports.useState(!0),L=i.exports.useCallback(y.exports.debounce(a=>{T.Inertia.get(route(route().current()),{...y.exports.pickBy(a),page:a.page},{preserveState:!0,preserveScroll:!0})},150),[]);i.exports.useEffect(()=>{C?j(!1):L(r)},[r]),i.exports.useEffect(()=>{let a=[];for(let l=n.per_page;l<n.total/n.per_page;l=l+n.per_page)a.push(l);_(a)},[]);const u=a=>m({...r,[a.target.name]:a.target.value}),s=a=>{m({...r,field:a,direction:r.direction=="asc"?"desc":"asc"})};return t(R,{children:[e(B,{title:"Withdraw"}),e(H,{title:"Withdraw",description:"List uang Withdraw yang ada di Tawarin"}),e(S,{children:e("div",{className:"",children:t("div",{className:"mx-auto max-w-8xl sm:px-6 lg:px-8",children:[t("div",{className:"flex items-center justify-end",children:[e("div",{className:"w-1/2",children:e("div",{className:"",children:e(W,{type:"button",href:"adminspendings/create",children:"Tambah"})})}),e("div",{className:"w-1/2",children:t("div",{className:"flex items-center justify-end gap-x-2",children:[e("select",{name:"load",id:"load",onChange:u,value:r.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:k.map((a,l)=>e("option",{children:a},l))}),t("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:u,value:r.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),t("div",{className:"hidden lg:block",children:[e("div",{className:"flex items-center justify-end"}),e("div",{className:"flex flex-col p-1",children:e("div",{className:"-my-2 overflow-x-auto rounded sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden border-b border-gray-200 shadow sm:rounded-lg",children:t("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>s("payable_type"),children:["Type",r.field=="payable_type"&&r.direction=="asc"&&e(d,{}),r.field=="payable_type"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>s("type"),children:["Type",r.field=="type"&&r.direction=="asc"&&e(d,{}),r.field=="type"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>s("amount"),children:["amount",r.field=="amount"&&r.direction=="asc"&&e(d,{}),r.field=="amount"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>s("confirmed"),children:["confirmed",r.field=="confirmed"&&r.direction=="asc"&&e(d,{}),r.field=="confirmed"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>s("created_at"),children:["Created_at",r.field=="created_at"&&r.direction=="asc"&&e(d,{}),r.field=="created_at"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:h.map((a,l)=>t("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:x.from+l}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.payable_type}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.type}),t("td",{className:"px-6 py-4 whitespace-nowrap",children:["Rp"," ",v(a.amount)]}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.confirmed}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.created_at}),e("td",{children:e(N,{href:`/adminwithdraws/${a.id}`,children:e("div",{className:"flex items-center gap-x-2",children:"Lihat"})})})]},a.id))})]})})})})})]}),t("div",{className:"lg:hidden",children:[e("div",{className:"flex items-center justify-between"}),e("div",{className:"grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",children:h.map((a,l)=>{var f,g,w;return e("div",{className:"relative w-full mx-auto",children:e("div",{className:"flex flex-col bg-white border shadow-lg rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]",children:e("div",{className:"flex flex-col items-center justify-center flex-auto p-2",children:t("div",{className:"grid w-full grid-cols-12 gap-1",children:[t("div",{className:"col-span-8 col-start-1",children:[e("p",{className:"text-base font-semibold",children:(f=a.meta)==null?void 0:f.message}),e("p",{className:"text-xs font-medium text-gray-500"})]}),e("div",{className:"flex items-center justify-end col-span-4 col-end-13",children:a.confirmed==0&&(((g=a.meta)==null?void 0:g.type)=="decline"||((w=a.meta)==null?void 0:w.type)=="decline_deposit_withdraw")?e(p,{color:"red",children:"Ditolak"}):a.confirmed==1?e(p,{color:"teal",children:"Diterima"}):e(p,{color:"secondary",children:"Menunggu Konfirmasi"})}),e("div",{className:"col-span-12 col-start-1 border-b border-gray-100"}),t("div",{className:"col-span-10 col-start-1",children:[t(N,{className:"text-base font-semibold",children:["Rp"," ",v(a.amount)]}),e("p",{className:"text-xs font-medium text-gray-500",children:a.created_at})]}),e("div",{className:"col-span-5 col-end-13",children:e("div",{className:"flex items-center justify-end col-span-3 col-end-6 ",children:e(M,{href:`/adminwithdraws/${a.id}`,children:"Lihat"})})})]})})})},l)})})]}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:x.links.map((a,l)=>e("button",{disabled:a.url==null,className:`${a.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>m({...r,page:new URL(a.url).searchParams.get("page")}),children:a.label},l))})]})})})]})}z.layout=o=>e(I,{children:o});export{z as default};