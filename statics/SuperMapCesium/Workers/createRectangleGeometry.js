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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092","./Cartesian4-5af5bb24","./RuntimeError-ba10bc3e","./WebGLConstants-4c11ee5f","./ComponentDatatype-5862616f","./GeometryAttribute-2243653a","./PrimitiveType-97893bc7","./FeatureDetection-7bd32c34","./Transforms-1509c877","./buildModuleUrl-392763e2","./GeometryAttributes-aacecde6","./AttributeCompression-75ce15eb","./GeometryPipeline-8e55e413","./EncodedCartesian3-87cd0c1f","./IndexDatatype-9435b55f","./IntersectionTests-dbfba52c","./Plane-2bcb9154","./arrayFill-9766fb2e","./GeometryOffsetAttribute-999fc023","./VertexFormat-fe4db402","./GeometryInstance-9ddb8c73","./EllipsoidRhumbLine-6ca4b1e6","./earcut-2.2.1-b404d9e6","./PolygonPipeline-cc78b34e","./RectangleGeometryLibrary-c89ec784"],function(pt,d,mt,dt,_,H,t,e,a,gt,yt,r,n,A,o,i,s,ft,l,ht,u,c,bt,vt,_t,At,p,m,wt,z){var xt=new dt.Cartesian3,Ct=new dt.Cartesian3,Rt=new dt.Cartesian3,Et=new dt.Cartesian3,w=new _.Rectangle,B=new _.Cartesian2,x=new H.BoundingSphere,C=new H.BoundingSphere;function Ft(t,e){var a=new yt.Geometry({attributes:new i.GeometryAttributes,primitiveType:r.PrimitiveType.TRIANGLES});return a.attributes.position=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(a.attributes.normal=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(a.attributes.tangent=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(a.attributes.bitangent=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),a}var Gt=new dt.Cartesian3,Pt=new dt.Cartesian3;function Dt(t,e){var a=t._vertexFormat,r=t._ellipsoid,n=e.height,o=e.width,i=e.northCap,s=e.southCap,l=0,u=n,c=n,p=0;i&&(c-=l=1,p+=1),s&&(u-=1,c-=1,p+=1),p+=o*c;for(var m=a.position?new Float64Array(3*p):void 0,d=a.st?new Float32Array(2*p):void 0,g=0,y=0,f=xt,h=B,b=Number.MAX_VALUE,v=Number.MAX_VALUE,_=-Number.MAX_VALUE,A=-Number.MAX_VALUE,w=l;w<u;++w)for(var x=0;x<o;++x)z.RectangleGeometryLibrary.computePosition(e,r,a.st,w,x,f,h),m[g++]=f.x,m[g++]=f.y,m[g++]=f.z,a.st&&(d[y++]=h.x,d[y++]=h.y,b=Math.min(b,h.x),v=Math.min(v,h.y),_=Math.max(_,h.x),A=Math.max(A,h.y));if(i&&(z.RectangleGeometryLibrary.computePosition(e,r,a.st,0,0,f,h),m[g++]=f.x,m[g++]=f.y,m[g++]=f.z,a.st&&(d[y++]=h.x,d[y++]=h.y,b=h.x,v=h.y,_=h.x,A=h.y)),s&&(z.RectangleGeometryLibrary.computePosition(e,r,a.st,n-1,0,f,h),m[g++]=f.x,m[g++]=f.y,m[g]=f.z,a.st&&(d[y++]=h.x,d[y]=h.y,b=Math.min(b,h.x),v=Math.min(v,h.y),_=Math.max(_,h.x),A=Math.max(A,h.y))),a.st&&(b<0||v<0||1<_||1<A))for(var C=0;C<d.length;C+=2)d[C]=(d[C]-b)/(_-b),d[C+1]=(d[C+1]-v)/(A-v);var R=function(t,e,a,r){var n=t.length,o=e.normal?new Float32Array(n):void 0,i=e.tangent?new Float32Array(n):void 0,s=e.bitangent?new Float32Array(n):void 0,l=0,u=Et,c=Rt,p=Ct;if(e.normal||e.tangent||e.bitangent)for(var m=0;m<n;m+=3){var d=dt.Cartesian3.fromArray(t,m,xt),g=l+1,y=l+2;p=a.geodeticSurfaceNormal(d,p),(e.tangent||e.bitangent)&&(dt.Cartesian3.cross(dt.Cartesian3.UNIT_Z,p,c),H.Matrix3.multiplyByVector(r,c,c),dt.Cartesian3.normalize(c,c),e.bitangent&&dt.Cartesian3.normalize(dt.Cartesian3.cross(p,c,u),u)),e.normal&&(o[l]=p.x,o[g]=p.y,o[y]=p.z),e.tangent&&(i[l]=c.x,i[g]=c.y,i[y]=c.z),e.bitangent&&(s[l]=u.x,s[g]=u.y,s[y]=u.z),l+=3}return Ft(e,{positions:t,normals:o,tangents:i,bitangents:s})}(m,a,r,e.tangentRotationMatrix),E=6*(o-1)*(c-1);i&&(E+=3*(o-1)),s&&(E+=3*(o-1));var F,G=ht.IndexDatatype.createTypedArray(p,E),P=0,D=0;for(F=0;F<c-1;++F){for(var V=0;V<o-1;++V){var L=P,M=L+o,O=M+1,T=L+1;G[D++]=L,G[D++]=M,G[D++]=T,G[D++]=T,G[D++]=M,G[D++]=O,++P}++P}if(i||s){var N,k,S=p-1,I=p-1;if(i&&s&&(S=p-2),P=0,i)for(F=0;F<o-1;F++)k=(N=P)+1,G[D++]=S,G[D++]=N,G[D++]=k,++P;if(s)for(P=(c-1)*o,F=0;F<o-1;F++)k=(N=P)+1,G[D++]=N,G[D++]=I,G[D++]=k,++P}return R.indices=G,a.st&&(R.attributes.st=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})),R}function Vt(t,e,a,r,n){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a+2],t[e++]=n[a],t[e++]=n[a+1],t[e]=n[a+2],t}function Lt(t,e,a,r){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a],t[e]=r[a+1],t}var Mt=new _t.VertexFormat;function R(t,e){var a,r=t._shadowVolume,n=t._offsetAttribute,o=t._vertexFormat,i=t._extrudedHeight,s=t._surfaceHeight,l=t._ellipsoid,u=e.height,c=e.width;if(r){var p=_t.VertexFormat.clone(o,Mt);p.normal=!0,t._vertexFormat=p}var m=Dt(t,e);r&&(t._vertexFormat=o);var d=wt.PolygonPipeline.scaleToGeodeticHeight(m.attributes.position.values,s,l,!1),g=(d=new Float64Array(d)).length,y=2*g,f=new Float64Array(y);f.set(d);var h=wt.PolygonPipeline.scaleToGeodeticHeight(m.attributes.position.values,i,l);f.set(h,g),m.attributes.position.values=f;var b,v,_,A=o.normal?new Float32Array(y):void 0,w=o.tangent?new Float32Array(y):void 0,x=o.bitangent?new Float32Array(y):void 0,C=o.st?new Float32Array(y/3*2):void 0;if(o.normal){for(v=m.attributes.normal.values,A.set(v),a=0;a<g;a++)v[a]=-v[a];A.set(v,g),m.attributes.normal.values=A}if(r){v=m.attributes.normal.values,o.normal||(m.attributes.normal=void 0);var R=new Float32Array(y);for(a=0;a<g;a++)v[a]=-v[a];R.set(v,g),m.attributes.extrudeDirection=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R})}var E=pt.defined(n);if(E){var F=g/3*2,G=new Uint8Array(F);G=n===vt.GeometryOffsetAttribute.TOP?bt.arrayFill(G,1,0,F/2):(_=n===vt.GeometryOffsetAttribute.NONE?0:1,bt.arrayFill(G,_)),m.attributes.applyOffset=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:G})}if(o.tangent){var P=m.attributes.tangent.values;for(w.set(P),a=0;a<g;a++)P[a]=-P[a];w.set(P,g),m.attributes.tangent.values=w}if(o.bitangent){var D=m.attributes.bitangent.values;x.set(D),x.set(D,g),m.attributes.bitangent.values=x}o.st&&(b=m.attributes.st.values,C.set(b),C.set(b,g/3*2),m.attributes.st.values=C);var V=m.indices,L=V.length,M=g/3,O=ht.IndexDatatype.createTypedArray(y/3,2*L);for(O.set(V),a=0;a<L;a+=3)O[a+L]=V[a+2]+M,O[a+1+L]=V[a+1]+M,O[a+2+L]=V[a]+M;m.indices=O;var T=e.northCap,N=e.southCap,k=u,S=2,I=0,H=4,z=4;T&&(S-=1,k-=1,I+=1,H-=2,z-=1),N&&(S-=1,k-=1,I+=1,H-=2,z-=1);var B=2*((I+=S*c+2*k-H)+z),U=new Float64Array(3*B),q=r?new Float32Array(3*B):void 0,Y=E?new Uint8Array(B):void 0,j=o.st?new Float32Array(2*B):void 0,X=n===vt.GeometryOffsetAttribute.TOP;E&&!X&&(_=n===vt.GeometryOffsetAttribute.ALL?1:0,Y=bt.arrayFill(Y,_));var Q,W=0,J=0,Z=0,K=0,$=c*k;for(a=0;a<$;a+=c)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Lt(j,J,2*a,b),J+=4),r&&(Z+=3,q[Z++]=v[Q],q[Z++]=v[Q+1],q[Z++]=v[Q+2]),X&&(Y[K++]=1,K+=1);if(N){var tt=T?$+1:$;for(Q=3*tt,a=0;a<2;a++)U=Vt(U,W,Q,d,h),W+=6,o.st&&(j=Lt(j,J,2*tt,b),J+=4),r&&(Z+=3,q[Z++]=v[Q],q[Z++]=v[Q+1],q[Z++]=v[Q+2]),X&&(Y[K++]=1,K+=1)}else for(a=$-c;a<$;a++)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Lt(j,J,2*a,b),J+=4),r&&(Z+=3,q[Z++]=v[Q],q[Z++]=v[Q+1],q[Z++]=v[Q+2]),X&&(Y[K++]=1,K+=1);for(a=$-1;0<a;a-=c)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Lt(j,J,2*a,b),J+=4),r&&(Z+=3,q[Z++]=v[Q],q[Z++]=v[Q+1],q[Z++]=v[Q+2]),X&&(Y[K++]=1,K+=1);if(T){var et=$;for(Q=3*et,a=0;a<2;a++)U=Vt(U,W,Q,d,h),W+=6,o.st&&(j=Lt(j,J,2*et,b),J+=4),r&&(Z+=3,q[Z++]=v[Q],q[Z++]=v[Q+1],q[Z++]=v[Q+2]),X&&(Y[K++]=1,K+=1)}else for(a=c-1;0<=a;a--)U=Vt(U,W,Q=3*a,d,h),W+=6,o.st&&(j=Lt(j,J,2*a,b),J+=4),r&&(Z+=3,q[Z++]=v[Q],q[Z++]=v[Q+1],q[Z++]=v[Q+2]),X&&(Y[K++]=1,K+=1);var at=function(t,e,a){var r=t.length,n=e.normal?new Float32Array(r):void 0,o=e.tangent?new Float32Array(r):void 0,i=e.bitangent?new Float32Array(r):void 0,s=0,l=0,u=0,c=!0,p=Et,m=Rt,d=Ct;if(e.normal||e.tangent||e.bitangent)for(var g=0;g<r;g+=6){var y=dt.Cartesian3.fromArray(t,g,xt),f=dt.Cartesian3.fromArray(t,(g+6)%r,Gt);if(c){var h=dt.Cartesian3.fromArray(t,(g+3)%r,Pt);dt.Cartesian3.subtract(f,y,f),dt.Cartesian3.subtract(h,y,h),d=dt.Cartesian3.normalize(dt.Cartesian3.cross(h,f,d),d),c=!1}dt.Cartesian3.equalsEpsilon(f,y,mt.CesiumMath.EPSILON10)&&(c=!0),(e.tangent||e.bitangent)&&(p=a.geodeticSurfaceNormal(y,p),e.tangent&&(m=dt.Cartesian3.normalize(dt.Cartesian3.cross(p,d,m),m))),e.normal&&(n[s++]=d.x,n[s++]=d.y,n[s++]=d.z,n[s++]=d.x,n[s++]=d.y,n[s++]=d.z),e.tangent&&(o[l++]=m.x,o[l++]=m.y,o[l++]=m.z,o[l++]=m.x,o[l++]=m.y,o[l++]=m.z),e.bitangent&&(i[u++]=p.x,i[u++]=p.y,i[u++]=p.z,i[u++]=p.x,i[u++]=p.y,i[u++]=p.z)}return Ft(e,{positions:t,normals:n,tangents:o,bitangents:i})}(U,o,l);o.st&&(at.attributes.st=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:j})),r&&(at.attributes.extrudeDirection=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:q})),E&&(at.attributes.applyOffset=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Y}));var rt,nt,ot,it,st=ht.IndexDatatype.createTypedArray(B,6*I);g=U.length/3;var lt=0;for(a=0;a<g-1;a+=2){it=((rt=a)+2)%g;var ut=dt.Cartesian3.fromArray(U,3*rt,Gt),ct=dt.Cartesian3.fromArray(U,3*it,Pt);dt.Cartesian3.equalsEpsilon(ut,ct,mt.CesiumMath.EPSILON10)||(ot=((nt=(rt+1)%g)+2)%g,st[lt++]=rt,st[lt++]=nt,st[lt++]=it,st[lt++]=it,st[lt++]=nt,st[lt++]=ot)}return at.indices=st,(at=ft.GeometryPipeline.combineInstances([new At.GeometryInstance({geometry:m}),new At.GeometryInstance({geometry:at})]))[0]}var g=[new dt.Cartesian3,new dt.Cartesian3,new dt.Cartesian3,new dt.Cartesian3],E=new dt.Cartographic,F=new dt.Cartographic;function y(t,e,a,r,n){if(0===a)return _.Rectangle.clone(t,n);var o=z.RectangleGeometryLibrary.computeOptions(t,e,a,0,w,E),i=o.height,s=o.width,l=g;return z.RectangleGeometryLibrary.computePosition(o,r,!1,0,0,l[0]),z.RectangleGeometryLibrary.computePosition(o,r,!1,0,s-1,l[1]),z.RectangleGeometryLibrary.computePosition(o,r,!1,i-1,0,l[2]),z.RectangleGeometryLibrary.computePosition(o,r,!1,i-1,s-1,l[3]),_.Rectangle.fromCartesianArray(l,r,n)}function f(t){var e=(t=pt.defaultValue(t,pt.defaultValue.EMPTY_OBJECT)).rectangle;if(d.Check.typeOf.object("rectangle",e),_.Rectangle.validate(e),e.north<e.south)throw new d.DeveloperError("options.rectangle.north must be greater than or equal to options.rectangle.south");var a=pt.defaultValue(t.height,0),r=pt.defaultValue(t.extrudedHeight,a);this._rectangle=_.Rectangle.clone(e),this._granularity=pt.defaultValue(t.granularity,mt.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=_.Ellipsoid.clone(pt.defaultValue(t.ellipsoid,_.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(a,r),this._rotation=pt.defaultValue(t.rotation,0),this._stRotation=pt.defaultValue(t.stRotation,0),this._vertexFormat=_t.VertexFormat.clone(pt.defaultValue(t.vertexFormat,_t.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(a,r),this._shadowVolume=pt.defaultValue(t.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=t.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}f.packedLength=_.Rectangle.packedLength+_.Ellipsoid.packedLength+_t.VertexFormat.packedLength+7,f.pack=function(t,e,a){return d.Check.typeOf.object("value",t),d.Check.defined("array",e),a=pt.defaultValue(a,0),_.Rectangle.pack(t._rectangle,e,a),a+=_.Rectangle.packedLength,_.Ellipsoid.pack(t._ellipsoid,e,a),a+=_.Ellipsoid.packedLength,_t.VertexFormat.pack(t._vertexFormat,e,a),a+=_t.VertexFormat.packedLength,e[a++]=t._granularity,e[a++]=t._surfaceHeight,e[a++]=t._rotation,e[a++]=t._stRotation,e[a++]=t._extrudedHeight,e[a++]=t._shadowVolume?1:0,e[a]=pt.defaultValue(t._offsetAttribute,-1),e};var h=new _.Rectangle,b=_.Ellipsoid.clone(_.Ellipsoid.UNIT_SPHERE),v={rectangle:h,ellipsoid:b,vertexFormat:Mt,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};f.unpack=function(t,e,a){d.Check.defined("array",t),e=pt.defaultValue(e,0);var r=_.Rectangle.unpack(t,e,h);e+=_.Rectangle.packedLength;var n=_.Ellipsoid.unpack(t,e,b);e+=_.Ellipsoid.packedLength;var o=_t.VertexFormat.unpack(t,e,Mt);e+=_t.VertexFormat.packedLength;var i=t[e++],s=t[e++],l=t[e++],u=t[e++],c=t[e++],p=1===t[e++],m=t[e];return pt.defined(a)?(a._rectangle=_.Rectangle.clone(r,a._rectangle),a._ellipsoid=_.Ellipsoid.clone(n,a._ellipsoid),a._vertexFormat=_t.VertexFormat.clone(o,a._vertexFormat),a._granularity=i,a._surfaceHeight=s,a._rotation=l,a._stRotation=u,a._extrudedHeight=c,a._shadowVolume=p,a._offsetAttribute=-1===m?void 0:m,a):(v.granularity=i,v.height=s,v.rotation=l,v.stRotation=u,v.extrudedHeight=c,v.shadowVolume=p,v.offsetAttribute=-1===m?void 0:m,new f(v))},f.computeRectangle=function(t,e){var a=(t=pt.defaultValue(t,pt.defaultValue.EMPTY_OBJECT)).rectangle;if(d.Check.typeOf.object("rectangle",a),_.Rectangle.validate(a),a.north<a.south)throw new d.DeveloperError("options.rectangle.north must be greater than or equal to options.rectangle.south");var r=pt.defaultValue(t.granularity,mt.CesiumMath.RADIANS_PER_DEGREE),n=pt.defaultValue(t.ellipsoid,_.Ellipsoid.WGS84);return y(a,r,pt.defaultValue(t.rotation,0),n,e)};var G=new H.Matrix3,P=new A.Quaternion,D=new dt.Cartographic;f.createGeometry=function(t){if(!mt.CesiumMath.equalsEpsilon(t._rectangle.north,t._rectangle.south,mt.CesiumMath.EPSILON10)&&!mt.CesiumMath.equalsEpsilon(t._rectangle.east,t._rectangle.west,mt.CesiumMath.EPSILON10)){var e=t._rectangle,a=t._ellipsoid,r=t._rotation,n=t._stRotation,o=t._vertexFormat,i=z.RectangleGeometryLibrary.computeOptions(e,t._granularity,r,n,w,E,F),s=G;if(0!==n||0!==r){var l=_.Rectangle.center(e,D),u=a.geodeticSurfaceNormalCartographic(l,Gt);A.Quaternion.fromAxisAngle(u,-n,P),H.Matrix3.fromQuaternion(P,s)}else H.Matrix3.clone(H.Matrix3.IDENTITY,s);var c,p,m=t._surfaceHeight,d=t._extrudedHeight,g=!mt.CesiumMath.equalsEpsilon(m,d,0,mt.CesiumMath.EPSILON2);if(i.lonScalar=1/t._rectangle.width,i.latScalar=1/t._rectangle.height,i.tangentRotationMatrix=s,e=t._rectangle,g){c=R(t,i);var y=H.BoundingSphere.fromRectangle3D(e,a,m,C),f=H.BoundingSphere.fromRectangle3D(e,a,d,x);p=H.BoundingSphere.union(y,f)}else{if((c=Dt(t,i)).attributes.position.values=wt.PolygonPipeline.scaleToGeodeticHeight(c.attributes.position.values,m,a,!1),pt.defined(t._offsetAttribute)){var h=c.attributes.position.values.length,b=new Uint8Array(h/3),v=t._offsetAttribute===vt.GeometryOffsetAttribute.NONE?0:1;bt.arrayFill(b,v),c.attributes.applyOffset=new yt.GeometryAttribute({componentDatatype:gt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:b})}p=H.BoundingSphere.fromRectangle3D(e,a,m)}return o.position||delete c.attributes.position,new yt.Geometry({attributes:c.attributes,indices:c.indices,primitiveType:c.primitiveType,boundingSphere:p,offsetAttribute:t._offsetAttribute})}},f.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid,o=e(r,n),i=a(r,n);return new f({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:n,stRotation:t._stRotation,granularity:r,extrudedHeight:i,height:o,vertexFormat:_t.VertexFormat.POSITION_ONLY,shadowVolume:!0})};var V=new _.Rectangle,L=[new _.Cartesian2,new _.Cartesian2,new _.Cartesian2],M=new yt.Matrix2,O=new dt.Cartographic;return Object.defineProperties(f.prototype,{rectangle:{get:function(){return pt.defined(this._rotatedRectangle)||(this._rotatedRectangle=y(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return pt.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];var e=_.Rectangle.clone(t._rectangle,V),a=t._granularity,r=t._ellipsoid,n=y(e,a,t._rotation-t._stRotation,r,V),o=L;o[0].x=n.west,o[0].y=n.south,o[1].x=n.west,o[1].y=n.north,o[2].x=n.east,o[2].y=n.south;for(var i=t.rectangle,s=yt.Matrix2.fromRotation(t._stRotation,M),l=_.Rectangle.center(i,O),u=0;u<3;++u){var c=o[u];c.x-=l.longitude,c.y-=l.latitude,yt.Matrix2.multiplyByVector(s,c,c),c.x+=l.longitude,c.y+=l.latitude,c.x=(c.x-i.west)/i.width,c.y=(c.y-i.south)/i.height}var p=o[0],m=o[1],d=o[2],g=new Array(6);return _.Cartesian2.pack(p,g),_.Cartesian2.pack(m,g,2),_.Cartesian2.pack(d,g,4),g}(this)),this._textureCoordinateRotationPoints}}}),function(t,e){return pt.defined(e)&&(t=f.unpack(t,e)),t._ellipsoid=_.Ellipsoid.clone(t._ellipsoid),t._rectangle=_.Rectangle.clone(t._rectangle),f.createGeometry(t)}});