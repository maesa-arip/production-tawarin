import{r as l,d as b,j as a,a as e,H as v}from"./app.be5a8a26.js";import{A as y}from"./App.5eeddd95.js";import{C}from"./Container.9b77a73c.js";import"./DatePicker.b422b4ad.js";import{T as w}from"./helper.e37a4314.js";import{B as S}from"./Button.725091ae.js";import"./Filepond.7f22ab1a.js";import{L as k}from"./ListBoxPage.731c1fad.js";import"./XIcon.bf6de2bb.js";import"./Tawarin.e9d21f9b.js";import"./listbox.6e1d7436.js";import"./use-computed.94e2008d.js";import"./form.0980e256.js";import"./SelectorIcon.c04460d1.js";function A({users:n}){const[s,o]=l.exports.useState(""),d=t=>{o(t.target.value),m({...r,[t.target.id]:t.target.value})},c=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(s),{data:r,setData:m,post:p,processing:u,reset:h,errors:i}=b({}),g=[{name:"Pilih"}],[x,f]=l.exports.useState(g[0]),N=t=>{m({...r,id:t.id})};return a("div",{children:[e(v,{title:"Transfer"}),e(C,{children:a("form",{onSubmit:t=>{t.preventDefault(),p(route("wallet.transferstore"),{data:r,onSuccess:()=>{h()}})},children:[e("div",{className:"mt-10 sm:mt-0",children:a("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[e("div",{className:"md:col-span-1",children:a("div",{className:"px-4 sm:px-0",children:[e("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Data Transfer"}),e("p",{className:"mt-1 text-sm text-gray-600",children:"Use a permanent address where you can receive mail."})]})}),e("div",{className:"mt-5 md:mt-0 md:col-span-2",children:a("div",{className:"overflow-hidden shadow sm:rounded-md",children:[e("div",{className:"px-4 py-5 bg-white sm:p-6",children:a("div",{className:"grid grid-cols-6 gap-6",children:[a("div",{className:"col-span-6 sm:col-span-6 lg:col-span-5",children:[e("label",{htmlFor:"id",className:"block text-sm font-medium text-gray-700",children:"Pilih Kontak"}),e(k,{ShouldMap:n,selected:x,onChange:t=>{N(t),f(t)}}),i&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.id})]}),a("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-700",children:"Amount"}),e("input",{type:"number",name:"amount",id:"amount",onChange:d,onWheel:t=>t.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),i.amount&&e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:i.amount}),a("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[s&&c," ",e("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:s&&"("+w(s)+" Rupiah)"})]})]})]})}),e("div",{className:"px-4 py-3 text-right bg-gray-50 sm:px-6",children:e(S,{processing:u,children:"Transfer"})})]})})]})}),e("div",{className:"hidden sm:block","aria-hidden":"true",children:e("div",{className:"py-5",children:e("div",{className:"border-t border-gray-200"})})})]})})]})}A.layout=n=>e(y,{children:n});export{A as default};