import{a as e,j as a,L as u,f as v,r as d,F as N,H as x}from"./app.1019088c.js";import{B as y}from"./Button.ed1d58d8.js";import{A as b}from"./ApplicationLogo.adc50d59.js";import{I as o}from"./Input.592d3b11.js";import"./TextInputCheckbox.56f11fac.js";import{R as k}from"./RadioCard.682d439a.js";import"./clsx.m.256e9345.js";import"./Tawarin.08057ae7.js";import"./use-flags.dd456e98.js";import"./keyboard.ebf1b7b9.js";import"./label.9aa1cf40.js";import"./description.167b4c10.js";import"./hidden.e885a7de.js";import"./use-controllable.f67bad9c.js";function m({forInput:s,value:t,className:i,children:n}){return e("label",{htmlFor:s,className:"block font-medium text-sm text-gray-700 "+i,children:t||n})}function _({errors:s}){return Object.keys(s).length>0&&a("div",{className:"mb-4",children:[e("div",{className:"font-medium text-red-600",children:"Whoops! Something went wrong."}),e("ul",{className:"mt-3 list-disc list-inside text-sm text-red-600",children:Object.keys(s).map(function(t,i){return e("li",{children:s[t]},i)})})]})}function C({children:s}){return a("div",{className:"flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0",children:[e("div",{children:e(u,{href:"/",children:e(b,{className:"w-20 h-20 text-gray-500 fill-current"})})}),e("div",{className:"w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg",children:s})]})}function I({joinas:s}){const{data:t,setData:i,post:n,processing:c,errors:p,reset:f}=v({name:"",email:"",username:"",phone:"",password:"",password_confirmation:"",join_as_id:""});d.exports.useEffect(()=>()=>{f("password","password_confirmation")},[]);const l=r=>{i(r.target.name,r.target.type==="checkbox"|r.target.type==="radio"?r.target.checked:r.target.value)},[h,g]=d.exports.useState(),w=r=>{i({...t,join_as_id:r.id})};return a(N,{children:[e(x,{title:"Register"}),e(_,{errors:p}),a("form",{onSubmit:r=>{r.preventDefault(),n(route("register"))},children:[a("div",{children:[e(m,{forInput:"name",value:"Name"}),e(o,{type:"text",name:"name",value:t.name,className:"block w-full mt-1",autoComplete:"name",isFocused:!0,onChange:l,required:!0})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"username",value:"Username"}),e(o,{type:"text",name:"username",value:t.username,className:"block w-full mt-1",autoComplete:"username",isFocused:!0,onChange:l,required:!0})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"from_referral",value:"Referral"}),e(o,{type:"text",name:"from_referral",value:t.from_referral,className:"block w-full mt-1",autoComplete:"from_referral",isFocused:!0,onChange:l})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"phone",value:"Phone"}),e(o,{type:"text",name:"phone",value:t.phone,className:"block w-full mt-1",autoComplete:"phone",isFocused:!0,onChange:l,required:!0})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"address",value:"Address"}),e(o,{type:"text",name:"address",value:t.address,className:"block w-full mt-1",autoComplete:"address",isFocused:!0,onChange:l,required:!0})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"email",value:"Email"}),e(o,{type:"email",name:"email",value:t.email,className:"block w-full mt-1",autoComplete:"username",onChange:l,required:!0})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"password",value:"Password"}),e(o,{type:"password",name:"password",value:t.password,className:"block w-full mt-1",autoComplete:"new-password",onChange:l,required:!0})]}),a("div",{className:"mt-4",children:[e(m,{forInput:"password_confirmation",value:"Confirm Password"}),e(o,{type:"password",name:"password_confirmation",value:t.password_confirmation,className:"block w-full mt-1",onChange:l,required:!0})]}),e("div",{className:"grid grid-cols-12 gap-2",children:e("div",{className:"col-span-12 mt-2 mb-2",children:e("p",{className:"text-lg font-semibold text-gray-700",children:"Pilih Roles"})})}),e(k,{ShouldMap:s,selected:h,onChange:r=>{w(r),g(r)}}),a("div",{className:"flex items-center justify-end mt-4",children:[e(u,{href:route("login"),className:"text-sm text-gray-600 underline hover:text-gray-900",children:"Already registered?"}),e(y,{className:"ml-4",processing:c,children:"Register"})]})]})]})}I.layout=s=>e(C,{children:s});export{I as default};