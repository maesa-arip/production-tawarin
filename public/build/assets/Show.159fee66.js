import{b as C,u as I,r as i,a as r,j as t,H as L}from"./app.9820b78a.js";import{A as G}from"./AppReservasi.48bada5a.js";import{C as g}from"./Container.a219fa89.js";import"./index_responsive.37eff21c.js";import"./TextInput.4e6addbc.js";import"./Filepond.e5a7254f.js";import"./MapShow.58894630.js";import T from"./Time.d00ac753.js";import{B as A}from"./BaseModal.e2256560.js";import{C as _}from"./Calendar.455d2d90.js";import"./DropdownMenu.8497f277.js";import"./clsx.m.256e9345.js";import"./transition.bba3a2a2.js";import"./use-event-listener.fdb46010.js";import"./AsideReservasi.6e796d4d.js";import"./Tawarin.08057ae7.js";import"./App.faddbbd5.js";import"./Aside.02f73067.js";import"./filepond-plugin-image-preview.esm.d91d646a.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./esm.af92762f.js";import"./ThirdButtonNoLink.eafacece.js";import"./Team.07c72f57.js";import"./InfoModal.6d3ecab2.js";import"./ExclamationIcon.1ce942dc.js";import"./dialog.67f293fa.js";import"./description.5fe67152.js";import"./ThirdButton.722862ec.js";import"./index.65f1d40b.js";function H({reservationCompany:s,idExist:u,reservationCounter:o,team:b,offDay:f,workBreak:h,endDate:c}){C({});const{permissions:m}=I().props;m&&m.map(e=>e.name);const[l,D]=i.exports.useState([]),x=()=>{const e=new Date,a=new Date(c),d=[];for(;e<=a;){const j=e.toLocaleDateString("en-GB");d.push(j),e.setDate(e.getDate()+1)}D(d)};i.exports.useEffect(()=>{x()},[c]);const[p,n]=i.exports.useState(!1),[S,w]=i.exports.useState([]),v=(e,a)=>{w({reservationCompany:e,date:a,reservationCounter:o,team:b,offDay:f,workBreak:h,idExist:u}),n(!0)},[N,y]=i.exports.useState(new Date),O=e=>{y(e),l.includes(e.toLocaleDateString("en-GB"))&&v(s,e.toLocaleDateString("en-GB"))},B=({date:e})=>!l.includes(e.toLocaleDateString("en-GB"));return r("div",{children:[t(L,{title:"Ubah Layanan"}),t(A,{isOpenInfoDialog:p,setIsOpenInfoDialog:n,size:"max-w-2xl",title:"Pilih Jam Baru",children:t(T,{model:S,setIsOpenDialog:n,isOpenDialog:p})}),t(g,{children:t("div",{className:"bg-white",children:t("div",{className:"grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"})})}),t(g,{children:r("div",{className:"bg-white",children:[t("div",{className:"grid w-full grid-cols-1 mt-4 gap-x-1 gap-y-4 md:gap-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",children:r("div",{className:"col-span-12 p-4 mb-4 text-left border rounded-lg",children:[r("h2",{className:"text-lg font-semibold text-center text-gray-700 ",children:[" ",o.name]}),r("p",{children:["Open at: ",s.open_at]}),r("p",{children:["Close at: ",s.close_at]}),r("p",{children:["Service duration:"," ",o.service_duration," minutes"]}),r("p",{children:["Deskripsi :"," ",o.description]})]})}),t("div",{className:"flex justify-center w-full my-4 text-center",children:t(_,{onChange:O,value:N,tileDisabled:B,className:"rounded-lg border-none p-4",calendarClassName:"bg-red-500",tileClassName:({date:e})=>{const a=e.toDateString("en-US");return l.includes(a),"p-2 my-1 text-center border text-blue-500 rounded-full bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-100 focus:ring-blue-100"}})})]})})]})}H.layout=s=>t(G,{children:s});export{H as default};