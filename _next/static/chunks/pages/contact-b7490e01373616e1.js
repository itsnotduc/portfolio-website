(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{9260:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(5511)}])},7941:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var n=r(7671),i=r(6540),o=r(5692);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,{ref:r,inView:s}=(0,o.Wx)({threshold:t}),{setActiveSection:a,timeOfLastClick:l}=(0,n.q)();return(0,i.useEffect)(()=>{s&&Date.now()-l>1e3&&a(e)},[s,a,l,e]),{ref:r}}},1175:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var n=r(4848);function i(e){let{children:t}=e;return(0,n.jsx)("h2",{className:"text-3xl capitalize mb-8 font-bold text-center",children:t})}r(6540)},5511:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(4848);r(6540);var i=r(1175),o=r(7037),s=r(7941),a=r(652);function l(){let{ref:e}=(0,s.p)("Contact");return(0,n.jsxs)(a.P.section,{ref:e,id:"contact",className:"mb-20 sm:mb-28 w-[min(100%,38rem)] text-center",initial:{opacity:0},whileInView:{opacity:1,transition:{duration:.5}},viewport:{once:!0},children:[(0,n.jsx)(i.A,{children:"Contact Me"}),(0,n.jsxs)("p",{className:"text-gray-700 -mt-5",children:["Contact me directly at ",(0,n.jsx)("a",{className:"underline",href:"mailto:ndmd2110@gmail.com",children:"ndmd2110@gmail.com"})," "," through this form."]}),(0,n.jsxs)("form",{className:"mt-10 flex flex-col",children:[(0,n.jsx)("input",{type:"email",className:"h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",placeholder:"Your Email"}),(0,n.jsx)("textarea",{placeholder:"Your message",className:"h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"}),(0,n.jsxs)("button",{type:"submit",className:"gap-2 flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all group ",children:["Send ",(0,n.jsx)(o.Cer,{className:" group-hover:translate-x-2 group-hover:-translate-y-1 text-sx-opacity-70 transition-all hover:scale-120 active:scale-100 hover:bg-gray-950 duration-500"})]})]})]})}},5692:(e,t,r)=>{"use strict";r.d(t,{Wx:()=>c});var n=r(6540),i=Object.defineProperty,o=new Map,s=new WeakMap,a=0,l=void 0;function c({threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:u,triggerOnce:d,skip:h,initialInView:m,fallbackInView:f,onChange:g}={}){var p;let[b,v]=n.useState(null),y=n.useRef(),[x,w]=n.useState({inView:!!m,entry:void 0});y.current=g,n.useEffect(()=>{let n;if(!h&&b)return n=function(e,t,r={},n=l){if(void 0===window.IntersectionObserver&&void 0!==n){let i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:c,elements:u}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(s.has(r)||(a+=1,s.set(r,a.toString())),s.get(r)):"0":e[t]}`}).toString(),r=o.get(t);if(!r){let n;let i=new Map,s=new IntersectionObserver(t=>{t.forEach(t=>{var r;let o=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach(e=>{e(o,t)})})},e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:s,elements:i},o.set(t,r)}return r}(r),d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),c.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(u.delete(e),c.unobserve(e)),0===u.size&&(c.disconnect(),o.delete(i))}}(b,(e,t)=>{w({inView:e,entry:t}),y.current&&y.current(e,t),t.isIntersecting&&d&&n&&(n(),n=void 0)},{root:u,rootMargin:i,threshold:e,trackVisibility:r,delay:t},f),()=>{n&&n()}},[Array.isArray(e)?e.toString():e,b,u,i,d,h,r,f,t]);let k=null==(p=x.entry)?void 0:p.target,N=n.useRef();b||!k||d||h||N.current===k||(N.current=k,w({inView:!!m,entry:void 0}));let j=[v,x.inView,x.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}n.Component}},e=>{var t=t=>e(e.s=t);e.O(0,[563,636,593,792],()=>t(9260)),_N_E=e.O()}]);