import{e as f,r as w,a as o}from"./app.f6fe01ec.js";import x from"./Form.8ebeea0b.js";import"./InputError.09e7267c.js";import"./InputLabel.20ac50ff.js";import"./PrimaryButton.8a7e45f6.js";import"./SecondaryButton.f5f02025.js";import"./TextInput.e1109bbc.js";import"./TextInputCheckbox.4f7a8098.js";function B({setIsOpenEditDialog:s,model:r,roles:p}){const{data:t,setData:a,put:i,reset:m,errors:n}=f({name:r.name,email:r.email,password:r.password}),u=e=>s(!1),c=e=>{e.preventDefault(),i(route("users.update",r.id),{data:t,onSuccess:()=>{m(),s(!1)}})};return w.exports.useEffect(()=>{a({...t,name:r.name,email:r.email,password:r.password})},[r]),o("form",{onSubmit:c,children:o(x,{errors:n,data:t,model:r,roles:p,setData:a,submit:"Update",closeButton:u})})}export{B as default};