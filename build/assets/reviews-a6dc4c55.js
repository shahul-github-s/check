import{P as m,r as d,j as r,L as x,w as c}from"./mui-8e0c5bf3.js";import{a as p,S as g,q as f,f as e,i as N,h as b,j as h,m as u,n as j,o as v}from"./index-21565b90.js";import{G as w}from"./Gallery-4fc9be8f.js";const o=({value:a=0,color:i="blue",...s})=>{const{theme:t}=p(),n=t==="light"?"var(--border)":"var(--body)",l=t==="light"?"var(--header-dark)":"var(--body)";return r.jsx(x,{variant:"determinate","aria-label":`${a.toFixed(0)}%`,value:a,classes:{root:s.className||""},sx:{height:10,borderRadius:3,backgroundColor:l,border:`1px solid ${n}`,flexGrow:1,"& .MuiLinearProgress-bar":{backgroundColor:`var(--${i})`,borderRadius:8,transform:a===0?"translateX(-110%) !important":"none",height:8}},...s})};o.propTypes={value:m.number,color:m.string};const R=d.memo(o),C=({review:a,index:i,className:s})=>{const t=`${a.firstName} ${a.lastName}`;return r.jsxs(g,{className:`card-container card-container--light rounded-2xl p-5 xs:p-6 ${s||""}`,type:"slideUp",index:i,children:[r.jsxs("div",{className:"flex flex-col justify-between gap-2.5 xs:items-center xs:flex-row xs:gap-4",children:[r.jsx("span",{className:"font-medium text-[15px] text-header",children:t}),r.jsx(f,{value:a.rating})]}),r.jsx("p",{className:"max-w-[410px] text-label mt-3 mb-4 xs:mt-2",children:a.text}),r.jsxs("div",{className:"flex flex-col justify-between items-start xs:flex-row xs:items-center  gap-4",children:[a.media&&a.media.length>0&&r.jsx(w,{images:a.media}),r.jsx("span",{className:"text-xs ml-auto",children:c(a.date).format("MMM DD, YYYY")})]})]})},M=[{id:"review-1",firstName:e.person.firstName(),lastName:e.person.lastName(),text:e.lorem.sentence(),rating:e.number.float({min:1,max:5,precision:.5}),date:e.date.recent(),media:[{src:N,alt:"review image"},{src:b,alt:"review image"},{src:h,alt:"review image"}]},{id:"review-2",firstName:e.person.firstName(),lastName:e.person.lastName(),text:e.lorem.paragraph({min:1,max:3}),rating:e.number.float({min:1,max:5,precision:.5}),date:e.date.past()},{id:"review-3",firstName:e.person.firstName(),lastName:e.person.lastName(),text:e.lorem.sentence(),rating:e.number.float({min:1,max:5,precision:.5}),date:e.date.recent(),media:[{src:u,alt:"review image"},{src:j,alt:"review image"},{src:v,alt:"review image"}]},{id:"review-4",firstName:e.person.firstName(),lastName:e.person.lastName(),text:e.lorem.paragraph({min:1,max:3}),rating:e.number.float({min:1,max:5,precision:.5}),date:e.date.past()}];export{R as P,C as R,M as r};
