import{A as r}from"./ApplicationLogo.df3d4b68.js";import{a as l,F as n,j as e,H as d}from"./app.e12db1c5.js";import{N as t}from"./popover.5ecc46e3.js";import{A as o}from"./App.2e429fd8.js";import{n as c}from"./helper.e37a4314.js";import{x as m,k as h,l as u}from"./index.esm.b381e029.js";import{d as f,r as g}from"./relativeTime.1e9a6a23.js";import"./Tawarin.08057ae7.js";import"./clsx.m.256e9345.js";import"./transition.cb3dc600.js";import"./use-owner.71d88244.js";import"./DropdownMenu.27d16fb1.js";import"./use-event-listener.c1f7f4ad.js";import"./index_responsive.18683d70.js";import"./Aside.7c85a654.js";import"./Header.b7b3d721.js";import"./index.27dbca70.js";f.extend(g);function x({plan:i,balance:s,tahap:a,step:b}){return l(n,{children:[e(d,{title:"Tahapan Perencanaan"}),e("div",{className:"max-w-full mx-auto",children:e("div",{className:"p-8 mb-5 bg-white rounded-3xl",children:l("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-20",children:[l("div",{children:[e("h2",{className:"mb-4 text-2xl font-bold",children:"Saldo Bersama (Dilihat Owner)"}),e("div",{className:"flex flex-col w-full space-y-8",children:e("div",{className:"w-full h-56 p-6 text-white shadow-md bg-gradient-to-tl from-gray-900 to-gray-800 md:w-96 rounded-xl",children:l("div",{className:"flex flex-col justify-between h-full",children:[l("div",{className:"flex items-start justify-between space-x-4",children:[e("div",{className:"text-xl font-semibold tracking-tigh",children:i.name}),e("div",{className:"inline-flex flex-col items-center justify-center",children:e(r,{})})]}),e("div",{className:"inline-block w-12 h-8 overflow-hidden rounded-md shadow-inner bg-gradient-to-tl from-yellow-200 to-yellow-100",children:l("div",{className:"relative grid w-full h-full grid-cols-2 gap-1",children:[e("div",{className:"absolute w-4 h-6 border border-gray-900 rounded left-4 top-1"}),e("div",{className:"border-b border-r border-gray-900 rounded-br"}),e("div",{className:"border-b border-l border-gray-900 rounded-bl"}),e("div",{className:"border-t border-r border-gray-900 rounded-tr"}),e("div",{className:"border-t border-l border-gray-900 rounded-tl"})]})}),e("div",{className:"text-xs font-semibold tracking-tight",children:"Saldo"}),l("div",{className:"text-2xl font-semibold",children:["Rp ",c(s)]})]})})}),l("div",{className:"grid w-full grid-cols-1 mt-12 text-white gap-x-1 md:w-96",children:[e(t,{type:"button",className:"inline-flex items-center justify-center my-2 px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white",href:route("plan.deposit",i.slug),children:"Masukan Saldo 50%"}),e(t,{type:"button",className:"inline-flex items-center justify-center px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white",href:route("plan.lihathasil",i.slug),children:"Lihat Hasil"})]})]}),l("div",{className:"mt-12 md:mt-0",children:[e("h2",{className:"mb-4 text-2xl font-bold",children:"Tahapan"}),l("div",{className:"mt-8",children:[l("div",{className:"relative flex pb-12",children:[e("div",{className:"absolute inset-0 flex items-center justify-center w-10 h-full",children:e("div",{className:"w-1 h-full pointer-events-none bg-sky-500"})}),e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-sky-500",children:e(m,{className:"w-5 h-5"})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"Kontrak dan 50% Dana"}),e("p",{className:"leading-relaxed",children:"Silakan masukan saldo 50% dari nilai kontrak sebelum konsultan upload hasil perencanaannya. Dana ini tidak bisa ditarik oleh konsultan sebelum disetujui oleh owner."}),e(t,{type:"button",className:"inline-flex items-center justify-center my-2 px-5 text-sm font-semibold text-gray-300 transition bg-gray-900 rounded-xl h-9 hover:text-white",href:route("plan.deposit",i.slug),children:"Masukan Saldo 50%"})]})]}),l("div",{className:"relative flex pb-12",children:[e("div",{className:"absolute inset-0 flex items-center justify-center w-10 h-full",children:e("div",{className:"w-1 h-full pointer-events-none "+(a>1?"bg-sky-500":"bg-gray-500")})}),e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full "+(a>1?"bg-sky-500":"bg-gray-500"),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-clock-pause",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M13 20.94a8.916 8.916 0 0 1 -7.364 -2.576a9 9 0 1 1 15.306 -5.342"}),e("path",{d:"M12 7v5l2 2"}),e("path",{d:"M17 17v5"}),e("path",{d:"M21 17v5"})]})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"Menunggu Konfirmasi Admin"}),e("p",{className:"leading-relaxed",children:"Dana sudah di upload, menunggu konfirmasi admin Tawarin"})]})]}),l("div",{className:"relative flex pb-12",children:[e("div",{className:"absolute inset-0 flex items-center justify-center w-10 h-full",children:e("div",{className:"w-1 h-full pointer-events-none "+(a>2?"bg-sky-500":"bg-gray-500")})}),e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full "+(a>2?"bg-sky-500":"bg-gray-500"),children:e(h,{className:"w-5 h-5"})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"Menunggu konsultan upload hasil"}),e("p",{className:"leading-relaxed",children:"Dana sudah disetujui admin, menunggu konsultan upload hasil perencanaan"})]})]}),l("div",{className:"relative flex pb-12",children:[e("div",{className:"absolute inset-0 flex items-center justify-center w-10 h-full",children:e("div",{className:"w-1 h-full pointer-events-none "+(a>3?"bg-sky-500":"bg-gray-500")})}),e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full "+(a>3?"bg-sky-500":"bg-gray-500"),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-coins",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"}),e("path",{d:"M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"}),e("path",{d:"M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z"}),e("path",{d:"M3 6v10c0 .888 .772 1.45 2 2"}),e("path",{d:"M3 11c0 .888 .772 1.45 2 2"})]})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"Upload Sisa 50% Pembayaran"}),e("p",{className:"leading-relaxed",children:"Silakan upload sisa pembayaran sebelum bisa melihat hasil, dana ini tidak bisa ditarik oleh konsultan sebelum pekerjaan dari konsultan selesai"})]})]}),l("div",{className:"relative flex pb-12",children:[e("div",{className:"absolute inset-0 flex items-center justify-center w-10 h-full",children:e("div",{className:"w-1 h-full pointer-events-none "+(a>4?"bg-sky-500":"bg-gray-500")})}),e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full "+(a>4?"bg-sky-500":"bg-gray-500"),children:e(u,{className:"w-5 h-5"})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"Owner sudah bayar 100%"}),e("p",{className:"leading-relaxed",children:"Silakan upload sisa pembayaran sebelum bisa melihat hasil, dana ini tidak bisa ditarik oleh konsultan sebelum pekerjaan dari konsultan selesai"})]})]}),l("div",{className:"relative flex pb-12",children:[e("div",{className:"absolute inset-0 flex items-center justify-center w-10 h-full",children:e("div",{className:"w-1 h-full pointer-events-none "+(a>5?"bg-sky-500":"bg-gray-500")})}),e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full "+(a>5?"bg-sky-500":"bg-gray-500"),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-clock-edit",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M21 12a9.001 9.001 0 1 0 -9.972 8.948c.32 .034 .644 .052 .972 .052"}),e("path",{d:"M12 7v5l2 2"}),e("path",{d:"M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z"})]})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"Revisi"}),e("p",{className:"leading-relaxed",children:"Silakan upload sisa pembayaran sebelum bisa melihat hasil, dana ini tidak bisa ditarik oleh konsultan sebelum pekerjaan dari konsultan selesai"})]})]}),l("div",{className:"relative flex",children:[e("div",{className:"relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-500 rounded-full",children:l("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-5 h-5",viewBox:"0 0 24 24",children:[e("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),e("path",{d:"M22 4L12 14.01l-3-3"})]})}),l("div",{className:"flex-grow pl-4",children:[e("h2",{className:"mb-1 text-sm font-semibold tracking-wider text-gray-900 uppercase title-font",children:"FINISH"}),e("p",{className:"leading-relaxed",children:"Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro."})]})]})]})]})]})})})]})}x.layout=i=>e(o,{children:i});export{x as default};