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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./AttributeCompression-75ce15eb","./createTaskProcessorWorker"],function(a,e,v,y,A,M,r){var R=32767,x=new y.Cartographic,D=new y.Cartesian3,E=new A.Rectangle,F=new A.Ellipsoid,T={min:void 0,max:void 0};return r(function(a,e){var r=new Uint16Array(a.positions);!function(a){a=new Float64Array(a);var e=0;T.min=a[e++],T.max=a[e++],A.Rectangle.unpack(a,e,E),e+=A.Rectangle.packedLength,A.Ellipsoid.unpack(a,e,F)}(a.packedBuffer);var t=E,n=F,i=T.min,o=T.max,s=r.length/3,c=r.subarray(0,s),u=r.subarray(s,2*s),p=r.subarray(2*s,3*s);M.AttributeCompression.zigZagDeltaDecode(c,u,p);for(var h=new Float64Array(r.length),l=0;l<s;++l){var f=c[l],C=u[l],d=p[l],g=v.CesiumMath.lerp(t.west,t.east,f/R),m=v.CesiumMath.lerp(t.south,t.north,C/R),b=v.CesiumMath.lerp(i,o,d/R),w=y.Cartographic.fromRadians(g,m,b,x),k=n.cartographicToCartesian(w,D);y.Cartesian3.pack(k,h,3*l)}return e.push(h.buffer),{positions:h.buffer}})});