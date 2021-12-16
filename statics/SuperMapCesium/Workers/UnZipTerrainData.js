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
define(["./when-8d13db60","./createTaskProcessorWorker","./pako_inflate-8ea163f9","./unzip-9ad5f9b4"],function(n,r,t,f){var E=!1;if("undefined"!=typeof WebAssembly){f.unzip.onRuntimeInitialized=function(){E=!0};var p=f.unzip.cwrap("unzip","number",["number","number","number","number"]),l=f.unzip.cwrap("freePointer",null,["number"])}return r(function(n,r){var e,a=n.data,i=new Uint8Array(a);return!0===E?{data:e=function(n){var r=4*n.length,e=f.unzip._malloc(Uint8Array.BYTES_PER_ELEMENT*r),a=new Uint8Array(r);f.unzip.HEAPU8.set(a,e/Uint8Array.BYTES_PER_ELEMENT);var i,t=f.unzip._malloc(Uint8Array.BYTES_PER_ELEMENT*n.length);for(f.unzip.HEAPU8.set(n,t/Uint8Array.BYTES_PER_ELEMENT);0==(i=p(e,r,t,n.length));)l(e),r*=4,e=f.unzip._malloc(Uint8Array.BYTES_PER_ELEMENT*r),a=new Uint8Array(r),f.unzip.HEAPU8.set(a,e/Uint8Array.BYTES_PER_ELEMENT);var E=new Uint8Array(f.unzip.HEAPU8.buffer,e,i);a=n=null;var u=new Uint8Array(E);return l(e),l(t),u}(i)}:(e=t.pako.inflate(i).buffer,r.push(e),{data:new Uint8Array(e)})})});