(this["webpackJsonpescape-room"]=this["webpackJsonpescape-room"]||[]).push([[0],{47:function(n,t,e){n.exports=e(63)},62:function(n,t,e){},63:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(33),i=e.n(o),c=e(11),u=e(34),l=e(35),f=e(44),s=e(36),d=e(45),p=e(16),m=e(9),b=e(26),x={API_KEY:"AIzaSyAld4LY5FCsoABjghFBnqWaKEcxpq_b344",PROJECT_ID:"onceaweek2020",MESSAGING_SENDER_ID:"989418613729",MEASUREMENT_ID:"G-ZC0WB66S7X"},g=(e(51),e(53),x.PROJECT_ID),h=x.MESSAGING_SENDER_ID,v=x.MEASUREMENT_ID,E={apiKey:"".concat(x.API_KEY),authDomain:"".concat(g,".firebaseapp.com"),databaseURL:"https://".concat(g,".firebaseio.com"),projectId:"".concat(g),storageBucket:"".concat(g,".appspot.com"),messagingSenderId:"".concat(h),appId:"1:".concat(h,":web:f39c488e68d4339e6300a0"),measurementId:"".concat(v)};b.initializeApp(E);var j=b.firestore(),O=e(19),w=e(1),k=e(2);function y(){var n=Object(w.a)(["\n\n\tdisplay:         flex;\n\talign-items:     center;\n\tjustify-content: flex-end;\n\n\twidth:      100%;\n\tpadding:    10px 5px;\n\tbox-sizing: border-box;\n\n\t","\n\n"]);return y=function(){return n},n}var S=k.a.nav(y(),(function(n){return n.noneHeader&&"\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tz-index: 10;\n\t"}));function C(){var n=Object(w.a)(["\n\n\tdisplay:         flex;\n\talign-items:     center;\n\tjustify-content: center;\n\n\tz-index: 10;\n\tpadding: 10px;\n\theight: 41px;\n\t/*margin-right: 10px;*/\n\n"]);return C=function(){return n},n}function _(){var n=Object(w.a)(["\n\n\tdisplay:         flex;\n\n\tjustify-content: center;\n\n\twidth: 50%;\n\theight: 100%;\n\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbackground-color: rgba(0,0,0,0.6);\n\n\tpadding: 10px;\n\t/*margin-right: 10px;*/\n\tul {\n\t\twidth: 100%;\n\t\tmargin-top: 30px;\n\t\tpadding: 10px;\n\t\tlist-style: none;\n\t\tbox-sizing: border-box;\n\t\tcolor: #fff;\n\t\tfont-weight: 700;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t}\n\t}\n\n\th3 {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t","\n\n"]);return _=function(){return n},n}var I={Hamburger:k.a.div(C()),HeaderWrapper:S,Menu:k.a.div(_(),(function(n){return!n.show&&"\n\t\tdisplay: none;\n\t"}))},z=function(n){var t=Object(a.useState)(!1),e=Object(m.a)(t,2),o=e[0],i=e[1];return r.a.createElement(I.HeaderWrapper,{noneHeader:n.noneHeader},r.a.createElement(I.Hamburger,{onClick:function(){return i(!o)}},r.a.createElement("img",{style:{display:"".concat(o?"none":"block")},src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Fhamberger_icon.svg?alt=media&token=1650b965-25ec-41aa-b5d2-25890019d046"}),r.a.createElement("img",{style:{display:"".concat(o?"block":"none")},src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Fhamberger_icon_close.svg?alt=media&token=1c8f581e-0c86-4506-be35-9bd9accd6797"})),r.a.createElement(I.Menu,{show:o},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h3",null,"\ud78c\ud2b8 \uc694\uccad"),r.a.createElement("a",{href:"http://pf.kakao.com/_Frkxjxb/chat",type:"_blank"},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/onceaweek2020.appspot.com/o/icons%2Fkakao.png?alt=media&token=e499361e-16d1-40b3-9092-6fff5787433e"}))))))};function T(){var n=Object(w.a)(["\n\n\tflex: 1 0 auto;\n\tdisplay:         flex;\n\tflex-direction:  column;\n\tflex:            1 0 auto;\n\talign-items: center;\n\twidth:           100%;\n\n\n"]);return T=function(){return n},n}var B=k.a.div(T());function A(){var n=Object(w.a)(["\n\n\tdisplay:        flex;\n\tflex-direction: column;\n\tposition: absolute;\n\twidth:          100%;\n\theight:         100%;\n\n"]);return A=function(){return n},n}var F=k.a.div(A()),R=function(n){var t=n.noneHeader,e=Object(O.a)(n,["noneHeader"]);return console.log("props",e),r.a.createElement(F,null,r.a.createElement(z,{noneHeader:t}),r.a.createElement(B,e))};function H(){var n=Object(w.a)(["\n\n\tfont-weight: 700;\n\n"]);return H=function(){return n},n}function M(){var n=Object(w.a)(["\n\n  width: 58px;\n  height: 3px;\n  background-color: #C2C2C2;\n  margin: 10px 0px;\n\n"]);return M=function(){return n},n}function L(){var n=Object(w.a)(["\n\n  display: inline-flex;\n  flex-direction: column;\n\n"]);return L=function(){return n},n}function W(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: column;\n\n  width:     100%;\n  max-width: 300px;\n  height: 320px;\n  border-radius: 4%;\n  background: url(",") center center;\n  background-size: 120%;\n  color: #C2C2C2;\n  font-weight: 700;\n  padding: 10px;\n  font-size: 12px;\n\n"]);return W=function(){return n},n}function D(){var n=Object(w.a)(["\n\n\tflex: 0 0 auto;\n\tdisplay: inline-flex;\n\twidth: 121px;\n\tflex-direction: column;\n\n"]);return D=function(){return n},n}function N(){var n=Object(w.a)(["\n\n\tfont-size: 94px;\n\tline-height: 77px;\n\n"]);return N=function(){return n},n}function G(){var n=Object(w.a)(["\n\n  display:          flex;\n  align-items:      center;\n  justify-content:  center;\n  width:            100%;\n\n"]);return G=function(){return n},n}var U={EscapeRatio:k.a.span(H()),Line:k.a.div(M()),Link:Object(k.a)(c.b)(L()),Room:k.a.div(W(),(function(n){return n.url})),TextBox:k.a.div(D()),TimeLimit:k.a.div(N()),Wrapper:k.a.div(G())},J=function(n){var t=n.datas;if(!t.length)return null;return r.a.createElement(U.Wrapper,null,t.map((function(n){var t=n._id,e=n.thumbnail,a=n.limit,o=n.joined,i=n.escape;return r.a.createElement(U.Room,{key:t,url:e},r.a.createElement(U.Link,{to:"room/".concat(t)},r.a.createElement(U.TextBox,null,r.a.createElement(U.TimeLimit,null,a),r.a.createElement(U.Line,null),r.a.createElement(U.EscapeRatio,null,"\ud0c8\ucd9c\ube44\uc728 ",function(n){var t=n.escape,e=n.joined;return 0!==e?t/e*100:0}({escape:i,joined:o}),"%"))))})))},K=function(){var n=Object(a.useState)(null),t=Object(m.a)(n,2),e=t[0],o=t[1];return Object(a.useEffect)((function(){j.collection("test2").get().then((function(n){var t=[];n.forEach((function(n){t.push(n.data())})),o(t[0].rooms),console.log("result",t[0].rooms)}))}),[]),e?r.a.createElement("div",null,r.a.createElement(R,null,r.a.createElement(J,{datas:e}))):null},P=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About"))},q=e(43);function Y(){var n=Object(w.a)(["\n\n\tpadding: 4px 8px;\n\tcolor: #fff;\n\tbackground-color: #d2d2d2;\n\tborder-radius: 10px;\n\tfont-weight: 700;\n\tcursor: pointer;\n\n"]);return Y=function(){return n},n}function Q(){var n=Object(w.a)(["\n\n  position: fixed;\n  top: 10px;\n  left: 10px;\n\n  font-size: 60px;\n  font-weight: 900;\n  color: #646464;\n\n  text-shadow:\n    -1px -1px 0 #fff,\n    1px -1px 0 #fff,\n    -1px 1px 0 #fff,\n    1px 1px 0 #fff;\n\n"]);return Q=function(){return n},n}function V(){var n=Object(w.a)(["\n\n  padding: 0px 20px 0 5px;\n  box-sizing: border-box;\n\n  input {\n    width: 100%;\n    height: 20px;\n    padding: 4px 6px;\n    border-radius: 4px;\n    border: 1px solid rgba(200,200,200, 80%);\n    background-color: rgba(255,255,255, 80%);\n  }\n\n  button {\n    display: none;\n  }\n\n"]);return V=function(){return n},n}function X(){var n=Object(w.a)(["\n\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  height: 100%;\n\n  padding: 10px;\n  box-sizing: border-box;\n\n  background-color: rgba(0, 0, 0, 50%);\n  align-items: center;\n  justify-content: center;\n\n\n"]);return X=function(){return n},n}function Z(){var n=Object(w.a)(["\n\n  display: inline-flex;\n  flex-direction: column;\n\n"]);return Z=function(){return n},n}function $(){var n=Object(w.a)(["\n\n\n"]);return $=function(){return n},n}function nn(){var n=Object(w.a)(["\n\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: flex-start;\n\n\timg {\n\t\twidth: 100%;\n\t}\n\n"]);return nn=function(){return n},n}function tn(){var n=Object(w.a)(["\n\n  display: flex;\n  flex-direction: column;\n\n  width:     100%;\n  max-width: 300px;\n  height: 320px;\n  border-radius: 4%;\n  background-color: red;\n  background: url(",") center center;\n  background-size: 120%;\n  color: #C2C2C2;\n  font-weight: 700;\n  padding: 10px;\n  font-size: 12px;\n\n"]);return tn=function(){return n},n}function en(){var n=Object(w.a)(["\n\n\tmargin-bottom: 10px;\n\tbackground-color: rgba(0,0,0, 50%);\n\tpadding: 6px 10px;\n\tbox-sizing: border-box;\n\n"]);return en=function(){return n},n}function an(){var n=Object(w.a)(["\n\n\tflex: 0 0 auto;\n\tcolor: white;\n\tmargin-top: 15%;\n\n"]);return an=function(){return n},n}function rn(){var n=Object(w.a)(["\n\n\tfont-size: 94px;\n\tline-height: 77px;\n\n"]);return rn=function(){return n},n}function on(){var n=Object(w.a)(["\n\n  flex: 1 0 auto;\n  width: 100%;\n  background: url(",") center no-repeat;\n  background-size: 150%;\n\n"]);return on=function(){return n},n}var cn={Button:k.a.span(Y()),Count:k.a.div(Q()),Form:k.a.form(V()),Item:k.a.div(X()),Link:Object(k.a)(c.b)(Z()),NextActions:k.a.div($()),Question:k.a.div(nn()),Room:k.a.div(tn(),(function(n){return n.url})),Text:k.a.div(en()),TextBox:k.a.div(an()),TimeLimit:k.a.div(rn()),Wrapper:k.a.div(on(),(function(n){return n.coverUrl}))};var un=function(n){var t=n.time,e=Object(a.useState)(t),o=Object(m.a)(e,2),i=o[0],c=o[1],u=null,l=function(){var n={};return i>0&&(n={hours:Math.floor(i/3600%24),minutes:Math.floor(i/60%60),seconds:Math.floor(i%60)}),n},f=Object(a.useState)(l()),s=Object(m.a)(f,2),d=s[0],p=s[1];return Object(a.useEffect)((function(){u=setTimeout((function(){c(i-1),p(l())}),1e3)})),Object(a.useEffect)((function(){return function(){clearTimeout(u)}}),[]),r.a.createElement("div",null,r.a.createElement("span",null,"".concat(d.minutes,"'").concat(d.seconds<10?"0"+d.seconds:d.seconds,'"')))},ln=function(n){var t=n.data,e=Object(a.useState)(0),o=Object(m.a)(e,2),i=o[0],c=o[1],u=t.steps[i],l=function(){c(i+1)};return t?r.a.createElement(cn.Wrapper,{coverUrl:u.image},r.a.createElement(cn.Count,null,r.a.createElement(un,{time:60*t.limit})),r.a.createElement(cn.Item,null,r.a.createElement(cn.Question,null,r.a.createElement("img",{src:u.question})),r.a.createElement(cn.TextBox,null,r.a.createElement(cn.Text,null,u.text),r.a.createElement(cn.NextActions,null,!!u.input.length&&r.a.createElement(q.a,{initialValues:{answer:""},onSubmit:function(n,t){var e=t.resetForm,a=Object(O.a)(t,["resetForm"]);setTimeout((function(){!function(n,t){n===u.answer?(l(),t()):(alert("\ud2c0\ub838\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud480\uc5b4\ubcf4\uc138\uc694"),t())}(n.answer,e),a.setSubmitting(!1)}),1e3)}},(function(n){n.resetForm;var t=Object(O.a)(n,["resetForm"]);return r.a.createElement(cn.Form,{onSubmit:t.handleSubmit},u.input.map((function(n,e){return r.a.createElement("input",{key:e,type:n.type,onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.answer,name:"answer"})})),t.errors.name&&r.a.createElement("div",{id:"feedback"},t.errors.name),r.a.createElement("button",{type:"submit"},"Submit"))})),!u.input.length&&r.a.createElement(cn.Button,{onClick:l},"\ub2e4\uc74c"))))):null},fn=function(n){var t=n.match,e=Object(a.useState)(null),o=Object(m.a)(e,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){j.collection("test2").get().then((function(n){var e=[];n.forEach((function(n){e.push(n.data())}));var a=e[0].rooms.find((function(n){return n._id===t.params._id}));c(a)}))}),[]),i?r.a.createElement("div",null,r.a.createElement(R,{noneHeader:!0},r.a.createElement(ln,{data:i}))):null},sn=function(n){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,n),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{exact:!0,path:"/",component:K}),r.a.createElement(p.a,{path:"/about",component:P}),r.a.createElement(p.a,{path:"/room/:_id",component:fn}))}}]),t}(a.Component),dn=function(){return r.a.createElement(c.a,null,r.a.createElement(sn,null))};e(62),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.95e562df.chunk.js.map