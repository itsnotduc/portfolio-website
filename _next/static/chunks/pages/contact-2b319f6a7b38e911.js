(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{9260:(e,r,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(6240)}])},7941:(e,r,t)=>{"use strict";t.d(r,{p:()=>i});var a=t(7671),s=t(6540),n=t(5692);function i(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,{ref:t,inView:i}=(0,n.Wx)({threshold:r}),{setActiveSection:l,timeOfLastClick:o}=(0,a.q)();return(0,s.useEffect)(()=>{i&&Date.now()-o>1e3&&l(e)},[i,l,o,e]),{ref:t}}},1175:(e,r,t)=>{"use strict";t.d(r,{A:()=>s});var a=t(4848);function s(e){let{children:r}=e;return(0,a.jsx)("h2",{className:"text-3xl capitalize mb-8 font-bold text-center",children:r})}t(6540)},6240:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>M});var a=t(4848),s=t(6540),n=t(1175),i=t(7941),l=t(652),o=t(8343);let c=(e,r)=>!!e&&"string"==typeof e&&!(e.length>r),d=e=>e instanceof Error?e.message:e&&"object"==typeof e&&"message"in e?String(e.message):"string"==typeof e?e:"Something went wrong";var m=t(3750),u=t(9021),g=t(1217),h=t(9619),x=t(5478),f=t(6878),b=t(8039),p=t(5736),y=t(7565),w=t(11);function j(e){let{message:r,senderEmail:t}=e;return(0,a.jsxs)(m.E,{children:[(0,a.jsx)(u.p,{}),(0,a.jsx)(g.l,{children:"New message from your portfolio site"}),(0,a.jsx)(w.n,{children:(0,a.jsx)(h.n,{className:"bg-gray-100 text-black",children:(0,a.jsx)(x.m,{children:(0,a.jsxs)(f.w,{className:"bg-white borderBlack my-10 px-10 py-4 rounded-md",children:[(0,a.jsx)(b.D,{className:"leading-tight",children:"You received the following message from the contact form"}),(0,a.jsx)(p.E,{children:r}),(0,a.jsx)(y.Hr,{}),(0,a.jsxs)(p.E,{children:["The sender's email is: ",t]})]})})})})]})}console.log("API Key available:",!0);let k=new o.u("re_8eMMnL12_MFASsBoizrymLuVMx3M3R7x2"),N=async e=>{let r=e.get("senderEmail"),t=e.get("message");if(!c(r,500))return{error:"Invalid sender email"};if(!c(t,5e3))return{error:"Invalid message"};try{return{data:await k.emails.send({from:"Contact Form <onboarding@resend.dev>",to:"ndmd2110@gmail.com",subject:"Message from contact form",replyTo:r,react:s.createElement(j,{message:t,senderEmail:r})})}}catch(e){return{error:d(e)}}};var v=t(2636),E=t(7037),_=t(961);function C(){let{pending:e}=(0,_.useFormStatus)();return(0,a.jsx)("button",{type:"submit",className:"group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white border border-black/10 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white dark:text-gray-900 dark:border-white/10 disabled:scale-100 disabled:bg-opacity-65",disabled:e,children:e?(0,a.jsx)("div",{className:"h-5 w-5 animate-spin rounded-full border-b-2 border-gray-900 dark:border-white"}):(0,a.jsxs)(a.Fragment,{children:["Submit"," ",(0,a.jsx)(E.Cer,{className:"text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"})," "]})})}function M(){let{ref:e}=(0,i.p)("Contact");return(0,a.jsxs)(l.P.section,{id:"contact",ref:e,className:"mb-20 sm:mb-28 w-[min(100%,38rem)] text-center",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:1},viewport:{once:!0},children:[(0,a.jsx)(n.A,{children:"Contact me"}),(0,a.jsxs)("p",{className:"text-gray-700 -mt-6 dark:text-white/80",children:["Please contact me directly at"," ",(0,a.jsx)("a",{className:"underline",href:"mailto:example@gmail.com",children:"example@gmail.com"})," ","or through this form."]}),(0,a.jsxs)("form",{className:"mt-10 flex flex-col dark:text-black",action:async e=>{let{data:r,error:t}=await N(e);if(t){v.oR.error(t);return}v.oR.success("Email sent successfully!")},children:[(0,a.jsx)("input",{className:"h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",name:"senderEmail",type:"email",required:!0,maxLength:500,placeholder:"Your email"}),(0,a.jsx)("textarea",{className:"h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none",name:"message",placeholder:"Your message",required:!0,maxLength:5e3}),(0,a.jsx)(C,{})]})]})}}},e=>{var r=r=>e(e.s=r);e.O(0,[563,446,897,636,593,792],()=>r(9260)),_N_E=e.O()}]);