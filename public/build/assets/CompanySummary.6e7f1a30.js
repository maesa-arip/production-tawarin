import{r as s,l as g,d as C,a as t,F as R,j as e,H as S}from"./app.e9b32960.js";import{A as D}from"./AppReservasi.8ac236df.js";import{C as H}from"./Container.235d6f27.js";import{n as p}from"./helper.e37a4314.js";import"./DatePicker.98cad3fd.js";import{H as P}from"./Header.de6e7d54.js";import"./DropdownMenu.5747e5cf.js";import"./clsx.m.256e9345.js";import"./transition.0ab516ac.js";import"./use-event-listener.47eaf533.js";import"./index_responsive.c579ff59.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.ab382a14.js";const d=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),c=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function I(i){const{data:b,meta:f,filtered:y,attributes:o}=i.transactions,{data:N}=i.sumTransactions,h=i.employees,w=i.counters;console.log(h);const[L,v]=s.exports.useState([]),[a,u]=s.exports.useState(y),[_,k]=s.exports.useState(!0),j=s.exports.useCallback(g.exports.debounce(r=>{C.Inertia.get(route(route().current()),{...g.exports.pickBy(r),page:r.page},{preserveState:!0,preserveScroll:!0})},150),[]);s.exports.useEffect(()=>{_?k(!1):j(a)},[a]),s.exports.useEffect(()=>{let r=[];for(let l=o.per_page;l<o.total/o.per_page;l=l+o.per_page)r.push(l);v(r)},[]);const m=r=>u({...a,[r.target.name]:r.target.value}),n=r=>{u({...a,field:r,direction:a.direction=="asc"?"desc":"asc"})},x=new Date().toLocaleDateString("en-CA");return s.exports.useState(x[0]),t(R,{children:[e(S,{title:"History"}),e(P,{title:"Rekapan",description:"Rekapan Perusahaan."}),e(H,{children:e("div",{className:"py-4",children:t("div",{className:"mx-auto",children:[e("div",{className:"flex items-center justify-end ",children:e("div",{className:"w-full",children:e("div",{className:"flex items-center justify-end mb-4 overflow-hidden gap-x-1",children:e("div",{className:"flex items-center transition duration-150 ease-in-out bg-white ",children:t("select",{name:"q",id:"q",onChange:m,value:a.q,className:"mb-2 transition duration-150 ease-in-out border-gray-300 rounded-lg form-select",children:[e("option",{selected:!0,children:"Semua Karyawan"}),h.map((r,l)=>e("option",{children:r.user.name},l))]})})})})}),e("div",{className:"flex items-center justify-end ",children:e("div",{className:"w-full",children:e("div",{className:"flex items-center justify-end mb-4 overflow-hidden gap-x-1",children:e("div",{className:"flex items-center transition duration-150 ease-in-out bg-white ",children:t("select",{name:"r",id:"r",onChange:m,value:a.r,className:"mb-2 transition duration-150 ease-in-out border-gray-300 rounded-lg form-select",children:[e("option",{selected:!0,children:"Semua Layanan"}),w.map((r,l)=>e("option",{children:r.name},l))]})})})})}),e("div",{className:"flex items-center justify-end ",children:e("div",{className:"w-full",children:t("div",{className:"flex items-center justify-end mb-4 overflow-hidden gap-x-1",children:[e("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:e("input",{type:"date",name:"startDate",id:"startDate",defaultValue:x,onChange:m,value:a.startDate,className:"w-full border-0 focus:ring-0 form-text"})}),e("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:e("input",{type:"date",name:"endDate",id:"endDate",defaultValue:x,onChange:m,value:a.endDate,className:"w-full border-0 focus:ring-0 form-text"})})]})})}),N.map((r,l)=>e("div",{className:"py-2",children:t("div",{className:"grid grid-cols-3 border border-gray-200 lg:items-center rounded-xl",children:[t("div",{className:"flex flex-col p-4",children:[e("h4",{className:"mb-2 text-gray-800"}),t("div",{className:"flex gap-x-1",children:[e("span",{className:"text-xl font-normal text-gray-800"}),e("p",{className:"text-base font-semibold text-gray-800",children:r.employee_name})]})]}),t("div",{className:"flex flex-col p-4",children:[e("div",{className:"flex justify-between",children:e("h4",{className:"mb-1 text-gray-800",children:"Pelanggan"})}),t("div",{className:"flex gap-x-1",children:[e("span",{className:"text-xl font-normal text-gray-800"}),e("p",{className:"text-xl font-semibold text-gray-800",children:r.total_customers})]})]}),t("div",{className:"flex flex-col p-4",children:[e("h4",{className:"mb-1 text-gray-800",children:"Harga"}),t("div",{className:"flex gap-x-1",children:[e("span",{className:"text-base font-normal text-gray-800",children:"Rp"}),e("p",{className:"text-xl font-semibold text-gray-800",children:p(r.total_price_user)}),e("p",{className:"text-xl font-semibold text-gray-800",children:p(r.total_price_user)})]})]})]},l)},l)),e("div",{className:"flex flex-col mt-4",children:e("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden border-b border-gray-200 shadow sm:rounded-lg",children:t("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("employee_name"),children:["Nama Pekerja",a.field=="employee_name"&&a.direction=="asc"&&e(d,{}),a.field=="employee_name"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("counter_name"),children:["Nama Layanan",a.field=="counter_name"&&a.direction=="asc"&&e(d,{}),a.field=="counter_name"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("total_customers"),children:["Total Customer",a.field=="total_customers"&&a.direction=="asc"&&e(d,{}),a.field=="total_customers"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("total_price_user"),children:["Total Harga",a.field=="total_price_user"&&a.direction=="asc"&&e(d,{}),a.field=="total_price_user"&&a.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>n("total_jasa"),children:["Total Jasa",a.field=="total_jasa"&&a.direction=="asc"&&e(d,{}),a.field=="total_jasa"&&a.direction=="desc"&&e(c,{})]})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:b.map((r,l)=>t("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:f.from+l}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:r.employee_name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:r.counter_name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t("div",{className:"flex mt-1 rounded-md shadow-sm",children:[e("div",{className:"flex-1 block w-full px-4 py-1 text-base border border-r-0 border-gray-300 rounded-none rounded-l-md focus:border-indigo-500 focus:ring-indigo-500",children:r.total_customers}),e("span",{className:"inline-flex items-center px-3 text-base text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50",children:"Pelanggan"})]})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t("div",{className:"flex mt-1 rounded-md shadow-sm",children:[e("span",{className:"inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50",children:"Rp"}),e("div",{className:"flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500",children:p(r.total_price_user)})]})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:t("div",{className:"flex mt-1 rounded-md shadow-sm",children:[e("span",{className:"inline-flex items-center px-3 text-base text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50",children:"Rp"}),e("div",{className:"flex-1 block w-full px-2 py-1 text-base border border-l-0 border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500",children:p(r.total_jasa)})]})})]},l))})]})})})})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:f.links.map((r,l)=>e("button",{disabled:r.url==null,className:`${r.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>u({...a,page:new URL(r.url).searchParams.get("page")}),children:r.label},l))})]})})})]})}I.layout=i=>e(D,{children:i});export{I as default};