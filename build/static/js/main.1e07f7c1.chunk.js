(this["webpackJsonpamazon-react-app"]=this["webpackJsonpamazon-react-app"]||[]).push([[0],Array(34).concat([function(e,t,c){},function(e,t,c){},,,function(e,t,c){},,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(2),r=c.n(a),n=c(24),s=c.n(n),i=(c(34),c(13)),o=c(3),l=(c(35),c(5)),u=c.n(l),d=c(4),j=(c(38),c(0));var b=function(){return Object(j.jsxs)("div",{className:"delivery-location",children:[Object(j.jsx)(u.a,{className:"delivery-location__pin",path:d.g,size:1.2}),Object(j.jsxs)("div",{className:"delivery-location__details",children:[Object(j.jsx)("div",{className:"delivery-location__hint",children:"Hello"}),Object(j.jsx)("div",{className:"delivery-location__title",children:"Select your address"})]})]})},m=c.p+"static/media/amazon-logo.1c9be0b2.png";c(40);var O=function(e){var t=e.country,c=void 0===t?"in":t;return Object(j.jsxs)(i.b,{to:"/",className:"logo",children:[Object(j.jsx)("img",{className:"logo__img",alt:"Amazon",src:m}),c&&Object(j.jsxs)("span",{className:"logo__country",children:[".",c]})]})},h=c(8),p=(c(47),["All Categories","Deals","Alexa Skills","Amazon Devices","Amazon Fashion","Amazon Pantry","Appliances","Apps & Games","Baby","Beauty","Big Bazaar","Books","Car & Motorbike","Clothing & Accessories","Collectibles","Computers & Accessories","Electronics","Furniture","Garden & Outdoors","Gift Cards","Grocery & Gourmet Foods","Health & Personal Care","Home & Kitchen","Industrial & Scientific","Jewellery","Kindle Store","Luggage & Bags","Luxury Beauty","Movies & TV Shows","Music","Musical Instruments","Office Products","Pet Supplies","Prime Video","Shoes & Handbags","Software","Sports, Fitness & Outdoors","Tools & Home Improvement","Toys & Games","Under \u20b9500","Video Games","Watches"]);var x=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),c=t[0],r=t[1];return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("select",{className:"search__select",value:c,onChange:function(e){return r(parseInt(e.target.value,10))},children:p.map((function(e,t){return Object(j.jsx)("option",{value:t,children:e},t)}))}),Object(j.jsx)("input",{className:"search__input",type:"text"}),Object(j.jsx)("button",{className:"search__button",children:Object(j.jsx)(u.a,{path:d.f,size:1.4})})]})};c(48);var v=function(){return Object(j.jsxs)("div",{className:"account",children:[Object(j.jsx)("div",{className:"account__hint",children:"Hello, Sign in"}),Object(j.jsxs)("div",{className:"account__title",children:["My Account",Object(j.jsx)(u.a,{className:"account__arrow",path:d.h,size:1.2})]})]})},_=(c(49),c(14)),f=c(7);function N(e){var t=parseInt(e.value,10),c=parseInt(t*(100-e.discount)/100,10);return{basePrice:t,finalPrice:c,isDiscounted:c!==t}}var g=r.a.createContext(),y=r.a.createContext();function C(e,t){switch(t.type){case"increment":var c,a=t.payload,r=e.products[a.id];c=r?Object(f.a)(Object(f.a)({},r),{},{quantity:r.quantity+1}):Object(f.a)(Object(f.a)({},a),{},{quantity:1});var n=N(a.price).finalPrice;return Object(f.a)(Object(f.a)({},e),{},{totalQuantity:e.totalQuantity+1,totalPrice:e.totalPrice+n,products:Object(f.a)(Object(f.a)({},e.products),{},Object(_.a)({},a.id,c))});case"decrement":var s,i=t.payload,o=e.products[i.id];if(!o)return e;s=1===o.quantity?null:Object(f.a)(Object(f.a)({},o),{},{quantity:o.quantity-1});var l=N(i.price).finalPrice;return Object(f.a)(Object(f.a)({},e),{},{totalQuantity:e.totalQuantity-1,totalPrice:e.totalPrice-l,products:Object(f.a)(Object(f.a)({},e.products),{},Object(_.a)({},i.id,s))});default:throw new Error("Unhandled action type: ".concat(t.type))}}function P(e){var t=e.children,c=r.a.useReducer(C,{products:{},totalQuantity:0,totalPrice:0}),a=Object(h.a)(c,2),n=a[0],s=a[1];return Object(j.jsx)(g.Provider,{value:n,children:Object(j.jsx)(y.Provider,{value:s,children:t})})}function S(){var e=r.a.useContext(g);if(void 0===e)throw new Error("useCountState must be used within a CountProvider");return e}var k=function(){var e=S().totalQuantity;return Object(j.jsxs)(i.b,{to:"/cart",className:"h-cart",children:[Object(j.jsx)(u.a,{path:d.a,size:1.4}),Object(j.jsx)("div",{className:"h-cart__count",children:e})]})};c(50);var w=function(){return Object(j.jsxs)("div",{className:"h-orders",children:[Object(j.jsx)("div",{className:"h-orders__hint",children:"Returns"}),Object(j.jsx)("div",{className:"h-orders__title",children:"& Orders"})]})};var z=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)(O,{}),Object(j.jsx)(b,{}),Object(j.jsx)(x,{}),Object(j.jsx)(v,{}),Object(j.jsx)(w,{}),Object(j.jsx)(k,{})]})})},F=(c(51),c(52),c(28)),A=c(17),B=c.n(A),G=(c(53),{INR:d.e}),I={INR:"en-IN"};var E=function(e){var t=e.className,c=e.value,a=e.currencyCode,r=e.iconSize,n=void 0===r?1:r,s=Object(F.a)(e,["className","value","currencyCode","iconSize"]);return Object(j.jsxs)("div",Object(f.a)(Object(f.a)({className:B()("currency-format",Object(_.a)({},t,t))},s),{},{children:[Object(j.jsx)(u.a,{size:n,path:G[a]}),Object(j.jsx)("span",{className:"currency-format__value",children:c.toLocaleString(I[a])})]}))};c(54);var L=function(e){var t=e.product,c=S().products,a=function(){var e=r.a.useContext(y);if(void 0===e)throw new Error("useCountDispatch must be used within a CountProvider");return e}(),n=c[t.id];return n?Object(j.jsxs)("div",{className:"add-to-cart",children:[Object(j.jsx)("button",{className:"add-to-cart__action add-to-cart__action--minus",onClick:function(){return a({type:"decrement",payload:t})},children:Object(j.jsx)(u.a,{className:"add-to-cart__icon",size:1.2,path:d.i})}),Object(j.jsx)("div",{className:"add-to-cart__quantity",children:n.quantity}),Object(j.jsx)("button",{className:"add-to-cart__action add-to-cart__action--plus",onClick:function(){return a({type:"increment",payload:t})},children:Object(j.jsx)(u.a,{className:"add-to-cart__icon",size:1.2,path:d.j})})]}):Object(j.jsx)("button",{className:"add-to-cart-button",onClick:function(){return a({type:"increment",payload:t})},children:"Add to cart"})};var R=function(e){var t=e.product,c=N(t.price).finalPrice;return Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsx)("div",{className:"cart-item__image",children:Object(j.jsx)("img",{alt:t.title,src:t.images[0]})}),Object(j.jsxs)("div",{className:"cart-item__details",children:[Object(j.jsx)("div",{className:"cart-item__title",children:t.title}),Object(j.jsxs)("div",{className:"cart-item__brand",children:["by ",t.brand]})]}),Object(j.jsxs)("div",{className:"cart-item__purchase",children:[Object(j.jsx)("div",{className:"cart-item__price",children:Object(j.jsx)(E,{className:"cart-item__currency",currencyCode:t.price.currency,value:c})}),Object(j.jsx)("div",{className:"cart-item__multiply",children:Object(j.jsx)(u.a,{path:d.d,size:1.2})}),Object(j.jsx)("div",{className:"cart-item__quantity",children:Object(j.jsx)(L,{product:t})}),Object(j.jsx)("div",{className:"cart-item__assign",children:"="}),Object(j.jsx)("div",{className:"cart-item__amount",children:Object(j.jsx)(E,{className:"cart-item__currency bold",currencyCode:t.price.currency,value:c*t.quantity})})]})]})};var T=function(){var e=S(),t=e.products,c=e.totalQuantity,a=e.totalPrice,r=Object.keys(t).filter((function(e){return t[e]}));return Object(j.jsx)("div",{className:"cart",children:Object(j.jsxs)("div",{className:"cart__main",children:[Object(j.jsx)("div",{className:"cart__items",children:r.map((function(e){return Object(j.jsx)(R,{product:t[e]},e)}))}),Object(j.jsxs)("div",{className:"cart__summary",children:["Subtotal (",c," items):"," ",Object(j.jsx)(E,{className:"bold",currencyCode:"INR",value:a})]})]})})},q=c(12),M=c.n(q),D=c(15);c(56);var H=function(e){var t=e.product,c=Object(a.useState)([]),r=Object(h.a)(c,2),n=r[0],s=r[1],i=Object(a.useState)(""),o=Object(h.a)(i,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){s(t.images),t.images?u(t.images[0]):u("")}),[t]),Object(j.jsxs)("div",{className:"slider",children:[Object(j.jsx)("div",{className:"slider__left",children:Object(j.jsx)("ul",{className:"slider__listing",children:n&&n.map((function(e,c){return Object(j.jsx)("li",{className:"slider__list",onClick:function(){!function(e){u(e)}(e)},children:Object(j.jsx)("img",{alt:t.title,src:e})},c)}))})}),Object(j.jsx)("div",{className:"slider__right",children:Object(j.jsx)("div",{className:"slider__display",children:Object(j.jsx)("img",{alt:t.title,src:l})})})]})};c(57),c(58);var Q=function(e){var t=e.rating,c=e.maxRating,a=e.size,r=void 0===a?1.2:a;return Object(j.jsx)("div",{className:"rating",children:new Array(c).fill(0).map((function(e,c){var a=t>=c+1;return Object(j.jsx)(u.a,{className:B()("rating__star",{"rating__star--active":a}),size:r,path:a?d.k:d.l},c)}))})};var J=function(e){var t=e.product,c=N(t.price),a=c.finalPrice,r=c.basePrice;return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsxs)("div",{className:"information",children:[Object(j.jsx)("div",{className:"information__header",children:t.title}),Object(j.jsxs)("div",{className:"information__category",children:["Brand: ",t.category]}),t.rating&&Object(j.jsxs)("div",{className:"information__rating",children:[Object(j.jsx)(Q,{maxRating:5,rating:t.rating.value}),Object(j.jsxs)("div",{className:"information__rating-label",children:[t.rating.count," ratings"]})]}),t.price&&Object(j.jsxs)("div",{className:"information__pricing",children:[Object(j.jsxs)("div",{className:"information__price",children:[Object(j.jsx)("span",{className:"information__label",children:"M.R.P. : "}),Object(j.jsx)(E,{className:"product-card__amount strikethrough",currencyCode:t.price.currency,value:r})]}),Object(j.jsxs)("div",{className:"information__price",children:[Object(j.jsx)("span",{className:"information__label",children:"Price. : "}),Object(j.jsx)(E,{className:"product-card__amount",currencyCode:t.price.currency,value:a})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"information__label",children:"You Save : "}),t.price.discount]})]}),Object(j.jsx)(L,{product:t}),Object(j.jsx)("div",{className:"information__specs",children:t.specs&&t.specs.map((function(e,t){return Object(j.jsxs)("div",{className:"information__spec",children:[Object(j.jsxs)("span",{children:[" ",e.name]})," : ",Object(j.jsx)("span",{children:e.value})]},t)}))}),Object(j.jsxs)("div",{className:"information__features",children:[Object(j.jsx)("div",{className:"information__spec-header",children:"About this item"}),Object(j.jsx)("ul",{children:t.features&&t.features.map((function(e,t){return Object(j.jsx)("li",{className:"information__feature",children:e},t)}))})]})]})})},W=(c(59),"https://602fc537a1e9d20017af105e.mockapi.io/api/v1/");function U(e){return V.apply(this,arguments)}function V(){return(V=Object(D.a)(M.a.mark((function e(t){var c,a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=null,e.prev=1,e.next=4,t.json();case 4:c=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:if(!t.ok){e.next=13;break}return e.abrupt("return",c);case 13:throw(a=new Error(t.statusText)).isFromServer=!0,a.response=t,a.responseJson=c,a;case 18:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function K(e,t){return Y.apply(this,arguments)}function Y(){return(Y=Object(D.a)(M.a.mark((function e(t,c){var a,r,n,s,i=arguments;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>2&&void 0!==i[2]?i[2]:null,r={method:t},a&&"GET"!==t&&(r.body=JSON.stringify(a)),n=W+c,e.next=6,fetch(n,r);case 6:return s=e.sent,e.abrupt("return",U(s));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X={getList:function(){return K("GET","/products")},getProduct:function(e){return K("GET","products/"+e)}};c(60);var Z=function(e){var t=e.size;return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("div",{className:"loader__icon",style:{width:t,height:t}})})};c(61);var $=function(e){var t=e.message,c=e.actionLabel,a=void 0===c?"Try again":c,r=e.actionFn;return Object(j.jsxs)("div",{className:"error",children:[Object(j.jsx)("div",{className:"error__message",children:t}),r&&Object(j.jsx)("button",{className:"error__button",onClick:r,children:a})]})};var ee=function(){var e=Object(o.f)().productId,t=Object(a.useState)(null),c=Object(h.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)(!1),i=Object(h.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(null),b=Object(h.a)(d,2),m=b[0],O=b[1],p=Object(a.useCallback)(Object(D.a)(M.a.mark((function t(){var c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!l&&!r){t.next=2;break}return t.abrupt("return");case 2:return u(!0),O(null),t.prev=4,t.next=7,X.getProduct(e);case 7:c=t.sent,console.log(c),n(c),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),O(t.t0);case 15:u(!1);case 16:case"end":return t.stop()}}),t,null,[[4,12]])}))),[l]);return Object(a.useEffect)((function(){p()}),[p]),l?Object(j.jsx)(Z,{size:50}):m?Object(j.jsx)($,{message:"Failed to load products",actionFn:p}):r?Object(j.jsxs)("div",{className:"product",children:[Object(j.jsx)(H,{product:r}),Object(j.jsx)(J,{product:r})]}):null};var te=function(){return Object(j.jsx)("div",{children:"Login Page"})},ce=(c(62),c(27)),ae=(c(63),["https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg"]);var re=function(){return Object(j.jsx)("div",{className:"h-banner",children:Object(j.jsx)("div",{className:"h-banner__carousel",children:Object(j.jsx)(ce.a,{autoplay:!0,autoplayReverse:!0,className:"h-banner",renderCenterLeftControls:function(e){var t=e.previousSlide;return Object(j.jsx)(u.a,{className:"h-banner__control",size:5,path:d.b,onClick:t})},renderCenterRightControls:function(e){var t=e.nextSlide;return Object(j.jsx)(u.a,{className:"h-banner__control",size:5,path:d.c,onClick:t})},renderBottomCenterControls:function(){return null},children:ae.map((function(e,t){return Object(j.jsx)("img",{alt:"Banner ".concat(t+1),src:e},t)}))})})})};c(68),c(69);var ne=function(e){var t=e.className,c=e.product,a=N(c.price),r=a.finalPrice,n=a.basePrice,s=a.isDiscounted;return Object(j.jsx)("div",{className:"product-card-wrapper",children:Object(j.jsxs)("div",{className:B()("product-card",Object(_.a)({},t,t)),children:[Object(j.jsx)("div",{className:"product-card__title",children:c.title}),Object(j.jsxs)("div",{className:"product-card__price",children:[Object(j.jsx)(E,{className:"product-card__amount",currencyCode:c.price.currency,value:r}),s&&Object(j.jsx)(E,{className:"product-card__amount product-card__amount--discount",currencyCode:c.price.currency,value:n})]}),Object(j.jsxs)("div",{className:"product-card__rating",children:[Object(j.jsx)(Q,{rating:c.rating.value,maxRating:5}),Object(j.jsxs)("div",{className:"product-card__rating-count",children:[c.rating.count," ratings"]})]}),Object(j.jsx)(i.b,{to:"/product/".concat(c.id),className:"product-card__gallery",children:Object(j.jsx)("img",{className:"product-card__image",alt:c.title,src:c.images[0]})}),Object(j.jsx)("div",{className:"product-card__actions",children:Object(j.jsx)(L,{product:c})})]})})};var se=function(){var e=Object(a.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!1),s=Object(h.a)(n,2),i=s[0],o=s[1],l=Object(a.useState)(null),u=Object(h.a)(l,2),d=u[0],b=u[1],m=Object(a.useCallback)(Object(D.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i||c.length>0)){e.next=2;break}return e.abrupt("return");case 2:return o(!0),b(null),e.prev=4,e.next=7,X.getList();case 7:t=e.sent,r(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),b(e.t0);case 14:o(!1);case 15:case"end":return e.stop()}}),e,null,[[4,11]])}))),[i,c]);return Object(a.useEffect)((function(){m()}),[m]),i?Object(j.jsx)(Z,{size:50}):d?Object(j.jsx)($,{message:"Failed to load products",actionFn:m}):Object(j.jsx)("div",{className:"products",children:c.map((function(e){return Object(j.jsx)(ne,{product:e},e.id)}))})};var ie=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(re,{}),Object(j.jsx)("div",{className:"home__section",children:Object(j.jsx)(se,{})})]})};c(70);var oe=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(z,{}),Object(j.jsx)("div",{className:"page-container",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/cart",children:Object(j.jsx)(T,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/product/:productId",children:Object(j.jsx)(ee,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/login",children:Object(j.jsx)(te,{})}),Object(j.jsx)(o.a,{children:Object(j.jsx)(ie,{})})]})})]})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(P,{children:Object(j.jsx)(oe,{})})}),document.getElementById("root")),le()}]),[[71,1,2]]]);
//# sourceMappingURL=main.1e07f7c1.chunk.js.map