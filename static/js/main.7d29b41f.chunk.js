(this["webpackJsonpescape-room"]=this["webpackJsonpescape-room"]||[]).push([[0],{47:function(n,t,e){n.exports=e(63)},62:function(n,t,e){},63:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(33),i=e.n(o),c=e(11),u=e(34),l=e(35),f=e(44),s=e(36),m=e(45),d=e(16),p=e(7),b=e(26),g={API_KEY:"AIzaSyAld4LY5FCsoABjghFBnqWaKEcxpq_b344",PROJECT_ID:"onceaweek2020",MESSAGING_SENDER_ID:"989418613729",MEASUREMENT_ID:"G-ZC0WB66S7X"},x=(e(51),e(53),g.PROJECT_ID),h=g.MESSAGING_SENDER_ID,v=g.MEASUREMENT_ID,E={apiKey:"".concat(g.API_KEY),authDomain:"".concat(x,".firebaseapp.com"),databaseURL:"https://".concat(x,".firebaseio.com"),projectId:"".concat(x),storageBucket:"".concat(x,".appspot.com"),messagingSenderId:"".concat(h),appId:"1:".concat(h,":web:f39c488e68d4339e6300a0"),measurementId:"".concat(v)};b.initializeApp(E);var j=b.firestore(),O=e(19),w=e(1),k=e(2);function y(){var n=Object(w.a)(["\n\n\tdisplay:         flex;\n\talign-items:     center;\n\tjustify-content: flex-end;\n\n\twidth:      100%;\n\tpadding:    10px 5px;\n\tbox-sizing: border-box;\n\n\t","\n\n"]);return y=function(){return n},n}var T=k.a.nav(y(),(function(n){return n.noneHeader&&"\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 10;\n\t"}));function z(){var n=Object(w.a)(["\n\n\tdisplay:         flex;\n\talign-items:     center;\n\tjustify-content: center;\n\n\tz-index: 11;\n\tpadding: 10px;\n\theight: 41px;\n\t/*margin-right: 10px;*/\n\n"]);return z=function(){return n},n}var C=k.a.div(z());function S(){var n=Object(w.a)(["\n\tmargin-top: 10px;\n\tmargin-bottom: 8px;\n\twidth: 90%;\n"]);return S=function(){return n},n}var _=k.a.img(S());function I(){var n=Object(w.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-top: 40px;\n\timg {\n\t\twidth: 30px;\n\t\tmargin-right: 8px;\n\t}\n"]);return I=function(){return n},n}function B(){var n=Object(w.a)(["\n\n\tdisplay:         flex;\n\n\tjustify-content: center;\n\n\twidth: 50%;\n\theight: 100%;\n\n\tz-index: 10;\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbackground-color: rgba(0,0,0,0.6);\n\n\tpadding: 10px;\n\t/*margin-right: 10px;*/\n\tul {\n\t\twidth: 100%;\n\t\tmargin-top: 30px;\n\t\tpadding: 10px;\n\t\tlist-style: none;\n\t\tbox-sizing: border-box;\n\t\tcolor: #fff;\n\t\tfont-weight: 700;\n\t}\n\n\th3 {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t","\n\n"]);return B=function(){return n},n}function D(){var n=Object(w.a)(["\n\n\n"]);return D=function(){return n},n}var F={Hamburger:C,HeaderWrapper:T,Instagram:k.a.div(I()),Kakao:_,Menu:k.a.div(B(),(function(n){return!n.show&&"\n\t\tdisplay: none;\n\t"})),Text:k.a.div(D())},L=function(n){var t=Object(r.useState)(!1),e=Object(p.a)(t,2),o=e[0],i=e[1];return a.a.createElement(F.HeaderWrapper,{noneHeader:n.noneHeader},a.a.createElement(F.Hamburger,{onClick:function(){return i(!o)}},a.a.createElement("img",{style:{display:"".concat(o?"none":"block")},src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Fhamberger_icon.svg?alt=media&token=1650b965-25ec-41aa-b5d2-25890019d046"}),a.a.createElement("img",{style:{display:"".concat(o?"block":"none")},src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Fhamberger_icon_close.svg?alt=media&token=1c8f581e-0c86-4506-be35-9bd9accd6797"})),a.a.createElement(F.Menu,{show:o},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("h3",null,"\ubb38\uc758\ud558\uae30"),a.a.createElement(F.Kakao,{src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Fkakao.png?alt=media&token=e499361e-16d1-40b3-9092-6fff5787433e"}),a.a.createElement(F.Text,null,"\uce74\uce74\uc624\ud1a1 \uce5c\uad6c\ucd94\uac00 -"),a.a.createElement(F.Text,null,"23\uc2dc52\ubd84"),a.a.createElement("a",{href:"https://www.instagram.com/23h52_/",target:"_blank"},a.a.createElement(F.Instagram,null,a.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Finstagram.svg?alt=media&token=64b4c3ee-9f3f-4f73-a8e7-5b4779754337"}),a.a.createElement("span",null,"23h52m_")))))))};function R(){var n=Object(w.a)(["\n\n\tflex: 1 0 auto;\n\tdisplay:         flex;\n\tflex-direction:  column;\n\tflex:            1 0 auto;\n\talign-items: center;\n\twidth:           100%;\n\n\n"]);return R=function(){return n},n}var W=k.a.div(R());function A(){var n=Object(w.a)(["\n\n\tdisplay:        flex;\n\tflex-direction: column;\n\tposition: absolute;\n\twidth:          100%;\n\theight:         100%;\n\n"]);return A=function(){return n},n}var M=k.a.div(A()),H=function(n){var t=n.noneHeader,e=Object(O.a)(n,["noneHeader"]);return console.log("props",e),a.a.createElement(M,null,a.a.createElement(L,{noneHeader:t}),a.a.createElement(W,e))};function N(){var n=Object(w.a)(["\n\n\tfont-weight: 700;\n\n"]);return N=function(){return n},n}function U(){var n=Object(w.a)(["\n\n  display: flex;\n  width:   100%;\n  align-items: center;\n  justify-content: center;\n\n  &:last-child {\n    margin-bottom: 100px;\n  }\n\n"]);return U=function(){return n},n}function K(){var n=Object(w.a)(["\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tborder-radius: 4%;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: rgba(0,0,0,0.4);\n\tz-index: 5;\n\tfont-size: 36px;\n\tcolor: #fff;\n\n"]);return K=function(){return n},n}function G(){var n=Object(w.a)(["\n\n  width: 58px;\n  height: 3px;\n  background-color: #C2C2C2;\n  margin: 10px 0px;\n\n"]);return G=function(){return n},n}function J(){var n=Object(w.a)(["\n\n  display:        flex;\n  flex-direction: column;\n  align-items:    center;\n\n  margin-bottom: 20px;\n  width: 100%;\n\n"]);return J=function(){return n},n}function P(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: column;\n\n  position: relative;\n  width:     100%;\n  max-width: 300px;\n  height: 320px;\n  border-radius: 4%;\n  background: url(",") center center;\n  background-size: 120%;\n  color: #C2C2C2;\n  font-weight: 700;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 12px;\n\n"]);return P=function(){return n},n}function q(){var n=Object(w.a)(["\n\n\tflex: 0 0 auto;\n\tdisplay: inline-flex;\n\twidth: 121px;\n\tflex-direction: column;\n\n"]);return q=function(){return n},n}function V(){var n=Object(w.a)(["\n\n\tfont-size: 94px;\n\tline-height: 77px;\n\n"]);return V=function(){return n},n}function Y(){var n=Object(w.a)(["\n\n  display:          flex;\n  flex-direction: column;\n  align-items:      center;\n  justify-content:  center;\n  width:            100%;\n\n"]);return Y=function(){return n},n}var Q={EscapeRatio:k.a.span(N()),Item:k.a.div(U()),Layer:k.a.div(K()),Line:k.a.div(G()),Link:Object(k.a)(c.b)(J()),Room:k.a.div(P(),(function(n){return n.url})),TextBox:k.a.div(q()),TimeLimit:k.a.div(V()),Wrapper:k.a.div(Y())},X=function(n){var t=n.datas;if(!t.length)return null;var e=function(n){var t=n.escape,e=n.joined;return 0!==e?Math.floor(t/e*100):0};return a.a.createElement(Q.Wrapper,null,t.map((function(n){var t=n.state,r=n._id,o=n.thumbnail,i=n.limit,c=n.joined,u=n.escape;return a.a.createElement(Q.Item,{key:r},"activated"===t&&a.a.createElement(Q.Link,{to:"room/".concat(r)},a.a.createElement(Q.Room,{url:o},a.a.createElement(Q.TextBox,null,a.a.createElement(Q.TimeLimit,null,i),a.a.createElement(Q.Line,null),a.a.createElement(Q.EscapeRatio,null,"\ud0c8\ucd9c\ube44\uc728 ",e({escape:u,joined:c}),"%")))),"deactivated"===t&&a.a.createElement(Q.Room,{url:o},a.a.createElement(Q.Layer,null,"\uc900\ube44\uc911"),a.a.createElement(Q.TextBox,null,a.a.createElement(Q.TimeLimit,null,i),a.a.createElement(Q.Line,null),a.a.createElement(Q.EscapeRatio,null,"\ud0c8\ucd9c\ube44\uc728 ",e({escape:u,joined:c}),"%"))))})))},Z=function(){var n=Object(r.useState)(null),t=Object(p.a)(n,2),e=t[0],o=t[1];return Object(r.useEffect)((function(){j.collection("test2").get().then((function(n){var t=[];n.forEach((function(n){t.push(n.data())})),o(t[0].rooms),console.log("result",t[0].rooms)}))}),[]),e?a.a.createElement("div",null,a.a.createElement(H,null,a.a.createElement(X,{datas:e}))):null},$=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"About"))},nn=e(43);function tn(){var n=Object(w.a)(["\n\n\tpadding: 4px 8px;\n\tcolor: #fff;\n\tbackground-color: #d2d2d2;\n\tborder-radius: 10px;\n\tfont-weight: 700;\n\tcursor: pointer;\n\n"]);return tn=function(){return n},n}function en(){var n=Object(w.a)(["\n\n  position: fixed;\n  top: 10px;\n  left: 10px;\n\n  font-size: 60px;\n  font-weight: 900;\n  color: #646464;\n\n  text-shadow:\n    -1px -1px 0 #fff,\n    1px -1px 0 #fff,\n    -1px 1px 0 #fff,\n    1px 1px 0 #fff;\n\n"]);return en=function(){return n},n}function rn(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: row;\n\n  padding: 0px 20px 0 5px;\n  box-sizing: border-box;\n\n  input, button {\n    font-size: 16px;\n    padding: 4px 6px;\n    border-radius: 4px;\n  }\n\n  input {\n    flex: 0 0 auto;\n    height: 40px;\n    width: 80%;\n    border: 1px solid rgba(200,200,200, 80%);\n    background-color: rgba(255,255,255, 80%);\n    margin-right: 10px;\n  }\n\n  button {\n    flex: 1 0 auto;\n    width: auto;\n    height: 50px;\n    min-width: 5%;\n    background-color: #979797;\n    color: white;\n  }\n\n"]);return rn=function(){return n},n}function an(){var n=Object(w.a)(["\n\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n\n  padding: 10px;\n  box-sizing: border-box;\n\n  background-color: rgba(0, 0, 0, 50%);\n  align-items: center;\n  justify-content: center;\n\n\n"]);return an=function(){return n},n}function on(){var n=Object(w.a)(["\n\n  display: inline-flex;\n  flex-direction: column;\n\n"]);return on=function(){return n},n}function cn(){var n=Object(w.a)(["\n\n\n"]);return cn=function(){return n},n}function un(){var n=Object(w.a)(["\n\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\n\timg {\n\t\twidth: 100%;\n\t}\n\n"]);return un=function(){return n},n}function ln(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: column;\n\n  width:     100%;\n  max-width: 300px;\n  height: 320px;\n  border-radius: 4%;\n  background-color: red;\n  background: url(",") center center;\n  background-size: 120%;\n  color: #C2C2C2;\n  font-weight: 700;\n  padding: 10px;\n  font-size: 12px;\n\n"]);return ln=function(){return n},n}function fn(){var n=Object(w.a)(["\n\n\tmargin-bottom: 10px;\n\tbackground-color: rgba(0,0,0, 50%);\n\tpadding: 6px 10px;\n\tbox-sizing: border-box;\n\n"]);return fn=function(){return n},n}function sn(){var n=Object(w.a)(["\n\n\tflex:       0 0 auto;\n\tcolor:      white;\n\tmargin-top: 8%;\n\n"]);return sn=function(){return n},n}function mn(){var n=Object(w.a)(["\n\n\tfont-size: 94px;\n\tline-height: 77px;\n\n"]);return mn=function(){return n},n}function dn(){var n=Object(w.a)(["\n\n  flex: 1 0 auto;\n  width: 100%;\n  background: url(",") center no-repeat;\n  background-size: 150%;\n\n"]);return dn=function(){return n},n}var pn={Button:k.a.span(tn()),Count:k.a.div(en()),Form:k.a.form(rn()),Item:k.a.div(an()),Link:Object(k.a)(c.b)(on()),NextActions:k.a.div(cn()),Question:k.a.div(un()),Room:k.a.div(ln(),(function(n){return n.url})),Text:k.a.div(fn()),TextBox:k.a.div(sn()),TimeLimit:k.a.div(mn()),Wrapper:k.a.div(dn(),(function(n){return n.coverUrl}))};function bn(){var n=Object(w.a)(["\n\n  display:         flex;\n  flex-direction:  column;\n  align-items:     center;\n  justify-content: center;\n\n  position: fixed;\n\n  width: 100%;\n  height: 100%;\n  /*background: url(",") center no-repeat;*/\n  background-color: #2E2E2E;\n  background-size: 150%;\n  color: #FFE200;\n\n"]);return bn=function(){return n},n}var gn=k.a.div(bn(),(function(n){return n.coverUrl}));function xn(){var n=Object(w.a)(["\n\n\n"]);return xn=function(){return n},n}function hn(){var n=Object(w.a)(["\n\n\tcolor:       #D3D3D3;\n\tfont-size:   21px;\n\tfont-weight: 900;\n\n\tmargin-bottom: 2rem;\n\n"]);return hn=function(){return n},n}function vn(){var n=Object(w.a)(["\n\n\tfont-weight:   500;\n\tcolor:         #fff;\n\tmargin-bottom: 2rem;\n\n"]);return vn=function(){return n},n}function En(){var n=Object(w.a)(["\n\n  font-weight: 900;\n  font-size:   60px;\n\n"]);return En=function(){return n},n}var jn={Button:k.a.div(xn()),ClearTime:k.a.div(hn()),Description:k.a.div(vn()),Title:k.a.div(En()),Wrapper:gn},On=function(n){var t=n.data,e=n.completeTime;return e?a.a.createElement(jn.Wrapper,null,a.a.createElement(jn.Title,null,t.title),a.a.createElement(jn.ClearTime,null,e.minutes,"'",e.seconds,'" \ub0a8\uae30\uace0 \uc131\uacf5'),a.a.createElement(jn.Description,null,t.text),t.buttons.map((function(n,t){return a.a.createElement(jn.Button,{key:t},a.a.createElement("a",{href:n.url,target:"_blank"},a.a.createElement("img",{src:n.image})))}))):null};function wn(){var n=Object(w.a)(["\n\n  display:         flex;\n  flex-direction:  column;\n  align-items:     center;\n  justify-content: center;\n\n  position: fixed;\n\n  width: 100%;\n  height: 100%;\n  /*background: url(",") center no-repeat;*/\n  background-color: #979797;\n  background-size: 150%;\n  color: #B60100;\n\n"]);return wn=function(){return n},n}var kn=k.a.div(wn(),(function(n){return n.coverUrl}));function yn(){var n=Object(w.a)(["\n\n\n"]);return yn=function(){return n},n}function Tn(){var n=Object(w.a)(["\n\n\tfont-weight:   500;\n\tcolor:         #2E2E2E;\n\tmargin-bottom: 2rem;\n\n"]);return Tn=function(){return n},n}function zn(){var n=Object(w.a)(["\n\n  font-weight: 900;\n  font-size:   60px;\n\n  margin-bottom: 2rem;\n\n"]);return zn=function(){return n},n}var Cn={Button:k.a.div(yn()),Description:k.a.div(Tn()),Title:k.a.div(zn()),Wrapper:kn},Sn=function(n){var t=n.data;return a.a.createElement(Cn.Wrapper,null,a.a.createElement(Cn.Title,null,t.title),a.a.createElement(Cn.Description,null,t.text),t.buttons.map((function(n,t){return a.a.createElement(Cn.Button,{key:t},a.a.createElement("a",{href:n.url,target:"_blank"},a.a.createElement("img",{src:n.image})))})))};var _n=function(n){var t=n.time,e=n.currentTime,o=Object(r.useState)(t),i=Object(p.a)(o,2),c=i[0],u=i[1],l=null,f=function(n){return n>0?{hours:Math.floor(n/3600%24),minutes:Math.floor(n/60%60),seconds:Math.floor(n%60)}:{hours:0,minutes:0,seconds:0}},s=function(){return setTimeout((function(){u(c-1),e(f(c))}),1e3)};return Object(r.useEffect)((function(){s()}),[c]),Object(r.useEffect)((function(){return l=s(),function(){clearTimeout(l)}}),[]),a.a.createElement("div",null,a.a.createElement("span",null,"".concat(f(c).minutes,"'").concat(f(c).seconds<10?"0"+f(c).seconds:f(c).seconds,'"')))},In=function(n){var t=n.data,e=Object(r.useState)(0),o=Object(p.a)(e,2),i=o[0],c=o[1],u=Object(r.useState)(!1),l=Object(p.a)(u,2),f=l[0],s=l[1],m=Object(r.useState)(!1),d=Object(p.a)(m,2),b=d[0],g=d[1],x=Object(r.useState)(null),h=Object(p.a)(x,2),v=h[0],E=h[1],j=t.steps,w=j[i],k=function(){j.filter((function(n){return n.input.length})).length-1===i?s(!0):c(i+1)};return Object(r.useEffect)((function(){!v||v.minutes||v.seconds||g(!0)}),[v]),t?a.a.createElement(pn.Wrapper,{coverUrl:w.image},f&&a.a.createElement(On,{data:t.successView,completeTime:v}),b&&a.a.createElement(Sn,{data:t.failView}),a.a.createElement(pn.Count,null,!f&&!b&&a.a.createElement(_n,{currentTime:function(n){return E(n)},time:60*t.limit})),a.a.createElement(pn.Item,null,a.a.createElement(pn.Question,null,a.a.createElement("img",{src:w.question})),a.a.createElement(pn.TextBox,null,a.a.createElement(pn.Text,null,w.text),a.a.createElement(pn.NextActions,null,!!w.input.length&&a.a.createElement(nn.a,{initialValues:{answer:""},onSubmit:function(n,t){var e=t.resetForm,r=Object(O.a)(t,["resetForm"]);setTimeout((function(){!function(n,t){n.toUpperCase()===w.answer?(k(),t()):(alert("\ud2c0\ub838\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud480\uc5b4\ubcf4\uc138\uc694"),t())}(n.answer,e),r.setSubmitting(!1)}),1e3)}},(function(n){n.resetForm;var t=Object(O.a)(n,["resetForm"]);return a.a.createElement(pn.Form,{onSubmit:t.handleSubmit},w.input.map((function(n,e){return a.a.createElement("input",{key:e,type:n.type,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.answer,name:"answer"})})),t.errors.name&&a.a.createElement("div",{id:"feedback"},t.errors.name),a.a.createElement("button",{type:"submit"},"\uc785\ub825"))})),!w.input.length&&a.a.createElement(pn.Button,{onClick:k},"\ub2e4\uc74c"))))):null},Bn=function(n){var t=n.match,e=Object(r.useState)(null),o=Object(p.a)(e,2),i=o[0],c=o[1];return Object(r.useEffect)((function(){j.collection("test2").get().then((function(n){var e=[];n.forEach((function(n){e.push(n.data())}));var r=e[0].rooms.find((function(n){return n._id===t.params._id}));c(r)}))}),[]),i?a.a.createElement("div",null,a.a.createElement(H,{noneHeader:!0},a.a.createElement(In,{data:i}))):null},Dn=function(n){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(d.a,{exact:!0,path:"/",component:Z}),a.a.createElement(d.a,{path:"/about",component:$}),a.a.createElement(d.a,{path:"/room/:_id",component:Bn}))}}]),t}(r.Component),Fn=function(){return a.a.createElement(c.a,null,a.a.createElement(Dn,null))};e(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Fn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.7d29b41f.chunk.js.map