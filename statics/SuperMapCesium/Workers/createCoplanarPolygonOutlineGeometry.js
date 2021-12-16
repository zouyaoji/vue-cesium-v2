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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./AttributeCompression-75ce15eb","./GeometryPipeline-8e55e413","./EncodedCartesian3-87cd0c1f","./IndexDatatype-9435b55f","./IntersectionTests-dbfba52c","./Plane-2bcb9154","./GeometryInstance-9ddb8c73","./arrayRemoveDuplicates-2869246d","./EllipsoidTangentPlane-9c25b2da","./OrientedBoundingBox-7b25e901","./CoplanarPolygonGeometryLibrary-051a16f8","./ArcType-66bc286a","./EllipsoidRhumbLine-6ca4b1e6","./earcut-2.2.1-b404d9e6","./PolygonPipeline-cc78b34e","./PolygonGeometryLibrary-ec05daff"],function(i,a,e,l,t,p,r,n,o,s,d,u,c,y,b,m,f,g,h,P,v,G,C,k,L,T,E,H,w,A,D,I){function _(e){for(var r=e.length,t=new Float64Array(3*r),n=P.IndexDatatype.createTypedArray(r,2*r),o=0,i=0,a=0;a<r;a++){var c=e[a];t[o++]=c.x,t[o++]=c.y,t[o++]=c.z,n[i++]=a,n[i++]=(a+1)%r}var y=new m.GeometryAttributes({position:new d.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:t})});return new d.Geometry({attributes:y,indices:n,primitiveType:u.PrimitiveType.LINES})}function O(e){var r=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy;a.Check.defined("options.polygonHierarchy",r),this._polygonHierarchy=r,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=I.PolygonGeometryLibrary.computeHierarchyPackedLength(r)+1}O.fromPositions=function(e){return e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT),a.Check.defined("options.positions",e.positions),new O({polygonHierarchy:{positions:e.positions}})},O.pack=function(e,r,t){return a.Check.typeOf.object("value",e),a.Check.defined("array",r),t=i.defaultValue(t,0),r[t=I.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,r,t)]=e.packedLength,r};var B={polygonHierarchy:{}};return O.unpack=function(e,r,t){a.Check.defined("array",e),r=i.defaultValue(r,0);var n=I.PolygonGeometryLibrary.unpackPolygonHierarchy(e,r);r=n.startingIndex,delete n.startingIndex;var o=e[r];return i.defined(t)||(t=new O(B)),t._polygonHierarchy=n,t.packedLength=o,t},O.createGeometry=function(e){var r=e._polygonHierarchy,t=r.positions;if(!((t=k.arrayRemoveDuplicates(t,l.Cartesian3.equalsEpsilon,!0)).length<3)&&E.CoplanarPolygonGeometryLibrary.validOutline(t)){var n=I.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0!==n.length){for(var o=[],i=0;i<n.length;i++){var a=new C.GeometryInstance({geometry:_(n[i])});o.push(a)}var c=g.GeometryPipeline.combineInstances(o)[0],y=p.BoundingSphere.fromPoints(r.positions);return new d.Geometry({attributes:c.attributes,indices:c.indices,primitiveType:c.primitiveType,boundingSphere:y})}}},function(e,r){return i.defined(r)&&(e=O.unpack(e,r)),e._ellipsoid=t.Ellipsoid.clone(e._ellipsoid),O.createGeometry(e)}});