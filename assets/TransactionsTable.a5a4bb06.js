import{d as i,m,o as n,c as a,a as t,t as e,u as _,F as r,p as h,s as p,x as f}from"./vendor.c347a008.js";const C={class:"result"},T=f(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0439: "),b={class:"transactions-table"},v=t("thead",null,[t("tr",null,[t("th",null,"From"),t("th",null,"To"),t("th",null,"Sum")])],-1),y=i({props:{transactions:{default:()=>[]}},setup(u){const c=u,d=m(()=>c.transactions.reduce((l,o)=>l+o.sum,0).toPrecision(7));return(l,o)=>u.transactions.length?(n(),a(r,{key:0},[t("div",C,[T,t("b",null,e(_(d))+" BTC",1)]),t("table",b,[v,t("tbody",null,[(n(!0),a(r,null,h(u.transactions,s=>(n(),a("tr",null,[t("td",null,e(s.from),1),t("td",null,e(s.to),1),t("td",null,e(s.sum)+" BTC",1)]))),256))])])],64)):p("",!0)}});export{y as default};
