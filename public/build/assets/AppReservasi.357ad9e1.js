import{u as x,r as f,a as n,F as a,j as e,L as h}from"./app.b2a6f44b.js";import{D as t}from"./DropdownMenu.291b2cde.js";import{D as r}from"./Dropdown.046e2d0f.js";import{_ as P,I as z}from"./index.2ca15937.js";import{L as m,N as s,M as B,X as R}from"./XIcon.c10ccf78.js";import{M as O,N as i,D as k,G as S,P as p,$ as H,w as D,i as I,a as W}from"./MenuLogo.36958665.js";import{I as T}from"./InfoModal.2aab9c78.js";import{L as y}from"./Tawarin.08057ae7.js";import{t as F}from"./transition.7b88a4bc.js";function A(){const{auth:c,categories_global:N,carts_global_count:u,notifications_count:d,permissions:g}=x().props,[L,l]=f.exports.useState(!1),b=()=>{l(!0)},[M,v]=f.exports.useState(!1),[_,C]=f.exports.useState([]),w=()=>{C(),v(!0)},o=g?g.map(j=>j.name):"null";return n(a,{children:[e(T,{isOpenInfoDialog:M,setIsOpenInfoDialog:v,size:"2xl",title:"Info",header:"",children:"Anda harus login terlebih dahulu untuk menggunakan fitur chat"}),n(m,{className:"relative bg-white",children:[e("div",{className:"px-4 mx-auto sm:px-6",children:n("div",{className:"flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10",children:[e("div",{className:"flex justify-start",children:n(s,{href:"/",children:[e("span",{className:"sr-only"}),e("img",{className:"w-8 h-8",src:y,"aria-label":"TawarinLogo",alt:"Logo"})]})}),c.user?e(a,{children:n(s,{className:"flex items-center md:hidden justify-items-end gap-x-2",href:"/notifications",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-bell-ringing",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),e("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}),e("path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}),e("path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"})]}),d>0?d:null]})}):e(a,{}),e("div",{className:"hidden -my-2 -mr-2 md:hidden lg:hidden",children:n(m.Button,{className:"inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[e("span",{className:"sr-only",children:"Open menu"}),e(B,{className:"w-6 h-6","aria-hidden":"true"})]})}),n(m.Group,{as:"nav",className:"hidden space-x-10 md:flex",children:[c.user&&e(s,{href:"/wallets",children:"Saldo"}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"relative ml-3",children:n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Reservasi",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("reservation.list"),children:"Reservasi"}),e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("reservationprofile.edit"),children:"Setting Company"}),e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("reservationCounters.index"),children:"Setting Layanan"}),e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("permissions.index"),children:"Setting Jadwal"})]})]})})}),o.indexOf("atur hak akses")>-1&&e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"relative ml-3",children:n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Permission",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("users.index"),children:"Users"}),e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("roles.index"),children:"Roles"}),e(h,{className:"items-center block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 gap-x-2",href:route("permissions.index"),children:"Permissions"})]})]})})}),e(s,{href:route("user.list"),children:"Pengguna"}),n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Perencanaan",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(r.Link,{href:route("plan.list"),children:"Cari Perencanaan"}),o.indexOf("melakukan penawaran perencanaan")>-1&&e(r.Link,{href:"/planbids",children:"Penawaran Saya"}),o.indexOf("lihat menu perencanaan")>-1&&n(a,{children:[e(r.Link,{href:"/plans",children:"Perencanaan Saya"}),e(r.Link,{href:"/plans/create",children:"Buat Perencanaan"}),e(r.Link,{href:route("planportofolios.index"),children:"Portofolio"})]})]})]}),n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Proyek",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(r.Link,{href:route("project.list"),children:"Cari Proyek"}),o.indexOf("melakukan penawaran proyek")>-1&&e(r.Link,{href:"/planbids",children:"Penawaran Saya"}),o.indexOf("lihat menu proyek")>-1&&n(a,{children:[e(r.Link,{href:"/projects",children:"Proyek Saya"}),e(r.Link,{href:"/projects/create",children:"Buat Proyek"}),e(r.Link,{href:route("planportofolios.index"),children:"Portofolio"})]})]})]}),o.indexOf("lihat menu pendanaan")>-1&&n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-yellow-500 focus:outline-none",children:["Pendanaan",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(r.Link,{href:"/fundings",children:"Pendanaan Saya"}),e(r.Link,{href:route("funding.list"),children:"Cari Pendanaan"}),e(r.Link,{href:"/fundings/create",children:"Buat Pendanaan"})]})]}),o.indexOf("lihat menu admin saldo")>-1&&n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none",children:["Admin",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(r.Link,{href:"/admindeposits",children:"Deposit"}),e(r.Link,{href:"/adminwithdraws",children:"Withdraw"})]})]}),o.indexOf("lihat menu admin general")>-1&&n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none",children:["Admin Perencanaan",e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e(r.Content,{children:e(r.Link,{href:"/adminplans",children:"Atur Perencanaan"})})]}),c.user?n(a,{children:[n(r,{children:[e(r.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:n("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:bg-gray-800 hover:text-yellow-500 dark:hover:text-gray-300 focus:outline-none",children:[c.user.name,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),n(r.Content,{children:[e(r.Link,{href:route("dashboard"),children:"Dashboard"}),e(r.Link,{href:route("profile.edit"),children:"Edit Profile"}),e(r.Link,{href:route("users.profiles"),children:"Porfolios"}),e(r.Link,{href:route("portofolios.index"),children:"Input Porfolios"}),e(r.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]}),n(s,{className:"flex items-center justify-items-end gap-x-2",href:"/toko/carts",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),u>0?u:null]}),n(s,{className:"flex items-center justify-items-end gap-x-2",href:"/notifications",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-bell-ringing",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"}),e("path",{d:"M9 17v1a3 3 0 0 0 6 0v-1"}),e("path",{d:"M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"}),e("path",{d:"M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"})]}),d>0?d:null]})]}):n(a,{children:[e(s,{href:"/login",children:"Masuk"}),e(s,{href:"/register",children:"Register"})]})]})]})}),e(F,{as:f.exports.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e(m.Panel,{focus:!0,className:"absolute inset-x-0 top-0 p-2 transition origin-top-right transform z-60 md:hidden",children:n("div",{className:"bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50",children:[e("div",{className:"px-5 pt-5 pb-6",children:n("div",{className:"flex items-center justify-between",children:[e(s,{href:"/",children:e("img",{className:"w-8 h-8 sm:h-10",src:y,"aria-label":"TawarinLogo",alt:"Logo"})}),e("div",{className:"-mr-2",children:n(m.Button,{className:"inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[e("span",{className:"sr-only",children:"Close menu"}),e(R,{className:"w-6 h-6","aria-hidden":"true"})]})})]})}),e("div",{className:"px-5 py-6 space-y-6",children:n("div",{className:"grid grid-cols-2 gap-y-4 gap-x-8",children:[n(t,{label:"Funding",children:[e(t.Link,{href:"/fundings",children:"Index"}),e(t.Link,{href:"/public/fundings/list",children:"List"}),e(t.Link,{href:"/fundings/create",children:"Form"})]}),n(t,{label:"Plan",children:[e(t.Link,{href:"/plans",children:"Index"}),e(t.Link,{href:"/public/plans/list",children:"List"}),e(t.Link,{href:"/plans/create",children:"Form"})]}),e(s,{href:"/toko/products",children:"Products"}),n(t,{label:"Example",children:[e(t.Link,{href:"/example/homefunding",children:"Landing Page Funding"}),e(t.Link,{href:"/example/form",children:"Form"}),e(t.Link,{href:"/example/funding",children:"Funding"}),e(t.Link,{href:"/example/descriptionlist",children:"Decription List"}),e(t.Link,{href:"/filepond",children:"Filepond"}),e(t.Link,{href:"/dropzone",children:"Dropzone"})]}),c.user?n(a,{children:[n(t,{label:c.user.name,children:[e(t.Link,{href:"/dashboard",children:"Dashboard"}),e(t.Link,{href:"/profile",children:"Profile"}),e(t.Link,{href:"/toko/carts",children:"Your Cart"}),e(t.Link,{href:"/toko/products/me",children:"Your Products"}),e(t.Link,{href:"/toko/history",children:"Your History"}),e(t.Link,{href:"/users",children:"Users"}),e(t.Link,{href:"/toko/products/table",children:"Table Products"}),e(t.Link,{href:"/logout",method:"post",as:"button",children:"Logout"})]}),n(s,{className:"flex items-center gap-x-2",href:"/toko/carts",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"})}),u>0?u:null]})]}):n(a,{children:[e(s,{href:"/login",children:"Login"}),e(s,{href:"/register",children:"Register"})]})]})})]})})})]}),n("section",{id:"bottom-navigation",className:"fixed inset-x-0 bottom-0 z-50 block bg-white shadow md:hidden",children:[e(O,{isOpenMenuModal:L,setIsOpenMenuModal:l,children:n("div",{className:"grid items-center justify-between grid-cols-3 gap-x-12 gap-y-4",children:[o.indexOf("lihat menu owner reservasi")>-1&&n(a,{children:[n(i,{onClick:()=>l(!1),href:route("reservationprofile.edit"),children:[e(k,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Atur Perusahaan"})]}),n(i,{onClick:()=>l(!1),href:route("reservationCounters.index"),children:[e(S,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Atur Layanan"})]}),n(i,{onClick:()=>l(!1),href:route("reservation.mycompanycustomers"),children:[e(k,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Pelanggan Perusahaan"})]})]}),o.indexOf("lihat menu pekerja reservasi")>-1&&n(a,{children:[n(i,{onClick:()=>l(!1),href:route("reservation.myteaminvitations"),children:[e(p,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Undangan Saya"})]}),n(i,{onClick:()=>l(!1),href:route("reservation.mycustomers"),children:[e(p,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Pelanggan Saya"})]}),n(i,{onClick:()=>l(!1),href:route("reservation.mycounters"),children:[e(p,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Counter Saya"})]})]}),n(i,{onClick:()=>l(!1),href:route("reservation.myreservations"),children:[e(p,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Reservasi Saya"})]}),n(i,{onClick:()=>l(!1),href:route("reservation.list"),children:[e(p,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Cari Reservasi"})]}),o.indexOf("lihat menu admin saldo")>-1&&n(i,{onClick:()=>l(!1),href:"/projects/choose",children:[e(H,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Admin Saldo"})]}),o.indexOf("lihat menu admin general")>-1&&n(i,{onClick:()=>l(!1),href:"/adminplans",children:[e(D,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Atur Perencanaan"})]}),o.indexOf("atur hak akses")>-1&&n(i,{onClick:()=>l(!1),href:route("users.index"),children:[e(I,{className:"w-full h-full px-2 py-2 text-white bg-blue-200 rounded-full shadow cursor-pointer"}),e("p",{className:"flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-blue-900 break-words border border-transparent rounded-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-21",children:"Admin User"})]})]})}),n("div",{id:"tabs",className:"flex justify-between",children:[c.user?n(i,{href:"/dashboard",className:"w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-home-move",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}),e("path",{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}),e("path",{d:"M16 19h6"}),e("path",{d:"M19 16l3 3l-3 3"})]}),e("span",{className:"block text-xs tab tab-home",children:"Home"})]}):n(i,{href:"/",className:"w-full focus:text-black hover:text-black justify-center inline-block text-center pt-2 pb-1",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-home-move",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}),e("path",{d:"M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5"}),e("path",{d:"M16 19h6"}),e("path",{d:"M19 16l3 3l-3 3"})]}),e("span",{className:"block text-xs tab tab-home",children:"Home"})]}),c.user?n(i,{href:route("chats.index"),className:"justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-message",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M8 9h8"}),e("path",{d:"M8 13h6"}),e("path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"})]}),e("span",{className:"block text-xs tab tab-kategori",children:"Chat"})]}):n("button",{onClick:()=>w(),className:"justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black",children:[n("svg",{onClick:()=>w(),xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-message",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M8 9h8"}),e("path",{d:"M8 13h6"}),e("path",{d:"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"})]}),e("span",{className:"block text-xs tab tab-kategori",children:"Chat"})]}),n("button",{onClick:b,className:"justify-center inline-block w-full pt-2 pb-1 text-center cursor-pointer focus:text-black hover:text-black",children:[e(W,{}),e("span",{onClick:b,className:"block text-xs",children:"Explore"})]}),c.user?n(a,{children:[n(i,{href:"/wallets",className:"justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-wallet",width:25,height:25,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"}),e("path",{d:"M20 12v4h-4a2 2 0 0 1 0 -4h4"})]}),e("span",{className:"block text-xs tab tab-wallet",children:"Wallet"})]}),n(i,{href:"/profile",className:"justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-user-circle",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:12,cy:12,r:9}),e("circle",{cx:12,cy:10,r:3}),e("path",{d:"M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"})]}),e("span",{className:"block text-xs tab tab-profile",children:"Profile"})]})]}):n(a,{children:[n(i,{href:"/login",className:"justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-login",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"}),e("path",{d:"M20 12h-13l3 -3m0 6l-3 -3"})]}),e("span",{className:"block text-xs tab tab-login",children:"Masuk"})]}),n(i,{href:"/register",className:"justify-center inline-block w-full pt-2 pb-1 text-center focus:text-black hover:text-black",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline-block mb-1 icon icon-tabler icon-tabler-user-plus",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:9,cy:7,r:4}),e("path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"}),e("path",{d:"M16 11h6m-3 -3v6"})]}),e("span",{className:"block text-xs tab tab-register",children:"Daftar"})]})]})]})]})]})}function K({auth:c,header:N,children:u}){f.exports.useState(!1);const{flash:d}=x().props;return x().props,x().props,f.exports.useEffect(()=>{d.type&&P[d.type](d.message)}),n("div",{className:"min-h-screen",children:[e(A,{}),e(z,{position:"top-center",reverseOrder:!1,toastOptions:{duration:5e3}}),e("main",{className:"pb-20 md:pb-0",children:u})]})}export{K as A};