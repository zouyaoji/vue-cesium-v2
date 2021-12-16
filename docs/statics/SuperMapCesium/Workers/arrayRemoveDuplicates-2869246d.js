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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240"],function(e,h,d,n){var s=n.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,t,i){if(d.Check.defined("equalsEpsilon",n),h.defined(e)){i=h.defaultValue(i,s),t=h.defaultValue(t,!1);var r,a,f,l=e.length;if(l<2)return e;for(r=1;r<l&&!n(a=e[r-1],f=e[r],i);++r);if(r===l)return t&&n(e[0],e[e.length-1],i)?e.slice(1):e;for(var u=e.slice(0,r);r<l;++r)n(a,f=e[r],i)||(u.push(f),a=f);return t&&1<u.length&&n(u[0],u[u.length-1],i)&&u.shift(),u}}});