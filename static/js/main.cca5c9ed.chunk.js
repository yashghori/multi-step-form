(this["webpackJsonpmsf-tut"]=this["webpackJsonpmsf-tut"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(5),c=a.n(s),l=(a(10),a(3)),i=a(1),o=a(0);var j=function(e){var t=e.formData,a=e.setFormData,r=e.page,s=e.setPage,c=e.FormTitles,j=Object(n.useState)({email:!1,password:!1}),u=Object(l.a)(j,2),b=u[0],d=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"sign-up-container",children:[Object(o.jsx)("input",{type:"email",placeholder:"Email...",value:t.email,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{email:e.target.value}))}}),b.email?Object(o.jsx)("p",{style:{color:"red"},children:"email include @"}):null,Object(o.jsx)("input",{type:"text",placeholder:"Password...",value:t.password,onChange:function(e){return a(Object(i.a)(Object(i.a)({},t),{},{password:e.target.value}))}}),b.password?Object(o.jsx)("p",{style:{color:"red"},children:"password must be greater then 5"}):null,Object(o.jsx)("input",{type:"text",placeholder:"Confirm Password...",value:t.confirmPassword,onChange:function(e){return a(Object(i.a)(Object(i.a)({},t),{},{confirmPassword:e.target.value}))}})]}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("button",{disabled:0==r,children:"Prev"}),Object(o.jsx)("button",{onClick:function(){t.email.includes("@")&&t.password.length>5?s((function(e){return e+1})):t.email.includes("@")?d(Object(i.a)(Object(i.a)({},b),{},{password:!0})):d(Object(i.a)(Object(i.a)({},b),{},{email:!0}))},children:r===c.length-1?"Submit":"Next"})]})]})};var u=function(e){var t=e.formData,a=e.setFormData,r=e.page,s=e.setPage,c=e.FormTitles,j=Object(n.useState)({usernameValidate:!1,firstNameValidate:!1,lastNameValidate:!1}),u=Object(l.a)(j,2),b=u[0],d=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"personal-info-container",children:[Object(o.jsx)("input",{type:"text",placeholder:"First Name...",value:t.firstName,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{firstName:e.target.value}))}}),b.firstNameValidate?Object(o.jsx)("p",{style:{color:"red"},children:"firstname must be greater then 5"}):null,Object(o.jsx)("input",{type:"text",placeholder:"Last Name...",value:t.lastName,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{lastName:e.target.value}))}}),b.lastNameValidate?Object(o.jsx)("p",{style:{color:"red"},children:"lastname must be greater then 5"}):null,Object(o.jsx)("input",{type:"text",placeholder:"Username...",value:t.username,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{username:e.target.value}))}}),b.usernameValidate?Object(o.jsx)("p",{style:{color:"red"},children:"usenme must be greater then 5"}):null]}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("button",{disabled:0===r,onClick:function(){s((function(e){return e-1}))},children:"Prev"}),Object(o.jsx)("button",{onClick:function(){if(t.username.length>=3&&t.firstName.length>=3&&t.lastName.length>=3)s((function(e){return e+1}));else{if(t.firstName.length<3)return console.log(1),void d(Object(i.a)(Object(i.a)({},b),{},{firstNameValidate:!0}));if(t.lastName.length<3)return console.log(2),void d(Object(i.a)(Object(i.a)({},b),{},{lastNameValidate:!0}));t.username.length<3&&(console.log(3),d(Object(i.a)(Object(i.a)({},b),{},{usernameValidate:!0})))}},children:r===c.length-1?"Submit":"Next"})]})]})};var b=function(e){var t=e.formData,a=e.setFormData,n=e.page,r=e.setPage,s=e.FormTitles;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"other-info-container",children:[Object(o.jsx)("input",{required:!0,type:"text",placeholder:"Nationality...",value:t.nationality,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{nationality:e.target.value}))}}),Object(o.jsx)("input",{required:!0,type:"text",placeholder:"Other...",value:t.other,onChange:function(e){a(Object(i.a)(Object(i.a)({},t),{},{other:e.target.value}))}})]}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("button",{disabled:0==n,onClick:function(){r((function(e){return e-1}))},children:"Prev"}),Object(o.jsx)("button",{onClick:function(){n===s.length-1?(alert("FORM SUBMITTED"),console.log(t)):r((function(e){return e+1}))},children:n===s.length-1?"Submit":"Next"})]})]})};var d=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({email:"",password:"",confirmPassword:"",firstName:"",lastName:"",username:"",nationality:"",other:""}),c=Object(l.a)(s,2),i=c[0],d=c[1],m=["Sign Up","Personal Info","Other"];return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("div",{className:"progressbar",children:Object(o.jsx)("div",{style:{width:0===a?"33.3%":1==a?"66.6%":"100%"}})}),Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{children:m[a]})}),Object(o.jsx)("div",{className:"body",children:0===a?Object(o.jsx)(j,{FormTitles:m,page:a,setPage:r,formData:i,setFormData:d}):1===a?Object(o.jsx)(u,{FormTitles:m,page:a,setPage:r,formData:i,setFormData:d}):Object(o.jsx)(b,{FormTitles:m,page:a,setPage:r,formData:i,setFormData:d})})]})]})};var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{})})};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.cca5c9ed.chunk.js.map