import{a as e,r as a,j as r}from"./app.d3c10857.js";import{W as t}from"./transition.f7797981.js";import{m as l}from"./App.a776b86b.js";function h({title:o,children:s,isOpenAddDialog:i,setIsOpenAddDialog:n,size:c="6xl"}){return e("div",{children:e(t,{appear:!0,show:i,as:a.exports.Fragment,children:r(l,{as:"div",className:"relative z-10",open:i,onClose:()=>n(!1),children:[e(t.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e(t.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r(l.Panel,{className:`w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all max-w-${c}`,children:[e(l.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:o}),e("div",{className:"mt-2",children:s})]})})})})]})})})}function x({title:o,children:s,isOpenEditDialog:i,setIsOpenEditDialog:n,size:c="6xl"}){return e("div",{children:e(t,{appear:!0,show:i,as:a.exports.Fragment,children:r(l,{as:"div",className:"relative z-10",open:i,onClose:()=>n(!1),children:[e(t.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e("div",{className:"fixed inset-0 overflow-y-auto",children:e("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e(t.Child,{as:a.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:r(l.Panel,{className:`w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all max-w-${c}`,children:[e(l.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:o}),e("div",{className:"mt-2",children:s})]})})})})]})})})}export{h as A,x as E};