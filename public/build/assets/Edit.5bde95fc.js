import{b as f,r as b,j as a}from"./app.cbf5fb57.js";import x from"./Form.0a06f22e.js";import"./InputError.4999e345.js";import"./InputLabel.26c141a5.js";import"./PrimaryButton.f7b83131.js";import"./SecondaryButton.83ef21f8.js";import"./TextInput.6471a0c8.js";import"./TextInputCheckbox.ad618fc8.js";function D({setIsOpenEditDialog:e,model:t,roles:m}){const{data:r,setData:o,put:n,reset:i,errors:p}=f({name:t.name}),u=s=>e(!1),c=s=>{s.preventDefault(),n(route("permissions.update",t.id),{data:r,onSuccess:()=>{i(),e(!1)}})};return b.exports.useEffect(()=>{o({...r,name:t.name})},[t]),a("form",{onSubmit:c,children:a(x,{errors:p,data:r,model:t,roles:m,setData:o,submit:"Update",closeButton:u})})}export{D as default};