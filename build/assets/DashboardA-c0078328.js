import{j as e,r as n}from"./mui-c9524ebd.js";import{A as y}from"./AppBar-5b4a584e.js";import{A as N}from"./AppGrid-64005622.js";import{S as b}from"./StatisticsCard-45a173ad.js";import{S as c}from"./index-f014998d.js";import{S as h}from"./index-7c693b44.js";import{u as p,a as f,N as A}from"./index-a8e4dfb9.js";import{n as x,g as k,c as u}from"./helpers-7523a619.js";import{P as d}from"./options-4eeaed21.js";import{s as C}from"./sales_chart-d4aacbb1.js";import{R as v,A as F,C as S,X as T,Y as P,T as g,a as B,P as L,b as _,c as $}from"./recharts-cfb78fb2.js";import{B as E}from"./BasicTable-821555f3.js";import{T as z}from"./TopSellingCollapse-ecd1edc7.js";import{T as R}from"./columnDefs-a96e6b60.js";import{t as m}from"./top_selling-c7bce05e.js";import{T as D}from"./Counter-a6045ead.js";import"./Helmet-a2af92d2.js";import"./ResizeObserver.es-f4289e8a.js";import"./browser-c0c986ab.js";import"./toConsumableArray-8067d033.js";import"./objectWithoutProperties-1081a088.js";import"./createSuper-f6b9fd1a.js";import"./memoize-one.esm-297ddbcb.js";import"./TopSellingProductItem-592b4773.js";import"./toArray-07486ea8.js";import"./StarRating-c15a46d3.js";import"./IconButton-76a52514.js";import"./3-fdb0389d.js";import"./5-8afa44dc.js";const G=[{title:"Today Revenue",iconClass:"wallet-solid",value:2189,valuePrefix:"$",trend:12,data:[{value:3500},{value:2598},{value:1500},{value:5980},{value:3400},{value:2900},{value:7100},{value:6500},{value:7500},{value:5120}]},{title:"Today Visitors",iconClass:"user-plus-solid",value:512,valuePrefix:"",trend:4,data:[{value:512},{value:113},{value:280},{value:689},{value:235},{value:580},{value:313},{value:290},{value:570},{value:620}]},{title:"Today Transactions",iconClass:"arrow-down-to-line-solid",value:325,valuePrefix:"$",trend:-.89,data:[{value:8900},{value:6890},{value:3854},{value:5980},{value:3400},{value:2900},{value:7100},{value:2540},{value:7500},{value:4200}]},{title:"Total Products",iconClass:"bag-shopping-solid",value:980,trend:2,data:[{value:512},{value:1e3},{value:280},{value:689},{value:1500},{value:580},{value:800},{value:290},{value:570},{value:620}]}],K=({data:a=G})=>e.jsx("div",{className:"grid grid-cols-1 h-full gap-6 md:grid-cols-2 xl:gap-8 3xl:grid-cols-4",children:a.map((s,t)=>e.jsx(b,{data:s,chartClass:"xl:w-[250px] 3xl:hidden min-[1800px]:block min-[1800px]:w-[110px] 5xl:w-[130px]"},t))}),O=({active:a,payload:s,label:t})=>a?e.jsxs("div",{className:"bg-peach p-2.5 rounded-md dark:shadow-md",children:[e.jsx("p",{className:"text-[18px] font-semibold !text-white mb-1",children:t}),e.jsxs("p",{className:"text-[15px] font-semibold text-white",children:["Sales: $",s[0].value]})]}):null,W=()=>{const{width:a}=p(),{theme:s}=f(),[t,o]=n.useState(d[0]),r=k("salesAnalytics",50,"x");return e.jsxs(c,{className:"card flex flex-col gap-[22px] h-[392px] xs:h-[315px] p-5 xs:p-6 md:h-full",children:[e.jsxs("div",{className:"flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between xs:gap-5",children:[e.jsx("h2",{children:"Sales Analytics"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(h,{value:t,variant:"minimal",onChange:o,options:d})})]}),e.jsx("div",{className:"flex-1 overflow-hidden -mr-2 md:-ml-11 md:-mr-4",children:e.jsx(v,{width:"99%",height:"100%",id:"salesAnalytics",children:e.jsxs(F,{data:C[t.value].data,margin:{top:0,right:7,left:7,bottom:0},children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"salesAnalyticsFill",x1:"-124.434",y1:"-94.766",x2:"-124.434",y2:"227.785",gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"var(--peach)"}),e.jsx("stop",{offset:"1",stopColor:s==="light"?"white":"transparent",stopOpacity:"0.01"})]})}),e.jsx(S,{vertical:!1,horizontalPoints:r,strokeWidth:1,stroke:"var(--cartesian-grid)",strokeDasharray:"8 8"}),e.jsx(T,{dataKey:"name",dy:10,axisLine:!1,tickLine:!1,hide:a<768}),e.jsx(P,{tickCount:7,tickFormatter:l=>x(l,0),axisLine:!1,tickLine:!1,hide:a<768}),e.jsx(g,{cursor:{strokeDasharray:"8 8",stroke:"var(--peach)"},content:e.jsx(O,{})}),e.jsx(B,{type:"monotone",dataKey:"b",stroke:"var(--peach)",strokeWidth:3,strokeLinecap:"round",fill:"url(#salesAnalyticsFill)"})]})})})]})},i=[{name:"Clothing",data:{week:{products:1348,profit:3020},month:{products:2485,profit:6500},year:{products:9047,profit:10544}},color:"turquoise",darkAura:"#1B3838",lightAura:"#F4FFFF"},{name:"Lingerie & Nightwear",data:{week:{products:3459,profit:6700},month:{products:4008,profit:3560},year:{products:6987,profit:10245}},color:"blue",darkAura:"#14344A",lightAura:"#F1F7FF"},{name:"Body Fit",data:{week:{products:9874,profit:1897},month:{products:6644,profit:9580},year:{products:1505,profit:7890}},color:"yellow",darkAura:"#3B300A",lightAura:"#FFFBF0"},{name:"Sportswear",data:{week:{products:4874,profit:4854},month:{products:4700,profit:5698},year:{products:8900,profit:6542}},color:"peach",darkAura:"#3B300A",lightAura:"#FFFBF0"},{name:"Accessories",data:{week:{products:7845,profit:2955},month:{products:8066,profit:12845},year:{products:3459,profit:2280}},color:"red",darkAura:"#4E3130",lightAura:"#FFF3F4"}],I=({active:a,payload:s})=>a&&s&&s.length?e.jsx("div",{className:"basic-tooltip",children:x(s[0].value,0,"$")}):null,U=({item:a,period:s})=>{const{theme:t}=f(),o=()=>{const r=i.reduce((j,w)=>j+w.data[s].products,0);return(a.data[s].products/r*100).toFixed(2)};return e.jsxs("div",{className:"flex gap-2.5",children:[e.jsx("span",{className:"flex items-center justify-center w-[15px] h-[15px] rounded-full mt-1 shrink-0",style:{backgroundColor:t==="dark"?a.darkAura:a.lightAura},children:e.jsx("span",{className:`w-[7px] h-[7px] rounded-full bg-${a.color}`})}),e.jsxs("div",{className:"flex flex-col flex-1 gap-1",children:[e.jsxs("p",{className:"flex justify-between font-medium text-[15px] text-header",children:[a.name," (",o(),"%)",e.jsxs("span",{children:["$",u(a.data[s].profit)]})]}),e.jsxs("p",{className:"uppercase text-xs text-label",children:[u(a.data[s].products)," Category Products"]})]})]})},X=()=>{const{width:a}=p(),[s,t]=n.useState(d[0]),o=()=>i.reduce((r,l)=>r+l.data[s.value].profit,0);return e.jsxs(c,{className:"card flex flex-col gap-4 p-5 h-full xs:p-6",children:[e.jsxs("div",{className:"flex flex-col gap-2.5 xs:flex-row xs:items-center xs:justify-between",children:[e.jsx("h2",{children:"Sales By Category"}),e.jsx("div",{className:"min-w-[105px]",children:e.jsx(h,{options:d,value:s,onChange:t})})]}),e.jsxs("div",{className:"flex flex-col items-start gap-6 flex-1 md:flex-row md:items-center md:gap-[65px]",children:[e.jsxs("div",{className:`relative overflow-hidden min-h-[240px] min-w-[240px] xs:min-w-[294px]
                     xs:min-h-[294px] m-auto md:m-0 md:w-[294px] md:h-[294px]`,children:[e.jsx(v,{width:"99%",height:"99%",children:e.jsxs(L,{children:[e.jsx(_,{data:i,dataKey:`data.${s.value}.profit`,nameKey:"name",cx:"50%",cy:"50%",outerRadius:a<414?118:140,innerRadius:95,strokeWidth:0,fill:"#8884d8",children:i.map((r,l)=>e.jsx($,{fill:`var(--${r.color})`},l))}),e.jsx(g,{cursor:!1,content:e.jsx(I,{})})]})}),e.jsx("span",{className:"counter absolute-center",children:x(o(),0,"$")})]}),e.jsx("div",{className:"flex flex-col flex-1 w-full gap-4",children:i.map((r,l)=>e.jsx(U,{item:r,period:s.value},l))})]})]})},Y=()=>{const{width:a}=p(),[s,t]=n.useState("");return n.useEffect(()=>(window.addEventListener("resize",()=>{t("")}),()=>{window.removeEventListener("resize",()=>{t("")})}),[]),e.jsxs(c,{className:"card flex flex-col gap-4 p-5 xs:p-6 h-full",children:[e.jsx("h2",{children:"Top Selling"}),a<768?e.jsx("div",{className:"flex flex-col gap-4",children:m.map((o,r)=>e.jsx(z,{product:o,active:s,setActive:t,index:r},r))}):e.jsx(E,{dataSource:m,columns:R,scroll:{y:230},rowKey:"id",showSorterTooltip:!1,pagination:!1})]})},q="/assets/trending-2e89ceb2.webp",M=()=>e.jsxs(c,{className:"card relative h-[392px] p-6 overflow-hidden md:h-full",children:[e.jsx("img",{className:"absolute top-0 left-0 h-full",src:q,alt:"Single Breasted Blazer"}),e.jsxs("div",{className:"relative z-10 h-full flex flex-col items-start",children:[e.jsx("h2",{className:"mb-[18px] text-header-light",children:"Trending now"}),e.jsx("div",{className:"flex items-center justify-center h-9 backdrop-blur-md rounded-xl px-5",style:{background:"rgba(255, 255, 255, .3)"},children:e.jsx(D,{labelClass:"text-black",value:12,suffix:"%"})}),e.jsxs("div",{className:"flex flex-col items-start gap-2.5 mt-auto",children:[e.jsx(A,{className:"text-header-light font-bold text-[16px] md:text-[18px]",to:"/product",children:"Single Breasted Blazer"}),e.jsx("span",{className:"h3 !text-header-light",children:"$1499.99"})]})]})]}),V={statistics:e.jsx(K,{}),sales_analytics:e.jsx(W,{}),sales_by_category:e.jsx(X,{}),top_selling:e.jsx(Y,{}),trending_product:e.jsx(M,{})},ke=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Dashboard"}),e.jsx(N,{id:"dashboard_a",widgets:V,cols:{xl:4,lg:3,md:2}})]});export{ke as default};
