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
define(["exports","./WebGLConstants-4c11ee5f"],function(L,I){var N={POINTS:I.WebGLConstants.POINTS,LINES:I.WebGLConstants.LINES,LINE_LOOP:I.WebGLConstants.LINE_LOOP,LINE_STRIP:I.WebGLConstants.LINE_STRIP,TRIANGLES:I.WebGLConstants.TRIANGLES,TRIANGLE_STRIP:I.WebGLConstants.TRIANGLE_STRIP,TRIANGLE_FAN:I.WebGLConstants.TRIANGLE_FAN,validate:function(L){return L===N.POINTS||L===N.LINES||L===N.LINE_LOOP||L===N.LINE_STRIP||L===N.TRIANGLES||L===N.TRIANGLE_STRIP||L===N.TRIANGLE_FAN}},t=Object.freeze(N);L.PrimitiveType=t});