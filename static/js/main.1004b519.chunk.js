(this["webpackJsonpgoit-react-hw-03-template"]=this["webpackJsonpgoit-react-hw-03-template"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__3qzQ-",label:"ContactForm_label__qIqeh",input:"ContactForm_input__2_x_o",button:"ContactForm_button__Hcy4H"}},17:function(t,e,n){t.exports={list:"ContactList_list__26ut-",item:"ContactList_item__aMoL2",button:"ContactList_button__bzAdC"}},22:function(t,e,n){t.exports={label:"Filter_label__-yub7",input:"Filter_input__3YOa5"}},36:function(t,e,n){t.exports={container:"Container_container__fVxwk"}},49:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),a=n.n(r),o=n(7),u=n.n(o),i=n(6),b=(n(48),n(49),n(8)),s=(n(26),n(36)),l=n.n(s);var j=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("div",{className:l.a.container,children:[e&&Object(c.jsx)("h2",{children:e}),n]})},f=n(14),h=function(t){return t.phonebook.contacts},O=function(t){return t.phonebook.filter},d=Object(f.a)([h,O],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),p=n(2),m=Object(p.b)("phonebook/fetchContactsRequest"),x=Object(p.b)("phonebook/fetchContactsSuccess"),v=Object(p.b)("phonebook/fetchContactsError"),C=Object(p.b)("phonebook/addContactRequest"),_=Object(p.b)("phonebook/addContactSuccess"),y=Object(p.b)("phonebook/addContactError"),w=Object(p.b)("phonebook/deleteContactRequest"),k=Object(p.b)("phonebook/deleteContactSuccess"),g=Object(p.b)("phonebook/deleteContactError"),N=Object(p.b)("phonebook/changeFilter"),F=n(22),L=n.n(F);var S=function(){var t=Object(i.c)(O),e=Object(i.b)();return Object(c.jsxs)("label",{className:L.a.label,children:["Find contact by name",Object(c.jsx)("input",{type:"text",value:t,onChange:function(t){return e(N(t.target.value))},placeholder:"Enter name for search",className:L.a.input})]})},E=n(24),q=n(11),P=n.n(q),T=n(23),R=n.n(T),z=n(37),A=n(13),D=n.n(A);D.a.defaults.baseURL="http://localhost:4040/";var I=n(10),B=n.n(I);function H(){var t=Object(r.useState)(""),e=Object(E.a)(t,2),n=e[0],a=e[1],o=Object(r.useState)(""),u=Object(E.a)(o,2),s=u[0],l=u[1],j=Object(i.b)(),f=Object(i.c)(h),O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},d=function(){a(""),l("")};return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),!function(t){return f.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(n)?!function(t){return f.find((function(e){return e.number===t}))}(s)?!0===function(t){if(t.search(/^[A-Za-z]+$/))return!0}(n)?b.b.error("Only letters allowed"):!0===function(t){if(t.search(/^[-+]?[0-9]+$/))return!0}(s)?b.b.error("Only numbers allowed"):!function(t,e){return""===t.trim()||""===e.trim()}(n,s)?j(function(t,e){return function(n){var c={name:t,number:e};n(C()),D.a.post("/contacts",c).then((function(t){var e=t.data;return n(_(e))})).catch((function(t){return n(y(t))}))}}(n,s)):b.b.error("Some fields are empty"):b.b.warning("This number is already exist"):b.b.warning("This name is already exist"),d()},className:B.a.form,children:[Object(c.jsxs)("label",{className:B.a.label,children:["Name",Object(c.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:n,onChange:O,className:B.a.input,onKeyPress:function(t){var e=(t=t||window.event).which?t.which:t.keyCode;return!(e<65||e>90)||!(e<97||e>123)||32===e||b.b.warning("Please input letters only")}})]}),Object(c.jsxs)("label",{className:B.a.label,children:["Number",Object(c.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:s,onChange:O,className:B.a.input,onKeyPress:function(t){var e=(t=t||window.event).which?t.which:t.keyCode;return!(e>31&&(e<48||e>57))||b.b.warning("Please input numbers only")}})]}),Object(c.jsx)("button",{type:"submit",className:B.a.button,children:"Add contact"})]})}H.propTyper={onSubmit:P.a.func.isRequired};var J=H,K=n(17),M=n.n(K);var $=function(){var t=Object(i.b)(),e=Object(i.c)(d);return Object(r.useEffect)((function(){t(function(){var t=Object(z.a)(R.a.mark((function t(e){var n,c;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(m()),t.prev=1,t.next=4,D.a.get("/contacts");case 4:n=t.sent,c=n.data,e(x(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(v(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(c.jsxs)(c.Fragment,{children:[0===e.length&&Object(c.jsx)("p",{children:" No contacts "}),Object(c.jsx)("ul",{className:M.a.list,children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(c.jsxs)("li",{className:M.a.item,children:[Object(c.jsxs)("p",{children:[r,": ",a]}),Object(c.jsx)("button",{type:"button",className:M.a.button,onClick:function(){return t((e=n,function(t){t(w()),D.a.delete("/contacts/".concat(e)).then((function(){return t(k(e))})).catch((function(e){return t(g(e))}))}));var e},children:"Delete"})]},n)}))})]})};var Q,U,V,Y=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)(j,{children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(J,{})]}),Object(c.jsxs)(j,{title:"Contacts",children:[Object(c.jsx)(S,{}),Object(c.jsx)($,{})]}),Object(c.jsx)(b.a,{autoClose:3e3})]})},Z=n(16),G=n(38),W=n.n(G),X=n(3),tt=n(5),et=Object(p.c)([],(Q={},Object(X.a)(Q,x,(function(t,e){return e.payload})),Object(X.a)(Q,_,(function(t,e){var n=e.payload;return[].concat(Object(Z.a)(t),[n])})),Object(X.a)(Q,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Q)),nt=Object(p.c)("",Object(X.a)({},N,(function(t,e){return e.payload}))),ct=Object(p.c)(!1,(U={},Object(X.a)(U,m,(function(){return!0})),Object(X.a)(U,x,(function(){return!1})),Object(X.a)(U,v,(function(){return!1})),Object(X.a)(U,C,(function(){return!0})),Object(X.a)(U,_,(function(){return!1})),Object(X.a)(U,y,(function(){return!1})),Object(X.a)(U,w,(function(){return!0})),Object(X.a)(U,k,(function(){return!1})),Object(X.a)(U,g,(function(){return!1})),U)),rt=Object(p.c)(null,(V={},Object(X.a)(V,v,(function(t,e){return e.payload})),Object(X.a)(V,y,(function(t,e){return e.payload})),Object(X.a)(V,g,(function(t,e){return e.payload})),V)),at=Object(tt.c)({contacts:et,filter:nt,loading:ct,error:rt}),ot=[].concat(Object(Z.a)(Object(p.d)({serializableCheck:!1})),[W.a]),ut=Object(p.a)({reducer:{phonebook:at},middleware:ot,devTools:!1}),it=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(i.a,{store:ut,children:Object(c.jsx)(Y,{})})}),document.getElementById("root")),it()}},[[69,1,2]]]);
//# sourceMappingURL=main.1004b519.chunk.js.map