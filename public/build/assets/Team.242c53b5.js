import{u as se,r as i,b as le,i as re,a as l,F as ne,j as t}from"./app.b397b200.js";import{I as N}from"./InfoModal.592f4b88.js";import{T as ie}from"./ThirdButton.4117333a.js";import{T as c}from"./ThirdButtonNoLink.9d2d582e.js";import"./TextAreaInput.cdfe9aa0.js";import"./ExclamationIcon.489e228c.js";import"./transition.2cdd9121.js";import"./dialog.d3f0e9cd.js";import"./use-event-listener.c4ff3453.js";import"./description.2145e020.js";function Ie({setIsOpenDialog:oe,model:d,resultteam:C}){var S;const{auth:M,flash_simple:R}=se().props,[ce,T]=i.exports.useState({}),r=d.model,{data:z,setData:_,get:de,post:B,processing:D,reset:me,errors:he}=le({}),[O,h]=i.exports.useState(!1),[g,p]=i.exports.useState(!1),[P,u]=i.exports.useState(!1),[j,$]=i.exports.useState(""),[ge,A]=i.exports.useState(""),[b,U]=i.exports.useState([]),[o,F]=i.exports.useState(1),[y,W]=i.exports.useState(0),[f,E]=i.exports.useState(0),J=e=>{T(e),A(e.id),$("Jadwal Reservasi Anda Pada : "+r.date+" Untuk Layanan "+r.reservationCounter.name+" Jam "+d.timeRange.timeRange+" Dengan Pekerja "+e.name),_({reservation_team_id:e.id,user_id:M.user.id,date:r.date,time:d.timeRange.timeRange}),h(!0)},K=e=>{p(!0),x(e,o),E(e.teamdetail[0].user_id)};i.exports.useEffect(()=>{g&&x(f,o)},[f,g,o]);const x=(e,a)=>{re.get(route("reservationrating.employeerating",f),{params:{page:a}}).then(s=>{U(s.data.data),W(s.data.last_page)}).catch(s=>{console.error(s)})},V=()=>{p(!1)},I=e=>{F(e),x(C,e)},Y=()=>{B(route("reservationCounters.storecustomer"),{onSuccess:()=>{R.type_simple==="error_saldo_kurang"&&(G(),k())}})},k=()=>{h(!1)},G=()=>{u(!0)},H=()=>{u(!1)};i.exports.useState(5);const L=e=>{if(typeof e!="string")return null;const a=e.split("/");if(a.length!==3)return null;const s=a[2],n=a[1],m=a[0];return`${s}-${n.padStart(2,"0")}-${m.padStart(2,"0")}`},v=(e,a)=>{const s=L(e),n=L(a);return s===n},Q=(e,a)=>r.offDay.some(n=>n.user_id===e&&v(n.date,a)),X=(e,a)=>Q(e,a),Z=(e,a)=>{const[s,n]=e.split(" - ").map(w=>new Date(`2000-01-01T${w}`)),[m,ae]=a.split(" - ").map(w=>new Date(`2000-01-01T${w}`));return s<ae&&n>m},q=(e,a)=>r.workBreak.some(n=>n.user_id===e&&Z(n.start+" - "+n.end,a)),ee=(e,a)=>q(e,a);r.offDay.some(e=>v(e.date,r.date)),r.offDay.some(e=>v(e.user_id,r.user_id));const te=e=>{_({...z,[e.target.id]:e.target.value})};return l(ne,{children:[l(N,{isOpenInfoDialog:g,setIsOpenInfoDialog:p,size:"2xl",closeButton:"false",title:"Review",children:[b.length>0?t("div",{children:b.map((e,a)=>t("div",{className:"relative w-full mx-auto",children:t("div",{className:"flex flex-col my-4 bg-white border rounded-lg",children:t("div",{className:"flex flex-col items-center justify-center flex-auto p-2",children:l("div",{className:"grid w-full grid-cols-12 gap-2",children:[t("div",{className:"col-span-12 mx-2",children:t("p",{className:"flex items-start text-left",children:e.comments})}),l("div",{className:"col-span-9 mx-2",children:[t("div",{className:"flex items-start cursor-pointer",children:[1,2,3,4,5].map(s=>t("div",{className:"w-5 h-5 relative",children:s<=e.star_rating?t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-auto text-yellow-500 fill-current",viewBox:"0 0 16 16",children:t("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})}):s-.95<e.star_rating?t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-auto text-yellow-500 fill-current",viewBox:"0 0 16 16",children:t("path",{d:"M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"})}):t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-auto text-yellow-500 fill-current",viewBox:"0 0 16 16",children:t("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})},s))}),l("span",{className:"flex items-start text-xs font-medium text-left text-slate-400",children:[e.star_rating?Math.round(e.star_rating*100)/100:0," ","out of 5 stars",t("br",{})]})]})]})})})},a))}):t("p",{children:"No reviews available."}),l("div",{className:"flex items-center mt-10 pagination gap-x-1",children:[l("button",{children:["Page ",o," of ",y]}),t("button",{className:"flex items-center justify-center w-12 bg-white border rounded-lg h-9",onClick:()=>I(o-1),disabled:o===1,children:"<<"}),t("button",{className:"flex items-center justify-center w-12 bg-white border rounded-lg h-9",onClick:()=>I(o+1),disabled:o===y,children:">>"})]}),t(c,{className:"mx-2 mt-2",color:"gray",onClick:V,children:"Close"})]}),l(N,{isOpenInfoDialog:O,setIsOpenInfoDialog:h,size:"2xl",closeButton:"false",title:"Sudah Yakin dengan Pilihan Anda ?",children:[" ",(S=r.question)==null?void 0:S.map((e,a)=>l("div",{className:"py-3",children:[t("label",{htmlFor:e.id,className:"block text-sm font-medium text-left text-gray-700",children:e.question}),t("div",{className:"mt-1",children:t("textarea",{id:e.id,name:e.id,rows:3,onChange:te,className:"block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"",required:"true",defaultValue:""},e.id)}),l("p",{className:"mt-2 text-sm text-left text-gray-500",children:["Masukan Keterangan ",e.question," ."]})]},e.id)),t("div",{className:"p-4 mt-8 mb-4 text-left border rounded-lg",children:t("p",{className:"mb-2 text-lg font-medium text-left",children:j})}),t(c,{processing:D,onClick:Y,children:"Simpan"}),t(c,{className:"mx-2 mt-2",color:"gray",onClick:k,children:"Close"})]}),l(N,{isOpenInfoDialog:P,setIsOpenInfoDialog:u,size:"2xl",closeButton:"false",title:"Saldo Tidak Mencukupi, Silakan Lakukan Top Up Saldo",children:[" ",t("div",{className:"p-4 mb-4 text-left border rounded-lg",children:t("p",{className:"mb-2 text-lg font-medium text-left"})}),t(ie,{processing:D,href:"/deposits/create",children:"Top Up"}),t(c,{className:"mx-2 mt-2",color:"gray",onClick:H,children:"Close"})]}),l("div",{className:"p-4 mb-4 text-left border rounded-lg",children:[l("h2",{children:["Team: ",r.reservationCounter.name]}),l("p",{children:["Tanggal: ",r.date]}),l("p",{children:["Waktu: ",d.timeRange.timeRange]}),l("p",{children:["Service duration:"," ",r.reservationCounter.service_duration," minutes"]})]}),t("p",{children:"Team Tersedia:"}),r.team.map((e,a)=>t("div",{className:"relative w-full mx-auto",children:t("div",{className:"flex flex-col my-4 bg-white border rounded-lg",children:t("div",{className:"flex flex-col items-center justify-center flex-auto p-2",children:l("div",{className:"grid w-full grid-cols-12 gap-2",children:[t("div",{className:"col-span-12 mx-2",children:t("p",{className:"flex items-start",children:e.name})}),l("div",{className:"col-span-9 mx-2",children:[t("div",{className:"flex items-start cursor-pointer",onClick:()=>K(e),children:[1,2,3,4,5].map(s=>t("div",{className:"w-5 h-5 relative",children:s<=e.ratings_avg_star_rating?t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-auto text-yellow-500 fill-current",viewBox:"0 0 16 16",children:t("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})}):s-.95<e.ratings_avg_star_rating?t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-auto text-yellow-500 fill-current",viewBox:"0 0 16 16",children:t("path",{d:"M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"})}):t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-auto text-yellow-500 fill-current",viewBox:"0 0 16 16",children:t("path",{d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})})},s))}),l("span",{className:"flex items-start text-xs font-medium text-left text-slate-400",children:[e.ratings_avg_star_rating?Math.round(e.ratings_avg_star_rating*100)/100:0," ","out of 5 stars",t("br",{}),"(",e.ratings_count?e.ratings_count:0," ","Reviews dari"," ",e.customers_count?e.customers_count:0," ","Customer)"]})]}),t("div",{className:"col-span-3",children:t("img",{className:"flex-shrink-0 inline-block rounded-full",src:e.media_id?`/storage/${e.media_id}/${e.file_name}`:"/storage/files/default/NoImage.svg",alt:"Image Description"})}),t("div",{className:"col-span-12",children:X(e.user_id,r.date)?t("div",{className:"col-span-12",children:t(c,{color:"secondary",children:"Libur"})}):ee(e.user_id,d.timeRange.timeRange)?t("div",{className:"col-span-12",children:t(c,{color:"secondary",children:"Istirahat"})}):t("div",{className:"col-span-12",children:t(c,{onClick:()=>J(e),children:"Pilih"})})})]})})})},a)),t("hr",{})]})}export{Ie as default};