import{b as c,j as e}from"./app.b397b200.js";import f from"./Form.dbe7efe3.js";import"./InputError.3a54799b.js";import"./InputLabel.973a5ddd.js";import"./PrimaryButton.72a3ad3f.js";import"./SecondaryButton.cae4657c.js";import"./TextInput.0219e41e.js";import"./TextInputCheckbox.eaf8b823.js";import"./TextInputRadio.37292503.js";function h({setIsOpenAddDialog:t,employees:s,counters:m,reservationRatingCategories:i}){const{data:o,setData:a,post:n,reset:p,errors:u}=c({name:""});return e("form",{onSubmit:r=>{r.preventDefault(),n(route("reservationRatingCategories.store"),{data:o,onSuccess:()=>{p(),t(!1)}})},children:e(f,{errors:u,data:o,employees:s,counters:m,reservationRatingCategories:i,setData:a,submit:"Simpan",closeButton:r=>t(!1)})})}export{h as default};