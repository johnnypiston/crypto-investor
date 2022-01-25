import{_ as k}from"./index.1a0cc0b7.js";import{D as L,a as T}from"./constants.ce8a6c04.js";import{d as x,h as r,i as w,o as _,c as E,a as v,t as z,j as R,n as F,k as H,l as N,m as X,F as B,p as Y,q as y,u as A,s as b}from"./vendor.c347a008.js";const j={class:"tile__header"},J=x({props:{tileOptions:{default:()=>({tileName:"Tile",top:0,left:0,height:150,width:150,isActive:!1})},parentContainer:null,tileIndex:null},emits:["moveTile","resize","deleteTile","setActive"],setup(p,{emit:c}){const n=p,u=r(null),I=r(null),i=r(0),l=r(0),o=t=>{t.preventDefault(),c("setActive",n.tileIndex),u.value!==null&&(l.value=t.clientY-u.value.getBoundingClientRect().top,i.value=t.clientX-u.value.getBoundingClientRect().left,s(t.pageX,t.pageY),document.addEventListener("mousemove",f),document.addEventListener("mouseup",h))},s=(t,a)=>{u.value!==null&&c("moveTile",{tileOptions:{top:a-n.parentContainer.offsetY-l.value,left:t-n.parentContainer.offsetX-i.value},tileIndex:n.tileIndex})},d=t=>{var a,m;u.value!==null&&c("resize",{tileOptions:{width:t.pageX-((a=u.value)==null?void 0:a.getBoundingClientRect().left),height:t.pageY-((m=u.value)==null?void 0:m.getBoundingClientRect().top)},tileIndex:n.tileIndex})},f=t=>{s(t.pageX,t.pageY)},h=()=>{document.removeEventListener("mousemove",f)};w(()=>{document.removeEventListener("mouseup",h)});const C=()=>{document.removeEventListener("mousemove",d)},D=t=>{t.preventDefault(),t.stopPropagation(),document.addEventListener("mousemove",d),document.addEventListener("mouseup",C)};return(t,a)=>(_(),E("div",{ref_key:"tileElement",ref:u,class:F(["tile",{"tile--active":n.tileOptions.isActive}]),style:H({width:p.tileOptions.width+"px",height:p.tileOptions.height+"px",top:p.tileOptions.top+"px",left:p.tileOptions.left+"px"}),onMousedown:o},[v("div",j,[v("h2",null,z(n.tileOptions.tileName),1),v("button",{class:"btn tile__header-btn",type:"button",title:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",onClick:a[0]||(a[0]=R(m=>c("deleteTile",n.tileIndex),["stop"]))}," \u2716 ")]),v("div",{class:"tile__resizer",ref_key:"leftResizer",ref:I,onMousedown:D},null,544)],38))}});const M=v("h1",{class:"main-title"},"\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430",-1),P=v("p",{class:"resize-hint"}," *\u0414\u043B\u044F \u0438\u0437\u043C\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u043C\u0435\u0440\u043E\u0432 \u043F\u043B\u0438\u0442\u043A\u0438, \u043F\u043E\u0442\u044F\u043D\u0438\u0442\u0435 \u0437\u0430 \u0435\u0451 \u043F\u0440\u0430\u0432\u044B\u0439 \u043D\u0438\u0436\u043D\u0438\u0439 \u0443\u0433\u043E\u043B ",-1),U=x({setup(p){const c=e=>{for(const g of e)g.isActive=!1},n=()=>{const e=JSON.parse(localStorage.getItem("tiles")||"null");return e!==null&&c(e),e!==null?e:L},u=()=>{const e=JSON.parse(localStorage.getItem("deletedTiles")||"null");return e!==null&&c(e),e!==null?e:[]},I=N(()=>k(()=>import("./DeletedContainer.6ae5bded.js"),["assets/DeletedContainer.6ae5bded.js","assets/DeletedContainer.43a6e36b.css","assets/vendor.c347a008.js"])),i=r(null),l=r(n()),o=r(u()),s=r(null),d=()=>{localStorage.setItem("tiles",JSON.stringify(l.value))},f=()=>{localStorage.setItem("deletedTiles",JSON.stringify(o.value))},h=X(()=>{var e,g;return{offsetX:((e=i.value)==null?void 0:e.offsetLeft)||0,offsetY:((g=i.value)==null?void 0:g.offsetTop)||0}}),C=e=>{l.value[e.tileIndex].top=e.tileOptions.top,l.value[e.tileIndex].left=e.tileOptions.left,d()},D=e=>{l.value[e.tileIndex].width=e.tileOptions.width,l.value[e.tileIndex].height=e.tileOptions.height,d()},t=e=>{l.value[e].isActive=!1,o.value=o.value.concat(l.value.splice(e,1)),e===s.value&&(s.value=null),d(),f()},a=()=>{let e;o.value.length>0&&(e=o.value.pop(),e.height=T.HEIGHT,e.width=T.WIDTH,i.value!==null&&(e.left=i.value.getBoundingClientRect().width/2-T.WIDTH/2,e.top=i.value.getBoundingClientRect().height/2-T.HEIGHT/2),l.value.push(e),d(),f())},m=e=>{e!==s.value&&(s.value!==null&&e!==s.value&&(l.value[s.value].isActive=!1),l.value[e].isActive=!0,s.value=e)};return(e,g)=>(_(),E(B,null,[M,P,v("div",{ref_key:"desktopContainer",ref:i,class:"investor-desktop"},[(_(!0),E(B,null,Y(l.value,(S,O)=>(_(),y(J,{key:O,tileOptions:S,parentContainer:A(h),tileIndex:O,onMoveTile:C,onResize:D,onDeleteTile:t,onSetActive:m},null,8,["tileOptions","parentContainer","tileIndex"]))),128)),o.value.length>0?(_(),y(A(I),{key:0,deletedTiles:o.value,onRestore:a},null,8,["deletedTiles"])):b("",!0)],512)],64))}});export{U as default};