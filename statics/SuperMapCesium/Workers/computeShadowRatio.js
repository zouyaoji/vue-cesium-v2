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
define(["./when-8d13db60","./Check-70bec281","./Math-61ede240","./Cartographic-f27b0939","./Cartesian4-5af5bb24","./createTaskProcessorWorker"],function(r,e,I,P,z,a){var A=new z.Cartesian4(1,1/255,1/65025,1/160581375),B=new z.Cartesian4,R=1024;function v(r,e,a,t,n,i,s){var o=r.longitude,f=r.latitude,u=r.height;if(o=I.CesiumMath.toDegrees(o),f=I.CesiumMath.toDegrees(f),o<e[0]||o>e[2]||f<e[1]||f>e[3])return-1;for(var h=!1,C=0,c=.1*t,d=0;d<=a;d+=t){if(Math.abs(n+d-u)<c){h=!0;break}C++}if(!h)return-1;if(i.length<0)return-1;h=!1;for(var v=0;v<i.length;v+=2){var g=P.Cartesian3.fromDegrees(o,f,u),b=P.Cartesian3.fromDegrees(i[v+0],i[v+1],u);if(P.Cartesian3.distance(g,b)<c){h=!0;break}}if(!h)return-1;var l=e[2]-e[0],p=(u=e[3]-e[1],e[0]-.025*l),m=e[1]-.025*u;l+=.05*l,u+=.05*u;var k=parseInt((o-p)/l*R),w=parseInt((f-m)/u*R);k=k<1?1:k,w=w<1?1:w;var D=s[C],M=0;for(v=-1;v<2;v++)for(var x=-1;x<2;x++){var y=4*(R*(w+x)+(k+v));B.x=D[y],B.y=D[y+1],B.z=D[y+2],B.w=D[y+3],z.Cartesian4.divideByScalar(B,255,B),M=Math.max(M,z.Cartesian4.dot(B,A))}return M=.999<M?1:M}return a(function(r,e){for(var a=r.points,t=r.enuPoints,n=r.bounds,i=r.extend,s=r.spacing,o=r.bottom,f=r.pixelsArray,u=[],h=0,C=a.length;h<C;h++){var c=a[h],d=v(P.Cartographic.fromCartesian(c),n,i,s,o,t,f);u.push({position:P.Cartesian3.clone(c),shadowRatio:d})}return{resultData:u}})});