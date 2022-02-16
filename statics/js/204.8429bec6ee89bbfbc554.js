(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{KZi6:function(s,t,a){s.exports=a("edK5")},edK5:function(s,t,a){"use strict";a.r(t);var e={data:function(){return{appearance:null,geometryInstances:null,geometry:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:200,rectangle:{west:100.5,south:29.5,east:115.5,north:35.5}}},methods:{ready:function(s){this.cesiumInstance=s;var t=this.cesiumInstance,a=t.Cesium;t.viewer;this.geometryInstances=new a.GeometryInstance({geometry:new a.RectangleGeometry({rectangle:a.Rectangle.fromDegrees(this.rectangle.west,this.rectangle.south,this.rectangle.east,this.rectangle.north)})}),this.appearance=new a.MaterialAppearance({material:a.Material.fromType("Checkerboard",{repeat:new a.Cartesian2(20,6)}),materialSupport:a.MaterialAppearance.MaterialSupport.TEXTURED})},clicked:function(s){console.log(s)}}},r=a("JFUb"),v=Object(r.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("Primitive")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载普通图元")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-primitive",{attrs:{appearance:s.appearance,"geometry-instances":s.geometryInstances},on:{click:s.clicked}})],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-primitive")]),this._v(" 用于加载普通图元，再通过它加载几何图形。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry-instances")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometryInstances"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("115.5")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" }\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v(" = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("geometryInstances")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("GeometryInstance")]),s._v("({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("RectangleGeometry")]),s._v("({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Rectangle")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromDegrees")]),s._v("(\n              "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("rectangle")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("west")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("rectangle")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("south")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("rectangle")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("east")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("rectangle")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("north")]),s._v("\n            )\n          })\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("MaterialAppearance")]),s._v("({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Material")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromType")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Checkerboard'")]),s._v(", {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("repeat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian2")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.0")]),s._v(")\n          }),\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("materialSupport")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("MaterialAppearance")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("MaterialSupport")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("TEXTURED")]),s._v("\n        })\n      },\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("clicked")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("geometryInstances")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定用于渲染的几何体实例或者几何体实例集合。")])]),s._v(" "),a("tr",[a("td",[s._v("appearance")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元的外观参数。")])]),s._v(" "),a("tr",[a("td",[s._v("depthFailAppearance")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元在深度测试失败后的外观。")])]),s._v(" "),a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("modelMatrix")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元从模型坐标转换为世界坐标的 4 x 4 矩阵。")])]),s._v(" "),a("tr",[a("td",[s._v("vertexCacheOptimize")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否优化几何体顶点着色器之前和之后的缓存。")])]),s._v(" "),a("tr",[a("td",[s._v("interleave")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。")])]),s._v(" "),a("tr",[a("td",[s._v("compressVertices")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否压缩几何体顶点，压缩可以以节省内存。")])]),s._v(" "),a("tr",[a("td",[s._v("releaseGeometryInstances")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否保留图元对几何体实例的输入，不保留可以节省内存。")])]),s._v(" "),a("tr",[a("td",[s._v("allowPicking")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。")])]),s._v(" "),a("tr",[a("td",[s._v("cull")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否能被渲染器视锥体剔除。")])]),s._v(" "),a("tr",[a("td",[s._v("asynchronous")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元时异步加载还是同步加载。")])]),s._v(" "),a("tr",[a("td",[s._v("debugShowBoundingVolume")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否显示图元的边界球，用于调试使用。")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否投射或接收来自每个光源的阴影。  "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html"}},[this._v("Primitive")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("mousedown")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元上按下时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseup")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元上弹起时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("click")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标单击该图元时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("clickout")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标单击该图元外部时触。")])]),s._v(" "),a("tr",[a("td",[s._v("dblclick")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标左键双击该图元时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mousemove")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标在该图元上移动时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseover")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标移动到该图元时触发。")])]),s._v(" "),a("tr",[a("td",[s._v("mouseout")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("鼠标移出该图元时触发。")])])])])}],!1,null,null,null);t.default=v.exports}}]);
//# sourceMappingURL=204.8429bec6ee89bbfbc554.js.map