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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./AttributeCompression-75ce15eb","./GeometryPipeline-8e55e413","./EncodedCartesian3-87cd0c1f","./IndexDatatype-9435b55f","./IntersectionTests-dbfba52c","./Plane-2bcb9154","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./VertexFormat-fe4db402","./EllipseGeometryLibrary-d33811c0","./GeometryInstance-9ddb8c73","./EllipseGeometry-736628fb"],function(o,r,e,a,n,t,i,l,s,d,m,c,u,p,y,_,h,G,f,x,b,g,v,E,C,w,A,M){function F(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius;r.Check.typeOf.number("radius",t);var i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new M.EllipseGeometry(i),this._workerName="createCircleGeometry"}F.packedLength=M.EllipseGeometry.packedLength,F.pack=function(e,t,i){return r.Check.typeOf.object("value",e),M.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var V=new M.EllipseGeometry({center:new a.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),k={center:new a.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new C.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return F.unpack=function(e,t,i){var r=M.EllipseGeometry.unpack(e,t,V);return k.center=a.Cartesian3.clone(r._center,k.center),k.ellipsoid=n.Ellipsoid.clone(r._ellipsoid,k.ellipsoid),k.height=r._height,k.extrudedHeight=r._extrudedHeight,k.granularity=r._granularity,k.vertexFormat=C.VertexFormat.clone(r._vertexFormat,k.vertexFormat),k.stRotation=r._stRotation,k.shadowVolume=r._shadowVolume,o.defined(i)?(k.semiMajorAxis=r._semiMajorAxis,k.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new M.EllipseGeometry(k),i):(k.radius=r._semiMajorAxis,new F(k))},F.createGeometry=function(e){return M.EllipseGeometry.createGeometry(e._ellipseGeometry)},F.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,a=t(r,o),n=i(r,o);return new F({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:a,height:n,vertexFormat:C.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(F.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=F.unpack(e,t)),e._ellipseGeometry._center=a.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),F.createGeometry(e)}});