import{b as p,j as e}from"./app.b397b200.js";import u from"./Form.efe1c033.js";import"./InputError.3a54799b.js";import"./InputLabel.973a5ddd.js";import"./PrimaryButton.72a3ad3f.js";import"./SecondaryButton.cae4657c.js";import"./TextInput.0219e41e.js";import"./TextInputCheckbox.eaf8b823.js";function h({setIsOpenAddDialog:t,roles:s}){const{data:o,setData:m,post:i,reset:n,errors:a}=p({name:""});return e("form",{onSubmit:r=>{r.preventDefault(),i(route("permissions.store"),{data:o,onSuccess:()=>{n(),t(!1)}})},children:e(u,{errors:a,data:o,roles:s,setData:m,submit:"Simpan",closeButton:r=>t(!1)})})}export{h as default};