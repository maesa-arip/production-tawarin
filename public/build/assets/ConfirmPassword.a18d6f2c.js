import{b as p,r as l,a,j as s,H as c}from"./app.d0158df0.js";import{G as u}from"./GuestLayout.45e19913.js";import{I as f}from"./InputError.6380d995.js";import{I as w}from"./InputLabel.868c5782.js";import{P as h}from"./PrimaryButton.94f6e914.js";import{T as g}from"./TextInput.51f6d4fd.js";import"./ApplicationLogo.fefd1c25.js";import"./Tawarin.08057ae7.js";function H(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=p({password:""});l.exports.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(c,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{forInput:"password",value:"Password"}),s(g,{type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(f,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{H as default};