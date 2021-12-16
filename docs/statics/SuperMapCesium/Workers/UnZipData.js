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
define(["./when-8d13db60","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./createTaskProcessorWorker","./pako_inflate-8ea163f9","./CompressedTextureBuffer-21cababf","./PixelFormat-8e0e5be1"],function(l,m,e,r,u,U,p){var A,B,n=1,t=2,b={};b[0]=p.PixelFormat.RGB_DXT1,b[n]=p.PixelFormat.RGBA_DXT3,b[t]=p.PixelFormat.RGBA_DXT5;var g,w=0;function d(e){var r=e.data,n=r.byteLength,t=new Uint8Array(r,e.offset),a=g._malloc(n);!function(e,r,n,t){var a,i=n/4,f=t%4,E=new Uint32Array(e.buffer,0,(t-f)/4),u=new Uint32Array(r.buffer);for(a=0;a<E.length;a++)u[i+a]=E[a];for(a=t-f;a<t;a++)r[n+a]=e[a]}(t,g.HEAPU8,a,n);var i=g._crn_get_dxt_format(a,n),f=b[i];if(!l.defined(f))throw new m.RuntimeError("Unsupported compressed format.");var E,u=g._crn_get_levels(a,n),o=g._crn_get_width(a,n),s=g._crn_get_height(a,n),_=0;for(E=0;E<u;++E)_+=p.PixelFormat.compressedTextureSizeInBytes(f,o>>E,s>>E);if(w<_&&(l.defined(A)&&g._free(A),A=g._malloc(_),B=new Uint8Array(g.HEAPU8.buffer,A,_),w=_),g._crn_decompress(a,n,A,_,0,u),g._free(a),l.defaultValue(e.bMipMap,!1)){var d=B.slice(0,_);return new U.CompressedTextureBuffer(f,o,s,d)}var c=p.PixelFormat.compressedTextureSizeInBytes(f,o,s),T=B.subarray(0,c),y=new Uint8Array(c);return y.set(T,0),new U.CompressedTextureBuffer(f,o,s,y)}function o(e){var r=new DataView(e),n=0,t=r.getUint32(n,!0);n+=Uint32Array.BYTES_PER_ELEMENT;var a=r.getUint32(n,!0);n+=Uint32Array.BYTES_PER_ELEMENT;var i=r.getUint32(n,!0);n+=Uint32Array.BYTES_PER_ELEMENT;var f=r.getUint32(n,!0);n+=Uint32Array.BYTES_PER_ELEMENT;var E=r.getUint32(n,!0);n+=Uint32Array.BYTES_PER_ELEMENT;var u=d({data:e.slice(n,n+E)}).bufferView,o=new ArrayBuffer(n+u.byteLength),s=new Uint8Array(o),_=new Uint32Array(o);return _[n=0]=t,n+=Uint32Array.BYTES_PER_ELEMENT,_[1]=a,n+=Uint32Array.BYTES_PER_ELEMENT,_[2]=i,n+=Uint32Array.BYTES_PER_ELEMENT,_[3]=f,n+=Uint32Array.BYTES_PER_ELEMENT,_[4]=u.byteLength,n+=Uint32Array.BYTES_PER_ELEMENT,s.set(u,n),o}function a(r,n){for(var e=r.data,t=[],a=0;a<e.length;a++){var i,f=e[a];try{var E=new Uint8Array(f.zipBuffer);i=u.pako.inflate(E).buffer,r.isCRN&&(i=o(i)),n.push(i),t.push({unzipBuffer:i,name:f.name})}catch(e){f.unzipLength===f.zippedLength&&(i=f.zipBuffer.buffer,r.isCRN&&(i=o(i)),n.push(i),t.push({unzipBuffer:i,name:f.name}));continue}}return{data:t}}function i(){self.onmessage=r(a),self.postMessage(!0)}return function(e){var r=e.data.webAssemblyConfig;if(l.defined(r))return require([r.modulePath],function(e){l.defined(r.wasmBinaryFile)&&(l.defined(e)||(e=self.Module)),g=e,i()})}});