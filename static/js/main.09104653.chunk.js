(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(6),r=c.n(s),i=(c(11),c(3)),l=c.n(i),o=c(5),d=c(2),j=(c(13),c.p+"static/media/cloud.c93ab75c.svg"),u=c(0);var h=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{className:"block__card__image",src:j,alt:"cloud_image"}),Object(u.jsx)("h4",{className:"blocks__card__text",children:"Fill in all the fields and the weather will be displayed"})]})};var b=function(e){var t=e.temp,c=e.datesToRender,a=e.icon.icon;return Object(u.jsx)(u.Fragment,{children:a?Object(u.jsxs)("div",{className:"OneDayForecast",children:[Object(u.jsx)("div",{className:"OneDayForecast__data",children:c}),Object(u.jsx)("img",{className:"OneDayForecast__image",src:"http://openweathermap.org/img/wn/".concat(a,"@2x.png"),alt:"rain_image"}),Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"OneDayForecast__temperature",children:["+",t," C"]})]}):Object(u.jsx)(h,{})})};c(15);var m=function(e){var t=e.dataSeven.dataSeven,c=0,a={width:"80%",height:"200px",display:"flex",position:"relative",left:"0px",transition:"all ease 1s"};function n(e){var t=new Date(1e3*e);return Object(u.jsx)("div",{className:"slider__card__data",children:t.toLocaleString("ru",{day:"numeric",month:"numeric",year:"numeric"})})}return console.log(a.left),Object(u.jsx)(u.Fragment,{children:t?Object(u.jsxs)("div",{className:"sevenDaysForecast",children:[Object(u.jsx)("div",{className:"slider",children:Object(u.jsx)("div",{style:a,children:t&&t.map((function(e,t){return Object(u.jsxs)("div",{className:"slider__card",children:[n(e.dt),Object(u.jsx)("img",{className:"slider__card__image",src:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),alt:"rain_image"}),Object(u.jsxs)("div",{className:"slider__card__temperature",children:[Math.ceil(e.temp.day),"\xb0 C"]})]},t)}))})}),Object(u.jsx)("button",{className:"slider-prev",onClick:function(){(c+=127)>508&&(c=0,a=Object.assign({left:"-127px"}))},children:"Prev"}),Object(u.jsx)("button",{className:"slider-next",onClick:function(){(c-=127)<0&&(c=508)},children:"Next"})]}):Object(u.jsx)(h,{})})};var x=function(){var e="4ca8521531042afe2d4080affc6fb41e",t={"\u0421\u0430\u043c\u0430\u0440\u0430":[53.195873,50.100193],"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438":[53.507836,49.420393],"\u0421\u0430\u0440\u0430\u0442\u043e\u0432":[51.533557,46.034257],"\u041a\u0430\u0437\u0430\u043d\u044c":[55.796127,49.106405],"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440":[45.03547,38.975313]},c=Object(a.useState)([]),n=Object(d.a)(c,2),s=n[0],r=n[1],i=Object(a.useState)([]),j=Object(d.a)(i,2),h=j[0],x=j[1],p=Object(a.useState)([]),O=Object(d.a)(p,2),_=O[0],v=O[1],f=Object(a.useState)([]),g=Object(d.a)(f,2),N=g[0],y=g[1],w=function(){var t=Object(o.a)(l.a.mark((function t(c,a){var n,s,i,o,d,j,u,h,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Math.trunc((new Date).getTime()/1e3),t.next=3,fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=".concat(c,"&lon=").concat(a,"&dt=").concat(n,"&units=metric&appid=").concat(e));case 3:return s=t.sent,t.next=6,s.json();case 6:i=t.sent,o=i.current.dt,d=i.current.weather[0].icon,j=Math.ceil(i.current.temp),r({temperature:j}),x({icon:d}),u={day:"numeric",month:"numeric",year:"numeric"},h=new Date(1e3*o),b=h.toLocaleString("ru",u),v({dates:b});case 16:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),k=Object.values(s),F=Object.values(_),C=function(){var t=Object(o.a)(l.a.mark((function t(c,a){var n,s,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(c,"&lon=").concat(a,"&exclude=current&units=metric&appid=").concat(e));case 2:return n=t.sent,t.next=5,n.json();case 5:s=t.sent,r=s.daily,y({dataSeven:r});case 8:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),S=function(e){var c;return null!==(c=t[e])&&void 0!==c?c:[]};return Object(u.jsxs)("div",{className:"blocks",children:[Object(u.jsxs)("div",{className:"blocks__card",children:[Object(u.jsx)("h1",{className:"blocks__card__header",children:"7 Days Forecast"}),Object(u.jsx)("div",{className:"blocks__card__inputs",children:Object(u.jsxs)("select",{className:"blocks__card__select",onChange:function(e){return function(e){var t=S(e),c=Object(d.a)(t,2),a=c[0],n=c[1];C(a,n)}(e.target.value)},placeholder:"Select City",selected:!0,children:[Object(u.jsx)("option",{type:"text",name:"city",value:"\u0421\u0430\u043c\u0430\u0440\u0430",children:"\u0421\u0430\u043c\u0430\u0440\u0430"}),Object(u.jsx)("option",{type:"text",name:"city",value:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",children:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438"}),Object(u.jsx)("option",{type:"text",name:"city",value:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432",children:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432"}),Object(u.jsx)("option",{type:"text",name:"city",value:"\u041a\u0430\u0437\u0430\u043d\u044c",children:"\u041a\u0430\u0437\u0430\u043d\u044c"}),Object(u.jsx)("option",{type:"text",name:"city",value:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",children:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"})]})}),Object(u.jsx)(m,{dataSeven:N})]}),Object(u.jsxs)("div",{className:"blocks__card",children:[Object(u.jsx)("h1",{className:"blocks__card__header",children:"Forecast for a Date in the Past"}),Object(u.jsxs)("div",{className:"blocks__card__inputs",children:[Object(u.jsxs)("select",{className:"blocks__card__select",onChange:function(e){return function(e){console.log(e);var t=S(e),c=Object(d.a)(t,2),a=c[0],n=c[1];w(a,n)}(e.target.value)},placeholder:"Select City",children:[Object(u.jsx)("option",{children:"\u0421\u0430\u043c\u0430\u0440\u0430"}),Object(u.jsx)("option",{children:"\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438"}),Object(u.jsx)("option",{children:"\u0421\u0430\u0440\u0430\u0442\u043e\u0432"}),Object(u.jsx)("option",{children:"\u041a\u0430\u0437\u0430\u043d\u044c"}),Object(u.jsx)("option",{children:"\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440"})]}),Object(u.jsx)("input",{className:"blocks__card__select",type:"date",onChange:function(e){e.target.value}})]}),Object(u.jsx)(b,{temp:k,datesToRender:F,icon:h})]})]})};c(16);var p=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsxs)("div",{className:"headline",children:[Object(u.jsx)("h1",{className:"headline__text",children:"Weather"}),Object(u.jsx)("h1",{className:"headline__text headline__text_right",children:"forecast"})]}),Object(u.jsx)(x,{}),Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("h4",{className:"footer__text",children:"C \u041b\u042e\u0411\u041e\u0412\u042c\u042e \u041e\u0422 MERCURY DEVELOPMENT"})})]})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.09104653.chunk.js.map