import{b as f,r as b,j as a}from"./app.9820b78a.js";import x from"./Form.4bde5c0b.js";import"./InputError.8436540d.js";import"./InputLabel.317a3666.js";import"./PrimaryButton.d1b0414b.js";import"./SecondaryButton.ab121387.js";import"./TextInput.4e6addbc.js";import"./TextInputCheckbox.0bb6f362.js";function D({setIsOpenEditDialog:e,model:t,roles:m}){const{data:r,setData:o,put:n,reset:i,errors:p}=f({name:t.name}),u=s=>e(!1),c=s=>{s.preventDefault(),n(route("permissions.update",t.id),{data:r,onSuccess:()=>{i(),e(!1)}})};return b.exports.useEffect(()=>{o({...r,name:t.name})},[t]),a("form",{onSubmit:c,children:a(x,{errors:p,data:r,model:t,roles:m,setData:o,submit:"Update",closeButton:u})})}export{D as default};