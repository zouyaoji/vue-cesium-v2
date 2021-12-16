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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./EllipsoidOutlineGeometry-dcd209b1"],function(n,r,e,a,i,t,o,s,d,l,c,u,p,m,y,b,f,G,k,v){function h(e){var i=n.defaultValue(e.radius,1),t={radii:new a.Cartesian3(i,i,i),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,subdivisions:e.subdivisions};this._ellipsoidGeometry=new v.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}h.packedLength=v.EllipsoidOutlineGeometry.packedLength,h.pack=function(e,i,t){return r.Check.typeOf.object("value",e),v.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var O=new v.EllipsoidOutlineGeometry,P={radius:void 0,radii:new a.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return h.unpack=function(e,i,t){var r=v.EllipsoidOutlineGeometry.unpack(e,i,O);return P.stackPartitions=r._stackPartitions,P.slicePartitions=r._slicePartitions,P.subdivisions=r._subdivisions,n.defined(t)?(a.Cartesian3.clone(r._radii,P.radii),t._ellipsoidGeometry=new v.EllipsoidOutlineGeometry(P),t):(P.radius=r._radii.x,new h(P))},h.createGeometry=function(e){return v.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(e,i){return n.defined(i)&&(e=h.unpack(e,i)),h.createGeometry(e)}});