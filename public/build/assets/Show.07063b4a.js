import{b as B,r as o,a,j as e,H as W,F as d}from"./app.9820b78a.js";import{A as _}from"./AppReservasi.48bada5a.js";import{n as F}from"./helper.e37a4314.js";import{C as j}from"./Container.a219fa89.js";import{B as y}from"./Button.f92299a9.js";import{T as m}from"./ThirdButtonSmallNoLink.9f5d2c1c.js";import{I as N}from"./InfoModal.6d3ecab2.js";import{I as H}from"./InputLabel.317a3666.js";import{T as L}from"./TextAreaInput.0e49f3ac.js";import{I as M}from"./InputError.8436540d.js";import{T as i}from"./ThirdButtonNoLink.eafacece.js";import"./DropdownMenu.8497f277.js";import"./clsx.m.256e9345.js";import"./transition.bba3a2a2.js";import"./use-event-listener.fdb46010.js";import"./index_responsive.37eff21c.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.6e796d4d.js";import"./ExclamationIcon.1ce942dc.js";import"./dialog.67f293fa.js";import"./description.5fe67152.js";function z({transaction:t}){var h,g,x,f,u;const{data:v,setData:D,patch:c,clearErrors:E,processing:n,reset:K,errors:w}=B({}),[k,s]=o.exports.useState(!1),[b,l]=o.exports.useState(!1),[Y,p]=o.exports.useState([]),I=r=>{s(!0),p(r)},T=()=>{s(!1)},C=r=>{l(!0),p(r)},A=()=>{l(!1)},S=r=>{r.preventDefault(),c(route("owneradmindeposits.confirmed",t.id))},O=r=>{r.preventDefault(),c(route("owneradmindeposits.decline",t.id))};return a("div",{children:[e(W,{title:"Transactions"}),a(N,{isOpenInfoDialog:k,setIsOpenInfoDialog:s,size:"2xl",closeButton:"false",title:"Yakin Tolak Top Up ?",children:[e(H,{className:"text-left mt-4",children:"Masukan Alasan"}),e(L,{type:"text",name:"reason",value:v.reason,className:"block w-full mt-1",autoComplete:"reason",isFocused:!0,handleChange:r=>D("reason",r.target.value)}),e(M,{message:w.reason,className:"mt-2 mb-2 text-left"}),e(i,{processing:n,onClick:O,children:"Tolak"}),e(i,{className:"mx-2 mt-2",color:"secondary",onClick:T,children:"Close"})]}),a(N,{isOpenInfoDialog:b,setIsOpenInfoDialog:l,size:"2xl",closeButton:"false",title:"Yakin Terima Withdraw ?",children:[e(i,{processing:n,onClick:S,children:"Terima"}),e(i,{className:"mx-2 mt-2",color:"secondary",onClick:A,children:"Close"})]}),e(j,{children:e("div",{className:"bg-white",children:a("div",{className:"grid items-start max-w-2xl grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8",children:[a("div",{children:[e("h2",{className:"mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Detail Penarikan Deposit"}),e("p",{className:"mt-4 text-gray-500"}),a("dl",{className:"grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8",children:[a("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Tipe"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:t.type})]}),a("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Status"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:t.confirmed==0&&((h=t.meta)==null?void 0:h.type)=="decline_deposit_withdraw"?e(m,{color:"red",children:"Ditolak"}):t.confirmed==1?e(m,{color:"teal",children:"Diterima"}):e(m,{color:"secondary",children:"Menunggu Konfirmasi"})})]}),a("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jumlah Withdraw"}),a("dd",{className:"mt-2 text-sm text-gray-500",children:["Rp ",F(t.amount)]})]}),a("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Alasan"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:e("div",{className:"col-span-12 px-3 py-4 mb-6 text-sm text-gray-500 rounded shadow md:col-span-8",children:e("div",{className:"flex",children:e("p",{children:(g=t.meta)==null?void 0:g.reason})})})})]})]})]}),e("div",{className:"grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8",children:a("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:e("div",{children:t.confirmed==0&&((x=t.meta)==null?void 0:x.type)=="decline_deposit_withdraw"?e("div",{className:"px-1 py-3 text-right sm:px-6",children:e("p",{className:"text-sm font-medium text-left text-red-500",children:(f=t.meta)==null?void 0:f.message})}):t.confirmed==1?e(d,{}):e(d,{})})}),e("div",{className:"flex justify-end bg-gray-50",children:t.confirmed==0&&((u=t.meta)==null?void 0:u.type)=="decline_deposit_withdraw"?e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(i,{color:"red",children:"Withdraw Sudah Ditolak"})}):t.confirmed==1?e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(i,{color:"teal",children:"Withdraw Sudah Diterima"})}):a(d,{children:[e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(y,{color:"pink",onClick:I,children:"Tolak"})}),e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(y,{onClick:C,children:"Konfirmasi"})})]})})]})})]})})})]})}z.layout=t=>e(_,{children:t});export{z as default};