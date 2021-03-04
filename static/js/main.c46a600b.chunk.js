(this.webpackJsonprfavorites=this.webpackJsonprfavorites||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(22),i=c.n(a),r=(c(30),c(31),c(3)),l=c(11),o=(c(32),c(9)),j=c(24),u=c(12),b=c(0);function d(){var e=Object(r.f)();return Object(b.jsxs)("div",{className:"top-nav",children:[Object(b.jsxs)("div",{className:"nav-logo",children:[Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)(o.a,{icon:j.a,color:"#000"})}),Object(b.jsx)("span",{children:"r/"}),"Favorites"]}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"nav-links",children:[Object(b.jsx)("li",{children:Object(b.jsxs)(l.b,{to:"/",className:"/"===e.pathname?"active":"",children:["r/Search ",Object(b.jsx)(o.a,{icon:u.b})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)(l.b,{to:"/favorites",className:"/favorites"===e.pathname?"active":"",children:["r/Saved ",Object(b.jsx)(o.a,{icon:u.a})]})})]})})]})}var h=c(8),O=c(20),f=c.n(O),x=c(25),p=(c(42),c(43),c(15));function v(e){var t=e.post,c=e.savedPosts,s=e.likeClick,a=Object(n.useState)({image:p.b,color:"#DB7600",buttonStyle:"add-btn"}),i=Object(h.a)(a,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){null!==c&&(c.find((function(e){return e===t.id}))?l({image:u.a,color:"#fff",buttonStyle:"add-btn-active"}):l({image:p.b,color:"#DB7600",buttonStyle:"add-btn"}))}),[c,t.id]),Object(b.jsxs)("div",{className:"post-item",children:[Object(b.jsxs)("div",{className:"post-details",children:[Object(b.jsx)("img",{alt:"reddit thumbnail",src:t.thumbnail}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{className:"author",children:["Author: ",Object(b.jsx)("b",{children:t.author})]}),Object(b.jsx)("h3",{className:"title",children:t.title}),Object(b.jsxs)("p",{children:[Object(b.jsx)(o.a,{icon:p.a})," ",t.ups]})]})]}),Object(b.jsx)("button",{className:r.buttonStyle,children:Object(b.jsx)(o.a,{icon:r.image,size:"2x",color:r.color,onClick:function(){return s(t.id)}})})]})}function m(e){var t=e.posts,c=Object(n.useState)(null),s=Object(h.a)(c,2),a=s[0],i=s[1];function r(e){var t=a;t.find((function(t){return t===e}))?t.pop(e):t.push(e),localStorage.setItem("likedPosts",JSON.stringify(t)),i(t)}return Object(n.useEffect)((function(){var e=!0;function t(){return(t=Object(x.a)(f.a.mark((function t(){var c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("likedPosts");case 2:c=t.sent,e&&i(c?JSON.parse(c):[]);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e=!1}}),[a]),Object(b.jsx)("div",{className:"post-list",children:t.map((function(e,t){return Object(b.jsx)(v,{post:e,savedPosts:a,likeClick:r},t)}))})}c(44);function S(e){var t=e.placeholder,c=e.value,n=c.SearchValue,s=c.setSearchValue;return Object(b.jsxs)("div",{className:"searchbar",children:[Object(b.jsx)("input",{type:"text",name:"searchInput",placeholder:t,className:"searchInput",value:n,onChange:function(e){s(e.target.value)}}),Object(b.jsx)("button",{type:"submit",className:"submit-btn",children:"Search"})]})}c(45);function g(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(h.a)(a,2),r=i[0],l=i[1],o=Object(n.useState)(null),j=Object(h.a)(o,2),u=j[0],d=j[1];return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"Search"}),Object(b.jsx)("div",{className:"search",children:Object(b.jsx)("form",{className:"searchform",onSubmit:function(e){e.preventDefault(),fetch("https://www.reddit.com/r/"+c+"/hot.json?limit=9").then((function(e){return e.json()})).then((function(e){var t=e.data.children.map((function(e){return e.data}));l(t),d(null)})).catch((function(e){d("Could not find subreddit"),l(null)}))},children:Object(b.jsx)(S,{placeholder:"e.g. memes",value:{SearchValue:c,setSearchValue:s}})})}),Object(b.jsx)("div",{className:"result-list",children:null!==u?Object(b.jsx)("div",{children:u}):Object(b.jsx)("div",{children:null===r?Object(b.jsx)("p",{children:"Search a subreddit"}):Object(b.jsx)(m,{posts:r})})})]})}function N(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(h.a)(a,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){var e=!0;return function(){var t=JSON.parse(localStorage.getItem("likedPosts")),c=[];t&&(t.forEach((function(t){fetch("https://www.reddit.com/comments/"+t+"/.json").then((function(e){return e.json()})).then((function(t){if(e){var n=t[0].data.children.map((function(e){return e.data}));c.push(n[0])}})).catch((function(e){l("Error retrieving posts"),console.log(e),c=[]}))})),c!==[]&&s(c))}(),function(){s(null),e=!1}}),[]),Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("h1",{children:"Favorites"}),Object(b.jsx)("div",{className:"result-list",children:null!==r?Object(b.jsx)("div",{children:r}):Object(b.jsx)("div",{children:null===c?Object(b.jsx)("p",{children:"There are no favorites"}):Object(b.jsx)(m,{posts:c})})})]})}var k=function(){return Object(b.jsx)(l.a,{basename:"/",children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:g}),Object(b.jsx)(r.a,{exact:!0,path:"/favorites",component:N})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),w()}},[[46,1,2]]]);
//# sourceMappingURL=main.c46a600b.chunk.js.map