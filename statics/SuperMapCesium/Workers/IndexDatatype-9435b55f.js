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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./WebGLConstants-4c11ee5f"],function(e,i,a,E,r){var n={UNSIGNED_BYTE:r.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:r.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:r.WebGLConstants.UNSIGNED_INT,getSizeInBytes:function(e){switch(e){case n.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case n.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case n.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}throw new a.DeveloperError("indexDatatype is required and must be a valid IndexDatatype constant.")},fromSizeInBytes:function(e){switch(e){case 2:return n.UNSIGNED_SHORT;case 4:return n.UNSIGNED_INT;case 1:return n.UNSIGNED_BYTE;default:throw new a.DeveloperError("Size in bytes cannot be mapped to an IndexDatatype")}},validate:function(e){return i.defined(e)&&(e===n.UNSIGNED_BYTE||e===n.UNSIGNED_SHORT||e===n.UNSIGNED_INT)},createTypedArray:function(e,r){if(!i.defined(e))throw new a.DeveloperError("numberOfVertices is required.");return e>=E.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(r):new Uint16Array(r)},createTypedArrayFromArrayBuffer:function(e,r,n,t){if(!i.defined(e))throw new a.DeveloperError("numberOfVertices is required.");if(!i.defined(r))throw new a.DeveloperError("sourceArray is required.");if(!i.defined(n))throw new a.DeveloperError("byteOffset is required.");return e>=E.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(r,n,t):new Uint16Array(r,n,t)}},t=Object.freeze(n);e.IndexDatatype=t});