import{r as s,l as v,d as N,a as t,F as j,j as e,H as V,L}from"./app.9820b78a.js";import{A as M}from"./App.faddbbd5.js";import{C as z}from"./Container.a219fa89.js";import{D as A}from"./DestroyModal.0afa6f39.js";import{B as u}from"./Button.f92299a9.js";import{n as p}from"./helper.e37a4314.js";import"./DropdownMenu.8497f277.js";import"./clsx.m.256e9345.js";import"./transition.bba3a2a2.js";import"./use-event-listener.fdb46010.js";import"./index_responsive.37eff21c.js";import"./Tawarin.08057ae7.js";import"./Aside.02f73067.js";import"./ExclamationIcon.1ce942dc.js";import"./dialog.67f293fa.js";import"./description.5fe67152.js";const n=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),c=()=>e("svg",{className:"w-5 h-5 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})});function S(h){const{data:g,meta:x,filtered:y,attributes:d}=h.plans,[f,b]=s.exports.useState([]),[r,o]=s.exports.useState(y),k=s.exports.useCallback(v.exports.debounce(a=>{N.Inertia.get(route("adminplans.index"),{...v.exports.pickBy(a),page:a.page},{preserveState:!0,preserveScroll:!0})},150),[]);s.exports.useEffect(()=>k(r),[r]),s.exports.useEffect(()=>{let a=[];for(let l=d.per_page;l<d.total/d.per_page;l=l+d.per_page)a.push(l);b(a)},[]);const m=a=>o({...r,[a.target.name]:a.target.value}),i=a=>{o({...r,field:a,direction:r.direction=="asc"?"desc":"asc"})},C=()=>{N.Inertia.delete(route("plans.destroy",_.id),{onSuccess:()=>w(!1)})},[H,w]=s.exports.useState(!1),[_,D]=s.exports.useState([]);return t(j,{children:[e(V,{title:"Plans"}),e(z,{children:"Admin Perencanaan"}),e(A,{isOpenDestroyDialog:H,setIsOpenDestroyDialog:w,size:"2xl",title:"Delete User",children:e(u,{color:"pink",onClick:C,children:"Delete"})}),e("div",{className:"py-12 lg:block",children:t("div",{className:"mx-auto max-w-8xl sm:px-6 lg:px-8",children:[t("div",{className:"flex items-center justify-end",children:[e("div",{className:"w-1/2",children:e("div",{className:"flex items-center justify-start mb-6 gap-x-2"})}),e("div",{className:"w-1/2",children:t("div",{className:"flex items-center justify-end mb-6 gap-x-2",children:[e("select",{name:"load",id:"load",onChange:m,value:r.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:f.map((a,l)=>e("option",{children:a},l))}),t("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:m,value:r.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),e("div",{className:"flex flex-col",children:e("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:e("div",{className:"overflow-hidden border-b border-gray-200 shadow sm:rounded-lg",children:t("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:t("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:e("div",{className:"flex items-center cursor-pointer gap-x-2",children:"#"})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>i("name"),children:["Name",r.field=="name"&&r.direction=="asc"&&e(n,{}),r.field=="name"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>i("jumlah_revisi"),children:["Jumlah Revisi",r.field=="jumlah_revisi"&&r.direction=="asc"&&e(n,{}),r.field=="jumlah_revisi"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>i("anggaran_proyek"),children:["Anggaran Proyek",r.field=="anggaran_proyek"&&r.direction=="asc"&&e(n,{}),r.field=="anggaran_proyek"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>i("is_approved"),children:["Status",r.field=="is_approved"&&r.direction=="asc"&&e(n,{}),r.field=="is_approved"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-800 uppercase",children:t("div",{className:"flex items-center cursor-pointer gap-x-2",onClick:()=>i("created_at"),children:["dibuat",r.field=="created_at"&&r.direction=="asc"&&e(n,{}),r.field=="created_at"&&r.direction=="desc"&&e(c,{})]})}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:g.map((a,l)=>t("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:x.from+l}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.name}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.jumlah_revisi}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:p(a.anggaran_proyek)}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.is_approved==1?e(u,{children:"Diterima"}):e(u,{color:"yellow",children:"Menunggu Konfirmasi"})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:a.created_at}),e("td",{children:e(L,{href:route("plans.show",`${a.slug}`),children:e("div",{className:"flex items-center gap-x-2",children:"Lihat"})})})]},a.id))})]})})})})}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:x.links.map((a,l)=>e("button",{disabled:a.url==null,className:`${a.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>o({...r,page:new URL(a.url).searchParams.get("page")}),children:a.label},l))})]})}),t("div",{className:"hidden ",children:[e("div",{className:"flex items-center justify-end",children:e("div",{className:"w-full",children:t("div",{className:"flex items-center justify-end mt-2 mb-0 gap-x-2",children:[e("select",{name:"load",id:"load",onChange:m,value:r.load,className:"transition duration-150 ease-in-out border-gray-300 rounded-lg focus:ring-blue-200 focus:ring form-select",children:f.map((a,l)=>e("option",{children:a},l))}),t("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",autoComplete:"off",name:"q",id:"q",onChange:m,value:r.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})}),e("div",{className:"grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:g.map((a,l)=>e("div",{className:"relative w-full mx-auto",children:e("a",{href:"#",className:"relative inline-block w-full transition-transform duration-300 ease-in-out transform hover:-translate-y-2",children:t("div",{className:"p-2 bg-white rounded-lg shadow",children:[t("div",{className:"relative flex justify-center overflow-hidden rounded-lg h-52",children:[e("div",{className:"w-full transition-transform duration-500 ease-in-out transform hover:scale-110",children:e("div",{className:"absolute inset-0 bg-black opacity-10"})}),e("div",{className:"absolute bottom-0 flex justify-center mb-3",children:t("div",{className:"flex px-2 py-1 space-x-1 overflow-hidden bg-white rounded-lg shadow md:px-5 md:space-x-5",children:[t("p",{className:"flex items-center font-medium text-gray-800",children:[e("svg",{className:"w-5 h-5 mr-2 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z"})}),"3 + 1"]}),t("p",{className:"flex items-center font-medium text-gray-800",children:[e("svg",{className:"w-5 h-5 mr-2 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512",children:e("path",{d:"M423.18 195.81l-24.94-76.58C387.51 86.29 356.81 64 322.17 64H157.83c-34.64 0-65.34 22.29-76.07 55.22L56.82 195.8C24.02 205.79 0 235.92 0 271.99V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16h256v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-36.07-24.02-66.2-56.82-76.18zm-310.99-66.67c6.46-19.82 24.8-33.14 45.64-33.14h164.34c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H91.72l20.47-62.84zM80 400c0 8.83-7.19 16-16 16H48c-8.81 0-16-7.17-16-16v-16h48v16zm368 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H32v-80c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48zM104.8 248C78.84 248 60 264.8 60 287.95c0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08 0-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95S92.32 272 104.8 272s31.2 14.36 31.2 23.93c0 7.17-10.53 8.07-21.06 8.07zm260.26-56c-24.1 0-55.2 23.24-55.2 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95 0-23.16-18.84-39.96-44.8-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95z"})}),"2"]}),t("p",{className:"flex items-center font-medium text-gray-800",children:[e("svg",{className:"w-5 h-5 mr-2 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e("path",{d:"M504,256H64V61.25a29.26,29.26,0,0,1,49.94-20.69L139.18,65.8A71.49,71.49,0,0,0,128,104c0,20.3,8.8,38.21,22.34,51.26L138.58,167a8,8,0,0,0,0,11.31l11.31,11.32a8,8,0,0,0,11.32,0L285.66,65.21a8,8,0,0,0,0-11.32L274.34,42.58a8,8,0,0,0-11.31,0L251.26,54.34C238.21,40.8,220.3,32,200,32a71.44,71.44,0,0,0-38.2,11.18L136.56,18A61.24,61.24,0,0,0,32,61.25V256H8a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H32v96c0,41.74,26.8,76.9,64,90.12V504a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V480H384v24a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V474.12c37.2-13.22,64-48.38,64-90.12V288h24a8,8,0,0,0,8-8V264A8,8,0,0,0,504,256ZM228.71,76.9,172.9,132.71A38.67,38.67,0,0,1,160,104a40,40,0,0,1,40-40A38.67,38.67,0,0,1,228.71,76.9ZM448,384a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V288H448Z"})}),"3"]})]})}),e("span",{className:"absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg select-none",children:"Featured"})]}),t("div",{className:"mt-4",children:[e("h2",{className:"text-base font-medium text-gray-800 md:text-lg line-clamp-1",title:"New York",children:a.name}),e("p",{className:"mt-2 text-sm text-gray-800 line-clamp-1",title:"New York, NY 10004, United States",children:a.plan_category.name})]}),t("div",{className:"grid grid-cols-2 grid-rows-1 gap-4 mt-2",children:[t("p",{className:"inline-flex flex-col text-gray-800 xl:flex-row xl:items-center",children:[e("span",{className:"mt-2 xl:mt-0",children:"Dari"}),e("span",{className:"text-sm",children:p(a.dari_anggaran)})]}),t("p",{className:"inline-flex flex-col text-gray-800 xl:flex-row xl:items-center",children:[e("span",{className:"mt-2 xl:mt-0",children:"Sampai"}),e("span",{className:"text-sm",children:p(a.sampai_anggaran)})]})]}),t("div",{className:"grid grid-cols-2 mt-4",children:[e("div",{className:"flex items-center",children:t("div",{className:"relative",children:[e("div",{className:"w-6 h-6 bg-gray-200 rounded-full md:w-8 md:h-8"}),e("span",{className:"absolute top-0 right-0 inline-block w-3 h-3 rounded-full bg-primary-red"}),e("p",{className:"text-sm text-gray-800 line-clamp-1",children:a.owner.name})]})}),e("div",{className:"flex justify-end",children:e("p",{className:"inline-block font-semibold leading-tight text-primary whitespace-nowrap rounded-xl",children:e("span",{className:"text-sm",children:p(a.anggaran_proyek)})})})]})]})})},l))}),e("ul",{className:"flex items-center mt-10 gap-x-1",children:x.links.map((a,l)=>e("button",{disabled:a.url==null,className:`${a.url==null?"text-gray-500":"text-gray-800"} w-12 h-9 rounded-lg flex items-center justify-center border bg-white`,onClick:()=>o({...r,page:new URL(a.url).searchParams.get("page")}),children:a.label},l))})]})]})}S.layout=h=>e(M,{children:h});export{S as default};