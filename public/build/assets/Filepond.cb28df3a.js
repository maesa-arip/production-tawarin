import{u as y,r as h,a as F,j as o,H as E}from"./app.d0158df0.js";import{A as T}from"./App.f64a340e.js";import{C as w}from"./Container.eaed336f.js";import{F as C,r as S,p as j}from"./filepond-plugin-image-preview.esm.04b2ea6a.js";import{p as O,a as v}from"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./DropdownMenu.41ec8179.js";import"./clsx.m.256e9345.js";import"./transition.a8105c95.js";import"./use-event-listener.d35982f7.js";import"./index_responsive.476210bc.js";import"./Tawarin.08057ae7.js";import"./Aside.842274f4.js";S(O,j,v);function x({props:l,inputname:i,allowMultiple:n,maxFiles:p,required:d}){const{csrf_token:t}=y().props,[c,m]=h.exports.useState([]),u=async r=>{try{const e=JSON.parse(r),s=e[0],a=e[1],f=e[2],g=e[3];console.log(s),console.log(a),(await fetch("/upload/filepond/destroy",{method:"DELETE",headers:{"X-CSRF-TOKEN":t,"Content-Type":"application/json"},body:JSON.stringify({folder:s,filename:a,sessionfolder:f,sessionfilename:g})})).ok?console.log("Image deleted successfully"):console.log("Error deleting image")}catch(e){console.error("Error deleting image:",e)}};return F("div",{children:[o(E,{title:""}),o(w,{children:o(C,{files:c,onupdatefiles:m,allowMultiple:n,maxFiles:p,name:i,credits:"false",required:d,allowFileTypeValidation:"true",acceptedFileTypes:["image/png","image/jpeg","video/mp4"],allowReplace:!0,allowReorder:"true",server:{process:{url:"/upload/filepond/store",method:"POST",headers:{"X-CSRF-TOKEN":t},withCredentials:!1,timeout:7e3,onerror:null},revert:(r,e,s)=>{u(r),e()}},labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'})})]})}x.layout=l=>o(T,{children:l});export{x as default};