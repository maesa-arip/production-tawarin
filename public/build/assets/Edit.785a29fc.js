import{j as m,F as e,a,H as i}from"./app.d3c10857.js";import{A as t}from"./App.a776b86b.js";import{N as d}from"./XIcon.7edcd9ef.js";import l from"./DeleteUserForm.859c07b8.js";import p from"./UpdatePasswordForm.c680a4d9.js";import n from"./UpdateProfileInformationForm.6ad7d212.js";import"./clsx.m.256e9345.js";import"./transition.f7797981.js";import"./Tawarin.938b8d9c.js";import"./InputError.04756cb8.js";import"./InputLabel.5bd69138.js";import"./TextInput.16fb9aa2.js";import"./PrimaryButton.8f0ab244.js";function c({auth:r,mustVerifyEmail:s,status:o}){return m(e,{children:[a(i,{title:"Profile"}),a("div",{className:"py-12",children:m("div",{className:"mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8",children:[a("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:a(n,{mustVerifyEmail:s,status:o,className:"max-w-xl"})}),a("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:a(p,{className:"max-w-xl"})}),a("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:a(d,{href:route("logout"),method:"post",as:"button",children:"Log Out"})}),a("div",{className:"p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg",children:a(l,{className:"max-w-xl"})})]})})]})}c.layout=r=>a(t,{children:r});export{c as default};