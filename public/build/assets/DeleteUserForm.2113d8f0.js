import{a as e,r as l,e as w,j as n,d as b}from"./app.cc2a25f2.js";import{I as v}from"./InputError.1ef4020b.js";import{I as k}from"./InputLabel.7451534b.js";import{W as p}from"./transition.2bd89758.js";import{T as N}from"./TextInput.045c77fb.js";function g({type:o="submit",className:a="",processing:t,children:r,onClick:s}){return e("button",{type:o,onClick:s,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${t&&"opacity-25"} `+a,disabled:t,children:r})}function D({children:o,show:a=!1,maxWidth:t="2xl",closeable:r=!0,onClose:s=()=>{}}){l.exports.useEffect(()=>{document.body.style.overflow=a?"hidden":null},[a]);const d=()=>{r&&s()},i=u=>{u.key==="Escape"&&props.show&&d()};l.exports.useEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null}),[]);const m={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[t],c=document.getElementById("modal-root");return w.createPortal(e(p,{show:a,leave:"duration-200",children:n("div",{className:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50",children:[e(p.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 transform transition-all",onClick:d,children:e("div",{className:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"})})}),e(p.Child,{as:l.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e("div",{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${m}`,children:o})})]})}),c)}function C({type:o="button",className:a="",processing:t,children:r,onClick:s}){return e("button",{type:o,onClick:s,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+a,disabled:t,children:r})}function U({className:o}){const[a,t]=l.exports.useState(!1),r=l.exports.useRef(),{data:s,setData:d,delete:i,processing:m,reset:c,errors:u}=b({password:""}),x=()=>{t(!0)},h=f=>{f.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>y(),onError:()=>r.current.focus(),onFinish:()=>c()})},y=()=>{t(!1),c()};return n("section",{className:`space-y-6 ${o}`,children:[n("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(g,{onClick:x,children:"Delete Account"}),e(D,{show:a,onClose:y,children:n("form",{onSubmit:h,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure your want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),n("div",{className:"mt-6",children:[e(k,{for:"password",value:"Password",className:"sr-only"}),e(N,{id:"password",type:"password",name:"password",ref:r,value:s.password,handleChange:f=>d("password",f.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(v,{message:u.password,className:"mt-2"})]}),n("div",{className:"mt-6 flex justify-end",children:[e(C,{onClick:y,children:"Cancel"}),e(g,{className:"ml-3",processing:m,children:"Delete Account"})]})]})})]})}export{U as default};