import{a,F as f,j as e,b as h,r as g}from"./app.de533d93.js";import x from"./Filepond.b128559d.js";import{B as p}from"./Button.f350d6e0.js";function v({errors:s,submit:i,data:r,result:n,result_all:t,setData:d,closeButton:c}){var m,l;const o=u=>d({...r,[u.target.id]:u.target.value});return a(f,{children:[e("div",{className:"px-4 py-5 bg-white sm:p-6",children:e("div",{className:"grid grid-cols-6 gap-6",children:a("div",{className:"col-span-6",children:[e("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Keterangan Revisi Dari Owner"}),e("div",{className:"mt-1",children:e("textarea",{readOnly:!0,value:(m=t.description)!=null?m:"Belum ada permintaan revisi",onChange:o,rows:3,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Masukan Deskripsi Revisi"})})]})})}),t.jumlah_pengajuan_revisi>0&&e("div",{className:"px-4 py-5 bg-white sm:p-6",children:e("div",{className:"grid grid-cols-6 gap-6",children:a("div",{className:"col-span-6",children:[e("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Masukan Keterangan Revisi"}),e("div",{className:"mt-1",children:e("textarea",{id:"description",name:"description",value:(l=r.description)!=null?l:"",onChange:o,rows:3,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Masukan Deskripsi Revisi"})}),s&&e("div",{className:"mt-1 text-pink-500",children:s.description})]})})}),t.jumlah_pengajuan_revisi>0&&e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:a("div",{children:[e("label",{className:"block text-sm font-medium text-gray-700",children:"Masukan Hasil Revisimu (Max 5)"}),e("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:a("div",{className:"w-full text-center",children:[e("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),e(x,{inputname:"document",allowMultiple:!0,maxFiles:"5"}),a("div",{className:"flex justify-center text-sm text-gray-600",children:[e("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:e("span",{children:"Upload a file"})}),e("p",{className:"pl-1",children:"or drag and drop"})]}),e("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})}),a("div",{className:"px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[t.jumlah_pengajuan_revisi>0&&e(p,{children:i}),e(p,{color:"pink",type:"button",onClick:c,children:"Cancel"})]})]})}function k({setIsOpenAddDialog:s,result:i,result_all:r}){const{data:n,setData:t,post:d,reset:c,errors:o}=h({description:"",plan_result_id:""});return e("form",{onSubmit:u=>{u.preventDefault(),d(route("plan.simpanrevisionresult",i),{data:n,onSuccess:()=>{c(),s(!1)}})},children:e(v,{errors:o,data:n,result_all:r,setData:t,submit:"Simpan",closeButton:u=>s(!1)})})}function y({setIsOpenEditDialog:s,model:i}){const{data:r,setData:n,put:t,reset:d,errors:c}=h({description:i.description,plan_result_id:i.plan_result_id}),o=l=>s(!1),m=l=>{l.preventDefault(),t(route("users.update",i.id),{data:r,onSuccess:()=>{d(),s(!1)}})};return g.exports.useEffect(()=>{n({...r,description:i.description,plan_result_id:i.plan_result_id})},[i]),e("form",{onSubmit:m,children:e(v,{errors:c,data:r,setData:n,submit:"Update",closeButton:o})})}export{k as C,y as E};