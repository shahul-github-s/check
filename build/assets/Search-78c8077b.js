import{j as e}from"./mui-810d7cba.js";const d=({wrapperClass:a,inputClass:s,placeholder:o="Search",value:t,onChange:r})=>e.jsxs("div",{className:`${a||""} relative`,children:[e.jsx("i",{className:`absolute icon-magnifying-glass-regular text-base top-1/2 z-10 -translate-y-1/2 left-[26px]
               text-sidebar dark:text-turquoise`}),e.jsx("input",{className:`field-input font-semibold !pl-[55px] dark:bg-body dark:border-body
                   dark:hover:border-turquoise dark:focus:border-turquoise ${s||""}`,type:"search",value:t,onChange:i=>r(i.target.value),placeholder:o}),t&&e.jsx("button",{className:"absolute top-1/2 -translate-y-1/2 right-4 text-red text-xs",onClick:()=>r(""),"aria-label":"Clear"})]});export{d as S};
