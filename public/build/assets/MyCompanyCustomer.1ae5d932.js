import{r,b as y,a as s,F as i,j as e,H as h}from"./app.e12db1c5.js";import"./index_responsive.18683d70.js";import{A as N}from"./AppReservasi.d303863f.js";import"./CopyButton.d4fb5f9f.js";import{I as d}from"./InfoModal.b407b07c.js";import{T as l}from"./ThirdButtonNoLink.43413760.js";import{d as b}from"./index.esm.b381e029.js";import"./transition.cb3dc600.js";import"./DropdownMenu.27d16fb1.js";import"./clsx.m.256e9345.js";import"./use-owner.71d88244.js";import"./index.27dbca70.js";import"./Header.b7b3d721.js";import"./popover.5ecc46e3.js";import"./use-event-listener.c1f7f4ad.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.13c86b47.js";import"./ExclamationIcon.f642dc9a.js";import"./dialog.053e0bcb.js";import"./description.7709e1c5.js";function k({auth:n,mustVerifyEmail:v,status:I,myCustomers:m}){const[w,c]=r.exports.useState([]),[p,t]=r.exports.useState(!1),[f,o]=r.exports.useState(!1);y({});const x=a=>{c(a),t(!0)},g=a=>{c(a),o(!0)};return s(i,{children:[e(d,{isOpenInfoDialog:p,setIsOpenInfoDialog:t,size:"2xl",closeButton:"false",title:"Yakin Mulai Pelayanan ?",children:e(l,{className:"mx-2 mt-2",color:"gray",onClick:()=>{t(!1)},children:"Close"})}),e(d,{isOpenInfoDialog:f,setIsOpenInfoDialog:o,size:"2xl",closeButton:"false",title:"Yakin Selesaikan Pelayanan ?",children:e(l,{className:"mx-2 mt-2",color:"gray",onClick:()=>{o(!1)},children:"Close"})}),e(h,{title:"Profile"}),e("div",{className:"py-12",children:e("div",{className:"mx-auto space-y-6 sm:px-6 lg:px-8",children:s("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:[e("div",{className:"p-8 border border-gray-200 rounded-2xl",children:e("div",{className:"flex justify-center mb-2 text-lg",children:"History Transaksi"})}),m.map((a,u)=>e("div",{className:"py-5",children:e("div",{className:"p-2 duration-150 bg-white rounded-lg shadow cursor-pointer",children:s("div",{children:[s("div",{className:"flex items-center justify-between px-4 my-6",children:[e("p",{className:"font-bold text-gray-500",children:"Nama Layanan"}),e("p",{className:"rounded-full bg-amber-500 px-2 py-0.5 text-xs font-semibold text-white",children:a.counterName})]}),s("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Kode Bukti"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:a.code})]}),s("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Tanggal Reservasi"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:a.date})]}),s("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Jam Reservasi"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:a.time})]}),s("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Team"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:a.name})]}),e("div",{className:"flex items-center px-4 my-4 justify-evenly",children:a.selesai_customer==1?s(l,{color:"teal",className:"cursor-not-allowed",children:["BERES"," ",e(b,{className:"w-5 h-5 ml-2"})]}):e(i,{children:a.selesai_team==1?e(l,{color:"yellow",className:"cursor-not-allowed",children:"Menunggu Konfirmasi Pelanggan"}):s(i,{children:[a.dikerjakan==1?e(l,{children:"Sedang dikerjakan ..."}):e(l,{onClick:()=>x(a),children:"Mulai"}),a.dikerjakan==1?e(l,{onClick:()=>g(a),color:"cyan",children:"Selesai"}):e(l,{color:"gray",className:"cursor-not-allowed",children:"Selesai"})]})})})]})})},u))]})})})]})}k.layout=n=>e(N,{children:n});export{k as default};