"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{4009:function(n,e,r){r.d(e,{G:function(){return l},S:function(){return s}});var t,o,c=r(168),i=r(3360),a=r(9202),u=r(241),s=(0,a.Z)(i.Z)(t||(t=(0,c.Z)(["\n    background-color: ",";\n    border-color: ",";\n    border-style: ",";\n    color: ",";\n    &:hover,\n    &:focus{\n      background-color: ",";\n      border-color: ",";\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),l=(0,a.Z)(u.Z)(o||(o=(0,c.Z)(["\n    width: ","px;\n    margin: 0 auto;\n    border: ",";\n    border-color: ",";\n    border-radius: ",";\n    padding: ","px;\n    background-color: ",";\n    opacity: 0.9;\n   \n"])),(function(n){return n.theme.space[9]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.background}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.background}))},6960:function(n,e,r){r.d(e,{V:function(){return a}});var t,o=r(168),c=r(9202).Z.h1(t||(t=(0,o.Z)(["\nfont-size: ",";\nfont-weight: 500;\nletter-spacing: 0.8em;\ncolor: ",";\ntext-transform: uppercase;\nmargin-bottom: 40px;\n"])),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.colors.white})),i=r(3329),a=function(n){var e=n.title;return(0,i.jsx)(c,{children:e})}},3853:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,o=r(6960),c=r(168),i=r(9202).Z.section(t||(t=(0,c.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n    background-image: linear-gradient(rgba(47, 48, 58, 0.4), rgba(47, 48, 58, 0.4)),\n    url('https://cdn.pixabay.com/photo/2018/11/29/21/51/social-media-3846597_1280.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 360px;\n    margin-bottom: ","px; \n"])),(function(n){return n.theme.space[5]})),a=r(3329),u=function(){return(0,a.jsx)(i,{children:(0,a.jsx)(o.V,{title:"Phonebook"})})},s=r(9434),l=r(3504),d=r(6871),m=r(9869),h=r(8104),f=r(4064),b=r(5705),p=r(241),g=r(6863),x=r(4009),k=r(9085),v=r(7573),Z=/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,j=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,y=function(){var n=(0,s.v9)(h.kk),e=(0,s.I0)(),r=(0,s.v9)(h.Vc),t=(0,s.v9)(m.M7);return(0,a.jsx)(a.Fragment,{children:r?(0,a.jsx)(d.Fg,{to:"/contacts"}):(0,a.jsxs)(a.Fragment,{children:[!t&&(0,a.jsxs)(v.v,{children:["To start ",(0,a.jsx)(l.OL,{to:"/login",children:"Log in to your account"})," or ",(0,a.jsx)(l.OL,{to:"register",children:"Register"})]}),(0,a.jsx)(b.J9,{initialValues:{name:"",number:""},validationSchema:g.Ry({name:g.Z_().matches(j,"Honestly, to add new contact u need to login\ud83d\ude08").required("Required"),number:g.Z_().matches(Z,"Phone number is not valid").required("Required")}),onSubmit:function(r,t){var o=r.name,c=r.number,i=t.resetForm;if(n.map((function(n){return n.name})).includes(o))k.Am.error("".concat(o," is already in contacts"));else{var a={name:o,number:c};e((0,f.xf)(a))}i()},children:function(n){var e=n.handleSubmit,r=n.handleChange,t=n.values,o=n.errors;n.isInvalid;return(0,a.jsxs)(x.G,{noValidate:!0,onSubmit:e,children:[(0,a.jsxs)(p.Z.Group,{className:"mb-3",controlId:"formContactName",children:[(0,a.jsx)(p.Z.Label,{children:"Name"}),(0,a.jsx)(p.Z.Control,{type:"text",name:"name",placeholder:"Samantha Johns",value:t.name,onChange:r,isInvalid:!!o.name}),(0,a.jsx)(p.Z.Control.Feedback,{type:"invalid",children:o.name})]}),(0,a.jsxs)(p.Z.Group,{className:"mb-3",controlId:"formContactNumber",children:[(0,a.jsx)(p.Z.Label,{children:"Number"}),(0,a.jsx)(p.Z.Control,{type:"tel",name:"number",placeholder:"152-65-76",value:t.number,onChange:r,isInvalid:!!o.number}),(0,a.jsx)(p.Z.Control.Feedback,{type:"invalid",children:o.number})]}),(0,a.jsx)(x.S,{variant:"primary",type:"submit",children:"Add contact"})]})}})]})})},w=r(7022),C=function(){return(0,a.jsxs)(w.Z,{children:[(0,a.jsx)(u,{}),(0,a.jsx)(y,{})]})}},7573:function(n,e,r){r.d(e,{P:function(){return s},v:function(){return u}});var t,o,c=r(168),i=r(9202),a=r(7022),u=i.Z.p(t||(t=(0,c.Z)(["\nwidth: fit-content;\nmargin: 0 auto;\nfont-size: ",";\nfont-weight: ",";\ncolor: ",";\nbackground-color: ",";\nmargin-bottom: ","px;\nborder-radius: ",";\nopacity: 0.9;\n"])),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.title}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.normal})),s=(0,i.Z)(a.Z)(o||(o=(0,c.Z)(["\n    padding-top: ","px;\n    padding-bottom:  ","px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    background-image: url('https://cdn.pixabay.com/photo/2017/12/01/08/52/feedback-2990424_1280.jpg');"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[6]}))},8104:function(n,e,r){r.d(e,{Jr:function(){return i},Vc:function(){return o},kk:function(){return t},zK:function(){return c}});var t=function(n){return n.phonebook.items.contacts},o=function(n){return n.phonebook.items.isLoading},c=function(n){return n.phonebook.filter.value},i=function(n){var e=t(n),r=c(n);return e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}))}}}]);
//# sourceMappingURL=853.eefe77db.chunk.js.map