import{r as a,u as k,l as u,d as I,a as r,j as e,H as C,L as P}from"./app.e12db1c5.js";import{A as S}from"./AppReservasi.d303863f.js";import{C as L}from"./Container.95b21bb0.js";import{H as _}from"./Header.dc97bed8.js";import{P as E}from"./Pagination.284d68fe.js";import{n as H}from"./helper.e37a4314.js";import{E as R}from"./EmptyCard.56301a75.js";import{I as A}from"./InfoModal.b407b07c.js";import"./DropdownMenu.27d16fb1.js";import"./clsx.m.256e9345.js";import"./transition.cb3dc600.js";import"./use-owner.71d88244.js";import"./index_responsive.18683d70.js";import"./index.27dbca70.js";import"./Header.b7b3d721.js";import"./popover.5ecc46e3.js";import"./use-event-listener.c1f7f4ad.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.13c86b47.js";import"./ExclamationIcon.f642dc9a.js";import"./dialog.053e0bcb.js";import"./description.7709e1c5.js";function M(i){const{data:o,meta:p,links:q,filtered:f,attributes:n}=i.reservations;i.reservation_categories;const d=i.reservationCompany;console.log(o);const[g,x]=a.exports.useState([]),[l,h]=a.exports.useState(f),[b,v]=a.exports.useState(!0),{permissions:m}=k().props;m&&m.map(t=>t.name);const w=a.exports.useCallback(u.exports.debounce(t=>{I.Inertia.get(route(route().current()),{...u.exports.pickBy(t),page:t.page},{preserveState:!0,preserveScroll:!0})},150),[]);a.exports.useEffect(()=>{b?v(!1):w(l)},[l]),a.exports.useEffect(()=>{let t=[];for(let s=n.per_page;s<n.total/n.per_page;s=s+n.per_page)t.push(s);x(t)},[]);const c=t=>{const s={...l,[t.target.name]:t.target.value,page:1};h(s)},[N,y]=a.exports.useState(!1);a.exports.useState([]);const j=[{name:"Pilih"}];return a.exports.useState(j[0]),r("div",{children:[e(C,{title:"Reservations"}),e(_,{title:"Pelayanan",description:"List layanan yang ada di "+d.name}),e(A,{isOpenInfoDialog:N,setIsOpenInfoDialog:y,size:"2xl",title:"Info",header:"",children:"Anda harus memiliki akun owner terlebih dahulu sebelum bisa membuat perencanaan"}),r(L,{children:[e("div",{className:"flex items-center justify-end",children:e("div",{className:"w-full md:w-1/3",children:r("div",{className:"items-center justify-end md:flex gap-x-2",children:[e("select",{name:"load",id:"load",onChange:c,value:l.load,className:"hidden transition duration-150 ease-in-out border-gray-300 rounded-lg md:flex focus:ring-blue-200 focus:ring form-select",children:g.map((t,s)=>e("option",{children:t},s))}),r("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:c,value:l.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})}),o.length?e("div",{className:"grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:o.map((t,s)=>e("div",{className:"relative w-full pb-4 mx-auto",children:e(P,{href:`/public/reservationCounters/${d.slug}/${t.slug}`,className:"relative inline-block w-full transition-transform duration-300 ease-in-out",children:r("div",{className:"p-2 bg-white border rounded-lg",children:[r("div",{className:"relative flex justify-center overflow-hidden border rounded-lg h-52",children:[e("div",{className:"w-full transition-transform duration-500 ease-in-out",children:e("div",{className:"absolute inset-0 ",children:e("img",{className:"object-cover object-top w-full h-full lg:h-full lg:w-full",src:t.media?t.media:"/storage/files/default/NoImage.svg",alt:t.slug})})}),e("div",{className:"absolute bottom-0 flex justify-center mb-3",children:e("div",{className:"flex px-2 py-1 space-x-1 overflow-hidden bg-white rounded-lg md:px-5 md:space-x-5",children:e("p",{className:"flex items-center text-sm font-medium text-gray-800",children:t.name})})})]}),r("div",{className:"mt-4",children:[e("div",{className:"flex items-center justify-between space-x-4",children:e("span",{className:"items-center w-full px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-md md:flex md:justify-between",children:r("p",{className:"justify-end text-[9px] text-xs font-semibold md:flex",children:["Rp"," ",H(t.price)]})})}),e("div",{className:"flex items-center justify-between my-2 space-x-4",children:r("span",{className:"flex items-center px-2 py-1 mt-2 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-md w-36",children:[t.service_duration," ","Menit Pengerjaan"]})})]})]})})},s))}):e(R,{}),e(E,{meta:p})]})]})}M.layout=i=>e(S,{children:i});export{M as default};