"use strict";(self.webpackChunktrip_tips_project=self.webpackChunktrip_tips_project||[]).push([[945],{5058:function(e,a,s){s.r(a),s.d(a,{default:function(){return S}});var l=s(4165),t=s(1413),n=s(5861),i=s(885),o=s(935),r=s(1969),d=s(7313),c=s(5627),m=s(7890),u=s(3757),p=s(3124),h=s(1162),x=s(4704),v=s(6776),g=s.p+"static/media/bankcard.747c3eeab1a73de072e2.png",j=s.p+"static/media/profile4.c27015683e4a94491de1.jpg",b=s(7979),f=s(7502),N=s(4491),y=s(6417),w=function(){var e=(0,m.s0)(),a=(0,d.useContext)(p.Z),s=a.auth,h=a.setAuth,v=(0,d.useState)(""),g=(0,i.Z)(v,2),j=g[0],b=g[1],f=(0,d.useState)(!1),w=(0,i.Z)(f,2),Z=w[0],k=w[1],C=(0,c.cI)(),_=C.register,S=C.handleSubmit,L=C.formState.errors,R=C.trigger,q=C.reset,F=function(){var a=(0,n.Z)((0,l.Z)().mark((function a(n){var i,o,r,d,c,m,p,x,v,g,f,y,w,Z,C,_,S,L,R,F,P,U;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.name,o=void 0===i?null:i,r=n.phone,d=void 0===r?null:r,c=n.img,k(!0),m=null,p=null,x=null,p=o||s.aname,x=d||s.aphone,0===c.length?m=null:1===c.length&&(m=c[0]),(v=new FormData).append("name",p),null!==m&&v.append("img",m),v.append("phone",x),q(),a.prev=13,a.next=16,u.Z.post("/api/profile/update",v,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.atoken)},withCredentials:!0});case 16:g=a.sent,console.log(g.data),f=p,y=x,w=g.data.img,h((0,t.Z)((0,t.Z)({},s),{},{aname:f,aphone:y,aimg:w})),k(!1),N.Am.success("Edit Success",{autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1}),a.next=30;break;case 26:a.prev=26,a.t0=a.catch(13),k(!1),null!==a.t0&&void 0!==a.t0&&a.t0.message?0===(null===a.t0||void 0===a.t0||null===(Z=a.t0.response)||void 0===Z?void 0:Z.status)?(b(a.t0.message),console.log(j)):400===(null===a.t0||void 0===a.t0||null===(C=a.t0.response)||void 0===C?void 0:C.status)?(0===(null===a.t0||void 0===a.t0||null===(S=a.t0.response)||void 0===S||null===(L=S.data)||void 0===L?void 0:L.status)&&(b(null===a.t0||void 0===a.t0||null===(P=a.t0.response)||void 0===P||null===(U=P.data)||void 0===U?void 0:U.message),N.Am.error("Faild: Image Has Invalid Content ",{autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1})),3===(null===a.t0||void 0===a.t0||null===(R=a.t0.response)||void 0===R||null===(F=R.data)||void 0===F?void 0:F.status)&&(h((0,t.Z)((0,t.Z)({},s),{},{ablocked:0})),e("/blocked")),b(a.t0.response.data.message),console.log(j)):401===(null===a.t0||void 0===a.t0||null===(_=a.t0.response)||void 0===_?void 0:_.status)?(b(a.t0.response.data.message),console.log(j)):(b("Edit Profile Failed"),console.log(a.t0)):(b("No Server Response"),console.log("No Server Response"));case 30:case"end":return a.stop()}}),a,null,[[13,26]])})));return function(e){return a.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[Z&&(0,y.jsx)(x.Z,{}),(0,y.jsx)("div",{className:"modal fade edit-profile mt-5 mt-sm-0",id:"editpofilemodal",tabIndex:"-1","aria-labelledby":"editpofilemodalLabel","aria-hidden":"true",children:(0,y.jsx)("div",{className:"modal-dialog ",children:(0,y.jsxs)("div",{className:"modal-content",children:[(0,y.jsxs)("div",{className:"modal-header",children:[(0,y.jsx)("h5",{className:"modal-title",id:"editpofilemodalLabel",children:"Edit Your Profile"}),(0,y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,y.jsxs)("form",{onSubmit:S(F),children:[(0,y.jsx)("div",{className:"modal-body",children:(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-12",children:(0,y.jsxs)("div",{className:"input-group input-group-lg mb-1",children:[(0,y.jsx)("span",{className:"input-group-text fs-3 filed filed-icon ",children:(0,y.jsx)(r.G,{icon:o.yGG})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                      ".concat(L.name&&"invalid")},_("name",{minLength:{value:3,message:"Minimum Required length is 3"},maxLengthLength:{value:20,message:"Maximum allowed length is 20 "}})),{},{onKeyUp:function(){R("name")},placeholder:s.aname})),L.name&&(0,y.jsx)("small",{className:"text-danger",children:L.name.message})]})}),(0,y.jsx)("div",{className:"col-12",children:(0,y.jsxs)("div",{className:"input-group input-group-lg mb-1",children:[(0,y.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,y.jsx)(r.G,{icon:o.j1w})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"number",className:"form-control tel filed ".concat(L.phone&&"invalid")},_("phone",{pattern:{value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{2})[-. )]*(\d{2})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,message:"Invalid phone no"}})),{},{onKeyUp:function(){R("phone")},placeholder:s.aphone})),L.phone&&(0,y.jsx)("small",{className:"text-danger",children:L.phone.message})]})}),(0,y.jsxs)("div",{className:"col-12",children:[" ",(0,y.jsxs)("div",{className:"input-group input-group-lg  mb-2  ",children:[(0,y.jsx)("span",{className:"input-group-text fs-3 filed filed-icon ",children:(0,y.jsx)(r.G,{icon:o.V3X})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"file",id:"poster",accept:"image/*",alt:"...",className:"form-control filed \n                        ".concat(L.img&&"invalid")},_("img")),{},{onKeyUp:function(){R("img")}})),L.img&&(0,y.jsx)("small",{className:"text-danger",children:L.img.message})]})]})]})}),(0,y.jsxs)("div",{className:"modal-footer",children:[(0,y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:function(){q()},children:"Discard"}),(0,y.jsx)("button",{type:"submit",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save Changes"})]})]})]})})})]})},Z=function(){var e=(0,m.s0)(),a=(0,d.useContext)(p.Z),s=a.auth,o=a.setAuth,r=(0,d.useState)(""),h=(0,i.Z)(r,2),v=h[0],j=h[1],b=(0,d.useState)(!1),f=(0,i.Z)(b,2),N=f[0],w=f[1],Z=(0,d.useState)(!1),k=(0,i.Z)(Z,2),C=(k[0],k[1]),_=(0,c.cI)(),S=_.register,L=_.handleSubmit,R=_.formState.errors,q=_.trigger,F=_.reset,P=function(){var a=(0,n.Z)((0,l.Z)().mark((function a(n){var i,r,d,c,m,p,h,x,g;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.paytype,r=n.card_charg,w(!0),F(),(d=new FormData).append("charging_type",i),d.append("charging_value",r),a.prev=6,a.next=9,u.Z.post("api/profile/wallet_charging",d,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.atoken)},withCredentials:!0});case 9:c=a.sent,console.log(c),w(!1),o((0,t.Z)((0,t.Z)({},s),{},{abalance:c.data.money_in_wallet})),1===c.data.status&&C(!0),j(c.data.message),a.next=22;break;case 17:a.prev=17,a.t0=a.catch(6),w(!1),C(!1),null!==a.t0&&void 0!==a.t0&&a.t0.message?0===(null===a.t0||void 0===a.t0||null===(m=a.t0.response)||void 0===m?void 0:m.status)?(j(a.t0.message),console.log(v)):400===(null===a.t0||void 0===a.t0||null===(p=a.t0.response)||void 0===p?void 0:p.status)?(3===(null===a.t0||void 0===a.t0||null===(x=a.t0.response)||void 0===x||null===(g=x.data)||void 0===g?void 0:g.status)&&(o((0,t.Z)((0,t.Z)({},s),{},{ablocked:0})),e("/blocked")),j(a.t0.response.data.message),console.log(v)):401===(null===a.t0||void 0===a.t0||null===(h=a.t0.response)||void 0===h?void 0:h.status)?(j(a.t0.response.data.message),console.log(v)):(j(" Failed"),console.log(a.t0)):(j("No Server Response"),console.log("No Server Response"));case 22:F();case 23:case"end":return a.stop()}}),a,null,[[6,17]])})));return function(e){return a.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[N&&(0,y.jsx)(x.Z,{}),(0,y.jsx)("div",{className:"modal fade wallet mt-5 mt-sm-0",id:"chargewalletmodal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"chargewalletmodalLabel","aria-hidden":"true",children:(0,y.jsx)("div",{className:"modal-dialog  modal-lg",children:(0,y.jsxs)("div",{className:"modal-content",children:[(0,y.jsxs)("div",{className:"modal-header ",children:[(0,y.jsx)("h4",{className:"modal-title ",id:"chargewalletmodalLabel",children:"Charge Your Wallet"}),(0,y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,y.jsxs)("form",{onSubmit:L(P),children:[(0,y.jsx)("div",{className:"modal-body",children:(0,y.jsxs)("div",{className:"cardbank-box",children:[(0,y.jsx)("img",{src:g,alt:"."}),(0,y.jsxs)("div",{className:"pay-fileds",children:[(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-7"}),(0,y.jsx)("div",{className:"col-4 col-md-3 mt-3 ms-4 mt-lg-5 ms-lg-5",children:(0,y.jsx)("div",{className:"input-group input-group-lg mb-1 ms-sm-5 type-select",children:(0,y.jsxs)("select",(0,t.Z)((0,t.Z)({className:"form-select pay-type filed  ".concat(R.paytype&&"invalid")},S("paytype",{required:"Place Rate Is Required"})),{},{onKeyUp:function(){q("paytype")},"aria-label":"Default select example",children:[(0,y.jsx)("option",{value:"",children:"Card Type"}),(0,y.jsx)("option",{value:"Credit-Card",children:"Credit-Card"}),(0,y.jsx)("option",{value:"PayPal",children:"PayPal"}),(0,y.jsx)("option",{value:"Visa-Card",children:"Visa-Card"}),(0,y.jsx)("option",{value:"Master-card",children:"Master-card"})]}))})})]}),(0,y.jsxs)("div",{className:"row g-0 card-code",children:[(0,y.jsx)("div",{className:"col-2 col-md-2 offset-2 ",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code1"]&&"invalid")},S("card-code1",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code1")}}))})}),(0,y.jsx)("div",{className:"col-2 col-md-2 ",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code2"]&&"invalid")},S("card-code2",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code2")}}))})}),(0,y.jsx)("div",{className:"col-2 col-md-2 ",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code3"]&&"invalid")},S("card-code3",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code3")}}))})}),(0,y.jsx)("div",{className:"col-2 col-md-2",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code4"]&&"invalid")},S("card-code4",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code4")}}))})}),(0,y.jsx)("div",{className:"col-9 col-md-4 mx-auto mt-3",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"number",className:"form-control filed charge-filed\n                                              ".concat(R.card_charg&&"invalid")},S("card_charg",{required:"required",min:1,max:1e4})),{},{onKeyUp:function(){q("card_charg")},placeholder:"Charging Value"}))})})]})]})]})}),(0,y.jsxs)("div",{className:"modal-footer",children:[(0,y.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg","data-bs-dismiss":"modal",children:"Discard"}),(0,y.jsx)("button",{type:"submit","data-bs-dismiss":"modal",className:"btn btn-primary btn-lg",children:"Charge"})]})]})]})})})]})},k=function(){var e=(0,m.s0)(),a=(0,d.useContext)(p.Z),s=a.auth,o=a.setAuth,r=(0,d.useState)(""),h=(0,i.Z)(r,2),v=h[0],j=h[1],b=(0,d.useState)(!1),f=(0,i.Z)(b,2),N=f[0],w=f[1],Z=(0,d.useState)(!1),k=(0,i.Z)(Z,2),C=(k[0],k[1]),_=(0,c.cI)(),S=_.register,L=_.handleSubmit,R=_.formState.errors,q=_.trigger,F=_.reset,P=function(){var a=(0,n.Z)((0,l.Z)().mark((function a(n){var i,r,d,c,m,p,h,x,g;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.paytype,r=n.pull_value,w(!0),F(),(d=new FormData).append("charging_type",i),d.append("price",r),a.prev=6,a.next=9,u.Z.post("api/profile/payment_to_bank",d,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.atoken)},withCredentials:!0});case 9:c=a.sent,console.log(c),w(!1),o((0,t.Z)((0,t.Z)({},s),{},{abalance:c.data.your_money})),1===c.data.status&&C(!0),j(c.data.message),a.next=22;break;case 17:a.prev=17,a.t0=a.catch(6),w(!1),C(!1),null!==a.t0&&void 0!==a.t0&&a.t0.message?0===(null===a.t0||void 0===a.t0||null===(m=a.t0.response)||void 0===m?void 0:m.status)?(j(a.t0.message),console.log(v)):400===(null===a.t0||void 0===a.t0||null===(p=a.t0.response)||void 0===p?void 0:p.status)?(3===(null===a.t0||void 0===a.t0||null===(x=a.t0.response)||void 0===x||null===(g=x.data)||void 0===g?void 0:g.status)&&(o((0,t.Z)((0,t.Z)({},s),{},{ablocked:0})),e("/blocked")),j(a.t0.response.data.message),console.log(v)):401===(null===a.t0||void 0===a.t0||null===(h=a.t0.response)||void 0===h?void 0:h.status)?(j(a.t0.response.data.message),console.log(v)):(j(" Failed"),console.log(a.t0)):(j("No Server Response"),console.log("No Server Response"));case 22:F();case 23:case"end":return a.stop()}}),a,null,[[6,17]])})));return function(e){return a.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[N&&(0,y.jsx)(x.Z,{}),(0,y.jsx)("div",{className:"modal fade wallet mt-5 mt-sm-0",id:"pullfromwalletmodal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"pullfromwalletmodalLabel","aria-hidden":"true",children:(0,y.jsx)("div",{className:"modal-dialog  modal-lg",children:(0,y.jsxs)("div",{className:"modal-content",children:[(0,y.jsxs)("div",{className:"modal-header",children:[(0,y.jsx)("h5",{className:"modal-title",id:"pullfromwalletmodalLabel",children:"Pull balance"}),(0,y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,y.jsxs)("form",{onSubmit:L(P),children:[(0,y.jsx)("div",{className:"modal-body",children:(0,y.jsxs)("div",{className:"cardbank-box",children:[(0,y.jsx)("img",{src:g,alt:"."}),(0,y.jsxs)("div",{className:"pay-fileds",children:[(0,y.jsxs)("div",{className:"row",children:[(0,y.jsx)("div",{className:"col-7"}),(0,y.jsx)("div",{className:"col-4 col-md-3 mt-3 ms-4 mt-lg-5 ms-lg-5",children:(0,y.jsx)("div",{className:"input-group input-group-lg mb-1 ms-sm-5 type-select",children:(0,y.jsxs)("select",(0,t.Z)((0,t.Z)({className:"form-select pay-type filed  ".concat(R.paytype&&"invalid")},S("paytype",{required:"Place Rate Is Required"})),{},{onKeyUp:function(){q("paytype")},"aria-label":"Default select example",children:[(0,y.jsx)("option",{value:"",children:"Pull To"}),(0,y.jsx)("option",{value:"Credit-Card",children:"Credit-Card"}),(0,y.jsx)("option",{value:"PayPal",children:"PayPal"}),(0,y.jsx)("option",{value:"Visa-Card",children:"Visa-Card"}),(0,y.jsx)("option",{value:"Master-card",children:"Master-card"})]}))})})]}),(0,y.jsxs)("div",{className:"row g-0 card-code",children:[(0,y.jsx)("div",{className:"col-2 col-md-2 offset-2",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code1"]&&"invalid")},S("card-code1",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code1")}}))})}),(0,y.jsx)("div",{className:"col-2 col-md-2 ",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code2"]&&"invalid")},S("card-code2",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code2")}}))})}),(0,y.jsx)("div",{className:"col-2 col-md-2 ",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code3"]&&"invalid")},S("card-code3",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code3")}}))})}),(0,y.jsx)("div",{className:"col-2 col-md-2",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",className:"form-control filed \n                                              ".concat(R["card-code4"]&&"invalid")},S("card-code4",{required:"required",minLength:4,maxLength:4})),{},{onKeyUp:function(){q("card-code4")}}))})}),(0,y.jsx)("div",{className:"col-9 col-md-4 mx-auto mt-3",children:(0,y.jsx)("div",{className:"input-group input-group-lg ",children:(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"number",className:"form-control filed charge-filed\n                                              ".concat(R.pull_value&&"invalid")},S("pull_value",{required:"required",min:1,max:1e4})),{},{onKeyUp:function(){q("pull_value")},placeholder:"Pull Value"}))})})]})]})]})}),(0,y.jsxs)("div",{className:"modal-footer",children:[(0,y.jsx)("button",{type:"button",className:"btn btn-secondary btn-lg","data-bs-dismiss":"modal",children:"Discard"}),(0,y.jsx)("button",{type:"submit","data-bs-dismiss":"modal",className:"btn btn-primary btn-lg",children:"Pull"})]})]})]})})})]})},C=function(){var e=(0,m.s0)(),a=(0,d.useContext)(p.Z),s=a.auth,h=a.setAuth,v=(0,d.useState)(""),g=(0,i.Z)(v,2),j=g[0],b=g[1],f=(0,d.useState)(!1),N=(0,i.Z)(f,2),w=N[0],Z=N[1],k=(0,d.useState)(!1),C=(0,i.Z)(k,2),_=C[0],S=C[1],L=(0,c.cI)(),R=L.register,q=L.handleSubmit,F=L.formState.errors,P=L.trigger,U=L.reset,G=L.getValues,A=function(){var a=(0,n.Z)((0,l.Z)().mark((function a(n){var i,o,r,d,c,m,p,x,v;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.password,o=n.newpassword,Z(!0),U(),(r=new FormData).append("password",i),r.append("new_password",o),a.prev=6,a.next=9,u.Z.post("api/profile/reset_password",r,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.atoken)},withCredentials:!0});case 9:d=a.sent,console.log(d),Z(!1),1===d.data.status&&S(!0),b(d.data.message),a.next=21;break;case 16:a.prev=16,a.t0=a.catch(6),Z(!1),S(!1),null!==a.t0&&void 0!==a.t0&&a.t0.message?0===(null===a.t0||void 0===a.t0||null===(c=a.t0.response)||void 0===c?void 0:c.status)?(b(a.t0.message),console.log(j)):400===(null===a.t0||void 0===a.t0||null===(m=a.t0.response)||void 0===m?void 0:m.status)?(3===(null===a.t0||void 0===a.t0||null===(x=a.t0.response)||void 0===x||null===(v=x.data)||void 0===v?void 0:v.status)&&(h((0,t.Z)((0,t.Z)({},s),{},{ablocked:0})),e("/blocked")),b(a.t0.response.data.message),console.log(j)):401===(null===a.t0||void 0===a.t0||null===(p=a.t0.response)||void 0===p?void 0:p.status)?(b(a.t0.response.data.message),console.log(j)):(b(" Failed"),console.log(a.t0)):(b("No Server Response"),console.log("No Server Response"));case 21:case"end":return a.stop()}}),a,null,[[6,16]])})));return function(e){return a.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[w&&(0,y.jsx)(x.Z,{}),(0,y.jsx)("div",{className:"modal fade reset-password mt-5 mt-sm-0",id:"resetpasswordmodal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"resetpasswordmodalLabel","aria-hidden":"true",children:(0,y.jsx)("div",{className:"modal-dialog",children:(0,y.jsx)("div",{className:"modal-content",children:(0,y.jsxs)("form",{onSubmit:q(A),children:[(0,y.jsxs)("div",{className:"modal-header",children:[(0,y.jsx)("h5",{className:"modal-title",id:"resetpasswordmodalLabel",children:"Reset Your Password"}),(0,y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,y.jsxs)("div",{className:"modal-body",children:[" ",(0,y.jsxs)("div",{className:"input-group input-group-lg  mb-1 ",children:[(0,y.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,y.jsx)(r.G,{icon:o._1N})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"password",className:"form-control filed ".concat(F.password&&"invalid")},R("password",{required:"password is Required",minLength:{value:6,message:"Minimum Required length is 6"},maxLength:{value:20,message:"Maximum allowed length is 20 "}})),{},{onKeyUp:function(){P("password")},placeholder:"Your Current Password"})),F.password&&(0,y.jsx)("small",{className:"text-danger",children:F.password.message})]}),(0,y.jsxs)("div",{className:"input-group input-group-lg  mb-1 ",children:[(0,y.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,y.jsx)(r.G,{icon:o.tAh})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"password",className:"form-control filed ".concat(F.newpassword&&"invalid")},R("newpassword",{required:"new password is Required",minLength:{value:6,message:"Minimum Required length is 6"},maxLength:{value:20,message:"Maximum allowed length is 20 "}})),{},{onKeyUp:function(){P("newpassword")},placeholder:"New Password"})),F.newpassword&&(0,y.jsx)("small",{className:"text-danger",children:F.newpassword.message})]}),(0,y.jsxs)("div",{className:"input-group input-group-lg  mb-1 ",children:[(0,y.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,y.jsx)(r.G,{icon:o.byT})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"password",className:"form-control filed ".concat(F.c_password&&"invalid")},R("c_password",{required:"confirm password is Required",validate:{value:function(e){return e===G("newpassword")||"Do Not matched"}}})),{},{onKeyUp:function(){P("c_password")},placeholder:"Confirm Password"})),F.c_password&&(0,y.jsx)("small",{className:"text-danger",children:F.c_password.message})]})]}),(0,y.jsxs)("div",{className:"modal-footer",children:[j&&(0,y.jsxs)("div",{className:"alert alert-".concat(_?"success":"danger"," d-flex align-items-center col-6  mx-auto server-error"),role:"alert",children:[(0,y.jsx)(r.G,{icon:_?o.f8k:o.eHv,className:"bi  me-2 ",width:"25",height:"25",role:"img","aria-label":"Danger:"}),(0,y.jsx)("div",{className:"text-center",children:j})]}),(0,y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Discard"}),(0,y.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Reset"})]})]})})})})]})},_=function(){var e=(0,m.s0)(),a=(0,d.useContext)(p.Z),s=a.auth,h=a.setAuth,v=(0,d.useState)(""),g=(0,i.Z)(v,2),j=g[0],b=g[1],N=(0,d.useState)(!1),w=(0,i.Z)(N,2),Z=w[0],k=w[1],C=(0,c.cI)(),_=C.register,S=C.handleSubmit,L=C.formState.errors,R=C.trigger,q=C.reset,F=function(){var a=(0,n.Z)((0,l.Z)().mark((function a(n){var i,o,r,d,c,m,p,x;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=n.password,k(!0),q(),(o=new FormData).append("password",i),a.prev=5,a.next=8,u.Z.post("api/profile/delete_account",o,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.atoken)},withCredentials:!0});case 8:r=a.sent,console.log(r.data),k(!1),e("/home"),h({}),(0,f.bG)("token")&&(0,f.Sz)("token"),a.next=20;break;case 16:a.prev=16,a.t0=a.catch(5),k(!1),null!==a.t0&&void 0!==a.t0&&a.t0.message?0===(null===a.t0||void 0===a.t0||null===(d=a.t0.response)||void 0===d?void 0:d.status)?(b(a.t0.message),console.log(j)):400===(null===a.t0||void 0===a.t0||null===(c=a.t0.response)||void 0===c?void 0:c.status)?(3===(null===a.t0||void 0===a.t0||null===(p=a.t0.response)||void 0===p||null===(x=p.data)||void 0===x?void 0:x.status)&&(h((0,t.Z)((0,t.Z)({},s),{},{ablocked:0})),e("/blocked")),b(a.t0.response.data.message),console.log(j)):401===(null===a.t0||void 0===a.t0||null===(m=a.t0.response)||void 0===m?void 0:m.status)?(b(a.t0.response.data.message),console.log(j)):(b("Edit Profile Failed"),console.log(a.t0)):(b("No Server Response"),console.log("No Server Response"));case 20:case"end":return a.stop()}}),a,null,[[5,16]])})));return function(e){return a.apply(this,arguments)}}();return(0,y.jsxs)(y.Fragment,{children:[Z&&(0,y.jsx)(x.Z,{}),(0,y.jsx)("div",{className:"modal fade mt-5 mt-sm-0",id:"deleteacountmodal","data-bs-backdrop":"static","data-bs-keyboard":"false",tabIndex:"-1","aria-labelledby":"deleteacountmodalLabel","aria-hidden":"true",children:(0,y.jsx)("div",{className:"modal-dialog",children:(0,y.jsx)("div",{className:"modal-content",children:(0,y.jsxs)("form",{onSubmit:S(F),children:[(0,y.jsxs)("div",{className:"modal-header",children:[(0,y.jsx)("h5",{className:"modal-title",id:"deleteacountmodalLabel",children:"Are You Sure you want to delete your acount ?"}),(0,y.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,y.jsxs)("div",{className:"modal-body",children:[(0,y.jsxs)("div",{className:"alert alert-danger d-flex align-items-center",role:"alert",children:[(0,y.jsx)(r.G,{className:" flex-shrink-0 me-2 fs-5",icon:o.e7M}),(0,y.jsx)("h4",{className:"alert-heading me-3",children:"Warning"}),(0,y.jsx)("hr",{}),(0,y.jsx)("div",{children:"if you delete your acount you maybe lose your e-wallet balance and your places contracts if the support team can not contact with you !!"})]}),(0,y.jsx)("hr",{}),(0,y.jsx)("h6",{className:"text-center",children:"Please Confirm Your Password First"}),(0,y.jsxs)("div",{className:"input-group input-group-lg  mb-1 ",children:[(0,y.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,y.jsx)(r.G,{icon:o.byT})}),(0,y.jsx)("input",(0,t.Z)((0,t.Z)({type:"password",className:"form-control filed ".concat(L.password&&"invalid")},_("password",{required:"password is Required"})),{},{onKeyUp:function(){R("password")},placeholder:"Enter Your Password"})),L.password&&(0,y.jsx)("small",{className:"text-danger",children:L.password.message})]})]}),(0,y.jsxs)("div",{className:"modal-footer",children:[j&&(0,y.jsxs)("div",{className:"alert alert-".concat("danger"," d-flex align-items-center col-6  mx-auto server-error"),role:"alert",children:[(0,y.jsx)(r.G,{icon:o.eHv,className:"bi  me-2 ",width:"25",height:"25",role:"img","aria-label":"Danger:"}),(0,y.jsx)("div",{className:"text-center",children:j})]}),(0,y.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Discard"}),(0,y.jsx)("button",{type:"submit","data-bs-dismiss":"modal",className:"btn btn-primary",children:"Delete"})]})]})})})})]})},S=function(){var e,a,s,c,g,f,N,S=(0,m.s0)(),L=(0,d.useContext)(p.Z),R=L.auth,q=L.setAuth,F=(0,d.useState)(1),P=(0,i.Z)(F,2),U=P[0],G=P[1],A=(0,d.useState)(1),K=(0,i.Z)(A,2),D=K[0],I=K[1],M=(0,d.useState)(""),B=(0,i.Z)(M,2),z=B[0],T=B[1],E=(0,d.useState)(!1),Y=(0,i.Z)(E,2),V=Y[0],H=Y[1],O=(0,h.ek)("/api/get_CurrencyType"),X=O.data,$=O.isLoading,W=(0,h.ek)("/api/profile/get_all_chargings"),Q=W.data,J=W.isLoading,ee=(0,h.ek)("/api/profile/get_all_payments"),ae=ee.data,se=ee.isLoading,le=function(){var e=(0,n.Z)((0,l.Z)().mark((function e(a){var s,n,i,o,r,d,c;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return H(!0),(s=new FormData).append("currency_id",a),e.prev=3,e.next=6,u.Z.post("/api/profile/change_Currency",s,{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(R.atoken)},withCredentials:!0});case 6:n=e.sent,console.log(n.data),H(!1),q((0,t.Z)((0,t.Z)({},R),{},{acurrency:+a,acurrency_symb:n.data.mohamad_smbol,abalance:n.data.money_in_wallet})),console.log(R),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),H(!1),null!==e.t0&&void 0!==e.t0&&e.t0.message?0===(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i?void 0:i.status)?(T(e.t0.message),console.log(z)):400===(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o?void 0:o.status)?(3===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(c=d.data)||void 0===c?void 0:c.status)&&(q((0,t.Z)((0,t.Z)({},R),{},{ablocked:0})),S("/blocked")),T(e.t0.response.data.message),console.log(z)):401===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)?(T(e.t0.response.data.message),console.log(z)):(T("Edit Profile Failed"),console.log(e.t0)):(T("No Server Response"),console.log("No Server Response"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}(),te=function(){return(0,y.jsx)("div",{className:" col-1  ms-auto my-auto mb-sm-auto mt-sm-5 edit-icon",children:(0,y.jsxs)("svg",{"aria-hidden":"true",fill:"white",focusable:"false",height:"50",viewBox:"0 0 20 20",width:"50",className:"css-wkr7b6",id:"cds-4","data-bs-toggle":"modal","data-bs-target":"#editpofilemodal",children:[(0,y.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.47 2.888L4.544 13.732l-1.51 3.233 3.214-1.501L17.175 4.608a1.34 1.34 0 00.012-1.732 1.34 1.34 0 00-1.718.012zm2.397-.746a2.34 2.34 0 00-3.065 0l-.012.011L3.715 13.148l-2.75 5.887 5.866-2.739L17.904 5.293l.011-.013a2.34 2.34 0 000-3.09l-.048-.048z",fill:"white","data-bs-toggle":"modal","data-bs-target":"#editpofilemodal"}),(0,y.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.257 6.194l-2.44-2.43.706-.708 2.44 2.43-.706.708zM6.216 16.233l-2.44-2.44.708-.707 2.44 2.44-.708.707z",fill:"white","data-bs-toggle":"modal","data-bs-target":"#editpofilemodal"})]})})};return(0,y.jsxs)(y.Fragment,{children:[(V||$||J||se)&&(0,y.jsx)(x.Z,{}),(0,y.jsxs)(b.E.div,{className:"container-fluid profile m-0 p-0",initial:{opacity:0},animate:{opacity:1,transition:{duration:2}},exit:{opacity:0,transition:{duration:.3}},children:[(0,y.jsx)(w,{}),(0,y.jsx)(Z,{}),(0,y.jsx)(k,{}),(0,y.jsx)(C,{}),(0,y.jsx)(_,{}),(0,y.jsx)(v.default,{}),(0,y.jsxs)("div",{className:"cover-box ",children:[(0,y.jsx)("img",{className:"cover",src:j,alt:".."}),(0,y.jsx)("div",{className:"cover-over-lay"})]}),(0,y.jsxs)("div",{className:"container ",children:[(0,y.jsxs)("div",{className:"row  header-info g-0",children:[(0,y.jsx)("div",{className:"img-box mt-5 mt-sm-0",children:(0,y.jsx)("img",{src:R.aimg,alt:".."})}),(0,y.jsx)(te,{}),(0,y.jsx)("h1",{className:"profile-name",children:R.aname})]}),(0,y.jsxs)("div",{className:"row scroll-box ms-sm-auto mx-auto mx-sm-0",children:[(0,y.jsxs)("div",{className:"col-md-8 personal-info-profile mx-auto",children:[(0,y.jsx)("div",{className:"personal-header",children:"Personal Information"}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{className:"personal-content row",children:[(0,y.jsxs)("div",{className:"col-12 col-lg-6 mb-2 ",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.FU$}),(0,y.jsxs)("p",{children:[(0,y.jsx)("span",{children:"Email :"})," ",R.aemail]})]}),(0,y.jsxs)("div",{className:"col-12 col-lg-6 mb-2",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.U9S}),(0,y.jsxs)("p",{children:[(0,y.jsx)("span",{children:"Level :"})," ",R.alevel]})]}),(0,y.jsxs)("div",{className:"col-12 col-lg-6 mb-2",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.j1w}),(0,y.jsxs)("p",{children:[(0,y.jsx)("span",{children:"Phone :"})," ",R.aphone]})]}),(0,y.jsxs)("div",{className:"col-12 col-lg-6 mb-2",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.KCX}),(0,y.jsxs)("p",{children:[" ",(0,y.jsx)("span",{children:"App Role : "}),R.arolename]})]})]})]}),(0,y.jsxs)("div",{className:"col-md-8 financial-info-profile mx-auto",children:[(0,y.jsx)("div",{className:"personal-header",children:"blance and e-wallet Info "}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{className:"personal-content ms-auto text-center row",children:[(0,y.jsxs)("div",{className:"col-12 mb-2",children:[(0,y.jsx)(r.G,{className:"icon fs-1",icon:o.Quw}),(0,y.jsxs)("p",{className:"fs-2",children:[" ",(0,y.jsx)("span",{children:"E-wallet Balance : "}),null===R||void 0===R||null===(e=R.abalance)||void 0===e?void 0:e.toFixed(2)," ",null===R||void 0===R?void 0:R.acurrency_symb]}),(0,y.jsx)("select",{className:"filed carrncy-select ms-4",onChange:function(e){le(e.target.value)},children:null===X||void 0===X||null===(a=X.data)||void 0===a?void 0:a.map((function(e){return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)("option",{selected:R.acurrency===e.id&&!0,value:e.id,children:e.currency_name})})}))})]}),(0,y.jsx)("div",{className:"col-12 mb-2",children:(0,y.jsx)("div",{className:"kind-feild",children:(0,y.jsxs)("div",{className:"btn-group btn-group-lg",role:"group","aria-label":"Basic example",children:[(0,y.jsxs)("button",{type:"button",className:"btn btn-outline-primary ","data-bs-toggle":"modal","data-bs-target":"#chargewalletmodal",onClick:function(){},children:[(0,y.jsx)(r.G,{icon:o.BDt,className:"me-2"}),"Charge"]}),(0,y.jsxs)("button",{type:"button",className:"btn  btn-outline-primary ","data-bs-toggle":"modal","data-bs-target":"#pullfromwalletmodal",onClick:function(){},children:[(0,y.jsx)(r.G,{icon:o.cf$,className:"me-2"}),"Pull"]})]})})})]})]}),(0,y.jsxs)("div",{className:"col-md-8 property-info-profile mx-auto",children:[(0,y.jsx)("div",{className:"property-header",children:"Financial Information"}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{className:"card text-center",children:[(0,y.jsx)("div",{className:"card-header",children:(0,y.jsxs)("ul",{className:"nav nav-pills card-header-pills",children:[(0,y.jsx)("li",{className:"nav-item",children:(0,y.jsx)("i",{className:"nav-link ".concat(0===D&&"active"," "),onClick:function(){I(0)},children:"charging list"})}),(0,y.jsx)("li",{className:"nav-item",children:(0,y.jsx)("i",{className:"nav-link ".concat(1===D&&"active"," "),onClick:function(){I(1)},children:"Payments list"})})]})}),(0,y.jsx)("div",{className:"card-body ",children:0===D?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("table",{className:"table table-dark table-striped",children:[" ",(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"col",children:"#"}),(0,y.jsx)("th",{scope:"col",children:"Charge type"}),(0,y.jsx)("th",{scope:"col",children:"charge value"}),(0,y.jsx)("th",{scope:"col",children:"charge date"})]})}),(0,y.jsx)("tbody",{children:null===Q||void 0===Q||null===(s=Q.chargings)||void 0===s?void 0:s.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:e.id}),(0,y.jsx)("td",{children:e.charging_type}),(0,y.jsxs)("td",{children:[e.charging_value," ",R.acurrency_symb]}),(0,y.jsx)("td",{children:e.created_at})]})}))})]})}):1===D?(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("table",{className:"table table-dark table-striped",children:[" ",(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"col",children:"#"}),(0,y.jsx)("th",{scope:"col",children:"payment value"}),(0,y.jsx)("th",{scope:"col",children:"to"}),(0,y.jsx)("th",{scope:"col",children:"payment date"})]})}),(0,y.jsx)("tbody",{children:null===ae||void 0===ae||null===(c=ae.payments)||void 0===c?void 0:c.map((function(e){return(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{scope:"row",children:e.id}),(0,y.jsxs)("td",{children:[e.payment," ",R.acurrency_symb]}),(0,y.jsx)("td",{children:e.on}),(0,y.jsx)("td",{children:e.created_at})]})}))})]})}):(0,y.jsx)(y.Fragment,{})})]})]}),(0,y.jsxs)("div",{className:"col-md-8 property-info-profile mx-auto",children:[(0,y.jsx)("div",{className:"property-header",children:"Facilities Information"}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{className:"card text-center",children:[(0,y.jsx)("div",{className:"card-header",children:(0,y.jsxs)("ul",{className:"nav nav-pills card-header-pills",children:[(0,y.jsx)("li",{className:"nav-item",children:(0,y.jsx)("i",{className:"nav-link ".concat(0===U&&"active"," "),onClick:function(){G(0)},children:"Resturants"})}),(0,y.jsx)("li",{className:"nav-item",children:(0,y.jsx)("i",{className:"nav-link ".concat(1===U&&"active"," "),onClick:function(){G(1)},children:"Hotels"})}),(0,y.jsx)("li",{className:"nav-item",children:(0,y.jsx)("i",{className:"nav-link ".concat(2===U&&"active"," "),onClick:function(){G(2)},children:"AirLines"})})]})}),(0,y.jsx)("div",{className:"card-body ",children:0===U?(0,y.jsx)(y.Fragment,{children:null===R||void 0===R||null===(g=R.arestaurant_role)||void 0===g?void 0:g.map((function(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:"card-title",children:e.restaurant_name}),(0,y.jsx)("p",{className:"card-text",children:(0,y.jsxs)("p",{children:["User Role :",e.role_facilities_name]})})]})}))}):1===U?(0,y.jsx)(y.Fragment,{children:null===R||void 0===R||null===(f=R.ahotel_role)||void 0===f?void 0:f.map((function(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:"card-title",children:e.hotel_name}),(0,y.jsx)("p",{className:"card-text",children:(0,y.jsxs)("p",{children:["User Role :",e.role_facilities_name]})})]})}))}):2===U?(0,y.jsx)(y.Fragment,{children:null===R||void 0===R||null===(N=R.aairplane_role)||void 0===N?void 0:N.map((function(e){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{className:"card-title",children:e.airplane_name}),(0,y.jsx)("p",{className:"card-text",children:(0,y.jsxs)("p",{children:["User Role :",e.role_facilities_name]})})]})}))}):(0,y.jsx)(y.Fragment,{children:"No"})})]})]}),(0,y.jsxs)("div",{className:"col-md-8 settings-info-profile mx-auto",children:[(0,y.jsx)("div",{className:"personal-header",children:"Acount Settings"}),(0,y.jsx)("hr",{}),(0,y.jsxs)("div",{className:" settings row ",children:[(0,y.jsxs)("div",{className:"col-12 col-md-7 mb-1 setting-option","data-bs-toggle":"modal","data-bs-target":"#resetpasswordmodal",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.nN3}),(0,y.jsx)("p",{children:"Reset Your Password"})]}),(0,y.jsxs)("div",{className:"col-12 col-md-7 mb-1 setting-option","data-bs-toggle":"modal","data-bs-target":"#deleteacountmodal",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.xf2}),(0,y.jsx)("p",{children:"Delete Your Acount"})]}),(0,y.jsxs)("div",{className:"col-12  col-md-7 mb-1 setting-option","data-bs-toggle":"modal","data-bs-target":"#logout",children:[(0,y.jsx)(r.G,{className:"icon",icon:o.mXR}),(0,y.jsx)("p",{children:"Log Out"})]})]})]})]})]})]})]})}}}]);