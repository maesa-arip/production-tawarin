import{r as n,b as U,a as t,j as e,H as E,F as p}from"./app.b2a6f44b.js";import{A as J}from"./AppReservasi.357ad9e1.js";import{C as q}from"./Container.6d863bba.js";import"./DatePicker.5ec0a518.js";import{T as Q}from"./helper.e37a4314.js";import{B as V}from"./Button.77a9bc0e.js";import X from"./Filepond.1b3ff89f.js";import"./index.esm.ccf1a2f5.js";import"./Map.01d5dfd5.js";import{T as Y}from"./Tooltip.0449e01c.js";import{B as y}from"./BaseModal.fc916363.js";import{T as m}from"./ThirdButtonNoLink.7d6fed9c.js";import"./DropdownMenu.291b2cde.js";import"./clsx.m.256e9345.js";import"./transition.7b88a4bc.js";import"./use-owner.c395fb84.js";import"./Dropdown.046e2d0f.js";import"./index.2ca15937.js";import"./XIcon.c10ccf78.js";import"./use-event-listener.659ecc81.js";import"./MenuLogo.36958665.js";import"./InfoModal.2aab9c78.js";import"./Tawarin.08057ae7.js";import"./App.2713ff24.js";import"./filepond-plugin-image-preview.esm.967dd9e7.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./esm.d616643a.js";function Z({onOff:u}){var h,f,x,g,b,w,v;const[c,N]=n.exports.useState(""),[k,D]=n.exports.useState(""),[_,C]=n.exports.useState(!1),[S,j]=n.exports.useState(!1),F=r=>{N(r.target.value),D(Math.ceil(r.target.value*(100+5)/100)),s({...i,[r.target.id]:r.target.value})},L=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(Math.ceil(c*(100+5)/100)),{data:i,setData:s,post:P,processing:I,reset:H,errors:a}=U({}),l=r=>{s({...i,[r.target.name]:r.target.type==="checkbox"||r.target.type==="radio"?r.target.checked:r.target.value})};n.exports.useState(),n.exports.useState(),n.exports.useState(),n.exports.useState();const B=r=>{r.preventDefault(),P(route("reservationCounters.store"),{data:i,onSuccess:()=>{H()}})},[M,o]=n.exports.useState(!1),[O,d]=n.exports.useState(!1);n.exports.useState([]);const T=()=>{o(!0)},z=()=>{o(!1),C(!0),s({...i,percent_owner:100,percent_employe:0})},W=()=>{o(!1)};n.exports.useEffect(()=>{T()},[]);const[G,$]=n.exports.useState(0);n.exports.useEffect(()=>{s({...i,percent_employe:100-(parseInt(i.percent_owner)||100)})},[G,i.percent_owner]);const K=()=>{d(!0)},A=()=>{d(!1),j(!0),s({...i,jumlahlayanandiskon:0})},R=()=>{d(!1)};return n.exports.useEffect(()=>{K()},[]),t("div",{children:[e(E,{title:"Plan Create"}),t(y,{isOpenInfoDialog:M,setIsOpenInfoDialog:o,size:"max-w-2xl",title:"Pilih",closeButton:"false",children:[e("p",{children:"Apakah anda akan memberikan komisi kepada pegawai untuk layanan ini ?"}),e(m,{type:"button",color:"red",onClick:z,children:"Tidak"}),e(m,{className:"mx-2 mt-2",type:"button",onClick:W,children:"Iya"})]}),t(y,{isOpenInfoDialog:O,setIsOpenInfoDialog:d,size:"max-w-2xl",title:"Pilih",closeButton:"false",children:[e("p",{children:"Apakah anda akan memberikan diskon kepada pelanggan untuk layanan ini ?"}),e(m,{type:"button",color:"red",onClick:A,children:"Tidak"}),e(m,{className:"mx-2 mt-2",type:"button",onClick:R,children:"Iya"})]}),e(q,{children:e("form",{onSubmit:B,children:e("div",{className:"mt-10 sm:mt-0",children:t("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[e("div",{className:"md:col-span-1",children:t("div",{className:"px-4 sm:px-0",children:[e("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Data Layanan"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Masukan data lengkap Layananmu disini."})]})}),e("div",{className:"mt-5 md:mt-0 md:col-span-2",children:t("div",{className:"overflow-hidden shadow sm:rounded-md",children:[e("div",{className:"px-4 py-5 bg-white sm:p-6",children:t("div",{className:"grid grid-cols-12 gap-6",children:[t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nama Layanan"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"text",name:"name",value:(h=i.name)!=null?h:"",onChange:l,id:"name",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.name})]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"price_user",className:"block text-sm font-medium text-gray-700",children:"Harga"}),e("input",{type:"number",name:"price_user",id:"price_user",onChange:F,onWheel:r=>r.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),a.price_user&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.price_user}),t("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[c&&L," ",e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:c&&"("+Q(k)+" Rupiah)"})]})]}),t("div",{className:"col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:12,cy:12,r:9}),e("line",{x1:12,y1:8,x2:"12.01",y2:8}),e("polyline",{points:"11 12 12 12 12 16 13 16"})]}),"Secara Otomatis Sistem akan up 5% dari Harga yang dimasukan, harga yang dilihat oleh Pelanggan adalah harga yang sudah di up 5%, nilai 5% tersebut akan menjadi fee untuk Tawarin."]}),_==!0?"":t(p,{children:[t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Persentase untuk Owner"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"percent_owner",value:(f=i.percent_owner)!=null?f:"",onChange:l,id:"percent_owner",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.percent_owner})]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Persentase untuk Pekerja"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"percent_employe",value:(x=i.percent_employe)!=null?x:"",readOnly:!0,onChange:l,id:"percent_employe",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.percent_employe})]})]}),S==!0?"":e(p,{children:t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Jumlah Layanan untuk Mendapat Layanan Gratis"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"jumlahlayanandiskon",value:(g=i.jumlahlayanandiskon)!=null?g:"",onChange:l,id:"jumlahlayanandiskon",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.jumlahlayanandiskon})]})}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"service_duration",className:"block text-sm font-medium text-gray-700",children:"Lama Pelayanan (Menit)"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"service_duration",value:(b=i.service_duration)!=null?b:"",onChange:l,id:"service_duration",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.service_duration})]}),t("div",{className:"col-span-12 md:col-span-6",children:[t("label",{htmlFor:"period",className:"inline-flex text-sm font-medium text-gray-700 ",children:["Batas Waktu Reservasi (Hari)",e(Y,{message:"Batas waktu reservasi adalah bla bla bla",children:e(p,{children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-info-hexagon-filled",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 9.586h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z",strokeWidth:0,fill:"currentColor"})]})})})]}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"period",value:(w=i.period)!=null?w:"",onChange:l,id:"period",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.period})]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Deskripsi"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("textarea",{type:"text",name:"description",value:(v=i.description)!=null?v:"",rows:3,onChange:l,id:"description",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),a&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:a.description})]}),e("div",{className:"col-span-12 mt-5 md:mt-0 md:col-span-6",children:e("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:t("div",{children:[e("label",{className:"block text-sm font-medium text-gray-700",children:"Gambar Layanan"}),e("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:t("div",{className:"w-full text-center",children:[e("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),e(X,{inputname:"reservationcounter",allowMultiple:!1,maxFiles:"5"}),t("div",{className:"flex justify-center text-sm text-gray-600",children:[e("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:e("span",{children:"Upload a file"})}),e("p",{className:"pl-1",children:"or drag and drop"})]}),e("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})})})]})}),e("div",{className:"px-4 py-3 text-right bg-gray-50 sm:px-6",children:e(V,{processing:I,children:"Simpan"})})]})})]})})})})]})}Z.layout=u=>e(J,{children:u});export{Z as default};