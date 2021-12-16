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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c"],function(e,n,d,t,u,i){function s(e){this._ellipsoid=n.defaultValue(e,i.Ellipsoid.WGS84),this._semimajorAxis=this._ellipsoid.maximumRadius,this._oneOverSemimajorAxis=1/this._semimajorAxis}Object.defineProperties(s.prototype,{ellipsoid:{get:function(){return this._ellipsoid}}}),s.mercatorAngleToGeodeticLatitude=function(e){return t.CesiumMath.PI_OVER_TWO-2*Math.atan(Math.exp(-e))},s.geodeticLatitudeToMercatorAngle=function(e){s.MaximumLatitude<e?e=s.MaximumLatitude:e<-s.MaximumLatitude&&(e=-s.MaximumLatitude);var t=Math.sin(e);return.5*Math.log((1+t)/(1-t))},s.MaximumLatitude=s.mercatorAngleToGeodeticLatitude(Math.PI),s.prototype.project=function(e,t){var i=this._semimajorAxis,a=e.longitude*i,o=s.geodeticLatitudeToMercatorAngle(e.latitude)*i,r=e.height;return n.defined(t)?(t.x=a,t.y=o,t.z=r,t):new u.Cartesian3(a,o,r)},s.prototype.unproject=function(e,t){if(!n.defined(e))throw new d.DeveloperError("cartesian is required");var i=this._oneOverSemimajorAxis,a=e.x*i,o=s.mercatorAngleToGeodeticLatitude(e.y*i),r=e.z;return n.defined(t)?(t.longitude=a,t.latitude=o,t.height=r,t):new u.Cartographic(a,o,r)},e.WebMercatorProjection=s});