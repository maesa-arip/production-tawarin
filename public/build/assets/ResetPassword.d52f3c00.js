import{b as w,r as h,a,j as s,H as v}from"./app.cbf5fb57.js";import{G as g}from"./GuestLayout.4da2b0db.js";import{I as m}from"./InputError.4999e345.js";import{I as n}from"./InputLabel.26c141a5.js";import{P as N}from"./PrimaryButton.f7b83131.js";import{T as l}from"./TextInput.6471a0c8.js";import"./ApplicationLogo.8c196934.js";import"./Tawarin.08057ae7.js";function E({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:f}=w({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{f("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(n,{forInput:"email",value:"Email"}),s(l,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(m,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password",value:"Password"}),s(l,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(m,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(m,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{E as default};