import{b as y,u as O,r as o,a as r,j as t,H as C}from"./app.b397b200.js";import{A as j}from"./AppReservasi.f6fc67a9.js";import{C as g}from"./Container.f6289661.js";import"./AsideReservasi.b9fbedc9.js";import"./TextInput.0219e41e.js";import"./Filepond.7a78b97e.js";import"./MapShow.d2b78200.js";import I from"./Time.0801a03e.js";import{B as U}from"./BaseModal.e241e6f3.js";import{C as T}from"./Calendar.4c6d3421.js";import"./DropdownMenu.9518c36e.js";import"./clsx.m.256e9345.js";import"./transition.2cdd9121.js";import"./use-event-listener.c4ff3453.js";import"./Tawarin.08057ae7.js";import"./App.0650af6f.js";import"./filepond-plugin-image-preview.esm.8bef8b25.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./esm.8aa7c293.js";import"./ThirdButtonNoLink.9d2d582e.js";import"./Team.242c53b5.js";import"./InfoModal.592f4b88.js";import"./ExclamationIcon.489e228c.js";import"./dialog.d3f0e9cd.js";import"./description.2145e020.js";import"./ThirdButton.4117333a.js";import"./TextAreaInput.cdfe9aa0.js";import"./index.65f1d40b.js";function A({reservationCompany:s,reservationCounter:l,team:u,endDate:c}){y({});const{permissions:d}=O().props;d&&d.map(e=>e.name);const[a,f]=o.exports.useState([]),h=()=>{const e=new Date,i=new Date(c),p=[];for(;e<=i;)p.push(e.toDateString("en-US")),e.setDate(e.getDate()+1);f(p)};o.exports.useEffect(()=>{h()},[c]);const[m,n]=o.exports.useState(!1),[b,D]=o.exports.useState([]),x=(e,i)=>{D({reservationCompany:e,date:i,reservationCounter:l,team:u}),n(!0)},[S,v]=o.exports.useState(new Date),w=e=>{v(e),a.includes(e.toDateString("en-US"))&&x(s,e.toDateString("en-US"))};console.log(a);const N=({date:e})=>!a.includes(e.toDateString("en-US"));return r("div",{children:[t(C,{title:"Plans"}),t(U,{isOpenInfoDialog:m,setIsOpenInfoDialog:n,size:"max-w-2xl",title:"Pilih Jam",children:t(I,{model:b,setIsOpenDialog:n,isOpenDialog:m})}),t(g,{children:t("div",{className:"bg-white",children:t("div",{className:"grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"})})}),t(g,{children:r("div",{className:"bg-white",children:[t("div",{className:"grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",children:r("div",{className:"col-span-12 p-4 mb-4 text-left border rounded-lg",children:[r("h2",{className:"text-lg font-semibold text-center text-gray-700 ",children:[" ",l.name]}),r("p",{children:["Open at: ",s.open_at]}),r("p",{children:["Close at: ",s.close_at]}),r("p",{children:["Service duration:"," ",l.service_duration," minutes"]}),r("p",{children:["Deskripsi :"," "]})]})}),t("div",{className:"flex justify-center w-full my-4 text-center",children:t(T,{onChange:w,value:S,tileDisabled:N,className:"rounded-lg border-none p-4",calendarClassName:"bg-red-500",tileClassName:({date:e})=>{const i=e.toDateString("en-US");return a.includes(i)?"p-2 my-1 text-center border text-blue-500 rounded-full bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100 focus:ring-blue-100":"p-2 my-1 text-center border text-[#d10000] rounded-full bg-red-50 hover:bg-red-100 focus:bg-red-100 active:bg-red-100 focus:ring-red-100"}})})]})})]})}A.layout=s=>t(j,{children:s});export{A as default};