import{u as C,r as u,a as r,L as t,j as e,F as o}from"./app.cc97f0b6.js";import{Z as M}from"./index_responsive.03b87d75.js";function S(){const{auth:a,permissions:c,requestTopUp:d,requestWithdraw:h}=C().props,m=c?c.map(s=>s.name):"null",b=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon icon-tabler icon-tabler-menu-2",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M4 6l16 0"}),e("path",{d:"M4 12l16 0"}),e("path",{d:"M4 18l16 0"})]}),p=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon icon-tabler icon-tabler-x",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M18 6l-12 12"}),e("path",{d:"M6 6l12 12"})]}),w=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon icon-tabler icon-tabler-plus",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 5l0 14"}),e("path",{d:"M5 12l14 0"})]}),f=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon icon-tabler icon-tabler-minus",children:[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M5 12l14 0"})]}),[n,g]=u.exports.useState(!1),[i,x]=u.exports.useState(null),l=()=>{g(!n)},y=s=>{x(i===s?null:s)},N=n?"menu-extended":"menu-collapsed",k=n?"submenu-expanded":"submenu-collapsed",v=n?e(p,{}):e(b,{});return r("div",{id:"stickyMenu",className:"z-40 mx-4 fixed bottom-0 left-0 right-0 overflow-hidden transition-all duration-300 bg-amber-500 shadow-lg md:hidden rounded-2xl",children:[r("button",{id:"menuToggle",className:"relative flex items-center justify-center w-full py-3 font-semibold text-center text-white bg-amber-500",children:[a.user?r(t,{href:"/chat",className:"absolute left-4",children:[" ",e(M,{})]}):e(o,{}),"Menu",e("span",{onClick:l,id:"menuIcon",className:"absolute right-4",children:v})]}),e("div",{id:"menuContent",className:`overflow-y-auto bg-amber-500 ${N} transition-height`,children:r("ul",{className:"flex flex-col items-start justify-center px-8 leading-10",children:[e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/homereservasi",className:"text-white",children:[" ","Reservasi"]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/homekonstruksi",className:"text-white ",children:[" ","Konstruksi"]})}),a.user?r(o,{children:[e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/dashboard",className:"text-white",children:[" ","Dashboard"]})}),m.indexOf("lihat menu admin saldo")>-1&&r("li",{className:"justify-between w-full",children:[e("div",{className:"items-center ",children:r("button",{className:"flex items-center w-full py-2 text-white border-b border-gray-100 border-opacity-25 submenu-toggle",onClick:()=>y(1),children:[e("span",{className:"text-right submenu-icon",children:i===1?e(f,{}):e(w,{})}),r("span",{className:"inline-flex",children:["Admin Saldo"," "]}),e("span",{className:"items-end content-center w-10 h-10 ml-auto text-base text-center text-red-500 bg-white rounded-full ",children:d+h})]})}),i===1&&r("ul",{className:`pl-6 space-y-2 ${k}`,children:[e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/admindeposits",className:"flex justify-between text-white ",children:[e("span",{className:"inline-flex",children:"Admin Deposit"}),e("span",{className:"content-center w-10 h-10 text-base text-center text-red-500 bg-white rounded-full",children:d})]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/adminwithdraws",className:"flex justify-between text-white",children:[e("span",{className:"inline-flex",children:"Admin Withdraw"}),e("span",{className:"content-center w-10 h-10 ml-10 text-base text-center text-red-500 bg-white rounded-full",children:h})]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/adminplans",className:"text-white",children:[" ","Admin Perencanaan"]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:route("users.index"),className:"text-white",children:[" ","Admin User"]})})]})]}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/profile",className:"text-white",children:[" ","Profile"]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/wallets",className:"text-white",children:[" ","Saldo"]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/chat",className:"text-white",children:[" ","Chat"]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:e(t,{onClick:l,href:route("logout"),method:"post",as:"button",className:"text-white",children:"Log Out"})})]}):r(o,{children:[e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/login",className:"text-white",children:[" ","Masuk"]})}),e("li",{className:"w-full py-2 border-b border-gray-100 border-opacity-25 ",children:r(t,{onClick:l,href:"/register",className:"text-white",children:[" ","Daftar"]})})]})]})})]})}export{S as A};