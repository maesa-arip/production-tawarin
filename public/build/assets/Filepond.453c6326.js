import{u as y,r as h,a as F,j as o,H as E}from"./app.cc97f0b6.js";import{A as T}from"./App.dc54f840.js";import{C as w}from"./Container.a505e398.js";import{F as C,r as S,p as j}from"./filepond-plugin-image-preview.esm.83e614d4.js";import{p as O,a as v}from"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./DropdownMenu.44051cf3.js";import"./clsx.m.256e9345.js";import"./transition.08209d82.js";import"./use-event-listener.05e838ad.js";import"./index_responsive.03b87d75.js";import"./Tawarin.08057ae7.js";import"./Aside.3a232df6.js";S(O,j,v);function x({props:l,inputname:i,allowMultiple:n,maxFiles:p,required:d}){const{csrf_token:t}=y().props,[c,m]=h.exports.useState([]),u=async r=>{try{const e=JSON.parse(r),s=e[0],a=e[1],f=e[2],g=e[3];console.log(s),console.log(a),(await fetch("/upload/filepond/destroy",{method:"DELETE",headers:{"X-CSRF-TOKEN":t,"Content-Type":"application/json"},body:JSON.stringify({folder:s,filename:a,sessionfolder:f,sessionfilename:g})})).ok?console.log("Image deleted successfully"):console.log("Error deleting image")}catch(e){console.error("Error deleting image:",e)}};return F("div",{children:[o(E,{title:""}),o(w,{children:o(C,{files:c,onupdatefiles:m,allowMultiple:n,maxFiles:p,name:i,credits:"false",required:d,allowFileTypeValidation:"true",acceptedFileTypes:["image/png","image/jpeg","video/mp4"],allowReplace:!0,allowReorder:"true",server:{process:{url:"/upload/filepond/store",method:"POST",headers:{"X-CSRF-TOKEN":t},withCredentials:!1,timeout:7e3,onerror:null},revert:(r,e,s)=>{u(r),e()}},labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'})})]})}x.layout=l=>o(T,{children:l});export{x as default};