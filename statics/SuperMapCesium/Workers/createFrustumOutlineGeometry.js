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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./Plane-2bcb9154","./VertexFormat-fe4db402","./FrustumGeometry-237f769a"],function(s,p,e,m,t,f,r,n,a,d,g,k,i,h,u,y,o,c,_){var l=0,b=1;function v(e){p.Check.typeOf.object("options",e),p.Check.typeOf.object("options.frustum",e.frustum),p.Check.typeOf.object("options.origin",e.origin),p.Check.typeOf.object("options.orientation",e.orientation);var t,r,n=e.frustum,a=e.orientation,i=e.origin,u=s.defaultValue(e._drawNearPlane,!0);n instanceof _.PerspectiveFrustum?(t=l,r=_.PerspectiveFrustum.packedLength):n instanceof _.OrthographicFrustum&&(t=b,r=_.OrthographicFrustum.packedLength),this._frustumType=t,this._frustum=n.clone(),this._origin=m.Cartesian3.clone(i),this._orientation=h.Quaternion.clone(a),this._drawNearPlane=u,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+r+m.Cartesian3.packedLength+h.Quaternion.packedLength}v.pack=function(e,t,r){p.Check.typeOf.object("value",e),p.Check.defined("array",t),r=s.defaultValue(r,0);var n=e._frustumType,a=e._frustum;return(t[r++]=n)===l?(_.PerspectiveFrustum.pack(a,t,r),r+=_.PerspectiveFrustum.packedLength):(_.OrthographicFrustum.pack(a,t,r),r+=_.OrthographicFrustum.packedLength),m.Cartesian3.pack(e._origin,t,r),r+=m.Cartesian3.packedLength,h.Quaternion.pack(e._orientation,t,r),t[r+=h.Quaternion.packedLength]=e._drawNearPlane?1:0,t};var C=new _.PerspectiveFrustum,F=new _.OrthographicFrustum,w=new h.Quaternion,P=new m.Cartesian3;return v.unpack=function(e,t,r){p.Check.defined("array",e),t=s.defaultValue(t,0);var n,a=e[t++];a===l?(n=_.PerspectiveFrustum.unpack(e,t,C),t+=_.PerspectiveFrustum.packedLength):(n=_.OrthographicFrustum.unpack(e,t,F),t+=_.OrthographicFrustum.packedLength);var i=m.Cartesian3.unpack(e,t,P);t+=m.Cartesian3.packedLength;var u=h.Quaternion.unpack(e,t,w),o=1===e[t+=h.Quaternion.packedLength];if(!s.defined(r))return new v({frustum:n,origin:i,orientation:u,_drawNearPlane:o});var c=a===r._frustumType?r._frustum:void 0;return r._frustum=n.clone(c),r._frustumType=a,r._origin=m.Cartesian3.clone(i,r._origin),r._orientation=h.Quaternion.clone(u,r._orientation),r._drawNearPlane=o,r},v.createGeometry=function(e){var t=e._frustumType,r=e._frustum,n=e._origin,a=e._orientation,i=e._drawNearPlane,u=new Float64Array(24);_.FrustumGeometry._computeNearFarPlanes(n,a,t,r,u);for(var o,c,s=new y.GeometryAttributes({position:new g.GeometryAttribute({componentDatatype:d.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u})}),p=i?2:1,m=new Uint16Array(8*(p+1)),h=i?0:1;h<2;++h)c=4*h,m[o=i?8*h:0]=c,m[o+1]=c+1,m[o+2]=c+1,m[o+3]=c+2,m[o+4]=c+2,m[o+5]=c+3,m[o+6]=c+3,m[o+7]=c;for(h=0;h<2;++h)c=4*h,m[o=8*(p+h)]=c,m[o+1]=c+4,m[o+2]=c+1,m[o+3]=c+5,m[o+4]=c+2,m[o+5]=c+6,m[o+6]=c+3,m[o+7]=c+7;return new g.Geometry({attributes:s,indices:m,primitiveType:k.PrimitiveType.LINES,boundingSphere:f.BoundingSphere.fromVertices(u)})},function(e,t){return s.defined(t)&&(e=v.unpack(e,t)),v.createGeometry(e)}});