import{u as M,r as h,j as G,a as w,H as b}from"./app.1019088c.js";import{A as j}from"./App.cde4939e.js";import{C as N}from"./Container.bdbfb075.js";import{F as Y,r as V,p as U}from"./filepond-plugin-image-preview.esm.10e1ee58.js";import"./Navbar.e4292fe9.js";import"./XIcon.83a578e5.js";import"./clsx.m.256e9345.js";import"./use-flags.dd456e98.js";import"./keyboard.ebf1b7b9.js";import"./transition.25b01003.js";import"./DropdownMenu.3cfd1858.js";import"./hidden.e885a7de.js";import"./description.167b4c10.js";import"./Tawarin.08057ae7.js";import"./Dropdown.409d1038.js";import"./index.c6f58445.js";/*!
 * FilePondPluginImageExifOrientation 1.0.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const k=o=>/^image\/jpeg/.test(o.type),f={JPEG:65496,APP1:65505,EXIF:1165519206,TIFF:18761,Orientation:274,Unknown:65280},T=(o,r,A=!1)=>o.getUint16(r,A),x=(o,r,A=!1)=>o.getUint32(r,A),v=o=>new Promise((r,A)=>{const d=new FileReader;d.onload=function(p){const i=new DataView(p.target.result);if(T(i,0)!==f.JPEG){r(-1);return}const E=i.byteLength;let n=2;for(;n<E;){const c=T(i,n);if(n+=2,c===f.APP1){if(x(i,n+=2)!==f.EXIF)break;const a=T(i,n+=6)===f.TIFF;n+=x(i,n+4,a);const g=T(i,n,a);n+=2;for(let u=0;u<g;u++)if(T(i,n+u*12,a)===f.Orientation){r(T(i,n+u*12+8,a));return}}else{if((c&f.Unknown)!==f.Unknown)break;n+=T(i,n)}}r(-1)},d.readAsArrayBuffer(o.slice(0,64*1024))}),W=(()=>typeof window!="undefined"&&typeof window.document!="undefined")(),X=()=>W,J="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";let D;const P=X()?new Image:{};P.onload=()=>D=P.naturalWidth>P.naturalHeight;P.src=J;const $=()=>D,S=({addFilter:o,utils:r})=>{const{Type:A,isFile:d}=r;return o("DID_LOAD_ITEM",(p,{query:i})=>new Promise((E,n)=>{const c=p.file;if(!d(c)||!k(c)||!i("GET_ALLOW_IMAGE_EXIF_ORIENTATION")||!$())return E(p);v(c).then(a=>{p.setMetadata("exif",{orientation:a}),E(p)})})),{options:{allowImageExifOrientation:[!0,A.BOOLEAN]}}},H=typeof window!="undefined"&&typeof window.document!="undefined";H&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:S}));/*!
 * FilePondPluginFileValidateType 1.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const R=({addFilter:o,utils:r})=>{const{Type:A,isString:d,replaceInString:p,guesstimateMimeType:i,getExtensionFromFilename:E,getFilenameFromURL:n}=r,c=(t,e)=>{const s=(/^[^/]+/.exec(t)||[]).pop(),l=e.slice(0,-2);return s===l},a=(t,e)=>t.some(s=>/\*$/.test(s)?c(e,s):s===e),g=t=>{let e="";if(d(t)){const s=n(t),l=E(s);l&&(e=i(l))}else e=t.type;return e},u=(t,e,s)=>{if(e.length===0)return!0;const l=g(t);return s?new Promise((_,I)=>{s(t,l).then(m=>{a(e,m)?_():I()}).catch(I)}):a(e,l)},O=t=>e=>t[e]===null?!1:t[e]||e;return o("SET_ATTRIBUTE_TO_OPTION_MAP",t=>Object.assign(t,{accept:"acceptedFileTypes"})),o("ALLOW_HOPPER_ITEM",(t,{query:e})=>e("GET_ALLOW_FILE_TYPE_VALIDATION")?u(t,e("GET_ACCEPTED_FILE_TYPES")):!0),o("LOAD_FILE",(t,{query:e})=>new Promise((s,l)=>{if(!e("GET_ALLOW_FILE_TYPE_VALIDATION")){s(t);return}const _=e("GET_ACCEPTED_FILE_TYPES"),I=e("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),m=u(t,_,I),B=()=>{const L=_.map(O(e("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter(F=>F!==!1),y=L.filter(function(F,C){return L.indexOf(F)===C});l({status:{main:e("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:p(e("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:y.join(", "),allButLastType:y.slice(0,-1).join(", "),lastType:y[L.length-1]})}})};if(typeof m=="boolean")return m?s(t):B();m.then(()=>{s(t)}).catch(B)})),{options:{allowFileTypeValidation:[!0,A.BOOLEAN],acceptedFileTypes:[[],A.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",A.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",A.STRING],fileValidateTypeLabelExpectedTypesMap:[{},A.OBJECT],fileValidateTypeDetectType:[null,A.FUNCTION]}}},Q=typeof window!="undefined"&&typeof window.document!="undefined";Q&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:R}));V(S,U,R);function K({props:o,inputname:r,allowMultiple:A,maxFiles:d,required:p}){const{csrf_token:i}=M().props,[E,n]=h.exports.useState([]);return h.exports.useState([{source:["http://192.168.1.6:8000/storage/26/1759718426953396.jpg"],options:{type:"local"}}]),h.exports.useState(["http://192.168.1.6:8000/storage/26/1759718426953396.jpg","http://192.168.1.6:8000/storage/28/1759718567338104.png"]),G("div",{children:[w(b,{title:""}),w(N,{children:w(Y,{files:E,onupdatefiles:n,allowMultiple:A,maxFiles:d,name:r,credits:"false",required:p,allowFileTypeValidation:"true",acceptedFileTypes:["image/png","image/jpeg","video/mp4"],allowReplace:!0,allowReorder:"true",server:{load:(c,a,g,u,O,t)=>{var e=new Request(c);fetch(e).then(function(s){s.blob().then(function(l){a(l)})})},process:{url:"/upload/filepond/store",method:"POST",headers:{"X-CSRF-TOKEN":i},withCredentials:!1,timeout:7e3,onerror:null},options:{type:"local"}},labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'})})]})}K.layout=o=>w(j,{children:o});export{K as default};