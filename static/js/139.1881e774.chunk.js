(this["webpackJsonpsaba-react-framework"]=this["webpackJsonpsaba-react-framework"]||[]).push([[139],{1281:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/avatar-s-7.ba3f6823.jpg"},804:function(e,a,t){"use strict";t.r(a);var i=t(4),n=t(6),l=t(36),c=(t(268),t(185)),s=t(557),r=t(583),d=t(5),o=t(16),j=t(80),m=t(148),u=t(2),b=t(65),v=t(47),h=t(64),O=t.n(h),x=(t(146),t(102),t(14)),p=t(99),g=t(25),f=t(34),N=t(57),y=t(224),D=t.n(y),T=t(0),S={pagination:{clickable:!0},autoplay:{delay:1e4,disableOnInteraction:!1}};a.default=function(){var e,a,h,y,w,k,_,I,E=Object(j.a)().t,L=Object(o.c)((function(e){return e.dynamicStore})),R=(Object(o.c)((function(e){return e.dynamic_temp_state})),Object(o.b)()),A=Object(u.useContext)(f.a).colors,C=Object(u.useState)(!1),q=Object(n.a)(C,2),z=(q[0],q[1],Object(u.useState)(!1)),U=Object(n.a)(z,2),W=U[0],P=U[1],H=Object(u.useState)(!1),J=Object(n.a)(H,2),V=J[0],F=(J[1],Object(u.useState)("Please Wait")),Y=Object(n.a)(F,2),B=Y[0],G=Y[1],K="TrainingEmployee_needApproval",M="TrainingEmployee/assignment";Object(u.useEffect)((function(){var e,a,t;L.pageData[K]&&(0!==(null===(e=L.pageData[K])||void 0===e||null===(a=e.data)||void 0===a?void 0:a.length)||null!==(t=L.pageData[K])&&void 0!==t&&t.isLoading)||R(Object(x.i)({storeName:K,endpointName:M,baseUrl:"hr",type:"to_me",Id_AttendingState:3}))}),[]);var Q=function(e){var a,t,i,n,l="";if(null!==e&&void 0!==e&&null!==(a=e.payload)&&void 0!==a&&null!==(t=a.error)&&void 0!==t&&t.errors){var c,s,r=null===e||void 0===e||null===(c=e.payload)||void 0===c||null===(s=c.error)||void 0===s?void 0:s.errors;for(var d in null===e||void 0===e||null===(o=e.payload)||void 0===o||null===(j=o.error)||void 0===j?void 0:j.errors){var o,j;l="".concat(l," - ").concat(r[d],"\n")}}return g.b.error("".concat(null===(i=e.payload)||void 0===i||null===(n=i.error)||void 0===n?void 0:n.message," \n \n ").concat(l),{style:{padding:"16px",color:A.danger.main,border:"1px solid ".concat(A.danger.main)},iconTheme:{primary:A.danger.main}})},X={lastDay:"[Yesterday]",sameDay:"[Today]",nextDay:"[Tomorrow]",lastWeek:"[last] dddd",nextWeek:"dddd",sameElse:"L"},Z=function(e){return e.toUpperCase()};return null!==(e=L.pageData[K])&&void 0!==e&&e.isLoading?Object(T.jsx)(d.t,{lg:"12",xs:"12",children:Object(T.jsxs)(d.l,{style:{minHeight:"200px"},children:[Object(T.jsx)(d.o,{children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(D.a,{className:"user-timeline-title-icon me-1"}),Object(T.jsx)(d.s,{tag:"h4",children:E("Need Approval")})]})}),Object(T.jsx)(b.a,{blocking:!0,loader:Object(T.jsx)(v.b,{}),children:Object(T.jsx)(d.m,{})})]})}):(null===(a=L.pageData[K])||void 0===a||null===(h=a.data)||void 0===h?void 0:h.length)>0?Object(T.jsx)(d.t,{lg:"12",xs:"12",children:Object(T.jsxs)(d.l,{children:[Object(T.jsx)(d.o,{children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(D.a,{className:"user-timeline-title-icon me-1"}),Object(T.jsx)(d.s,{tag:"h4",children:E("Training Need Approval")}),(null===(y=L.pageData[K])||void 0===y||null===(w=y.data)||void 0===w?void 0:w.length)>1&&Object(T.jsx)(d.f,{className:"ms-1",tag:"div",color:"danger",pill:!0,children:null===(k=L.pageData[K])||void 0===k||null===(_=k.data)||void 0===_?void 0:_.length})]})}),Object(T.jsx)(d.m,{className:"px-0 pb-0",children:Object(T.jsx)(p.a,Object(i.a)(Object(i.a)({},S),{},{children:null===(I=L.pageData[K])||void 0===I?void 0:I.data.map((function(e){var a,i,n,o,j,u,b,v,h,f,y;return Object(T.jsx)(p.b,{children:Object(T.jsxs)(d.l,{className:"card-developer-meetup  cursor-pointer",children:[Object(T.jsx)("div",{className:"meetup-img-wrapper rounded-top text-center",children:Object(T.jsx)("img",{src:null!==e&&void 0!==e&&null!==(a=e.TrainingData)&&void 0!==a&&a.Image?e.TrainingData.Image:m.a,height:"170"})}),Object(T.jsxs)(d.m,{children:[Object(T.jsxs)("div",{className:"meetup-header d-flex align-items-center",children:[Object(T.jsxs)("div",{className:"meetup-day",children:[Object(T.jsx)("h6",{className:"mb-0",children:Object(T.jsx)(O.a,{filter:Z,format:"ddd",children:null===e||void 0===e||null===(i=e.TrainingData)||void 0===i?void 0:i.StartDate})}),Object(T.jsx)("h3",{className:"mb-0",children:Object(T.jsx)(O.a,{format:"DD",children:null===e||void 0===e||null===(n=e.TrainingData)||void 0===n?void 0:n.StartDate})})]}),Object(T.jsxs)("div",{className:"my-auto text-truncate",children:[Object(T.jsx)(d.s,{tag:"h4",className:"mb-25",children:null===e||void 0===e||null===(o=e.TrainingData)||void 0===o?void 0:o.Name}),Object(T.jsx)(d.r,{className:"mb-0",children:null===e||void 0===e||null===(j=e.TrainingData)||void 0===j?void 0:j.Description})]})]}),Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)(l.a,{color:"light-primary",className:"rounded me-1",icon:Object(T.jsx)(c.a,{size:18})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h6",{className:"mb-0",children:Object(T.jsx)(O.a,{calendar:X,children:null===e||void 0===e||null===(u=e.TrainingData)||void 0===u?void 0:u.StartDate})}),Object(T.jsx)("small",{children:Object(T.jsx)(O.a,{format:"[Start at] LT",children:null===e||void 0===e||null===(b=e.TrainingData)||void 0===b?void 0:b.StartDate})})]})]}),null!==e&&void 0!==e&&null!==(v=e.TrainingData)&&void 0!==v&&v.IsOnline?Object(T.jsxs)("div",{className:"d-flex mt-2",children:[Object(T.jsx)(l.a,{color:"light-primary",className:"rounded me-1",icon:Object(T.jsx)(r.a,{size:18})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h6",{className:"mb-0",children:E("Online Training")}),Object(T.jsx)("small",{children:null!==e&&void 0!==e&&null!==(f=e.TrainingData)&&void 0!==f&&f.LinkRef?null===e||void 0===e||null===(y=e.TrainingData)||void 0===y?void 0:y.LinkRef:"The link will be sent before the event starts"})]})]}):Object(T.jsxs)("div",{className:"d-flex mt-2",children:[Object(T.jsx)(l.a,{color:"light-primary",className:"rounded me-1",icon:Object(T.jsx)(s.a,{size:18})}),Object(T.jsx)("div",{children:Object(T.jsx)("small",{children:null===e||void 0===e||null===(h=e.TrainingData)||void 0===h?void 0:h.Address})})]})]}),null===e||void 0===e?void 0:e.Employee.map((function(a){var i;return Object(T.jsx)(d.n,{children:Object(T.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)(l.a,{imgClassName:"rounded",className:"me-75",img:null!==(i="".concat(null===a||void 0===a?void 0:a.PhotoPath))&&void 0!==i?i:t(1281).default,imgHeight:"42",imgWidth:"42"}),Object(T.jsx)("div",{className:"my-auto",children:Object(T.jsx)("h6",{className:"mb-0",children:"".concat(null===a||void 0===a?void 0:a.FirstName," ").concat(null===a||void 0===a?void 0:a.LastName)})})]}),Object(T.jsxs)("div",{className:"d-flex",children:[!W&&(V?Object(T.jsxs)(d.i.Ripple,{color:"flat-secondary me-1",children:[Object(T.jsx)(d.V,{color:"white",size:"sm",type:"grow"}),Object(T.jsx)("span",{className:"ms-50",children:B})]}):Object(T.jsx)(d.i.Ripple,{color:"flat-secondary me-1",children:E("Decline")})),W?Object(T.jsxs)(d.i.Ripple,{color:"gradient-primary",children:[Object(T.jsx)(d.V,{color:"white",size:"sm",type:"grow"}),Object(T.jsx)("span",{className:"ms-50",children:B})]}):Object(T.jsx)(d.i.Ripple,{onClick:function(t){var i;t.preventDefault(),i={id:null===e||void 0===e?void 0:e.Id_Training,Id_Employee:a.id},P(!0),G("Confirming Training Request"),i.storeName=K,i.endpointName=M,i.baseUrl="hr",i.callback_page=window.location.href,R(Object(x.q)(i)).then((function(e){"fulfilled"===e.meta.requestStatus?R(Object(x.i)({storeName:K,endpointName:M,baseUrl:"hr",type:"to_me",Id_AttendingState:3})).then((function(e){g.b.success("".concat(E("Successfully Confirming Training Request"),"}"),{style:{padding:"16px",color:A.success.main,border:"1px solid ".concat(A.success.main)},iconTheme:{primary:A.success.main}})})).then((function(e){P(!1)})).then((function(e){R(Object(x.i)({storeName:"TrainingEmployee_task",endpointName:"TrainingEmployee/assignment",baseUrl:"hr",type:"to_me",Id_AttendingState:1})),setTimeout((function(){R(Object(N.getDataList)({}))}),8e3)})):"rejected"===e.meta.requestStatus&&Q(e)})).catch((function(e){P(!1),Q(e)}))},color:"gradient-primary",children:E("Confirm")})]})]})})}))]})},"swiper_".concat(e.id))}))}))})]})}):null}}}]);
//# sourceMappingURL=139.1881e774.chunk.js.map