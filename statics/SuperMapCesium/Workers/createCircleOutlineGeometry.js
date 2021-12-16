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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./EllipseGeometryLibrary-d33811c0","./EllipseOutlineGeometry-7f7cabe3"],function(l,r,e,n,a,i,t,o,s,c,u,d,m,p,y,f,h,b,G,_,g){function E(e){var i=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).radius;r.Check.typeOf.number("radius",i);var t={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new g.EllipseOutlineGeometry(t),this._workerName="createCircleOutlineGeometry"}E.packedLength=g.EllipseOutlineGeometry.packedLength,E.pack=function(e,i,t){return r.Check.typeOf.object("value",e),g.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var O=new g.EllipseOutlineGeometry({center:new n.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),x={center:new n.Cartesian3,radius:void 0,ellipsoid:a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return E.unpack=function(e,i,t){var r=g.EllipseOutlineGeometry.unpack(e,i,O);return x.center=n.Cartesian3.clone(r._center,x.center),x.ellipsoid=a.Ellipsoid.clone(r._ellipsoid,x.ellipsoid),x.height=r._height,x.extrudedHeight=r._extrudedHeight,x.granularity=r._granularity,x.numberOfVerticalLines=r._numberOfVerticalLines,l.defined(t)?(x.semiMajorAxis=r._semiMajorAxis,x.semiMinorAxis=r._semiMinorAxis,t._ellipseGeometry=new g.EllipseOutlineGeometry(x),t):(x.radius=r._semiMajorAxis,new E(x))},E.createGeometry=function(e){return g.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(e,i){return l.defined(i)&&(e=E.unpack(e,i)),e._ellipseGeometry._center=n.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=a.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),E.createGeometry(e)}});