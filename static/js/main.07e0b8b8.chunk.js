(this.webpackJsonpusense_password=this.webpackJsonpusense_password||[]).push([[0],{13:function(e,t,n){e.exports={container:"Header_container__3E9Zj",header:"Header_header__yfRMG",header__container:"Header_header__container__2RXC2",header__link:"Header_header__link__3KLBp",img:"Header_img__3KyQK"}},19:function(e,t,n){e.exports={container:"CreatePassword_container__1NppI",pass__container:"CreatePassword_pass__container__7UloS",img__container:"CreatePassword_img__container__1ELQy",img:"CreatePassword_img__16G5-"}},20:function(e,t,n){e.exports={container:"Section_container__3Rm-I",strength:"Section_strength__2LF4S"}},25:function(e,t,n){e.exports={container:"PageNotFound_container__1JtSR",subcontainer:"PageNotFound_subcontainer__1F3u1",page_not_found:"PageNotFound_page_not_found__2jDgx"}},27:function(e,t,n){e.exports={container:"input_container__1Evsr",input:"input_input__3-u4b",pass:"input_pass__3k2BG"}},28:function(e,t,n){e.exports={copy_button:"CopyButton_copy_button__2xI9h"}},34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(9),c=n(29),r=n.n(c),o=(n(34),n(3)),i=(n(35),n(19)),j=n.n(i),d=n(5),b=n(20),l=n.n(b),u=n(2),_=function(e){var t=e.strength,n=function(e){return"lessEigth"===t||"easy"===t&&1===e?"#f7b4bb":"medium"===t&&3!==e?"#fddf8e":"strong"===t&&e?"#b1dd9e":"#cdcdcd"};return Object(u.jsxs)("div",{className:l.a.container,children:[Object(u.jsx)("div",{className:l.a.strength,style:{background:n(1)}}),Object(u.jsx)("div",{className:l.a.strength,style:{background:n(2)}}),Object(u.jsx)("div",{className:l.a.strength,style:{background:n(3)}})]})},h=n(27),m=n.n(h),x=n(28),O=n.n(x),p=function(e){var t=e.label,n=e.value;return Object(u.jsx)("div",{className:O.a.container,children:Object(u.jsx)("button",{type:"button",className:O.a.copy_button,onClick:function(){return navigator.clipboard.writeText("".concat(n))},children:t})})},g=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),r=Object(d.a)(c,2),o=r[0],i=r[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:m.a.container,children:[Object(u.jsx)("input",{className:m.a.input,type:"text",placeholder:"Password",value:n,onChange:function(e){var t=e.target.value.trim();s(t),function(e){0===e.length&&i(""),e.length<8?i("lessEigth"):e.length>=8&&/^\d+$/.test(e)||e.length>=8&&/^[A-Za-z]+$/.test(e)?i("easy"):e.length>=8&&/[a-zA-Z]/.test(e)&&/[0-9]/.test(e)&&/[!@#$%^&{}+,.*_-]/.test(e)?i("strong"):i("medium")}(t)},maxLength:32}),Object(u.jsx)(p,{label:"Copy",value:n})]}),Object(u.jsx)(_,{strength:o})]})},f=n.p+"static/media/lock.dc76f30c.svg",v=function(){var e=j.a.container,t=j.a.pass__container;return Object(u.jsx)("div",{className:e,children:Object(u.jsxs)("div",{className:t,children:[Object(u.jsx)("div",{className:j.a.img__container,children:Object(u.jsx)("img",{className:j.a.img,src:f,alt:"Create own password"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Create own password:"}),Object(u.jsx)(g,{})]})]})})},N=n(6),k=n.n(N),w=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(16),r=Object(d.a)(c,2),o=r[0],i=r[1],j=Object(a.useState)(!0),b=Object(d.a)(j,2),l=b[0],_=b[1],h=Object(a.useState)(!0),m=Object(d.a)(h,2),x=m[0],O=m[1],g=Object(a.useState)(!0),f=Object(d.a)(g,2),v=f[0],N=f[1],w=Object(a.useState)(!0),y=Object(d.a)(w,2),C=y[0],P=y[1];console.log(O);var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t+1-e)+e)},G=function(){var e="!@#$%^&{}+,.*_-";return e[S(0,e.length-1)]},F=function(){for(var e="",t=0;t<o;t++){var n=S(0,3);x&&0===n?e+=String.fromCharCode(S(97,122)):l&&1===n?e+=String.fromCharCode(S(65,90)):C&&2===n?e+=G():v&&3===n?e+=S(0,9):t--}s(e)};return Object(a.useEffect)((function(){F()}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:k.a.main_container,children:[Object(u.jsx)("div",{className:k.a.container,children:Object(u.jsxs)("div",{className:k.a.section,children:[Object(u.jsxs)("div",{className:k.a.option,children:[Object(u.jsx)("p",{children:"Password Length"}),Object(u.jsx)("input",{type:"number",name:"length",className:k.a.number,min:8,max:32,defaultValue:o,onChange:function(e){return i(Number(e.target.value))}})]}),Object(u.jsxs)("div",{className:k.a.option,children:[Object(u.jsx)("p",{children:"Upper Case"}),Object(u.jsx)("input",{type:"checkbox",name:"uppercase",className:k.a.checkbox,defaultChecked:l,onChange:function(e){return _(e.target.checked)}})]}),Object(u.jsxs)("div",{className:k.a.option,children:[Object(u.jsx)("p",{children:"Numbers"}),Object(u.jsx)("input",{type:"checkbox",name:"numbers",className:k.a.checkbox,defaultChecked:v,onChange:function(e){return N(e.target.checked)}})]}),Object(u.jsxs)("div",{className:k.a.option,children:[Object(u.jsx)("p",{children:"Symbols"}),Object(u.jsx)("input",{type:"checkbox",name:"symbols",className:k.a.checkbox,defaultChecked:C,onChange:function(e){return P(e.target.checked)}})]}),Object(u.jsxs)("div",{className:k.a.buttons,children:[Object(u.jsx)("button",{type:"submit",className:k.a.submit,onClick:F,children:"Generate New Password"}),Object(u.jsx)(p,{label:"Copy",value:n})]})]})}),Object(u.jsx)("button",{type:"button",className:k.a.password,onClick:function(){return navigator.clipboard.writeText(n)},children:Object(u.jsx)("p",{children:n})})]})})},y=n(25),C=n.n(y),P=function(){return Object(u.jsx)("div",{className:C.a.container,children:Object(u.jsxs)("div",{className:C.a.subcontainer,children:[Object(u.jsx)("h2",{children:"Ooops, looks like a ghost!"}),Object(u.jsxs)("h3",{children:["The page you are looking for can't be found.",Object(u.jsx)("br",{}),"Go home by \xa0",Object(u.jsx)(s.b,{to:"/",className:C.a.page_not_found,children:"Clicking here!"})]})]})})},S=n(13),G=n.n(S),F=n.p+"static/media/PassLogo.1d70b899.svg",E=function(){var e=G.a.container,t=G.a.header,n=G.a.header__container,a=G.a.header__link;return Object(u.jsx)("div",{className:e,children:Object(u.jsx)("header",{className:t,children:Object(u.jsxs)("div",{className:n,children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("img",{className:G.a.img,src:F,alt:"Logo"})}),Object(u.jsx)(s.b,{to:"/",className:a,children:Object(u.jsx)("h2",{children:"Home"})}),Object(u.jsx)(s.b,{to:"/generator",className:a,children:Object(u.jsx)("h2",{children:"Generate"})})]})})})},H=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(E,{}),Object(u.jsx)("div",{className:"starter",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",element:Object(u.jsx)(v,{})}),Object(u.jsx)(o.b,{path:"/home",element:Object(u.jsx)(o.a,{to:"/",replace:!0})}),Object(u.jsx)(o.b,{path:"/generator",element:Object(u.jsx)(w,{})}),Object(u.jsx)(o.b,{path:"*",element:Object(u.jsx)(P,{})})]})})]})};r.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(H,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={main_container:"GeneratePassword_main_container__2QWPp",password:"GeneratePassword_password__3H_Dg",container:"GeneratePassword_container__2FjB7",option:"GeneratePassword_option__jFscj",number:"GeneratePassword_number__33iCb",buttons:"GeneratePassword_buttons__2MU1X",submit:"GeneratePassword_submit__1oFyr",checkbox:"GeneratePassword_checkbox__3qaZf"}}},[[38,1,2]]]);
//# sourceMappingURL=main.07e0b8b8.chunk.js.map