import{a as t,F as m,j as r,H as d}from"./app.cc97f0b6.js";import"./index_responsive.03b87d75.js";import{N as p}from"./DropdownMenu.44051cf3.js";import"./TextInput.43633199.js";import n from"./UpdatePasswordForm.50c18884.js";import l from"./UpdateProfileInformationForm.dccd98a0.js";import{A as c}from"./App.dc54f840.js";import{P as f}from"./PrimaryButton.7cf77fcc.js";import{C as g}from"./CopyButton.d42ba3c9.js";import"./transition.08209d82.js";import"./Tawarin.08057ae7.js";import"./clsx.m.256e9345.js";import"./use-event-listener.05e838ad.js";import"./InputError.b2bd947c.js";import"./InputLabel.8d460d85.js";import"./TextAreaInput.161c8db8.js";import"./Map.ff95c55f.js";import"./esm.53a5c501.js";import"./Filepond.453c6326.js";import"./Container.a505e398.js";import"./filepond-plugin-image-preview.esm.83e614d4.js";import"./filepond-plugin-file-validate-type.esm.9bfb0074.js";import"./DestroyModal.0d573095.js";import"./ExclamationIcon.fa7136ec.js";import"./dialog.1e637188.js";import"./description.f13e01ba.js";import"./Button.eba5e986.js";import"./Aside.3a232df6.js";function u({auth:e,mustVerifyEmail:o,status:i,media:s}){const a="https://tawarin.id/register/"+e.user.referral;return t(m,{children:[r(d,{title:"Profile"}),r("div",{className:"py-12",children:t("div",{className:"mx-auto space-y-6 sm:px-6 lg:px-8",children:[t("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:[t("div",{className:"p-8 border border-gray-200 rounded-2xl",children:[r("div",{className:"flex justify-center mb-2 text-lg",children:"Kode Referral"}),r("div",{className:"flex items-center justify-center px-2 py-1 text-lg font-semibold rounded",children:r(f,{children:e.user.referral})}),r(g,{text:a})]}),r(l,{mustVerifyEmail:o,status:i,media:s})]}),r("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:r(n,{className:"max-w-xl"})}),r("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:r(p,{className:"inline-flex items-center py-1 text-xs font-semibold tracking-normal text-white uppercase transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md px-7 hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800",href:route("logout"),method:"post",as:"button",children:"Log Out"})})]})})]})}u.layout=e=>r(c,{children:e});export{u as default};