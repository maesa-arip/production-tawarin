import{b as p,j as e}from"./app.b397b200.js";import c from"./Form.2b4530a1.js";import"./InputLabel.973a5ddd.js";import"./PrimaryButton.72a3ad3f.js";import"./SecondaryButton.cae4657c.js";import"./TextInput.0219e41e.js";import"./TextInputCheckbox.eaf8b823.js";import"./TextInputRadio.37292503.js";function d({setIsOpenAddDialog:t,teamheader:m,counters:s}){const{data:o,setData:a,post:n,reset:i,errors:u}=p({name:""});return e("form",{onSubmit:r=>{r.preventDefault(),n(route("reservation.store_team_layanan"),{data:o,onSuccess:()=>{i(),t(!1)}})},children:e(c,{errors:u,data:o,teamheader:m,counters:s,setData:a,submit:"Simpan",closeButton:r=>t(!1)})})}export{d as default};