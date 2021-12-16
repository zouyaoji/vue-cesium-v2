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
define(["exports","./Math-61ede240","./Cartographic-f27b0939","./BoundingSphere-c409f092","./Transforms-1509c877"],function(a,R,S,c,x){var r={},M=new S.Cartesian3,f=new S.Cartesian3,z=new x.Quaternion,d=new c.Matrix3;function W(a,r,e,i,t,n,s,o,l,C){var y=a+r;S.Cartesian3.multiplyByScalar(i,Math.cos(y),M),S.Cartesian3.multiplyByScalar(e,Math.sin(y),f),S.Cartesian3.add(M,f,M);var u=Math.cos(a);u*=u;var h=Math.sin(a);h*=h;var m=n/Math.sqrt(s*u+t*h)/o;return x.Quaternion.fromAxisAngle(M,m,z),c.Matrix3.fromQuaternion(z,d),c.Matrix3.multiplyByVector(d,l,C),S.Cartesian3.normalize(C,C),S.Cartesian3.multiplyByScalar(C,o,C),C}var B=new S.Cartesian3,b=new S.Cartesian3,Q=new S.Cartesian3,_=new S.Cartesian3;r.raisePositionsToHeight=function(a,r,e){for(var i=r.ellipsoid,t=r.height,n=r.extrudedHeight,s=e?a.length/3*2:a.length/3,o=new Float64Array(3*s),l=a.length,C=e?l:0,y=0;y<l;y+=3){var u=y+1,h=y+2,m=S.Cartesian3.fromArray(a,y,B);i.scaleToGeodeticSurface(m,m);var c=S.Cartesian3.clone(m,b),x=i.geodeticSurfaceNormal(m,_),M=S.Cartesian3.multiplyByScalar(x,t,Q);S.Cartesian3.add(m,M,m),e&&(S.Cartesian3.multiplyByScalar(x,n,M),S.Cartesian3.add(c,M,c),o[y+C]=c.x,o[u+C]=c.y,o[h+C]=c.z),o[y]=m.x,o[u]=m.y,o[h]=m.z}return o};var G=new S.Cartesian3,H=new S.Cartesian3,N=new S.Cartesian3;r.computeEllipsePositions=function(a,r,e){var i=a.semiMinorAxis,t=a.semiMajorAxis,n=a.rotation,s=a.center,o=8*a.granularity,l=i*i,C=t*t,y=t*i,u=S.Cartesian3.magnitude(s),h=S.Cartesian3.normalize(s,G),m=S.Cartesian3.cross(S.Cartesian3.UNIT_Z,s,H);m=S.Cartesian3.normalize(m,m);var c=S.Cartesian3.cross(h,m,N),x=1+Math.ceil(R.CesiumMath.PI_OVER_TWO/o),M=R.CesiumMath.PI_OVER_TWO/(x-1),f=R.CesiumMath.PI_OVER_TWO-x*M;f<0&&(x-=Math.ceil(Math.abs(f)/M));var z,d,_,p,v,O=r?new Array(3*(x*(x+2)*2)):void 0,w=0,P=B,g=b,T=4*x*3,I=T-1,E=0,V=e?new Array(T):void 0;for(P=W(f=R.CesiumMath.PI_OVER_TWO,n,c,m,l,y,C,u,h,P),r&&(O[w++]=P.x,O[w++]=P.y,O[w++]=P.z),e&&(V[I--]=P.z,V[I--]=P.y,V[I--]=P.x),f=R.CesiumMath.PI_OVER_TWO-M,z=1;z<x+1;++z){if(P=W(f,n,c,m,l,y,C,u,h,P),g=W(Math.PI-f,n,c,m,l,y,C,u,h,g),r){for(O[w++]=P.x,O[w++]=P.y,O[w++]=P.z,_=2*z+2,d=1;d<_-1;++d)p=d/(_-1),v=S.Cartesian3.lerp(P,g,p,Q),O[w++]=v.x,O[w++]=v.y,O[w++]=v.z;O[w++]=g.x,O[w++]=g.y,O[w++]=g.z}e&&(V[I--]=P.z,V[I--]=P.y,V[I--]=P.x,V[E++]=g.x,V[E++]=g.y,V[E++]=g.z),f=R.CesiumMath.PI_OVER_TWO-(z+1)*M}for(z=x;1<z;--z){if(P=W(-(f=R.CesiumMath.PI_OVER_TWO-(z-1)*M),n,c,m,l,y,C,u,h,P),g=W(f+Math.PI,n,c,m,l,y,C,u,h,g),r){for(O[w++]=P.x,O[w++]=P.y,O[w++]=P.z,_=2*(z-1)+2,d=1;d<_-1;++d)p=d/(_-1),v=S.Cartesian3.lerp(P,g,p,Q),O[w++]=v.x,O[w++]=v.y,O[w++]=v.z;O[w++]=g.x,O[w++]=g.y,O[w++]=g.z}e&&(V[I--]=P.z,V[I--]=P.y,V[I--]=P.x,V[E++]=g.x,V[E++]=g.y,V[E++]=g.z)}P=W(-(f=R.CesiumMath.PI_OVER_TWO),n,c,m,l,y,C,u,h,P);var A={};return r&&(O[w++]=P.x,O[w++]=P.y,O[w++]=P.z,A.positions=O,A.numPts=x),e&&(V[I--]=P.z,V[I--]=P.y,V[I--]=P.x,A.outerPositions=V),A},a.EllipseGeometryLibrary=r});