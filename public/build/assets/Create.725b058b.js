import{b as p,j as e}from"./app.e9b32960.js";import u from"./Form.6e072a14.js";import"./InputError.b1bbb09d.js";import"./InputLabel.6ea3a41b.js";import"./PrimaryButton.97c4c9cc.js";import"./SecondaryButton.2b7db640.js";import"./TextInput.35e7f60c.js";import"./TextInputCheckbox.622f601b.js";function h({setIsOpenAddDialog:t,roles:s}){const{data:o,setData:m,post:i,reset:n,errors:a}=p({name:""});return e("form",{onSubmit:r=>{r.preventDefault(),i(route("permissions.store"),{data:o,onSuccess:()=>{n(),t(!1)}})},children:e(u,{errors:a,data:o,roles:s,setData:m,submit:"Simpan",closeButton:r=>t(!1)})})}export{h as default};