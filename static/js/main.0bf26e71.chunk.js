(this.webpackJsonppolidata=this.webpackJsonppolidata||[]).push([[0],{60:function(e,t,a){e.exports=a(70)},65:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),i=(a(65),a(113)),c=a(115),l=a(48),u=Object(l.a)({styledAppBar:{backgroundColor:"#0070c0"},styledLogo:{maxWidth:64},styledSpanName:{marginLeft:"10px",fontSize:".9rem",fontWeight:"bold"}}),d=function(e){var t=e.data,a=e.isLoading,n=e.isError,o=u();return r.a.createElement(i.a,{className:o.styledAppBar},r.a.createElement(c.a,null,r.a.createElement("img",{src:"logo.png",alt:"logo",className:o.styledLogo}),!n&&!a&&t&&r.a.createElement("span",{className:o.styledSpanName},t.apellido1?"".concat(t.nombre1," ").concat(t.apellido1):t.nombre1)))},m=a(15),p=a.n(m),f=a(12),g=a(126),E=a(129),b=a(118),y=a(117),h=a(116),v=a(125),j=Object(l.a)({styledWarning:function(e){return{color:"#f44336",display:e.visible?"block":"none"}}}),x=Object(l.a)({styledRadioContainer:{marginBottom:"10px"},styledRadioGroup:{flexDirection:"row !important"},styledTextField:{margin:"10px 0 20px !important"},loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"65vh"}}),O=function(e){var t=j(e);return r.a.createElement(r.a.Fragment,null,"DIRECCIONES"===e.idformulario?r.a.createElement("div",{className:t.styledWarning},e.message?e.message:"Debe completar este campo"):r.a.createElement("div",{className:t.styledWarning},"Debe seleccionar una opci\xf3n"))},w=function(e){var t=e.data,a=e.error,n=e.setFormAnswer,o=e.setInputDirecciones,s=e.idformulario,i=e.getIndexOf,c=e.formError,l=e.message,u=x(),d=function(e,t,a){return function(n){o(n.target.value,e,t,a)}},m=function(e){n(e.target.value)};return r.a.createElement(r.a.Fragment,null,!a&&t.length?t.map((function(e,t){return r.a.createElement("div",{key:e.idpregunta},"DIRECCIONES"===s?r.a.createElement(r.a.Fragment,null,e.respuestas.length&&e.respuestas.map((function(a){return r.a.createElement(h.a,{key:a.idrespuesta,container:!0,direction:"column",alignItems:"center",justify:"center",spacing:1,style:{width:"100%"}},r.a.createElement(h.a,{style:{width:"100%",marginBottom:"15px"},item:!0,xs:12,sm:6,md:4},r.a.createElement(v.a,{style:{width:"100%"},required:!0,label:a.respuesta,onChange:d(t,e.idpregunta,a.respuesta),defaultValue:""===a.texto?null!==i(a.respuesta)?i(a.respuesta).texto:"":a.texto,variant:"outlined"}),r.a.createElement(O,{idformulario:s,visible:c.includes(e.idpregunta),message:l})))}))):r.a.createElement("div",{className:u.styledRadioContainer,key:e.idpregunta},r.a.createElement(y.a,{component:"legend"},e.pregunta),r.a.createElement(E.a,{className:u.styledRadioGroup,defaultValue:"".concat(t,"-").concat(e.idrespuesta,"-").concat(e.respuesta),onChange:m},e.respuestas.length&&e.respuestas.map((function(e){return r.a.createElement("div",{key:e.idrespuesta},r.a.createElement(b.a,{value:"".concat(t,"-").concat(e.idrespuesta,"-").concat(e.respuesta),control:r.a.createElement(g.a,{color:"primary"}),label:e.respuesta}))}))),r.a.createElement(O,{idformulario:s,visible:c.includes(e.idpregunta)})))})):r.a.createElement("h2",null,"Disculpe, ha ocurrido un error"))},C=a(119),S=Object(l.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})),N=function(){var e=S();return r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{size:60}))},I=function(e,t){var a=Object(n.useState)(),r=Object(f.a)(a,2),o=r[0],s=r[1],i=Object(n.useState)(!1),c=Object(f.a)(i,2),l=c[0],u=c[1],d=Object(n.useState)(!1),m=Object(f.a)(d,2),g=m[0],E=m[1];return Object(n.useEffect)((function(){!function(e,t){var a,n,r;p.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return E(!1),u(!0),o.prev=2,a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},o.next=6,p.a.awrap(fetch(e,a));case 6:return n=o.sent,o.next=9,p.a.awrap(n.json());case 9:r=o.sent,s(r),E(!1),u(!1),o.next=19;break;case 15:o.prev=15,o.t0=o.catch(2),E(!0),u(!1);case 19:case"end":return o.stop()}}),null,null,[[2,15]])}(e,t),E(!1),u(!1)}),[e]),{dataPost:o,isLoadingPost:l,isErrorPost:g}},k=a(40),P={formularios:[],qtyFormularios:0},F=function(e,t){var a,n,r,o,s,i=e.formularios;switch(t.type){case"SET_JSON":return Object(k.a)({},e,{formularios:t.payload,qtyFormularios:t.payload.length});case"SET_ANSWER":return a=i.findIndex((function(e){return e.id===t.id})),r=(n=t.payload.split("-"))[0],o=n[1],s=n[2],i[a].preguntas[r].idrespuesta=o,i[a].preguntas[r].respuesta=s,Object(k.a)({},e,{formularios:i});case"SET_DIRECCIONES":return a=i.findIndex((function(e){return e.id===t.id})),n=t.payload.val,r=t.payload.indexPregunta,s=t.payload.val,i[a].preguntas[r].respuestas[0].texto=s,Object(k.a)({},e,{formularios:i});default:return e}},T=a(120),W=a(128),R=a(123),A=a(122),D=a(121),L=a(130),z=Object(l.a)({styledFormsContainer:{marginTop:"60px",height:"calc(100vh - 60px)"},styledFormContainer:{textAlign:"center"}}),B=function(e){var t=e.id,a=e.index,o=e.data,s=e.dataPersona,i=e.title,c=e.message,l=e.state,u=e.isError,d=e.idformulario,m=e.dispatch,g=Object(n.useState)(!1),E=Object(f.a)(g,2),b=E[0],y=E[1],h=Object(n.useState)([]),v=Object(f.a)(h,2),j=v[0],x=v[1],O=Object(n.useState)(!1),C=Object(f.a)(O,2),S=C[0],N=C[1],I=Object(n.useState)(!1),k=Object(f.a)(I,2),P=(k[0],k[1]),F=Object(n.useState)([]),z=Object(f.a)(F,2),B=z[0],J=z[1],_=Object(n.useState)(""),q=Object(f.a)(_,2),G=q[0],M=q[1],V=function(){y(!1)},H=function(e,a,n,r){m(function(e,t){return{id:e,payload:t,type:"SET_DIRECCIONES"}}(t,{val:e,indexPregunta:a})),"Correo"===r&&J([e,n])},U={Correo:"EM",Celular:"TC",Twitter:"TW"},X=function(e){var t=U[e],a=null;return s.direcciones.forEach((function(e){e.idrespuesta!==t||(a=e)})),a},Y=function(){var e,t,n;return p.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://f2020.azurewebsites.net/api/FaroFormularioPersonaPost?code=rkmGB0kHPzpU/Nxb7L8NT1PAw6jmOxslIH2eXiyjh9vmFIjFRFblAw==","https://nodechatbotjson.azurewebsites.net/mailverify?mail=",P(!1),N(!0),r.prev=4,r.next=7,p.a.awrap(fetch("https://nodechatbotjson.azurewebsites.net/mailverify?mail="+B[0]));case 7:return t=r.sent,r.next=10,p.a.awrap(t.json());case 10:if(!r.sent.success){r.next=29;break}return r.prev=12,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l.formularios[a])},r.next=16,p.a.awrap(fetch(e,n));case 16:x([]),M(""),P(!1),N(!1),y(!1),r.next=27;break;case 23:r.prev=23,r.t0=r.catch(12),P(!0),N(!1);case 27:r.next=32;break;case 29:N(!1),x([B[1]]),M("Verifique el email ingresado");case 32:r.next=37;break;case 34:r.prev=34,r.t1=r.catch(4),N(!1);case 37:case"end":return r.stop()}}),null,null,[[4,34],[12,23]])};return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{variant:"outlined",color:"primary",onClick:function(){y(!0)}},i),r.a.createElement(W.a,{fullWidth:!0,maxWidth:"md",open:b,onClose:V,"aria-labelledby":"form-dialog-title"},r.a.createElement(D.a,{id:"form-dialog-title"},c.encabezado),r.a.createElement(A.a,{dividers:!0},r.a.createElement(L.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(w,{data:o&&o,error:u,setFormAnswer:function(e){m(function(e,t){return{id:e,payload:t,type:"SET_ANSWER"}}(t,e))},setInputDirecciones:H,idformulario:d,getIndexOf:X,formError:j,message:G}))),r.a.createElement(R.a,null,r.a.createElement(T.a,{onClick:V,color:"primary"},"Cancelar"),r.a.createElement(T.a,{onClick:function(){var e=[];"DIRECCIONES"===d?o.forEach((function(t,a){t.respuestas.forEach((function(n){var r=X(n.respuesta);""!==n.texto||null!==r&&""!==r.texto||(e.push(t.idpregunta),x([].concat(e))),null!==r&&""!==r.texto&&(H(r.texto,a),"Correo"===r.respuesta&&J([r.texto,t.idpregunta]))}))})):o.forEach((function(t){0===Number(t.idrespuesta)&&(e.push(t.idpregunta),x([].concat(e)))})),e.length||(x([]),Y())},color:"primary"},S?"Enviando...":"Enviar"))))},J=function(e){var t=e.dataPersona,a=e.cedula,o=z(),s=Object(n.useReducer)(F,P),i=Object(f.a)(s,2),c=i[0],l=i[1],u=I("https://f2020.azurewebsites.net/api/FaroFormulariosPersona?code=nbjfp6Cn8Mx3/WPr3DCwMXV8EZbfw2CB8UIMOTyfW8TYtlBSsbXGqw==",{id:{cedula:a}}),d=u.dataPost,m=u.isLoadingPost,p=u.isErrorPost;return Object(n.useEffect)((function(){!m&&d&&l({payload:d,type:"SET_JSON"})}),[d,m]),r.a.createElement(h.a,{className:o.styledFormsContainer,direction:"row",justify:"center",alignItems:"center",container:!0,spacing:0},d&&!m?d.map((function(e,a){return r.a.createElement(h.a,{key:e.id,className:o.styledFormContainer,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(B,{index:a,state:c,isError:p,id:e.id,idformulario:e.idformulario,dispatch:l,data:e.preguntas,dataPersona:t,message:e.mensaje,title:e.idformulario}))})):r.a.createElement(N,null))},_=a(124),q=function(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(!1),i=Object(f.a)(s,2),c=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(f.a)(u,2),m=d[0],g=d[1];return Object(n.useEffect)((function(){!function(e){var t,a;p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!1),l(!0),n.prev=2,n.next=5,p.a.awrap(fetch(e));case 5:return t=n.sent,n.next=8,p.a.awrap(t.json());case 8:a=n.sent,o(a),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),g(!0);case 15:l(!1);case 16:case"end":return n.stop()}}),null,null,[[2,12]])}(e)}),[e]),{data:r,isLoading:c,isError:m}};var G=function(){var e=new URL(window.location.href).searchParams.get("cedula"),t=q("https://openfaroapi.azurewebsites.net/api/personagetv2?idorganizacion=10&identificacion="+e),a=t.data,n=t.isLoading,o=t.isError;return r.a.createElement("div",{className:"App"},r.a.createElement(_.a,null),r.a.createElement(d,{data:a,isLoading:n,isError:o}),r.a.createElement(J,{dataPersona:a,cedula:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.0bf26e71.chunk.js.map