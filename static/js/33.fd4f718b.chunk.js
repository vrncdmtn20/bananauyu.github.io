(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[33],{183:function(e,t,n){"use strict";n.d(t,"k",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return v})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return w}));var r=n(0),a=n.n(r),u=n(1),c=n(36),s=n.n(c),i=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://bananauyu-api.onrender.com/api/user/cart",{cart:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://bananauyu-api.onrender.com/api/user/cart",{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("https://bananauyu-api.onrender.com/api/user/cart",{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://bananauyu-api.onrender.com/api/user/address",{address:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://bananauyu-api.onrender.com/api/user/cart/coupon",{coupon:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://bananauyu-api.onrender.com/api/user/order",{stripeResponse:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://bananauyu-api.onrender.com/api/user/orders",{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://bananauyu-api.onrender.com/api/user/wishlist",{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("https://bananauyu-api.onrender.com/api/user/wishlist/".concat(t),{},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://bananauyu-api.onrender.com/api/user/wishlist",{productId:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("https://bananauyu-api.onrender.com/api/user/cash-order",{couponApplied:r,COD:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},251:function(e,t,n){"use strict";var r=n(2),a=n.n(r),u=n(44);t.a=function(){return a.a.createElement("nav",null,a.a.createElement("ul",{className:"nav flex-column"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.b,{to:"/user/history",className:"nav-link"},"History")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.b,{to:"/user/password",className:"nav-link"},"Password")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(u.b,{to:"/user/wishlist",className:"nav-link"},"Wishlist"))))}},330:function(e,t,n){"use strict";var r=n(2),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},u=n(51),c=function(e,t){return r.createElement(u.a,Object.assign({},e,{ref:t,icon:a}))};c.displayName="DeleteOutlined";t.a=r.forwardRef(c)},914:function(e,t,n){"use strict";n.r(t);var r=n(31),a=n(21),u=n(2),c=n.n(u),s=n(251),i=n(183),o=n(35),p=n(44),f=n(330);t.default=function(){var e=Object(u.useState)([]),t=Object(a.a)(e,2),n=t[0],l=t[1],h=Object(o.c)((function(e){return Object(r.a)({},e)})).user;Object(u.useEffect)((function(){d()}),[]);var d=function(){return Object(i.h)(h.token).then((function(e){l(e.data.wishlist)}))};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement(s.a,null)),c.a.createElement("div",{className:"col"},c.a.createElement("h4",null,"Wishlist"),n.map((function(e){return c.a.createElement("div",{key:e._id,className:"alert alert-secondary"},c.a.createElement(p.b,{to:"/product/".concat(e.slug)},e.title),c.a.createElement("span",{onClick:function(){return t=e._id,Object(i.i)(t,h.token).then((function(e){d()}));var t},className:"btn btn-sm float-right"},c.a.createElement(f.a,{className:"text-danger"})))})))))}}}]);
//# sourceMappingURL=33.fd4f718b.chunk.js.map