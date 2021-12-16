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
define(["exports","./when-8d13db60","./Check-70bec281","./Cartographic-f27b0939","./Cartesian2-09435a6c","./BoundingSphere-c409f092"],function(e,o,c,t,r,a){function y(e,t,n,h){this.x=o.defaultValue(e,0),this.y=o.defaultValue(t,0),this.width=o.defaultValue(n,0),this.height=o.defaultValue(h,0)}y.packedLength=4,y.pack=function(e,t,n){return c.Check.typeOf.object("value",e),c.Check.defined("array",t),n=o.defaultValue(n,0),t[n++]=e.x,t[n++]=e.y,t[n++]=e.width,t[n]=e.height,t},y.unpack=function(e,t,n){return c.Check.defined("array",e),t=o.defaultValue(t,0),o.defined(n)||(n=new y),n.x=e[t++],n.y=e[t++],n.width=e[t++],n.height=e[t],n},y.fromPoints=function(e,t){if(o.defined(t)||(t=new y),!o.defined(e)||0===e.length)return t.x=0,t.y=0,t.width=0,t.height=0,t;for(var n=e.length,h=e[0].x,i=e[0].y,r=e[0].x,a=e[0].y,c=1;c<n;c++){var d=e[c],u=d.x,f=d.y;h=Math.min(u,h),r=Math.max(u,r),i=Math.min(f,i),a=Math.max(f,a)}return t.x=h,t.y=i,t.width=r-h,t.height=a-i,t};var d=new a.GeographicProjection,u=new t.Cartographic,f=new t.Cartographic;y.fromRectangle=function(e,t,n){if(o.defined(n)||(n=new y),!o.defined(e))return n.x=0,n.y=0,n.width=0,n.height=0,n;var h=(t=o.defaultValue(t,d)).project(r.Rectangle.southwest(e,u)),i=t.project(r.Rectangle.northeast(e,f));return r.Cartesian2.subtract(i,h,i),n.x=h.x,n.y=h.y,n.width=i.x,n.height=i.y,n},y.clone=function(e,t){if(o.defined(e))return o.defined(t)?(t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,t):new y(e.x,e.y,e.width,e.height)},y.union=function(e,t,n){c.Check.typeOf.object("left",e),c.Check.typeOf.object("right",t),o.defined(n)||(n=new y);var h=Math.min(e.x,t.x),i=Math.min(e.y,t.y),r=Math.max(e.x+e.width,t.x+t.width),a=Math.max(e.y+e.height,t.y+t.height);return n.x=h,n.y=i,n.width=r-h,n.height=a-i,n},y.expand=function(e,t,n){c.Check.typeOf.object("rectangle",e),c.Check.typeOf.object("point",t),n=y.clone(e,n);var h=t.x-n.x,i=t.y-n.y;return h>n.width?n.width=h:h<0&&(n.width-=h,n.x=t.x),i>n.height?n.height=i:i<0&&(n.height-=i,n.y=t.y),n},y.intersect=function(e,t){c.Check.typeOf.object("left",e),c.Check.typeOf.object("right",t);var n=e.x,h=e.y,i=t.x,r=t.y;return n>i+t.width||n+e.width<i||h+e.height<r||h>r+t.height?a.Intersect.OUTSIDE:a.Intersect.INTERSECTING},y.equals=function(e,t){return e===t||o.defined(e)&&o.defined(t)&&e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height},y.prototype.clone=function(e){return y.clone(this,e)},y.prototype.intersect=function(e){return y.intersect(this,e)},y.prototype.equals=function(e){return y.equals(this,e)},e.BoundingRectangle=y});