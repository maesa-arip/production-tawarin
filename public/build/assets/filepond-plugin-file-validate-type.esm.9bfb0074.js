/*!
 * FilePondPluginImageExifOrientation 1.0.11
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const x=o=>/^image\/jpeg/.test(o.type),d={JPEG:65496,APP1:65505,EXIF:1165519206,TIFF:18761,Orientation:274,Unknown:65280},f=(o,a,s=!1)=>o.getUint16(a,s),F=(o,a,s=!1)=>o.getUint32(a,s),M=o=>new Promise((a,s)=>{const p=new FileReader;p.onload=function(E){const A=new DataView(E.target.result);if(f(A,0)!==d.JPEG){a(-1);return}const u=A.byteLength;let n=2;for(;n<u;){const c=f(A,n);if(n+=2,c===d.APP1){if(F(A,n+=2)!==d.EXIF)break;const l=f(A,n+=6)===d.TIFF;n+=F(A,n+4,l);const w=f(A,n,l);n+=2;for(let T=0;T<w;T++)if(f(A,n+T*12,l)===d.Orientation){a(f(A,n+T*12+8,l));return}}else{if((c&d.Unknown)!==d.Unknown)break;n+=f(A,n)}}a(-1)},p.readAsArrayBuffer(o.slice(0,64*1024))}),G=(()=>typeof window!="undefined"&&typeof window.document!="undefined")(),S=()=>G,C="data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=";let B;const g=S()?new Image:{};g.onload=()=>B=g.naturalWidth>g.naturalHeight;g.src=C;const R=()=>B,N=({addFilter:o,utils:a})=>{const{Type:s,isFile:p}=a;return o("DID_LOAD_ITEM",(E,{query:A})=>new Promise((u,n)=>{const c=E.file;if(!p(c)||!x(c)||!A("GET_ALLOW_IMAGE_EXIF_ORIENTATION")||!R())return u(E);M(c).then(l=>{E.setMetadata("exif",{orientation:l}),u(E)})})),{options:{allowImageExifOrientation:[!0,s.BOOLEAN]}}},Y=typeof window!="undefined"&&typeof window.document!="undefined";Y&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:N}));/*!
 * FilePondPluginFileValidateType 1.2.8
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */const U=({addFilter:o,utils:a})=>{const{Type:s,isString:p,replaceInString:E,guesstimateMimeType:A,getExtensionFromFilename:u,getFilenameFromURL:n}=a,c=(t,e)=>{const i=(/^[^/]+/.exec(t)||[]).pop(),r=e.slice(0,-2);return i===r},l=(t,e)=>t.some(i=>/\*$/.test(i)?c(e,i):i===e),w=t=>{let e="";if(p(t)){const i=n(t),r=u(i);r&&(e=A(r))}else e=t.type;return e},T=(t,e,i)=>{if(e.length===0)return!0;const r=w(t);return i?new Promise((I,L)=>{i(t,r).then(_=>{l(e,_)?I():L()}).catch(L)}):l(e,r)},D=t=>e=>t[e]===null?!1:t[e]||e;return o("SET_ATTRIBUTE_TO_OPTION_MAP",t=>Object.assign(t,{accept:"acceptedFileTypes"})),o("ALLOW_HOPPER_ITEM",(t,{query:e})=>e("GET_ALLOW_FILE_TYPE_VALIDATION")?T(t,e("GET_ACCEPTED_FILE_TYPES")):!0),o("LOAD_FILE",(t,{query:e})=>new Promise((i,r)=>{if(!e("GET_ALLOW_FILE_TYPE_VALIDATION")){i(t);return}const I=e("GET_ACCEPTED_FILE_TYPES"),L=e("GET_FILE_VALIDATE_TYPE_DETECT_TYPE"),_=T(t,I,L),y=()=>{const P=I.map(D(e("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES_MAP"))).filter(O=>O!==!1),m=P.filter(function(O,h){return P.indexOf(O)===h});r({status:{main:e("GET_LABEL_FILE_TYPE_NOT_ALLOWED"),sub:E(e("GET_FILE_VALIDATE_TYPE_LABEL_EXPECTED_TYPES"),{allTypes:m.join(", "),allButLastType:m.slice(0,-1).join(", "),lastType:m[P.length-1]})}})};if(typeof _=="boolean")return _?i(t):y();_.then(()=>{i(t)}).catch(y)})),{options:{allowFileTypeValidation:[!0,s.BOOLEAN],acceptedFileTypes:[[],s.ARRAY],labelFileTypeNotAllowed:["File is of invalid type",s.STRING],fileValidateTypeLabelExpectedTypes:["Expects {allButLastType} or {lastType}",s.STRING],fileValidateTypeLabelExpectedTypesMap:[{},s.OBJECT],fileValidateTypeDetectType:[null,s.FUNCTION]}}},V=typeof window!="undefined"&&typeof window.document!="undefined";V&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:U}));export{U as a,N as p};