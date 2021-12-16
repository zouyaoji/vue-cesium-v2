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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./GeometryAttribute-2243653a"],function(t,Y,x,P,R,W,n,_){var v=Math.cos,O=Math.sin,f=Math.sqrt,a={computePosition:function(t,n,a,r,e,o,i){var s=n.radiiSquared,h=t.nwCorner,g=t.boundingRectangle,u=h.latitude-t.granYCos*r+e*t.granXSin,C=v(u),c=O(u),l=s.z*c,d=h.longitude+r*t.granYSin+e*t.granXCos,S=C*v(d),M=C*O(d),w=s.x*S,m=s.y*M,p=f(w*S+m*M+l*c);if(o.x=w/p,o.y=m/p,o.z=l/p,a){var X=t.stNwCorner;Y.defined(X)?(u=X.latitude-t.stGranYCos*r+e*t.stGranXSin,d=X.longitude+r*t.stGranYSin+e*t.stGranXCos,i.x=(d-t.stWest)*t.lonScalar,i.y=(u-t.stSouth)*t.latScalar):(i.x=(d-g.west)*t.lonScalar,i.y=(u-g.south)*t.latScalar)}}},G=new _.Matrix2,y=new R.Cartesian3,I=new R.Cartographic,b=new R.Cartesian3,T=new n.GeographicProjection;function E(t,n,a,r,e,o,i){var s=Math.cos(n),h=r*s,g=a*s,u=Math.sin(n),C=r*u,c=a*u;y=T.project(t,y),y=R.Cartesian3.subtract(y,b,y);var l=_.Matrix2.fromRotation(n,G);y=_.Matrix2.multiplyByVector(l,y,y),y=R.Cartesian3.add(y,b,y),o-=1,i-=1;var d=(t=T.unproject(y,t)).latitude,S=d+o*c,M=d-h*i,w=d-h*i+o*c,m=Math.max(d,S,M,w),p=Math.min(d,S,M,w),X=t.longitude,Y=X+o*g,v=X+i*C,O=X+i*C+o*g;return{north:m,south:p,east:Math.max(X,Y,v,O),west:Math.min(X,Y,v,O),granYCos:h,granYSin:C,granXCos:g,granXSin:c,nwCorner:t}}a.computeOptions=function(t,n,a,r,e,o,i){var s,h,g,u,C,c=t.east,l=t.west,d=t.north,S=t.south,M=!1,w=!1;d===P.CesiumMath.PI_OVER_TWO&&(M=!0),S===-P.CesiumMath.PI_OVER_TWO&&(w=!0);var m=d-S;g=(C=c<l?P.CesiumMath.TWO_PI-l+c:c-l)/((s=Math.ceil(C/n)+1)-1),u=m/((h=Math.ceil(m/n)+1)-1);var p=W.Rectangle.northwest(t,o),X=W.Rectangle.center(t,I);0===a&&0===r||(X.longitude<p.longitude&&(X.longitude+=P.CesiumMath.TWO_PI),b=T.project(X,b));var Y=u,v=g,O=W.Rectangle.clone(t,e),R={granYCos:Y,granYSin:0,granXCos:v,granXSin:0,nwCorner:p,boundingRectangle:O,width:s,height:h,northCap:M,southCap:w};if(0!==a){var _=E(p,a,g,u,0,s,h);if(d=_.north,S=_.south,c=_.east,l=_.west,d<-P.CesiumMath.PI_OVER_TWO||d>P.CesiumMath.PI_OVER_TWO||S<-P.CesiumMath.PI_OVER_TWO||S>P.CesiumMath.PI_OVER_TWO)throw new x.DeveloperError("Rotated rectangle is invalid.  It crosses over either the north or south pole.");R.granYCos=_.granYCos,R.granYSin=_.granYSin,R.granXCos=_.granXCos,R.granXSin=_.granXSin,O.north=d,O.south=S,O.east=c,O.west=l}if(0!==r){a-=r;var f=W.Rectangle.northwest(O,i),G=E(f,a,g,u,0,s,h);R.stGranYCos=G.granYCos,R.stGranXCos=G.granXCos,R.stGranYSin=G.granYSin,R.stGranXSin=G.granXSin,R.stNwCorner=f,R.stWest=G.west,R.stSouth=G.south}return R},t.RectangleGeometryLibrary=a});