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
define(["exports","./when-8d13db60","./Check-70bec281","./WebGLConstants-4c11ee5f"],function(e,a,E,r){var N={BYTE:r.WebGLConstants.BYTE,UNSIGNED_BYTE:r.WebGLConstants.UNSIGNED_BYTE,SHORT:r.WebGLConstants.SHORT,UNSIGNED_SHORT:r.WebGLConstants.UNSIGNED_SHORT,INT:r.WebGLConstants.INT,UNSIGNED_INT:r.WebGLConstants.UNSIGNED_INT,FLOAT:r.WebGLConstants.FLOAT,DOUBLE:r.WebGLConstants.DOUBLE,getSizeInBytes:function(e){if(!a.defined(e))throw new E.DeveloperError("value is required.");switch(e){case N.BYTE:return Int8Array.BYTES_PER_ELEMENT;case N.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case N.SHORT:return Int16Array.BYTES_PER_ELEMENT;case N.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case N.INT:return Int32Array.BYTES_PER_ELEMENT;case N.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case N.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case N.DOUBLE:return Float64Array.BYTES_PER_ELEMENT;default:throw new E.DeveloperError("componentDatatype is not a valid value.")}},fromTypedArray:function(e){return e instanceof Int8Array?N.BYTE:e instanceof Uint8Array?N.UNSIGNED_BYTE:e instanceof Int16Array?N.SHORT:e instanceof Uint16Array?N.UNSIGNED_SHORT:e instanceof Int32Array?N.INT:e instanceof Uint32Array?N.UNSIGNED_INT:e instanceof Float32Array?N.FLOAT:e instanceof Float64Array?N.DOUBLE:void 0},validate:function(e){return a.defined(e)&&(e===N.BYTE||e===N.UNSIGNED_BYTE||e===N.SHORT||e===N.UNSIGNED_SHORT||e===N.INT||e===N.UNSIGNED_INT||e===N.FLOAT||e===N.DOUBLE)},createTypedArray:function(e,r){if(!a.defined(e))throw new E.DeveloperError("componentDatatype is required.");if(!a.defined(r))throw new E.DeveloperError("valuesOrLength is required.");switch(e){case N.BYTE:return new Int8Array(r);case N.UNSIGNED_BYTE:return new Uint8Array(r);case N.SHORT:return new Int16Array(r);case N.UNSIGNED_SHORT:return new Uint16Array(r);case N.INT:return new Int32Array(r);case N.UNSIGNED_INT:return new Uint32Array(r);case N.FLOAT:return new Float32Array(r);case N.DOUBLE:return new Float64Array(r);default:throw new E.DeveloperError("componentDatatype is not a valid value.")}},createArrayBufferView:function(e,r,n,t){if(!a.defined(e))throw new E.DeveloperError("componentDatatype is required.");if(!a.defined(r))throw new E.DeveloperError("buffer is required.");switch(n=a.defaultValue(n,0),t=a.defaultValue(t,(r.byteLength-n)/N.getSizeInBytes(e)),e){case N.BYTE:return new Int8Array(r,n,t);case N.UNSIGNED_BYTE:return new Uint8Array(r,n,t);case N.SHORT:return new Int16Array(r,n,t);case N.UNSIGNED_SHORT:return new Uint16Array(r,n,t);case N.INT:return new Int32Array(r,n,t);case N.UNSIGNED_INT:return new Uint32Array(r,n,t);case N.FLOAT:return new Float32Array(r,n,t);case N.DOUBLE:return new Float64Array(r,n,t);default:throw new E.DeveloperError("componentDatatype is not a valid value.")}},fromName:function(e){switch(e){case"BYTE":return N.BYTE;case"UNSIGNED_BYTE":return N.UNSIGNED_BYTE;case"SHORT":return N.SHORT;case"UNSIGNED_SHORT":return N.UNSIGNED_SHORT;case"INT":return N.INT;case"UNSIGNED_INT":return N.UNSIGNED_INT;case"FLOAT":return N.FLOAT;case"DOUBLE":return N.DOUBLE;default:throw new E.DeveloperError("name is not a valid value.")}}},n=Object.freeze(N);e.ComponentDatatype=n});