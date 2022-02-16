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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./EllipsoidRhumbLine-6ca4b1e6","./earcut-2.2.1-b404d9e6"],function(e,W,z,P,I,u,a,B,q,N,U,i){var t={CLOCKWISE:a.WebGLConstants.CW,COUNTER_CLOCKWISE:a.WebGLConstants.CCW,validate:function(e){return e===t.CLOCKWISE||e===t.COUNTER_CLOCKWISE}},n=Object.freeze(t),h=new I.Cartesian3,p=new I.Cartesian3,r={computeArea2D:function(e){z.Check.defined("positions",e),z.Check.typeOf.number.greaterThanOrEquals("positions.length",e.length,3);for(var a=e.length,t=0,i=a-1,n=0;n<a;i=n++){var r=e[i],s=e[n];t+=r.x*s.y-s.x*r.y}return.5*t},computeWindingOrder2D:function(e){return 0<r.computeArea2D(e)?n.COUNTER_CLOCKWISE:n.CLOCKWISE},triangulate:function(e,a){z.Check.defined("positions",e);var t=u.Cartesian2.packArray(e);return i.earcut(t,a,2)}},_=new I.Cartesian3,K=new I.Cartesian3,V=new I.Cartesian3,k=new I.Cartesian3,D=new I.Cartesian3,G=new I.Cartesian3,j=new I.Cartesian3;r.computeSubdivision=function(e,a,t,i,n){n=W.defaultValue(n,!1),i=W.defaultValue(i,P.CesiumMath.RADIANS_PER_DEGREE),z.Check.typeOf.object("ellipsoid",e),z.Check.defined("positions",a),z.Check.defined("indices",t),z.Check.typeOf.number.greaterThanOrEquals("indices.length",t.length,3),z.Check.typeOf.number.equals("indices.length % 3","0",t.length%3,0),z.Check.typeOf.number.greaterThan("granularity",i,0);var r,s=t.slice(0),o=a.length,u=new Array(3*o),h=0;for(r=0;r<o;r++){var p=a[r];u[h++]=p.x,u[h++]=p.y,u[h++]=p.z}for(var l=[],d={},c=e.maximumRadius,C=P.CesiumMath.chordLength(i,c),m=C*C;0<s.length;){var f,y,g=s.pop(),b=s.pop(),v=s.pop(),E=I.Cartesian3.fromArray(u,3*v,_),O=I.Cartesian3.fromArray(u,3*b,K),S=I.Cartesian3.fromArray(u,3*g,V),w=n?E:I.Cartesian3.multiplyByScalar(I.Cartesian3.normalize(E,k),c,k),A=n?O:I.Cartesian3.multiplyByScalar(I.Cartesian3.normalize(O,D),c,D),x=n?S:I.Cartesian3.multiplyByScalar(I.Cartesian3.normalize(S,G),c,G),R=I.Cartesian3.magnitudeSquared(I.Cartesian3.subtract(w,A,j)),L=I.Cartesian3.magnitudeSquared(I.Cartesian3.subtract(A,x,j)),T=I.Cartesian3.magnitudeSquared(I.Cartesian3.subtract(x,w,j)),M=Math.max(R,L,T);m<M?R===M?(r=d[f=Math.min(v,b)+" "+Math.max(v,b)],W.defined(r)||(y=I.Cartesian3.add(E,O,j),I.Cartesian3.multiplyByScalar(y,.5,y),u.push(y.x,y.y,y.z),r=u.length/3-1,d[f]=r),s.push(v,r,g),s.push(r,b,g)):L===M?(r=d[f=Math.min(b,g)+" "+Math.max(b,g)],W.defined(r)||(y=I.Cartesian3.add(O,S,j),I.Cartesian3.multiplyByScalar(y,.5,y),u.push(y.x,y.y,y.z),r=u.length/3-1,d[f]=r),s.push(b,r,v),s.push(r,g,v)):T===M&&(r=d[f=Math.min(g,v)+" "+Math.max(g,v)],W.defined(r)||(y=I.Cartesian3.add(S,E,j),I.Cartesian3.multiplyByScalar(y,.5,y),u.push(y.x,y.y,y.z),r=u.length/3-1,d[f]=r),s.push(g,r,b),s.push(r,v,b)):(l.push(v),l.push(b),l.push(g))}return new q.Geometry({attributes:{position:new q.GeometryAttribute({componentDatatype:B.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})},indices:l,primitiveType:N.PrimitiveType.TRIANGLES})};var F=new I.Cartographic,H=new I.Cartographic,J=new I.Cartographic,Q=new I.Cartographic;r.computeRhumbLineSubdivision=function(e,a,t,i){i=W.defaultValue(i,P.CesiumMath.RADIANS_PER_DEGREE),z.Check.typeOf.object("ellipsoid",e),z.Check.defined("positions",a),z.Check.defined("indices",t),z.Check.typeOf.number.greaterThanOrEquals("indices.length",t.length,3),z.Check.typeOf.number.equals("indices.length % 3","0",t.length%3,0),z.Check.typeOf.number.greaterThan("granularity",i,0);var n,r=t.slice(0),s=a.length,o=new Array(3*s),u=0;for(n=0;n<s;n++){var h=a[n];o[u++]=h.x,o[u++]=h.y,o[u++]=h.z}for(var p=[],l={},d=e.maximumRadius,c=P.CesiumMath.chordLength(i,d),C=new U.EllipsoidRhumbLine(void 0,void 0,e),m=new U.EllipsoidRhumbLine(void 0,void 0,e),f=new U.EllipsoidRhumbLine(void 0,void 0,e);0<r.length;){var y=r.pop(),g=r.pop(),b=r.pop(),v=I.Cartesian3.fromArray(o,3*b,_),E=I.Cartesian3.fromArray(o,3*g,K),O=I.Cartesian3.fromArray(o,3*y,V),S=e.cartesianToCartographic(v,F),w=e.cartesianToCartographic(E,H),A=e.cartesianToCartographic(O,J);C.setEndPoints(S,w);var x=C.surfaceDistance;m.setEndPoints(w,A);var R=m.surfaceDistance;f.setEndPoints(A,S);var L,T,M,k,D=f.surfaceDistance,G=Math.max(x,R,D);c<G?x===G?(n=l[L=Math.min(b,g)+" "+Math.max(b,g)],W.defined(n)||(T=C.interpolateUsingFraction(.5,Q),M=.5*(S.height+w.height),k=I.Cartesian3.fromRadians(T.longitude,T.latitude,M,e,j),o.push(k.x,k.y,k.z),n=o.length/3-1,l[L]=n),r.push(b,n,y),r.push(n,g,y)):R===G?(n=l[L=Math.min(g,y)+" "+Math.max(g,y)],W.defined(n)||(T=m.interpolateUsingFraction(.5,Q),M=.5*(w.height+A.height),k=I.Cartesian3.fromRadians(T.longitude,T.latitude,M,e,j),o.push(k.x,k.y,k.z),n=o.length/3-1,l[L]=n),r.push(g,n,b),r.push(n,y,b)):D===G&&(n=l[L=Math.min(y,b)+" "+Math.max(y,b)],W.defined(n)||(T=f.interpolateUsingFraction(.5,Q),M=.5*(A.height+S.height),k=I.Cartesian3.fromRadians(T.longitude,T.latitude,M,e,j),o.push(k.x,k.y,k.z),n=o.length/3-1,l[L]=n),r.push(y,n,g),r.push(n,b,g)):(p.push(b),p.push(g),p.push(y))}return new q.Geometry({attributes:{position:new q.GeometryAttribute({componentDatatype:B.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o})},indices:p,primitiveType:N.PrimitiveType.TRIANGLES})},r.scaleToGeodeticHeight=function(e,a,t,i){t=W.defaultValue(t,u.Ellipsoid.WGS84);var n=h,r=p;if(a=W.defaultValue(a,0),i=W.defaultValue(i,!0),W.defined(e))for(var s=e.length,o=0;o<s;o+=3)I.Cartesian3.fromArray(e,o,r),i&&(r=t.scaleToGeodeticSurface(r,r)),0!==a&&(n=t.geodeticSurfaceNormal(r,n),I.Cartesian3.multiplyByScalar(n,a,n),I.Cartesian3.add(r,n,r)),e[o]=r.x,e[o+1]=r.y,e[o+2]=r.z;return e},e.PolygonPipeline=r,e.WindingOrder=n});