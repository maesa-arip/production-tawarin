import{r as n,b as E,a as t,j as e,H as J,F as p}from"./app.e12db1c5.js";import{A as q}from"./AppReservasi.d303863f.js";import{C as Q}from"./Container.95b21bb0.js";import"./DatePicker.1c3a0e4c.js";import{T as V}from"./helper.e37a4314.js";import X from"./Filepond.3d57608b.js";import"./index.esm.43834d53.js";import"./Map.eab17adb.js";import{T as Y}from"./Tooltip.fd6a3a16.js";import{B as k}from"./BaseModal.f9c8016d.js";import{T as s}from"./ThirdButtonNoLink.43413760.js";import"./DropdownMenu.27d16fb1.js";import"./clsx.m.256e9345.js";import"./transition.cb3dc600.js";import"./use-owner.71d88244.js";import"./index_responsive.18683d70.js";import"./index.27dbca70.js";import"./Header.b7b3d721.js";import"./popover.5ecc46e3.js";import"./use-event-listener.c1f7f4ad.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.13c86b47.js";import"./App.2e429fd8.js";import"./Aside.7c85a654.js";import"./filepond-plugin-image-preview.esm.4f1874b1.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./esm.09324216.js";import"./dialog.053e0bcb.js";import"./description.7709e1c5.js";function Z({onOff:u}){var h,f,x,g,w,b,y,v;const[c,N]=n.exports.useState(""),[D,C]=n.exports.useState(""),[_,j]=n.exports.useState(!1),[P,L]=n.exports.useState(!1),S=r=>{N(r.target.value),C(Math.ceil(r.target.value*(100+5)/100)),o({...a,[r.target.id]:r.target.value})},F=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(Math.ceil(c*(100+5)/100)),{data:a,setData:o,post:H,processing:I,reset:M,errors:i}=E({}),l=r=>{o({...a,[r.target.name]:r.target.type==="checkbox"||r.target.type==="radio"?r.target.checked:r.target.value})};n.exports.useState(),n.exports.useState(),n.exports.useState(),n.exports.useState();const B=r=>{r.preventDefault(),H(route("reservationCounters.store"),{data:a,onSuccess:()=>{M()}})},[O,d]=n.exports.useState(!1),[T,m]=n.exports.useState(!1);n.exports.useState([]);const z=()=>{d(!0)},W=()=>{d(!1),j(!0),o({...a,percent_owner:100,percent_employe:0})},G=()=>{d(!1)};n.exports.useEffect(()=>{z()},[]);const[K,$]=n.exports.useState(0);n.exports.useEffect(()=>{o({...a,percent_employe:100-(parseInt(a.percent_owner)||100)})},[K,a.percent_owner]);const U=()=>{m(!0)},A=()=>{m(!1),L(!0),o({...a,jumlahlayanandiskon:0})},R=()=>{m(!1)};return n.exports.useEffect(()=>{U()},[]),t("div",{children:[e(J,{title:"Plan Create"}),t(k,{isOpenInfoDialog:O,setIsOpenInfoDialog:d,size:"max-w-2xl",title:"Pilih",closeButton:"false",children:[e("p",{children:"Apakah anda akan memberikan komisi kepada pegawai untuk layanan ini ?"}),e(s,{type:"button",color:"secondary",onClick:W,children:"Tidak"}),e(s,{className:"mx-2 mt-2",type:"button",onClick:G,children:"Iya"})]}),t(k,{isOpenInfoDialog:T,setIsOpenInfoDialog:m,size:"max-w-2xl",title:"Pilih",closeButton:"false",children:[e("p",{children:"Apakah anda akan memberikan diskon kepada pelanggan untuk layanan ini ?"}),e(s,{type:"button",color:"secondary",onClick:A,children:"Tidak"}),e(s,{className:"mx-2 mt-2",type:"button",onClick:R,children:"Iya"})]}),e(Q,{children:e("form",{onSubmit:B,children:e("div",{className:"mt-10 sm:mt-0",children:t("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[e("div",{className:"md:col-span-1",children:t("div",{className:"px-4 sm:px-0",children:[e("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Data Layanan"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Masukan data lengkap Layananmu disini."})]})}),e("div",{className:"mt-5 md:mt-0 md:col-span-2",children:t("div",{className:"overflow-hidden shadow sm:rounded-md",children:[e("div",{className:"px-4 py-5 bg-white sm:p-6",children:t("div",{className:"grid grid-cols-12 gap-6",children:[t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nama Layanan"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"text",name:"name",value:(h=a.name)!=null?h:"",onChange:l,id:"name",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.name})]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"price_user",className:"block text-sm font-medium text-gray-700",children:"Harga"}),e("input",{type:"number",name:"price_user",id:"price_user",onChange:S,onWheel:r=>r.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),i.price_user&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.price_user}),t("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[c&&F," ",e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:c&&"("+V(D)+" Rupiah)"})]})]}),t("div",{className:"col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:12,cy:12,r:9}),e("line",{x1:12,y1:8,x2:"12.01",y2:8}),e("polyline",{points:"11 12 12 12 12 16 13 16"})]}),"Secara Otomatis Sistem akan up 5% dari Harga yang dimasukan, harga yang dilihat oleh Pelanggan adalah harga yang sudah di up 5%, nilai 5% tersebut akan menjadi fee untuk Tawarin."]}),_==!0?"":t(p,{children:[t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Persentase untuk Owner"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"percent_owner",value:(f=a.percent_owner)!=null?f:"",onChange:l,id:"percent_owner",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.percent_owner})]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Persentase untuk Pekerja"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"percent_employe",value:(x=a.percent_employe)!=null?x:"",readOnly:!0,onChange:l,id:"percent_employe",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.percent_employe})]}),t("div",{className:"col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8",children:[t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"justify-center inline w-6 h-6 mr-3 -mt-1 text-center text-white rounded-full bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 icon icon-tabler icon-tabler-info-circle",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("circle",{cx:12,cy:12,r:9}),e("line",{x1:12,y1:8,x2:"12.01",y2:8}),e("polyline",{points:"11 12 12 12 12 16 13 16"})]}),"Deposit akan dipotong dari Persentase Untuk Pekerja"]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Persentase untuk Deposit"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"deposit",value:(g=a.deposit)!=null?g:"",onChange:l,id:"deposit",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.deposit})]})]}),P==!0?"":e(p,{children:t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Jumlah Layanan untuk Mendapat Layanan Gratis"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"jumlahlayanandiskon",value:(w=a.jumlahlayanandiskon)!=null?w:"",onChange:l,id:"jumlahlayanandiskon",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.jumlahlayanandiskon})]})}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"service_duration",className:"block text-sm font-medium text-gray-700",children:"Lama Pelayanan (Menit)"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"service_duration",value:(b=a.service_duration)!=null?b:"",onChange:l,id:"service_duration",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.service_duration})]}),t("div",{className:"col-span-12 md:col-span-6",children:[t("label",{htmlFor:"period",className:"inline-flex text-sm font-medium text-gray-700 ",children:["Batas Waktu Reservasi (Hari)",e(Y,{message:"Batas waktu reservasi adalah bla bla bla",children:e(p,{children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 icon icon-tabler icon-tabler-info-hexagon-filled",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 9.586h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z",strokeWidth:0,fill:"currentColor"})]})})})]}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("input",{type:"number",name:"period",value:(y=a.period)!=null?y:"",onChange:l,id:"period",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.period})]}),t("div",{className:"col-span-12 md:col-span-6",children:[e("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Deskripsi"}),e("div",{className:"flex mt-1 rounded-md",children:e("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:e("textarea",{type:"text",name:"description",value:(v=a.description)!=null?v:"",rows:3,onChange:l,id:"description",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})})}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.description})]}),e("div",{className:"col-span-12 mt-5 md:mt-0 md:col-span-6",children:e("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:t("div",{children:[e("label",{className:"block text-sm font-medium text-gray-700",children:"Gambar Layanan"}),e("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:t("div",{className:"w-full text-center",children:[e("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),e(X,{inputname:"reservationcounter",allowMultiple:!1,maxFiles:"5"}),t("div",{className:"flex justify-center text-sm text-gray-600",children:[e("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:e("span",{children:"Upload a file"})}),e("p",{className:"pl-1",children:"or drag and drop"})]}),e("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})})})]})}),e("div",{className:"px-4 py-3 text-right bg-gray-50 sm:px-6",children:e(s,{processing:I,children:"Simpan"})})]})})]})})})})]})}Z.layout=u=>e(q,{children:u});export{Z as default};