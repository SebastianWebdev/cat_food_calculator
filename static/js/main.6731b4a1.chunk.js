(this["webpackJsonpcat-food-pwa"]=this["webpackJsonpcat-food-pwa"]||[]).push([[0],{83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),i=n.n(c),o=n(139),s=n(134),l=n(2),u=Object(s.a)({paper:{minHeight:"100vh"}});function j(){var e=u();return Object(l.jsx)(o.a,{className:e.paper,children:Object(l.jsx)(w,{})})}var d=n(13),b=n(141),m=n(135),f=n(142),h=n(138),g=n(143),p=n(137),v=n(133),O=n(144),x=Object(s.a)({mainContainer:{minHeight:"100vh",display:"flex!important",flexWrap:"nowrap",flexDirection:"column",justifyContent:"center"},typography:{textAlign:"center",marginTop:10,flexBasis:"100%"},container:{height:"100%",padding:10},gridItems:{justifyContent:"center",flexBasis:"25%"},resultsPaper:{marginTop:10,padding:10},resultContainer:{flexWrap:"nowrap"},resultsNames:{flexBasis:"50%"},resultsDivider:{width:"100%"}}),w=function(){var e=x(),t=Object(a.useState)(""),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),u=s[0],j=s[1],w=Object(a.useState)(""),k=Object(d.a)(w,2),y=k[0],N=k[1],C=Object(a.useState)(""),W=Object(d.a)(C,2),S=W[0],B=W[1],I=Object(a.useState)(""),T=Object(d.a)(I,2),P=T[0],M=T[1],z=Object(a.useMemo)((function(){return{p:Number(r),w:Number(P),f:Number(u),a:Number(y),fi:Number(S)}}),[r,S,u,y,P]),F=Object(a.useMemo)((function(){return z.p+z.w+z.f+z.a+z.fi<=100}),[z]),A=Object(a.useMemo)((function(){return""!==r&&""!==S&&""!==u&&""!==y&&""!==P}),[r,S,u,y,P]),D=Object(a.useMemo)((function(){var e=z.p,t=z.w,n=z.f,a=100-t,r=a-e-n-z.a-z.fi;return[{name:"Sucha masa",unit:"[g]",value:a,key:1},{name:"Bia\u0142ko",unit:"[%]",value:e/a*100,key:2},{name:"T\u0142uszcze",unit:"[%]",value:n/a*100,key:3},{name:"W\u0119gle",unit:"[g]",value:r,key:4},{name:"W\u0119gle",unit:"[%]",value:r/a*100,key:5},{name:"kcal/100g",unit:"",value:3.5*e+8.5*n+3.5*r,key:6}]}),[z]);return Object(l.jsxs)(b.a,{className:e.mainContainer,children:[!F&&Object(l.jsxs)(m.a,{severity:"error",children:[Object(l.jsx)(f.a,{children:"Error"}),"Suma sk\u0142adnik\xf3w jest wi\u0119ksza ni\u017c 100"]}),Object(l.jsx)(o.a,{elevation:3,children:Object(l.jsxs)(h.a,{className:e.container,alignItems:"center",container:!0,spacing:2,children:[Object(l.jsx)(h.a,{className:e.typography,item:!0,children:Object(l.jsx)(g.a,{children:"Wprowad\u017a warto\u015bci"})}),Object(l.jsx)(h.a,{className:e.gridItems,container:!0,item:!0,children:Object(l.jsx)(p.a,{children:Object(l.jsx)(v.a,{type:"number",label:"Bia\u0142ko",value:r,onChange:function(e){c(e.target.value)},error:!F})})}),Object(l.jsx)(h.a,{className:e.gridItems,container:!0,item:!0,children:Object(l.jsx)(p.a,{children:Object(l.jsx)(v.a,{type:"number",label:"T\u0142uszcz",onChange:function(e){j(e.target.value)},value:u,error:!F})})}),Object(l.jsx)(h.a,{className:e.gridItems,container:!0,item:!0,children:Object(l.jsx)(p.a,{children:Object(l.jsx)(v.a,{type:"number",label:"Popi\xf3\u0142",onChange:function(e){N(e.target.value)},value:y,error:!F})})}),Object(l.jsx)(h.a,{className:e.gridItems,container:!0,item:!0,children:Object(l.jsx)(p.a,{children:Object(l.jsx)(v.a,{type:"number",label:"W\u0142\xf3kno",onChange:function(e){B(e.target.value)},value:S,error:!F})})}),Object(l.jsx)(h.a,{className:e.gridItems,container:!0,item:!0,children:Object(l.jsx)(p.a,{children:Object(l.jsx)(v.a,{type:"number",label:"Wilgo\u0107",onChange:function(e){M(e.target.value)},value:P,error:!F})})})]})}),Object(l.jsx)(o.a,{className:e.resultsPaper,elevation:3,children:Object(l.jsx)(h.a,{container:!0,children:D.map((function(t){return Object(l.jsxs)(h.a,{className:e.resultContainer,container:!0,item:!0,children:[Object(l.jsx)(h.a,{className:e.resultsNames,item:!0,children:Object(l.jsx)(g.a,{children:"".concat(t.name," ").concat(t.unit)})}),Object(l.jsx)(h.a,{item:!0,children:Object(l.jsx)(g.a,{children:"".concat((n=t.value,A&&F?n.toFixed(2):0))})}),Object(l.jsx)(O.a,{className:e.resultsDivider})]},t.key);var n}))})})]})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},C=n(132),W=n(61),S=n(140),B=Object(W.a)({components:{MuiCssBaseline:{styleOverrides:{body:{color:"darkred",backgroundColor:"grey","& h1":{color:"black"}}}}},palette:{mode:"dark",primary:{main:"#ff6f61",contrastText:"#ffffff"},secondary:{main:"#ffc322"}}});i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsxs)(S.a,{theme:B,children:[Object(l.jsx)(C.a,{}),Object(l.jsx)(j,{})]})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cat_food_calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cat_food_calculator","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(t,e)}))}}(),N()}},[[83,1,2]]]);
//# sourceMappingURL=main.6731b4a1.chunk.js.map