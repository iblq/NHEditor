/*! 2019-06-23 14:45:32 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7,15],{652:function(t,e,n){"use strict";n.r(e);var o=n(701),r=n(673),i=n(1),a=n.n(i);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.default=function(t){var e=t.saveData,n=t.onCancel,u=c(Object(i.useState)(""),2),s=u[0],f=u[1];return a.a.createElement(o.a,{title:"\u8bf7\u8f93\u5165\u7ba1\u7406\u5458\u5bc6\u7801",visible:!0,width:300,onOk:function(){e(s)},onCancel:n},a.a.createElement(r.a,{type:"password",style:{width:"100%"},onPressEnter:function(){e(s)},onChange:function(t){f(t.target.value)}}))}},657:function(t,e,n){"use strict";n.r(e),function(t){var o,r=n(47),i=n(664),a=n(678),c=n(1),u=n(172),s=n(702),f=n.n(s),l=n(652),p=n(680),h=n(705);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e,n,o,r,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(o,r)}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var g=window.require("fs"),S=window.require("path"),P=window.require("child_process").exec,O=window.require("electron").remote;var E=Object(u.a)()(o=function(e){function n(t){var e,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,r=v(n).call(this,t),(e=!r||"object"!==y(r)&&"function"!=typeof r?w(o):r).testSetting=function(){e.userPath||(a.a.info("\u8bf7\u5148\u914d\u7f6e\u60a8\u7684\u4e2a\u4eba\u7528\u6237\u76ee\u5f55\u8def\u5f84"),setTimeout(function(){e.props.history.push("/setting")},1e3))},e.closeModal=function(){return e.setState({isShowModal:!1})},e.showModal=function(){return e.setState({isShowModal:!0})},e.savePwd=function(t){e.setState({sudo_pswd:t,isShowModal:!1}),localStorage.setItem("sudo_pswd",t)},e.readFile=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function a(t){d(i,o,r,a,c,"next",t)}function c(t){d(i,o,r,a,c,"throw",t)}a(void 0)})}}(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:f.a.pReadFile(e.store.hostPath).then(function(t){e.setState({content:t,type:"edit"})});case 1:case"end":return t.stop()}},t)})),e.onChange=function(t){e.setState({content:t})},e.updateInfo=function(t){e.setState({type:"info",info:e.state.info+t+"\r\n"})},e.onSaveFile=function(){var t=e.state,n=t.content,o=t.sudo_pswd,r=S.join(e.userPath,"tmp.txt");if(e.setState({status:""}),"string"==typeof n){var i=w(e),c=w(e).hostPath;f.a.pWriteFile(r,n).then(function(){return o?["echo '".concat(o,"' | sudo -S chmod 777 ").concat(c),'cat "'.concat(r,'" > ').concat(c),"echo '".concat(o,"' | sudo -S chmod 644 ").concat(c)].join(" && "):['cat "'.concat(r,'" > ').concat(c),"rm -rf ".concat(r)].join(" && ")}).then(function(t){P(t,function(t,e,n){if(!t)return a.a.success("\u6587\u4ef6\u4fdd\u5b58\u6210\u529f"),void i.setState({status:"success"});var r;!o||(r=(r=e+n).toLowerCase(),["Permission denied","incorrect password","Password:Sorry, try again."].find(function(t){return r.includes(t.toLowerCase())}))?i.showModal():a.a.error(t)})}).catch(function(t){e.updateInfo(t.toString())})}else a.a.error("")},e.onRestart=function(){var t=e.state,n=t.path,o=t.content;g.writeFile(n,o,"utf8",function(t){if(t)return e.updateInfo(t),void a.a.error("\u6587\u4ef6\u4fdd\u5b58\u9519\u8bef")})},e.state={content:"",sudo_pswd:localStorage.getItem("sudo_pswd")||"",isShowModal:!1,status:"success"},e.store=t.globalStore;var i=localStorage.getItem("setting");(i=i?JSON.parse(i):{}).hostPath;return e.userPath=O.app.getPath("home"),e.hostPath="/etc/hosts",e}var o,u,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(n,c["Component"]),o=n,(u=[{key:"componentDidMount",value:function(){this.testSetting(),this.readFile()}},{key:"render",value:function(){var e=this.state,n=e.content,o=e.isShowModal,a=e.status;return t.createElement(t.Fragment,null,t.createElement("div",{style:{marginBottom:12}},t.createElement(i.a,{size:"small",onClick:this.readFile},"\u7f16\u8f91"),t.createElement(i.a,{type:"primary",size:"small",style:{marginLeft:12},onClick:this.onSaveFile},"\u4fdd\u5b58"),t.createElement("div",{className:"g-sm-info"},"\u5982\u6709\u9519\u8bef\u8bf7\u68c0\u67e5 setting \u9875\u9762\u547d\u4ee4\u914d\u7f6e\u662f\u5426\u6b63\u786e"),t.createElement("div",{style:{color:h.a[a],fontSize:"16px",height:32},className:"g-fr"},"success"===a&&t.createElement(r.a,{type:"check-circle"}),"error"===a&&t.createElement(r.a,{type:"close-circle"}))),t.createElement("div",{className:"g-content"},t.createElement(p.a,{value:n,options:{lineNumbers:!0,mode:"shell"},onChange:this.onChange}),o&&t.createElement(l.default,{saveData:this.savePwd,onCancel:this.closeModal})))}}])&&m(o.prototype,u),s&&m(o,s),n}())||o;e.default=E}.call(this,n(1))},680:function(t,e,n){"use strict";var o=n(667),r=n.n(o),i=(n(695),n(696),n(697),n(1)),a=n.n(i),c=n(681),u=n.n(c),s=n(0),f=n.n(s);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=h(this,(t=y(e)).call.apply(t,[this].concat(i)))).initCm=function(){var t=n.props,e=t.value,o=t.options;n.cm=r.a.fromTextArea(n.textRef,o),n.cm.on("change",function(){return n._onChange()}),n.cm.getDoc().setValue(e||"")},n._onChange=function(){var t=n.cm.getDoc().getValue();n.props.onChange(t)},n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,a.a.Component),n=e,(o=[{key:"componentDidMount",value:function(){this.initCm()}},{key:"componentDidUpdate",value:function(t){this.props.value&&!t.value&&this.cm.getDoc().setValue(this.props.value||"")}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:u.a.textarea},a.a.createElement("textarea",{ref:function(e){return t.textRef=e},onChange:function(){}}))}}])&&p(n.prototype,o),i&&p(n,i),e}();m.propTypes={onChange:f.a.func.isRequired,options:f.a.object.isRequired,value:f.a.string},e.a=m},681:function(t,e,n){t.exports={textarea:"_1jDF2mxCHOgLFbxo0k05qs"}},702:function(t,e,n){(function(t){var n=window.require("fs");e.getUserHome=function(){return t.env["win32"===t.platform?"USERPROFILE":"HOME"]};var o=e.isFile=function(t){try{if(n.statSync(t).isFile())return!0}catch(t){}return!1};e.isDirectory=function(t){try{if(n.statSync(t).isDirectory())return!0}catch(t){}return!1};var r=e.writeFile=function(t,e,r){o(t)?r():n.writeFile(t,e,"utf-8",r)};e.pWriteFile=function(t,e){return new Promise(function(n,o){r(t,e,function(t,e){return t?o(t):n(e)})})};var i=e.readFile=function(t,e){o(t)?n.readFile(t,"utf-8",e):e(null,"")};e.pReadFile=function(t){return new Promise(function(e,n){i(t,function(t,o){return t?n(t):e(o)})})}}).call(this,n(128))},705:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={success:"#52c41a",error:"#f5222d"}}}]);