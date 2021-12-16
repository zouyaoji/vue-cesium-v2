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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6"],function(r,a,e,i,t,o,n,c,u,d,y,p,b,f,m,s){function h(){this._workerName="createPlaneOutlineGeometry"}h.packedLength=0,h.pack=function(e,t){return a.Check.defined("value",e),a.Check.defined("array",t),t},h.unpack=function(e,t,n){return a.Check.defined("array",e),r.defined(n)?n:new h};var C=new i.Cartesian3(-.5,-.5,0),w=new i.Cartesian3(.5,.5,0);return h.createGeometry=function(){var e=new s.GeometryAttributes,t=new Uint16Array(8),n=new Float64Array(12);return n[0]=C.x,n[1]=C.y,n[2]=C.z,n[3]=w.x,n[4]=C.y,n[5]=C.z,n[6]=w.x,n[7]=w.y,n[8]=C.z,n[9]=C.x,n[10]=w.y,n[11]=C.z,e.position=new y.GeometryAttribute({componentDatatype:d.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n}),t[0]=0,t[1]=1,t[2]=1,t[3]=2,t[4]=2,t[5]=3,t[6]=3,t[7]=0,new y.Geometry({attributes:e,indices:t,primitiveType:p.PrimitiveType.LINES,boundingSphere:new o.BoundingSphere(i.Cartesian3.ZERO,Math.sqrt(2))})},function(e,t){return r.defined(t)&&(e=h.unpack(e,t)),h.createGeometry(e)}});