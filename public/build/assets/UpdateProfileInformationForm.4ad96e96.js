import{u as q,r as m,b as W,a,j as e,F as b,L as G,d as U}from"./app.9820b78a.js";import{I as h}from"./InputError.8436540d.js";import{I as c}from"./InputLabel.317a3666.js";import{P as E}from"./PrimaryButton.d1b0414b.js";import{T as w}from"./TextInput.4e6addbc.js";import{T as k}from"./TextAreaInput.0e49f3ac.js";import{M as J}from"./Map.aaec606f.js";import K from"./Filepond.e5a7254f.js";import{D as V}from"./DestroyModal.0afa6f39.js";import{B as Y}from"./Button.f92299a9.js";import{b as Q}from"./index_responsive.37eff21c.js";import{t as p}from"./transition.bba3a2a2.js";import"./esm.af92762f.js";import"./App.faddbbd5.js";import"./DropdownMenu.8497f277.js";import"./clsx.m.256e9345.js";import"./use-event-listener.fdb46010.js";import"./Aside.02f73067.js";import"./Container.a219fa89.js";import"./filepond-plugin-image-preview.esm.d91d646a.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./ExclamationIcon.1ce942dc.js";import"./dialog.67f293fa.js";import"./description.5fe67152.js";import"./Tawarin.08057ae7.js";function Ce({mustVerifyEmail:C,status:M,className:j,media:l}){const s=q().props.auth.user,[R,L]=m.exports.useState(null),[g,y]=m.exports.useState({formattedAddress:"",street:"",village:"",subdistrict:"",district:"",regency:"",country:""}),F=parseFloat(s.lat)||-8.670458,S=parseFloat(s.lng)||115.212629,D=({location:t,updatedLocationDetails:i,formattedAddress:u})=>{L(t),y(x=>({...x,...i,formattedAddress:u})),n(x=>({...x,...i,formattedAddress:u,lat:t.lat,lng:t.lng}))},I=t=>{const{name:i,value:u}=t.target;y({...g,[i]:u}),n({...o,[i]:u})},{data:o,setData:n,patch:A,errors:d,processing:P,recentlySuccessful:T}=W({name:s.name,email:s.email,phone:s.phone,visi:s.visi,misi:s.misi,lat:s.lat,lng:s.lng,formattedAddress:s.formattedAddress}),z=t=>{t.preventDefault(),A(route("profile.update"))},[f,N]=m.exports.useState(!1),[r,X]=m.exports.useState(null),[B,_]=m.exports.useState([]),O=t=>{_(t),v(!0)},$=()=>{U.Inertia.delete(route("media.destroy",B.id),{onSuccess:()=>v(!1)})},[H,v]=m.exports.useState(!1);return a("section",{className:j,children:[a("header",{className:"p-4 mt-4 border rounded-lg",children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Profile Information"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Update your account's profile information and email address."})]}),e(V,{isOpenDestroyDialog:H,setIsOpenDestroyDialog:v,size:"2xl",title:"Hapus Media",children:e(Y,{color:"pink",onClick:$,children:"Hapus"})}),a("form",{onSubmit:z,className:"mt-6 space-y-6",children:[e("div",{className:"col-span-12 mt-5 md:mt-0 md:col-span-6",children:e("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:a("div",{children:[e("label",{className:"block text-sm font-medium text-gray-700",children:"Foto Profile"}),e("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:a("div",{className:"w-full text-center",children:[e("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),e("div",{className:"mx-2 mb-6 bg-white rounded-lg shadow md:mx-4 lg:mx-6",children:e("div",{className:"px-2 py-6 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7",children:a("div",{className:"grid grid-cols-2 col-span-2 gap-2 md:grid-cols-6 ",children:[l.map((t,i)=>a("div",{className:"relative w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl ",children:[t.mime_type=="video/mp4"?e(b,{}):e("img",{className:"object-cover w-full h-full ",src:`/storage/${t.id}/${t.file_name}`,alt:i}),e("button",{id:t.id,onClick:()=>O(t),type:"button",className:"absolute top-0 right-0 flex items-center justify-between cursor-pointer group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-pink-300 rounded sm:w-10 sm:h-10 group-hover:bg-pink-400 ring-4 ring-white group-focus:outline-none ",children:e(Q,{className:"w-3 h-3 text-white md:w-5 md:h-5 sm:w-6 sm:h-6 "})})})]},i)),f&&r&&e(p,{appear:!0,show:f,as:Fragment,children:a(Dialog,{as:"div",className:"relative z-10",open:f,onClose:()=>N(!1),children:[e(p.Child,{as:Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex items-center justify-center min-h-full p-4 text-center",children:e(p.Child,{as:Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e(Dialog.Panel,{className:"relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-full",children:e("div",{className:"bg-white",children:e("div",{className:"sm:flex sm:items-start",children:a("div",{className:"text-center sm:mt-0 sm:text-left",children:[e(Dialog.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900"}),a("div",{className:"mx-2 my-2 md:mx-4 md:my-4",children:[e("p",{className:"text-sm text-gray-500"}),r.mime_type=="video/mp4"?e("div",{className:"w-auto h-auto col-span-2 overflow-hidden shadow rounded-xl",children:e("div",{className:"",children:e("video",{controls:!0,src:`/storage/${r.id}/${r.file_name}`})})}):e(b,{children:e("img",{className:"rounded-lg",src:`/storage/${r.id}/${r.file_name}`,alt:r.collection_name})}),e("button",{onClick:()=>N(!1),type:"button",className:"absolute z-30 flex items-center justify-between cursor-pointer bottom-4 right-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-pink-200 rounded-full sm:w-10 sm:h-10 group-hover:bg-pink-300 ring-4 ring-white group-focus:outline-none",children:a("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-white sm:w-6 sm:h-6 icon icon-tabler icon-tabler-x",width:24,height:24,viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M18 6l-12 12"}),e("path",{d:"M6 6l12 12"})]})})}),e("button",{onClick:()=>handleClick(l[(l.indexOf(r)-1)%l.length]),type:"button",className:"absolute left-0 z-30 flex items-center justify-between px-4 cursor-pointer top-1/2 group focus:outline-none","data-carousel-prev":!0,children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 group-hover:bg-blue-300 ring-4 ring-white group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 ",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})})}),e("button",{onClick:()=>handleClick(l[(l.indexOf(r)+1)%l.length]),type:"button",className:"absolute right-0 z-30 flex items-center justify-center px-4 cursor-pointer top-1/2 group focus:outline-none",children:e("span",{className:"inline-flex items-center justify-center w-5 h-5 bg-blue-200 rounded-full sm:w-10 sm:h-10 group-hover:bg-blue-300 ring-4 ring-white group-focus:outline-none",children:e("svg",{className:"w-5 h-5 text-white sm:w-6 sm:h-6 ",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})})]})]})})})})})})})]})})]})})}),e(K,{inputname:"profilepicture",allowMultiple:!1,maxFiles:"5"}),a("div",{className:"flex justify-center text-sm text-gray-600",children:[e("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:e("span",{children:"Upload a file"})}),e("p",{className:"pl-1",children:"or drag and drop"})]}),e("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})})}),a("div",{className:"grid grid-cols-12 gap-6",children:[e("div",{className:"col-span-12 mt-5 md:col-span-12 md:mt-0",children:e("div",{className:"overflow-hidden shadow sm:rounded-md",children:a("div",{className:"p-4 mt-6 space-y-6 bg-white md:px-6",children:[a("div",{children:[e(c,{for:"name",value:"Name"}),e(w,{id:"name",type:"text",className:"block w-full mt-1",value:o.name,handleChange:t=>n("name",t.target.value),required:!0,autofocus:!0,autocomplete:"name"}),e(h,{className:"mt-2",message:d.name})]}),a("div",{children:[e(c,{for:"email",value:"Email"}),e(w,{id:"email",type:"email",className:"block w-full mt-1",value:o.email,handleChange:t=>n("email",t.target.value),required:!0,autocomplete:"email"}),e(h,{className:"mt-2",message:d.email})]}),a("div",{children:[e(c,{for:"phone",value:"Phone"}),e(w,{id:"phone",type:"text",className:"block w-full mt-1",value:o.phone,handleChange:t=>n("phone",t.target.value),required:!0,autocomplete:"phone"}),e(h,{className:"mt-2",message:d.phone})]}),a("div",{children:[e(c,{for:"visi",value:"Visi"}),e(k,{id:"visi",type:"text",className:"block w-full mt-1",value:o.visi,handleChange:t=>n("visi",t.target.value),required:!0,autocomplete:"visi"}),e(h,{className:"mt-2",message:d.visi})]}),a("div",{children:[e(c,{for:"misi",value:"Misi"}),e(k,{id:"misi",type:"text",className:"block w-full mt-1",value:o.misi,handleChange:t=>n("misi",t.target.value),required:!0,autocomplete:"misi"}),e(h,{className:"mt-2",message:d.misi})]})]})})}),e("div",{className:"col-span-12 mt-5 md:col-span-12 md:mt-0",children:e("div",{className:"overflow-hidden shadow sm:rounded-md",children:e("div",{className:"p-4 bg-white md:px-6",children:a("div",{className:"w-full",children:[e(c,{for:"alamat",value:"Alamat"}),a("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-12 h-12 mx-auto text-gray-400 icon icon-tabler icon-tabler-map-2",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"}),e("path",{d:"M9 4v13"}),e("path",{d:"M15 7v5.5"}),e("path",{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"}),e("path",{d:"M19 18v.01"})]}),e(J,{onLocationSelect:D,lat:F,lng:S}),e("div",{className:"grid grid-cols-12 gap-x-6",children:a("div",{className:"col-span-12",children:[e("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Lokasi Otomatis"}),e("div",{className:"flex rounded-md",children:e("textarea",{type:"text",name:"formattedAddress",value:g.formattedAddress?g.formattedAddress:o.formattedAddress,onChange:I,readOnly:!0,className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),d&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:d.formattedAddress})]})})]})})})})]}),C&&s.email_verified_at===null&&a("div",{children:[a("p",{className:"mt-2 text-sm text-gray-800 dark:text-gray-200",children:["Your email address is unverified.",e(G,{href:route("verification.send"),method:"post",as:"button",className:"text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Click here to re-send the verification email."})]}),M==="verification-link-sent"&&e("div",{className:"mt-2 text-sm font-medium text-green-600 dark:text-green-400",children:"A new verification link has been sent to your email address."})]}),a("div",{className:"flex items-center gap-4",children:[e(E,{processing:P,children:"Save"}),e(p,{show:T,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})]})}export{Ce as default};