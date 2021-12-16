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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./AttributeCompression-75ce15eb","./GeometryPipeline-8e55e413","./EncodedCartesian3-87cd0c1f","./IndexDatatype-9435b55f","./IntersectionTests-dbfba52c","./Plane-2bcb9154","./PrimitivePipeline-b43a6119","./WebMercatorProjection-bc9aa7fe","./createTaskProcessorWorker"],function(f,e,r,t,n,a,i,o,c,s,b,u,d,m,l,p,y,C,P,v,h,k,G,T,W){var g={};function A(e){var r=g[e];return f.defined(r)||("object"==typeof exports?g[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){g[r=e]=e})),r}return W(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),i=0;i<n;i++){var o=t[i],c=o.geometry,s=o.moduleName;if(f.defined(s)){var b=A(s);a[i]=b(c,o.offset)}else a[i]=c}return f.when.all(a,function(e){return G.PrimitivePipeline.packCreateGeometryResults(e,r)})})});