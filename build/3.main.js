/*! 2019-06-14 15:54:23 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1525:function(t,e,n){"use strict";n.r(e),function(t){var o,r=n(168),i=n(1529),a=n(1557),c=n(1543),s=(n(169),n(0)),u=n(1568),l=n.n(u),f=(n(1569),n(1571)),p=n(1530);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,n,o,r,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(o,r)}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var b=window.require("fs"),S=window.require("path"),g=window.require("child_process").exec,P=window.require("electron").remote,_=c.a.TextArea;var O=Object(p.a)()(o=function(e){function n(t){var e,o,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,r=w(n).call(this,t),(e=!r||"object"!==d(r)&&"function"!=typeof r?v(o):r).testSetting=function(){e.userPath||(a.a.info("\u8bf7\u5148\u914d\u7f6e\u60a8\u7684\u4e2a\u4eba\u7528\u6237\u76ee\u5f55\u8def\u5f84"),setTimeout(function(){e.props.history.push("/setting")},1e3))},e.closeModal=function(){return e.setState({isShowModal:!1})},e.showModal=function(){return e.setState({isShowModal:!0})},e.savePwd=function(t){e.setState({sudo_pswd:t,isShowModal:!1}),localStorage.setItem("sudo_pswd",t)},e.readFile=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function a(t){h(i,o,r,a,c,"next",t)}function c(t){h(i,o,r,a,c,"throw",t)}a(void 0)})}}(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:l.a.pReadFile(e.store.hostPath).then(function(t){e.setState({content:t,type:"edit"})});case 1:case"end":return t.stop()}},t,this)})),e.onChange=function(t){e.setState({content:t.target.value})},e.updateInfo=function(t){e.setState({type:"info",info:e.state.info+t+"\r\n"})},e.onSaveFile=function(){var t=e.state,n=t.content,o=t.sudo_pswd,r=S.join(e.userPath,"tmp.txt");if(e.setState({status:""}),"string"==typeof n){var i=v(v(e)),c=v(v(e)).hostPath;l.a.pWriteFile(r,n).then(function(){return o?["echo '".concat(o,"' | sudo -S chmod 777 ").concat(c),'cat "'.concat(r,'" > ').concat(c),"echo '".concat(o,"' | sudo -S chmod 644 ").concat(c)].join(" && "):['cat "'.concat(r,'" > ').concat(c),"rm -rf ".concat(r)].join(" && ")}).then(function(t){g(t,function(t,e,n){if(!t)return a.a.success("\u6587\u4ef6\u4fdd\u5b58\u6210\u529f"),void i.setState({status:"success"});var r;!o||(r=(r=e+n).toLowerCase(),["Permission denied","incorrect password","Password:Sorry, try again."].find(function(t){return r.includes(t.toLowerCase())}))?i.showModal():a.a.error(t)})}).catch(function(t){e.updateInfo(t.toString())})}else a.a.error("")},e.onRestart=function(){var t=e.state,n=t.path,o=t.content;b.writeFile(n,o,"utf8",function(t){if(t)return e.updateInfo(t),void a.a.error("\u6587\u4ef6\u4fdd\u5b58\u9519\u8bef")})},e.state={content:"",info:"",type:"edit",sudo_pswd:localStorage.getItem("sudo_pswd")||"",isShowModal:!1,status:"success"},e.store=t.globalStore;var i=localStorage.getItem("setting");(i=i?JSON.parse(i):{}).hostPath;return e.userPath=P.app.getPath("home"),e.hostPath="/etc/hosts",e}var o,c,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(n,s["Component"]),o=n,(c=[{key:"componentDidMount",value:function(){this.testSetting(),this.readFile()}},{key:"render",value:function(){var e=this.state,n=e.content,o=e.type,a=e.info,c=e.isShowModal,s=e.status;return t.createElement("div",{className:"_2uXCZeHRVBa5iLTQPObXZM"},t.createElement("div",{style:{marginBottom:12}},t.createElement(i.a,{size:"small",onClick:this.readFile},"\u7f16\u8f91"),t.createElement(i.a,{type:"primary",size:"small",style:{marginLeft:12},onClick:this.onSaveFile},"\u4fdd\u5b58"),t.createElement("div",{className:"g-sm-info"},"\u5982\u6709\u9519\u8bef\u8bf7\u68c0\u67e5 setting \u9875\u9762\u547d\u4ee4\u914d\u7f6e\u662f\u5426\u6b63\u786e"),t.createElement("div",{style:{color:{success:"#52c41a",error:"#f5222d"}[s],fontSize:"16px",height:32},className:"g-fr"},"success"===s&&t.createElement(r.a,{type:"check-circle"}),"error"===s&&t.createElement(r.a,{type:"close-circle"}))),"edit"===o?t.createElement(_,{className:"_1X2bdle11X1PmjtSqZw65s",onChange:this.onChange,value:n,onBlur:this.onBlur}):t.createElement(_,{className:"_1X2bdle11X1PmjtSqZw65s",value:a}),c&&t.createElement(f.a,{saveData:this.savePwd,onCancel:this.closeModal}))}}])&&y(o.prototype,c),u&&y(o,u),n}())||o;e.default=O}.call(this,n(0))},1530:function(t,e,n){"use strict";var o=n(1564),r=n(169),i=n(171),a=Object.keys(i.a);e.a=function(){var t=Array.prototype.slice.call(arguments);return t.length>0&&(a=t),function(t){return Object(o.a)(r.b.apply(null,a)(Object(r.c)(t)))}}},1568:function(t,e,n){"use strict";(function(t){var n=window.require("fs"),o=window.require("crypto"),r=window.require("md5-file");e.getUserHome=function(){return t.env["win32"===t.platform?"USERPROFILE":"HOME"]};var i=e.isFile=function(t){try{if(n.statSync(t).isFile())return!0}catch(t){}return!1};e.isDirectory=function(t){try{if(n.statSync(t).isDirectory())return!0}catch(t){}return!1};var a=e.writeFile=function(t,e,a){var c=o.createHash("md5").update(e).digest("hex");i(t)&&r.sync(t)===c?a():n.writeFile(t,e,"utf-8",a)};e.pWriteFile=function(t,e){return new Promise(function(n,o){a(t,e,function(t,e){return t?o(t):n(e)})})};var c=e.readFile=function(t,e){i(t)?n.readFile(t,"utf-8",e):e(null,"")};e.pReadFile=function(t){return new Promise(function(e,n){c(t,function(t,o){return t?n(t):e(o)})})}}).call(this,n(99))},1569:function(t,e,n){t.exports={info:"_35Wj-GSNfjaRiENC1iN281",wrap:"_2uXCZeHRVBa5iLTQPObXZM",textarea:"_1X2bdle11X1PmjtSqZw65s"}},1571:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n(1627),r=n(1543),i=n(0),a=n.n(i);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=u(this,(t=l(e)).call.apply(t,[this].concat(r)))).state={sudo_pswd:""},n.onChange=function(t){n.setState({sudo_pswd:t.target.value})},n.onEnter=function(){n.props.saveData(n.state.sudo_pswd)},n}var n,c,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,i["Component"]),n=e,(c=[{key:"render",value:function(){var t=this;return a.a.createElement(o.a,{title:"\u8bf7\u8f93\u5165\u7ba1\u7406\u5458\u5bc6\u7801",visible:!0,width:300,onOk:function(){t.props.saveData(t.state.sudo_pswd)},onCancel:this.props.onCancel},a.a.createElement(r.a,{type:"password",style:{width:"100%"},onPressEnter:this.onEnter,onChange:this.onChange}))}}])&&s(n.prototype,c),p&&s(n,p),e}()}}]);