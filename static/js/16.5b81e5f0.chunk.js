(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{403:function(e,n,t){"use strict";var a=t(99),i=t(100);n.a={setUserInfo:function(e){return Object(i.b)(e),{type:a.a.SET_USER_INFO,data:e}}}},642:function(e,n,t){var a=t(643);"string"===typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(40)(a,i);a.locals&&(e.exports=a.locals)},643:function(e,n,t){(n=e.exports=t(39)(!1)).push([e.i,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.Login__main__1F5GY {\n  width: 368px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 576px) {\n  .Login__main__1F5GY {\n    width: 95%;\n  }\n}\n.Login__main__1F5GY .Login__icon__86xRR {\n  margin-left: 16px;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.2);\n  vertical-align: middle;\n  cursor: pointer;\n  -webkit-transition: color 0.3s;\n  transition: color 0.3s;\n}\n.Login__main__1F5GY .Login__icon__86xRR:hover {\n  color: #1890ff;\n}\n.Login__main__1F5GY .Login__other__1eS4J {\n  margin-top: 24px;\n  line-height: 22px;\n  text-align: left;\n}\n.Login__main__1F5GY .Login__other__1eS4J .Login__register__ofKT2 {\n  float: right;\n  color: #1890ff;\n}\n",""]),n.locals={main:"Login__main__1F5GY",icon:"Login__icon__86xRR",other:"Login__other__1eS4J",register:"Login__register__ofKT2"}},689:function(e,n,t){"use strict";t.r(n);t(363);var a,i=t(295),o=(t(282),t(293)),r=(t(576),t(687)),s=t(84),l=t(85),c=t(88),u=t(86),m=t(89),g=(t(578),t(592)),_=t.n(g),f=t(0),d=t.n(f),h=t(51),p=t(403),b=t(642),w=t.n(b),L=_.a.UserName,v=_.a.Password,y=_.a.Submit,S=Object(h.b)(function(e){return{userInfo:e.userInfo}},function(e){return{setUserInfo:function(n){return e(p.a.setUserInfo(n))}}})(a=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).changeAutoLogin=function(e){t.setState({autoLogin:e.target.checked})},t.renderMessage=function(e){return d.a.createElement(r.a,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},t.onTabChange=function(e){t.setState({type:e})},t.onGetCaptcha=function(){return new Promise(function(e,n){t.loginForm.validateFields(["mobile"],{},function(e,t){e&&n(e)})})},t.handleSubmit=function(e,n){var a=t.props.setUserInfo;"account"===t.state.type?e||"yzf"===n.username&&"..."===n.password?e||(t.setState({submitting:!0}),setTimeout(function(){a(n.username)},1e3)):t.setState({notice:"\u8d26\u6237\u6216\u5bc6\u7801\u9519\u8bef\uff08yzf/...\uff09\uff01"}):e||(t.setState({submitting:!0}),a(n.mobile))},t.handleRegister=function(){o.a.warning("\u6b64\u529f\u80fd\u8fd8\u6ca1\u505a, \u8bf7\u52ff\u70b9\u51fb!!!")},t.state={type:"account",autoLogin:!0,notice:"",submitting:!1},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.type,a=n.autoLogin,o=n.notice,r=n.submitting,s={username:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7\uff01"}],password:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"}],mobile:[{required:!0,message:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01"},{pattern:/^1\d{10}$/,message:"\u624b\u673a\u53f7\u683c\u5f0f\u9519\u8bef\uff01"}]};return d.a.createElement("div",{className:w.a.main},d.a.createElement(_.a,{defaultActiveKey:t,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(n){e.loginForm=n}},this.state.notice&&this.renderMessage(o),d.a.createElement(L,{name:"username",autoComplete:"off",placeholder:"yzf",rules:s.username}),d.a.createElement(v,{name:"password",autoComplete:"off",placeholder:"...",rules:s.password,onPressEnter:function(){return e.loginForm.validateFields(e.handleSubmit)}}),d.a.createElement("div",null,d.a.createElement(i.a,{checked:a,onChange:this.changeAutoLogin},"\u81ea\u52a8\u767b\u5f55"),d.a.createElement("span",{className:"link-button",onClick:this.handleRegister,style:{float:"right"}},"\u5fd8\u8bb0\u5bc6\u7801")),d.a.createElement(y,{loading:r},"\u767b\u5f55"),d.a.createElement("div",{className:w.a.other},d.a.createElement("div",{className:w.a.register,onClick:this.handleRegister},"\u6ce8\u518c\u8d26\u6237"))))}}]),n}(f.Component))||a;n.default=S}}]);
//# sourceMappingURL=16.5b81e5f0.chunk.js.map