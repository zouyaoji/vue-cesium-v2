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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./VertexFormat-fe4db402"],function(n,o,e,c,t,p,r,a,i,y,b,s,u,m,f,d,l){function v(e){e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT);var t=n.defaultValue(e.vertexFormat,l.VertexFormat.DEFAULT);this._vertexFormat=t,this._workerName="createPlaneGeometry"}v.packedLength=l.VertexFormat.packedLength,v.pack=function(e,t,r){return o.Check.typeOf.object("value",e),o.Check.defined("array",t),r=n.defaultValue(r,0),l.VertexFormat.pack(e._vertexFormat,t,r),t};var A=new l.VertexFormat,F={vertexFormat:A};v.unpack=function(e,t,r){o.Check.defined("array",e),t=n.defaultValue(t,0);var a=l.VertexFormat.unpack(e,t,A);return n.defined(r)?(r._vertexFormat=l.VertexFormat.clone(a,r._vertexFormat),r):new v(F)};var w=new c.Cartesian3(-.5,-.5,0),x=new c.Cartesian3(.5,.5,0);return v.createGeometry=function(e){var t,r,a=e._vertexFormat,n=new d.GeometryAttributes;if(a.position){if((r=new Float64Array(12))[0]=w.x,r[1]=w.y,r[2]=0,r[3]=x.x,r[4]=w.y,r[5]=0,r[6]=x.x,r[7]=x.y,r[8]=0,r[9]=w.x,r[10]=x.y,r[11]=0,n.position=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),a.normal){var o=new Float32Array(12);o[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=1,o[9]=0,o[10]=0,o[11]=1,n.normal=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:o})}if(a.st){var i=new Float32Array(8);i[0]=0,i[1]=0,i[2]=1,i[3]=0,i[4]=1,i[5]=1,i[6]=0,i[7]=1,n.st=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:i})}if(a.tangent){var u=new Float32Array(12);u[0]=1,u[1]=0,u[2]=0,u[3]=1,u[4]=0,u[5]=0,u[6]=1,u[7]=0,u[8]=0,u[9]=1,u[10]=0,u[11]=0,n.tangent=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:u})}if(a.bitangent){var m=new Float32Array(12);m[0]=0,m[1]=1,m[2]=0,m[3]=0,m[4]=1,m[5]=0,m[6]=0,m[7]=1,m[8]=0,m[9]=0,m[10]=1,m[11]=0,n.bitangent=new b.GeometryAttribute({componentDatatype:y.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:m})}(t=new Uint16Array(6))[0]=0,t[1]=1,t[2]=2,t[3]=0,t[4]=2,t[5]=3}return new b.Geometry({attributes:n,indices:t,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:new p.BoundingSphere(c.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return n.defined(t)&&(e=v.unpack(e,t)),v.createGeometry(e)}});