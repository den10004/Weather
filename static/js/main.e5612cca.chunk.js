(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(9),r=c.n(s),i=(c(14),c(8)),l=c(4),o=c.n(l),j=c(7),d=c(2),u=(c(16),c.p+"static/media/cloud.c93ab75c.svg"),b=c(0);var h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{className:"block__card__image",src:u,alt:"cloud_image"}),Object(b.jsx)("h4",{className:"blocks__card__text",children:"Fill in all the fields and the weather will be displayed"})]})},O=function(e){var t=e.temp,c=e.datesToRender,a=e.icon,n=(null===a||void 0===a?void 0:a.icon)||"";return Object(b.jsx)(b.Fragment,{children:n?Object(b.jsxs)("div",{className:"OneDayForecast",children:[Object(b.jsx)("div",{className:"OneDayForecast__data",children:c}),Object(b.jsx)("img",{className:"OneDayForecast__image",src:"http://openweathermap.org/img/wn/".concat(n,"@2x.png"),alt:"rain_image"}),Object(b.jsxs)("div",{className:"OneDayForecast__temperature",children:["+",t,"\xb0 C"]})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{style:{margin:"0 auto",paddingTop:"10px"},children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 \u0438 \u0434\u0430\u0442\u0443 \u0437\u0430 1- 5 \u0434\u043d\u0435\u0439"}),Object(b.jsx)(h,{})]})})},m=(c(18),function(e){var t=e.dataSeven.dataSeven;function c(e){var t=new Date(1e3*e);return Object(b.jsx)("div",{className:"slider__card__data",children:t.toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})})}var n=Object(a.useState)([1]),s=Object(d.a)(n,2),r=(s[0],s[1],Object(a.useRef)(null)),i=Object(a.useState)(!1),l=Object(d.a)(i,2),o=(l[0],l[1]),j=Object(a.useState)(!1),u=Object(d.a)(j,2),O=(u[0],u[1]),m=0;return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsxs)("div",{className:"slider",children:[Object(b.jsx)("div",{className:"slider_track",ref:r,children:Object(b.jsx)("div",{className:"slider__item",children:Object(b.jsx)("div",{className:"slider-line",children:t&&t.map((function(e,t){return Object(b.jsxs)("div",{className:"slider__card",children:[c(e.dt),Object(b.jsx)("img",{className:"slider__card__image",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"rain_image"}),Object(b.jsxs)("div",{className:"slider__card__temperature",children:[Math.ceil(e.temp.day),"\xb0 C"]})]},t)}))})})}),Object(b.jsx)("button",{className:"slider__button_next",onClick:function(){-900===m?(O(!0),o(!1)):(o(!1),m-=300,r.current.childNodes.forEach((function(e){e.style="transform: translateX(".concat(m,"px)")})))}}),Object(b.jsx)("button",{className:"slider__button_prev",onClick:function(){0===m?o(!0):(m+=300,o(!1),r.current.childNodes.forEach((function(e){e.style="transform: translateX(".concat(m,"px)")})))}})]}):Object(b.jsx)(h,{})})});var _=function(){var e="4ca8521531042afe2d4080affc6fb41e",t={"\u0421\u0430\u043c\u0430\u0440\u0430":[53.195873,50.100193],"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438":[53.507836,49.420393],"\u0421\u0430\u0440\u0430\u0442\u043e\u0432":[51.533557,46.034257],"\u041a\u0430\u0437\u0430\u043d\u044c":[55.796127,49.106405],"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440":[45.03547,38.975313]},c=Object(a.useState)({}),n=Object(d.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(),u=Object(d.a)(l,2),h=u[0],_=u[1],x=Object(a.useState)({}),p=Object(d.a)(x,2),f=p[0],v=p[1],g=Object(a.useState)(45.03547),N=Object(d.a)(g,2),w=N[0],S=N[1],k=Object(a.useState)(38.975313),y=Object(d.a)(k,2),F=y[0],C=y[1],D=Object(a.useState)([]),E=Object(d.a)(D,2),M=E[0],T=E[1],L=Object(a.useState)([]),R=Object(d.a)(L,2),P=R[0],B=R[1],I=Object(a.useState)([]),J=Object(d.a)(I,2),X=J[0],Y=J[1],A=Object(a.useState)([]),U=Object(d.a)(A,2),V=U[0],W=U[1],q=function(){var t=Object(j.a)(o.a.mark((function t(){var c,a,n,s,i,l,j,d;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(w,"&lon=").concat(F,"&dt=").concat(M,"&units=metric&appid=").concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:if(a=t.sent,!(c.status>=400)){t.next=11;break}return W([]),Y([]),_([]),t.abrupt("return");case 11:n=a.current.dt,s=a.current.weather[0].icon,i=Math.ceil(a.current.temp),r({temperature:i}),_({icon:s}),l={day:"numeric",month:"numeric",year:"numeric"},j=new Date(1e3*n),d=j.toLocaleString("ru",l),v({dates:d});case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){var t=Object(j.a)(o.a.mark((function t(c,a){var n,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c,"&lon=").concat(a,"&exclude=current&units=metric&appid=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:if(s=t.sent,!(n.status>=400)){t.next=8;break}return t.abrupt("return");case 8:r=s.daily,B({dataSeven:r});case 10:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),G=function(e){var c;return null!==(c=t[e])&&void 0!==c?c:[]};return Object(a.useEffect)((function(){Y(Object(i.a)(Object.values(s)))}),[s]),Object(a.useEffect)((function(){W(Object(i.a)(Object.values(f)))}),[f]),Object(a.useEffect)((function(){q()}),[F,w,M]),Object(b.jsxs)("div",{className:"blocks",children:[Object(b.jsxs)("div",{className:"blocks__card",children:[Object(b.jsx)("h1",{className:"blocks__card__header",children:"7 Days Forecast"}),Object(b.jsx)("div",{className:"blocks__card__inputs",children:Object(b.jsxs)("select",{className:"blocks__card__select",onChange:function(e){return function(e){var t=G(e),c=Object(d.a)(t,2),a=c[0],n=c[1];z(a,n)}(e.target.value)},children:[Object(b.jsx)("option",{selected:!0,disabled:!0,children:"Select City"}),Object(b.jsx)("option",{value:"\u0421\u0430\u043c\u0430\u0440\u0430",children:"\u0421\u0430\u043c\u0430\u0440\u0430"}),Object(b.jsx)("option",{value:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",children:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438"}),Object(b.jsx)("option",{value:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",children:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432"}),Object(b.jsx)("option",{value:"\u041a\u0430\u0437\u0430\u043d\u044c",children:"\u041a\u0430\u0437\u0430\u043d\u044c"}),Object(b.jsx)("option",{value:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",children:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"})]})}),Object(b.jsx)(m,{dataSeven:P})]}),Object(b.jsxs)("div",{className:"blocks__card",children:[Object(b.jsx)("h1",{className:"blocks__card__header",children:"Forecast for a Date in the Past"}),Object(b.jsxs)("div",{className:"blocks__card__inputs",children:[Object(b.jsxs)("select",{className:"blocks__card__select",onChange:function(e){return function(e){var t=G(e),c=Object(d.a)(t,2),a=c[0],n=c[1];S(a),C(n)}(e.target.value)},children:[Object(b.jsx)("option",{selected:!0,disabled:!0,children:"Select City"}),Object(b.jsx)("option",{value:"\u0421\u0430\u043c\u0430\u0440\u0430",children:"\u0421\u0430\u043c\u0430\u0440\u0430"}),Object(b.jsx)("option",{value:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",children:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438"}),Object(b.jsx)("option",{value:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",children:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432"}),Object(b.jsx)("option",{value:"\u041a\u0430\u0437\u0430\u043d\u044c",children:"\u041a\u0430\u0437\u0430\u043d\u044c"}),Object(b.jsx)("option",{value:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",children:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"})]}),Object(b.jsx)("input",{className:"blocks__card__select",type:"date",onChange:function(e){return function(e){var t=new Date(e),c=t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear(),a=Date.parse(c)/1e3+43200;T(a)}(e.target.value)}})]}),Object(b.jsx)(O,{temp:X,datesToRender:V,icon:h})]})]})};c(19);var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"headline",children:[Object(b.jsx)("h1",{className:"headline__text",children:"Weather"}),Object(b.jsx)("h1",{className:"headline__text headline__text_right",children:"forecast"})]}),Object(b.jsx)(_,{}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("h4",{className:"footer__text",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),p()}},[[20,1,2]]]);
//# sourceMappingURL=main.e5612cca.chunk.js.map