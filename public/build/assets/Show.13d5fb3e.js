import{b as R,u as V,r as l,a as t,j as e,H as J,L as F,F as o}from"./app.9a613729.js";import{A as K}from"./App.16964d1b.js";import{n as g}from"./helper.e37a4314.js";import{B as f}from"./Button.56798297.js";import{C as U}from"./Container.8f1e0fca.js";import"./index_responsive.4076ec44.js";import"./TextInput.f0be9520.js";import q from"./Filepond.5a8debd3.js";import{d as E}from"./index.esm.96192532.js";import{M as Q}from"./MapShow.cf35197e.js";import{t as m}from"./transition.d295e632.js";import{S as h}from"./dialog.1257160e.js";import"./DropdownMenu.a40fd6b8.js";import"./clsx.m.256e9345.js";import"./use-event-listener.a77a602b.js";import"./Aside.63b1f812.js";import"./Tawarin.08057ae7.js";import"./filepond-plugin-image-preview.esm.7fc3c7d5.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./esm.421d5cb8.js";import"./description.8d0ac48b.js";function X({plan:i,media:n,denahlokasiukuran:L,kondisisaatini:M,plan_master_checkboxs:Y,plan_master_texts:Z,planRooms:y,plan_details:$,planWithSum:b,persentase:P}){const{data:p,setData:w,post:v,patch:B,processing:T,reset:k,errors:x}=R({}),{permissions:N}=V().props,_=N?N.map(r=>r.name):"null",[j,z]=l.exports.useState(""),S=r=>{z(r.target.value),w({...p,[r.target.id]:r.target.value,plan_id:i.id})},H=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(j*(100+P)/100),W=r=>{r.preventDefault(),B(route("planadmin.confirmed",i.id))},D=r=>{r.preventDefault(),v(route("planadmin.rejected",i.id),{data:p,onSuccess:()=>{k()}})},C=r=>{w({...p,[r.target.id]:r.target.value})},O=r=>{r.preventDefault(),v(route("planbids.store"),{data:p,onSuccess:()=>{k()}})},[c,u]=l.exports.useState(!1),[a,I]=l.exports.useState(null),d=r=>{I(r),u(!0)},A=parseFloat(i.lat),G=parseFloat(i.lng);return t("div",{children:[e(J,{title:"Plans"}),e(U,{children:e("div",{className:"bg-white",children:t("div",{className:"grid items-start grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8",children:[t("div",{children:[b.plan_bids_sum_is_approved==1&&t(F,{className:"inline-flex px-2 py-1 text-xl font-semibold text-white bg-teal-500 rounded",children:["Sudah Ada Pemenang",e(E,{className:"inline-flex mt-1 ml-2"})]}),e("h2",{className:"mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:i.name}),e(F,{className:"inline-flex px-2 py-1 text-xs font-semibold text-white rounded bg-sky-500",href:`/public/plans/list?plan_category=${i.plan_category.slug}`,children:i.plan_category.name}),e("p",{className:"mt-4 text-gray-500",children:i.description}),t("dl",{className:"grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8",children:[t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jangka Waktu Penawaran"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:[g(i.jangka_waktu_penawaran)," ","Hari"]})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jangka Waktu Pelaksanaan"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:[g(i.jangka_waktu_pelaksanaan)," ","Hari"]})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jumlah Revisi"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:[g(i.jumlah_revisi)," Kali"]})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Luas Bangunan"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:[g(i.luas_bangunan)," M",e("sup",{children:"2"})]})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Anggaran Proyek"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:["Rp ",g(i.anggaran_proyek)]})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Anggaran Perencanaan (Dari)"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:["Rp ",g(i.dari_anggaran)]})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Anggaran Perencanaan (Sampai)"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:["Rp ",g(i.sampai_anggaran)]})]}),y?y.map((r,s)=>t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:r.name?r.name:r.othername}),e("dd",{className:"mt-2 text-sm text-gray-500",children:r.count})]},s)):""]}),e("div",{className:"mt-5 md:mt-15 md:col-span-2",children:t("div",{className:"py-5 space-y-6 bg-white",children:[t("div",{className:"mb-6 bg-white rounded-lg shadow",children:[t("div",{className:"px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7",children:[e("dt",{className:"font-medium text-gray-900 py-4",children:"Gambar"}),t("div",{className:"grid grid-cols-6 col-span-2 gap-2 ",children:[L.map((r,s)=>s<2&&e(o,{children:r.mime_type=="video/mp4"?e(o,{}):e("div",{className:"shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem] cursor-pointer",children:e("img",{onClick:()=>d(r),className:"object-cover w-full h-full ",src:`/storage/${r.id}/${r.file_name}`,alt:s})},s)})),c&&a&&e(m,{appear:!0,show:c,as:l.exports.Fragment,children:t(h,{as:"div",className:"relative z-10",open:c,onClose:()=>u(!1),children:[e(m.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:e(m.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e(h.Panel,{className:"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-full",children:e("div",{className:"bg-white",children:e("div",{className:"sm:flex sm:items-start",children:t("div",{className:"text-center sm:mt-0 sm:text-left",children:[e(h.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900"}),t("div",{className:"mx-2 my-2 md:mx-4 md:my-4",children:[e("p",{className:"text-sm text-gray-500"}),a.mime_type=="video/mp4"?e("div",{className:"w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl",children:e("div",{className:"",children:e("video",{controls:!0,src:`/storage/${a.id}/${a.file_name}`})})}):t(o,{children:[e("img",{className:"rounded-lg",src:`/storage/${a.id}/${a.file_name}`,alt:a.collection_name}),e("p",{className:"text-sm text-gray-500",children:a.collection_name})]}),e("button",{onClick:()=>u(!1),type:"button",className:"absolute z-30 flex items-center justify-between cursor-pointer bottom-4 right-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-pink-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-pink-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 icon icon-tabler icon-tabler-x",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M18 6l-12 12"}),e("path",{d:"M6 6l12 12"})]})})}),e("button",{onClick:()=>d(n[(n.indexOf(a)-1)%n.length]),type:"button",className:"absolute left-0 z-30 flex items-center justify-between px-4 cursor-pointer top-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})})}),e("button",{onClick:()=>d(n[(n.indexOf(a)+1)%n.length]),type:"button",className:"absolute right-0 z-30 flex items-center justify-center px-4 cursor-pointer top-1/2 group focus:outline-none",children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})})]})]})})})})})})})]})})]})]}),e("div",{className:"px-2 mx-3 mb-6 pb-4 text-sm text-gray-500",children:"Denah Lokasi Beserta Ukuran Lahan"})]}),t("div",{className:"mb-6 bg-white rounded-lg shadow",children:[t("div",{className:"px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7",children:[e("dt",{className:"font-medium text-gray-900 py-4",children:"Gambar"}),t("div",{className:"grid grid-cols-6 col-span-2 gap-2 ",children:[M.map((r,s)=>s<2&&e(o,{children:r.mime_type=="video/mp4"?e(o,{}):e("div",{className:"shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem] cursor-pointer",children:e("img",{onClick:()=>d(r),className:"object-cover w-full h-full ",src:`/storage/${r.id}/${r.file_name}`,alt:s})},s)})),c&&a&&e(m,{appear:!0,show:c,as:l.exports.Fragment,children:t(h,{as:"div",className:"relative z-10",open:c,onClose:()=>u(!1),children:[e(m.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:e(m.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e(h.Panel,{className:"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-full",children:e("div",{className:"bg-white",children:e("div",{className:"sm:flex sm:items-start",children:t("div",{className:"text-center sm:mt-0 sm:text-left",children:[e(h.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900"}),t("div",{className:"mx-2 my-2 md:mx-4 md:my-4",children:[e("p",{className:"text-sm text-gray-500"}),a.mime_type=="video/mp4"?e("div",{className:"w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl",children:e("div",{className:"",children:e("video",{controls:!0,src:`/storage/${a.id}/${a.file_name}`})})}):t(o,{children:[e("img",{className:"rounded-lg",src:`/storage/${a.id}/${a.file_name}`,alt:a.collection_name}),e("p",{className:"text-sm text-gray-500",children:a.collection_name})]}),e("button",{onClick:()=>u(!1),type:"button",className:"absolute z-30 flex items-center justify-between cursor-pointer bottom-4 right-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-pink-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-pink-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 icon icon-tabler icon-tabler-x",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M18 6l-12 12"}),e("path",{d:"M6 6l12 12"})]})})}),e("button",{onClick:()=>d(n[(n.indexOf(a)-1)%n.length]),type:"button",className:"absolute left-0 z-30 flex items-center justify-between px-4 cursor-pointer top-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})})}),e("button",{onClick:()=>d(n[(n.indexOf(a)+1)%n.length]),type:"button",className:"absolute right-0 z-30 flex items-center justify-center px-4 cursor-pointer top-1/2 group focus:outline-none",children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})})]})]})})})})})})})]})})]})]}),e("div",{className:"px-2 mx-3 mb-6 pb-4 text-sm text-gray-500",children:"Foto Kondisi Lahan Saat Ini"})]}),e("div",{className:"my-6 bg-white rounded-lg shadow",children:e("div",{className:"px-6 pb-6 bg-white",children:t("div",{children:[e("label",{className:"block py-2 text-sm font-medium text-gray-700",children:"Lokasi Proyek"}),t("div",{className:"w-full text-center",children:[e(Q,{lat:A,lng:G}),e("div",{className:"flex justify-center text-sm text-gray-600"})]})]})})}),$.map((r,s)=>r.description?t("div",{children:[e("label",{htmlFor:r.slug,className:"block text-sm font-medium text-gray-700",children:r.plan_master_name}),e("div",{className:"mt-1",children:e("textarea",{id:r.slug,name:r.slug,disabled:!0,rows:3,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",placeholder:"",defaultValue:r.description},s)})]},s):t("div",{className:"flex items-center justify-between px-3 py-4 rounded-md shadow",children:[r.plan_master_name,t("label",{htmlFor:r.slug,className:"relative inline-flex items-center cursor-pointer",children:[e("input",{type:"checkbox",checked:!0,disabled:!0,id:r.slug,name:r.slug,className:"sr-only peer"},s),e("div",{className:"w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-sky-600  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-500 peer-after:ring-sky-500"})]})]},s))]})})]}),t("div",{className:"grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8",children:[e("h2",{className:"mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Contoh Desain"}),t("div",{className:"mb-6 bg-white rounded-lg shadow",children:[t("div",{className:"px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7",children:["Video",e("div",{className:"grid grid-cols-6",children:e("div",{className:"col-span-6 col-start-1 mx-auto md:col-span-2 md:col-start-3",children:n.map((r,s)=>s>=0&&e(o,{children:r.mime_type=="video/mp4"?e("div",{className:"w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl cursor-pointer",children:e("div",{className:"",children:e("video",{controls:!0,src:`/storage/${r.id}/${r.file_name}`})})},s):""}))})})]}),e("div",{className:"px-2 mx-3 mb-6 text-sm text-gray-500",children:"Ini adalah contoh Video rumah yang disukai oleh owner, silakan buat desain sesuai dengan contoh video yang sudah disertakan"})]}),t("div",{className:"mb-6 bg-white rounded-lg shadow",children:[t("div",{className:"px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7",children:["Gambar",t("div",{className:"grid grid-cols-6 col-span-2 gap-2",children:[n.map((r,s)=>s<2&&e(o,{children:r.mime_type=="video/mp4"?e(o,{}):e("div",{className:"shadow overflow-hidden rounded-xl col-span-3 max-h-[14rem] cursor-pointer",children:e("img",{onClick:()=>d(r),className:"object-cover w-full h-full ",src:`/storage/${r.id}/${r.file_name}`,alt:s})},s)})),n.map((r,s)=>s>1&&s<6&&e(o,{children:r.mime_type=="video/mp4"?e(o,{}):e("div",{className:"max-h-[10rem] col-span-2 overflow-hidden shadow rounded-xl cursor-pointer",children:e("img",{onClick:()=>d(r),className:"object-cover w-full h-full ",src:`/storage/${r.id}/${r.file_name}`,alt:s})},s)})),c&&a&&e(m,{appear:!0,show:c,as:l.exports.Fragment,children:t(h,{as:"div",className:"relative z-10",open:c,onClose:()=>u(!1),children:[e(m.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:e(m.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e(h.Panel,{className:"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-full",children:e("div",{className:"bg-white",children:e("div",{className:"sm:flex sm:items-start",children:t("div",{className:"text-center sm:mt-0 sm:text-left",children:[e(h.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900"}),t("div",{className:"mx-2 my-2 md:mx-4 md:my-4",children:[e("p",{className:"text-sm text-gray-500"}),a.mime_type=="video/mp4"?e("div",{className:"w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl",children:e("div",{className:"",children:e("video",{controls:!0,src:`/storage/${a.id}/${a.file_name}`})})}):t(o,{children:[e("img",{className:"rounded-lg",src:`/storage/${a.id}/${a.file_name}`,alt:a.collection_name}),e("p",{className:"text-sm text-gray-500",children:a.collection_name})]}),e("button",{onClick:()=>u(!1),type:"button",className:"absolute z-30 flex items-center justify-between cursor-pointer bottom-4 right-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-pink-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-pink-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 icon icon-tabler icon-tabler-x",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M18 6l-12 12"}),e("path",{d:"M6 6l12 12"})]})})}),e("button",{onClick:()=>d(n[(n.indexOf(a)-1)%n.length]),type:"button",className:"absolute left-0 z-30 flex items-center justify-between px-4 cursor-pointer top-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})})}),e("button",{onClick:()=>d(n[(n.indexOf(a)+1)%n.length]),type:"button",className:"absolute right-0 z-30 flex items-center justify-center px-4 cursor-pointer top-1/2 group focus:outline-none",children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 dark:bg-gray-800/30 group-hover:bg-blue-300 dark:group-hover:bg-gray-800/60 ring-4 ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})})]})]})})})})})})})]})})]})]}),e("div",{className:"px-2 mx-3 mb-6 text-sm text-gray-500",children:"Ini adalah contoh gambar rumah yang disukai oleh owner, silakan buat desain sesuai dengan contoh gambar yang sudah disertakan"})]}),_.indexOf("melakukan penawaran perencanaan")>-1&&b.plan_bids_sum_is_approved!=1?e("form",{onSubmit:O,children:t("div",{className:"mb-6 bg-white rounded-lg shadow",children:[e("div",{className:"px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7",children:t("div",{className:"grid grid-cols-1 col-span-2 gap-2 ",children:[e("h2",{className:"mt-4 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl",children:"Masukan Penawaran"}),t("div",{className:"px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:12,cy:12,r:9}),e("line",{x1:12,y1:8,x2:"12.01",y2:8}),e("polyline",{points:"11 12 12 12 12 16 13 16"})]}),"Secara Otomatis Sistem akan up 5% dari Nilai Penawaran yang dimasukan, penawaran yang dilihat oleh Pemilik Proyek adalah penawaran yang sudah di up 5%, nilai 5% tersebut akan menjadi fee untuk Tawarin."]}),t("div",{children:[e("label",{htmlFor:"bid_price_user",className:"block text-sm font-medium text-gray-700",children:"Penawaran"}),e("input",{type:"number",name:"bid_price_user",id:"bid_price_user",onChange:S,onWheel:r=>r.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"}),x.bid_price_user&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:x.bid_price_user}),t("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-sky-500",children:[j&&H," ",e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-sky-500"})]})]}),t("div",{className:"mt-4",children:[e("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Deskripsikan Penawaranmu"}),e("div",{className:"mt-1",children:e("textarea",{id:"description",name:"description",rows:3,onChange:C,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",placeholder:"",defaultValue:""})}),e("p",{className:"mt-2 text-sm text-gray-500",children:"Masukan deskripsi penawaranmu untuk menarik minat owner."})]})]})}),e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:t("div",{children:[e("label",{className:"block text-sm font-medium text-gray-700",children:"Desain awal"}),e("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:t("div",{className:"w-full text-center",children:[e("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),e(q,{inputname:"document",allowMultiple:!0,maxFiles:"5",required:!0}),t("div",{className:"flex justify-center text-sm text-gray-600",children:[e("label",{htmlFor:"file-upload",className:"relative font-medium bg-white rounded-md text-sky-600 hover:text-sky-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500",children:e("span",{children:"Upload a file"})}),e("p",{className:"pl-1",children:"or drag and drop"})]}),e("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})}),e("div",{className:"px-4 py-3 text-right bg-gray-50 sm:px-6",children:e(f,{processing:T,children:"Simpan"})})]})}):"",_.indexOf("approve perencanaan")>-1?e("div",{className:"grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8",children:t("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:t("div",{className:"grid grid-cols-1 col-span-2 gap-2 ",children:[e("h2",{className:"mt-4 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-xl",children:"Konfirmasi"}),t("div",{className:"px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:12,cy:12,r:9}),e("line",{x1:12,y1:8,x2:"12.01",y2:8}),e("polyline",{points:"11 12 12 12 12 16 13 16"})]}),"Silakan Pilih, apakah perencanaan ini akan diterima dan ditampilkan atau ditolak serta berikan alasan bila ditolak."]}),t("div",{className:"mt-4",children:[e("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Alasan ditolak"}),t("div",{className:"mt-1",children:[e("textarea",{id:"description",name:"description",rows:3,onChange:C,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm",placeholder:"",defaultValue:""}),x&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:x.description})]}),e("p",{className:"mt-2 text-sm text-gray-500",children:"Masukan alasan jika perencanaan ditolak."})]})]})}),t("div",{className:"flex justify-end bg-gray-50",children:[e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(f,{onClick:D,color:"pink",children:"Tolak"})}),e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(f,{onClick:W,children:"Terima"})})]})]})}):""]})]})})})]})}X.layout=i=>e(K,{children:i});export{X as default};