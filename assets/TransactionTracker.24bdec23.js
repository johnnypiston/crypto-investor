import{_ as T}from"./index.1a0cc0b7.js";import{W as k,S as C}from"./constants.ce8a6c04.js";import{d as m,o as c,c as p,v as h,n as S,h as E,l as g,i as x,a as f,b as r,w as u,q as A,u as y,s as B,x as i}from"./vendor.c347a008.js";const N=t=>new WebSocket(t),b=(t,e)=>{const n=JSON.stringify(e);t.readyState===WebSocket.OPEN&&t.send(n),t.addEventListener("open",()=>{t.send(n)},{once:!0})};let o=null;const l=N(k);l.addEventListener("message",t=>{const e=JSON.parse(t.data);o!==null&&o(D(e))});const D=t=>({from:t.x.inputs[0].prev_out.addr,to:t.x.out[0].addr,sum:t.x.out[0].value/C}),O=t=>{b(l,{op:"unconfirmed_sub"}),o=t},W=()=>{b(l,{op:"unconfirmed_unsub"}),o=null};const _=m({props:{color:{default:"default"}},emits:["click"],setup(t){const e=t;return(n,s)=>(c(),p("button",{class:S(["btn transactions-btn",`btn--${e.color}`]),type:"button",onClick:s[0]||(s[0]=a=>n.$emit("click"))},[h(n.$slots,"default")],2))}});const L={class:"container"},V=f("h1",{class:"transactions-title"},"\u0422\u0440\u0435\u043A\u0435\u0440 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439",-1),$={class:"transactions-actions"},j=i("\u0417\u0430\u043F\u0443\u0441\u043A"),P=i("\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430"),w=i("\u0421\u0431\u0440\u043E\u0441"),K=m({setup(t){const e=E([]),n=g(()=>T(()=>import("./TransactionsTable.a5a4bb06.js"),["assets/TransactionsTable.a5a4bb06.js","assets/TransactionsTable.7eea0e69.css","assets/vendor.c347a008.js"])),s=()=>{O(d=>{e.value.push(d)})},a=()=>{W()},v=()=>{e.value=[]};return x(()=>{a()}),(d,I)=>(c(),p("div",L,[V,f("div",$,[r(_,{color:"green",onClick:s},{default:u(()=>[j]),_:1}),r(_,{color:"red",onClick:a},{default:u(()=>[P]),_:1}),r(_,{color:"orange",onClick:v},{default:u(()=>[w]),_:1})]),e.value.length>0?(c(),A(y(n),{key:0,transactions:e.value},null,8,["transactions"])):B("",!0)]))}});export{K as default};
