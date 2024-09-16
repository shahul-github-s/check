import{P as l,j as a,C as j,f as u,r as d}from"./mui-109ef935.js";import{A as y}from"./AppBar-ad562978.js";import{S as N}from"./Spring-680b1b2f.js";import{S}from"./Search-b9941f4e.js";import{F as C}from"./FilterItem-086754a9.js";import{B as R}from"./BasicTable-d4cc91d1.js";import{P as x}from"./Pagination-23a850f4.js";import{E as B}from"./Empty-50f656c4.js";import{B as E}from"./BasicCheckbox-6f18c892.js";import{S as T}from"./StarRating-4bee9901.js";import{T as P}from"./TopSellingProductItem-141d107c.js";import{u as A}from"./usePagination-a841149b.js";import{e as L}from"./options-4eeaed21.js";import{R as F}from"./columnDefs-e7e5386e.js";import{f as e}from"./index-1f53deeb.js";import{a as I,d as k,b as q,i as D,c as M,e as z}from"./6-c4059850.js";import{i as W}from"./7-8d12314d.js";import{i as _,b as G,a as H,c as J,d as O,e as Q,f as U,g as V,h as X,j as Y,k as K,l as $,m as Z}from"./20-9e2c7eba.js";import{u as ee}from"./index-0cd16d31.js";import"./Helmet-3cc0a097.js";import"./Table-0fd4c431.js";import"./toConsumableArray-b3f31dad.js";import"./objectWithoutProperties-ee9c3b50.js";import"./index-26993953.js";import"./ResizeObserver.es-f4289e8a.js";import"./createSuper-c06aae95.js";import"./toArray-dacdad19.js";import"./helpers-fc71785b.js";const f=({review:s,active:i,setActive:p,index:m})=>{const n=()=>{i===s.id?p(""):p(s.id)};return a.jsxs(N,{className:"card-container card-container--light p-4 rounded-2xl",type:"slideUp",index:m,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(E,{id:s.id,labelClass:"dark:!border-[var(--label-light)]"}),a.jsx(P,{product:s.product,imgSize:40,titleClass:"truncate max-w-[90px] xxs:max-w-[140px] xs:max-w-[180px] sm:max-w-[300px]",subtitleClass:"truncate max-w-[90px] xxs:max-w-[140px] xs:max-w-[180px] sm:max-w-[300px]",withCategory:!0})]}),a.jsx("button",{className:`btn-collapse ${i===s.id?"active":""}`,onClick:n,"aria-label":"Toggle",children:a.jsx("i",{className:"icon-chevron-down-regular"})})]}),a.jsx(j,{in:i===s.id,children:a.jsx("div",{className:"mt-4 border rounded-[10px]",children:a.jsx("table",{className:"border-collapse w-full",children:a.jsxs("tbody",{children:[a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Date:"}),a.jsx("td",{className:"p-2 border-b",children:u(s.date).format("DD.MM.YY")})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Status:"}),a.jsx("td",{className:"capitalize p-2 border-b",children:s.status})]}),a.jsxs("tr",{children:[a.jsx("td",{className:"font-semibold text-header p-2 border-b border-r",children:"Rating:"}),a.jsx("td",{className:"p-2 border-b",children:a.jsx(T,{value:s.rating})})]}),a.jsx("tr",{children:a.jsx("td",{className:"font-semibold text-header p-2 border-b",colSpan:"2",children:"Review:"})}),a.jsx("tr",{children:a.jsx("td",{className:"p-2 border-b",colSpan:"2",children:s.review})}),a.jsx("tr",{children:a.jsx("td",{className:"font-semibold text-header p-2 border-b",colSpan:"2",children:"Author:"})}),a.jsx("tr",{children:a.jsxs("td",{className:"p-2",colSpan:"2",children:[s.user.firstName," ",s.user.lastName]})})]})})})})]})};f.propTypes={review:l.object.isRequired,active:l.string.isRequired,setActive:l.func.isRequired,index:l.number.isRequired};const g=[{id:"review-1",status:"pending",product:{category:"lingerie",name:"Gioia Super Push-up Bra",img:I},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-2",status:"approved",product:{category:"lingerie",name:"Medium Control Slip",img:_},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-3",status:"trash",product:{category:"sportswear",name:"Non Wired Sports Bra",img:k},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-4",status:"approved",product:{category:"accessories",name:"Square Sunglasses",img:W},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-5",status:"approved",product:{category:"accessories",name:"Cross-body Bag",img:G},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-6",status:"pending",product:{category:"accessories",name:"Leather Cross Body Bag",img:q},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-7",status:"approved",product:{category:"shoes",name:"Leather Flat Sandals",img:D},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-8",status:"approved",product:{category:"accessories",name:"Hair clip with Pearls",img:M},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-9",status:"approved",product:{category:"accessories",name:"Watch with Leather Strap",img:z},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-10",status:"approved",product:{category:"sportswear",name:"Non Wired Sports Top",img:H},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:4.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-11",status:"approved",product:{category:"shoes",name:"Birkenstock Arizona",img:J},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-12",status:"trash",product:{category:"shoes",name:"Crocs Jibbitz Crocband",img:O},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:2.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-13",status:"approved",product:{category:"shoes",name:"ASICS Gel-Sonoma 7",img:Q},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-14",status:"pending",product:{category:"accessories",name:"Guess Abey Small Hobo",img:U},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-15",status:"trash",product:{category:"accessories",name:"Puma Core Pop Boxy X-Body",img:V},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-16",status:"approved",product:{category:"accessories",name:"Traum Blue Ring Earrings",img:X},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:1,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-17",status:"approved",product:{category:"dresses",name:"Dressa Turquoise Flower Dress",img:Y},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-18",status:"pending",product:{category:"dresses",name:"Dressa Mint Mid-length Dress",img:K},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-19",status:"approved",product:{category:"jeans",name:"Levi's XL Balloon Medium Indigo",img:$},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:5,review:e.lorem.paragraph(),date:e.date.past()},{id:"review-20",status:"approved",product:{category:"jeans",name:"Trendyol Clear Blue Mom Jeans",img:Z},user:{firstName:e.person.firstName(),lastName:e.person.lastName()},rating:3.5,review:e.lorem.paragraph(),date:e.date.past()}],ae=()=>{const{width:s}=ee(),[i,p]=d.useState("all"),[m,n]=d.useState(""),[h,c]=d.useState("");d.useEffect(()=>(window.addEventListener("resize",()=>{c("")}),()=>{window.removeEventListener("resize",()=>{c("")})}),[]);const v=r=>r==="all"?g.length:g.filter(t=>t.status===r).length,w=g.sort((r,t)=>{const b=u(r.date);return u(t.date)-b}).filter(r=>i==="all"?r:r.status===i).filter(r=>m===""?r:r.product.name.toLowerCase().includes(m.toLowerCase())),o=A(w,10);return a.jsx("div",{className:"layout-wrapper",children:a.jsxs(N,{className:"card flex flex-col flex-1 w-full h-full",children:[a.jsxs("div",{className:"flex flex-col gap-5 p-5 !pb-4 border-b xs:p-6",children:[a.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[a.jsx(S,{value:m,onChange:n,wrapperClass:"flex-1",placeholder:"Search for Product..."}),a.jsx("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex"})]}),a.jsx("div",{className:"flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between",children:a.jsx("div",{className:"flex flex-wrap gap-x-6 gap-y-4",children:L.map((r,t)=>a.jsx(C,{...r,qty:v(r.value),active:i,setActive:p},t))})})]}),a.jsx("div",{className:"flex-1 px-5 pt-4 pb-5 xs:px-6 xs:pb-6 md:pb-2.5",children:s<768?a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsx("div",{className:"flex flex-col gap-4",children:o.currentItems().map((r,t)=>a.jsx(f,{review:r,active:h,setActive:c,index:t},t))}),o.maxPage>1&&a.jsx(x,{pagination:o})]}):a.jsx(R,{columns:F,dataSource:o.currentItems(),rowKey:"id",rowSelection:{type:"checkbox"},pagination:!1,locale:{emptyText:a.jsx(B,{title:"No Reviews Found"})},showSorterTooltip:!1,footer:()=>a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("p",{className:"uppercase",children:o.showingOf()}),a.jsx(x,{pagination:o,btnClass:"dark:bg-widget"})]})})})]})})},Ae=()=>a.jsxs(a.Fragment,{children:[a.jsx(y,{title:"Reviews"}),a.jsx(ae,{})]});export{Ae as default};
