import{b as f,r as b,j as s}from"./app.b397b200.js";import x from"./Form.c9e56da4.js";import"./InputError.3a54799b.js";import"./InputLabel.973a5ddd.js";import"./PrimaryButton.72a3ad3f.js";import"./SecondaryButton.cae4657c.js";import"./TextInput.0219e41e.js";import"./TextInputCheckbox.eaf8b823.js";import"./TextInputRadio.37292503.js";function D({setIsOpenEditDialog:e,model:t,reservationCarCategories:m}){const{data:r,setData:o,put:i,reset:n,errors:p}=f({name:t.name}),u=a=>e(!1),c=a=>{a.preventDefault(),i(route("reservationCarCategories.update",t.id),{data:r,onSuccess:()=>{n(),e(!1)}})};return b.exports.useEffect(()=>{o({...r,name:t.name})},[t]),s("form",{onSubmit:c,children:s(x,{errors:p,data:r,model:t,reservationCarCategories:m,setData:o,submit:"Update",closeButton:u})})}export{D as default};