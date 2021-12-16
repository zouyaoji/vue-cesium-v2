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
define(["exports","./when-8d13db60","./Check-70bec281","./Cartographic-f27b0939"],function(e,h,a,n){function o(){this.high=n.Cartesian3.clone(n.Cartesian3.ZERO),this.low=n.Cartesian3.clone(n.Cartesian3.ZERO)}o.encode=function(e,n){var i;return a.Check.typeOf.number("value",e),h.defined(n)||(n={high:0,low:0}),n.low=0<=e?(i=65536*Math.floor(e/65536),e-(n.high=i)):(i=65536*Math.floor(-e/65536),n.high=-i,e+i),n};var t={high:0,low:0};o.fromCartesian=function(e,n){a.Check.typeOf.object("cartesian",e),h.defined(n)||(n=new o);var i=n.high,r=n.low;return o.encode(e.x,t),i.x=t.high,r.x=t.low,o.encode(e.y,t),i.y=t.high,r.y=t.low,o.encode(e.z,t),i.z=t.high,r.z=t.low,n};var c=new o;o.writeElements=function(e,n,i){a.Check.defined("cartesianArray",n),a.Check.typeOf.number("index",i),a.Check.typeOf.number.greaterThanOrEquals("index",i,0),o.fromCartesian(e,c);var r=c.high,h=c.low;n[i]=r.x,n[i+1]=r.y,n[i+2]=r.z,n[i+3]=h.x,n[i+4]=h.y,n[i+5]=h.z},e.EncodedCartesian3=o});