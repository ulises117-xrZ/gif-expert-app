(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=n(2),u=n(9),o=n(0),j=function(e){var t=e.setCategories,n=(e.categories,Object(a.useState)("")),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),r.trim()?(t((function(e){return[r].concat(Object(u.a)(e))})),i("")):alert("no data")}(e)},children:Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)}})})},d=n(10),l=n(6),p=n.n(l),f=n(8),b=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=fYWL3cquL4heucAcM7D9cKWDRfKJUjU8"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__pulse ",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__pulse",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(m,Object(d.a)({},e),e.id)}))})]})};function h(){var e=Object(a.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(j,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(O,{category:e},e)}))})]})}n(17);i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.73dc4050.chunk.js.map