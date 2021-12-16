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
define(["exports","./when-8d13db60","./Check-70bec281","./Math-61ede240","./FeatureDetection-7bd32c34"],function(e,u,E,m,r){function i(e,r,t){return t<0&&(t+=1),1<t&&(t-=1),6*t<1?e+6*(r-e)*t:2*t<1?r:3*t<2?e+(r-e)*(2/3-t)*6:e}function g(e,r,t,o){this.red=u.defaultValue(e,1),this.green=u.defaultValue(r,1),this.blue=u.defaultValue(t,1),this.alpha=u.defaultValue(o,1)}var t,f,s;g.fromCartesian4=function(e,r){return E.Check.typeOf.object("cartesian",e),u.defined(r)?(r.red=e.x,r.green=e.y,r.blue=e.z,r.alpha=e.w,r):new g(e.x,e.y,e.z,e.w)},g.fromBytes=function(e,r,t,o,f){return e=g.byteToFloat(u.defaultValue(e,255)),r=g.byteToFloat(u.defaultValue(r,255)),t=g.byteToFloat(u.defaultValue(t,255)),o=g.byteToFloat(u.defaultValue(o,255)),u.defined(f)?(f.red=e,f.green=r,f.blue=t,f.alpha=o,f):new g(e,r,t,o)},g.fromAlpha=function(e,r,t){return E.Check.typeOf.object("color",e),E.Check.typeOf.number("alpha",r),u.defined(t)?(t.red=e.red,t.green=e.green,t.blue=e.blue,t.alpha=r,t):new g(e.red,e.green,e.blue,r)},r.FeatureDetection.supportsTypedArrays()&&(t=new ArrayBuffer(4),f=new Uint32Array(t),s=new Uint8Array(t)),g.fromRgba=function(e,r){return f[0]=e,g.fromBytes(s[0],s[1],s[2],s[3],r)},g.byteToRgba=function(e,r,t,o){return s[0]=e,s[1]=r,s[2]=t,s[3]=o,f[0]},g.fromHsl=function(e,r,t,o,f){e=u.defaultValue(e,0)%1,r=u.defaultValue(r,0),t=u.defaultValue(t,0),o=u.defaultValue(o,1);var s=t,C=t,n=t;if(0!==r){var l,a=2*t-(l=t<.5?t*(1+r):t+r-t*r);s=i(a,l,e+1/3),C=i(a,l,e),n=i(a,l,e-1/3)}return u.defined(f)?(f.red=s,f.green=C,f.blue=n,f.alpha=o,f):new g(s,C,n,o)},g.fromRandom=function(e,r){var t=(e=u.defaultValue(e,u.defaultValue.EMPTY_OBJECT)).red;if(!u.defined(t)){var o=u.defaultValue(e.minimumRed,0),f=u.defaultValue(e.maximumRed,1);E.Check.typeOf.number.lessThanOrEquals("minimumRed",o,f),t=o+m.CesiumMath.nextRandomNumber()*(f-o)}var s=e.green;if(!u.defined(s)){var C=u.defaultValue(e.minimumGreen,0),n=u.defaultValue(e.maximumGreen,1);E.Check.typeOf.number.lessThanOrEquals("minimumGreen",C,n),s=C+m.CesiumMath.nextRandomNumber()*(n-C)}var l=e.blue;if(!u.defined(l)){var a=u.defaultValue(e.minimumBlue,0),i=u.defaultValue(e.maximumBlue,1);E.Check.typeOf.number.lessThanOrEquals("minimumBlue",a,i),l=a+m.CesiumMath.nextRandomNumber()*(i-a)}var c=e.alpha;if(!u.defined(c)){var O=u.defaultValue(e.minimumAlpha,0),b=u.defaultValue(e.maximumAlpha,1);E.Check.typeOf.number.lessThanOrEquals("minumumAlpha",O,b),c=O+m.CesiumMath.nextRandomNumber()*(b-O)}return u.defined(r)?(r.red=t,r.green=s,r.blue=l,r.alpha=c,r):new g(t,s,l,c)};var C=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,n=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,l=/^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,a=/^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;g.fromCssColorString=function(e,r){E.Check.typeOf.string("color",e),u.defined(r)||(r=new g);var t=g[e.toUpperCase()];if(u.defined(t))return g.clone(t,r),r;var o=C.exec(e);return null!==o?(r.red=parseInt(o[1],16)/15,r.green=parseInt(o[2],16)/15,r.blue=parseInt(o[3],16)/15,r.alpha=1,r):null!==(o=n.exec(e))?(r.red=parseInt(o[1],16)/255,r.green=parseInt(o[2],16)/255,r.blue=parseInt(o[3],16)/255,r.alpha=1,r):null!==(o=l.exec(e))?(r.red=parseFloat(o[1])/("%"===o[1].substr(-1)?100:255),r.green=parseFloat(o[2])/("%"===o[2].substr(-1)?100:255),r.blue=parseFloat(o[3])/("%"===o[3].substr(-1)?100:255),r.alpha=parseFloat(u.defaultValue(o[4],"1.0")),r):null!==(o=a.exec(e))?g.fromHsl(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,parseFloat(u.defaultValue(o[4],"1.0")),r):r=void 0},g.packedLength=4,g.pack=function(e,r,t){return E.Check.typeOf.object("value",e),E.Check.defined("array",r),t=u.defaultValue(t,0),r[t++]=e.red,r[t++]=e.green,r[t++]=e.blue,r[t]=e.alpha,r},g.unpack=function(e,r,t){return E.Check.defined("array",e),r=u.defaultValue(r,0),u.defined(t)||(t=new g),t.red=e[r++],t.green=e[r++],t.blue=e[r++],t.alpha=e[r],t},g.byteToFloat=function(e){return e/255},g.floatToByte=function(e){return 1===e?255:256*e|0},g.clone=function(e,r){if(u.defined(e))return u.defined(r)?(r.red=e.red,r.green=e.green,r.blue=e.blue,r.alpha=e.alpha,r):new g(e.red,e.green,e.blue,e.alpha)},g.equals=function(e,r){return e===r||u.defined(e)&&u.defined(r)&&e.red===r.red&&e.green===r.green&&e.blue===r.blue&&e.alpha===r.alpha},g.equalsArray=function(e,r,t){return e.red===r[t]&&e.green===r[t+1]&&e.blue===r[t+2]&&e.alpha===r[t+3]},g.prototype.clone=function(e){return g.clone(this,e)},g.prototype.equals=function(e){return g.equals(this,e)},g.prototype.equalsEpsilon=function(e,r){return this===e||u.defined(e)&&Math.abs(this.red-e.red)<=r&&Math.abs(this.green-e.green)<=r&&Math.abs(this.blue-e.blue)<=r&&Math.abs(this.alpha-e.alpha)<=r},g.prototype.toString=function(){return"("+this.red+", "+this.green+", "+this.blue+", "+this.alpha+")"},g.prototype.toCssColorString=function(){var e=g.floatToByte(this.red),r=g.floatToByte(this.green),t=g.floatToByte(this.blue);return 1===this.alpha?"rgb("+e+","+r+","+t+")":"rgba("+e+","+r+","+t+","+this.alpha+")"},g.prototype.toBytes=function(e){var r=g.floatToByte(this.red),t=g.floatToByte(this.green),o=g.floatToByte(this.blue),f=g.floatToByte(this.alpha);return u.defined(e)?(e[0]=r,e[1]=t,e[2]=o,e[3]=f,e):[r,t,o,f]},g.prototype.toRgba=function(){return s[0]=g.floatToByte(this.red),s[1]=g.floatToByte(this.green),s[2]=g.floatToByte(this.blue),s[3]=g.floatToByte(this.alpha),f[0]},g.prototype.brighten=function(e,r){return E.Check.typeOf.number("magnitude",e),E.Check.typeOf.number.greaterThanOrEquals("magnitude",e,0),E.Check.typeOf.object("result",r),e=1-e,r.red=1-(1-this.red)*e,r.green=1-(1-this.green)*e,r.blue=1-(1-this.blue)*e,r.alpha=this.alpha,r},g.prototype.darken=function(e,r){return E.Check.typeOf.number("magnitude",e),E.Check.typeOf.number.greaterThanOrEquals("magnitude",e,0),E.Check.typeOf.object("result",r),e=1-e,r.red=this.red*e,r.green=this.green*e,r.blue=this.blue*e,r.alpha=this.alpha,r},g.prototype.withAlpha=function(e,r){return g.fromAlpha(this,e,r)},g.add=function(e,r,t){return E.Check.typeOf.object("left",e),E.Check.typeOf.object("right",r),E.Check.typeOf.object("result",t),t.red=e.red+r.red,t.green=e.green+r.green,t.blue=e.blue+r.blue,t.alpha=e.alpha+r.alpha,t},g.subtract=function(e,r,t){return E.Check.typeOf.object("left",e),E.Check.typeOf.object("right",r),E.Check.typeOf.object("result",t),t.red=e.red-r.red,t.green=e.green-r.green,t.blue=e.blue-r.blue,t.alpha=e.alpha-r.alpha,t},g.multiply=function(e,r,t){return E.Check.typeOf.object("left",e),E.Check.typeOf.object("right",r),E.Check.typeOf.object("result",t),t.red=e.red*r.red,t.green=e.green*r.green,t.blue=e.blue*r.blue,t.alpha=e.alpha*r.alpha,t},g.divide=function(e,r,t){return E.Check.typeOf.object("left",e),E.Check.typeOf.object("right",r),E.Check.typeOf.object("result",t),t.red=e.red/r.red,t.green=e.green/r.green,t.blue=e.blue/r.blue,t.alpha=e.alpha/r.alpha,t},g.mod=function(e,r,t){return E.Check.typeOf.object("left",e),E.Check.typeOf.object("right",r),E.Check.typeOf.object("result",t),t.red=e.red%r.red,t.green=e.green%r.green,t.blue=e.blue%r.blue,t.alpha=e.alpha%r.alpha,t},g.lerp=function(e,r,t,o){return E.Check.typeOf.object("start",e),E.Check.typeOf.object("end",r),E.Check.typeOf.number("t",t),E.Check.typeOf.object("result",o),o.red=m.CesiumMath.lerp(e.red,r.red,t),o.green=m.CesiumMath.lerp(e.green,r.green,t),o.blue=m.CesiumMath.lerp(e.blue,r.blue,t),o.alpha=m.CesiumMath.lerp(e.alpha,r.alpha,t),o},g.multiplyByScalar=function(e,r,t){return E.Check.typeOf.object("color",e),E.Check.typeOf.number("scalar",r),E.Check.typeOf.object("result",t),t.red=e.red*r,t.green=e.green*r,t.blue=e.blue*r,t.alpha=e.alpha*r,t},g.divideByScalar=function(e,r,t){return E.Check.typeOf.object("color",e),E.Check.typeOf.number("scalar",r),E.Check.typeOf.object("result",t),t.red=e.red/r,t.green=e.green/r,t.blue=e.blue/r,t.alpha=e.alpha/r,t},g.ALICEBLUE=Object.freeze(g.fromCssColorString("#F0F8FF")),g.ANTIQUEWHITE=Object.freeze(g.fromCssColorString("#FAEBD7")),g.AQUA=Object.freeze(g.fromCssColorString("#00FFFF")),g.AQUAMARINE=Object.freeze(g.fromCssColorString("#7FFFD4")),g.AZURE=Object.freeze(g.fromCssColorString("#F0FFFF")),g.BEIGE=Object.freeze(g.fromCssColorString("#F5F5DC")),g.BISQUE=Object.freeze(g.fromCssColorString("#FFE4C4")),g.BLACK=Object.freeze(g.fromCssColorString("#000000")),g.BLANCHEDALMOND=Object.freeze(g.fromCssColorString("#FFEBCD")),g.BLUE=Object.freeze(g.fromCssColorString("#0000FF")),g.BLUEVIOLET=Object.freeze(g.fromCssColorString("#8A2BE2")),g.BROWN=Object.freeze(g.fromCssColorString("#A52A2A")),g.BURLYWOOD=Object.freeze(g.fromCssColorString("#DEB887")),g.CADETBLUE=Object.freeze(g.fromCssColorString("#5F9EA0")),g.CHARTREUSE=Object.freeze(g.fromCssColorString("#7FFF00")),g.CHOCOLATE=Object.freeze(g.fromCssColorString("#D2691E")),g.CORAL=Object.freeze(g.fromCssColorString("#FF7F50")),g.CORNFLOWERBLUE=Object.freeze(g.fromCssColorString("#6495ED")),g.CORNSILK=Object.freeze(g.fromCssColorString("#FFF8DC")),g.CRIMSON=Object.freeze(g.fromCssColorString("#DC143C")),g.CYAN=Object.freeze(g.fromCssColorString("#00FFFF")),g.DARKBLUE=Object.freeze(g.fromCssColorString("#00008B")),g.DARKCYAN=Object.freeze(g.fromCssColorString("#008B8B")),g.DARKGOLDENROD=Object.freeze(g.fromCssColorString("#B8860B")),g.DARKGRAY=Object.freeze(g.fromCssColorString("#A9A9A9")),g.DARKGREEN=Object.freeze(g.fromCssColorString("#006400")),g.DARKGREY=g.DARKGRAY,g.DARKKHAKI=Object.freeze(g.fromCssColorString("#BDB76B")),g.DARKMAGENTA=Object.freeze(g.fromCssColorString("#8B008B")),g.DARKOLIVEGREEN=Object.freeze(g.fromCssColorString("#556B2F")),g.DARKORANGE=Object.freeze(g.fromCssColorString("#FF8C00")),g.DARKORCHID=Object.freeze(g.fromCssColorString("#9932CC")),g.DARKRED=Object.freeze(g.fromCssColorString("#8B0000")),g.DARKSALMON=Object.freeze(g.fromCssColorString("#E9967A")),g.DARKSEAGREEN=Object.freeze(g.fromCssColorString("#8FBC8F")),g.DARKSLATEBLUE=Object.freeze(g.fromCssColorString("#483D8B")),g.DARKSLATEGRAY=Object.freeze(g.fromCssColorString("#2F4F4F")),g.DARKSLATEGREY=g.DARKSLATEGRAY,g.DARKTURQUOISE=Object.freeze(g.fromCssColorString("#00CED1")),g.DARKVIOLET=Object.freeze(g.fromCssColorString("#9400D3")),g.DEEPPINK=Object.freeze(g.fromCssColorString("#FF1493")),g.DEEPSKYBLUE=Object.freeze(g.fromCssColorString("#00BFFF")),g.DIMGRAY=Object.freeze(g.fromCssColorString("#696969")),g.DIMGREY=g.DIMGRAY,g.DODGERBLUE=Object.freeze(g.fromCssColorString("#1E90FF")),g.FIREBRICK=Object.freeze(g.fromCssColorString("#B22222")),g.FLORALWHITE=Object.freeze(g.fromCssColorString("#FFFAF0")),g.FORESTGREEN=Object.freeze(g.fromCssColorString("#228B22")),g.FUCHSIA=Object.freeze(g.fromCssColorString("#FF00FF")),g.GAINSBORO=Object.freeze(g.fromCssColorString("#DCDCDC")),g.GHOSTWHITE=Object.freeze(g.fromCssColorString("#F8F8FF")),g.GOLD=Object.freeze(g.fromCssColorString("#FFD700")),g.GOLDENROD=Object.freeze(g.fromCssColorString("#DAA520")),g.GRAY=Object.freeze(g.fromCssColorString("#808080")),g.GREEN=Object.freeze(g.fromCssColorString("#008000")),g.GREENYELLOW=Object.freeze(g.fromCssColorString("#ADFF2F")),g.GREY=g.GRAY,g.HONEYDEW=Object.freeze(g.fromCssColorString("#F0FFF0")),g.HOTPINK=Object.freeze(g.fromCssColorString("#FF69B4")),g.INDIANRED=Object.freeze(g.fromCssColorString("#CD5C5C")),g.INDIGO=Object.freeze(g.fromCssColorString("#4B0082")),g.IVORY=Object.freeze(g.fromCssColorString("#FFFFF0")),g.KHAKI=Object.freeze(g.fromCssColorString("#F0E68C")),g.LAVENDER=Object.freeze(g.fromCssColorString("#E6E6FA")),g.LAVENDAR_BLUSH=Object.freeze(g.fromCssColorString("#FFF0F5")),g.LAWNGREEN=Object.freeze(g.fromCssColorString("#7CFC00")),g.LEMONCHIFFON=Object.freeze(g.fromCssColorString("#FFFACD")),g.LIGHTBLUE=Object.freeze(g.fromCssColorString("#ADD8E6")),g.LIGHTCORAL=Object.freeze(g.fromCssColorString("#F08080")),g.LIGHTCYAN=Object.freeze(g.fromCssColorString("#E0FFFF")),g.LIGHTGOLDENRODYELLOW=Object.freeze(g.fromCssColorString("#FAFAD2")),g.LIGHTGRAY=Object.freeze(g.fromCssColorString("#D3D3D3")),g.LIGHTGREEN=Object.freeze(g.fromCssColorString("#90EE90")),g.LIGHTGREY=g.LIGHTGRAY,g.LIGHTPINK=Object.freeze(g.fromCssColorString("#FFB6C1")),g.LIGHTSEAGREEN=Object.freeze(g.fromCssColorString("#20B2AA")),g.LIGHTSKYBLUE=Object.freeze(g.fromCssColorString("#87CEFA")),g.LIGHTSLATEGRAY=Object.freeze(g.fromCssColorString("#778899")),g.LIGHTSLATEGREY=g.LIGHTSLATEGRAY,g.LIGHTSTEELBLUE=Object.freeze(g.fromCssColorString("#B0C4DE")),g.LIGHTYELLOW=Object.freeze(g.fromCssColorString("#FFFFE0")),g.LIME=Object.freeze(g.fromCssColorString("#00FF00")),g.LIMEGREEN=Object.freeze(g.fromCssColorString("#32CD32")),g.LINEN=Object.freeze(g.fromCssColorString("#FAF0E6")),g.MAGENTA=Object.freeze(g.fromCssColorString("#FF00FF")),g.MAROON=Object.freeze(g.fromCssColorString("#800000")),g.MEDIUMAQUAMARINE=Object.freeze(g.fromCssColorString("#66CDAA")),g.MEDIUMBLUE=Object.freeze(g.fromCssColorString("#0000CD")),g.MEDIUMORCHID=Object.freeze(g.fromCssColorString("#BA55D3")),g.MEDIUMPURPLE=Object.freeze(g.fromCssColorString("#9370DB")),g.MEDIUMSEAGREEN=Object.freeze(g.fromCssColorString("#3CB371")),g.MEDIUMSLATEBLUE=Object.freeze(g.fromCssColorString("#7B68EE")),g.MEDIUMSPRINGGREEN=Object.freeze(g.fromCssColorString("#00FA9A")),g.MEDIUMTURQUOISE=Object.freeze(g.fromCssColorString("#48D1CC")),g.MEDIUMVIOLETRED=Object.freeze(g.fromCssColorString("#C71585")),g.MIDNIGHTBLUE=Object.freeze(g.fromCssColorString("#191970")),g.MINTCREAM=Object.freeze(g.fromCssColorString("#F5FFFA")),g.MISTYROSE=Object.freeze(g.fromCssColorString("#FFE4E1")),g.MOCCASIN=Object.freeze(g.fromCssColorString("#FFE4B5")),g.NAVAJOWHITE=Object.freeze(g.fromCssColorString("#FFDEAD")),g.NAVY=Object.freeze(g.fromCssColorString("#000080")),g.OLDLACE=Object.freeze(g.fromCssColorString("#FDF5E6")),g.OLIVE=Object.freeze(g.fromCssColorString("#808000")),g.OLIVEDRAB=Object.freeze(g.fromCssColorString("#6B8E23")),g.ORANGE=Object.freeze(g.fromCssColorString("#FFA500")),g.ORANGERED=Object.freeze(g.fromCssColorString("#FF4500")),g.ORCHID=Object.freeze(g.fromCssColorString("#DA70D6")),g.PALEGOLDENROD=Object.freeze(g.fromCssColorString("#EEE8AA")),g.PALEGREEN=Object.freeze(g.fromCssColorString("#98FB98")),g.PALETURQUOISE=Object.freeze(g.fromCssColorString("#AFEEEE")),g.PALEVIOLETRED=Object.freeze(g.fromCssColorString("#DB7093")),g.PAPAYAWHIP=Object.freeze(g.fromCssColorString("#FFEFD5")),g.PEACHPUFF=Object.freeze(g.fromCssColorString("#FFDAB9")),g.PERU=Object.freeze(g.fromCssColorString("#CD853F")),g.PINK=Object.freeze(g.fromCssColorString("#FFC0CB")),g.PLUM=Object.freeze(g.fromCssColorString("#DDA0DD")),g.POWDERBLUE=Object.freeze(g.fromCssColorString("#B0E0E6")),g.PURPLE=Object.freeze(g.fromCssColorString("#800080")),g.RED=Object.freeze(g.fromCssColorString("#FF0000")),g.ROSYBROWN=Object.freeze(g.fromCssColorString("#BC8F8F")),g.ROYALBLUE=Object.freeze(g.fromCssColorString("#4169E1")),g.SADDLEBROWN=Object.freeze(g.fromCssColorString("#8B4513")),g.SALMON=Object.freeze(g.fromCssColorString("#FA8072")),g.SANDYBROWN=Object.freeze(g.fromCssColorString("#F4A460")),g.SEAGREEN=Object.freeze(g.fromCssColorString("#2E8B57")),g.SEASHELL=Object.freeze(g.fromCssColorString("#FFF5EE")),g.SIENNA=Object.freeze(g.fromCssColorString("#A0522D")),g.SILVER=Object.freeze(g.fromCssColorString("#C0C0C0")),g.SKYBLUE=Object.freeze(g.fromCssColorString("#87CEEB")),g.SLATEBLUE=Object.freeze(g.fromCssColorString("#6A5ACD")),g.SLATEGRAY=Object.freeze(g.fromCssColorString("#708090")),g.SLATEGREY=g.SLATEGRAY,g.SNOW=Object.freeze(g.fromCssColorString("#FFFAFA")),g.SPRINGGREEN=Object.freeze(g.fromCssColorString("#00FF7F")),g.STEELBLUE=Object.freeze(g.fromCssColorString("#4682B4")),g.TAN=Object.freeze(g.fromCssColorString("#D2B48C")),g.TEAL=Object.freeze(g.fromCssColorString("#008080")),g.THISTLE=Object.freeze(g.fromCssColorString("#D8BFD8")),g.TOMATO=Object.freeze(g.fromCssColorString("#FF6347")),g.TURQUOISE=Object.freeze(g.fromCssColorString("#40E0D0")),g.VIOLET=Object.freeze(g.fromCssColorString("#EE82EE")),g.WHEAT=Object.freeze(g.fromCssColorString("#F5DEB3")),g.WHITE=Object.freeze(g.fromCssColorString("#FFFFFF")),g.WHITESMOKE=Object.freeze(g.fromCssColorString("#F5F5F5")),g.YELLOW=Object.freeze(g.fromCssColorString("#FFFF00")),g.YELLOWGREEN=Object.freeze(g.fromCssColorString("#9ACD32")),g.TRANSPARENT=Object.freeze(new g(0,0,0,0)),e.Color=g});