(this.webpackJsonppolidata=this.webpackJsonppolidata||[]).push([[0],{57:function(e,t,a){e.exports=a(94)},62:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(62),a(129)),s=a(131),l=a(46),u=a(17),d=a.n(u),m=a(12),p=function(e){var t=Object(n.useState)(),a=Object(m.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),s=i[0],l=i[1],u=Object(n.useState)(!1),p=Object(m.a)(u,2),f=p[0],g=p[1];return Object(n.useEffect)((function(){!function(e){var t,a;d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!1),l(!0),n.prev=2,n.next=5,d.a.awrap(fetch(e));case 5:return t=n.sent,n.next=8,d.a.awrap(t.json());case 8:a=n.sent,o(a),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(2),g(!0);case 15:l(!1);case 16:case"end":return n.stop()}}),null,null,[[2,12]])}(e)}),[e]),{data:r,isLoading:s,isError:f}},f=Object(l.a)({styledAppBar:{backgroundColor:"#0070c0"},styledLogo:{maxWidth:64},styledSpanName:{marginLeft:"10px",fontSize:".9rem",fontWeight:"bold"}}),g=function(e){var t=e.cedula,a=f(),n=p("https://openfaroapi.azurewebsites.net/api/personaget?identificacion="+t),o=n.data,c=n.isLoading,l=n.isError;return r.a.createElement(i.a,{className:a.styledAppBar},r.a.createElement(s.a,null,r.a.createElement("img",{src:"logo.png",alt:"logo",className:a.styledLogo}),!l&&!c&&o&&r.a.createElement("span",{className:a.styledSpanName},o.apellido1?"".concat(o.nombre1," ").concat(o.apellido1):o.nombre1)))},E=a(141),b=a(143),y=a(132),h=a(145),O=Object(l.a)({styledWarning:function(e){return{color:"#f44336",display:e.visible?"block":"none"}}}),v=Object(l.a)({styledRadioContainer:{marginBottom:"10px"},styledRadioGroup:{flexDirection:"row !important"},styledTextField:{margin:"10px 0 20px !important"},loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"65vh"}}),j=function(e){var t=O(e);return r.a.createElement("div",{className:t.styledWarning},"Debe seleccionar una opci\xf3n")},w=function(e){var t=e.data,a=e.error,n=e.setFormAnswer,o=e.formError,c=v(),i=function(e){n(e.target.value)};return r.a.createElement(r.a.Fragment,null,!a&&t.length?t.map((function(e,t){return r.a.createElement("div",{className:c.styledRadioContainer,key:e.idpregunta},r.a.createElement(h.a,{component:"legend"},e.pregunta),r.a.createElement(b.a,{className:c.styledRadioGroup,defaultValue:"".concat(t,"-").concat(e.idrespuesta,"-").concat(e.respuesta),onChange:i},e.respuestas.length&&e.respuestas.map((function(e){return r.a.createElement(y.a,{key:e.idrespuesta,value:"".concat(t,"-").concat(e.idrespuesta,"-").concat(e.respuesta),control:r.a.createElement(E.a,{color:"primary"}),label:e.respuesta})}))),r.a.createElement(j,{visible:o&&o.includes(e.idpregunta)}))})):r.a.createElement("h2",null,"Disculpe, ha ocurrido un error"))},x=a(133),S=Object(l.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}})),C=function(){var e=S();return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{size:60}))},N=function(e,t){var a=Object(n.useState)(),r=Object(m.a)(a,2),o=r[0],c=r[1],i=Object(n.useState)(!1),s=Object(m.a)(i,2),l=s[0],u=s[1],p=Object(n.useState)(!1),f=Object(m.a)(p,2),g=f[0],E=f[1];return Object(n.useEffect)((function(){!function(e,t){var a,n,r;d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return E(!1),u(!0),o.prev=2,a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)},o.next=6,d.a.awrap(fetch(e,a));case 6:return n=o.sent,o.next=9,d.a.awrap(n.json());case 9:r=o.sent,c(r),E(!1),u(!1),o.next=19;break;case 15:o.prev=15,o.t0=o.catch(2),E(!0),u(!1);case 19:case"end":return o.stop()}}),null,null,[[2,15]])}(e,t),E(!1),u(!1)}),[e]),{dataPost:o,isLoadingPost:l,isErrorPost:g}},F=a(25),k=a(48),T=a.n(k),W={formularios:[],qtyFormularios:0,error:{},isOpenDialog:!1,formCompleted:!1,formSubmitted:!1},P=function(e,t){var a=e.formularios;switch(t.type){case"SET_IS_OPEN_DIALOG":return Object(F.a)({},e,{isOpenDialog:t.payload,error:[]});case"SET_JSON":return Object(F.a)({},e,{formularios:t.payload,qtyFormularios:t.payload.length});case"SET_ANSWER":var n=a.findIndex((function(e){return e.id===t.id})),r=t.payload.split("-"),o=r[0],c=r[1],i=r[2];return a[n].preguntas[o].idrespuesta=c,a[n].preguntas[o].respuesta=i,Object(F.a)({},e,{formularios:a});case"SUBMIT_FORM":var s=e.error,l=t.id,u=a.findIndex((function(e){return e.id===t.id}));return a[u].preguntas.forEach((function(e){0===Number(e.idrespuesta)?s[l]&&!s[l].includes(e.idpregunta)?s[l].push(e.idpregunta):s[l]||(s[l]=[e.idpregunta]):s={}})),T()(s)?Object(F.a)({},e,{error:s,isOpenDialog:!1,formCompleted:!0}):Object(F.a)({},e,{error:s});default:return e}},A=a(138),I=a(134),L=a(140),R=a(137),B=a(136),_=a(135),D=a(142),M=Object(l.a)({styledFormsContainer:{marginTop:"60px",height:"calc(100vh - 60px)"},styledFormContainer:{textAlign:"center"}}),z=function(e){var t=e.id,a=e.data,o=e.title,c=e.message,i=e.state,s=e.isError,l=e.dispatch,u=Object(n.useState)(!1),d=Object(m.a)(u,2),p=d[0],f=d[1],g=function(){f(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{variant:"outlined",color:"primary",onClick:function(){f(!0)}},o),r.a.createElement(L.a,{fullWidth:!0,maxWidth:"md",open:p,onClose:g,"aria-labelledby":"form-dialog-title"},r.a.createElement(_.a,{id:"form-dialog-title"},c.encabezado),r.a.createElement(B.a,{dividers:!0},r.a.createElement(D.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(w,{error:s,data:a&&a,formError:i.error[t]&&i.error[t],setFormAnswer:function(e){l(function(e,t){return{id:e,payload:t,type:"SET_ANSWER"}}(t,e))}}))),r.a.createElement(R.a,null,r.a.createElement(I.a,{onClick:g,color:"primary"},"Cancelar"),r.a.createElement(I.a,{onClick:function(){l(function(e){return{id:e,type:"SUBMIT_FORM"}}(t))},color:"primary"},"Enviar"))))},J=function(e){var t=e.cedula,a=M(),o=Object(n.useReducer)(P,W),c=Object(m.a)(o,2),i=c[0],s=c[1],l=N("https://f2020.azurewebsites.net/api/FaroFormulariosPersona?code=nbjfp6Cn8Mx3/WPr3DCwMXV8EZbfw2CB8UIMOTyfW8TYtlBSsbXGqw==",{id:{cedula:t}}),u=l.dataPost,d=l.isLoadingPost,p=l.isErrorPost;return Object(n.useEffect)((function(){!d&&u&&s({payload:u,type:"SET_JSON"})}),[u,d]),r.a.createElement(A.a,{className:a.styledFormsContainer,direction:"row",justify:"center",alignItems:"center",container:!0,spacing:0},u&&!d?u.map((function(e){return r.a.createElement(A.a,{className:a.styledFormContainer,item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(z,{key:e.id,state:i,isError:p,id:e.id,dispatch:s,data:e.preguntas,message:e.mensaje,title:e.idformulario}))})):r.a.createElement(C,null))},G=a(139);var U=function(){var e=new URL(window.location.href).searchParams.get("cedula");return r.a.createElement("div",{className:"App"},r.a.createElement(G.a,null),r.a.createElement(g,{cedula:e}),r.a.createElement(J,{cedula:e}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.9521779a.chunk.js.map