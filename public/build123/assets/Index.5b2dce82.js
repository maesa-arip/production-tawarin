import{j as s,a as i,H as o}from"./app.f18dce95.js";import{C as l,A as n}from"./App.a868e909.js";import{H as d}from"./Header.c03aa1ed.js";import{P as p}from"./Pagination.a14ec014.js";import{P as u}from"./PlanItem.dd27362e.js";import"./clsx.m.ce3c9d91.js";import"./helper.e37a4314.js";function c(e){const{data:a,meta:t,links:m}=e.plans;return s("div",{children:[i(o,{title:"Plans"}),i(d,{title:"Our Plan",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium quam sint repudiandae aliquam rerum nisi eum repellendus minima optio, delectus expedita enim tempore. Aliquam omnis eligendi velit laboriosam suscipit."}),s(l,{children:[a.length?i("div",{className:"grid grid-cols-2 gap-3 sm:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:a.map(r=>i(u,{plan:r},r.id))}):null,i(p,{meta:t,links:m})]})]})}c.layout=e=>i(n,{children:e});export{c as default};