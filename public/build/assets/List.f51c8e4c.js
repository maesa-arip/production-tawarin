import{r,u as S,l as f,d as L,a,j as e,H as C,L as g}from"./app.b397b200.js";import{A as H}from"./App.0650af6f.js";import{C as T}from"./Container.f6289661.js";import{H as z}from"./Header.55faba1d.js";import{P as A}from"./Pagination.a9016fbd.js";import{h as B}from"./AsideReservasi.b9fbedc9.js";import{n as E}from"./helper.e37a4314.js";import{E as O}from"./EmptyCard.66096af8.js";import{I as R}from"./InfoModal.592f4b88.js";import{T as o}from"./ThirdButton.4117333a.js";import{T as D}from"./ThirdButtonNoLink.9d2d582e.js";import"./DropdownMenu.9518c36e.js";import"./clsx.m.256e9345.js";import"./transition.2cdd9121.js";import"./use-event-listener.c4ff3453.js";import"./Tawarin.08057ae7.js";import"./ExclamationIcon.489e228c.js";import"./dialog.d3f0e9cd.js";import"./description.2145e020.js";function q(l){const{data:d,meta:x,links:h,filtered:b,attributes:n}=l.projects,[y,w]=r.exports.useState([]),[i,N]=r.exports.useState(b),[v,k]=r.exports.useState(!0),{permissions:m}=S().props,c=m?m.map(t=>t.name):"null",j=r.exports.useCallback(f.exports.debounce(t=>{L.Inertia.get(route(route().current()),{...f.exports.pickBy(t),page:t.page},{preserveState:!0,preserveScroll:!0})},150),[]);r.exports.useEffect(()=>{v?k(!1):j(i)},[i]),r.exports.useEffect(()=>{let t=[];for(let s=n.per_page;s<n.total/n.per_page;s=s+n.per_page)t.push(s);w(t)},[]);const p=t=>{const s={...i,[t.target.name]:t.target.value,page:1};N(s)},[_,u]=r.exports.useState(!1),[M,P]=r.exports.useState([]),I=()=>{P(),u(!0)};return a("div",{children:[e(C,{title:"projects"}),e(z,{title:"Proyek",description:"List proyek yang ada di Tawarin."}),e(R,{isOpenInfoDialog:_,setIsOpenInfoDialog:u,size:"2xl",title:"Info",header:"",children:"Anda harus memiliki akun owner terlebih dahulu sebelum bisa membuat proyek"}),a(T,{children:[a("div",{className:"flex items-center justify-end",children:[e("div",{className:"w-2/3",children:a("div",{className:"flex items-center justify-start gap-x-2",children:[c.indexOf("membuat proyek")>-1?a("div",{className:"flex items-center justify-start gap-x-2",children:[e(o,{type:"button",href:"/projects/create",children:"Tambah"}),e(o,{type:"button",href:route("projects.index"),children:"Proyek Saya"})]}):e(D,{type:"button",onClick:()=>I()}),c.indexOf("melakukan penawaran proyek")>-1?e(o,{type:"button",href:"/projectbids",children:"Penawaran Saya"}):""]})}),e("div",{className:"w-1/3",children:a("div",{className:"flex items-center justify-end gap-x-2",children:[e("select",{name:"load",id:"load",onChange:p,value:i.load,className:"hidden transition duration-150 ease-in-out border-gray-300 rounded-lg md:flex focus:ring-blue-200 focus:ring form-select",children:y.map((t,s)=>e("option",{children:t},s))}),a("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:p,value:i.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),d.length?e("div",{className:"grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:d.map((t,s)=>e("div",{className:"relative w-full pb-4 mx-auto",children:e(g,{href:`/public/projects/${t.slug}`,className:"relative inline-block w-full transition-transform duration-300 ease-in-out",children:a("div",{className:"p-2 bg-white border rounded-lg",children:[a("div",{className:"relative flex justify-center overflow-hidden border rounded-lg h-52",children:[e("div",{className:"w-full transition-transform duration-500 ease-in-out",children:e("div",{className:"absolute inset-0 ",children:e("img",{className:"object-cover object-top w-full h-full lg:h-full lg:w-full",src:t.media?t.media:"/storage/files/default/NoImage.svg",alt:t.slug})})}),e("div",{className:"absolute bottom-0 flex justify-center mb-3",children:e("div",{className:"flex px-2 py-1 space-x-1 overflow-hidden bg-white rounded-lg md:px-5 md:space-x-5",children:a("p",{className:"flex items-center text-sm font-medium text-gray-800",children:[e(B,{className:"w-5 h-5 text-gray-800 bg-transparent"}),t.owner.name]})})}),t.project_bids_sum_is_approved==1?a("span",{className:"absolute top-0 left-0 inline-flex justify-end px-2 py-1 mt-3 ml-3 text-xs font-medium text-white bg-yellow-500 rounded-lg select-none z-9",children:["Pemenang Proyek Ini:"," ",t.winner.name]}):a("span",{className:"absolute top-0 left-0 inline-flex justify-end px-2 py-1 mt-3 ml-3 text-xs font-medium text-white bg-blue-500 rounded-lg select-none z-9",children:[t.until," Hari Lagi"]})]}),a("div",{className:"mt-4",children:[e("h2",{className:"text-base font-medium text-gray-800 md:text-lg line-clamp-1",title:"New York",children:t.name}),e(g,{className:"mt-2 text-sm text-gray-800 line-clamp-1",href:`/public/projects/list?project_category=${t.project_category.slug}`,children:t.project_category.name})]}),e("div",{className:"flex items-center justify-between my-2 space-x-4",children:a("span",{className:"items-center w-full px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-md md:justify-between md:flex ",children:[e("p",{className:"text-[10px] md:text-xs",children:"Anggaran Proyek"}),a("p",{className:"md:ml-1 text-[9px] md:text-xs",children:["Rp"," ",E(t.anggaran_proyek)]})]})}),a("div",{className:"flex items-center justify-between my-2 space-x-4",children:[a("span",{className:"flex items-center px-2 py-1 mt-2 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-md w-36",children:[t.jangka_waktu_pelaksanaan," ","Hari Pengerjaan"]}),a("span",{className:"flex items-center px-2 py-1 mt-2 text-xs font-semibold text-green-500 rounded-md bg-green-50",children:[t.project_bids_count," Penawar"]})]})]})})},s))}):e(O,{}),e(A,{meta:x,links:h})]})]})}q.layout=l=>e(H,{children:l});export{q as default};