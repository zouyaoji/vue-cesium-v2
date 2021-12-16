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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./IndexDatatype-9435b55f","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./CylinderGeometryLibrary-8c0fda9f"],function(_,f,e,v,A,O,t,i,r,C,R,G,a,o,n,g,V,k,L,w){var D=new A.Cartesian2;function d(e){var t=(e=_.defaultValue(e,_.defaultValue.EMPTY_OBJECT)).length,i=e.topRadius,r=e.bottomRadius,a=_.defaultValue(e.slices,128),o=Math.max(_.defaultValue(e.numberOfVerticalLines,16),0);if(f.Check.typeOf.number("options.positions",t),f.Check.typeOf.number("options.topRadius",i),f.Check.typeOf.number("options.bottomRadius",r),f.Check.typeOf.number.greaterThanOrEquals("options.slices",a,3),_.defined(e.offsetAttribute)&&e.offsetAttribute===L.GeometryOffsetAttribute.TOP)throw new f.DeveloperError("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=t,this._topRadius=i,this._bottomRadius=r,this._slices=a,this._numberOfVerticalLines=o,this._offsetAttribute=e.offsetAttribute,this._workerName="createCylinderOutlineGeometry"}d.packedLength=6,d.pack=function(e,t,i){return f.Check.typeOf.object("value",e),f.Check.defined("array",t),i=_.defaultValue(i,0),t[i++]=e._length,t[i++]=e._topRadius,t[i++]=e._bottomRadius,t[i++]=e._slices,t[i++]=e._numberOfVerticalLines,t[i]=_.defaultValue(e._offsetAttribute,-1),t};var b={length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};return d.unpack=function(e,t,i){f.Check.defined("array",e),t=_.defaultValue(t,0);var r=e[t++],a=e[t++],o=e[t++],n=e[t++],s=e[t++],u=e[t];return _.defined(i)?(i._length=r,i._topRadius=a,i._bottomRadius=o,i._slices=n,i._numberOfVerticalLines=s,i._offsetAttribute=-1===u?void 0:u,i):(b.length=r,b.topRadius=a,b.bottomRadius=o,b.slices=n,b.numberOfVerticalLines=s,b.offsetAttribute=-1===u?void 0:u,new d(b))},d.createGeometry=function(e){var t=e._length,i=e._topRadius,r=e._bottomRadius,a=e._slices,o=e._numberOfVerticalLines;if(!(t<=0||i<0||r<0||0===i&&0===r)){var n,s=2*a,u=w.CylinderGeometryLibrary.computePositions(t,i,r,a,!1),f=2*a;if(0<o){var d=Math.min(o,a);n=Math.round(a/d),f+=d}var b,c=V.IndexDatatype.createTypedArray(s,2*f),l=0;for(b=0;b<a-1;b++)c[l++]=b,c[l++]=b+1,c[l++]=b+a,c[l++]=b+1+a;if(c[l++]=a-1,c[l++]=0,c[l++]=a+a-1,c[l++]=a,0<o)for(b=0;b<a;b+=n)c[l++]=b,c[l++]=b+a;var m=new g.GeometryAttributes;m.position=new R.GeometryAttribute({componentDatatype:C.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),D.x=.5*t,D.y=Math.max(r,i);var p=new O.BoundingSphere(v.Cartesian3.ZERO,A.Cartesian2.magnitude(D));if(_.defined(e._offsetAttribute)){t=u.length;var y=new Uint8Array(t/3),h=e._offsetAttribute===L.GeometryOffsetAttribute.NONE?0:1;k.arrayFill(y,h),m.applyOffset=new R.GeometryAttribute({componentDatatype:C.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})}return new R.Geometry({attributes:m,indices:c,primitiveType:G.PrimitiveType.LINES,boundingSphere:p,offsetAttribute:e._offsetAttribute})}},function(e,t){return _.defined(t)&&(e=d.unpack(e,t)),d.createGeometry(e)}});