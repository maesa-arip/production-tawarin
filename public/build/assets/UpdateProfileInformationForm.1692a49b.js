import{u as g,e as x,j as a,a as e,L as v}from"./app.e28ec121.js";import{I as m}from"./InputError.820f26ad.js";import{I as o}from"./InputLabel.fa906530.js";import{P as y}from"./PrimaryButton.55d8749a.js";import{T as l}from"./TextInput.93d6ed6d.js";import{W as k}from"./transition.6429bac4.js";function C({mustVerifyEmail:d,status:c,className:u}){const r=g().props.auth.user,{data:i,setData:s,patch:f,errors:n,processing:p,recentlySuccessful:h}=x({name:r.name,email:r.email});return a("section",{className:u,children:[a("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Profile Information"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Update your account's profile information and email address."})]}),a("form",{onSubmit:t=>{t.preventDefault(),f(route("profile.update"))},className:"mt-6 space-y-6",children:[a("div",{children:[e(o,{for:"name",value:"Name"}),e(l,{id:"name",type:"text",className:"mt-1 block w-full",value:i.name,handleChange:t=>s("name",t.target.value),required:!0,autofocus:!0,autocomplete:"name"}),e(m,{className:"mt-2",message:n.name})]}),a("div",{children:[e(o,{for:"email",value:"Email"}),e(l,{id:"email",type:"email",className:"mt-1 block w-full",value:i.email,handleChange:t=>s("email",t.target.value),required:!0,autocomplete:"email"}),e(m,{className:"mt-2",message:n.email})]}),d&&r.email_verified_at===null&&a("div",{children:[a("p",{className:"text-sm mt-2 text-gray-800 dark:text-gray-200",children:["Your email address is unverified.",e(v,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Click here to re-send the verification email."})]}),c==="verification-link-sent"&&e("div",{className:"mt-2 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to your email address."})]}),a("div",{className:"flex items-center gap-4",children:[e(y,{processing:p,children:"Save"}),e(k,{show:h,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})]})}export{C as default};