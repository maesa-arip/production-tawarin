import{j as l,a as e,H as s,L as i}from"./app.f18dce95.js";import{C as r,A as n}from"./App.a868e909.js";import{P as t}from"./PlanItem.dd27362e.js";import{n as d}from"./helper.e37a4314.js";import"./clsx.m.ce3c9d91.js";function m({plan:a}){return l("div",{children:[e(s,{title:t.name}),e(r,{children:l("div",{className:"flex gap-10",children:[e("div",{className:"w-1/3",children:e("img",{className:"w-full rounded-lg shadow-sm",src:"https://source.unsplash.com/200x320?building",alt:""})}),e("div",{className:"flex flex-col justify-between w-2/3 min-h-full",children:l("div",{className:"flex-1",children:[e(i,{className:"inline-flex px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded",href:`/plans?plan_category=${a.plan_category.slug}`,children:a.plan_category.name}),e("h1",{className:"text-3xl font-semibold",children:a.name}),e("div",{className:"my-4 leading-relaxed text-gray-500",children:a.description}),l("div",{className:"text-4xl font-semibold",children:[e("sup",{children:"Rp "}),d(a.anggaran_proyek)]})]})})]})})]})}m.layout=a=>e(n,{children:a});export{m as default};