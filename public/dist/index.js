(()=>{"use strict";var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])},r(t,e)};function t(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function e(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function n(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),u=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return u}function o(r,t,e){if(e||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return r.concat(n||Array.prototype.slice.call(t))}function i(r){return"function"==typeof r}Object.create,Object.create;var u,c=((u=function(r){var t;t=this,Error.call(t),t.stack=(new Error).stack,this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r}).prototype=Object.create(Error.prototype),u.prototype.constructor=u,u);function s(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var a=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._finalizers=null}var t;return r.prototype.unsubscribe=function(){var r,t,u,s,a;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var p=e(l),h=p.next();!h.done;h=p.next())h.value.remove(this)}catch(t){r={error:t}}finally{try{h&&!h.done&&(t=p.return)&&t.call(p)}finally{if(r)throw r.error}}else l.remove(this);var y=this.initialTeardown;if(i(y))try{y()}catch(r){a=r instanceof c?r.errors:[r]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var d=e(v),b=d.next();!b.done;b=d.next()){var m=b.value;try{f(m)}catch(r){a=null!=a?a:[],r instanceof c?a=o(o([],n(a)),n(r.errors)):a.push(r)}}}catch(r){u={error:r}}finally{try{b&&!b.done&&(s=d.return)&&s.call(d)}finally{if(u)throw u.error}}}if(a)throw new c(a)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)f(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&s(t,r)},r.prototype.remove=function(t){var e=this._finalizers;e&&s(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r}();function l(r){return r instanceof a||r&&"closed"in r&&i(r.remove)&&i(r.add)&&i(r.unsubscribe)}function f(r){i(r)?r():r.unsubscribe()}a.EMPTY;var p={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},h={setTimeout:function(r,t){for(var e=[],i=2;i<arguments.length;i++)e[i-2]=arguments[i];var u=h.delegate;return(null==u?void 0:u.setTimeout)?u.setTimeout.apply(u,o([r,t],n(e))):setTimeout.apply(void 0,o([r,t],n(e)))},clearTimeout:function(r){var t=h.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function y(){}var v=d("C",void 0,void 0);function d(r,t,e){return{kind:r,value:t,error:e}}var b=null,m=function(r){function e(t){var e=r.call(this)||this;return e.isStopped=!1,t?(e.destination=t,l(t)&&t.add(e)):e.destination=E,e}return t(e,r),e.create=function(r,t,e){return new x(r,t,e)},e.prototype.next=function(r){this.isStopped?T(function(r){return d("N",r,void 0)}(r),this):this._next(r)},e.prototype.error=function(r){this.isStopped?T(d("E",void 0,r),this):(this.isStopped=!0,this._error(r))},e.prototype.complete=function(){this.isStopped?T(v,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(r){this.destination.next(r)},e.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(a),_=Function.prototype.bind;function g(r,t){return _.call(r,t)}var w=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){S(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){S(r)}else S(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){S(r)}},r}(),x=function(r){function e(t,e,n){var o,u,c=r.call(this)||this;return i(t)||!t?o={next:null!=t?t:void 0,error:null!=e?e:void 0,complete:null!=n?n:void 0}:c&&p.useDeprecatedNextContext?((u=Object.create(t)).unsubscribe=function(){return c.unsubscribe()},o={next:t.next&&g(t.next,u),error:t.error&&g(t.error,u),complete:t.complete&&g(t.complete,u)}):o=t,c.destination=new w(o),c}return t(e,r),e}(m);function S(r){var t;p.useDeprecatedSynchronousErrorHandling?(t=r,p.useDeprecatedSynchronousErrorHandling&&b&&(b.errorThrown=!0,b.error=t)):function(r){h.setTimeout((function(){var t=p.onUnhandledError;if(!t)throw r;t(r)}))}(r)}function T(r,t){var e=p.onStoppedNotification;e&&h.setTimeout((function(){return e(r,t)}))}var E={closed:!0,next:y,error:function(r){throw r},complete:y},O="function"==typeof Symbol&&Symbol.observable||"@@observable";function P(r){return r}var A=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(r,t,e){var n,o=this,u=(n=r)&&n instanceof m||function(r){return r&&i(r.next)&&i(r.error)&&i(r.complete)}(n)&&l(n)?r:new x(r,t,e);return function(r){if(p.useDeprecatedSynchronousErrorHandling){var t=!b;if(t&&(b={errorThrown:!1,error:null}),r(),t){var e=b,n=e.errorThrown,o=e.error;if(b=null,n)throw o}}else r()}((function(){var r=o,t=r.operator,e=r.source;u.add(t?t.call(u,e):e?o._subscribe(u):o._trySubscribe(u))})),u},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var e=this;return new(t=j(t))((function(t,n){var o=new x({next:function(t){try{r(t)}catch(r){n(r),o.unsubscribe()}},error:n,complete:t});e.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[O]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return(0===(e=r).length?P:1===e.length?e[0]:function(r){return e.reduce((function(r,t){return t(r)}),r)})(this);var e},r.prototype.toPromise=function(r){var t=this;return new(r=j(r))((function(r,e){var n;t.subscribe((function(r){return n=r}),(function(r){return e(r)}),(function(){return r(n)}))}))},r.create=function(t){return new r(t)},r}();function j(r){var t;return null!==(t=null!=r?r:p.Promise)&&void 0!==t?t:Promise}var z=[1,5,10,15,20,25,30];(new(function(){function r(){}return r.prototype.y=function(){},r}())).y();var C=new A((function(r){var t=0,e=function(){r.next(z[t++]),t<z.length?setTimeout(e,500):r.complete()};e()}));C.subscribe({next:function(r){return console.log(r)},error:function(r){return console.log(r)},complete:function(){return console.log("Complete")}}),C.subscribe({next:function(r){return console.log(r)},error:function(r){return console.log(r)},complete:function(){return console.log("Complete")}})})();