import{b as u,j as s}from"./app.b397b200.js";import l from"./Form.8f70631e.js";import"./InputLabel.973a5ddd.js";import"./PrimaryButton.72a3ad3f.js";import"./SecondaryButton.cae4657c.js";import"./TextInput.0219e41e.js";import"./TextInputCheckbox.eaf8b823.js";function F({setIsOpenAddDialog:o,cars:t}){console.log(t);const{data:e,setData:m,post:n,reset:i,errors:a}=u({name:"",email:"",password:""});return console.log("ini 1"),s("form",{onSubmit:r=>{r.preventDefault(),n(route("users.store"),{data:e,onSuccess:()=>{i(),o(!1)}})},children:s(l,{errors:a,data:e,cars:t,setData:m,submit:"Simpan",closeButton:r=>o(!1)})})}export{F as default};