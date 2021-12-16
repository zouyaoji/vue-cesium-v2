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
define(["exports","./Check-70bec281","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./OrientedBoundingBox-7b25e901"],function(e,m,x,s,h,p){var n={},C=new x.Cartesian3,B=new x.Cartesian3,P=new x.Cartesian3,M=new x.Cartesian3,k=new p.OrientedBoundingBox;function o(e,n,t,i,r){var a=x.Cartesian3.subtract(e,n,C),o=x.Cartesian3.dot(t,a),u=x.Cartesian3.dot(i,a);return s.Cartesian2.fromElements(o,u,r)}n.validOutline=function(e){m.Check.defined("positions",e);var n=p.OrientedBoundingBox.fromPoints(e,k).halfAxes,t=h.Matrix3.getColumn(n,0,B),i=h.Matrix3.getColumn(n,1,P),r=h.Matrix3.getColumn(n,2,M),a=x.Cartesian3.magnitude(t),o=x.Cartesian3.magnitude(i),u=x.Cartesian3.magnitude(r);return!(0===a&&(0===o||0===u)||0===o&&0===u)},n.computeProjectTo2DArguments=function(e,n,t,i){m.Check.defined("positions",e),m.Check.defined("centerResult",n),m.Check.defined("planeAxis1Result",t),m.Check.defined("planeAxis2Result",i);var r,a,o=p.OrientedBoundingBox.fromPoints(e,k),u=o.halfAxes,s=h.Matrix3.getColumn(u,0,B),C=h.Matrix3.getColumn(u,1,P),c=h.Matrix3.getColumn(u,2,M),d=x.Cartesian3.magnitude(s),l=x.Cartesian3.magnitude(C),f=x.Cartesian3.magnitude(c),g=Math.min(d,l,f);return(0!==d||0!==l&&0!==f)&&(0!==l||0!==f)&&(g!==l&&g!==f||(r=s),g===d?r=C:g===f&&(a=C),g!==d&&g!==l||(a=c),x.Cartesian3.normalize(r,t),x.Cartesian3.normalize(a,i),x.Cartesian3.clone(o.center,n),!0)},n.createProjectPointsTo2DFunction=function(i,r,a){return function(e){for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]=o(e[t],i,r,a);return n}},n.createProjectPointTo2DFunction=function(t,i,r){return function(e,n){return o(e,t,i,r,n)}},e.CoplanarPolygonGeometryLibrary=n});