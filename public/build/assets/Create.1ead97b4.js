import{b as p,j as e}from"./app.e12db1c5.js";import u from"./Form.26edd261.js";import"./InputError.138d89eb.js";import"./InputLabel.a795f981.js";import"./PrimaryButton.e52196d7.js";import"./SecondaryButton.f83aa502.js";import"./TextInput.7e694435.js";import"./TextInputCheckbox.9eade330.js";function h({setIsOpenAddDialog:t,roles:s}){const{data:o,setData:m,post:i,reset:n,errors:a}=p({name:""});return e("form",{onSubmit:r=>{r.preventDefault(),i(route("permissions.store"),{data:o,onSuccess:()=>{n(),t(!1)}})},children:e(u,{errors:a,data:o,roles:s,setData:m,submit:"Simpan",closeButton:r=>t(!1)})})}export{h as default};