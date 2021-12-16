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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./WebGLConstants-4c11ee5f","./AttributeCompression-75ce15eb","./IndexDatatype-9435b55f","./createTaskProcessorWorker"],function(a,e,W,B,z,r,H,O,n){var Y=32767,Z=new B.Cartographic,j=new B.Cartesian3;var q=new z.Rectangle,J=new z.Ellipsoid,K=new B.Cartesian3,Q={min:void 0,max:void 0};var V=new B.Cartesian3,X=new B.Cartesian3,$=new B.Cartesian3,aa=new B.Cartesian3,ea=new B.Cartesian3;return n(function(a,e){var r=new Uint16Array(a.positions),n=new Uint16Array(a.widths),t=new Uint32Array(a.counts),i=new Uint16Array(a.batchIds);!function(a){a=new Float64Array(a);var e=0;Q.min=a[e++],Q.max=a[e++],z.Rectangle.unpack(a,e,q),e+=z.Rectangle.packedLength,z.Ellipsoid.unpack(a,e,J),e+=z.Ellipsoid.packedLength,B.Cartesian3.unpack(a,e,K)}(a.packedBuffer);var s,u=J,c=K,o=function(a,e,r,n,t){var i=a.length/3,s=a.subarray(0,i),u=a.subarray(i,2*i),c=a.subarray(2*i,3*i);H.AttributeCompression.zigZagDeltaDecode(s,u,c);for(var o=new Float32Array(a.length),f=0;f<i;++f){var p=s[f],C=u[f],d=c[f],b=W.CesiumMath.lerp(e.west,e.east,p/Y),l=W.CesiumMath.lerp(e.south,e.north,C/Y),h=W.CesiumMath.lerp(r,n,d/Y),w=B.Cartographic.fromRadians(b,l,h,Z),y=t.cartographicToCartesian(w,j);B.Cartesian3.pack(y,o,3*f)}return o}(r,q,Q.min,Q.max,u),f=o.length/3,p=4*f-4,C=new Float32Array(3*p),d=new Float32Array(3*p),b=new Float32Array(3*p),l=new Float32Array(2*p),h=new Uint16Array(p),w=0,y=0,k=0,v=0,g=t.length;for(s=0;s<g;++s){for(var A=t[s],m=n[s],x=i[s],E=0;E<A;++E){var D;if(0===E){var I=B.Cartesian3.unpack(o,3*v,V),T=B.Cartesian3.unpack(o,3*(v+1),X);D=B.Cartesian3.subtract(I,T,$),B.Cartesian3.add(I,D,D)}else D=B.Cartesian3.unpack(o,3*(v+E-1),$);var U,F=B.Cartesian3.unpack(o,3*(v+E),aa);if(E===A-1){var N=B.Cartesian3.unpack(o,3*(v+A-1),V),R=B.Cartesian3.unpack(o,3*(v+A-2),X);U=B.Cartesian3.subtract(N,R,ea),B.Cartesian3.add(N,U,U)}else U=B.Cartesian3.unpack(o,3*(v+E+1),ea);B.Cartesian3.subtract(D,c,D),B.Cartesian3.subtract(F,c,F),B.Cartesian3.subtract(U,c,U);for(var M=E===A-1?2:4,P=0===E?2:0;P<M;++P){B.Cartesian3.pack(F,C,w),B.Cartesian3.pack(D,d,w),B.Cartesian3.pack(U,b,w),w+=3;var L=P-2<0?-1:1;l[y++]=P%2*2-1,l[y++]=L*m,h[k++]=x}}v+=A}var S=O.IndexDatatype.createTypedArray(p,6*f-6),_=0,G=0;for(g=f-1,s=0;s<g;++s)S[G++]=_,S[G++]=_+2,S[G++]=_+1,S[G++]=_+1,S[G++]=_+2,S[G++]=_+3,_+=4;return e.push(C.buffer,d.buffer,b.buffer),e.push(l.buffer,h.buffer,S.buffer),{indexDatatype:2===S.BYTES_PER_ELEMENT?O.IndexDatatype.UNSIGNED_SHORT:O.IndexDatatype.UNSIGNED_INT,currentPositions:C.buffer,previousPositions:d.buffer,nextPositions:b.buffer,expandAndWidth:l.buffer,batchIds:h.buffer,indices:S.buffer}})});