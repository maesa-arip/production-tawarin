import{a as i,j as r,H as m,F as s,L as h}from"./app.a40e8af1.js";import{A as p}from"./App.5ba39158.js";import{C as u}from"./Container.58098ce8.js";import{C as a}from"./Card.ac99dcd4.js";import{P as T}from"./Pagination.3d319f6f.js";import{T as e}from"./Table.e58af6f1.js";import"./DropdownMenu.bdd72543.js";import"./clsx.m.256e9345.js";import"./transition.e89d00d7.js";import"./use-event-listener.8d22d876.js";import"./index_responsive.6b353536.js";import"./Tawarin.08057ae7.js";import"./Aside.b5452134.js";function f(d){const{data:o,meta:n,links:l}=d.carts;return i("div",{children:[r(m,{title:"History"}),r(u,{children:i(a,{children:[r(a.Header,{children:"Your History"}),i(a.Table,{children:[i(e,{children:[r(e.Thead,{children:i("tr",{children:[r(e.Th,{className:"w-0",children:"#"}),r(e.Th,{children:"Product"}),r(e.Th,{children:"Created"})]})}),r(e.Tbody,{children:o.length?r(s,{children:o.map((t,c)=>i("tr",{children:[r(e.Td,{className:"w-0",children:n.from+c}),r(e.Td,{children:r(h,{href:`/products/${t.product.slug}`,className:"text-blue-600 underline",children:t.product.name})}),r(e.Td,{children:t.created_at})]},t.id))}):r(e.Empty,{colSpan:3})})]}),r(a.Footer,{children:r(T,{marginTop:"mt-0",meta:n,links:l})})]})]})})]})}f.layout=d=>r(p,{children:d});export{f as default};