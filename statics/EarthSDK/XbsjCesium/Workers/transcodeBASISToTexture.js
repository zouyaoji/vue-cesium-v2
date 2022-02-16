define(["./when-cbf8cd21","./createTaskProcessorWorker","./CompressedTextureBuffer-8e373b49"],function(e,r,R){"use strict";var Wr,E,t=(Wr="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(Wr=Wr||__filename),function(e){var r,a=e=e||{},n={};for(r in a)a.hasOwnProperty(r)&&(n[r]=a[r]);var t,i,o=!1,u=!1;o="object"==typeof window,u="function"==typeof importScripts,t="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,i=!o&&!t&&!u;var s,c,l,f,p="";t?(p=u?require("path").dirname(p)+"/":__dirname+"/",s=function(e,r){return l=l||require("fs"),e=(f=f||require("path")).normalize(e),l.readFileSync(e,r?null:"utf8")},c=function(e){var r=s(e,!0);return r.buffer||(r=new Uint8Array(r)),T(r.buffer),r},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof function(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}))throw e}),process.on("unhandledRejection",K),a.inspect=function(){return"[Emscripten Module object]"}):i?("undefined"!=typeof read&&(s=function(e){return read(e)}),c=function(e){var r;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(T("object"==typeof(r=read(e,"binary"))),r)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(o||u)&&(u?p=self.location.href:document.currentScript&&(p=document.currentScript.src),Wr&&(p=Wr),p=0!==p.indexOf("blob:")?p.substr(0,p.lastIndexOf("/")+1):"",s=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.send(null),r.responseText},u&&(c=function(e){var r=new XMLHttpRequest;return r.open("GET",e,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var d,h,y=a.print||console.log.bind(console),v=a.printErr||console.warn.bind(console);for(r in n)n.hasOwnProperty(r)&&(a[r]=n[r]);n=null,a.arguments&&a.arguments,a.thisProgram&&a.thisProgram,a.quit&&a.quit,a.wasmBinary&&(d=a.wasmBinary),a.noExitRuntime&&a.noExitRuntime,"object"!=typeof WebAssembly&&v("no native wasm support detected");var m=new WebAssembly.Table({initial:59,maximum:59,element:"anyfunc"}),g=!1;function T(e,r){e||K("Assertion failed: "+r)}var C="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function w(e,r,n){for(var t=r+n,i=r;e[i]&&!(t<=i);)++i;if(16<i-r&&e.subarray&&C)return C.decode(e.subarray(r,i));for(var o="";r<i;){var a=e[r++];if(128&a){var u=63&e[r++];if(192!=(224&a)){var s=63&e[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&e[r++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function b(e,r){return e?w($,e,r):""}var _,P,$,A,F,R,E,S,B,W="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function I(e){for(var r=e,n=r>>1;A[n];)++n;if(32<(r=n<<1)-e&&W)return W.decode($.subarray(e,r));for(var t=0,i="";;){var o=A[e+2*t>>1];if(0==o)return i;++t,i+=String.fromCharCode(o)}}function O(e,r,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var t=r,i=(n-=2)<2*e.length?n/2:e.length,o=0;o<i;++o){var a=e.charCodeAt(o);A[r>>1]=a,r+=2}return A[r>>1]=0,r-t}function k(e){return 2*e.length}function j(e){for(var r=0,n="";;){var t=R[e+4*r>>2];if(0==t)return n;if(++r,65536<=t){var i=t-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(t)}}function x(e,r,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var t=r,i=t+n-4,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(55296<=a&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),R[r>>2]=a,i<(r+=4)+4)break}return R[r>>2]=0,r-t}function D(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);55296<=t&&t<=57343&&++n,r+=4}return r}function U(e){_=e,a.HEAP8=P=new Int8Array(e),a.HEAP16=A=new Int16Array(e),a.HEAP32=R=new Int32Array(e),a.HEAPU8=$=new Uint8Array(e),a.HEAPU16=F=new Uint16Array(e),a.HEAPU32=E=new Uint32Array(e),a.HEAPF32=S=new Float32Array(e),a.HEAPF64=B=new Float64Array(e)}var V=a.INITIAL_MEMORY||16777216;function G(e){for(;0<e.length;){var r=e.shift();if("function"!=typeof r){var n=r.func;"number"==typeof n?void 0===r.arg?a.dynCall_v(n):a.dynCall_vi(n,r.arg):n(void 0===r.arg?null:r.arg)}else r()}}(h=a.wasmMemory?a.wasmMemory:new WebAssembly.Memory({initial:V/65536}))&&(_=h.buffer),V=_.byteLength,U(_),R[79544]=5561216;var M=[],H=[],q=[],z=[],N=Math.ceil,L=Math.floor,X=0,J=null;function K(e){throw a.onAbort&&a.onAbort(e),y(e+=""),v(e),g=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(e)}a.preloadedImages={},a.preloadedAudios={};var Y="data:application/octet-stream;base64,";function Z(e){return String.prototype.startsWith?e.startsWith(Y):0===e.indexOf(Y)}var Q,ee="basis_transcoder.wasm";function re(){try{if(d)return new Uint8Array(d);if(c)return c(ee);throw"both async and sync fetching of the wasm failed"}catch(e){K(e)}}function ne(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}Z(ee)||(Q=ee,ee=a.locateFile?a.locateFile(Q,p):p+Q),H.push({func:function(){Fr()}});var te=void 0;function ie(e){for(var r="",n=e;$[n];)r+=te[$[n++]];return r}var oe={},ae={},ue={},se=48,ce=57;function le(e){if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return se<=r&&r<=ce?"_"+e:e}function fe(e,r){return e=le(e),new Function("body","return function "+e+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function pe(e,n){var r=fe(n,function(e){this.name=n,this.message=e;var r=new Error(e).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(e.prototype),(r.prototype.constructor=r).prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var de=void 0;function he(e){throw new de(e)}var ye=void 0;function ve(e){throw new ye(e)}function me(t,r,i){function n(e){var r=i(e);r.length!==t.length&&ve("Mismatched type converter count");for(var n=0;n<t.length;++n)ge(t[n],r[n])}t.forEach(function(e){ue[e]=r});var o=new Array(r.length),a=[],u=0;r.forEach(function(e,r){ae.hasOwnProperty(e)?o[r]=ae[e]:(a.push(e),oe.hasOwnProperty(e)||(oe[e]=[]),oe[e].push(function(){o[r]=ae[e],++u===a.length&&n(o)}))}),0===a.length&&n(o)}function ge(e,r,n){if(n=n||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(e||he('type "'+t+'" must have a positive integer typeid pointer'),ae.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;he("Cannot register type '"+t+"' twice")}if(ae[e]=r,delete ue[e],oe.hasOwnProperty(e)){var i=oe[e];delete oe[e],i.forEach(function(e){e()})}}function Te(e){if(!(this instanceof We))return!1;if(!(e instanceof We))return!1;for(var r=this.$$.ptrType.registeredClass,n=this.$$.ptr,t=e.$$.ptrType.registeredClass,i=e.$$.ptr;r.baseClass;)n=r.upcast(n),r=r.baseClass;for(;t.baseClass;)i=t.upcast(i),t=t.baseClass;return r===t&&n===i}function Ce(e){he(e.$$.ptrType.registeredClass.name+" instance already deleted")}var we=!1;function be(e){}function _e(e){e.count.value-=1,0===e.count.value&&function(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}(e)}function Pe(e){return"undefined"==typeof FinalizationGroup?(Pe=function(e){return e},e):(we=new FinalizationGroup(function(e){for(var r=e.next();!r.done;r=e.next()){var n=r.value;n.ptr?_e(n):console.warn("object already deleted: "+n.ptr)}}),be=function(e){we.unregister(e.$$)},(Pe=function(e){return we.register(e,e.$$,e.$$),e})(e))}function $e(){if(this.$$.ptr||Ce(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=Pe(Object.create(Object.getPrototypeOf(this),{$$:{value:function(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function Ae(){this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&he("Object already scheduled for deletion"),be(this),_e(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function Fe(){return!this.$$.ptr}var Re=void 0,Ee=[];function Se(){for(;Ee.length;){var e=Ee.pop();e.$$.deleteScheduled=!1,e.delete()}}function Be(){return this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&he("Object already scheduled for deletion"),Ee.push(this),1===Ee.length&&Re&&Re(Se),this.$$.deleteScheduled=!0,this}function We(){}var Ie={};function Oe(e,r,n){if(void 0===e[r].overloadTable){var t=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||he("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[r].overloadTable+")!"),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[t.argCount]=t}}function ke(e,r,n){a.hasOwnProperty(e)?((void 0===n||void 0!==a[e].overloadTable&&void 0!==a[e].overloadTable[n])&&he("Cannot register public name '"+e+"' twice"),Oe(a,e,e),a.hasOwnProperty(n)&&he("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),a[e].overloadTable[n]=r):(a[e]=r,void 0!==n&&(a[e].numArguments=n))}function je(e,r,n,t,i,o,a,u){this.name=e,this.constructor=r,this.instancePrototype=n,this.rawDestructor=t,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function xe(e,r,n){for(;r!==n;)r.upcast||he("Expected null or instance of "+n.name+", got an instance of "+r.name),e=r.upcast(e),r=r.baseClass;return e}function De(e,r){if(null===r)return this.isReference&&he("null is not a valid "+this.name),0;r.$$||he('Cannot pass "'+hr(r)+'" as a '+this.name),r.$$.ptr||he("Cannot pass deleted object as a pointer of type "+this.name);var n=r.$$.ptrType.registeredClass;return xe(r.$$.ptr,n,this.registeredClass)}function Ue(e,r){var n;if(null===r)return this.isReference&&he("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,n),n):0;r.$$||he('Cannot pass "'+hr(r)+'" as a '+this.name),r.$$.ptr||he("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&he("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);var t=r.$$.ptrType.registeredClass;if(n=xe(r.$$.ptr,t,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&he("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?n=r.$$.smartPtr:he("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)n=r.$$.smartPtr;else{var i=r.clone();n=this.rawShare(n,dr(function(){i.delete()})),null!==e&&e.push(this.rawDestructor,n)}break;default:he("Unsupporting sharing policy")}return n}function Ve(e,r){if(null===r)return this.isReference&&he("null is not a valid "+this.name),0;r.$$||he('Cannot pass "'+hr(r)+'" as a '+this.name),r.$$.ptr||he("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&he("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name);var n=r.$$.ptrType.registeredClass;return xe(r.$$.ptr,n,this.registeredClass)}function Ge(e){return this.fromWireType(E[e>>2])}function Me(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function He(e){this.rawDestructor&&this.rawDestructor(e)}function qe(e){null!==e&&e.delete()}function ze(){return Object.keys(Xe).length}function Ne(){var e=[];for(var r in Xe)Xe.hasOwnProperty(r)&&e.push(Xe[r]);return e}function Le(e){Re=e,Ee.length&&Re&&Re(Se)}var Xe={};function Je(e,r){return r=function(e,r){for(void 0===r&&he("ptr should not be undefined");e.baseClass;)r=e.upcast(r),e=e.baseClass;return r}(e,r),Xe[r]}function Ke(e,r){return r.ptrType&&r.ptr||ve("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&ve("Both smartPtrType and smartPtr must be specified"),r.count={value:1},Pe(Object.create(e,{$$:{value:r}}))}function Ye(e){var r=this.getPointee(e);if(!r)return this.destructor(e),null;var n=Je(this.registeredClass,r);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=r,n.$$.smartPtr=e,n.clone();var t=n.clone();return this.destructor(e),t}function i(){return this.isSmartPointer?Ke(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:e}):Ke(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var o,a=this.registeredClass.getActualType(r),u=Ie[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=function e(r,n,t){if(n===t)return r;if(void 0===t.baseClass)return null;var i=e(r,n,t.baseClass);return null===i?null:t.downcast(i)}(r,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?Ke(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:e}):Ke(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function Ze(e,r,n,t,i,o,a,u,s,c,l){this.name=e,this.registeredClass=r,this.isReference=n,this.isConst=t,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==r.baseClass?this.toWireType=Ue:(this.toWireType=t?De:Ve,this.destructorFunction=null)}function Qe(e,r,n){a.hasOwnProperty(e)||ve("Replacing nonexistant public symbol"),void 0!==a[e].overloadTable&&void 0!==n?a[e].overloadTable[n]=r:(a[e]=r,a[e].argCount=n)}function er(i,o){i=ie(i);var e=function(e){for(var r=[],n=1;n<i.length;++n)r.push("a"+n);var t="return function dynCall_"+i+"_"+o+"("+r.join(", ")+") {\n";return t+="    return dynCall(rawFunction"+(r.length?", ":"")+r.join(", ")+");\n",t+="};\n",new Function("dynCall","rawFunction",t)(e,o)}(a["dynCall_"+i]);return"function"!=typeof e&&he("unknown function pointer with signature "+i+": "+o),e}var rr=void 0;function nr(e){var r=Sr(e),n=ie(r);return Er(r),n}function tr(e,r){var n=[],t={};throw r.forEach(function e(r){t[r]||ae[r]||(ue[r]?ue[r].forEach(e):(n.push(r),t[r]=!0))}),new rr(e+": "+n.map(nr).join([", "]))}function ir(e,r){for(var n=[],t=0;t<e;t++)n.push(R[(r>>2)+t]);return n}function or(e){for(;e.length;){var r=e.pop();e.pop()(r)}}function ar(e,r){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var n=fe(e.name||"unknownFunctionName",function(){});n.prototype=e.prototype;var t=new n,i=e.apply(t,r);return i instanceof Object?i:t}function ur(e,r,n,t,i){var o=r.length;o<2&&he("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==n,u=!1,s=1;s<r.length;++s)if(null!==r[s]&&void 0===r[s].destructorFunction){u=!0;break}var c="void"!==r[0].name,l="",f="";for(s=0;s<o-2;++s)l+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+le(e)+"("+l+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+e+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",h=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],y=[he,t,i,or,r[0],r[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+r[s+2].name+"\n",h.push("argType"+s),y.push(r[s+2]);if(a&&(f="thisWired"+(0<f.length?", ":"")+f),p+=(c?"var rv = ":"")+"invoker(fn"+(0<f.length?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<r.length;++s){var v=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==r[s].destructorFunction&&(p+=v+"_dtor("+v+"); // "+r[s].name+"\n",h.push(v+"_dtor"),y.push(r[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",h.push(p),ar(Function,h).apply(null,y)}var sr=[],cr=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function lr(e){4<e&&0==--cr[e].refcount&&(cr[e]=void 0,sr.push(e))}function fr(){for(var e=0,r=5;r<cr.length;++r)void 0!==cr[r]&&++e;return e}function pr(){for(var e=5;e<cr.length;++e)if(void 0!==cr[e])return cr[e];return null}function dr(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=sr.length?sr.pop():cr.length;return cr[r]={refcount:1,value:e},r}}function hr(e){if(null===e)return"null";var r=typeof e;return"object"==r||"array"==r||"function"==r?e.toString():""+e}function yr(e){return e||he("Cannot use deleted val. handle = "+e),cr[e].value}function vr(e,r){var n=ae[e];return void 0===n&&he(r+" has unknown type "+nr(e)),n}var mr={};function gr(e){var r=mr[e];return void 0===r?ie(e):r}var Tr=[];function Cr(){return"object"==typeof globalThis?globalThis:Function("return this")()}var wr={};function br(e){try{return h.grow(e-_.byteLength+65535>>16),U(h.buffer),1}catch(e){}}var _r={mappings:{},buffers:[null,[],[]],printChar:function(e,r){var n=_r.buffers[e];0===r||10===r?((1===e?y:v)(w(n,0)),n.length=0):n.push(r)},varargs:void 0,get:function(){return _r.varargs+=4,R[_r.varargs-4>>2]},getStr:function(e){return b(e)},get64:function(e,r){return e}};!function(){for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);te=e}(),de=a.BindingError=pe(Error,"BindingError"),ye=a.InternalError=pe(Error,"InternalError"),We.prototype.isAliasOf=Te,We.prototype.clone=$e,We.prototype.delete=Ae,We.prototype.isDeleted=Fe,We.prototype.deleteLater=Be,Ze.prototype.getPointee=Me,Ze.prototype.destructor=He,Ze.prototype.argPackAdvance=8,Ze.prototype.readValueFromPointer=Ge,Ze.prototype.deleteObject=qe,Ze.prototype.fromWireType=Ye,a.getInheritedInstanceCount=ze,a.getLiveInheritedInstances=Ne,a.flushPendingDeletes=Se,a.setDelayFunction=Le,rr=a.UnboundTypeError=pe(Error,"UnboundTypeError"),a.count_emval_handles=fr,a.get_first_emval=pr;var Pr={G:function(e){return Rr(e)},D:function(e,r,n){throw e},A:function(e,n,t,i,o){var a=ne(t);ge(e,{name:n=ie(n),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?i:o},argPackAdvance:8,readValueFromPointer:function(e){var r;if(1===t)r=P;else if(2===t)r=A;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+n);r=R}return this.fromWireType(r[e>>a])},destructorFunction:null})},t:function(c,e,r,l,n,f,t,p,i,d,h,o,y){h=ie(h),f=er(n,f),p=p&&er(t,p),d=d&&er(i,d),y=er(o,y);var v=le(h);ke(v,function(){tr("Cannot construct "+h+" due to unbound types",[l])}),me([c,e,r],l?[l]:[],function(e){var r,n;e=e[0],n=l?(r=e.registeredClass).instancePrototype:We.prototype;var t=fe(v,function(){if(Object.getPrototypeOf(this)!==i)throw new de("Use 'new' to construct "+h);if(void 0===o.constructor_body)throw new de(h+" has no accessible constructor");var e=o.constructor_body[arguments.length];if(void 0===e)throw new de("Tried to invoke ctor of "+h+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(o.constructor_body).toString()+") parameters instead!");return e.apply(this,arguments)}),i=Object.create(n,{constructor:{value:t}});t.prototype=i;var o=new je(h,t,i,y,r,f,p,d),a=new Ze(h,o,!0,!1,!1),u=new Ze(h+"*",o,!1,!1,!1),s=new Ze(h+" const*",o,!1,!0,!1);return Ie[c]={pointerType:u,constPointerType:s},Qe(v,t),[a,u,s]})},s:function(e,i,r,n,o,t){T(0<i);var a=ir(i,r);o=er(n,o);var u=[t],s=[];me([],[e],function(e){var t="constructor "+(e=e[0]).name;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[i-1])throw new de("Cannot register multiple constructors with identical number of parameters ("+(i-1)+") for class '"+e.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return e.registeredClass.constructor_body[i-1]=function(){tr("Cannot construct "+e.name+" due to unbound types",a)},me([],a,function(n){return e.registeredClass.constructor_body[i-1]=function(){arguments.length!==i-1&&he(t+" called with "+arguments.length+" arguments, expected "+(i-1)),s.length=0,u.length=i;for(var e=1;e<i;++e)u[e]=n[e].toWireType(s,arguments[e-1]);var r=o.apply(null,u);return or(s),n[0].fromWireType(r)},[]}),[]})},c:function(e,o,a,r,n,u,s,c){var l=ir(a,r);o=ie(o),u=er(n,u),me([],[e],function(n){var t=(n=n[0]).name+"."+o;function e(){tr("Cannot call "+t+" due to unbound types",l)}c&&n.registeredClass.pureVirtualFunctions.push(o);var i=n.registeredClass.instancePrototype,r=i[o];return void 0===r||void 0===r.overloadTable&&r.className!==n.name&&r.argCount===a-2?(e.argCount=a-2,e.className=n.name,i[o]=e):(Oe(i,o,t),i[o].overloadTable[a-2]=e),me([],l,function(e){var r=ur(t,e,n,u,s);return void 0===i[o].overloadTable?(r.argCount=a-2,i[o]=r):i[o].overloadTable[a-2]=r,[]}),[]})},z:function(e,r){ge(e,{name:r=ie(r),fromWireType:function(e){var r=cr[e].value;return lr(e),r},toWireType:function(e,r){return dr(r)},argPackAdvance:8,readValueFromPointer:Ge,destructorFunction:null})},j:function(e,r,n){var t=ne(n);ge(e,{name:r=ie(r),fromWireType:function(e){return e},toWireType:function(e,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+hr(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:function(e,r){switch(r){case 2:return function(e){return this.fromWireType(S[e>>2])};case 3:return function(e){return this.fromWireType(B[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}(r,t),destructorFunction:null})},x:function(n,t,e,r,i,o){var a=ir(t,e);n=ie(n),i=er(r,i),ke(n,function(){tr("Cannot call "+n+" due to unbound types",a)},t-1),me([],a,function(e){var r=[e[0],null].concat(e.slice(1));return Qe(n,ur(n,r,null,i,o),t-1),[]})},d:function(e,n,r,t,i){n=ie(n),-1===i&&(i=4294967295);var o=ne(r),a=function(e){return e};if(0===t){var u=32-8*r;a=function(e){return e<<u>>>u}}var s=-1!=n.indexOf("unsigned");ge(e,{name:n,fromWireType:a,toWireType:function(e,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+hr(r)+'" to '+this.name);if(r<t||i<r)throw new TypeError('Passing a number "'+hr(r)+'" from JS side to C/C++ side to an argument of type "'+n+'", which is outside the valid range ['+t+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:function(e,r,n){switch(r){case 0:return n?function(e){return P[e]}:function(e){return $[e]};case 1:return n?function(e){return A[e>>1]}:function(e){return F[e>>1]};case 2:return n?function(e){return R[e>>2]}:function(e){return E[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}(n,o,0!==t),destructorFunction:null})},b:function(e,r,n){var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function t(e){var r=E,n=r[e>>=2],t=r[e+1];return new i(_,t,n)}ge(e,{name:n=ie(n),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{ignoreDuplicateRegistrations:!0})},k:function(e,r){var l="std::string"===(r=ie(r));ge(e,{name:r,fromWireType:function(e){var r,n=E[e>>2];if(l){var t=$[e+4+n],i=0;0!=t&&(i=t,$[e+4+n]=0);for(var o=e+4,a=0;a<=n;++a){var u=e+4+a;if(0==$[u]){var s=b(o);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),o=u+1}}0!=i&&($[e+4+n]=i)}else{var c=new Array(n);for(a=0;a<n;++a)c[a]=String.fromCharCode($[e+4+a]);r=c.join("")}return Er(e),r},toWireType:function(e,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var n="string"==typeof r;n||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||he("Cannot pass non-string to std::string");var t=(l&&n?function(){return function(e){for(var r=0,n=0;n<e.length;++n){var t=e.charCodeAt(n);55296<=t&&t<=57343&&(t=65536+((1023&t)<<10)|1023&e.charCodeAt(++n)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(r)}:function(){return r.length})(),i=Rr(4+t+1);if(E[i>>2]=t,l&&n)!function(e,r,n){!function(e,r,n,t){if(0<t){for(var i=n+t-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(55296<=a&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(i<=n)break;r[n++]=a}else if(a<=2047){if(i<=n+1)break;r[n++]=192|a>>6,r[n++]=128|63&a}else if(a<=65535){if(i<=n+2)break;r[n++]=224|a>>12,r[n++]=128|a>>6&63,r[n++]=128|63&a}else{if(i<=n+3)break;r[n++]=240|a>>18,r[n++]=128|a>>12&63,r[n++]=128|a>>6&63,r[n++]=128|63&a}}r[n]=0}}(e,$,r,n)}(r,i+4,t+1);else if(n)for(var o=0;o<t;++o){var a=r.charCodeAt(o);255<a&&(Er(i),he("String has UTF-16 code units that do not fit in 8 bits")),$[i+4+o]=a}else for(o=0;o<t;++o)$[i+4+o]=r[o];return null!==e&&e.push(Er,i),i},argPackAdvance:8,readValueFromPointer:Ge,destructorFunction:function(e){Er(e)}})},i:function(e,l,i){var f,o,p,a,d;i=ie(i),2===l?(f=I,o=O,a=k,p=function(){return F},d=1):4===l&&(f=j,o=x,a=D,p=function(){return E},d=2),ge(e,{name:i,fromWireType:function(e){var r,n=E[e>>2],t=p(),i=t[e+4+n*l>>d],o=0;0!=i&&(o=i,t[e+4+n*l>>d]=0);for(var a=e+4,u=0;u<=n;++u){var s=e+4+u*l;if(0==t[s>>d]){var c=f(a);void 0===r?r=c:(r+=String.fromCharCode(0),r+=c),a=s+l}}return 0!=o&&(t[e+4+n*l>>d]=o),Er(e),r},toWireType:function(e,r){"string"!=typeof r&&he("Cannot pass non-string to C++ string type "+i);var n=a(r),t=Rr(4+n+l);return E[t>>2]=n>>d,o(r,t+4,n+l),null!==e&&e.push(Er,t),t},argPackAdvance:8,readValueFromPointer:Ge,destructorFunction:function(e){Er(e)}})},B:function(e,r){ge(e,{isVoid:!0,name:r=ie(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,r){}})},r:function(e,r,n){e=yr(e),r=vr(r,"emval::as");var t=[],i=dr(t);return R[n>>2]=i,r.toWireType(t,e)},m:function(e,r,n,t){(e=Tr[e])(r=yr(r),n=gr(n),null,t)},a:lr,F:function(e){return 0===e?dr(Cr()):(e=gr(e),dr(Cr()[e]))},n:function(e,r){for(var n=function(e,r){for(var n=new Array(e),t=0;t<e;++t)n[t]=vr(R[(r>>2)+t],"parameter "+t);return n}(e,r),t=n[0],i=t.name+"_$"+n.slice(1).map(function(e){return e.name}).join("_")+"$",o=["retType"],a=[t],u="",s=0;s<e-1;++s)u+=(0!==s?", ":"")+"arg"+s,o.push("argType"+s),a.push(n[1+s]);var c="return function "+le("methodCaller_"+i)+"(handle, name, destructors, args) {\n",l=0;for(s=0;s<e-1;++s)c+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(l?"+"+l:"")+");\n",l+=n[s+1].argPackAdvance;for(c+="    var rv = handle[name]("+u+");\n",s=0;s<e-1;++s)n[s+1].deleteObject&&(c+="    argType"+s+".deleteObject(arg"+s+");\n");return t.isVoid||(c+="    return retType.toWireType(destructors, rv);\n"),c+="};\n",o.push(c),function(e){var r=Tr.length;return Tr.push(e),r}(ar(Function,o).apply(null,a))},p:function(e){return e=gr(e),dr(a[e])},f:function(e,r){return dr((e=yr(e))[r=yr(r)])},h:function(e){4<e&&(cr[e].refcount+=1)},o:function(e,r,n,t){e=yr(e);var i=wr[r];return i||(i=function(e){for(var r="",n=0;n<e;++n)r+=(0!==n?", ":"")+"arg"+n;var t="return function emval_allocator_"+e+"(constructor, argTypes, args) {\n";for(n=0;n<e;++n)t+="var argType"+n+" = requireRegisteredType(Module['HEAP32'][(argTypes >> 2) + "+n+'], "parameter '+n+'");\nvar arg'+n+" = argType"+n+".readValueFromPointer(args);\nargs += argType"+n+"['argPackAdvance'];\n";return t+="var obj = new constructor("+r+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",t)(vr,a,dr)}(r),wr[r]=i),i(e,n,t)},g:function(e){return dr(gr(e))},q:function(e){or(cr[e].value),lr(e)},E:function(){K()},w:function(e,r,n){$.copyWithin(e,r,r+n)},y:function(e){var r=$.length,n=2147418112;if(n<e)return!1;for(var t,i,o=1;o<=4;o*=2){var a=r*(1+.2/o);if(a=Math.min(a,e+100663296),br(Math.min(n,(0<(t=Math.max(16777216,e,a))%(i=65536)&&(t+=i-t%i),t))))return!0}return!1},C:function(e){return 0},u:function(e,r,n,t,i){},l:function(e,r,n,t){for(var i=0,o=0;o<n;o++){for(var a=R[r+8*o>>2],u=R[r+(8*o+4)>>2],s=0;s<u;s++)_r.printChar(e,$[a+s]);i+=u}return R[t>>2]=i,0},memory:h,e:function(e){return 0<=(e=+e)?+L(e+.5):+N(e-.5)},v:function(e){},table:m},$r=function(){var r={a:Pr};function n(e,r){var n=e.exports;a.asm=n,function(){if(X--,a.monitorRunDependencies&&a.monitorRunDependencies(X),0==X&&J){var e=J;J=null,e()}}()}function t(e){n(e.instance)}function i(e){return(d||!o&&!u||"function"!=typeof fetch?new Promise(function(e,r){e(re())}):fetch(ee,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+ee+"'";return e.arrayBuffer()}).catch(function(){return re()})).then(function(e){return WebAssembly.instantiate(e,r)}).then(e,function(e){v("failed to asynchronously prepare wasm: "+e),K(e)})}if(X++,a.monitorRunDependencies&&a.monitorRunDependencies(X),a.instantiateWasm)try{return a.instantiateWasm(r,n)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(d||"function"!=typeof WebAssembly.instantiateStreaming||Z(ee)||"function"!=typeof fetch)return i(t);fetch(ee,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,r).then(t,function(e){v("wasm streaming compile failed: "+e),v("falling back to ArrayBuffer instantiation"),i(t)})})}(),{}}();a.asm=$r;var Ar,Fr=a.___wasm_call_ctors=function(){return(Fr=a.___wasm_call_ctors=a.asm.H).apply(null,arguments)},Rr=a._malloc=function(){return(Rr=a._malloc=a.asm.I).apply(null,arguments)},Er=a._free=function(){return(Er=a._free=a.asm.J).apply(null,arguments)},Sr=a.___getTypeName=function(){return(Sr=a.___getTypeName=a.asm.K).apply(null,arguments)};function Br(e){function r(){Ar||(Ar=!0,a.calledRun=!0,g||(G(H),G(q),a.onRuntimeInitialized&&a.onRuntimeInitialized(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)e=a.postRun.shift(),z.unshift(e);var e;G(z)}()))}0<X||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)e=a.preRun.shift(),M.unshift(e);var e;G(M)}(),0<X||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1),r()},1)):r()))}if(a.___embind_register_native_and_builtin_types=function(){return(a.___embind_register_native_and_builtin_types=a.asm.L).apply(null,arguments)},a.dynCall_viii=function(){return(a.dynCall_viii=a.asm.M).apply(null,arguments)},a.dynCall_ii=function(){return(a.dynCall_ii=a.asm.N).apply(null,arguments)},a.dynCall_vi=function(){return(a.dynCall_vi=a.asm.O).apply(null,arguments)},a.dynCall_v=function(){return(a.dynCall_v=a.asm.P).apply(null,arguments)},a.dynCall_iii=function(){return(a.dynCall_iii=a.asm.Q).apply(null,arguments)},a.dynCall_vii=function(){return(a.dynCall_vii=a.asm.R).apply(null,arguments)},a.dynCall_iiii=function(){return(a.dynCall_iiii=a.asm.S).apply(null,arguments)},a.dynCall_iiiii=function(){return(a.dynCall_iiiii=a.asm.T).apply(null,arguments)},a.dynCall_iiiiii=function(){return(a.dynCall_iiiiii=a.asm.U).apply(null,arguments)},a.dynCall_iiiiiiii=function(){return(a.dynCall_iiiiiiii=a.asm.V).apply(null,arguments)},a.dynCall_iiiiiiiii=function(){return(a.dynCall_iiiiiiiii=a.asm.W).apply(null,arguments)},a.dynCall_iidiiii=function(){return(a.dynCall_iidiiii=a.asm.X).apply(null,arguments)},a.dynCall_jiji=function(){return(a.dynCall_jiji=a.asm.Y).apply(null,arguments)},a.dynCall_viiiiii=function(){return(a.dynCall_viiiiii=a.asm.Z).apply(null,arguments)},a.dynCall_viiiii=function(){return(a.dynCall_viiiii=a.asm._).apply(null,arguments)},a.dynCall_viiii=function(){return(a.dynCall_viiii=a.asm.$).apply(null,arguments)},a.asm=$r,a.then=function(e){if(Ar)e(a);else{var r=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){r&&r(),e(a)}}return a},J=function e(){Ar||Br(),Ar||(J=e)},a.run=Br,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();return Br(),e}),S=37808,B=36196,W=35840,I=35842,O={cTFETC1:0,cTFETC2:1,cTFBC1:2,cTFBC3:3,cTFBC4:4,cTFBC5:5,cTFBC7:6,cTFPVRTC1_4_RGB:8,cTFPVRTC1_4_RGBA:9,cTFASTC_4x4:10,cTFATC_RGB:11,cTFATC_RGBA_INTERPOLATED_ALPHA:12,cTFRGBA32:13,cTFRGB565:14,cTFBGR565:15,cTFRGBA4444:16},k={};k[O.cTFBC1]=33776,k[O.cTFBC3]=33779,k[O.cTFBC7]=36492;var n=function(){var n;console.log("BASIS init...");var e=fetch("../ThirdParty/basis_transcoder.wasm").then(function(e){return e.arrayBuffer()}).then(function(r){return new Promise(function(e){t(n={wasmBinary:r,onRuntimeInitialized:e})})}).then(function(){E=n.BasisFile,(0,n.initializeBasis)()}).catch(function(e){console.error("transcodeBASIS failed! "+e)});return console.log("BASIS initialized!"),e}();return r(function(e,r){return n.then(function(){return function(e,r){var n=e.data,t=e.textureFormat;if(E){var i=performance.now(),o=new E(n),a=o.getImageWidth(0,0),u=o.getImageHeight(0,0),s=o.getNumImages(),c=o.getNumLevels(0),l=o.getHasAlpha();if(!(a&&u&&s&&c))return console.warn("Invalid .basis file"),o.close(),void o.delete();var f,p="etc1"===t,d="pvrtc"===t,h="UNKNOWN";if("s3tc"===t?f=l?(h="BC3",O.cTFBC3):(h="BC1",O.cTFBC1):d?(f=l?(h="PVRTC1_RGBA",O.cTFPVRTC1_4_RGBA):(h="PVRTC1_RGB",O.cTFPVRTC1_4_RGB),0==(a&a-1)&&0==(u&u-1)||console.log("ERROR: PVRTC1 requires square power of 2 textures"),a!==u&&console.log("ERROR: PVRTC1 requires square power of 2 textures")):p?(h="ETC1",f=O.cTFETC1):(h="RGB565",f=O.cTFRGB565,console.log("Decoding .basis data to 565")),console.log("format: "+h),!o.startTranscoding())return console.log("startTranscoding failed"),console.warn("startTranscoding failed"),o.close(),void o.delete();for(var y=[],v=0;v<c;v++){var m=o.getImageWidth(0,v),g=o.getImageHeight(0,v),T=new Uint8Array(o.getImageTranscodedSizeInBytes(0,v,f));if(!o.transcodeImage(T,0,v,f,0,l))throw console.log("basisFile.transcodeImage failed"),console.warn("transcodeImage failed"),o.close(),o.delete(),new Error("THREE.BasisTextureLoader: .transcodeImage failed.");y.push({data:T,width:m,height:g})}var C,w=performance.now()-i;o.close(),o.delete(),console.log("width: "+a),console.log("height: "+u),console.log("images: "+s),console.log("first image mipmap levels: "+c),console.log("has_alpha: "+l),console.log("transcoding time: "+w.toFixed(2)),f===O.cTFASTC_4x4?C=S:f===O.cTFBC3||f===O.cTFBC1||f===O.cTFBC7?C=k[f]:f===O.cTFETC1?C=B:f===O.cTFPVRTC1_4_RGB?C=W:f===O.cTFPVRTC1_4_RGBA?C=I:console.error("format error: "+f);var b,_=a+3&-4,P=u+3&-4,$=y[0].data,A=y.length;if(1<A){b=b||[];for(var F=1;F<A;++F)b.push(y[F].data)}return r.push($.buffer),new R.CompressedTextureBuffer(C,_,P,$,b)}console.warn("BASIS还未准备好！")}(e,r)}).catch(function(e){console.error("transcodeBASIS error: "+e)})})});