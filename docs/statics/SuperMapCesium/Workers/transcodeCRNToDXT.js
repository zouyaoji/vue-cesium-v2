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
define(["./when-8d13db60","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./createTaskProcessorWorker","./CompressedTextureBuffer-21cababf","./PixelFormat-8e0e5be1"],function(w,x,e,r,y,g){var h,v,n=1,t=2,A={};A[0]=g.PixelFormat.RGB_DXT1,A[n]=g.PixelFormat.RGBA_DXT3,A[t]=g.PixelFormat.RGBA_DXT5;var P,B=0;function f(e,r){var n=e.data,t=n.byteLength,f=new Uint8Array(n),a=P._malloc(t);!function(e,r,n,t){var f,a=n/4,o=t%4,s=new Uint32Array(e.buffer,0,(t-o)/4),i=new Uint32Array(r.buffer);for(f=0;f<s.length;f++)i[a+f]=s[f];for(f=t-o;f<t;f++)r[n+f]=e[f]}(f,P.HEAPU8,a,t);var o=P._crn_get_dxt_format(a,t),s=A[o];if(!w.defined(s))throw new x.RuntimeError("Unsupported compressed format.");var i,u=P._crn_get_levels(a,t),d=P._crn_get_width(a,t),c=P._crn_get_height(a,t),l=0;for(i=0;i<u;++i)l+=g.PixelFormat.compressedTextureSizeInBytes(s,d>>i,c>>i);if(B<l&&(w.defined(h)&&P._free(h),h=P._malloc(l),v=new Uint8Array(P.HEAPU8.buffer,h,l),B=l),P._crn_decompress(a,t,h,l,0,u),P._free(a),w.defaultValue(e.bMipMap,!1)){var m=v.slice(0,l);return r.push(m.buffer),new y.CompressedTextureBuffer(s,d,c,m)}var _=g.PixelFormat.compressedTextureSizeInBytes(s,d,c),b=v.subarray(0,_),p=new Uint8Array(_);return p.set(b,0),r.push(p.buffer),new y.CompressedTextureBuffer(s,d,c,p)}function a(e){P=e,self.onmessage=r(f),self.postMessage(!0)}return function(e){var r=e.data.webAssemblyConfig;if(w.defined(r))return require([r.modulePath],function(e){w.defined(r.wasmBinaryFile)&&(w.defined(e)||(e=self.Module)),a(e)})}});