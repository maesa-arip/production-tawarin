import{u as wa,r as i,b as Ca,a as n,j as a,H as Fa}from"./app.a40e8af1.js";import{A as ja}from"./App.5ba39158.js";import{C as Aa}from"./Container.58098ce8.js";import"./DatePicker.f9d0eed4.js";import{T as g}from"./helper.e37a4314.js";import{B as Sa}from"./Button.5517d3de.js";import C from"./Filepond.f29d1d5d.js";import{L as _a}from"./ListBoxPage.f68beb61.js";import"./index.esm.d741657c.js";import{T as H}from"./ThirdButton.5d35633c.js";import{b as La}from"./index.esm.09fe2636.js";import{M as Ma}from"./Map.6ee3c798.js";import"./DropdownMenu.bdd72543.js";import"./clsx.m.256e9345.js";import"./transition.e89d00d7.js";import"./use-event-listener.8d22d876.js";import"./index_responsive.6b353536.js";import"./Tawarin.08057ae7.js";import"./Aside.b5452134.js";import"./filepond-plugin-image-preview.esm.91a91af8.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./listbox.1624c71f.js";import"./use-computed.97e3004e.js";import"./use-controllable.5e5d1bc1.js";import"./SelectorIcon.a07d3d2e.js";import"./esm.3e86054a.js";function Pa({plan_master_checkboxs:y,plan_master_texts:G,plan_categories:K,plan_master_rooms:O}){var _,L,M,P,D,I,R,B;const{allSessions:W}=wa().props,[h,J]=i.exports.useState(""),[p,T]=i.exports.useState(""),[x,U]=i.exports.useState(""),[f,z]=i.exports.useState(""),[b,E]=i.exports.useState(""),[N,V]=i.exports.useState(""),[v,q]=i.exports.useState(0),[F,Q]=i.exports.useState(0),[j,X]=i.exports.useState(0);console.log(W);const Y=e=>{Q(e.target.value),d({...l,[e.target.id]:e.target.value})},Z=e=>{X(e.target.value),d({...l,[e.target.id]:e.target.value})};i.exports.useEffect(()=>{d({...l,luas_tanah:(parseFloat(F)*parseFloat(j)).toFixed(2)})},[F,j]);const $=e=>{q(e.target.value),d({...l,[e.target.id]:e.target.value})};i.exports.useEffect(()=>{T(v*4e6),U(v*4e6*1/100),z(v*4e6*3/100)},[v]);const aa=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(p),ea=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(x),na=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(f),ta=e=>{J(e.target.value),d({...l,[e.target.id]:e.target.value})},la=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(h),sa=e=>{E(e.target.value),d({...l,[e.target.id]:e.target.value})},ia=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(b),ra=e=>{V(e.target.value),d({...l,[e.target.id]:e.target.value})},da=new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(N),{data:l,setData:d,post:ma,processing:oa,reset:ca,errors:t}=Ca({}),c=e=>{d({...l,[e.target.id]:e.target.value})},ua=[{name:"Pilih"}],[ga,ha]=i.exports.useState(ua[0]),pa=e=>{d({...l,plan_category_id:e.id})},xa=e=>{e.preventDefault(),ma(route("plans.store"),{data:l,onSuccess:()=>{ca()}})},[u,k]=i.exports.useState([{name:"",count:""}]),A=(e,s)=>{let r=[...u];r[e][s.target.name]=s.target.value,k(r)},fa=e=>{e.preventDefault();let s={name:"",count:""};k([...u,s])},ba=e=>{let s=[...u];s.splice(e,1),k(s)};i.exports.useEffect(()=>{d({...l,rooms:u})},[u]);const[Da,Na]=i.exports.useState(null),[m,S]=i.exports.useState({formattedAddress:"",street:"",village:"",subdistrict:"",district:"",regency:"",country:""}),va="",ya="",ka=({location:e,updatedLocationDetails:s,formattedAddress:r})=>{Na(e),S(w=>({...w,...s,formattedAddress:r})),d(w=>({...w,...s,formattedAddress:r,lat:e.lat,lng:e.lng}))},o=e=>{const{name:s,value:r}=e.target;S({...m,[s]:r}),d({...l,[s]:r})};return n("div",{children:[a(Fa,{title:"Plan Create"}),a(Aa,{children:n("form",{onSubmit:xa,children:[a("div",{className:"mt-10 sm:mt-0",children:n("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[a("div",{className:"md:col-span-1",children:n("div",{className:"px-4 sm:px-0",children:[a("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Data Perencanaan"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Masukan data lengkap perencanaanmu disini."})]})}),a("div",{className:"mt-5 md:mt-0 md:col-span-2",children:a("div",{className:"overflow-hidden shadow sm:rounded-md",children:a("div",{className:"px-4 py-5 bg-white sm:p-6",children:n("div",{className:"grid grid-cols-12 gap-6",children:[n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nama Perencanaan"}),a("div",{className:"flex mt-1 rounded-md",children:n("div",{className:"flex items-center w-full px-2 bg-white border border-gray-300 rounded-md shadow-sm gap-x-0 sm:text-sm focus-within:border-indigo-500 focus-within:ring-indigo-500 focus-within:ring-1",children:[a("div",{className:"inline-flex items-center text-sm text-gray-500 rounded-l-md",children:"Perencanaan"}),a("input",{type:"text",name:"name",value:(_=l.name)!=null?_:"",onChange:c,id:"name",autoComplete:"off",className:"w-full border-0 focus:ring-0 form-text",placeholder:""})]})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.name})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"plan_category_id",className:"block text-sm font-medium text-gray-700",children:"Pilih Kategori"}),a(_a,{ShouldMap:K,selected:ga,onChange:e=>{pa(e),ha(e)}}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.plan_category_id})]}),n("div",{className:"col-span-12 md:col-span-4",children:[a("label",{htmlFor:"jangka_waktu_penawaran",className:"block text-sm font-medium text-gray-700",children:"Jangka Waktu Penawaran (Hari)"}),a("input",{type:"number",name:"jangka_waktu_penawaran",id:"jangka_waktu_penawaran",value:(L=l.jangka_waktu_penawaran)!=null?L:"",onChange:c,autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.jangka_waktu_penawaran})]}),n("div",{className:"col-span-12 md:col-span-4",children:[a("label",{htmlFor:"jangka_waktu_pelaksanaan",className:"block text-sm font-medium text-gray-700",children:"Jangka Waktu Pelaksanaan (Hari)"}),a("input",{type:"number",name:"jangka_waktu_pelaksanaan",id:"jangka_waktu_pelaksanaan",value:(M=l.jangka_waktu_pelaksanaan)!=null?M:"",onChange:c,autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.jangka_waktu_pelaksanaan})]}),n("div",{className:"col-span-12 md:col-span-4",children:[a("label",{htmlFor:"jumlah_revisi",className:"block text-sm font-medium text-gray-700",children:"Jumlah Revisi"}),a("input",{type:"number",name:"jumlah_revisi",id:"jumlah_revisi",value:(P=l.jumlah_revisi)!=null?P:"",onChange:c,min:"1",max:"5",autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.jumlah_revisi})]}),n("div",{className:"col-span-12 md:col-span-4",children:[a("label",{htmlFor:"panjang",className:"block text-sm font-medium text-gray-700",children:"Panjang Tanah M"}),a("input",{type:"number",name:"panjang",id:"panjang",value:(D=l.panjang)!=null?D:"",onChange:Y,autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t.panjang&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.panjang})]}),n("div",{className:"col-span-12 md:col-span-4",children:[n("label",{htmlFor:"lebar",className:"block text-sm font-medium text-gray-700",children:["Lebar Tanah M",a("sup",{})]}),a("input",{type:"number",name:"lebar",id:"lebar",value:(I=l.lebar)!=null?I:"",onChange:Z,autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t.lebar&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.lebar})]}),n("div",{className:"col-span-12 md:col-span-4",children:[n("label",{htmlFor:"luas_tanah",className:"block text-sm font-medium text-gray-700",children:["Luas Tanah M",a("sup",{children:"2"})]}),a("input",{type:"number",name:"luas_tanah",id:"luas_tanah",readOnly:!0,value:(R=l.luas_tanah)!=null?R:"",autoComplete:"off",className:"block w-full mt-1 border-gray-500 rounded-md shadow-sm ring-gray-500 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"}),t.luas_tanah&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.luas_tanah})]}),n("div",{className:"col-span-12 md:col-span-4",children:[n("label",{htmlFor:"luas_bangunan",className:"block text-sm font-medium text-gray-700",children:["Perkiraan Luas Bangunan M",a("sup",{children:"2"})]}),a("input",{type:"number",name:"luas_bangunan",id:"luas_bangunan",value:(B=l.luas_bangunan)!=null?B:"",onChange:$,autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t.luas_bangunan&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.luas_bangunan})]}),n("div",{className:"block w-full col-span-12 px-2 py-1 mt-1 border-2 border-gray-500 rounded-md shadow-sm ring-gray-500 sm:text-sm md:col-span-6",children:[n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"acuan_anggaran",className:"block text-sm font-medium text-gray-700",children:"Acuan Anggaran Proyek"}),n("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[p&&aa," ",a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:p&&"("+g(p)+" Rupiah)"})]})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"acuan_anggaran",className:"block text-sm font-medium text-gray-700",children:"Acuan Anggaran Perencanaan (Dari)"}),n("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[x&&ea," ",a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:x&&"("+g(x)+" Rupiah)"})]})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"acuan_anggaran",className:"block text-sm font-medium text-gray-700",children:"Acuan Anggaran Perencanan (Sampai)"}),n("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[f&&na," ",a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:f&&"("+g(f)+" Rupiah)"})]})]})]}),a("div",{className:"col-span-12 mt-5 md:mt-0 md:col-span-6",children:a("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:a("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:n("div",{children:[a("label",{className:"block text-sm font-medium text-gray-700",children:"Denah Lokasi Beserta Ukuran Lahan (Max 5)"}),a("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:n("div",{className:"w-full text-center",children:[a("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:a("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),a(C,{inputname:"denahlokasiukuran",allowMultiple:!0,maxFiles:"5"}),n("div",{className:"flex justify-center text-sm text-gray-600",children:[a("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:a("span",{children:"Upload a file"})}),a("p",{className:"pl-1",children:"or drag and drop"})]}),a("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})})}),a("div",{className:"col-span-12 mt-5 md:mt-0 md:col-span-6",children:a("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:a("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:n("div",{children:[a("label",{className:"block text-sm font-medium text-gray-700",children:"Foto Kondisi Lahan Saat Ini (Max 5)"}),a("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:n("div",{className:"w-full text-center",children:[a("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:a("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),a(C,{inputname:"kondisisaatini",allowMultiple:!0,maxFiles:"5"}),n("div",{className:"flex justify-center text-sm text-gray-600",children:[a("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:a("span",{children:"Upload a file"})}),a("p",{className:"pl-1",children:"or drag and drop"})]}),a("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})})})}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"anggaran_proyek",className:"block text-sm font-medium text-gray-700",children:"Anggaran Proyek"}),a("input",{type:"number",name:"anggaran_proyek",id:"anggaran_proyek",onChange:ta,onWheel:e=>e.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t.anggaran_proyek&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.anggaran_proyek}),n("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[h&&la," ",a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:h&&"("+g(h)+" Rupiah)"})]})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"dari_anggaran",className:"block text-sm font-medium text-gray-700",children:"Anggaran Perencanaan (dari)"}),a("input",{type:"number",name:"dari_anggaran",id:"dari_anggaran",onChange:sa,onWheel:e=>e.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t.dari_anggaran&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.dari_anggaran}),n("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[b&&ia," ",a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:b&&"("+g(b)+" Rupiah)"})]})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"sampai_anggaran",className:"block text-sm font-medium text-gray-700",children:"Anggaran Perencanaan (sampai)"}),a("input",{type:"number",name:"sampai_anggaran",id:"sampai_anggaran",onChange:ra,onWheel:e=>e.target.blur(),autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"}),t.sampai_anggaran&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.sampai_anggaran}),n("div",{className:"inline mt-1 ml-1 text-xs font-semibold text-indigo-500",children:[N&&da," ",a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-indigo-500",children:N&&"("+g(N)+" Rupiah)"})]})]})]})})})})]})}),a("div",{className:"hidden sm:block","aria-hidden":"true",children:a("div",{className:"py-5",children:a("div",{className:"border-t border-gray-200"})})}),a("div",{className:"mt-10 sm:mt-0",children:n("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[a("div",{className:"md:col-span-1",children:n("div",{className:"px-4 sm:px-0",children:[a("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Alamat Proyek"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Masukan data lengkap alamat proyekmu disini."})]})}),a("div",{className:"mt-0 md:col-span-2",children:a("div",{className:"overflow-hidden shadow sm:rounded-md",children:a("div",{className:"p-4 bg-white md:px-6",children:a("div",{className:"grid grid-cols-12 gap-6",children:a("div",{className:"col-span-12 mt-5 md:mt-0",children:a("div",{children:n("div",{className:"w-full",children:[n("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-12 h-12 mx-auto text-gray-400 icon icon-tabler icon-tabler-map-2",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[a("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"}),a("path",{d:"M9 4v13"}),a("path",{d:"M15 7v5.5"}),a("path",{d:"M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"}),a("path",{d:"M19 18v.01"})]}),a(Ma,{onLocationSelect:ka,lat:va,lng:ya}),n("div",{className:"grid grid-cols-12 gap-x-6",children:[n("div",{className:"col-span-12",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Lokasi Otomatis"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"formattedAddress",value:m.formattedAddress,onChange:o,readOnly:!0,className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.formattedAddress})]}),n("div",{className:"col-span-12 mt-2 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nomor"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"street",value:m.street,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.street})]}),n("div",{className:"col-span-12 mt-2 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Jalan/Gang"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"route",value:m.route,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.route})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Desa"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"village",value:m.village,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.village})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Kecamatan"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"subdistrict",value:m.subdistrict,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.subdistrict})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Kabupaten/Kota"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"district",value:m.district,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.district})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Provinsi"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"regency",value:m.regency,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.regency})]}),n("div",{className:"col-span-12 md:col-span-6",children:[a("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Negara"}),a("div",{className:"flex rounded-md",children:a("input",{type:"text",name:"country",value:m.country,onChange:o,readOnly:!0,className:"block w-full mt-1 mb-4 border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"})}),t&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.country})]})]})]})})})})})})})]})}),a("div",{className:"hidden sm:block","aria-hidden":"true",children:a("div",{className:"py-5",children:a("div",{className:"border-t border-gray-200"})})}),a("div",{className:"mt-10 sm:mt-0",children:n("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[a("div",{className:"md:col-span-1",children:n("div",{className:"px-4 sm:px-0",children:[a("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Kebutuhan Perencanaan"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Silakan centang dan isi kebutuhan perencanaanmu, agar para konsultan yang menawar bisa menyiapkan data sesuai dengan kebutuhanmu."})]})}),a("div",{className:"mt-5 md:mt-0 md:col-span-2",children:a("div",{className:"overflow-hidden shadow sm:rounded-md",children:n("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:[y.map((e,s)=>{var r;return n("div",{className:"flex items-center justify-between px-3 py-4 rounded-md shadow",children:[e.name,n("label",{htmlFor:e.slug,className:"relative inline-flex items-center cursor-pointer",children:[a("input",{onChange:c,value:(r=l.name)!=null?r:"",type:"checkbox",id:e.slug,name:e.slug,className:"sr-only peer"},e.id),a("div",{className:"w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-blue-600  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 peer-after:ring-indigo-500"})]})]},e.id)}),G.map((e,s)=>n("div",{children:[a("label",{htmlFor:e.slug,className:"block text-sm font-medium text-gray-700",children:e.name}),a("div",{className:"mt-1",children:a("textarea",{id:e.slug,name:e.slug,rows:3,onChange:c,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"",defaultValue:""},e.id)}),n("p",{className:"mt-2 text-sm text-gray-500",children:["Masukan Keterangan"," ",e.name," ","Bila diperlukan."]})]},e.id))]})})})]})}),a("div",{className:"hidden sm:block","aria-hidden":"true",children:a("div",{className:"py-5",children:a("div",{className:"border-t border-gray-200"})})}),a("div",{className:"mt-10 sm:mt-0",children:n("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[a("div",{className:"md:col-span-1",children:n("div",{className:"px-4 sm:px-0",children:[a("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Kebutuhan Ruang"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Silakan centang dan isi kebutuhan perencanaanmu, agar para konsultan yang menawar bisa menyiapkan data sesuai dengan kebutuhanmu."})]})}),a("div",{className:"mt-5 md:mt-0 md:col-span-2",children:a("div",{className:"overflow-hidden shadow sm:rounded-md",children:a("div",{className:"grid grid-cols-12 py-5 bg-white gap-y-8",children:O.map((e,s)=>n("div",{className:"col-span-12 px-6 md:col-span-6 lg:col-span-4",children:[a("label",{htmlFor:e.slug,className:"block text-sm font-medium text-gray-700",children:e.name}),n("div",{className:"mt-1",children:[a("input",{type:"number",id:e.slug,name:e.slug,onChange:c,autoComplete:"off",className:"block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},e.id),t.plan_master_room&&a("span",{className:"inline mt-1 ml-1 text-xs italic font-semibold text-pink-500",children:t.plan_master_room})]})]},e.id))})})})]})}),a("div",{className:"hidden sm:block","aria-hidden":"true",children:a("div",{className:"py-5",children:a("div",{className:"border-t border-gray-200"})})}),a("div",{className:"mt-10 sm:mt-0",children:n("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[a("div",{className:"md:col-span-1",children:n("div",{className:"px-4 sm:px-0",children:[a("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Kebutuhan Ruang Lainnya"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Silakan masukan kebutuhan ruanganmu jika belum ada dipilihan diatas."})]})}),a("div",{className:"mt-5 md:mt-0 md:col-span-2",children:a("div",{className:"overflow-hidden shadow sm:rounded-md",children:n("div",{className:"px-4 py-5 bg-white sm:p-6",children:[n("div",{className:"mb-4 justify-items-start",children:[n("div",{className:"flex my-2",children:[a("label",{className:"block w-full text-sm font-medium text-gray-700",children:"Nama Kebutuhan Ruangan"}),a("label",{className:"block w-full text-sm font-medium text-gray-700",children:"Jumlah Ruangan"}),a("label",{className:"inline-flex items-center text-sm font-medium text-gray-700 px-7"})]}),u.map((e,s)=>n("div",{className:"flex my-4",children:[a("input",{type:"text",name:"name",value:e.name,autoComplete:"off",className:"block w-full mr-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:r=>A(s,r)}),a("input",{type:"number",name:"count",value:e.count,autoComplete:"off",className:"block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onChange:r=>A(s,r)}),a(H,{color:"red",className:"ml-4",onClick:()=>ba(s),children:a(La,{className:"w-4 h-4"})})]},s))]}),a(H,{onClick:fa,children:"Tambah"})]})})})]})}),a("div",{className:"hidden sm:block","aria-hidden":"true",children:a("div",{className:"py-5",children:a("div",{className:"border-t border-gray-200"})})}),a("div",{className:"mt-10 sm:mt-0",children:n("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[a("div",{className:"md:col-span-1",children:n("div",{className:"px-4 sm:px-0",children:[a("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Gambar Perencanaan"}),a("p",{className:"mt-1 text-sm text-gray-600",children:"Sertakan contoh gambar rumah yang disukai guna memudahkan kondultan membuat desain sesuai keinginanmu."})]})}),a("div",{className:"mt-5 md:mt-0 md:col-span-2",children:n("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[a("div",{className:"px-4 py-5 space-y-6 bg-white sm:p-6",children:n("div",{children:[a("label",{className:"block text-sm font-medium text-gray-700",children:"Contoh Gambar Rumah yang disukai (Max 5)"}),a("div",{className:"flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md",children:n("div",{className:"w-full text-center",children:[a("svg",{className:"w-12 h-12 mx-auto text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:a("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),a(C,{inputname:"document",allowMultiple:!0,maxFiles:"5"}),n("div",{className:"flex justify-center text-sm text-gray-600",children:[a("label",{htmlFor:"file-upload",className:"relative font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:a("span",{children:"Upload a file"})}),a("p",{className:"pl-1",children:"or drag and drop"})]}),a("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 10MB"})]})})]})}),a("div",{className:"px-4 py-3 text-right bg-gray-50 sm:px-6",children:a(Sa,{processing:oa,children:"Simpan"})})]})})]})})]})})]})}Pa.layout=y=>a(ja,{children:y});export{Pa as default};