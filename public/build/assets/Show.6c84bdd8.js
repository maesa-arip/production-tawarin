import{b as m,a as r,j as e,H as l}from"./app.b2a6f44b.js";import{A as c}from"./App.2713ff24.js";import{n as o}from"./helper.e37a4314.js";import{C as p}from"./Container.6d863bba.js";import{B as a}from"./Button.77a9bc0e.js";import"./XIcon.c10ccf78.js";import"./clsx.m.256e9345.js";import"./transition.7b88a4bc.js";import"./use-owner.c395fb84.js";import"./DropdownMenu.291b2cde.js";import"./use-event-listener.659ecc81.js";import"./MenuLogo.36958665.js";import"./InfoModal.2aab9c78.js";import"./Tawarin.08057ae7.js";import"./Dropdown.046e2d0f.js";import"./index.2ca15937.js";function n({transaction:t}){const{data:g,setData:h,patch:d,clearErrors:x,reset:y,errors:N}=m({}),i=s=>{s.preventDefault(),d(route("adminwithdraw.confirmed",t.id))};return r("div",{children:[e(l,{title:"Transactions"}),e(p,{children:e("div",{className:"bg-white",children:r("div",{className:"grid items-start max-w-2xl grid-cols-1 px-4 py-12 mx-auto gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:grid-cols-2 lg:px-8",children:[r("div",{children:[e("h2",{className:"mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Detail Transfer"}),e("p",{className:"mt-4 text-gray-500"}),r("dl",{className:"grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8",children:[r("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jenis"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:t.payable_type})]}),r("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Tipe"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:t.type})]}),r("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Status"}),e("dd",{className:"mt-2 text-sm text-gray-500",children:t.confirmed})]}),r("div",{className:"pt-4 border-t border-gray-200",children:[e("dt",{className:"font-medium text-gray-900",children:"Jumlah Top Up"}),r("dd",{className:"mt-2 text-sm text-gray-500",children:["Rp ",o(t.amount)]})]})]})]}),e("div",{className:"grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8",children:r("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[e("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:e("div",{children:e("label",{className:"block text-sm font-medium text-gray-700",children:"Bukti Transfer"})})}),r("div",{className:"flex justify-end bg-gray-50",children:[e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(a,{color:"pink",children:"Tolak"})}),e("div",{className:"px-4 py-3 text-right sm:px-6",children:e(a,{onClick:i,children:"Konfirmasi"})})]})]})})]})})})]})}n.layout=t=>e(c,{children:t});export{n as default};