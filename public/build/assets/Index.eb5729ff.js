import{a as r,j as i,H as s}from"./app.b2a6f44b.js";import{A as p}from"./App.2713ff24.js";import{C as l}from"./Container.6d863bba.js";import{P as d}from"./ProductItem.26e0620e.js";import{H as n}from"./Header.57f0eed0.js";import{P as c}from"./Pagination.957bb6b8.js";import"./XIcon.c10ccf78.js";import"./clsx.m.256e9345.js";import"./transition.7b88a4bc.js";import"./use-owner.c395fb84.js";import"./DropdownMenu.291b2cde.js";import"./use-event-listener.659ecc81.js";import"./MenuLogo.36958665.js";import"./InfoModal.2aab9c78.js";import"./Tawarin.08057ae7.js";import"./Dropdown.046e2d0f.js";import"./index.2ca15937.js";import"./helper.e37a4314.js";function u(t){const{data:m,meta:e,links:a}=t.products;return r("div",{children:[i(s,{title:"Products"}),r(l,{children:[i(n,{title:"Our Product",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium quam sint repudiandae aliquam rerum nisi eum repellendus minima optio, delectus expedita enim tempore. Aliquam omnis eligendi velit laboriosam suscipit."}),m.length?i("div",{className:"bg-white",children:r("div",{className:"max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 md:px-0 lg:max-w-7xl lg:px-8",children:[i("h2",{className:"text-2xl font-bold tracking-tight text-gray-900",children:"Products"}),i("div",{className:"grid grid-cols-2 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8",children:m.map(o=>i(d,{product:o},o.id))}),i(c,{meta:e,links:a})]})}):null]})]})}u.layout=t=>i(p,{children:t});export{u as default};