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
define(["exports","./when-8d13db60","./Check-70bec281"],function(e,u,h){e.arrayFill=function(e,n,t,a){if(h.Check.defined("array",e),h.Check.defined("value",n),u.defined(t)&&h.Check.typeOf.number("start",t),u.defined(a)&&h.Check.typeOf.number("end",a),"function"==typeof e.fill)return e.fill(n,t,a);for(var f=e.length>>>0,d=u.defaultValue(t,0),i=d<0?Math.max(f+d,0):Math.min(d,f),r=u.defaultValue(a,f),l=r<0?Math.max(f+r,0):Math.min(r,f);i<l;)e[i]=n,i++;return e}});