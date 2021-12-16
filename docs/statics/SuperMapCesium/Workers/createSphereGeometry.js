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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./VertexFormat-fe4db402","./EllipsoidGeometry-d710e362"],function(a,i,e,o,t,r,n,s,c,d,l,m,u,p,y,f,G,b,k,v,h){function x(e){var t=a.defaultValue(e.radius,1),r={radii:new o.Cartesian3(t,t,t),stackPartitions:e.stackPartitions,slicePartitions:e.slicePartitions,vertexFormat:e.vertexFormat};this._ellipsoidGeometry=new h.EllipsoidGeometry(r),this._workerName="createSphereGeometry"}x.packedLength=h.EllipsoidGeometry.packedLength,x.pack=function(e,t,r){return i.Check.typeOf.object("value",e),h.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,r)};var F=new h.EllipsoidGeometry,P={radius:void 0,radii:new o.Cartesian3,vertexFormat:new v.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return x.unpack=function(e,t,r){var i=h.EllipsoidGeometry.unpack(e,t,F);return P.vertexFormat=v.VertexFormat.clone(i._vertexFormat,P.vertexFormat),P.stackPartitions=i._stackPartitions,P.slicePartitions=i._slicePartitions,a.defined(r)?(o.Cartesian3.clone(i._radii,P.radii),r._ellipsoidGeometry=new h.EllipsoidGeometry(P),r):(P.radius=i._radii.x,new x(P))},x.createGeometry=function(e){return h.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(e,t){return a.defined(t)&&(e=x.unpack(e,t)),x.createGeometry(e)}});