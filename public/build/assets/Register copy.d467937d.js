import{b as p,r as f,a,j as e,H as g,L as h}from"./app.9820b78a.js";import{G as w}from"./GuestLayout.81db76d8.js";import{I as m}from"./InputError.8436540d.js";import{I as n}from"./InputLabel.317a3666.js";import{P as N}from"./PrimaryButton.d1b0414b.js";import{T as i}from"./TextInput.4e6addbc.js";import"./ApplicationLogo.8ce603b2.js";import"./Tawarin.08057ae7.js";function q(){const{data:s,setData:l,post:u,processing:d,errors:t,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const o=r=>{l(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)};return a(w,{children:[e(g,{title:"Register"}),a("form",{onSubmit:r=>{r.preventDefault(),u(route("register"))},children:[a("div",{children:[e(n,{forInput:"name",value:"Name"}),e(i,{type:"text",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,handleChange:o,required:!0}),e(m,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"email",value:"Email"}),e(i,{type:"email",name:"email",value:s.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:o,required:!0}),e(m,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"password",value:"Password"}),e(i,{type:"password",name:"password",value:s.password,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o,required:!0}),e(m,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(n,{forInput:"password_confirmation",value:"Confirm Password"}),e(i,{type:"password",name:"password_confirmation",value:s.password_confirmation,className:"mt-1 block w-full",handleChange:o,required:!0}),e(m,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e(N,{className:"ml-4",processing:d,children:"Register"})]})]})]})}export{q as default};