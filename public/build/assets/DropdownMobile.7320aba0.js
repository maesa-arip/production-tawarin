import{R as f,r as a,a as e,j as u,F as d,L as m}from"./app.1019088c.js";import{t as x}from"./transition.25b01003.js";const c=f.createContext(),s=({children:t})=>{const[r,o]=a.exports.useState(!1),n=()=>{o(i=>!i)};return e(c.Provider,{value:{open:r,setOpen:o,toggleOpen:n},children:e("div",{className:"relative",children:t})})},h=({children:t})=>{const{open:r,setOpen:o,toggleOpen:n}=a.exports.useContext(c);return u(d,{children:[e("div",{onClick:n,children:t}),r&&e("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},v=({align:t="right",width:r="full",contentClasses:o="py-1 bg-white dark:bg-gray-700",children:n})=>{const{open:i,setOpen:p}=a.exports.useContext(c);let l="origin-top";t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0");let g="";return r==="48"&&(g="w-full"),e(d,{children:e(x,{as:a.exports.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${g}`,onClick:()=>p(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:n})})})})},y=({href:t,method:r,as:o,children:n})=>e(m,{href:t,method:r,as:o,className:"block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800",children:n});s.Trigger=h;s.Content=v;s.Link=y;var C=s;export{C as D};