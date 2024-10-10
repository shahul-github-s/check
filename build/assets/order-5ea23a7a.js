import{_ as o,C as i,l as s,f as e,i as c,h as l,j as m,m as p,n as d,o as b,D as x}from"./index-21565b90.js";import{P as r,j as t}from"./mui-8e0c5bf3.js";import{b as g}from"./helpers-fc71785b.js";const j=o(i).withConfig({displayName:"SimpleTable",componentId:"sc-h2d9ne-0"})(["flex-grow:1;.ant-spin-nested-loading,.ant-spin-container,.ant-table-empty,.ant-table-container,.ant-table-content,.ant-table-content table{height:100%;}.ant-table{background:transparent;border-radius:0;table{border-radius:0 !important;}}.ant-table-placeholder{background:transparent !important;}.ant-table-cell,.ant-table-container,.ant-table-header{border-radius:0 !important;}.ant-table-thead{.ant-table-cell{padding:18px 20px 16px;background:transparent !important;color:var(--label);text-transform:uppercase;font-weight:500;font-size:12px;height:50px;border-bottom:1px solid var(--border);&:before{display:none;}.wrapper{display:flex;gap:10px;align-items:center;}}}.ant-table-tbody{.ant-table-cell{border-color:var(--border);color:var(--header);font-weight:500;font-size:15px;padding:16px 24px;background:transparent !important;transition:none !important;}tr:last-of-type .ant-table-cell{border-bottom:0;}}.ant-table-tbody > tr.ant-table-row:hover > td{background:none !important;}.ant-table-column-sorters{justify-content:flex-start;gap:8px;.ant-table-column-title{flex:unset;}.ant-table-column-sorter.ant-table-column-sorter-full{color:var(--label);.anticon{&.active,&:hover{color:var(--header);}}}}"]),u=({product:a,isLast:n})=>t.jsxs("div",{className:`p-5 xs:px-6 ${n?"":"border-b"}`,children:[t.jsx(s,{product:a,imgSize:40}),t.jsxs("ul",{className:"flex flex-col gap-1.5 mt-4",children:[t.jsxs("li",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-label uppercase text-xs font-medium",children:"Price:"}),t.jsxs("span",{className:"font-semibold text-header text-[15px]",children:["$",a.price]})]}),t.jsxs("li",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-label uppercase text-xs font-medium",children:"Quantity:"}),t.jsx("span",{className:"font-semibold text-header text-[15px]",children:g(a.qty)})]}),t.jsxs("li",{className:"flex items-center justify-between",children:[t.jsx("span",{className:"text-label uppercase text-xs font-medium",children:"Total:"}),t.jsxs("span",{className:"font-semibold text-header text-[15px]",children:["$",(a.price*a.qty).toFixed(2)]})]})]})]},a.id);u.propTypes={product:r.object.isRequired,isLast:r.bool};const N=[{id:"BT0075",name:e.commerce.productName(),img:c,price:e.commerce.price(),qty:1},{id:"BT0076",name:e.commerce.productName(),img:l,price:e.commerce.price(),qty:2},{id:"BT0077",name:e.commerce.productName(),img:m,price:e.commerce.price(),qty:4},{id:"BR0078",name:e.commerce.productName(),img:p,price:e.commerce.price(),qty:1},{id:"BH0079",name:e.commerce.productName(),img:d,price:e.commerce.price(),qty:2},{id:"SM0080",name:e.commerce.productName(),img:b,price:e.commerce.price(),qty:4},{id:"LK0081",name:e.commerce.productName(),img:x,price:e.commerce.price(),qty:4}];export{u as O,j as S,N as o};
