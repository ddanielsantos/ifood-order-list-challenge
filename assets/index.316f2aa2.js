var h=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(s,o)=>{var n={};for(var i in s)f.call(s,i)&&o.indexOf(i)<0&&(n[i]=s[i]);if(s!=null&&h)for(var i of h(s))o.indexOf(i)<0&&y.call(s,i)&&(n[i]=s[i]);return n};import{j as p,r as a,a as m,R as g,b as x}from"./vendor.0e1c59ae.js";const _=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};_();const A="_app_3uy0c_1",b="_filterArea_3uy0c_11",v="_ordersArea_3uy0c_21";var l={app:A,filterArea:b,ordersArea:v};const j="_modal_vjxsm_1";var N={modal:j};const e=p.exports.jsx,c=p.exports.jsxs,O={_id:"s",items:[{description:"ruim",quantity:1,price:2},{description:"t Boa",quantity:1,price:2},{description:"sdg",quantity:1,price:2}]},q=o=>{var s=u(o,[]);const[n,i]=a.exports.useState(O);return a.exports.useEffect(()=>{async function t(r){const d=await m.get(`http://localhost:3483/api/orders/${r}/items`);i(d.data[0])}t(s.id)},[]),e("div",{className:N.modal,children:c("table",{children:[e("thead",{children:c("tr",{children:[e("th",{children:"Description"}),e("th",{children:"Quantity"}),e("th",{children:"Unit Price"}),e("th",{children:"Total"})]})}),e("tbody",{children:c("tr",{children:[e("td",{children:n.items[0].description}),e("td",{children:n.items[0].quantity}),e("td",{children:n.items[0].price}),e("td",{children:n.items[0].quantity*n.items[0].price})]})})]})})};function L(){const[s,o]=a.exports.useState([]),[n,i]=a.exports.useState(!0);return a.exports.useEffect(()=>{async function t(){try{const r=await m.get("http://localhost:3483/api/orders");o(r.data)}catch{alert("Something gone wrong")}}t()},[]),c("div",{className:l.app,children:[e("h1",{children:"Order List"}),e("div",{className:l.filterArea}),n&&e(q,{id:"61f2d70110062c96733e7b56",client:{name:"a",email:"a",phone:"s"}}),c("div",{className:l.ordersArea,children:[s[0]&&c("table",{children:[e("thead",{children:c("tr",{children:[e("th",{children:"Client"}),e("th",{children:"Confirmed At"}),e("th",{children:"Restaurant"})]})}),e("tbody",{children:s.map((t,r)=>c("tr",{children:[e("td",{children:t.client}),e("td",{children:t.confirmedAt.slice(0,6)}),e("td",{children:t.restaurant})]},r))})]}),!s[0]&&e("h2",{children:"No orders"})]})]})}g.render(e(x.StrictMode,{children:e(L,{})}),document.getElementById("root"));