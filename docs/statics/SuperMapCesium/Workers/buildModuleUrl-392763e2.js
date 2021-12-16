/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["exports","./when-8d13db60","./Check-70bec281","./RuntimeError-ba10bc3e"],function(e,b,w,R){function f(e){if(e instanceof f)this.scheme=e.scheme,this.authority=e.authority,this.path=e.path,this.query=e.query,this.fragment=e.fragment;else if(e){var t=r.exec(e);this.scheme=t[1],this.authority=t[2],this.path=t[3],this.query=t[4],this.fragment=t[5]}}f.prototype.scheme=null,f.prototype.authority=null,f.prototype.path="",f.prototype.query=null,f.prototype.fragment=null;var r=new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$");f.prototype.getScheme=function(){return this.scheme},f.prototype.getAuthority=function(){return this.authority},f.prototype.getPath=function(){return this.path},f.prototype.getQuery=function(){return this.query},f.prototype.getFragment=function(){return this.fragment},f.prototype.isAbsolute=function(){return!!this.scheme&&!this.fragment},f.prototype.isSameDocumentAs=function(e){return e.scheme==this.scheme&&e.authority==this.authority&&e.path==this.path&&e.query==this.query},f.prototype.equals=function(e){return this.isSameDocumentAs(e)&&e.fragment==this.fragment},f.prototype.normalize=function(){this.removeDotSegments(),this.scheme&&(this.scheme=this.scheme.toLowerCase()),this.authority&&(this.authority=this.authority.replace(i,s).replace(t,o)),this.path&&(this.path=this.path.replace(t,o)),this.query&&(this.query=this.query.replace(t,o)),this.fragment&&(this.fragment=this.fragment.replace(t,o))};var t=/%[0-9a-z]{2}/gi,n=/[a-zA-Z0-9\-\._~]/,i=/(.*@)?([^@:]*)(:.*)?/;function o(e){var t=unescape(e);return n.test(t)?t:e.toUpperCase()}function s(e,t,r,n){return(t||"")+r.toLowerCase()+(n||"")}function u(e,t){if(null===e||"object"!=typeof e)return e;t=b.defaultValue(t,!1);var r=new e.constructor;for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];t&&(i=u(i,t)),r[n]=i}return r}function d(e,t,r){r=b.defaultValue(r,!1);var n,i,o,s={},u=b.defined(e),a=b.defined(t);if(u)for(n in e)e.hasOwnProperty(n)&&(i=e[n],a&&r&&"object"==typeof i&&t.hasOwnProperty(n)?(o=t[n],s[n]="object"==typeof o?d(i,o,r):i):s[n]=i);if(a)for(n in t)t.hasOwnProperty(n)&&!s.hasOwnProperty(n)&&(o=t[n],s[n]=o);return s}function a(e,t){var r;return"undefined"!=typeof document&&(r=document),a._implementation(e,t,r)}f.prototype.resolve=function(e){var t=new f;return this.scheme?(t.scheme=this.scheme,t.authority=this.authority,t.path=this.path,t.query=this.query):(t.scheme=e.scheme,this.authority?(t.authority=this.authority,t.path=this.path,t.query=this.query):(t.authority=e.authority,""==this.path?(t.path=e.path,t.query=this.query||e.query):("/"==this.path.charAt(0)?t.path=this.path:e.authority&&""==e.path?t.path="/"+this.path:t.path=e.path.substring(0,e.path.lastIndexOf("/")+1)+this.path,t.removeDotSegments(),t.query=this.query))),t.fragment=this.fragment,t},f.prototype.removeDotSegments=function(){var e,t=this.path.split("/"),r=[],n=""==t[0];n&&t.shift();for(""==t[0]&&t.shift();t.length;)".."==(e=t.shift())?r.pop():"."!=e&&r.push(e);"."!=e&&".."!=e||r.push(""),n&&r.unshift(""),this.path=r.join("/")},f.prototype.toString=function(){var e="";return this.scheme&&(e+=this.scheme+":"),this.authority&&(e+="//"+this.authority),e+=this.path,this.query&&(e+="?"+this.query),this.fragment&&(e+="#"+this.fragment),e},a._implementation=function(e,t,r){if(!b.defined(e))throw new w.DeveloperError("relative uri is required.");if(!b.defined(t)){if(void 0===r)return e;t=b.defaultValue(r.baseURI,r.location.href)}var n=new f(t);return new f(e).resolve(n).toString()};var c,p=/^blob:/i;function h(e){return w.Check.typeOf.string("uri",e),p.test(e)}var l=/^data:/i;function m(e){return w.Check.typeOf.string("uri",e),l.test(e)}var y=Object.freeze({UNISSUED:0,ISSUED:1,ACTIVE:2,RECEIVED:3,CANCELLED:4,FAILED:5}),v=Object.freeze({TERRAIN:0,IMAGERY:1,TILES3D:2,OTHER:3,PACK:4,BLOCK:5,BLOCKPACK:6});function g(e){e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT);var t=b.defaultValue(e.throttleByServer,!1),r=b.defaultValue(e.throttle,!1);this.url=e.url,this.requestFunction=e.requestFunction,this.cancelFunction=e.cancelFunction,this.priorityFunction=e.priorityFunction,this.priority=b.defaultValue(e.priority,0),this.throttle=r,this.throttleByServer=t,this.type=b.defaultValue(e.type,v.OTHER),this.serverKey=void 0,this.state=y.UNISSUED,this.deferred=void 0,this.cancelled=!1}function A(e,t,r){this.statusCode=e,this.response=t,this.responseHeaders=r,"string"==typeof this.responseHeaders&&(this.responseHeaders=function(e){var t={};if(!e)return t;for(var r=e.split("\r\n"),n=0;n<r.length;++n){var i=r[n],o=i.indexOf(": ");if(0<o){var s=i.substring(0,o),u=i.substring(o+2);t[s]=u}}return t}(this.responseHeaders))}function q(){this._listeners=[],this._scopes=[],this._toRemove=[],this._insideRaiseEvent=!1}function O(e,t){return t-e}function _(e){w.Check.typeOf.object("options",e),w.Check.defined("options.comparator",e.comparator),this._comparator=e.comparator,this._array=[],this._length=0,this._maximumLength=void 0}function E(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}g.prototype.cancel=function(){this.cancelled=!0},g.prototype.clone=function(e){return b.defined(e)?(e.url=this.url,e.requestFunction=this.requestFunction,e.cancelFunction=this.cancelFunction,e.priorityFunction=this.priorityFunction,e.priority=this.priority,e.throttle=this.throttle,e.throttleByServer=this.throttleByServer,e.type=this.type,e.serverKey=this.serverKey,e.state=this.RequestState.UNISSUED,e.deferred=void 0,e.cancelled=!1,e):new g(this)},A.prototype.toString=function(){var e="Request has failed.";return b.defined(this.statusCode)&&(e+=" Status Code: "+this.statusCode),e},Object.defineProperties(q.prototype,{numberOfListeners:{get:function(){return this._listeners.length-this._toRemove.length}}}),q.prototype.addEventListener=function(e,t){w.Check.typeOf.func("listener",e),this._listeners.push(e),this._scopes.push(t);var r=this;return function(){r.removeEventListener(e,t)}},q.prototype.removeEventListener=function(e,t){w.Check.typeOf.func("listener",e);for(var r=this._listeners,n=this._scopes,i=-1,o=0;o<r.length;o++)if(r[o]===e&&n[o]===t){i=o;break}return-1!==i&&(this._insideRaiseEvent?(this._toRemove.push(i),r[i]=void 0,n[i]=void 0):(r.splice(i,1),n.splice(i,1)),!0)},q.prototype.raiseEvent=function(){var e;this._insideRaiseEvent=!0;var t=this._listeners,r=this._scopes,n=t.length;for(e=0;e<n;e++){var i=t[e];b.defined(i)&&t[e].apply(r[e],arguments)}var o=this._toRemove;if(0<(n=o.length)){for(o.sort(O),e=0;e<n;e++){var s=o[e];t.splice(s,1),r.splice(s,1)}o.length=0}this._insideRaiseEvent=!1},Object.defineProperties(_.prototype,{length:{get:function(){return this._length}},internalArray:{get:function(){return this._array}},maximumLength:{get:function(){return this._maximumLength},set:function(e){this._maximumLength=e,this._length>e&&0<e&&(this._length=e,this._array.length=e)}},comparator:{get:function(){return this._comparator}}}),_.prototype.reserve=function(e){e=b.defaultValue(e,this._length),this._array.length=e},_.prototype.heapify=function(e){e=b.defaultValue(e,0);for(var t=this._length,r=this._comparator,n=this._array,i=-1,o=!0;o;){var s=2*(e+1),u=s-1;i=u<t&&r(n[u],n[e])<0?u:e,s<t&&r(n[s],n[i])<0&&(i=s),i!==e?(E(n,i,e),e=i):o=!1}},_.prototype.resort=function(){for(var e=this._length,t=Math.ceil(e/2);0<=t;--t)this.heapify(t)},_.prototype.insert=function(e){w.Check.defined("element",e);var t,r=this._array,n=this._comparator,i=this._maximumLength,o=this._length++;for(o<r.length?r[o]=e:r.push(e);0!==o;){var s=Math.floor((o-1)/2);if(!(n(r[o],r[s])<0))break;E(r,o,s),o=s}return b.defined(i)&&this._length>i&&(t=r[i],r.pop(),this._length=i),t},_.prototype.pop=function(e){if(e=b.defaultValue(e,0),0!==this._length){w.Check.typeOf.number.lessThan("index",e,this._length);var t=this._array,r=t[e];return E(t,e,--this._length),t[this._length]=void 0,this.heapify(e),r}};var C="undefined"!=typeof performance&&"function"==typeof performance.now&&isFinite(performance.now())?function(){return performance.now()}:function(){return Date.now()};function I(e,t){return e.priority-t.priority}var k={numberOfAttemptedRequests:0,numberOfActiveRequests:0,numberOfCancelledRequests:0,numberOfCancelledActiveRequests:0,numberOfFailedRequests:0,numberOfActiveRequestsEver:0,lastNumberOfActiveRequests:0,totalRequestTime:0},T=20,S=new _({comparator:I});S.maximumLength=T,S.reserve(T);var U=[],x={},P="undefined"!=typeof document?new f(document.location.href):new f,B=new q;function D(){}function L(e){b.defined(e.priorityFunction)&&(e.priority=e.priorityFunction())}function K(e){var t=b.defaultValue(D.requestsByServer[e],D.maximumRequestsPerServer);return x[e]<t}function j(e){return b.defined(e.packKey)||(e.packKey=e.serverKey+"_"+e.providerName),e.packKey}function V(e){return b.defined(e.blockKey)||(e.blockKey=e.serverKey+"_"+e.providerName+"_"+e.quadKey+e.url.substring(e.url.indexOf("dataVersion"))),e.blockKey}function F(e){for(var t=0,r=e.length;t<r;t++){e[t].state=y.CANCELLED}}function M(e){for(var t=[],r={},n=0,i=e.length;n<i;n++){var o=e[n];if(!o.cancelled){var s=o.quadKey;r[s]||(r[s]=!0,t.push(s))}}return t}function N(){var e=D.packRequestGroup;for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if(r.length<1)continue;var n=r[0].clone(),i=-1!==n.url.indexOf("rest/maps");n.serverKey=r[0].serverKey,n.state=r[0].state;var o=n.url,s=M(r);if(s.length<1)continue;D.packRequestQuadKey[t]=i?s.join(","):s.join(";");var u=D.packRequestQuadKey[t];if(n.throttleByServer&&!K(n.serverKey)){F(r),D.packRequestPromise[t].reject();continue}n.deferred=D.packRequestPromise[t];var a=new f(o);a.query=i?b.defined(a.query)?a.query+"&tiles="+u:"tiles="+u:b.defined(a.query)?a.query+"&extratiles="+u:"extratiles="+u,n.url=a.toString(),J(n,n.url)}D.packRequestGroup={},D.packRequestPromise={},D.packRequestQuadKey={},D.quadKeyIndex={}}function H(){var e=D.blockRequest;for(var t in e){if(e.hasOwnProperty(t))J(e[t])}D.blockRequest={}}function Y(e){if(e.state===y.UNISSUED)if(e.state=y.ISSUED,e.type===v.PACK||e.type===v.BLOCKPACK){var t=j(e);b.defined(D.packRequestPromise[t])||(D.packRequestPromise[t]=b.when.defer()),e.deferred=D.packRequestPromise[t]}else e.deferred=b.when.defer();return e.deferred.promise}function J(e,t){var r,n,i=Y(e);return e.state=y.ACTIVE,U.push(e),++k.numberOfActiveRequests,++k.numberOfActiveRequestsEver,++x[e.serverKey],e.startTime=C(),e.requestFunction(t).then((n=e,function(e){if(n.state!==y.CANCELLED&&(--k.numberOfActiveRequests,--x[n.serverKey],B.raiseEvent(),n.state=y.RECEIVED,n.deferred.resolve(e),n.endTime=C(),(0<D.statisticRequestTime||n.type!==v.OTHER)&&(k.totalRequestTime+=n.endTime-n.startTime),n.type===v.BLOCK||n.type===v.BLOCKPACK)){var t=V(n);b.defined(D.blockDefer[t])&&(D.blockDefer[t]=void 0,delete D.blockDefer[t])}})).otherwise((r=e,function(e){r.state!==y.CANCELLED&&(++k.numberOfFailedRequests,--k.numberOfActiveRequests,--x[r.serverKey],B.raiseEvent(e),r.state=y.FAILED,r.deferred.reject(e))})),i}function X(e){var t=e.state===y.ACTIVE;e.state=y.CANCELLED,++k.numberOfCancelledRequests,e.deferred.reject(),t&&(--k.numberOfActiveRequests,--x[e.serverKey],++k.numberOfCancelledActiveRequests),b.defined(e.cancelFunction)&&e.cancelFunction()}D.TIMEOUT=5e3,D.CANCLE_COUNT=3,D.statisticRequestTime=-1,D.maximumRequests=50,D.maximumRequestsPerServer=6,D.perPacketCount=20,D.requestsByServer={"api.cesium.com:443":18,"assets.cesium.com:443":18},D.throttleRequests=!0,D.debugShowStatistics=!1,D.requestCompletedEvent=B,Object.defineProperties(D,{activeRequestLength:{get:function(){return U.length}},statistics:{get:function(){return k}},priorityHeapLength:{get:function(){return T},set:function(e){if(e<T)for(;S.length>e;){X(S.pop())}T=e,S.maximumLength=e,S.reserve(e)}}}),D.packRequestGroup={},D.packRequestPromise={},D.packRequestQuadKey={},D.quadKeyIndex={},D.packRequestHeap={},D.blockDefer={},D.blockRequest={},D.update=function(){var e,t,r=0,n=U.length;for(e=0;e<n;++e)(t=U[e]).cancelled&&X(t),t.state===y.ACTIVE?0<r&&(U[e-r]=t):++r;U.length-=r;var i=S.internalArray,o=S.length;for(e=0;e<o;++e)L(i[e]);S.resort(),function(){for(var e in D.packRequestHeap)if(D.packRequestHeap.hasOwnProperty(e)){for(var t=D.packRequestHeap[e],r=t.internalArray,n=t.length,i=0;i<n;++i)L(r[i]);t.resort()}}(),H(),function(){for(var e in D.packRequestHeap)if(D.packRequestHeap.hasOwnProperty(e))for(var t=D.packRequestHeap[e];0<t.length;){var r=t.pop();r.cancelled?X(r):(i=j(n=r),b.defined(D.packRequestGroup[i])||(D.packRequestGroup[i]=[]),b.defined(D.packRequestQuadKey[i])||(D.packRequestQuadKey[i]=""),b.defined(D.packRequestPromise[i])||(D.packRequestPromise[i]=b.when.defer()),b.defined(D.quadKeyIndex[i])||(D.quadKeyIndex[i]=0),n.quadKeyIndex=D.quadKeyIndex[i]++,n.deferred=D.packRequestPromise[i],n.state=y.ISSUED,D.packRequestGroup[i].push(n),n.deferred.promise)}var n,i;N()}();for(var s=Math.max(D.maximumRequests-U.length,0),u=0;u<s&&0<S.length;)(t=S.pop()).cancelled?X(t):!t.throttleByServer||K(t.serverKey)?(J(t),++u):X(t);!function(){if(!D.debugShowStatistics)return;0===k.numberOfActiveRequests&&0<k.lastNumberOfActiveRequests&&(0<k.numberOfAttemptedRequests&&(console.log("Number of attempted requests: "+k.numberOfAttemptedRequests),k.numberOfAttemptedRequests=0),0<k.numberOfCancelledRequests&&(console.log("Number of cancelled requests: "+k.numberOfCancelledRequests),k.numberOfCancelledRequests=0),0<k.numberOfCancelledActiveRequests&&(console.log("Number of cancelled active requests: "+k.numberOfCancelledActiveRequests),k.numberOfCancelledActiveRequests=0),0<k.numberOfFailedRequests&&(console.log("Number of failed requests: "+k.numberOfFailedRequests),k.numberOfFailedRequests=0));k.lastNumberOfActiveRequests=k.numberOfActiveRequests}()},D.getServerKey=function(e){w.Check.typeOf.string("url",e);var t=new f(e).resolve(P);t.normalize();var r=t.authority;/:/.test(r)||(r=r+":"+("https"===t.scheme?"443":"80"));var n=x[r];return b.defined(n)||(x[r]=0),r},D.request=function(e){if(w.Check.typeOf.object("request",e),w.Check.typeOf.string("request.url",e.url),w.Check.typeOf.func("request.requestFunction",e.requestFunction),m(e.url)||h(e.url))return B.raiseEvent(),e.state=y.RECEIVED,e.requestFunction();if(++k.numberOfAttemptedRequests,b.defined(e.serverKey)||(e.serverKey=D.getServerKey(e.url)),e.type===v.BLOCK)return r=V(t=e),n=D.blockDefer[r],b.defined(n)||(n=D.blockDefer[r]=b.when.defer(),D.blockRequest[r]=t),t.deferred=n,t.state=y.ISSUED,t.deferred.promise;var t,r,n;if(!e.throttleByServer||K(e.serverKey)){if(!D.throttleRequests||!e.throttle)return J(e);if(!(U.length>=D.maximumRequests)){var i,o,s;if(L(e),e.type===v.PACK||e.type===v.BLOCKPACK){var u=(o=j(e),s=D.packRequestHeap[o],b.defined(s)||((s=D.packRequestHeap[o]=new _({comparator:I})).maximumLength=D.perPacketCount,s.reserve(T)),s),a=!0;if(e.type===v.BLOCKPACK)for(var f=0;f<u.length;f++)if(u._array[f].quadKey===e.quadKey){e.blockRequest=u._array[f],a=!1;break}a&&(i=u.insert(e))}else i=S.insert(e);if(b.defined(i)){if(i===e)return;X(i)}return Y(e)}}},D.clearForSpecs=function(){for(;0<S.length;){X(S.pop())}for(var e=U.length,t=0;t<e;++t)X(U[t]);U.length=0,x={},k.numberOfAttemptedRequests=0,k.numberOfActiveRequests=0,k.numberOfCancelledRequests=0,k.numberOfCancelledActiveRequests=0,k.numberOfFailedRequests=0,k.numberOfActiveRequestsEver=0,k.lastNumberOfActiveRequests=0,k.totalRequestTime=0},D.numberOfActiveRequestsByServer=function(e){return x[e]},D.requestHeap=S;var z={},Q={};z.add=function(e,t){if(!b.defined(e))throw new w.DeveloperError("host is required.");if(!b.defined(t)||t<=0)throw new w.DeveloperError("port is required to be greater than 0.");var r=e.toLowerCase()+":"+t;b.defined(Q[r])||(Q[r]=!0)},z.remove=function(e,t){if(!b.defined(e))throw new w.DeveloperError("host is required.");if(!b.defined(t)||t<=0)throw new w.DeveloperError("port is required to be greater than 0.");var r=e.toLowerCase()+":"+t;b.defined(Q[r])&&delete Q[r]},z.contains=function(e){if(!b.defined(e))throw new w.DeveloperError("url is required.");var t=function(e){var t=new f(e);t.normalize();var r=t.getAuthority();if(b.defined(r)){if(-1!==r.indexOf("@")&&(r=r.split("@")[1]),-1===r.indexOf(":")){var n=t.getScheme();if(b.defined(n)||(n=(n=window.location.protocol).substring(0,n.length-1)),"http"===n)r+=":80";else{if("https"!==n)return;r+=":443"}}return r}}(e);return!(!b.defined(t)||!b.defined(Q[t]))},z.clear=function(){Q={}};var G={};function W(e,t){if(!b.defined(e))throw new w.DeveloperError("identifier is required.");b.defined(G[e])||(G[e]=!0,console.warn(b.defaultValue(t,e)))}W.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",W.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",W.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",W.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored";var $,Z=function(){try{var e=new XMLHttpRequest;return e.open("GET","#",!0),(e.responseType="blob")===e.responseType}catch(e){return!1}}();function ee(e,t,r,n){var i,o=e.query;if(!b.defined(o)||0===o.length)return{};if(-1===o.indexOf("=")){var s={};s[o]=void 0,i=s}else i=function(e){if(!b.defined(e))throw new w.DeveloperError("queryString is required.");var t={};if(""===e)return t;for(var r=e.replace(/\+/g,"%20").split(/[&;]/),n=0,i=r.length;n<i;++n){var o=r[n].split("=");if(2<o.length){var s=r[n].indexOf("=");o=[r[n].substring(0,s),r[n].substring(s+1,r[n].length)]}var u=decodeURIComponent(o[0]),a=o[1];a=b.defined(a)?decodeURIComponent(a):"";var f=t[u];"string"==typeof f?t[u]=[f,a]:Array.isArray(f)?f.push(a):t[u]=a}return t}(o);t._queryParameters=r?ie(i,t._queryParameters,n):i,e.query=void 0}function te(e,t){var r=t._queryParameters,n=Object.keys(r);1!==n.length||b.defined(r[n[0]])?e.query=function(e,t){if(!b.defined(e))throw new w.DeveloperError("obj is required.");var r="";for(var n in e)if(e.hasOwnProperty(n)){var i=e[n],o=encodeURIComponent(n)+"=";if(Array.isArray(i))for(var s=0,u=i.length;s<u;++s)r+=!0===t?o+encodeURI(i[s])+"&":o+encodeURIComponent(i[s])+"&";else r+=!0===t?o+encodeURI(i)+"&":o+encodeURIComponent(i)+"&"}return r=r.slice(0,-1)}(r):e.query=n[0]}function re(e,t){return b.defined(e)?b.defined(e.clone)?e.clone():u(e):t}function ne(e){if(e.state===y.ISSUED||e.state===y.ACTIVE)throw new R.RuntimeError("The Resource is already being fetched.");e.state=y.UNISSUED,e.deferred=void 0}function ie(e,t,r){if(!r)return d(e,t);var n=u(e,!0);for(var i in t)if(t.hasOwnProperty(i)){var o=n[i],s=t[i];b.defined(o)?(Array.isArray(o)||(o=n[i]=[o]),n[i]=o.concat(s)):n[i]=Array.isArray(s)?s.slice():s}return n}function oe(e){"string"==typeof(e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT))&&(e={url:e}),w.Check.typeOf.string("options.url",e.url),this._url=void 0,this._templateValues=re(e.templateValues,{}),this._queryParameters=re(e.queryParameters,{}),this.headers=re(e.headers,{}),this.request=b.defaultValue(e.request,new g),this.proxy=e.proxy,this.retryCallback=e.retryCallback,this.retryAttempts=b.defaultValue(e.retryAttempts,0),this._retryCount=0;var t=new f(e.url);ee(t,this,!0,!0),t.fragment=void 0,this._url=t.toString()}function se(e){var r=e.resource,n=e.flipY,i=e.preferImageBitmap,o=r.request;o.url=r.url,o.requestFunction=function(){var e=!1;r.isDataUri||r.isBlobUri||(e=r.isCrossOriginUrl);var t=b.when.defer();return oe._Implementations.createImage(o,e,t,n,i),t.promise};var t=D.request(o);if(b.defined(t))return t.otherwise(function(t){return o.state!==y.FAILED?b.when.reject(t):r.retryOnError(t).then(function(e){return e?(o.state=y.UNISSUED,o.deferred=void 0,se({resource:r,flipY:n,preferImageBitmap:i})):b.when.reject(t)})})}oe.createIfNeeded=function(e){return e instanceof oe?e.getDerivedResource({request:e.request}):"string"!=typeof e?e:new oe({url:e})},oe.supportsImageBitmapOptions=function(){if(b.defined($))return $;if("function"!=typeof createImageBitmap)return $=b.when.resolve(!1);return $=oe.fetchBlob({url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4////fwAJ+wP9CNHoHgAAAABJRU5ErkJggg=="}).then(function(e){return createImageBitmap(e,{imageOrientation:"flipY",premultiplyAlpha:"none"})}).then(function(e){return!0}).otherwise(function(){return!1})},Object.defineProperties(oe,{isBlobSupported:{get:function(){return Z}}}),Object.defineProperties(oe.prototype,{queryParameters:{get:function(){return this._queryParameters}},templateValues:{get:function(){return this._templateValues}},url:{get:function(){return this.getUrlComponent(!0,!0)},set:function(e){var t=new f(e);ee(t,this,!1),t.fragment=void 0,this._url=t.toString()}},extension:{get:function(){return function(e){if(!b.defined(e))throw new w.DeveloperError("uri is required.");var t=new f(e);t.normalize();var r=t.path,n=r.lastIndexOf("/");return-1!==n&&(r=r.substr(n+1)),r=-1===(n=r.lastIndexOf("."))?"":r.substr(n+1)}(this._url)}},isDataUri:{get:function(){return m(this._url)}},isBlobUri:{get:function(){return h(this._url)}},isCrossOriginUrl:{get:function(){return function(e){b.defined(c)||(c=document.createElement("a")),c.href=window.location.href;var t=c.host,r=c.protocol;return c.href=e,c.href=c.href,r!==c.protocol||t!==c.host}(this._url)}},hasHeaders:{get:function(){return 0<Object.keys(this.headers).length}}}),oe.prototype.getUrlComponent=function(e,t){if(this.isDataUri)return this._url;var r=new f(this._url);e&&te(r,this);var n=r.toString().replace(/%7B/g,"{").replace(/%7D/g,"}"),i=this._templateValues;return n=n.replace(/{(.*?)}/g,function(e,t){var r=i[t];return b.defined(r)?encodeURIComponent(r):e}),t&&b.defined(this.proxy)&&(n=this.proxy.getURL(n)),n},oe.prototype.setQueryParameters=function(e,t){this._queryParameters=t?ie(this._queryParameters,e,!1):ie(e,this._queryParameters,!1)},oe.prototype.appendQueryParameters=function(e){this._queryParameters=ie(e,this._queryParameters,!0)},oe.prototype.setTemplateValues=function(e,t){this._templateValues=t?d(this._templateValues,e):d(e,this._templateValues)},oe.prototype.getDerivedResource=function(e){var t=this.clone();if(t._retryCount=0,b.defined(e.url)){var r=new f(e.url);ee(r,t,!0,b.defaultValue(e.preserveQueryParameters,!1)),r.fragment=void 0,t._url=r.resolve(new f(a(this._url))).toString()}return b.defined(e.queryParameters)&&(t._queryParameters=d(e.queryParameters,t._queryParameters)),b.defined(e.templateValues)&&(t._templateValues=d(e.templateValues,t.templateValues)),b.defined(e.headers)&&(t.headers=d(e.headers,t.headers)),b.defined(e.proxy)&&(t.proxy=e.proxy),b.defined(e.request)&&(t.request=e.request),b.defined(e.retryCallback)&&(t.retryCallback=e.retryCallback),b.defined(e.retryAttempts)&&(t.retryAttempts=e.retryAttempts),t},oe.prototype.retryOnError=function(e){var t=this.retryCallback;if("function"!=typeof t||this._retryCount>=this.retryAttempts)return b.when(!1);var r=this;return b.when(t(this,e)).then(function(e){return++r._retryCount,e})},oe.prototype.clone=function(e){return b.defined(e)||(e=new oe({url:this._url})),e._url=this._url,e._queryParameters=u(this._queryParameters),e._templateValues=u(this._templateValues),e.headers=u(this.headers),e.proxy=this.proxy,e.retryCallback=this.retryCallback,e.retryAttempts=this.retryAttempts,e._retryCount=0,e.request=this.request.clone(),e},oe.prototype.getBaseUri=function(e){return function(e,t){if(!b.defined(e))throw new w.DeveloperError("uri is required.");var r="",n=e.lastIndexOf("/");return-1!==n&&(r=e.substring(0,n+1)),t&&(e=new f(e),b.defined(e.query)&&(r+="?"+e.query),b.defined(e.fragment)&&(r+="#"+e.fragment)),r}(this.getUrlComponent(e),e)},oe.prototype.appendForwardSlash=function(){var e;this._url=(0!==(e=this._url).length&&"/"===e[e.length-1]||(e+="/"),e)},oe.prototype.fetchArrayBuffer=function(){return this.fetch({responseType:"arraybuffer"})},oe.fetchArrayBuffer=function(e){return new oe(e).fetchArrayBuffer()},oe.prototype.fetchBlob=function(){return this.fetch({responseType:"blob"})},oe.fetchBlob=function(e){return new oe(e).fetchBlob()},oe.prototype.fetchImage=function(e){e=b.defaultValue(e,b.defaultValue.EMPTY_OBJECT);var t=b.defaultValue(e.preferImageBitmap,!1),r=b.defaultValue(e.preferBlob,!1),n=b.defaultValue(e.flipY,!1);if(ne(this.request),!Z||this.isDataUri||this.isBlobUri||!this.hasHeaders&&!r)return se({resource:this,flipY:n,preferImageBitmap:t});var i,o,s,u=this.fetchBlob();return b.defined(u)?oe.supportsImageBitmapOptions().then(function(e){return i=e&&t,u}).then(function(e){if(b.defined(e)){if(s=e,i)return oe.createImageBitmapFromBlob(e,{flipY:n,premultiplyAlpha:!1});var t=window.URL.createObjectURL(e);return se({resource:o=new oe({url:t}),flipY:n,preferImageBitmap:!1})}}).then(function(e){if(b.defined(e))return e.blob=s,i||window.URL.revokeObjectURL(o.url),e}).otherwise(function(e){return b.defined(o)&&window.URL.revokeObjectURL(o.url),e.blob=s,b.when.reject(e)}):void 0},oe.fetchImage=function(e){return new oe(e).fetchImage({flipY:e.flipY,preferBlob:e.preferBlob,preferImageBitmap:e.preferImageBitmap})},oe.prototype.fetchText=function(){return this.fetch({responseType:"text"})},oe.fetchText=function(e){return new oe(e).fetchText()},oe.prototype.fetchJson=function(){var e=this.fetch({responseType:"text",headers:{Accept:"application/json,*/*;q=0.01"}});if(b.defined(e))return e.then(function(e){if(b.defined(e))return JSON.parse(e)})},oe.fetchJson=function(e){return new oe(e).fetchJson()},oe.prototype.fetchXML=function(){return this.fetch({responseType:"document",overrideMimeType:"text/xml"})},oe.fetchXML=function(e){return new oe(e).fetchXML()},oe.prototype.fetchJsonp=function(e){var t;for(e=b.defaultValue(e,"callback"),ne(this.request);t="loadJsonp"+Math.random().toString().substring(2,8),b.defined(window[t]););return function r(n,i,o){var e={};e[i]=o;n.setQueryParameters(e);var s=n.request;s.url=n.url;s.requestFunction=function(){var t=b.when.defer();return window[o]=function(e){t.resolve(e);try{delete window[o]}catch(e){window[o]=void 0}},oe._Implementations.loadAndExecuteScript(n.url,o,t),t.promise};var t=D.request(s);if(!b.defined(t))return;return t.otherwise(function(t){return s.state!==y.FAILED?b.when.reject(t):n.retryOnError(t).then(function(e){return e?(s.state=y.UNISSUED,s.deferred=void 0,r(n,i,o)):b.when.reject(t)})})}(this,e,t)},oe.fetchJsonp=function(e){return new oe(e).fetchJsonp(e.callbackParameterName)},oe.prototype._makeRequest=function(f){var c=this;ne(c.request);var p=c.request;p.url=c.url,p.requestFunction=function(e){var t=f.responseType,r=d(f.headers,c.headers),n=f.overrideMimeType,i=f.method,o=f.data,s=b.when.defer(),u=b.defined(e)?e:c.url,a=oe._Implementations.loadWithXhr(u,t,i,o,r,s,n);return b.defined(a)&&b.defined(a.abort)&&(p.cancelFunction=function(){a.abort()}),s.promise};var e=D.request(p);if(b.defined(e))return e.then(function(e){return e}).otherwise(function(t){return p.state!==y.FAILED?b.when.reject(t):c.retryOnError(t).then(function(e){return e?(p.state=y.UNISSUED,p.deferred=void 0,c.fetch(f)):b.when.reject(t)})})};var ue=/^data:(.*?)(;base64)?,(.*)$/;function ae(e,t){var r=decodeURIComponent(t);return e?atob(r):r}function fe(e,t){for(var r=ae(e,t),n=new ArrayBuffer(r.length),i=new Uint8Array(n),o=0;o<r.length;o++)i[o]=r.charCodeAt(o);return n}function ce(e,t){switch(t){case"text":return e.toString("utf8");case"json":return JSON.parse(e.toString("utf8"));default:return new Uint8Array(e).buffer}}oe.prototype.fetch=function(e){return(e=re(e,{})).method="GET",this._makeRequest(e)},oe.fetch=function(e){return new oe(e).fetch({responseType:e.responseType,overrideMimeType:e.overrideMimeType})},oe.prototype.delete=function(e){return(e=re(e,{})).method="DELETE",this._makeRequest(e)},oe.delete=function(e){return new oe(e).delete({responseType:e.responseType,overrideMimeType:e.overrideMimeType,data:e.data})},oe.prototype.head=function(e){return(e=re(e,{})).method="HEAD",this._makeRequest(e)},oe.head=function(e){return new oe(e).head({responseType:e.responseType,overrideMimeType:e.overrideMimeType})},oe.prototype.options=function(e){return(e=re(e,{})).method="OPTIONS",this._makeRequest(e)},oe.options=function(e){return new oe(e).options({responseType:e.responseType,overrideMimeType:e.overrideMimeType})},oe.prototype.post=function(e,t){return w.Check.defined("data",e),(t=re(t,{})).method="POST",t.data=e,this._makeRequest(t)},oe.post=function(e){return new oe(e).post(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})},oe.prototype.put=function(e,t){return w.Check.defined("data",e),(t=re(t,{})).method="PUT",t.data=e,this._makeRequest(t)},oe.put=function(e){return new oe(e).put(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})},oe.prototype.patch=function(e,t){return w.Check.defined("data",e),(t=re(t,{})).method="PATCH",t.data=e,this._makeRequest(t)},oe.patch=function(e){return new oe(e).patch(e.data,{responseType:e.responseType,overrideMimeType:e.overrideMimeType})},(oe._Implementations={}).createImage=function(u,a,f,c,p){var d=u.url;oe.supportsImageBitmapOptions().then(function(e){if(!e||!p)return t=d,r=a,n=f,(i=new Image).onload=function(){n.resolve(i)},i.onerror=function(e){n.reject(e)},r&&(z.contains(t)?i.crossOrigin="use-credentials":i.crossOrigin=""),void(i.src=t);var t,r,n,i,o=b.when.defer(),s=oe._Implementations.loadWithXhr(d,"blob","GET",void 0,void 0,o,void 0,void 0,void 0);return b.defined(s)&&b.defined(s.abort)&&(u.cancelFunction=function(){s.abort()}),o.promise.then(function(e){if(b.defined(e))return oe.createImageBitmapFromBlob(e,{flipY:c,premultiplyAlpha:!1});f.reject(new R.RuntimeError("Successfully retrieved "+d+" but it contained no content."))}).then(f.resolve)}).otherwise(f.reject)},oe.createImageBitmapFromBlob=function(e,t){return w.Check.defined("options",t),w.Check.typeOf.bool("options.flipY",t.flipY),w.Check.typeOf.bool("options.premultiplyAlpha",t.premultiplyAlpha),createImageBitmap(e,{imageOrientation:t.flipY?"flipY":"none",premultiplyAlpha:t.premultiplyAlpha?"premultiply":"none"})};var pe="undefined"==typeof XMLHttpRequest;oe._Implementations.loadWithXhr=function(e,i,o,t,r,s,n){var u=ue.exec(e);if(null===u){if(pe)return a=e,f=i,c=o,p=r,d=s,h=require("url").parse(a),l="https:"===h.protocol?require("https"):require("http"),m=require("zlib"),y={protocol:h.protocol,hostname:h.hostname,port:h.port,path:h.path,query:h.query,method:c,headers:p},void l.request(y).on("response",function(t){if(t.statusCode<200||300<=t.statusCode)d.reject(new A(t.statusCode,t,t.headers));else{var r=[];t.on("data",function(e){r.push(e)}),t.on("end",function(){var e=Buffer.concat(r);"gzip"===t.headers["content-encoding"]?m.gunzip(e,function(e,t){e?d.reject(new R.RuntimeError("Error decompressing response.")):d.resolve(ce(t,f))}):d.resolve(ce(e,f))})}}).on("error",function(e){d.reject(new A)}).end();var a,f,c,p,d,h,l,m,y,v=new XMLHttpRequest;if(z.contains(e)&&(v.withCredentials=!0),e=e.replace(/{/g,"%7B").replace(/}/g,"%7D"),v.open(o,e,!0),b.defined(n)&&b.defined(v.overrideMimeType)&&v.overrideMimeType(n),b.defined(r))for(var g in r)r.hasOwnProperty(g)&&v.setRequestHeader(g,r[g]);b.defined(i)&&(v.responseType=i);var q=!1;return"string"==typeof e&&(q=0===e.indexOf("file://")||"undefined"!=typeof window&&"file://"===window.location.origin),v.onload=function(){if(!(v.status<200||300<=v.status)||q&&0===v.status){var e=v.response,t=v.responseType;if("HEAD"===o||"OPTIONS"===o){var r=v.getAllResponseHeaders().trim().split(/[\r\n]+/),n={};return r.forEach(function(e){var t=e.split(": "),r=t.shift();n[r]=t.join(": ")}),void s.resolve(n)}if(204===v.status)s.resolve();else if(!b.defined(e)||b.defined(i)&&t!==i)if("json"===i&&"string"==typeof e)try{s.resolve(JSON.parse(e))}catch(e){s.reject(e)}else(""===t||"document"===t)&&b.defined(v.responseXML)&&v.responseXML.hasChildNodes()?s.resolve(v.responseXML):""!==t&&"text"!==t||!b.defined(v.responseText)?s.reject(new R.RuntimeError("Invalid XMLHttpRequest response type.")):s.resolve(v.responseText);else s.resolve(e)}else s.reject(new A(v.status,v.response,v.getAllResponseHeaders()))},v.onerror=function(e){s.reject(new A)},v.send(t),v}s.resolve(function(e,t){t=b.defaultValue(t,"");var r=e[1],n=!!e[2],i=e[3];switch(t){case"":case"text":return ae(n,i);case"arraybuffer":return fe(n,i);case"blob":var o=fe(n,i);return new Blob([o],{type:r});case"document":return(new DOMParser).parseFromString(ae(n,i),r);case"json":return JSON.parse(ae(n,i));default:throw new w.DeveloperError("Unhandled responseType: "+t)}}(u,i))},oe._Implementations.loadAndExecuteScript=function(e,t,r){return function(e){var t=b.when.defer(),r=document.createElement("script");r.async=!0,r.src=e;var n=document.getElementsByTagName("head")[0];return r.onload=function(){r.onload=void 0,n.removeChild(r),t.resolve()},r.onerror=function(e){t.reject(e)},n.appendChild(r),t.promise}(e).otherwise(r.reject)},(oe._DefaultImplementations={}).createImage=oe._Implementations.createImage,oe._DefaultImplementations.loadWithXhr=oe._Implementations.loadWithXhr,oe._DefaultImplementations.loadAndExecuteScript=oe._Implementations.loadAndExecuteScript,oe.DEFAULT=Object.freeze(new oe({url:"undefined"==typeof document?"":document.location.href.split("?")[0]}));var de,he,le,me=/((?:.*\/)|^)Cesium\.js$/;function ye(e){return"undefined"==typeof document?e:(b.defined(de)||(de=document.createElement("a")),de.href=e,de.href=de.href,de.href)}function ve(){if(b.defined(he))return he;var e;if(e="undefined"!=typeof CESIUM_BASE_URL?CESIUM_BASE_URL:"object"==typeof define&&b.defined(define.amd)&&!define.amd.toUrlUndefined&&b.defined(require.toUrl)?a("..",be("Core/buildModuleUrl.js")):function(){for(var e=document.getElementsByTagName("script"),t=0,r=e.length;t<r;++t){var n=e[t].getAttribute("src"),i=me.exec(n);if(null!==i)return i[1]}}(),!b.defined(e))throw new w.DeveloperError("Unable to determine Cesium base URL automatically, try defining a global variable called CESIUM_BASE_URL.");return(he=new oe({url:ye(e)})).appendForwardSlash(),he}function ge(e){return ye(require.toUrl("../"+e))}function qe(e){return ve().getDerivedResource({url:e}).url}function be(e){return b.defined(le)||(le="object"==typeof define&&b.defined(define.amd)&&!define.amd.toUrlUndefined&&b.defined(require.toUrl)?ge:qe),le(e)}be._cesiumScriptRegex=me,be._buildModuleUrlFromBaseUrl=qe,be._clearBaseResource=function(){he=void 0},be.setBaseUrl=function(e){he=oe.DEFAULT.getDerivedResource({url:e})},be.getCesiumBaseUrl=ve,e.Resource=oe,e.buildModuleUrl=be,e.deprecationWarning=function(e,t){if(!b.defined(e)||!b.defined(t))throw new w.DeveloperError("identifier and message are required.");W(e,t)},e.oneTimeWarning=W});