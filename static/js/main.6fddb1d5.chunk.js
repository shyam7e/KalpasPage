(this["webpackJsonpreact-page"]=this["webpackJsonpreact-page"]||[]).push([[0],{22:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(15),l=s.n(n),r=(s(22),s(6)),i=s.n(r),d=s(16),o=s(2),j=s(17),b=s.n(j),m=s(0);var u=function(e){var t=e.title,s=e.summary,a=e.published,c=e.link,n=e.mainPost,l=e.setPosts,r=e.id;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"p-0 m-0s",children:Object(m.jsxs)("div",{className:"p-2 d-flex flex-column justify-content-center card-data2 shadow",children:[Object(m.jsx)("div",{className:"closebtn p-2",onClick:function(){!function(e){var t=n.filter((function(t){return e!==t.id}));l(t)}(r)}}),Object(m.jsxs)("div",{"data-toggle":"modal","data-target":".bd-example-modal-lg",children:[Object(m.jsxs)("div",{className:"d-flex flex-column",style:{height:"40%"},children:[Object(m.jsx)("strong",{className:"textflow",children:t}),Object(m.jsx)("span",{className:"textflow",children:s}),Object(m.jsx)("span",{className:"text-muted textflow",children:a})]}),Object(m.jsx)("img",{alt:"thumbnail",src:"https://source.unsplash.com/random/200?sig=".concat(Math.ceil(9999*Math.random())),className:"mt-4",style:{width:"100%",height:"100px"}})]})]})}),Object(m.jsx)("div",{className:"modal fade bd-example-modal-lg ",tabIndex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog modal-lg",children:Object(m.jsx)("div",{className:"modal-content",children:Object(m.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(m.jsx)("iframe",{title:a,className:"embed-responsive-item",src:c,allowFullScreen:!0})})})})})]})};var x=function(e){var t=e.title,s=e.summary,a=e.published,c=e.link,n=e.mainPost,l=e.setPosts,r=e.id;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"d-flex align-items-center cardrow",children:[Object(m.jsxs)("div",{className:"p-2 m-1 card-data ","data-toggle":"modal","data-target":".bd-example-modal-lg",children:[Object(m.jsx)("div",{className:"d-flex align-items-center px-2",children:Object(m.jsx)("img",{style:{width:"50px",height:"50px"},className:"rounded-circle",src:"https://source.unsplash.com/random/100?sig=".concat(1e3*Math.random()),alt:""})}),Object(m.jsxs)("div",{className:"d-flex flex-column overflow-hidden",children:[Object(m.jsx)("strong",{className:"textflow",children:t}),Object(m.jsx)("span",{className:"textflow",children:s}),Object(m.jsx)("span",{className:"text-muted textflow",children:a})]})]}),Object(m.jsx)("div",{className:" bg-white rounded-circle ml-1 p-2",onClick:function(){return function(e){var t=n.filter((function(t){return e!==t.id}));l(t)}(r)},children:Object(m.jsx)("div",{className:"closebtn bg-white rounded-circle pl-1"})})]}),Object(m.jsx)("div",{className:"modal fade bd-example-modal-lg ",tabIndex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true",children:Object(m.jsx)("div",{className:"modal-dialog modal-lg",children:Object(m.jsx)("div",{className:"modal-content ",children:Object(m.jsx)("div",{className:"embed-responsive embed-responsive-16by9",children:Object(m.jsx)("iframe",{title:a,className:"embed-responsive-item",src:c,allowFullScreen:!0})})})})})]})},f=function(e){var t=e.posts,s=e.loading,a=e.toggle,c=e.mainPost,n=e.setPosts;return s?Object(m.jsx)("h2",{children:"Loading..."}):Object(m.jsx)(m.Fragment,{children:a?t.map((function(e,s){return Object(m.jsx)(u,{title:e.title,summary:e.summary,published:e.published,link:e.link,posts:t,mainPost:c,setPosts:n,id:e.id},s)})):t.map((function(e,s){return Object(m.jsx)(x,{title:e.title,summary:e.summary,published:e.published,link:e.link,posts:t,mainPost:c,setPosts:n,id:e.id},s)}))})},h=function(e){for(var t=e.postsPerPage,s=e.totalPosts,c=e.paginate,n=[],l=1;l<=Math.ceil(s/t);l++)n.push(l);var r=Object(a.useState)({startIndex:0,endIndex:3}),i=Object(o.a)(r,2),d=i[0],j=i[1],b=function(){j((function(e){return{startIndex:e.startIndex-3,endIndex:e.endIndex-3}}))},u=function(){j((function(e){return{startIndex:e.startIndex+3,endIndex:e.endIndex+3}}))};return Object(m.jsx)("nav",{className:"p-0 m-0 mb-3",children:Object(m.jsxs)("ul",{className:"pagination p-0 m-0 ",children:[d.startIndex<=0?Object(m.jsx)("button",{disabled:!0,className:"btn d-flex page-link rounded-circle",onClick:function(){return b()},children:Object(m.jsx)("i",{className:"fa fa-angle-double-left"})}):Object(m.jsx)("button",{className:"btn d-flex page-link rounded-circle",onClick:function(){return b()},children:Object(m.jsx)("i",{className:"fa fa-angle-double-left"})}),n.slice(d.startIndex,d.endIndex).map((function(e){return Object(m.jsx)("li",{className:"d-flex justify-content-center  align-items-center page-item mx-1 p-0 m-0",children:Object(m.jsx)("button",{onClick:function(){return c(e)},className:"btn btn-secondary d-flex page-link rounded-circle",children:e})},e)})),d.endIndex>=s/t?Object(m.jsx)("button",{disabled:!0,className:"btn d-flex page-link rounded-circle",onClick:function(){return u()},children:Object(m.jsx)("i",{className:"fa fa-angle-double-right"})}):Object(m.jsx)("button",{className:"btn d-flex page-link rounded-circle",onClick:function(){return u()},children:Object(m.jsx)("i",{className:"fa fa-angle-double-right"})})]})})};var O=function(){return Object(m.jsxs)("div",{className:"profile px-2 mt-5 mb-2 d-flex justify-content-start align-items-center",children:[Object(m.jsx)("div",{className:"d-flex align-items-center px-2",children:Object(m.jsx)("img",{style:{width:"50px"},className:"rounded-circle",src:"https://source.unsplash.com/60x60/",alt:""})}),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-start flex-column ",children:[Object(m.jsx)("strong",{children:"Hi Reader,"}),Object(m.jsx)("span",{children:"Here's your News"})]})]})};var g=function(e){var t=e.toggle,s=e.setToggle;return Object(m.jsxs)("div",{className:" my-3 toggle d-flex flex-column justify-content-center align-items-center",children:[Object(m.jsx)("h4",{children:"View Toggle"}),Object(m.jsxs)("div",{className:"tbox",style:{fontSize:"36px"},children:[Object(m.jsx)("i",{className:"".concat(t?"fa fa-list-alt  active":"fa fa-list-alt  togglebg"),onClick:function(){s(!0)}}),Object(m.jsx)("i",{onClick:function(){s(!1)},className:"".concat(t?"fa fa-list  togglebg":"fa fa-list  active")})]})]})};var p=function(e){var t=e.feedback,s=e.setfeedback;return Object(m.jsxs)("div",{className:"feedback m-2 text-center",children:[Object(m.jsx)("h4",{className:"p-2",children:"Have a Feedback?"}),Object(m.jsx)("button",{onClick:function(){s(!t)},className:"".concat(t?"btn btn-default px-5 py-2 rounded btnfeed2":"btn btn-default px-5 py-2 rounded btnfeed"),children:Object(m.jsx)("span",{className:"font-weight-bold",children:"We're Listening"})})]})};s(5);var v=function(e){e.feedback;var t=Object(a.useState)(),s=Object(o.a)(t,2),c=s[0],n=s[1],l=Object(a.useState)(),r=Object(o.a)(l,2),i=r[0],d=r[1],j=Object(a.useState)(),b=Object(o.a)(j,2),u=b[0],x=b[1],f=Object(a.useState)(),h=Object(o.a)(f,2),O=h[0],g=h[1],p=Object(a.useState)(),v=Object(o.a)(p,2),N=v[0],y=v[1],w=Object(a.useState)(),k=Object(o.a)(w,2),P=k[0],C=k[1],I=function(e,t){t(e.target.value)};return Object(m.jsxs)("div",{className:"".concat("container mt-5"),children:[Object(m.jsxs)("div",{className:"mb-4",children:[Object(m.jsx)("h5",{className:"form-head",children:"Thank you so much for taking the time!"}),Object(m.jsx)("small",{className:"form-sub",children:"Please provide the below details"})]}),Object(m.jsxs)("form",{action:"",className:"form",children:[Object(m.jsxs)("div",{className:"form-group ",children:[Object(m.jsx)("label",{htmlFor:"name",children:"First Name"}),Object(m.jsx)("input",{className:"form-control w-50 shadow",type:"text",placeholder:"John",value:c,onChange:function(e){return I(e,n)}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(m.jsx)("input",{className:"form-control w-50 shadow",type:"text",placeholder:"Doe",value:i,onChange:function(e){return I(e,d)}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"address",children:"Address"}),Object(m.jsx)("textarea",{rows:"4",className:"form-control shadow",type:"text",placeholder:"Enter your full Postal Address",value:u,onChange:function(e){return I(e,x)}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"country",children:"Country"}),Object(m.jsx)("input",{row:"",col:"",className:"form-control w-50 shadow",type:"text",placeholder:"India",value:O,onChange:function(e){return I(e,g)}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"Email",children:"Email ID"}),Object(m.jsx)("input",{className:"form-control w-50 shadow",type:"gmail",placeholder:"example@sample.com",value:N,onChange:function(e){return I(e,y)}})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)("input",{className:"no rounded",style:{width:"40px"},type:"tel",placeholder:"+91"}),Object(m.jsx)("input",{type:"tel",className:"form-control w-50",placeholder:"111-111-111",value:P,onChange:function(e){I(e,C)}})]})]}),Object(m.jsx)("div",{className:"form-group"}),Object(m.jsx)("button",{onClick:function(){alert("your name is"+c+i+" your address"+u+O+N+P)},className:"btn btntext btn-default px-5 py-2 rounded btnfeed shadow",children:"Submit"})]})]})};var N=function(e){var t=e.toggle,s=e.setToggle,a=e.feedback,c=e.setfeedback;return Object(m.jsxs)("aside",{className:"".concat(a?" asidebox box":" asidebox form "),children:[Object(m.jsxs)("div",{className:"d-flex flex-column align-items-center ",children:[Object(m.jsx)(O,{}),a?"":Object(m.jsx)(g,{toggle:t,setToggle:s}),Object(m.jsx)(p,{feedback:a,setfeedback:c})]}),Object(m.jsx)("div",{className:"".concat(a?" forme":" formh"),children:Object(m.jsx)(v,{feedback:a})})]})};var y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),l=Object(o.a)(n,2),r=l[0],j=l[1],u=Object(a.useState)(1),x=Object(o.a)(u,2),O=x[0],g=x[1],p=Object(a.useState)(!1),v=Object(o.a)(p,2),y=v[0],w=v[1],k=Object(a.useState)(6),P=Object(o.a)(k,1)[0],C=Object(a.useState)(!1),I=Object(o.a)(C,2),S=I[0],F=I[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,b.a.get("https://api.first.org/data/v1/news");case 3:t=e.sent,c(t.data.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(s)}),[]);var L=O*P,T=L-P,M=s.slice(T,L);return Object(m.jsxs)("main",{className:"fixed-right d-flex flex-row justify-content-end container-fluid pr-5 m-0 p-0",children:[Object(m.jsx)(N,{toggle:S,setToggle:F,feedback:y,setfeedback:w}),Object(m.jsxs)("div",{className:"".concat(y?"blur":"d-flex flex-column  align-items-center justify-content-start container py-0 m-0 flexb"),children:[Object(m.jsx)("div",{className:"".concat(S?"row mt-4 pt-3":"d-flex flex-column col"),children:Object(m.jsx)(f,{posts:M,loading:r,toggle:S,mainPost:s,setPosts:c})}),Object(m.jsx)(h,{postsPerPage:P,totalPosts:s.length,paginate:function(e){g(e)}})]})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),a(e),c(e),n(e),l(e)}))};l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),w()},5:function(e,t,s){}},[[43,1,2]]]);
//# sourceMappingURL=main.6fddb1d5.chunk.js.map