(this["webpackJsonpcontrol-tower"]=this["webpackJsonpcontrol-tower"]||[]).push([[0],{17:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(24),i=n.n(a),r=(n(17),n(2)),o=n(47),j=n(93),l=n(1),u=function(e){var t=e.thisFlight;return Object(l.jsxs)("div",{className:"flight-card",children:[Object(l.jsxs)("h3",{children:[" Flight N\xb0: ",t.code]}),Object(l.jsxs)(j.a.Text,{children:[Object(l.jsxs)("p",{children:[" Airline: ",t.airline," "]}),Object(l.jsxs)("p",{children:[" Origin: ",t.origin]}),Object(l.jsxs)("p",{children:[" Destionation: ",t.destination]}),Object(l.jsxs)("p",{children:[" Plane: ",t.plane]}),Object(l.jsx)("strong",{children:" Passengers:"}),t.passengers.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("li",{children:["Name: ","\n"+e.name]}),Object(l.jsxs)("li",{children:["Age: ",e.age]})]})}))]}),Object(l.jsx)(j.a.Footer,{})]})},b=n(26),O=n.n(b),d=O.a.connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{transports:["websocket"],path:"/flights"}),h=s.a.createContext(),m=function(e){Object(o.a)(e);var t=Object(c.useContext)(h),n=Object(c.useState)([{code:"",airline:"",origin:[0,0],destination:[0,0],plane:"",seats:0,passengers:[{name:"",age:0}]}]),s=Object(r.a)(n,2),a=s[0],i=s[1],j=Object(c.useCallback)((function(e){i(e)}),[]);return Object(c.useEffect)((function(){return t.emit("FLIGHTS",{}),t.on("FLIGHTS",(function(e){return j(e)})),console.log(a),function(){}}),[a,t,j]),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Flights Board"}),Object(l.jsx)("div",{className:"row-container",children:a.map((function(e){return Object(l.jsx)(u,{thisFlight:e})}))})]})},x=(n(87),n(21)),f="CHAT",g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useRef)();Object(c.useEffect)((function(){return a.current=O()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights",transports:["websocket"]}),a.current.on(f,(function(e){s((function(t){return[].concat(Object(x.a)(t),[e])}))})),function(){a.current.disconnect()}}),[]);return{messageObjects:n,sendMessageObject:function(e,t){a.current.emit(f,{name:e,message:t})}}},p=function(e){var t=g(),n=t.messageObjects,s=t.sendMessageObject,a=Object(c.useState)(""),i=Object(r.a)(a,2),o=i[0],j=i[1],u=Object(c.useState)(""),b=Object(r.a)(u,2),O=b[0],d=b[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"chat-room-container",children:[Object(l.jsx)("h4",{className:"room-name",children:"Control Tower Chat"}),Object(l.jsx)("div",{className:"messages-container",children:Object(l.jsx)("ol",{className:"messages-list",children:n.map((function(e,t){return Object(l.jsxs)("li",{className:"message-item ".concat(e.name===O?"my-message":"received-message"),children:["(",(n=e.date,new Date(n).toLocaleString()),")","\n"+e.name," ",": ",e.message]},t);var n}))})}),Object(l.jsxs)("div",{className:"row-container",children:[Object(l.jsx)("textarea",{value:o,onChange:function(e){"Enter"!==e.key&&13!==e.keyCode&&j(e.target.value)},placeholder:"Write message...",className:"new-message-input-field"}),Object(l.jsx)("h4",{}),Object(l.jsx)("button",{onClick:function(){s(O,o),j("")},className:"send-message-button",children:"Send"})]})]}),Object(l.jsx)("textarea",{value:O,onChange:function(e){d(e.target.value)},placeholder:"Type your Nickname"})]})},v=n(90),N=n(94),S=n(91),k=n(92),C=n(5),w=(n.p,n(48));var T=function(){new C.LatLngBounds([-34.82264,-58.533321],[-33.382761,-70.803203]);var e={color:"black"},t=[{color:"green"},{color:"coral"},{color:"blue"},{color:"crimson"},{color:"violet"}],n=Object(c.useContext)(h),s=Object(c.useContext)(h),a=Object(c.useState)([]),i=Object(r.a)(a,2),o=(i[0],i[1]),j=Object(c.useState)([]),u=Object(r.a)(j,2),b=u[0],O=u[1],d=Object(c.useState)(0),m=Object(r.a)(d,2),f=m[0],g=m[1],p=Object(c.useState)([]),T=Object(r.a)(p,2),y=T[0],I=T[1],L=Object(c.useState)([]),M=Object(r.a)(L,2),A=(M[0],M[1],Object(c.useCallback)((function(e){e.map((function(e){return I((function(t){return[].concat(Object(x.a)(t),[[e.origin,e.destination]])}))})),g(e.length),o(e)}),[]));Object(c.useEffect)((function(){return n.emit("FLIGHTS",{}),n.on("FLIGHTS",(function(e){return A(e)})),function(){}}),[n,A]);var F=Object(c.useCallback)((function(e){O((function(t){return[].concat(Object(x.a)(t),[[[e.position[0],e.position[1]],[e.position[0]+1e-6,e.position[1]+1e-6]]])}))}),[]);return Object(c.useEffect)((function(){return s.emit("POSITION",{}),s.on("POSITION",(function(e){return F(e)})),function(){}}),[s,F]),Object(l.jsxs)("div",{children:[Object(l.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",integrity:"sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==",crossorigin:""}),Object(l.jsx)("script",{src:"https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",integrity:"sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==",crossorigin:""}),Object(l.jsx)("div",{children:"Real Time Map"}),Object(l.jsx)("div",{id:"mapid",children:Object(l.jsxs)(v.a,{center:[-38.45,-70.666667],zoom:3,scrollWheelZoom:!0,className:"leaflet-container",children:[Object(l.jsx)(N.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),y.map((function(e,t){return Object(l.jsx)(S.a,{position:e[0],icon:new C.Icon({iconUrl:w.a,iconSize:[12,20],iconAnchor:[6,20]})})})),y.map((function(e,n){return Object(l.jsx)(k.a,{pathOptions:t[n%f],positions:e})})),b.map((function(t,n){return Object(l.jsx)(k.a,{pathOptions:e,positions:t})}))]})})]})};var y=function(){return Object(l.jsx)(h.Provider,{value:d,children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"up-left-box",children:Object(l.jsx)(T,{})}),Object(l.jsx)("div",{className:"right-column",children:Object(l.jsx)(p,{})}),Object(l.jsx)("div",{className:"bottom-left-box",children:Object(l.jsx)(m,{})})]})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.3a3aa747.chunk.js.map