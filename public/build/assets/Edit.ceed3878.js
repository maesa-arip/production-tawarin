import{b as f,r as b,j as a}from"./app.e9b32960.js";import x from"./Form.985dc544.js";import"./InputError.b1bbb09d.js";import"./InputLabel.6ea3a41b.js";import"./PrimaryButton.97c4c9cc.js";import"./SecondaryButton.2b7db640.js";import"./TextInput.35e7f60c.js";import"./TextInputCheckbox.622f601b.js";function D({setIsOpenEditDialog:e,model:t,permissions:m}){const{data:r,setData:o,put:n,reset:p,errors:u}=f({name:t.name}),i=s=>e(!1),c=s=>{s.preventDefault(),n(route("roles.update",t.id),{data:r,onSuccess:()=>{p(),e(!1)}})};return b.exports.useEffect(()=>{o({...r,name:t.name})},[t]),a("form",{onSubmit:c,children:a(x,{errors:u,data:r,model:t,permissions:m,setData:o,submit:"Update",closeButton:i})})}export{D as default};