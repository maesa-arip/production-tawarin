import{b as u,j as e}from"./app.cc97f0b6.js";import p from"./Form.48bd883d.js";import"./InputError.b2bd947c.js";import"./InputLabel.8d460d85.js";import"./PrimaryButton.7cf77fcc.js";import"./SecondaryButton.5c2783bb.js";import"./TextInput.43633199.js";import"./TextInputCheckbox.7671d3ac.js";function h({setIsOpenAddDialog:t,roles:s}){const{data:o,setData:m,post:a,reset:i,errors:n}=u({name:"",email:"",password:""});return e("form",{onSubmit:r=>{r.preventDefault(),a(route("users.store"),{data:o,onSuccess:()=>{i(),t(!1)}})},children:e(p,{errors:n,data:o,roles:s,setData:m,submit:"Simpan",closeButton:r=>t(!1)})})}export{h as default};