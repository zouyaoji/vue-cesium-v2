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
define(["exports","./when-8d13db60","./Math-61ede240","./Cartographic-f27b0939","./BoundingSphere-c409f092","./Transforms-1509c877","./arrayRemoveDuplicates-2869246d","./PolylinePipeline-65700d85"],function(e,b,x,E,T,H,L,q){var i={};var D=new E.Cartographic,N=new E.Cartographic;var O=new Array(2),R=new Array(2),S={positions:void 0,height:void 0,granularity:void 0,ellipsoid:void 0};function B(e,i){for(var r=new Array(e.length),t=0;t<e.length;t+=3){var n=new E.Cartesian3(e[t],e[t+1],e[t+2]);T.Matrix4.multiplyByPoint(i,n,n),r[t]=n.x,r[t+1]=n.y,r[t+2]=n.z}return r}i.computePositions=function(e,i,r,t,n,a,o){var l=function(e,i,r,t){var n=(i=L.arrayRemoveDuplicates(i,E.Cartesian3.equalsEpsilon,!0)).length;if(!(n<2)){var a=b.defined(t),o=b.defined(r),l=!0,s=new Array(n),h=new Array(n),g=new Array(n),d=i[0];s[0]=d;var p=e.cartesianToCartographic(d,D);o&&(p.height=r[0]),l=l&&0==p.height,h[0]=p.height,g[0]=a?t[0]:0;for(var y,u,c=1,P=1;P<n;++P){var f=i[P],v=e.cartesianToCartographic(f,N);o&&(v.height=r[P]),l=l&&0==v.height,y=p,u=v,x.CesiumMath.equalsEpsilon(y.latitude,u.latitude,x.CesiumMath.EPSILON10)&&x.CesiumMath.equalsEpsilon(y.longitude,u.longitude,x.CesiumMath.EPSILON10)?p.height<v.height&&(h[c-1]=v.height):(s[c]=f,h[c]=v.height,g[c]=a?t[P]:0,E.Cartographic.clone(v,p),++c)}if(!(l||c<2))return s.length=c,h.length=c,g.length=c,{positions:s,topHeights:h,bottomHeights:g}}}(e,i,r,t);if(b.defined(l)){var s=H.Transforms.eastNorthUpToFixedFrame(l.positions[0],e,new T.Matrix4),h=T.Matrix4.inverse(s,new T.Matrix4);i=l.positions,r=l.topHeights,t=l.bottomHeights;var g,d,p,y,u=i.length,c=u-2,P=x.CesiumMath.chordLength(n,e.maximumRadius),f=S;if(f.minDistance=P,f.ellipsoid=e,a){var v,m=0;for(v=0;v<u-1;v++)m+=q.PolylinePipeline.numberOfPoints(i[v],i[v+1],P)+1;g=new Float64Array(3*m),d=new Float64Array(3*m),b.defined(o)&&(p=new Float64Array(3*m),y=new Float64Array(3*m));var A=O,w=R;f.positions=A,f.height=w;var C=0;for(v=0;v<u-1;v++){A[0]=i[v],A[1]=i[v+1],w[0]=r[v],w[1]=r[v+1];var F=q.PolylinePipeline.generateArc(f);g.set(F,C),b.defined(o)&&p.set(B(F,h),C),w[0]=t[v],w[1]=t[v+1],d.set(q.PolylinePipeline.generateArc(f),C),b.defined(o)&&y.set(B(q.PolylinePipeline.generateArc(f),h),C),C+=F.length}}else f.positions=i,f.height=r,g=new Float64Array(q.PolylinePipeline.generateArc(f)),b.defined(o)&&(p=new Float64Array(B(q.PolylinePipeline.generateArc(f)))),f.height=t,d=new Float64Array(q.PolylinePipeline.generateArc(f)),b.defined(o)&&(y=new Float64Array(B(q.PolylinePipeline.generateArc(f))));var M={pos:{bottomPositions:d,topPositions:g,numCorners:c}};return b.defined(o)&&(M.localPos={bottomPositions:y,topPositions:p,numCorners:c}),M}},e.WallGeometryLibrary=i});