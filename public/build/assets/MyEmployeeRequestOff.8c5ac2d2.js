import{r as l,b as B,a,F as d,j as e,H as E}from"./app.e9b32960.js";import"./index_responsive.c579ff59.js";import{A as H}from"./AppReservasi.8ac236df.js";import"./CopyButton.0f35eb28.js";import{I as c}from"./InfoModal.71e29a59.js";import{T as t}from"./ThirdButtonNoLink.96ef244a.js";import{h as L,d as z,j as F,k as R}from"./index.esm.ca30333e.js";import{I as U}from"./InputLabel.6ea3a41b.js";import{T as q}from"./TextAreaInput.720cb43b.js";import{I as P}from"./InputError.b1bbb09d.js";import"./transition.0ab516ac.js";import"./DropdownMenu.5747e5cf.js";import"./clsx.m.256e9345.js";import"./use-event-listener.47eaf533.js";import"./Tawarin.08057ae7.js";import"./AsideReservasi.ab382a14.js";import"./ExclamationIcon.f80b2883.js";import"./dialog.cda582a2.js";import"./description.ee23fbf5.js";function K({auth:m,mustVerifyEmail:X,status:Y,myEmployeeRequestOff:x}){const[o,p]=l.exports.useState([]),[h,i]=l.exports.useState(!1),[g,n]=l.exports.useState(!1),[y,f]=l.exports.useState(!1),[N,u]=l.exports.useState(!1),{data:D,setData:b,patch:J,post:V,put:r,processing:v,errors:I,reset:W}=B({}),k=s=>{p(s),i(!0)},O=s=>{i(!1)},w=s=>{p(s),n(!0)},S=s=>{n(!1)},A=()=>{r(route("reservation.startservice",o.id),{onSuccess:()=>f(!1)})},T=()=>{r(route("reservation.finishservice",o.id),{onSuccess:()=>u(!1)})},j=s=>{s.preventDefault(),r(route("reservation.acceptdayoff",o.id),{onSuccess:()=>i(!1)})},C=s=>{s.preventDefault(),r(route("reservation.declinedayoff",o.id),{onSuccess:()=>n(!1)})};return a(d,{children:[e(c,{isOpenInfoDialog:y,setIsOpenInfoDialog:f,size:"2xl",title:"Mulai Pelayanan ?",children:e(t,{processing:v,onClick:A,children:"Mulai"})}),e(c,{isOpenInfoDialog:N,setIsOpenInfoDialog:u,size:"2xl",title:"Selesaikan Pelayanan ?",children:e(t,{color:"teal",onClick:T,children:"Selesai"})}),a(c,{isOpenInfoDialog:h,setIsOpenInfoDialog:i,size:"2xl",title:"Yakin Terima ?",closeButton:"false",children:[e(t,{className:"mx-2",onClick:j,children:"Terima"}),e(t,{color:"secondary",onClick:O,children:"Batal"})]}),a(c,{isOpenInfoDialog:g,setIsOpenInfoDialog:n,size:"2xl",title:"Yakin Tolak ?",closeButton:"false",children:[e(U,{className:"text-left mt-4",children:"Masukan Alasan"}),e(q,{type:"text",name:"reason",value:D.reason,className:"block w-full mt-1",autoComplete:"reason",isFocused:!0,handleChange:s=>b("reason",s.target.value)}),e(P,{message:I.reason,className:"mt-2 mb-2 text-left"}),e(t,{className:"mx-2 mt-2",onClick:C,children:"Tolak"}),e(t,{color:"secondary",onClick:S,children:"Batal"})]}),e(E,{title:"Profile"}),e("div",{className:"py-12",children:e("div",{className:"mx-auto space-y-6 sm:px-6 lg:px-8",children:a("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:[e("div",{className:"p-8 border border-gray-200 rounded-2xl",children:e("div",{className:"flex justify-center mb-2 text-lg",children:"Request Libur"})}),x.map((s,M)=>e("div",{className:"py-5",children:e("div",{className:"p-2 duration-150 bg-white rounded-lg shadow cursor-pointer",children:a("div",{children:[a("div",{className:"flex items-center justify-between px-4 my-6",children:[e("p",{className:"font-bold text-gray-500",children:"Karyawan"}),e("p",{className:"rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white",children:s.user.name})]}),a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Hari Libur"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.date})]}),a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Alasan"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.reason})]}),s.decline==1?a("div",{className:"flex items-center justify-between px-4 my-4",children:[e("p",{className:"text-sm font-semibold text-gray-500",children:"Alasan di Tolak"}),e("p",{className:"rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600",children:s.decline_reason})]}):e(d,{}),e("div",{className:"flex items-center px-4 my-4 justify-evenly",children:s.decline==1?a(t,{color:"red",className:"cursor-not-allowed",children:["SUDAH Ditolak"," ",e(L,{className:"w-5 h-5 ml-2"})]}):s.approved==1?a(t,{color:"teal",className:"cursor-not-allowed",children:["SUDAH DISETUJUI"," ",e(z,{className:"w-5 h-5 ml-2"})]}):a(d,{children:[a(t,{color:"teal",className:"",onClick:()=>k(s),children:["TERIMA"," ",e(F,{className:"w-5 h-5 ml-2"})]}),a(t,{color:"red",className:"",onClick:()=>w(s),children:["TOLAK"," ",e(R,{className:"w-5 h-5 ml-2"})]})]})})]})})},M))]})})})]})}K.layout=m=>e(H,{children:m});export{K as default};