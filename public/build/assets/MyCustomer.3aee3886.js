import{r,b as N,a,F as i,j as e,H as b}from"./app.b2a6f44b.js";import"./Dropdown.046e2d0f.js";import{A as v}from"./AppReservasi.357ad9e1.js";import"./CopyButton.6b23b436.js";import{I as p}from"./InfoModal.2aab9c78.js";import{T as l}from"./ThirdButtonNoLink.7d6fed9c.js";import{R as k}from"./MenuLogo.36958665.js";import"./transition.7b88a4bc.js";import"./DropdownMenu.291b2cde.js";import"./clsx.m.256e9345.js";import"./use-owner.c395fb84.js";import"./index.2ca15937.js";import"./XIcon.c10ccf78.js";import"./use-event-listener.659ecc81.js";import"./Tawarin.08057ae7.js";function I({auth:n,mustVerifyEmail:S,status:w,myCustomers:f}){const[c,d]=r.exports.useState([]),[u,t]=r.exports.useState(!1),[x,o]=r.exports.useState(!1),{data:j,setData:D,patch:C,post:M,put:m,processing:O,errors:B,reset:P}=N({}),g=s=>{d(s),t(!0)},h=s=>{d(s),o(!0)};return a(i,{children:[a(p,{isOpenInfoDialog:u,setIsOpenInfoDialog:t,size:"2xl",closeButton:"false",title:"Yakin Mulai Pelayanan ?",children:[e(l,{onClick:()=>{m(route("reservation.startservice",c.id),{onSuccess:()=>t(!1)})},children:"Mulai"}),e(l,{className:"mx-2 mt-2",color:"gray",onClick:()=>{t(!1)},children:"Close"})]}),a(p,{isOpenInfoDialog:x,setIsOpenInfoDialog:o,size:"2xl",closeButton:"false",title:"Yakin Selesaikan Pelayanan ?",children:[e(l,{color:"teal",onClick:()=>{m(route("reservation.finishservice",c.id),{onSuccess:()=>o(!1)})},children:"Selesai"}),e(l,{className:"mx-2 mt-2",color:"gray",onClick:()=>{o(!1)},children:"Close"})]}),e(b,{title:"Profile"}),e("div",{className:"py-12",children:e("div",{className:"mx-auto space-y-6 sm:px-6 lg:px-8",children:a("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:[e("div",{className:"p-8 border border-gray-200 rounded-2xl",children:e("div",{className:"flex justify-center mb-2 text-lg",children:"Pelanggan Saya"})}),f.map((s,y)=>e("div",{className:"py-5",children:e("div",{className:"p-2 duration-150 bg-white rounded-lg shadow cursor-pointer",children:a("div",{children:[a("div",{className:"flex items-center justify-between px-4 my-6",children:[e("p",{className:"font-bold text-gray-500",children:"Nama Layanan"}),e("p",{className:"rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white",children:s.counterName})]}),a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Kode Bukti"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.code})]}),a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Tanggal Reservasi"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.date})]}),a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Jam Reservasi"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.time})]}),a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Team"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.name})]}),e("div",{className:"flex items-center px-4 my-4 justify-evenly",children:s.selesai_customer==1?a(l,{color:"teal",className:"cursor-not-allowed",children:["BERES"," ",e(k,{className:"w-5 h-5 ml-2"})]}):e(i,{children:s.selesai_team==1?e(l,{color:"yellow",className:"cursor-not-allowed",children:"Menunggu Konfirmasi Pelanggan"}):a(i,{children:[s.dikerjakan==1?e(l,{children:"Sedang dikerjakan ..."}):e(l,{onClick:()=>g(s),children:"Mulai"}),s.dikerjakan==1?e(l,{onClick:()=>h(s),color:"cyan",children:"Selesai"}):e(l,{color:"gray",className:"cursor-not-allowed",children:"Selesai"})]})})})]})})},y))]})})})]})}I.layout=n=>e(v,{children:n});export{I as default};