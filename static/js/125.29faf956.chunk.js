(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[125,75,80,84,85,86,134,170],{1267:function(e,t,a){!function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},a={weekdays:{shorthand:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],longhand:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},months:{shorthand:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],longhand:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},firstDayOfWeek:1,ordinal:function(){return""},time_24hr:!0,rangeSeparator:" - "};t.l10ns.id=a;var n=t.l10ns;e.Indonesian=a,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})}(t)},366:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(6),r=a(2),i=a(33),s=a(25),l=(a(168),a(5)),o=a(80),d=a(65),u=a(757),b=(a(102),a(34)),j=(a(11),a(137),a(145),a(1267),a(46)),m=a(167),g=a(16),p=a(0);t.default=function(e){var t,a,f,O,h=e.show,x=e.setShow,v=e.detailPage,y=e.formState,S=e.setFormState,N=e.currentData,D=void 0===N?null:N,w=Object(o.a)().t,T=Object(i.g)().id,k=Object(g.b)(),C=Object(g.c)((function(e){return e[m.storeName]})),_=Object(r.useContext)(b.a).colors,J=Object(r.useState)(null),B=Object(c.a)(J,2),F=(B[0],B[1],Object(r.useState)("Please Wait")),L=Object(c.a)(F,2),A=L[0],I=L[1],E=Object(j.e)({}),M=E.control,q=E.setError,P=E.handleSubmit,R=E.formState.errors,z=function(){return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(u.a,{}),Object(p.jsxs)(l.r,{className:"mb-0 mt-1",children:[w(A),"..."]})]})};function U(e){return Object.keys(e).sort().reduce((function(t,a){return t[a]=e[a],t}),{})}var W=function(){k(Object(m.resetSelectedData)())};return Object(p.jsx)(l.G,{isOpen:h,toggle:function(){W(),x(!h)},className:"modal-dialog-centered modal-lg",children:Object(p.jsxs)(d.a,{blocking:C.isLoadingAddEdit||C.isLoadingDetail,loader:Object(p.jsx)(z,{}),children:[Object(p.jsx)(l.J,{className:"bg-transparent",toggle:function(){W(),x(!h)}}),Object(p.jsxs)(l.H,{className:"px-sm-5 pt-50 pb-5",children:[Object(p.jsxs)("div",{className:"text-center mb-2",children:[Object(p.jsxs)("h2",{className:"mb-1",children:[w("edit"===y?"Edit":"Add")," ",w(m.pageTitle)]}),"edit"!==y?Object(p.jsxs)("p",{children:["Setelah menambahkan data ",w("Unit")," baru, maka pastikan logout dulu akun anda."]}):null]}),Object(p.jsx)(l.y,{onSubmit:P("edit"===y?function(e){if(function(e){if("edit"===y){var t=Object(n.a)({},U(C.selectedData));for(var a in delete t.id,t)a in e||delete t[a];return JSON.stringify(U(t))!==JSON.stringify(U(e))}return!0}(e))if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(w("Updating")," ").concat(w(m.pageTitle)," ").concat(w("Detail")," Data")),k(Object(m.putData)(e)).then((function(e){if("fulfilled"===e.meta.requestStatus)x(!h),s.b.success("".concat(w("Successfully Updated")," ").concat(w(m.pageTitle)),{style:{padding:"16px",color:_.success.main,border:"1px solid ".concat(_.success.main)},iconTheme:{primary:_.success.main}}),v&&k(Object(m.getDataById)(T));else if("rejected"===e.meta.requestStatus){var t;s.b.error(null===(t=e.payload)||void 0===t?void 0:t.message,{style:{padding:"16px",color:_.danger.main,border:"1px solid ".concat(_.danger.main)},iconTheme:{primary:_.danger.main}})}}));else for(var t in e){var a;0===(null===(a=e[t])||void 0===a?void 0:a.length)&&q(t,{type:"manual"})}else Object(s.b)("".concat(w("You haven't changed anything")),{icon:"\ud83d\udc4f"})}:function(e){if(Object.values(e).every((function(e){return null!==e&&""!==e})))I("".concat(w("Creating a New ".concat(m.pageTitle)))),e.depth=D.depth+1,e.parent_id=D.id,k(Object(m.postData)(e)).then((function(e){console.log(e),"fulfilled"===e.meta.requestStatus?(x(!h),s.b.success("".concat(w("Successfully Created")," ").concat(w(m.pageTitle)),{style:{padding:"16px",color:_.success.main,border:"1px solid ".concat(_.success.main)},iconTheme:{primary:_.success.main}}),v&&k(Object(m.getDataById)(T))):"rejected"===e.meta.requestStatus&&s.b.error(e.payload.message,{style:{padding:"16px",color:_.danger.main,border:"1px solid ".concat(_.danger.main)},iconTheme:{primary:_.danger.main}})}));else for(var t in e){var a;null!==e[t]&&0===(null===(a=e[t])||void 0===a?void 0:a.length)&&q(t,{type:"manual"})}}),children:Object(p.jsxs)(l.U,{className:"gy-1 pt-75",children:[Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"name",children:[w("Name"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(j.a,{defaultValue:null!==(t=null===(a=C.selectedData)||void 0===a?void 0:a.name)&&void 0!==t?t:"",control:M,id:"name",name:"name",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(n.a)(Object(n.a)({},t),{},{className:R.name?"form-control is-invalid":"form-control",id:"name",invalid:R.name&&!0}))}})]}),Object(p.jsxs)(l.t,{md:12,xs:12,children:[Object(p.jsxs)(l.E,{className:"form-label",for:"description",children:[w("Code"),Object(p.jsx)("span",{className:"text-danger",children:"*"})]}),Object(p.jsx)(j.a,{defaultValue:null!==(f=null===(O=C.selectedData)||void 0===O?void 0:O.code)&&void 0!==f?f:"",control:M,id:"code",name:"code",render:function(e){var t=e.field;return Object(p.jsx)(l.B,Object(n.a)(Object(n.a)({},t),{},{className:R.code?"form-control is-invalid":"form-control",id:"code",invalid:R.code&&!0}))}})]}),Object(p.jsxs)(l.t,{xs:12,className:"text-center mt-2 pt-50",children:[Object(p.jsx)(l.i,{type:"submit",className:"me-1",color:"primary",children:w("Submit")}),Object(p.jsx)(l.i,{type:"reset",color:"secondary",outline:!0,onClick:function(){W(),S("add"),x(!1)},children:w("Cancel")})]})]})})]})]})})}},774:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(6),r=a(7),i=a.n(r),s=a(2),l=a(80),o=a(42),d=a(366),u=a(11),b=a(167),j=a(16),m=a(245),g=a(321),p=a(325),f=a(65),O=(a(757),a(34)),h=a(25),x=a(5),v=a(44),y=a.n(v),S=a(50),N=a.n(S),D=(a(94),a(107),a(267)),w=a(47),T=(a(36),a(0)),k=N()(y.a);t.default=function(e){var t=Object(j.b)(),a=Object(j.c)((function(e){return e[b.storeName]})),r=Object(l.a)().t,v=Object(s.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],C=Object(s.useContext)(o.a),_=Object(s.useState)(!1),J=Object(c.a)(_,2),B=(J[0],J[1]),F=Object(s.useState)("Please Wait"),L=Object(c.a)(F,2),A=(L[0],L[1]),I=Object(s.useState)(!1),E=Object(c.a)(I,2),M=E[0],q=E[1],P=Object(s.useState)(null),R=Object(c.a)(P,2),z=R[0],U=R[1],W=Object(s.useState)(null),G=Object(c.a)(W,2),Y=G[0],K=G[1],Q=Object(s.useState)(0),V=Object(c.a)(Q,2),H=V[0],X=V[1],Z=Object(s.useState)(null),$=Object(c.a)(Z,2),ee=($[0],$[1]),te=Object(s.useContext)(O.a).colors,ae=function(){var e=Object(n.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.fire({title:"".concat(r("Are you sure?")),text:"".concat(r("You won't be able to revert")," ").concat(r(b.pageTitle),"!"),icon:"warning",showCancelButton:!0,confirmButtonText:"".concat(r("Yes, Delete")," ").concat(r(b.pageTitle),"!"),cancelButtonText:"".concat(r("Cancel")),customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ms-1"},buttonsStyling:!1});case 2:e.sent.value&&(A("".concat(r("Deleting")," Data ").concat(r(b.pageTitle))),B(!0),t(Object(b.deleteData)(a)).then((function(e){"fulfilled"===e.meta.requestStatus?(B(!1),h.b.success("".concat(r("Successfully deleted")," ").concat(r(b.pageTitle)),{style:{padding:"16px",color:te.success.main,border:"1px solid ".concat(te.success.main)},iconTheme:{primary:te.success.main}})):"rejected"===e.meta.requestStatus&&(B(!1),h.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}}))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;K(e),U("add"),N(!S),q(!M),Object(u.B)(ce)},ce=function(){N(!S),q(!M),Object(u.I)()};return Object(s.useEffect)((function(){(0===a.dataNested.length&&!a.isLoadingNested||b.getAlwaysGrid)&&(A("".concat(r("Loading Data")," ").concat(r(b.pageTitle))),t(Object(b.getDataList)({})))}),[t,a.dataNested.length>0]),Object(T.jsxs)(s.Fragment,{children:[Object(T.jsx)(f.a,{blocking:a.isLoadingNested,loader:Object(T.jsx)(w.b,{}),children:Object(T.jsx)(x.l,{className:"overflow-hidden",children:Object(T.jsx)("div",{className:"react-dataTable react-dataTable-selectable-rows",children:Object(T.jsx)("div",{style:{height:1e3,marginLeft:20,marginRight:20,marginTop:40},children:Object(T.jsx)(D.a,{treeData:a.dataNested,onChange:function(e){t(Object(b.setDataListNested)(e))},canDrag:!1,searchMethod:function(e){var t=e.node,a=e.searchQuery;return a&&t.name.toLowerCase().indexOf(a.toLowerCase())>-1},searchQuery:e.searchString,searchFocusOffset:H,searchFinishCallback:function(e){ee(e.length),X(e.length>0?H%e.length:0)},maxDepth:10,generateNodeProps:function(e){var a,n,c=e.node;e.path;return{style:{fontSize:c.is_app_header?"16px":"14px",fontWeight:c.is_app_header?"bold":"normal"},title:Object(T.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[(null===c||void 0===c||null===(a=c.attributes)||void 0===a?void 0:a.logo)&&Object(T.jsx)("img",{className:"me-1",src:c.attributes.logo,height:"25"}),Object(T.jsx)("div",{className:"d-flex flex-column",children:Object(T.jsx)("span",{className:"fw-bolder",children:c.name})})]}),buttons:[C.can("post",sessionStorage.getItem("current_page_perm"))?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-primary",id:"btn-add-child",onClick:function(e){ne(c)},children:Object(T.jsx)(m.a,{size:16})}),Object(T.jsx)(x.cb,{placement:"left",target:"btn-add-child",children:r("Add Child")})]}):null,!C.can("update",sessionStorage.getItem("current_page_perm"))||c.is_app_header||c.disableEdit?null:Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(x.i.Ripple,{className:"btn-icon rounded-circle",color:"flat-info",id:"btn-edit",onClick:function(e){var a;e.preventDefault(),a=c,U("edit"),b.detailFromGrid?(A("".concat(r("Loading")," ").concat(r("Detail")," ").concat(r("Data")," ").concat(r(b.pageTitle))),B(!0),t(Object(b.setDataById)(a)).then((function(){B(!1),q(!0)}))):(A("".concat(r("Loading")," ").concat(r("Detail")," ").concat(r("Data")," ").concat(r(b.pageTitle))),B(!0),t(Object(b.getDataById)(a.id)).then((function(e){"rejected"===e.meta.requestStatus?(B(!1),h.b.error(e.payload.message,{style:{padding:"16px",color:te.danger.main,border:"1px solid ".concat(te.danger.main)},iconTheme:{primary:te.danger.main}})):(B(!1),q(!0))})))},children:Object(T.jsx)(g.a,{size:16})}),Object(T.jsx)(x.cb,{placement:"left",target:"btn-edit",children:r("Edit")})]}),C.can("delete",sessionStorage.getItem("current_page_perm"))&&!c.disableDelete&&0===(null===c||void 0===c||null===(n=c.children)||void 0===n?void 0:n.length)?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(x.i.Ripple,{id:"btn-delete",className:"btn-icon rounded-circle",color:"flat-danger",onClick:function(e){e.preventDefault(),ae(c.id)},children:Object(T.jsx)(p.a,{size:16})}),Object(T.jsx)(x.cb,{placement:"left",target:"btn-delete",children:r("Delete")})]}):null]}}})})})})}),M&&Object(T.jsx)(d.default,{formState:z,show:M,setShow:ne,detailPage:!1,setFormState:U,currentData:Y})]})}}}]);
//# sourceMappingURL=125.29faf956.chunk.js.map