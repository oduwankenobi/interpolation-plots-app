(this["webpackJsonpinterpolation-plots-app"]=this["webpackJsonpinterpolation-plots-app"]||[]).push([[0],{283:function(e,a,t){"use strict";t.r(a);var n=t(10),c=t(1),l=t.n(c),r=t(49),s=t.n(r),o=t(162),i=t(315),b=t(284),d=t(314),j=t(319),h=t(323),u=t(324),m=t(321),O=t(316),x=function(e){return Math.sin(e)*Math.sqrt(e)+1},p=function(e){var a=function(e){for(var a=[],t=[],n=e.length,c=[[],[],[],[],[]],l=0;l<500;l+=1){for(var r=l*Math.PI/100,s=0,o=0;o<n;o+=1){for(var i=1,b=0;b<n;b+=1)o!==b&&(i=i*(r-e[b])/(e[o]-e[b]));c[o].push({x:r,y:i}),s+=i*x(e[o])}a.push({x:r,y:x(r)}),t.push({x:r,y:s})}return{baseFunc:a,lagrangeFunc:t,basisFuncs:c}}(e.points),t=a.lagrangeFunc,c=a.basisFuncs,l=a.baseFunc;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(j.a,{maxDomain:{x:8,y:8},minDomain:{x:0,y:-8},theme:h.a.material,containerComponent:Object(n.jsx)(u.a,{responsive:!1}),width:800,height:800,children:[Object(n.jsx)(m.a,{x:50,y:50,orientation:"vertical",gutter:20,data:[{name:"\u0413\u0440\u0430\u0444\u0438\u043a \u0444\u0443\u043d\u043a\u0446\u0438\u0438",symbol:{fill:"red"},labels:{fill:"black"}},{name:"\u0413\u0440\u0430\u0444\u0438\u043a \u0438\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d\u0430",symbol:{fill:"green"},labels:{fill:"black"}},{name:"\u0411\u0430\u0437\u0438\u0441\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f 1",symbol:{fill:"#FF7F50"},labels:{fill:"black"}},{name:"\u0411\u0430\u0437\u0438\u0441\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f 2",symbol:{fill:"#FFB6C1"},labels:{fill:"black"}},{name:"\u0411\u0430\u0437\u0438\u0441\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f 3",symbol:{fill:"#CD853F"},labels:{fill:"black"}},{name:"\u0411\u0430\u0437\u0438\u0441\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f 4",symbol:{fill:"maroon"},labels:{fill:"black"}},{name:"\u0411\u0430\u0437\u0438\u0441\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f 5",symbol:{fill:"#008B8B"},labels:{fill:"black"}}]}),Object(n.jsx)(O.a,{data:l,animate:{duration:1500},style:{data:{stroke:"red"}}}),Object(n.jsx)(O.a,{data:t,animate:{duration:1500},style:{data:{stroke:"green"}}}),Object(n.jsx)(O.a,{data:c[0],animate:{duration:1500},style:{data:{stroke:"#FF7F50"}}}),Object(n.jsx)(O.a,{data:c[1],animate:{duration:1500},style:{data:{stroke:"#FFB6C1"}}}),Object(n.jsx)(O.a,{data:c[2],animate:{duration:1500},style:{data:{stroke:"#CD853F"}}}),Object(n.jsx)(O.a,{data:c[3],animate:{duration:1500},style:{data:{stroke:"maroon"}}}),Object(n.jsx)(O.a,{data:c[4],animate:{duration:1500},style:{data:{stroke:"#008B8B"}}})]})})},f=t(89),k=t(47),g=t(312),y=t(313),v=t(13),F=t(94),w=t(317),B=Object(v.a)({root:{color:F.a[400],"&$checked":{color:F.a[600]}},checked:{}})((function(e){return Object(n.jsx)(w.a,Object(k.a)({color:"default"},e))})),C={h05:"0.5 * h",h15:"1.5 * h",h25:"2.5 * h",h45:"4.5 * h",h65:"6.5 * h"},D=function(e){var a=e.dots,t=e.setDots,c=function(e){t(Object(k.a)(Object(k.a)({},a),{},Object(f.a)({},e.target.name,Object(k.a)(Object(k.a)({},a[e.target.name]),{},{checked:e.target.checked}))))};return Object(n.jsx)(g.a,{row:!0,children:Object.keys(a).map((function(e){return Object(n.jsx)(y.a,{control:Object(n.jsx)(B,{checked:a[e].checked,onChange:c,name:e}),label:C[e]})}))})},M=Object(d.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:800,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)}}})),I=Math.PI/7,J=function(){var e=Object(c.useState)({h05:{checked:!0,value:.5*I},h15:{checked:!0,value:1.5*I},h25:{checked:!0,value:2.5*I},h45:{checked:!0,value:4.5*I},h65:{checked:!0,value:6.5*I}}),a=Object(o.a)(e,2),t=a[0],l=a[1],r=M(),s=Object.keys(t).filter((function(e){return t[e].checked})).map((function(e){return t[e].value}));return Object(n.jsx)("div",{className:r.root,children:Object(n.jsxs)("div",{className:r.paper,children:[Object(n.jsx)(b.a,{variant:"h3",gutterBottom:!0,children:"\u0418\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u044f \u041b\u0430\u0433\u0440\u0430\u043d\u0436\u0430"}),Object(n.jsx)(i.a,{container:!0,wrap:"nowrap",spacing:2,children:Object(n.jsxs)(i.a,{item:!0,xs:!0,children:[Object(n.jsx)(b.a,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u0447\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0438\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u043c\u043d\u043e\u0433\u043e\u0447\u043b\u0435\u043d"}),Object(n.jsx)(D,{dots:t,setDots:l}),Object(n.jsx)(p,{points:s})]})})]})})};s.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(J,{})}),document.getElementById("root"))}},[[283,1,2]]]);
//# sourceMappingURL=main.3bd7ae8f.chunk.js.map