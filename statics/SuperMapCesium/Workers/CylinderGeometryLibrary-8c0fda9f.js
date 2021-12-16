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
define(["exports","./Math-61ede240"],function(r,b){var e={computePositions:function(r,e,t,a,n){var o,i=.5*r,s=-i,u=a+a,c=new Float64Array(3*(n?2*u:u)),f=0,h=0,y=n?3*u:0,M=n?3*(u+a):3*a;for(o=0;o<a;o++){var d=o/a*b.CesiumMath.TWO_PI,m=Math.cos(d),v=Math.sin(d),l=m*t,p=v*t,C=m*e,P=v*e;c[h+y]=l,c[h+y+1]=p,c[h+y+2]=s,c[h+M]=C,c[h+M+1]=P,c[h+M+2]=i,h+=3,n&&(c[f++]=l,c[f++]=p,c[f++]=s,c[f++]=C,c[f++]=P,c[f++]=i)}return c}};r.CylinderGeometryLibrary=e});