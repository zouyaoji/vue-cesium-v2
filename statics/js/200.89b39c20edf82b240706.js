(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{D97w:function(s,t,a){"use strict";a.r(t);var r={data:function(){return{colorPoint:{},polylines:[{positions:[{lng:119.24884033203125,lat:30.31311798095703,height:1183.3186645507812},{lng:119.24906555725647,lat:30.312892755731806,height:1183.3186645507812}]},{positions:[{lng:119.24884033203125,lat:30.313392639160156,height:1183.804443359375},{lng:119.24906555725632,lat:30.31316741393502,height:1183.684988424182}]},{positions:[{lng:119.24884033203125,lat:30.313655853271484,height:1184.2783203125},{lng:119.24906555725632,lat:30.313430628046348,height:1184.1093236654997}]}]}},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.colorPoint=t.Color.fromCssColorString("rgb(255,229,0)")},clicked:function(s){console.log(s)}}},e=a("JFUb"),v=Object(e.a)(r,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("PointPrimitive")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加点图元到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-collection-primitive-point",[s._l(s.polylines,(function(t,r){return[s._l(t.positions,(function(t,e){return[a("vc-primitive-point",{key:"point"+r+"position"+e,attrs:{position:t,color:s.colorPoint,pixelsize:8,disabledepthtestdistance:Number.POSITIVE_INFINITY},on:{click:s.clicked}})]}))]}))],2)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-primitive-point")]),this._v(" 组件用于加载点图元，只能作为 "),t("code",{pre:!0},[this._v("vc-collection-primitive-point")]),this._v(" 的子组件使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-point")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(polyline, index) of polylines"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"(position, subIndex) of polyline.positions"')]),s._v(">")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-point")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"'point' + index + 'position' + subIndex\"")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"colorPoint"')]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":pixelSize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"8"')]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v("\n            >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-point")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-point")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colorPoint")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polylines")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24884033203125")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313117980957031")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.3186645507812")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24906555725647")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.312892755731806")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.3186645507812")]),s._v(" }\n            ]\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24884033203125")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313392639160156")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.804443359375")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24906555725632")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.31316741393502")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1183.6849884241819")]),s._v(" }\n            ]\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24884033203125")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313655853271484")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1184.2783203125")]),s._v(" },\n              { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("119.24906555725632")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.313430628046348")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1184.1093236654997")]),s._v(" }\n            ]\n          }\n        ]\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("colorPoint")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Color")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromCssColorString")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'rgb(255,229,0)'")]),s._v(")\n      },\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("clicked")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("color")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("String")])]),s._v(" "),a("tr",[a("td",[s._v("disableDepthTestDistance")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点深度检测距离。")])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点显示条件。. "),a("strong",[s._v("结构: { near: number, far: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("id")]),s._v(" "),a("td",[s._v("*")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定与点关联的信息。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("String")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的轮廓宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("pixelSize")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的像素大小。")])]),s._v(" "),a("tr",[a("td",[s._v("position")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的位置。 "),a("strong",[s._v("结构：{ lng: number, lat: number, height: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("scaleByDistance")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点的缩放参数。 "),a("strong",[s._v("结构： { near: number, nearValue: number, far: number, farValue: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v("指定点是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("translucencyByDistance")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定点透明度改变参数。 "),a("strong",[s._v("结构： { near: number, nearValue: number, far: number, farValue: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PointPrimitive.html"}},[this._v("PointPrimitive")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("mousedown")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元上按下时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseup")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元上弹起时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("click")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标单击该图元时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("clickout")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标单击该图元外部时触。")])]),s._v(" "),a("tr",[a("td",[s._v("dblclick")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标左键双击该图元时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mousemove")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元上移动时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseover")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标移动到该图元时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseout")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标移出该图元时触发。")])])])])}],!1,null,null,null);t.default=v.exports},r34X:function(s,t,a){s.exports=a("D97w")}}]);
//# sourceMappingURL=200.89b39c20edf82b240706.js.map