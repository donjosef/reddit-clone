(this["webpackJsonpreddit-clone"]=this["webpackJsonpreddit-clone"]||[]).push([[0],{47:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),s=n(26),a=n.n(s),i=n(12),u=n.n(i),o=n(18),l=n(20),d=n(17),j=n(34);j.a.initializeApp({apiKey:"AIzaSyBydRiEoZE1fbjHXOEsq7MoIOn6IqXRsZ4",authDomain:"reddit-clone-cef6c.firebaseapp.com",projectId:"reddit-clone-cef6c",storageBucket:"reddit-clone-cef6c.appspot.com",messagingSenderId:"268435638413",appId:"1:268435638413:web:be2d494bf63b8ed16e7ac4"});var b=j.a,p=(n(47),n(3)),f=function(e){var t=e.user,n=e.children,c=Object(r.useState)(!1),s=Object(l.a)(c,2),a=s[0],i=s[1],j=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.auth.GoogleAuthProvider,e.next=3,b.auth().signInWithPopup(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.auth().signOut();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("nav",{className:"navbar navbar-dark bg-primary",children:[Object(p.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Reddit clone"}),!t&&Object(p.jsx)("button",{onClick:j,className:"btn btn-secondary my-2 my-sm-0",children:"Login with Google"}),t&&Object(p.jsxs)("section",{className:"menu",children:[Object(p.jsxs)("div",{className:"menu__user-details",children:[Object(p.jsx)("img",{src:t.image,referrerPolicy:"no-referrer",onMouseOver:function(){return i(!0)},onMouseLeave:function(){return i(!1)}}),a&&Object(p.jsxs)("div",{className:"menu__tooltip",children:[Object(p.jsx)("span",{className:"arrow"}),t.name]})]}),Object(p.jsx)("button",{onClick:f,className:"btn btn-secondary my-2 my-sm-0",children:"Logout"})]})]}),Object(p.jsx)("main",{className:"container mt-3",children:n})]})},O=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(d.b,{to:"/subreddits",children:"Subreddits"})})},h=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"text-muted mb-5",children:"Subreddits"}),Object(p.jsx)("ul",{className:"list-group",children:e.subreddits.map((function(e){return Object(p.jsx)(d.b,{className:"text-info",to:"/r/".concat(e.name),children:Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.name,Object(p.jsx)("span",{})]})},e.id)}))})]})},m=n(37),x=n(16),v=function(e){var t=e.onCreatePost,n=Object(r.useState)(!1),c=Object(l.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)({title:"",description:"",url:""}),u=Object(l.a)(i,2),o=u[0],d=u[1],j=function(e){return function(t){var n=t.target.value;"title"===e&&d(Object(x.a)(Object(x.a)({},o),{},{title:n})),"description"===e&&d(Object(x.a)(Object(x.a)({},o),{},{description:n})),"url"===e&&d(Object(x.a)(Object(x.a)({},o),{},{url:n}))}};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){return a(!s)},children:"Toggle form"}),s&&Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=o.title,r=o.description,c=o.url;n&&(r||c)&&(t(o),d({title:"",description:"",url:""}))},className:"mt-3",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"title",children:"Title"}),Object(p.jsx)("input",{id:"title",required:!0,type:"text",value:o.title,onChange:j("title"),className:"form-control"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"description",children:"Description"}),Object(p.jsx)("textarea",{id:"description",rows:"4",value:o.description,onChange:j("description"),className:"form-control"})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{htmlFor:"url",children:"URL"}),Object(p.jsx)("input",{id:"url",type:"url",value:o.url,onChange:j("url"),className:"form-control"})]}),Object(p.jsx)("button",{className:"btn btn-info",children:"Create Post"})]})]})},g=n(8),N=n(19),_=b.firestore(),S=(n(53),function(e){var t=e.indexOf("?");if(-1!==t){var n=e.substring(0,t);return new RegExp(/(png|jpg|jpeg|gif)$/).test(n)}return new RegExp(/(png|jpg|jpeg|gif)$/).test(e)}),y=function(e){var t=e.user,n=Object(r.useState)([]),c=Object(l.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)([]),d=Object(l.a)(i,2),j=d[0],f=d[1],O=Object(g.f)(),h=Object(N.c)((function(e){return e.subreddits.find((function(e){return e.name===O.name}))}));Object(r.useEffect)((function(){if(h){var e=_.collection("posts").where("subreddit_id","==",h.id).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),a(t)}));return function(){e()}}}),[h]),Object(r.useEffect)(Object(o.a)(u.a.mark((function e(){var t,n,r,c,a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s.length){e.next=23;break}t=[],n=Object(m.a)(s),e.prev=3,n.s();case 5:if((r=n.n()).done){e.next=14;break}return c=r.value,e.next=9,_.collection("users").doc(c.user_id).get();case 9:a=e.sent,i=a.get("name"),t.push(i);case 12:e.next=5;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),n.e(e.t0);case 19:return e.prev=19,n.f(),e.finish(19);case 22:f(t);case 23:case"end":return e.stop()}}),e,null,[[3,16,19,22]])}))),[s]);var y=function(){var e=Object(o.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={title:n.title,description:n.description,url:n.url,user_id:t.id,subreddit_id:h.id,created_at:b.firestore.FieldValue.serverTimestamp(),updated_at:b.firestore.FieldValue.serverTimestamp()},e.next=3,_.collection("posts").add(r);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"text-muted mb-5",children:O.name.toUpperCase()}),t?Object(p.jsx)(v,{onCreatePost:y}):Object(p.jsx)("span",{className:"text-muted",children:"Please log in to create a post"}),Object(p.jsx)("section",{className:"mt-5",children:s.map((function(e,t){return Object(p.jsx)("div",{className:"card mb-3",children:Object(p.jsxs)("div",{className:"card__flex g-0",children:[Object(p.jsx)("div",{className:"card__col-left",children:"^"}),Object(p.jsx)("div",{className:"card__col-right",children:Object(p.jsxs)("div",{className:"card-body pt-1",children:[Object(p.jsxs)("span",{className:"card__user",children:["Posted by ",j[t]]}),Object(p.jsx)("span",{className:"card__date",children:e.created_at.toDate().toLocaleString()}),Object(p.jsx)("h5",{className:"card-title mt-2",children:e.title}),Object(p.jsx)("p",{className:"card-text",children:e.description}),e.url&&S(e.url)&&Object(p.jsx)("img",{src:e.url}),e.url&&!S(e.url)&&Object(p.jsx)("a",{href:e.url,target:"_blank",children:e.url})]})})]})},e.id)}))})]})},w=function(e){return{type:"AUTH_SUCCESS",user:e}},E=[],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SUBREDDITS":return t.subreddits;default:return e}};n(54),n(55);var C=function(){var e=Object(N.c)((function(e){return e.auth.user})),t=Object(N.c)((function(e){return e.subreddits})),n=Object(N.b)();return Object(r.useEffect)((function(){b.auth().onAuthStateChanged(function(){var e=Object(o.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return r={id:t.uid,name:t.displayName,image:t.photoURL,created_at:b.firestore.FieldValue.serverTimestamp()},e.next=4,_.collection("users").doc(r.id).set(r);case 4:n(w(r)),e.next=8;break;case 7:n({type:"LOGOUT"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(r.useEffect)((function(){var e=_.collection("subreddits").onSnapshot((function(e){console.log("inside event snapshot, invoked!");var t=[];e.forEach((function(e){t.push(e.data())})),n(function(e){return{type:"SET_SUBREDDITS",subreddits:e}}(t))}));return function(){e()}}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{user:e,children:Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{exact:!0,path:"/",children:Object(p.jsx)(O,{})}),Object(p.jsx)(g.a,{path:"/subreddits",render:function(){return Object(p.jsx)(h,{subreddits:t})}}),Object(p.jsx)(g.a,{path:"/r/:name",children:Object(p.jsx)(y,{user:e})})]})})})},T=n(22),U=n(39),I={user:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_SUCCESS":return{user:t.user};case"LOGOUT":return{user:null};default:return e}},R=(n(56),Object(T.c)({auth:D,subreddits:k})),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,P=Object(T.e)(R,L(Object(T.a)(U.a)));a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N.a,{store:P,children:Object(p.jsx)(d.a,{children:Object(p.jsx)(C,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.924526a2.chunk.js.map