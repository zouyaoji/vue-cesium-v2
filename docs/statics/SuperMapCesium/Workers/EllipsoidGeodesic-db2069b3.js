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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian2-09435a6c"],function(t,k,y,D,E,n){function I(t,a,i,e,n,s,h){var r,d,o=(r=t)*(d=i)*(4+r*(4-3*d))/16;return(1-o)*t*a*(e+o*n*(h+o*s*(2*h*h-1)))}var P=new E.Cartesian3,T=new E.Cartesian3;function s(t,a,i,e){var n,s,h,r,d,o,c,u,M,l,g,_,p,f,C,v,m,H,O,b,q,S,k,w,U,A=E.Cartesian3.normalize(e.cartographicToCartesian(a,T),P),R=E.Cartesian3.normalize(e.cartographicToCartesian(i,T),T);y.Check.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(E.Cartesian3.angleBetween(A,R))-Math.PI),.0125),function(t,a,i,e,n,s,h){var r,d,o,c,u,M=(a-i)/a,l=s-e,g=Math.atan((1-M)*Math.tan(n)),_=Math.atan((1-M)*Math.tan(h)),p=Math.cos(g),f=Math.sin(g),C=Math.cos(_),v=Math.sin(_),m=p*C,H=p*v,O=f*v,b=f*C,q=l,S=D.CesiumMath.TWO_PI,k=Math.cos(q),w=Math.sin(q);do{k=Math.cos(q),w=Math.sin(q);var U,A=H-b*k;o=Math.sqrt(C*C*w*w+A*A),d=O+m*k,r=Math.atan2(o,d),S=q,u=d-2*O/(c=0===o?(U=0,1):1-(U=m*w/o)*U),isNaN(u)&&(u=0),q=l+I(M,U,c,r,o,d,u)}while(Math.abs(q-S)>D.CesiumMath.EPSILON12);var R=c*(a*a-i*i)/(i*i),y=R*(256+R*(R*(74-47*R)-128))/1024,E=u*u,P=i*(1+R*(4096+R*(R*(320-175*R)-768))/16384)*(r-y*o*(u+y*(d*(2*E-1)-y*u*(4*o*o-3)*(4*E-3)/6)/4)),T=Math.atan2(C*w,H-b*k),x=Math.atan2(p*w,H*k-b);t._distance=P,t._startHeading=T,t._endHeading=x,t._uSquared=R}(t,e.maximumRadius,e.minimumRadius,a.longitude,a.latitude,i.longitude,i.latitude),t._start=E.Cartographic.clone(a,t._start),t._end=E.Cartographic.clone(i,t._end),t._start.height=0,t._end.height=0,s=(n=t)._uSquared,h=n._ellipsoid.maximumRadius,r=n._ellipsoid.minimumRadius,d=(h-r)/h,o=Math.cos(n._startHeading),c=Math.sin(n._startHeading),u=(1-d)*Math.tan(n._start.latitude),M=1/Math.sqrt(1+u*u),l=M*u,g=Math.atan2(u,o),f=1-(p=(_=M*c)*_),C=Math.sqrt(f),S=1-3*(v=s/4)+35*(m=v*v)/4,k=1-5*v,w=(b=1+v-3*m/4+5*(H=m*v)/4-175*(O=m*m)/64)*g-(q=1-v+15*m/8-35*H/8)*Math.sin(2*g)*v/2-S*Math.sin(4*g)*m/16-k*Math.sin(6*g)*H/48-5*Math.sin(8*g)*O/512,(U=n._constants).a=h,U.b=r,U.f=d,U.cosineHeading=o,U.sineHeading=c,U.tanU=u,U.cosineU=M,U.sineU=l,U.sigma=g,U.sineAlpha=_,U.sineSquaredAlpha=p,U.cosineSquaredAlpha=f,U.cosineAlpha=C,U.u2Over4=v,U.u4Over16=m,U.u6Over64=H,U.u8Over256=O,U.a0=b,U.a1=q,U.a2=S,U.a3=k,U.distanceRatio=w}function a(t,a,i){var e=k.defaultValue(i,n.Ellipsoid.WGS84);this._ellipsoid=e,this._start=new E.Cartographic,this._end=new E.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,k.defined(t)&&k.defined(a)&&s(this,t,a,e)}Object.defineProperties(a.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return y.Check.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return y.Check.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return y.Check.defined("distance",this._distance),this._endHeading}}}),a.prototype.setEndPoints=function(t,a){y.Check.defined("start",t),y.Check.defined("end",a),s(this,t,a,this._ellipsoid)},a.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},a.prototype.interpolateUsingSurfaceDistance=function(t,a){y.Check.defined("distance",this._distance);var i=this._constants,e=i.distanceRatio+t/i.b,n=Math.cos(2*e),s=Math.cos(4*e),h=Math.cos(6*e),r=Math.sin(2*e),d=Math.sin(4*e),o=Math.sin(6*e),c=Math.sin(8*e),u=e*e,M=e*u,l=i.u8Over256,g=i.u2Over4,_=i.u6Over64,p=i.u4Over16,f=2*M*l*n/3+e*(1-g+7*p/4-15*_/4+579*l/64-(p-15*_/4+187*l/16)*n-(5*_/4-115*l/16)*s-29*l*h/16)+(g/2-p+71*_/32-85*l/16)*r+(5*p/16-5*_/4+383*l/96)*d-u*((_-11*l/2)*r+5*l*d/2)+(29*_/96-29*l/16)*o+539*l*c/1536,C=Math.asin(Math.sin(f)*i.cosineAlpha),v=Math.atan(i.a/i.b*Math.tan(C));f-=i.sigma;var m=Math.cos(2*i.sigma+f),H=Math.sin(f),O=Math.cos(f),b=i.cosineU*O,q=i.sineU*H,S=Math.atan2(H*i.sineHeading,b-q*i.cosineHeading)-I(i.f,i.sineAlpha,i.cosineSquaredAlpha,f,H,O,m);return k.defined(a)?(a.longitude=this._start.longitude+S,a.latitude=v,a.height=0,a):new E.Cartographic(this._start.longitude+S,v,0)},t.EllipsoidGeodesic=a});