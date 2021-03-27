(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{15:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(5),i=c.n(s),o=(c(15),c(1)),r=function(){return Object(o.jsx)("div",{className:"Header",children:Object(o.jsx)("h3",{children:"DASHBOARD"})})},l=c(3),d=c(9),j=c.n(d),m=c(10),u=c(4),b=function(e){var t=e.LikedComponent,c=e.BookmarkedComponent;return Object(o.jsx)("div",{className:"MovieList",children:e.movies.map((function(n,a){return Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsx)("img",{src:n.Poster,alt:"movie"}),Object(o.jsxs)("div",{className:"MovieAddOn",children:[Object(o.jsx)("div",{onClick:function(){try{e.HandleLikedMovies(n)}catch(t){e.HandleBookmarkMovies(n)}},children:Object(o.jsx)(t,{})}),Object(o.jsx)("div",{className:"title",children:n.Title}),Object(o.jsx)("div",{onClick:function(){try{e.HandleBookmarkMovies(n)}catch(t){e.HandleLikedMovies(n)}},children:Object(o.jsx)(c,{})})]})]})}))})},v=function(e){return Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("h3",{className:"heading",children:e.heading})})},O=function(e){return Object(o.jsx)("div",{className:"Searchbox col col-sm-4",children:Object(o.jsx)("input",{className:"form-control",placeholder:"Search movies...",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)}})})},h=function(){return Object(o.jsx)("div",{className:"liked-movies",children:Object(o.jsx)("i",{className:"far fa-thumbs-up"})})},f=function(){return Object(o.jsx)("div",{className:"bookmarked-movies",children:Object(o.jsx)("i",{className:"far fa-bookmark"})})},x=function(){return Object(o.jsx)("div",{className:"unliked-movies",children:Object(o.jsx)("i",{className:"fas fa-thumbs-up"})})},k=function(){return Object(o.jsx)("div",{className:"unliked-movies",children:Object(o.jsx)("i",{className:"fas fa-bookmark"})})},p=c(7);c(18);p.a.configure();var N=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),r=i[0],d=i[1],N=Object(n.useState)([]),g=Object(u.a)(N,2),S=g[0],C=g[1],w=Object(n.useState)([]),M=Object(u.a)(w,2),L=M[0],B=M[1],H=function(e){p.a.success(e,{position:p.a.POSITION.BOTTOM_RIGHT,autoClose:3500})},y=function(e){localStorage.setItem("react-movie-app-liked",JSON.stringify(e))},I=function(e){localStorage.setItem("react-movie-app-bookmarked",JSON.stringify(e))},T=function(){var e=Object(m.a)(j.a.mark((function e(t){var c,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://www.omdbapi.com/?s=".concat(t,"&apikey=b1a2c737"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:(s=e.sent).Search&&a(s.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){T(r)}),[r]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-liked"));e&&C(e)}),[]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-bookmarked"));e&&B(e)}),[]);return Object(o.jsxs)("div",{className:"Container container-fluid",children:[Object(o.jsx)("div",{className:"navbar-container row d-flex align-items-center mb-2",children:Object(o.jsx)(v,{heading:"Liked Movies"})}),Object(o.jsx)("div",{className:"row movies",children:Object(o.jsx)("div",{children:Object(o.jsx)(b,{movies:S,LikedComponent:x,BookmarkedComponent:x,HandleLikedMovies:function(e){for(var t=Object(l.a)(S),c=[],n=0;n<t.length;n++)t[n]!==e&&c.push(t[n]);C(c),y(c)}})})}),Object(o.jsx)("div",{className:"navbar-container row d-flex align-items-center mb-2",children:Object(o.jsx)(v,{heading:"Watch Later"})}),Object(o.jsx)("div",{className:"row movies",children:Object(o.jsx)("div",{children:Object(o.jsx)(b,{movies:L,LikedComponent:k,BookmarkedComponent:k,HandleBookmarkMovies:function(e){for(var t=Object(l.a)(L),c=[],n=0;n<t.length;n++)t[n]!==e&&c.push(t[n]);B(c),I(c)}})})}),Object(o.jsxs)("div",{className:"navbar-container row d-flex align-items-center mb-2",children:[Object(o.jsx)(v,{heading:"Discover New Movies",className:"list-title"}),Object(o.jsx)(O,{searchValue:r,setSearchValue:d})]}),Object(o.jsx)("div",{className:"row movies",children:Object(o.jsx)(b,{movies:c,LikedComponent:h,BookmarkedComponent:f,HandleLikedMovies:function(e){var t=Object(l.a)(S);t.includes(e)||t.push(e),console.log(e),C(t),H('"'+e.Title+'" added to liked videos'),y(t)},HandleBookmarkMovies:function(e){var t=Object(l.a)(L);t.includes(e)||t.push(e),B(t),H('"'+e.Title+"\" added to watch later. \n Don't forget to watch it (^^)"),I(t)}})})]})},g=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(r,{}),Object(o.jsx)(N,{})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),S()}},[[19,1,2]]]);
//# sourceMappingURL=main.9584f16a.chunk.js.map