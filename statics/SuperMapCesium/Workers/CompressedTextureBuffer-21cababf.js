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
define(["exports","./when-8d13db60"],function(t,e){function i(t,e,i,n,r){this._format=t,this._width=e,this._height=i,this._buffer=n,this._datatype=r}Object.defineProperties(i.prototype,{internalFormat:{get:function(){return this._format}},width:{get:function(){return this._width}},height:{get:function(){return this._height}},bufferView:{get:function(){return this._buffer}},pixelDatatype:{get:function(){return this._datatype}}}),i.clone=function(t){if(e.defined(t))return new i(t._format,t._width,t._height,t._buffer,t._datatype)},i.prototype.clone=function(){return i.clone(this)},t.CompressedTextureBuffer=i});