import{P as r,j as t}from"./mui-339d5278.js";import{q as n,t as e}from"./index-4495768e.js";const l=n.div.withConfig({displayName:"BasicCheckbox__StyledBasicCheckbox",componentId:"sc-4025le-0"})(["input{display:none;&:checked + label{border-color:var(--peach) !important;background:var(--peach)  !important;i{opacity:1;}}}label{display:flex;align-items:center;justify-content:center;width:15px;height:15px;background:",";border:1px solid ",";border-radius:4px;transition:all var(--transition);i{font-size:10px;color:#fff;margin-top:-1px;opacity:0;transition:all var(--transition);}}"],e("theme",{light:"#fff",dark:"transparent"}),e("theme",{light:"var(--border)",dark:"var(--text-light)"})),d=({id:i,labelClass:a,...s})=>t.jsxs(l,{children:[t.jsx("input",{type:"checkbox",id:i,checked:s.checked,onChange:s.onChange}),t.jsx("label",{className:a||"",htmlFor:i,children:t.jsx("i",{className:"icon-check-regular"})})]});d.propTypes={id:r.string.isRequired,labelClass:r.string};const p=n.button.withConfig({displayName:"FilterItem__Button",componentId:"sc-1cg8wpl-0"})(["text-transform:uppercase;font-size:14px;font-weight:600;color:",";display:flex;align-items:center;gap:11px;transition:var(--transition);.qty{height:36px;min-width:45px;padding:0 8px;border:1px solid ",";border-radius:10px;background:",";display:flex;align-items:center;justify-content:center;transition:var(--transition);}&:hover,&.active{color:",";.qty{border-color:",";background:",";}}"],e("theme",{light:"var(--label)",dark:"var(--header)"}),e("theme",{light:"var(--border)",dark:"var(--body)"}),e("theme",{light:"var(--header-dark)",dark:"var(--body)"}),e("theme",{light:"var(--sidebar)",dark:"var(--turquoise)"}),e("theme",{light:"var(--sidebar)",dark:"var(--turquoise)"}),e("theme",{light:"var(--border)",dark:"transparent"})),h=({label:i,value:a,qty:s,active:o,setActive:c})=>t.jsxs(p,{className:o===a?"active":"",onClick:()=>c(a),children:[i," ",t.jsxs("span",{className:"qty",children:["(",s,")"]})]});h.propTypes={label:r.string.isRequired,value:r.string.isRequired,qty:r.number.isRequired,active:r.string.isRequired,setActive:r.func.isRequired};export{d as B,h as F};
