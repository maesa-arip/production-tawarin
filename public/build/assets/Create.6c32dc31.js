import{b as u,j as e}from"./app.b2a6f44b.js";import p from"./Form.84beaa59.js";import"./InputError.b0271cc7.js";import"./InputLabel.a842ed6c.js";import"./PrimaryButton.830c9178.js";import"./SecondaryButton.0a7de463.js";import"./TextInput.2512d299.js";import"./TextInputCheckbox.f0b641df.js";function h({setIsOpenAddDialog:t,permissions:s}){const{data:o,setData:m,post:n,reset:a,errors:i}=u({name:""});return e("form",{onSubmit:r=>{r.preventDefault(),n(route("roles.store"),{data:o,onSuccess:()=>{a(),t(!1)}})},children:e(p,{errors:i,data:o,permissions:s,setData:m,submit:"Simpan",closeButton:r=>t(!1)})})}export{h as default};