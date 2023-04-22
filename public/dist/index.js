(()=>{"use strict";var r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])},r(t,n)};function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function n(r,t){var n,e,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(n=1,e&&(o=2&c[0]?e.return:c[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,c[1])).done)return o;switch(e=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,e=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(r,u)}catch(r){c=[6,r],e=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}function e(r){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&r[t],e=0;if(n)return n.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&e>=r.length&&(r=void 0),{value:r&&r[e++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(r,t){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var e,o,i=n.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)u.push(e.value)}catch(r){o={error:r}}finally{try{e&&!e.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function i(r,t,n){if(n||2===arguments.length)for(var e,o=0,i=t.length;o<i;o++)!e&&o in t||(e||(e=Array.prototype.slice.call(t,0,o)),e[o]=t[o]);return r.concat(e||Array.prototype.slice.call(t))}function u(r){return this instanceof u?(this.v=r,this):new u(r)}Object.create,Object.create;var c=function(r){return r&&"number"==typeof r.length&&"function"!=typeof r};function a(r){return"function"==typeof r}var s,l=((s=function(r){var t;t=this,Error.call(t),t.stack=(new Error).stack,this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}).prototype=Object.create(Error.prototype),s.prototype.constructor=s,s);function f(r,t){if(r){var n=r.indexOf(t);0<=n&&r.splice(n,1)}}var p=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return r.prototype.unsubscribe=function(){var r,t,n,u,c;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var f=e(s),p=f.next();!p.done;p=f.next())p.value.remove(this)}catch(t){r={error:t}}finally{try{p&&!p.done&&(t=f.return)&&t.call(f)}finally{if(r)throw r.error}}else s.remove(this);var h=this.initialTeardown;if(a(h))try{h()}catch(r){c=r instanceof l?r.errors:[r]}var y=this._finalizers;if(y){this._finalizers=null;try{for(var d=e(y),b=d.next();!b.done;b=d.next()){var m=b.value;try{v(m)}catch(r){c=null!=c?c:[],r instanceof l?c=i(i([],o(c)),o(r.errors)):c.push(r)}}}catch(r){n={error:r}}finally{try{b&&!b.done&&(u=d.return)&&u.call(d)}finally{if(n)throw n.error}}}if(c)throw new l(c)}},r.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)v(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&f(t,r)},r.prototype.remove=function(t){var n=this._finalizers;n&&f(n,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r}();function h(r){return r instanceof p||r&&"closed"in r&&a(r.remove)&&a(r.add)&&a(r.unsubscribe)}function v(r){a(r)?r():r.unsubscribe()}p.EMPTY;var y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},d={setTimeout:function(r,t){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];var u=d.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,i([r,t],o(n))):setTimeout.apply(void 0,i([r,t],o(n)))},clearTimeout:function(r){var t=d.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function b(r){d.setTimeout((function(){var t=y.onUnhandledError;if(!t)throw r;t(r)}))}function m(){}var w=x("C",void 0,void 0);function x(r,t,n){return{kind:r,value:t,error:n}}var g=null,_=function(r){function n(t){var n=r.call(this)||this;return n.isStopped=!1,t?(n.destination=t,h(t)&&t.add(n)):n.destination=j,n}return t(n,r),n.create=function(r,t,n){return new P(r,t,n)},n.prototype.next=function(r){this.isStopped?A(function(r){return x("N",r,void 0)}(r),this):this._next(r)},n.prototype.error=function(r){this.isStopped?A(x("E",void 0,r),this):(this.isStopped=!0,this._error(r))},n.prototype.complete=function(){this.isStopped?A(w,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(r){this.destination.next(r)},n.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(p),S=Function.prototype.bind;function E(r,t){return S.call(r,t)}var T=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){O(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){O(r)}else O(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){O(r)}},r}(),P=function(r){function n(t,n,e){var o,i,u=r.call(this)||this;return a(t)||!t?o={next:null!=t?t:void 0,error:null!=n?n:void 0,complete:null!=e?e:void 0}:u&&y.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return u.unsubscribe()},o={next:t.next&&E(t.next,i),error:t.error&&E(t.error,i),complete:t.complete&&E(t.complete,i)}):o=t,u.destination=new T(o),u}return t(n,r),n}(_);function O(r){var t;y.useDeprecatedSynchronousErrorHandling?(t=r,y.useDeprecatedSynchronousErrorHandling&&g&&(g.errorThrown=!0,g.error=t)):b(r)}function A(r,t){var n=y.onStoppedNotification;n&&d.setTimeout((function(){return n(r,t)}))}var j={closed:!0,next:m,error:function(r){throw r},complete:m},I="function"==typeof Symbol&&Symbol.observable||"@@observable";function L(r){return r}var k=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e,o=this,i=(e=r)&&e instanceof _||function(r){return r&&a(r.next)&&a(r.error)&&a(r.complete)}(e)&&h(e)?r:new P(r,t,n);return function(r){if(y.useDeprecatedSynchronousErrorHandling){var t=!g;if(t&&(g={errorThrown:!1,error:null}),r(),t){var n=g,e=n.errorThrown,o=n.error;if(g=null,e)throw o}}else r()}((function(){var r=o,t=r.operator,n=r.source;i.add(t?t.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=z(t))((function(t,e){var o=new P({next:function(t){try{r(t)}catch(r){e(r),o.unsubscribe()}},error:e,complete:t});n.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[I]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return(0===(n=r).length?L:1===n.length?n[0]:function(r){return n.reduce((function(r,t){return t(r)}),r)})(this);var n},r.prototype.toPromise=function(r){var t=this;return new(r=z(r))((function(r,n){var e;t.subscribe((function(r){return e=r}),(function(r){return n(r)}),(function(){return r(e)}))}))},r.create=function(t){return new r(t)},r}();function z(r){var t;return null!==(t=null!=r?r:y.Promise)&&void 0!==t?t:Promise}var U="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function D(r){if(r instanceof k)return r;if(null!=r){if(function(r){return a(r[I])}(r))return l=r,new k((function(r){var t=l[I]();if(a(t.subscribe))return t.subscribe(r);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if(c(r))return s=r,new k((function(r){for(var t=0;t<s.length&&!r.closed;t++)r.next(s[t]);r.complete()}));if(a(null==(i=r)?void 0:i.then))return o=r,new k((function(r){o.then((function(t){r.closed||(r.next(t),r.complete())}),(function(t){return r.error(t)})).then(null,b)}));if(function(r){return Symbol.asyncIterator&&a(null==r?void 0:r[Symbol.asyncIterator])}(r))return H(r);if(function(r){return a(null==r?void 0:r[U])}(r))return t=r,new k((function(r){var n,o;try{for(var i=e(t),u=i.next();!u.done;u=i.next()){var c=u.value;if(r.next(c),r.closed)return}}catch(r){n={error:r}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}r.complete()}));if(function(r){return a(null==r?void 0:r.getReader)}(r))return H(function(r){return function(r,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=n.apply(r,t||[]),i=[];return e={},c("next"),c("throw"),c("return"),e[Symbol.asyncIterator]=function(){return this},e;function c(r){o[r]&&(e[r]=function(t){return new Promise((function(n,e){i.push([r,t,n,e])>1||a(r,t)}))})}function a(r,t){try{(n=o[r](t)).value instanceof u?Promise.resolve(n.value.v).then(s,l):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function s(r){a("next",r)}function l(r){a("throw",r)}function f(r,t){r(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}(this,arguments,(function(){var t,e,o;return n(this,(function(n){switch(n.label){case 0:t=r.getReader(),n.label=1;case 1:n.trys.push([1,,9,10]),n.label=2;case 2:return[4,u(t.read())];case 3:return e=n.sent(),o=e.value,e.done?[4,u(void 0)]:[3,5];case 4:return[2,n.sent()];case 5:return[4,u(o)];case 6:return[4,n.sent()];case 7:return n.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}(r))}var t,o,i,s,l;throw function(r){return new TypeError("You provided "+(null!==r&&"object"==typeof r?"an invalid object":"'"+r+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}(r)}function H(r){return new k((function(t){(function(r,t){var o,i,u,c,a,s,l,f;return a=this,s=void 0,f=function(){var a,s;return n(this,(function(n){switch(n.label){case 0:n.trys.push([0,5,6,11]),o=function(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=r[Symbol.asyncIterator];return n?n.call(r):(r=e(r),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=r[n]&&function(t){return new Promise((function(e,o){!function(r,t,n,e){Promise.resolve(e).then((function(t){r({value:t,done:n})}),t)}(e,o,(t=r[n](t)).done,t.value)}))}}}(r),n.label=1;case 1:return[4,o.next()];case 2:if((i=n.sent()).done)return[3,4];if(a=i.value,t.next(a),t.closed)return[2];n.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=n.sent(),u={error:s},[3,11];case 6:return n.trys.push([6,,9,10]),i&&!i.done&&(c=o.return)?[4,c.call(o)]:[3,8];case 7:n.sent(),n.label=8;case 8:return[3,10];case 9:if(u)throw u.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))},new((l=void 0)||(l=Promise))((function(r,t){function n(r){try{o(f.next(r))}catch(r){t(r)}}function e(r){try{o(f.throw(r))}catch(r){t(r)}}function o(t){var o;t.done?r(t.value):(o=t.value,o instanceof l?o:new l((function(r){r(o)}))).then(n,e)}o((f=f.apply(a,s||[])).next())}))})(r,t).catch((function(r){return t.error(r)}))}))}function N(r){return function(t){if(function(r){return a(null==r?void 0:r.lift)}(t))return t.lift((function(t){try{return r(t,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}function C(r,t,n,e,o){return new M(r,t,n,e,o)}var M=function(r){function n(t,n,e,o,i,u){var c=r.call(this,t)||this;return c.onFinalize=i,c.shouldUnsubscribe=u,c._next=n?function(r){try{n(r)}catch(r){t.error(r)}}:r.prototype._next,c._error=o?function(r){try{o(r)}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._error,c._complete=e?function(){try{e()}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._complete,c}return t(n,r),n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;r.prototype.unsubscribe.call(this),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},n}(_);function R(r,t){return N((function(n,e){var o=0;n.subscribe(C(e,(function(n){e.next(r.call(t,n,o++))})))}))}function Y(r,t,n){return void 0===n&&(n=1/0),a(t)?Y((function(n,e){return R((function(r,o){return t(n,r,e,o)}))(D(r(n,e)))}),n):("number"==typeof t&&(n=t),N((function(t,e){return function(r,t,n,e,o,i,u,c){var a=[],s=0,l=0,f=!1,p=function(){!f||a.length||s||t.complete()},h=function(r){return s<e?v(r):a.push(r)},v=function(r){s++;var o=!1;D(n(r,l++)).subscribe(C(t,(function(r){t.next(r)}),(function(){o=!0}),void 0,(function(){if(o)try{s--;for(var r=function(){var r=a.shift();v(r)};a.length&&s<e;)r();p()}catch(r){t.error(r)}})))};return r.subscribe(C(t,h,(function(){f=!0,p()}))),function(){}}(t,e,r,n)})))}var F=Array.isArray;var B=["addListener","removeListener"],G=["addEventListener","removeEventListener"],q=["on","off"];function J(r,t){return function(n){return function(e){return r[n](t,e)}}}var X,K=document.getElementById("button"),Q=document.getElementById("output"),V=function r(t,n,e,u){if(a(e)&&(u=e,e=void 0),u)return r(t,n,e).pipe((s=u,R((function(r){return function(r,t){return F(t)?r.apply(void 0,i([],o(t))):r(t)}(s,r)}))));var s,l=o(function(r){return a(r.addEventListener)&&a(r.removeEventListener)}(t)?G.map((function(r){return function(o){return t[r](n,o,e)}})):function(r){return a(r.addListener)&&a(r.removeListener)}(t)?B.map(J(t,n)):function(r){return a(r.on)&&a(r.off)}(t)?q.map(J(t,n)):[],2),f=l[0],p=l[1];if(!f&&c(t))return Y((function(t){return r(t,n,e)}))(D(t));if(!f)throw new TypeError("Invalid event target");return new k((function(r){var t=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return r.next(1<t.length?t:t[0])};return f(t),function(){return p(t)}}))}(K,"click");V.pipe((X=function(){return"../movies.json",new k((function(r){var t=new XMLHttpRequest;Q.innerHTML="",t.addEventListener("load",(function(){console.log(t.status);var n=JSON.parse(t.responseText);r.next(n),r.complete()})),t.open("GET","../movies.json"),t.send()}))},N((function(r,t){var n=null,e=!1,o=function(){return e&&!n&&t.complete()};r.subscribe(C(t,(function(r){null==n||n.unsubscribe();0;D(X()).subscribe(n=C(t,(function(r){return t.next(r)}),(function(){n=null,o()})))}),(function(){e=!0,o()})))})))).subscribe({next:function(r){r.forEach((function(r){var t=document.createElement("div");t.innerText=r.title,Q.appendChild(t)}))},error:function(r){return console.log(r)},complete:function(){return console.log()}})})();