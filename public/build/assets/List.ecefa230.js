import{r,u as L,l as c,d as P,a as s,j as e,H as _,L as u}from"./app.d0158df0.js";import{A}from"./AppReservasi.773b835b.js";import{C as E}from"./Container.eaed336f.js";import{H}from"./Header.44e9a7ae.js";import{P as R}from"./Pagination.cc6702a6.js";import{E as B}from"./EmptyCard.1ed1a58d.js";import{I as M}from"./InfoModal.43717cbd.js";import{L as q}from"./ListBoxPage.8450b0a1.js";import"./DropdownMenu.41ec8179.js";import"./clsx.m.256e9345.js";import"./transition.a8105c95.js";import"./use-event-listener.d35982f7.js";import"./index_responsive.476210bc.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.58c1993a.js";import"./ExclamationIcon.4010abe5.js";import"./dialog.293c8101.js";import"./description.7fd81697.js";import"./listbox.6693f596.js";import"./use-computed.215dda9d.js";import"./use-controllable.7ca1a856.js";import"./SelectorIcon.2ae47741.js";function z(i){const{data:n,meta:p,links:g,filtered:f,attributes:o}=i.reservations,h=i.reservation_categories;i.reservationCompany;const[x,v]=r.exports.useState([]),[l,b]=r.exports.useState(f),[w,N]=r.exports.useState(!0),{permissions:d}=L().props;d&&d.map(t=>t.name);const y=r.exports.useCallback(c.exports.debounce(t=>{P.Inertia.get(route(route().current()),{...c.exports.pickBy(t),page:t.page},{preserveState:!0,preserveScroll:!0})},150),[]);r.exports.useEffect(()=>{w?N(!1):y(l)},[l]),r.exports.useEffect(()=>{let t=[];for(let a=o.per_page;a<o.total/o.per_page;a=a+o.per_page)t.push(a);v(t)},[]);const m=t=>{const a={...l,[t.target.name]:t.target.value,page:1};b(a)},[k,I]=r.exports.useState(!1);r.exports.useState([]);const j=[{name:"Pilih Kategori"}],[S,C]=r.exports.useState(j[0]);return s("div",{children:[e(_,{title:"Reservations"}),e(H,{title:"Reservasi",description:"List reservasi yang ada di Tawarin."}),e(M,{isOpenInfoDialog:k,setIsOpenInfoDialog:I,size:"2xl",title:"Info",header:"",children:"Anda harus memiliki akun owner terlebih dahulu sebelum bisa membuat perencanaan"}),s(E,{children:[s("div",{className:"flex items-center justify-end gap-x-2",children:[e("div",{className:"w-2/3 ",children:e("div",{className:"flex items-center justify-start ",children:e(q,{ShouldMap:h,selected:S,onChange:t=>{C(t)}})})}),e("div",{className:"w-1/3",children:s("div",{className:"flex items-center justify-end gap-x-2",children:[e("select",{name:"load",id:"load",onChange:m,value:l.load,className:"hidden transition duration-150 ease-in-out border-gray-300 rounded-lg md:flex focus:ring-blue-200 focus:ring form-select",children:x.map((t,a)=>e("option",{children:t},a))}),s("div",{className:"flex items-center px-2 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg gap-x-2 focus-within:border-blue-400 focus-within:ring-blue-200 focus-within:ring",children:[e("svg",{className:"inline w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e("input",{type:"text",name:"q",id:"q",onChange:m,value:l.q,className:"w-full border-0 focus:ring-0 form-text"})]})]})})]}),n.length?e("div",{className:"grid w-full grid-cols-2 gap-1 mt-4 md:gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:n.map((t,a)=>e("div",{className:"relative w-full pb-4 mx-auto",children:e(u,{href:`/public/reservations/${t.slug}`,className:"relative inline-block w-full transition-transform duration-300 ease-in-out",children:s("div",{className:"p-2 bg-white border rounded-lg",children:[e("div",{className:"relative flex justify-center overflow-hidden border rounded-lg h-52",children:e("div",{className:"w-full transition-transform duration-500 ease-in-out",children:e("div",{className:"absolute inset-0 ",children:e("img",{className:"object-cover object-top w-full h-full lg:h-full lg:w-full",src:t.media?t.media:"/storage/files/default/NoImage.svg",alt:t.slug})})})}),s("div",{className:"mt-4",children:[e("h2",{className:"text-base font-medium text-gray-800 md:text-lg line-clamp-1",title:"New York",children:t.name}),e(u,{className:"mt-2 text-sm text-gray-800 line-clamp-2",href:"",children:t.formattedAddress})]})]})})},a))}):e(B,{}),e(R,{meta:p,links:g})]})]})}z.layout=i=>e(A,{children:i});export{z as default};