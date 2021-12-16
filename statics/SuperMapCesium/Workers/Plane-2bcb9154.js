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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./BoundingSphere-c409f092"],function(e,i,o,r,c,a){function s(e,n){if(o.Check.typeOf.object("normal",e),!r.CesiumMath.equalsEpsilon(c.Cartesian3.magnitude(e),1,r.CesiumMath.EPSILON6))throw new o.DeveloperError("normal must be normalized.");o.Check.typeOf.number("distance",n),this.normal=c.Cartesian3.clone(e),this.distance=n}s.fromPointNormal=function(e,n,t){if(o.Check.typeOf.object("point",e),o.Check.typeOf.object("normal",n),!r.CesiumMath.equalsEpsilon(c.Cartesian3.magnitude(n),1,r.CesiumMath.EPSILON6))throw new o.DeveloperError("normal must be normalized.");var a=-c.Cartesian3.dot(n,e);return i.defined(t)?(c.Cartesian3.clone(n,t.normal),t.distance=a,t):new s(n,a)};var l=new c.Cartesian3;s.fromCartesian4=function(e,n){o.Check.typeOf.object("coefficients",e);var t=c.Cartesian3.fromCartesian4(e,l),a=e.w;if(!r.CesiumMath.equalsEpsilon(c.Cartesian3.magnitude(t),1,r.CesiumMath.EPSILON6))throw new o.DeveloperError("normal must be normalized.");return i.defined(n)?(c.Cartesian3.clone(t,n.normal),n.distance=a,n):new s(t,a)},s.getPointDistance=function(e,n){return o.Check.typeOf.object("plane",e),o.Check.typeOf.object("point",n),c.Cartesian3.dot(e.normal,n)+e.distance};var m=new c.Cartesian3;s.projectPointOntoPlane=function(e,n,t){o.Check.typeOf.object("plane",e),o.Check.typeOf.object("point",n),i.defined(t)||(t=new c.Cartesian3);var a=s.getPointDistance(e,n),r=c.Cartesian3.multiplyByScalar(e.normal,a,m);return c.Cartesian3.subtract(n,r,t)};var C=new c.Cartesian3;s.transform=function(e,n,t){return o.Check.typeOf.object("plane",e),o.Check.typeOf.object("transform",n),a.Matrix4.multiplyByPointAsVector(n,e.normal,l),c.Cartesian3.normalize(l,l),c.Cartesian3.multiplyByScalar(e.normal,-e.distance,C),a.Matrix4.multiplyByPoint(n,C,C),s.fromPointNormal(C,l,t)},s.clone=function(e,n){return o.Check.typeOf.object("plane",e),i.defined(n)?(c.Cartesian3.clone(e.normal,n.normal),n.distance=e.distance,n):new s(e.normal,e.distance)},s.equals=function(e,n){return o.Check.typeOf.object("left",e),o.Check.typeOf.object("right",n),e.distance===n.distance&&c.Cartesian3.equals(e.normal,n.normal)},s.ORIGIN_XY_PLANE=Object.freeze(new s(c.Cartesian3.UNIT_Z,0)),s.ORIGIN_YZ_PLANE=Object.freeze(new s(c.Cartesian3.UNIT_X,0)),s.ORIGIN_ZX_PLANE=Object.freeze(new s(c.Cartesian3.UNIT_Y,0)),e.Plane=s});