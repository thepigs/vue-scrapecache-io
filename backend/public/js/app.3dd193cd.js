(function(t){function e(e){for(var r,c,i=e[0],u=e[1],s=e[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"396d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,a=n("2b0e"),o=(n("396d"),n("99af"),n("d3b7"),n("ac1f"),n("1276"),n("5530")),c=(n("96cf"),n("1da1")),i=n("dba1"),u=n("bc3a"),s=n.n(u),l="".concat("http://localhost:4000","/accounts"),d=new i["a"](null),f={login:p,apiAuthenticate:h,logout:b,getAll:g,getById:_,update:k,delete:x,account:d.asObservable(),get accountValue(){return d.value}};function p(){return v.apply(this,arguments)}function v(){return v=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise(FB.login);case 2:if(e=t.sent,n=e.authResponse,n){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,h(n.accessToken);case 8:r=nt.history.current.query["returnUrl"]||"/",nt.push(r);case 10:case"end":return t.stop()}}),t)}))),v.apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.post("".concat(l,"/authenticate"),{accessToken:e});case 2:return n=t.sent,r=n.data,d.next(r),O(),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}function b(){FB.api("/me/permissions","delete",null,(function(){return FB.logout()})),C(),d.next(null),nt.push("/login")}function g(){return s.a.get(l).then((function(t){return t.data}))}function _(t){return s.a.get("".concat(l,"/").concat(t)).then((function(t){return t.data}))}function k(t,e){return y.apply(this,arguments)}function y(){return y=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.put("".concat(l,"/").concat(e),n);case 2:return a=t.sent,c=a.data,c.id===(null===(r=d.value)||void 0===r?void 0:r.id)&&(c=Object(o["a"])(Object(o["a"])({},d.value),c),d.next(c)),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)}))),y.apply(this,arguments)}function x(t){return w.apply(this,arguments)}function w(){return w=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.a.delete("".concat(l,"/").concat(e));case 2:e===(null===(n=d.value)||void 0===n?void 0:n.id)&&b();case 3:case"end":return t.stop()}}),t)}))),w.apply(this,arguments)}function O(){var t=JSON.parse(atob(d.value.token.split(".")[1])),e=new Date(1e3*t.exp),n=e.getTime()-Date.now()-6e4,a=FB.getAuthResponse(),o=a.accessToken;r=setTimeout((function(){return h(o)}),n)}function C(){clearTimeout(r)}function j(t,e,n){var r=f.accountValue;if(!r)return n({path:"/login",query:{returnUrl:t.fullPath}});n()}n("caad");function I(){s.a.interceptors.response.use(null,(function(t){var e,n=t.response;if(n){[401,403].includes(n.status)&&f.accountValue&&f.logout();var r=(null===(e=n.data)||void 0===e?void 0:e.message)||n.statusText;console.error("ERROR:",r)}else console.error(t)}))}n("4de4"),n("7db0"),n("4160"),n("d81d"),n("b0c0"),n("8a79"),n("466d");var S=n("2909"),E="vue-facebook-login-accounts",T=JSON.parse(localStorage.getItem(E))||[];function A(){var t=["get","post","put","delete"];t.forEach((function(t){s.a["original".concat(t)]=s.a[t],s.a[t]=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return new Promise((function(n,a){return c();function c(){switch(!0){case e.endsWith("/accounts/authenticate")&&"post"===t:return i();case e.endsWith("/accounts")&&"get"===t:return u();case e.match(/\/accounts\/\d+$/)&&"get"===t:return l();case e.match(/\/accounts\/\d+$/)&&"put"===t:return d();case e.match(/\/accounts\/\d+$/)&&"delete"===t:return p();default:return s.a["original".concat(t)](e,g()).then((function(t){return n(t)})).catch((function(t){return a(t)}))}}function i(){var t=g(),e=t.accessToken;s.a.get("https://graph.facebook.com/v8.0/me?access_token=".concat(e)).then((function(t){var e=t.data;if(e.error)return h(e.error.message);var n=T.find((function(t){return t.facebookId===e.id}));return n||(n={id:_(),facebookId:e.id,name:e.name,extraInfo:"This is some extra info about ".concat(e.name," that is saved in the API")},T.push(n),localStorage.setItem(E,JSON.stringify(T))),v(Object(o["a"])(Object(o["a"])({},n),{},{token:k(n)}))}))}function u(){return m()?v(T):h()}function l(){if(!m())return h();var t=T.find((function(t){return t.id===b()}));return v(t)}function d(){if(!m())return h();var t=g(),e=T.find((function(t){return t.id===b()}));return Object.assign(e,t),localStorage.setItem(E,JSON.stringify(T)),v(e)}function p(){return m()?(T=T.filter((function(t){return t.id!==b()})),localStorage.setItem(E,JSON.stringify(T)),v()):h()}function v(t){setTimeout((function(){return n({status:200,data:t})}),500)}function h(){setTimeout((function(){var t={status:401,data:{message:"Unauthorized"}};a(t);var e=s.a.interceptors.response.handlers[0].rejected;e({response:t})}),500)}function m(){return f.accountValue}function b(){var t=e.split("/");return parseInt(t[t.length-1])}function g(){if(["post","put"].includes(t))return r[0]}function _(){return T.length?Math.max.apply(Math,Object(S["a"])(T.map((function(t){return t.id}))))+1:1}function k(t){var e={exp:Math.round(new Date(Date.now()+9e5).getTime()/1e3),id:t.id};return"fake-jwt-token.".concat(btoa(JSON.stringify(e)))}}))}}))}var P="314930319788683";function R(){return new Promise((function(t){window.fbAsyncInit=function(){FB.init({appId:P,cookie:!0,xfbml:!0,version:"v8.0"}),FB.getLoginStatus((function(e){var n=e.authResponse;n?f.apiAuthenticate(n.accessToken).then(t):t()}))},function(t,e,n){var r,a=t.getElementsByTagName(e)[0];t.getElementById(n)||(r=t.createElement(e),r.id=n,r.src="https://connect.facebook.net/en_US/sdk.js",a.parentNode.insertBefore(r,a))}(document,"script","facebook-jssdk")}))}n("2ca0");function $(){s.a.interceptors.request.use((function(t){var e=f.accountValue,n=null===e||void 0===e?void 0:e.token,r=t.url.startsWith("http://localhost:4000");return n&&r&&(t.headers.common.Authorization="Bearer ".concat(e.token)),t}))}var B=n("8c4f"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("You're logged in with Vue.js & Facebook!!")]),n("p",[t._v("All accounts from secure api end point:")]),n("table",{staticClass:"table table-striped"},[t._m(0),n("tbody",[t._l(t.accounts,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.facebookId))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.extraInfo))]),n("td",{staticClass:"text-right",staticStyle:{"white-space":"nowrap"}},[n("router-link",{staticClass:"btn btn-sm btn-primary mr-1",attrs:{to:"/edit/"+e.id}},[t._v("Edit")]),n("button",{staticClass:"btn btn-sm btn-danger btn-delete-account",attrs:{disabled:e.isDeleting},on:{click:function(n){return t.deleteAccount(e.id)}}},[e.isDeleting?n("span",{staticClass:"spinner-border spinner-border-sm"}):n("span",[t._v("Delete")])])],1)])})),t.accounts?t._e():n("tr",[t._m(1)])],2)])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Id")]),n("th",[t._v("Facebook Id")]),n("th",[t._v("Name")]),n("th",[t._v("Extra Info")]),n("th")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"text-center",attrs:{colspan:"5"}},[n("span",{staticClass:"spinner-border spinner-border-lg align-center"})])}],D={data:function(){return{accounts:null}},created:function(){var t=this;f.getAll().then((function(e){return t.accounts=e}))},methods:{deleteAccount:function(t){var e=this;this.accounts=this.accounts.map((function(e){return e.id===t&&(e.isDeleting=!0),e})),f.delete(t).then((function(){return e.accounts=e.accounts.filter((function(e){return e.id!==t}))}))}}},J=D,V=n("2877"),M=Object(V["a"])(J,F,N,!1,null,null,null),U=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Edit Account")]),n("p",[t._v("Updating the information here will only change it inside this application, it won't (and can't) change anything in the associated Facebook account.")]),t.account?n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"form-group"},[n("label",[t._v("Facebook Id")]),n("div",[t._v(t._s(t.account.facebookId))])]),n("div",{staticClass:"form-group"},[n("label",[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account.name,expression:"account.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.account.name},on:{input:function(e){e.target.composing||t.$set(t.account,"name",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[t._v("Extra Info")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.account.extraInfo,expression:"account.extraInfo"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.account.extraInfo},on:{input:function(e){e.target.composing||t.$set(t.account,"extraInfo",e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.loading}},[t.loading?n("span",{staticClass:"spinner-border spinner-border-sm mr-1"}):t._e(),t._v(" Save ")]),n("router-link",{staticClass:"btn btn-link",attrs:{to:"../../"}},[t._v("Cancel")]),t.error?n("div",{staticClass:"alert alert-danger mt-3 mb-0"},[t._v(t._s(t.error))]):t._e()],1)]):t._e(),t.account?t._e():n("div",{staticClass:"text-center p-3"},[n("span",{staticClass:"spinner-border spinner-border-lg align-center"})])])},q=[],W={data:function(){return{account:null,loading:!1,error:""}},created:function(){var t=this;f.getById(this.$route.params.id).then((function(e){return t.account=e}))},methods:{handleSubmit:function(){var t=this;this.loading=!0,this.error="",f.update(this.$route.params.id,this.account).then((function(){nt.push("../")})).catch((function(e){t.error=e,t.loading=!1}))}}},z=W,H=Object(V["a"])(z,L,q,!1,null,null,null),Y=H.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 offset-md-3 mt-5 text-center"},[n("div",{staticClass:"card"},[n("h4",{staticClass:"card-header"},[t._v("Vue.js Facebook Login Example")]),n("div",{staticClass:"card-body"},[n("button",{staticClass:"btn btn-facebook",on:{click:t.login}},[n("i",{staticClass:"fa fa-facebook mr-1"}),t._v(" Login with Facebook ")])])])])},K=[],Q={created:function(){f.accountValue&&nt.push("/")},methods:{login:f.login}},X=Q,Z=Object(V["a"])(X,G,K,!1,null,null,null),tt=Z.exports;a["a"].use(B["a"]);var et=[{path:"/",component:U,beforeEnter:j},{path:"/edit/:id",component:Y,beforeEnter:j},{path:"/login",component:tt},{path:"*",redirect:"/"}],nt=new B["a"]({mode:"history",linkActiveClass:"active",routes:et}),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.account?n("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/"}},[t._v("Home")]),n("a",{staticClass:"nav-item nav-link",on:{click:t.logout}},[t._v("Logout")])],1)]):t._e(),n("div",{staticClass:"container pt-4"},[n("router-view")],1)])},at=[],ot={data:function(){return{account:null}},created:function(){var t=this;f.account.subscribe((function(e){return t.account=e}))},methods:{logout:f.logout}},ct=ot,it=Object(V["a"])(ct,rt,at,!1,null,null,null),ut=it.exports;function st(){new a["a"]({router:nt,render:function(t){return t(ut)}}).$mount("#app")}A(),$(),I(),R().then(st)}});
//# sourceMappingURL=app.3dd193cd.js.map