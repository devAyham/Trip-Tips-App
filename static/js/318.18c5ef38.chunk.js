"use strict";(self.webpackChunktrip_tips_project=self.webpackChunktrip_tips_project||[]).push([[318],{3661:function(e,l,s){s.r(l),s.d(l,{default:function(){return A}});var i=s(1413),a=s(4165),n=s(5861),o=s(885),d=s(935),r=s(3757),t=s(9466),c=s(7890),u=s(5627),v=s(3124),m=s(7313),p=s(6831),h=s(1969),x=s(4113),g=s(4243),f=s(5879),j=s(6058),N=s(4638),y=s(4704),_=s(5754);var b=s.p+"static/media/auth.890cdc812072a4f10112371f7d9975ee.svg",w=s.p+"static/media/66.3f80ad8766674a212e08.png",Z=s(7979),k=s(7502),S=s(6417),A=function(){var e=(0,c.s0)(),l=(0,m.useState)(""),s=(0,o.Z)(l,2),A=s[0],C=s[1],R=(0,m.useState)(!1),U=(0,o.Z)(R,2),q=U[0],F=U[1],G=(0,m.useContext)(v.Z),P=G.auth,T=G.setAuth,Y=(0,m.useState)(!1),I=(0,o.Z)(Y,2),O=I[0],W=I[1],E=(0,m.useState)(!1),H=(0,o.Z)(E,2),K=H[0],L=H[1],M=(0,u.cI)(),V=M.register,D=M.handleSubmit,$=M.formState.errors,J=M.trigger,B=M.getValues,X=function(){var l=(0,n.Z)((0,a.Z)().mark((function l(s){var i,n,o,d,t,c,u,v,m,p,h,x,g,j,N,y,_,b,w,Z,S,R,U,q,F,G,P,Y,I,O,W,E,H,K,M,V,D,$,J,B,X,z,Q,ee,le,se,ie,ae,ne,oe,de,re,te,ce,ue,ve,me,pe,he,xe,ge,fe,je,Ne,ye,_e,be,we,Ze,ke,Se,Ae;return(0,a.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return L(!0),l.next=3,(0,f.Z)(s);case 3:if(n=l.sent,!(o=null===n||void 0===n||null===(i=n.additionalUserInfo)||void 0===i?void 0:i.profile)){l.next=50;break}return t=o.name,c=o.email,u=o.picture,null!==(d=u.data)&&void 0!==d&&d.url&&(u=u.data.url),l.prev=10,l.next=13,r.Z.post("/api/registerSocialite",JSON.stringify({name:t,email:c,img:u}),{});case 13:ne=l.sent,console.log(ne.data),oe=null===ne||void 0===ne||null===(v=ne.data)||void 0===v?void 0:v.token,de=null===ne||void 0===ne||null===(m=ne.data)||void 0===m||null===(p=m.user)||void 0===p?void 0:p.id,re=null===ne||void 0===ne||null===(h=ne.data)||void 0===h||null===(x=h.user)||void 0===x?void 0:x.name,te=null===ne||void 0===ne||null===(g=ne.data)||void 0===g||null===(j=g.user)||void 0===j?void 0:j.email,ce=null===ne||void 0===ne||null===(N=ne.data)||void 0===N||null===(y=N.user)||void 0===y?void 0:y.phone,ue=null===ne||void 0===ne||null===(_=ne.data)||void 0===_||null===(b=_.user)||void 0===b?void 0:b.level,ve=null===ne||void 0===ne||null===(w=ne.data)||void 0===w||null===(Z=w.user)||void 0===Z?void 0:Z.img,me=null===ne||void 0===ne||null===(S=ne.data)||void 0===S||null===(R=S.user)||void 0===R?void 0:R.currency_type_id,pe=null===ne||void 0===ne||null===(U=ne.data)||void 0===U||null===(q=U.user)||void 0===q||null===(F=q.currency)||void 0===F?void 0:F.currency_type_name,he=null===ne||void 0===ne||null===(G=ne.data)||void 0===G||null===(P=G.user)||void 0===P||null===(Y=P.currency)||void 0===Y?void 0:Y.currency_symbol,xe=null===ne||void 0===ne||null===(I=ne.data)||void 0===I||null===(O=I.user)||void 0===O?void 0:O.money_in_wallet,ge=null===ne||void 0===ne||null===(W=ne.data)||void 0===W||null===(E=W.user)||void 0===E?void 0:E.is_verifaied,fe=null===ne||void 0===ne||null===(H=ne.data)||void 0===H||null===(K=H.user)||void 0===K?void 0:K.is_registered,je=null===ne||void 0===ne||null===(M=ne.data)||void 0===M||null===(V=M.user)||void 0===V?void 0:V.is_active,Ne=null===ne||void 0===ne||null===(D=ne.data)||void 0===D||null===($=D.user)||void 0===$?void 0:$.have_facilities,ye=null===ne||void 0===ne||null===(J=ne.data)||void 0===J||null===(B=J.user)||void 0===B?void 0:B.role_person_id,_e=null===ne||void 0===ne||null===(X=ne.data)||void 0===X||null===(z=X.user)||void 0===z?void 0:z.role_peson_name,be=null===ne||void 0===ne||null===(Q=ne.data)||void 0===Q||null===(ee=Q.user)||void 0===ee?void 0:ee.restaurant_role,we=null===ne||void 0===ne||null===(le=ne.data)||void 0===le||null===(se=le.user)||void 0===se?void 0:se.hotel_role,Ze=null===ne||void 0===ne||null===(ie=ne.data)||void 0===ie||null===(ae=ie.user)||void 0===ae?void 0:ae.airplane_role,T({aid:de,aname:re,aemail:te,arole:ye,acurrency:me,acurrency_type:pe,acurrency_symb:he,abalance:xe,arolename:_e,atoken:oe,aphone:ce,aimg:ve,alevel:ue,ais_verifay:ge,ablocked:je,ais_registerd:fe,ahave_places:Ne,arestaurant_role:be,ahotel_role:we,aairplane_role:Ze}),console.log(de,re,te,ye,_e,me,oe,ce,ve,ue,ge,je,fe,Ne,be,we,Ze),L(!1),(0,k.I1)("token",oe),0===fe&&C("Hi plase Set A new Password to your acount so you can log in normaly in future "),1===fe&&e("./home"),l.next=48;break;case 43:l.prev=43,l.t0=l.catch(10),console.log(l.t0),L(!1),null!==l.t0&&void 0!==l.t0&&l.t0.message?0===(null===l.t0||void 0===l.t0||null===(ke=l.t0.response)||void 0===ke?void 0:ke.status)?(C(l.t0.message),console.log(A)):400===(null===l.t0||void 0===l.t0||null===(Se=l.t0.response)||void 0===Se?void 0:Se.status)||401===(null===l.t0||void 0===l.t0||null===(Ae=l.t0.response)||void 0===Ae?void 0:Ae.status)?(C(l.t0.response.data.message),console.log(A)):(C("Register Failed"),console.log(A)):(C("No Server Response"),console.log("No Server Response"));case 48:l.next=52;break;case 50:L(!1),console.log(n);case 52:case"end":return l.stop()}}),l,null,[[10,43]])})));return function(e){return l.apply(this,arguments)}}(),z=function(){var l=(0,n.Z)((0,a.Z)().mark((function l(s){var i,n,o,d,r,t,c,u,v,m,p,h,x,g,f,j,N,y,_,b,w,Z,S,R,U,q,G,P,Y,I,O,W,E,H,K,M,V,D,$,J,B,X,z,Q,ee,le,se,ie,ae,ne,oe,de,re,te,ce,ue,ve,me,pe,he,xe,ge,fe,je,Ne,ye,_e,be,we;return(0,a.Z)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return i=s.name,n=s.email,o=s.phone,d=s.password,r=s.c_password,L(!0),(t=new FormData).append("name",i),t.append("email",n),t.append("password",d),t.append("c_password",r),t.append("phone",o),l.prev=8,l.next=11,fetch("https://triptipsa.000webhostapp.com/api/register",{body:t,method:"POST"});case 11:le=l.sent,console.log(le.data),L(!1),se=null===le||void 0===le||null===(c=le.data)||void 0===c?void 0:c.token,ie=null===le||void 0===le||null===(u=le.data)||void 0===u||null===(v=u.user)||void 0===v?void 0:v.id,ae=null===le||void 0===le||null===(m=le.data)||void 0===m||null===(p=m.user)||void 0===p?void 0:p.name,ne=null===le||void 0===le||null===(h=le.data)||void 0===h||null===(x=h.user)||void 0===x?void 0:x.email,oe=null===le||void 0===le||null===(g=le.data)||void 0===g||null===(f=g.user)||void 0===f?void 0:f.phone,de=null===le||void 0===le||null===(j=le.data)||void 0===j||null===(N=j.user)||void 0===N?void 0:N.level,re=null===le||void 0===le||null===(y=le.data)||void 0===y||null===(_=y.user)||void 0===_?void 0:_.img,te=null===le||void 0===le||null===(b=le.data)||void 0===b||null===(w=b.user)||void 0===w?void 0:w.currency_type_id,ce=null===le||void 0===le||null===(Z=le.data)||void 0===Z||null===(S=Z.user)||void 0===S?void 0:S.currency_type_name,ue=null===le||void 0===le||null===(R=le.data)||void 0===R||null===(U=R.user)||void 0===U?void 0:U.currency_symbol,ve=null===le||void 0===le||null===(q=le.data)||void 0===q||null===(G=q.user)||void 0===G?void 0:G.money_in_wallet,me=null===le||void 0===le||null===(P=le.data)||void 0===P||null===(Y=P.user)||void 0===Y?void 0:Y.is_verifaied,pe=null===le||void 0===le||null===(I=le.data)||void 0===I||null===(O=I.user)||void 0===O?void 0:O.is_registered,he=null===le||void 0===le||null===(W=le.data)||void 0===W||null===(E=W.user)||void 0===E?void 0:E.is_active,xe=null===le||void 0===le||null===(H=le.data)||void 0===H||null===(K=H.user)||void 0===K?void 0:K.have_facilities,ge=null===le||void 0===le||null===(M=le.data)||void 0===M||null===(V=M.user)||void 0===V?void 0:V.role_person_id,fe=null===le||void 0===le||null===(D=le.data)||void 0===D||null===($=D.user)||void 0===$?void 0:$.role_peson_name,je=null===le||void 0===le||null===(J=le.data)||void 0===J||null===(B=J.user)||void 0===B?void 0:B.restaurant_role,Ne=null===le||void 0===le||null===(X=le.data)||void 0===X||null===(z=X.user)||void 0===z?void 0:z.hotel_role,ye=null===le||void 0===le||null===(Q=le.data)||void 0===Q||null===(ee=Q.user)||void 0===ee?void 0:ee.airplane_role,T({aid:ie,aname:ae,aemail:ne,arole:ge,acurrency:te,acurrency_type:ce,acurrency_symb:ue,abalance:ve,arolename:fe,atoken:se,aphone:oe,aimg:re,alevel:de,ais_verifay:me,ablocked:he,ais_registerd:pe,ahave_places:xe,arestaurant_role:je,ahotel_role:Ne,aairplane_role:ye}),1===me&&((0,k.I1)("token",se),e("/home")),F(!0),l.next=43;break;case 39:l.prev=39,l.t0=l.catch(8),L(!1),null!==l.t0&&void 0!==l.t0&&l.t0.message?0===(null===l.t0||void 0===l.t0||null===(_e=l.t0.response)||void 0===_e?void 0:_e.status)?(C(l.t0.message),console.log(A)):400===(null===l.t0||void 0===l.t0||null===(be=l.t0.response)||void 0===be?void 0:be.status)||401===(null===l.t0||void 0===l.t0||null===(we=l.t0.response)||void 0===we?void 0:we.status)?(C(l.t0.response.data.message),console.log(A)):(C("Register Failed"),console.log(l.t0)):(C("No Server Response"),console.log("No Server Response"));case 43:case"end":return l.stop()}}),l,null,[[8,39]])})));return function(e){return l.apply(this,arguments)}}(),Q=Object.keys($).length;return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(Z.E.div,{className:"sginin-container",initial:{width:0,opacity:0},animate:{width:"100%",opacity:1,transition:{duration:1}},exit:{opacity:0,width:0,transition:{duration:.3}},children:(0,S.jsxs)("div",{className:"row sign-up g-0",children:[(0,S.jsxs)("div",{className:"col-12 col-md-8 sign-up-fildes-box",children:[(0,S.jsx)("h1",{className:"col-12 text-center offset-sm-1 title",children:"Registrar"}),0===P.ais_registerd&&1===P.ais_verifay?(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:"row d-felx justify-content-center alighn-content-center",children:[(0,S.jsxs)("div",{className:"alert alert-success col-8 offset-sm-2",role:"alert",children:[(0,S.jsx)("h4",{className:"alert-heading ",children:"Thanks for using Social Acount With Trip Tips!"}),(0,S.jsxs)("p",{children:[" ",(0,S.jsx)("b",{children:"Congrats!"})," You successfully Sing up in Trip Tips with Your Socail Email ,",(0,S.jsx)("br",{})," So Plase Set A new Password to your acount so you can log in normaly in future"," "]}),(0,S.jsx)("hr",{}),(0,S.jsxs)("p",{className:"mb-0",children:[" ","So please click on the New Password icon."]})]}),(0,S.jsx)("button",{className:"verify-icon col-4 offset-sm-2",style:{cursor:"pointer"},type:"button","data-bs-toggle":"modal","data-bs-target":"#setnewpassword",children:"Set A New Password"}),(0,S.jsx)(j.Z,{redirect:"./home",url:"/api/addPasswordSocialite"}),(0,S.jsx)("img",{className:"col-7 mt-4 offset-1",src:_.Z,alt:"none"})]})}):(0,S.jsx)(S.Fragment,{children:q?(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:"row d-felx justify-content-center alighn-content-center",children:[(0,S.jsxs)("div",{className:"alert alert-success col-8 offset-sm-2",role:"alert",children:[(0,S.jsx)("h4",{className:"alert-heading ",children:"Well done!"}),(0,S.jsxs)("p",{children:[" ",(0,S.jsx)("b",{children:"Congrats!"})," You successfully Sing up with Trip Tips But due to security reasons, we need to verify the ownership of your account with a second step"," "]}),(0,S.jsx)("hr",{}),(0,S.jsxs)("p",{className:"mb-0",children:[" ","So please click on the verification icon."]})]}),(0,S.jsx)("button",{className:"verify-icon col-4 offset-sm-2",disabled:!O,type:"submit","data-bs-toggle":"".concat(1!==P.ais_verifay&&0===Q&&"modal"),"data-bs-target":"".concat(1!==P.ais_verifay&&0===Q&&"#verifyEmail"),children:"Verify Your Account"}),(0,S.jsx)(x.Z,{success:q,setSuccess:F}),(0,S.jsx)("img",{className:"col-7 mt-4 offset-1",src:b,alt:"none"})]})}):(0,S.jsx)(S.Fragment,{children:K?(0,S.jsx)(y.Z,{}):(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:"row  g-0",children:[(0,S.jsxs)("div",{className:"col-12 col-md-8 offset-sm-1  ",children:[(0,S.jsx)("h3",{className:"sub-title  text-center ",children:"We Will Need..."}),(0,S.jsxs)("form",{onSubmit:D(z),children:[(0,S.jsxs)("div",{className:"col-11 col-sm-8 offset-sm-1 ",children:[(0,S.jsxs)("div",{className:"input-group input-group-lg   mb-1 ms-sm-5 ",children:[(0,S.jsx)("span",{className:"input-group-text fs-3 filed filed-icon ",children:(0,S.jsx)(h.G,{icon:d.V3X})}),(0,S.jsx)("input",(0,i.Z)((0,i.Z)({type:"text",className:"form-control filed \n                                      ".concat($.name&&"invalid")},V("name",{required:"Name is Required",minLength:{value:3,message:"Minimum Required length is 3"},maxLength:{value:20,message:"Maximum allowed length is 20 "}})),{},{onKeyUp:function(){J("name")},placeholder:"Full Name"})),$.name&&(0,S.jsx)("small",{className:"text-danger",children:$.name.message})]}),(0,S.jsxs)("div",{className:"input-group input-group-lg   mb-1 ms-sm-5 ",children:[(0,S.jsx)("span",{className:"input-group-text fs-3 filed filed-icon",id:"basic-addon1",children:(0,S.jsx)(h.G,{icon:d.FU$})}),(0,S.jsx)("input",(0,i.Z)((0,i.Z)({type:"text",className:"form-control filed ".concat($.email&&"invalid")},V("email",{required:"Email is Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})),{},{onKeyUp:function(){J("email")},placeholder:"Mail Address"})),$.email&&(0,S.jsx)("small",{className:"text-danger ",children:$.email.message})]}),(0,S.jsxs)("div",{className:"input-group input-group-lg mb-1 ms-sm-5",children:[(0,S.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,S.jsx)(h.G,{icon:d.j1w})}),(0,S.jsx)("input",(0,i.Z)((0,i.Z)({type:"text",className:"form-control tel filed ".concat($.phone&&"invalid")},V("phone",{required:"Phone is Required",pattern:{value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{2})[-. )]*(\d{2})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,message:"Invalid phone no"}})),{},{onKeyUp:function(){J("phone")},placeholder:"Number"})),$.phone&&(0,S.jsx)("small",{className:"text-danger",children:$.phone.message})]}),(0,S.jsxs)("div",{className:"input-group input-group-lg  mb-1 ms-sm-5",children:[(0,S.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,S.jsx)(h.G,{icon:d.tAh})}),(0,S.jsx)("input",(0,i.Z)((0,i.Z)({type:"password",className:"form-control filed ".concat($.password&&"invalid")},V("password",{required:"password is Required",minLength:{value:6,message:"Minimum Required length is 6"},maxLength:{value:20,message:"Maximum allowed length is 20 "}})),{},{onKeyUp:function(){J("password")},placeholder:"Password"})),$.password&&(0,S.jsx)("small",{className:"text-danger",children:$.password.message})]}),(0,S.jsxs)("div",{className:"input-group input-group-lg  mb-1 ms-sm-5",children:[(0,S.jsx)("span",{className:"input-group-text fs-3  filed-icon",id:"basic-addon1",children:(0,S.jsx)(h.G,{icon:d.byT})}),(0,S.jsx)("input",(0,i.Z)((0,i.Z)({type:"password",className:"form-control filed ".concat($.c_password&&"invalid")},V("c_password",{required:"confirm password is Required",validate:{value:function(e){return e===B("password")||"Do Not matched"}}})),{},{onKeyUp:function(){J("c_password")},placeholder:"Confirm Password"})),$.c_password&&(0,S.jsx)("small",{className:"text-danger",children:$.c_password.message})]}),A&&(0,S.jsxs)("div",{className:"alert alert-danger d-flex align-items-center col-12 offset-2 server-errors ",role:"alert",children:[(0,S.jsx)(h.G,{icon:d.eHv,className:"bi flex-shrink-1 me-4 ",width:"24",height:"24",role:"img","aria-label":"Danger:"}),(0,S.jsx)("div",{className:"text-center",children:A})]}),(0,S.jsx)("div",{className:"ReCAPTCHA-div offset-sm-1 mt-1 ",children:(0,S.jsx)(p.Z,{notArobot:O,setnotArobot:W})})]}),(0,S.jsx)("div",{className:"div-icon",children:(0,S.jsx)("button",{className:"one-icon",disabled:!O,type:"submit",children:"Sign Up"})}),(0,S.jsx)("div",{className:"div-icon"})]})]}),(0,S.jsxs)("div",{className:"or-box-bottom-container d-md-none",children:[(0,S.jsxs)("div",{className:"col-12 offset-sm-1 or-box ",children:[(0,S.jsx)("div",{className:"line "}),(0,S.jsx)("div",{className:"or fs-3",children:"Or"}),(0,S.jsx)("div",{className:"line"})]}),(0,S.jsxs)("div",{className:"col-12 offset-sm-1",children:[(0,S.jsxs)("h3",{className:"sub-title",children:["Also, You Can Continue With .."," "]}),(0,S.jsxs)("div",{className:"div-soc-icon ",children:[(0,S.jsx)(t.rU,{className:"socail-icon ",to:"./",children:(0,S.jsx)(h.G,{icon:g.neY,onClick:function(){return X(N.O)}})}),(0,S.jsx)(t.rU,{className:"socail-icon ",to:"./",children:(0,S.jsx)(h.G,{icon:g.YG5,onClick:function(){return X(N.V)}})})]})]})]}),(0,S.jsx)("div",{className:"or-box-side-container col-3 d-none d-md-block",children:(0,S.jsxs)("div",{className:"row h-100 g-0",children:[(0,S.jsxs)("div",{className:"col-2 align-content-center or-box",children:[(0,S.jsx)("div",{className:"line "}),(0,S.jsx)("div",{className:"or fs-3",children:"Or"}),(0,S.jsx)("div",{className:"line"})]}),(0,S.jsxs)("div",{className:"col-10",children:[(0,S.jsxs)("h3",{className:"sub-title",children:["Also, You Can Continue With .."," "]}),(0,S.jsxs)("div",{className:"div-soc-icon ",children:[(0,S.jsx)(t.rU,{className:"socail-icon ",to:"./",children:(0,S.jsx)(h.G,{icon:g.neY,onClick:function(){return X(N.O)}})}),(0,S.jsx)(t.rU,{className:"socail-icon ",to:"./",children:(0,S.jsx)(h.G,{icon:g.YG5,onClick:function(){return X(N.V)}})})]})]})]})})]})})})})]}),(0,S.jsxs)("div",{className:"col-12  order-first order-md-last col-md-4  sign-up-img-box ",children:[(0,S.jsx)("div",{className:"img-box"}),(0,S.jsx)("div",{className:"myoverlay row g-0 justify-content-center  text-center",children:(0,S.jsxs)("div",{className:"text-boxx    ",children:[(0,S.jsx)("img",{className:"trip-logo col-12 ",src:w,alt:"Trip Tips"}),(0,S.jsx)("h1",{className:"title",children:"Hello Friend !"}),(0,S.jsxs)("p",{className:"description",children:["Enter Your Personal Detailes and ",(0,S.jsx)("br",{})," Start Your Journey With Us"]}),(0,S.jsx)("h3",{className:"dont  ",children:"Already Have Acount?"}),(0,S.jsxs)(t.rU,{className:"create-acount",to:"/logging/signin",children:["Log In"," "]})]})})]})]})})})}}}]);