import{j as a,a as r,H as h,F as s}from"./app.2b18cd2f.js";import{A as m}from"./App.59c8ac8b.js";import{C as p}from"./Container.10c92e55.js";import{C as n,T as e}from"./Table.7099727c.js";import{P as f}from"./Pagination.cf3c32ca.js";import"./clsx.m.256e9345.js";function u(i){const{data:d,meta:t,links:o}=i.products;return a("div",{children:[r(h,{title:"My Product"}),r(p,{children:a(n,{children:[r(n.Header,{children:"My Product"}),a(n.Table,{children:[a(e,{children:[r(e.Thead,{children:a("tr",{children:[r(e.Th,{className:"w-0",children:"#"}),r(e.Th,{children:"Product"})]})}),r(e.Tbody,{children:d.length?r(s,{children:d.map((l,c)=>a("tr",{children:[r(e.Td,{className:"w-0",children:t.from+c}),r(e.Td,{className:"text-blue-600 underline",children:r("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",children:l.name})})]},l.id))}):r(e.Empty,{colSpan:2})})]}),r(n.Footer,{children:r(f,{marginTop:"mt-0",meta:t,links:o})})]})]})})]})}u.layout=i=>r(m,{children:i});export{u as default};