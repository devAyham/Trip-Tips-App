"use strict";(self.webpackChunktrip_tips_project=self.webpackChunktrip_tips_project||[]).push([[776],{6776:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var s=a(4165),n=a(5861),o=a(885),l=a(7313),i=a(3124),r=a(7890),c=a(3757);var d=a.p+"static/media/logout.0e2b1020c06901dc907f457157bd4783.svg",u=a(344),m=a.n(u),b=a(7502),p=a(6417),h=function(){var e=(0,r.s0)(),t=(0,l.useContext)(i.Z),a=t.auth,u=t.setAuth,h=(0,l.useState)(!1),x=(0,o.Z)(h,2),v=(x[0],x[1]),f=(0,l.useState)(""),g=(0,o.Z)(f,2),j=g[0],N=g[1],k=function(){var t=(0,n.Z)((0,s.Z)().mark((function t(){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,c.Z.post("/api/logout",JSON.stringify(),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a.atoken)},withCredentials:!0});case 4:n=t.sent,console.log(n.data),v(!1),(0,b.bG)("token")&&1===n.data.status&&(new(m())("bfa9933c579f60b504ad",{cluster:"eu"}).unsubscribe("channel-notification.".concat(a.aid)),u({}),(0,b.Sz)("token")),e("/home"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),v(!1),null!==t.t0&&void 0!==t.t0&&t.t0.message?null!==t.t0&&void 0!==t.t0&&t.t0.message&&(N(t.t0.message),console.log(j)):(N("No Server Response"),console.log("No Server Response"));case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"modal fade logout-modal mt-4 mt-sm-0",id:"logout",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:(0,p.jsx)("div",{className:"modal-dialog",children:(0,p.jsxs)("div",{className:"modal-content",children:[(0,p.jsxs)("div",{className:"modal-header",children:[(0,p.jsx)("h3",{className:"modal-title mt-2",id:"exampleModalLabel",children:"Are You Sure ,You Want To Log Out ?"}),(0,p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,p.jsx)("div",{className:"modal-body",children:(0,p.jsx)("div",{className:"img-box",children:(0,p.jsx)("img",{src:d,alt:"Log out"})})}),(0,p.jsxs)("div",{className:"modal-footer",children:[(0,p.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Cancel"}),(0,p.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(){k()},children:"Log Out"})]})]})})})})}}}]);