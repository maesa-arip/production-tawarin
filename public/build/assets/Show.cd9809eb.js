import{b as C,r as o,a as t,j as e,H as w}from"./app.9a613729.js";import{A}from"./App.16964d1b.js";import{n as O}from"./helper.e37a4314.js";import{C as B}from"./Container.8f1e0fca.js";import{B as m}from"./Button.56798297.js";import{T as p}from"./ThirdButtonSmallNoLink.939aff3a.js";import{I as g}from"./InfoModal.da4ec351.js";import{T as s}from"./ThirdButtonNoLink.e6fd2b4f.js";import{I as S}from"./InputError.73a751c1.js";import{T as j}from"./TextAreaInput.ed2ea611.js";import{I as H}from"./InputLabel.56545ef8.js";import"./DropdownMenu.a40fd6b8.js";import"./clsx.m.256e9345.js";import"./transition.d295e632.js";import"./use-event-listener.a77a602b.js";import"./index_responsive.4076ec44.js";import"./Tawarin.08057ae7.js";import"./Aside.63b1f812.js";import"./ExclamationIcon.79d5b675.js";import"./dialog.1257160e.js";import"./description.8d0ac48b.js";function F({transaction:r,media:h}){const{data:x,setData:f,patch:d,clearErrors:L,processing:n,reset:M,errors:u}=C({}),[y,l]=o.exports.useState(!1),[N,i]=o.exports.useState(!1),[U,c]=o.exports.useState([]),b=a=>{l(!0),c(a)},D=()=>{l(!1)},v=a=>{i(!0),c(a)},k=()=>{i(!1)},T=a=>{a.preventDefault(),d(route("admindeposit.confirmed",r.id))},I=a=>{a.preventDefault(),d(route("admindeposit.decline",r.id))};return t("div",{children:[t(g,{isOpenInfoDialog:y,setIsOpenInfoDialog:l,size:"2xl",closeButton:"false",title:"Yakin Tolak Top Up ?",children:[e(H,{className:"text-left mt-4",children:"Masukan Alasan"}),e(j,{type:"text",name:"reason",value:x.reason,className:"block w-full mt-1",autoComplete:"reason",isFocused:!0,handleChange:a=>f("reason",a.target.value)}),e(S,{message:u.reason,className:"mt-2 mb-2 text-left"}),e(s,{processing:n,onClick:I,children:"Tolak"}),e(s,{className:"mx-2 mt-2",color:"secondary",onClick:D,children:"Close"})]}),t(g,{isOpenInfoDialog:N,setIsOpenInfoDialog:i,size:"2xl",closeButton:"false",title:"Yakin Terima Top Up ?",children:[e(s,{processing:n,onClick:T,children:"Terima"}),e(s,{className:"mx-2 mt-2",color:"secondary",onClick:k,children:"Close"})]}),e(w,{title:"Transactions"}),e(B,{children:e("div",{className:"bg-white",children:t("div",{className:"grid items-start max-w-2xl grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8",children:[t("div",{children:[e("h2",{className:"mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Detail Transfer"}),e("p",{className:"mt-4 text-gray-500"}),t("dl",{className:"grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8",children:[t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Nama"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:r.holder_name})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Status"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:r.confirmed==1?e(p,{color:"teal",children:"Diterima"}):e(p,{color:"secondary",children:"Menunggu Konfirmasi"})})]}),t("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jumlah Top Up"}),t("dd",{className:"mt-2 text-sm text-gray-500",children:["Rp ",O(r.amount)]})]})]})]}),e("div",{className:"grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8",children:t("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:t("div",{children:[e("label",{className:"block text-sm font-medium text-gray-700",children:"Bukti Transfer"}),e("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:h.map(a=>e("img",{src:`/storage/${a.id}/${a.file_name}`,alt:"Walnut card tray filled with cards and card angled in dedicated groove.",className:"bg-gray-100 rounded-lg"},a.id))})]})}),t("div",{className:"flex justify-end bg-gray-50",children:[e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(m,{color:"pink",onClick:b,children:"Tolak"})}),e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(m,{onClick:v,children:"Konfirmasi"})})]})]})})]})})})]})}F.layout=r=>e(A,{children:r});export{F as default};