(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{FVCW:function(s,a,t){s.exports=t("uIqe")},uIqe:function(s,a,t){"use strict";t.r(a);var e={data:function(){return{appearance:null,geometry:null,image:"./statics/SampleData/radarImage/1.png",rectangle:{west:102.5,south:29.5,east:106.5,north:33.5},interleave:!0,asynchronous:!1}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance,t=a.Cesium;a.viewer.camera.setView({destination:new t.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}}),this.appearance=new t.MaterialAppearance({material:new t.Material({fabric:{type:"Image",uniforms:{image:this.image}}})}),this.play()},play:function(){var s=["./statics/SampleData/radarImage/1.png","./statics/SampleData/radarImage/2.png","./statics/SampleData/radarImage/3.png","./statics/SampleData/radarImage/4.png","./statics/SampleData/radarImage/5.png"],a=0,t=this;setInterval((function(){t.appearance.material.uniforms.image=s[a],5===++a&&(a=0)}),500)}}},r=t("JFUb"),v=Object(r.a)(e,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("GroundPrimitive 图元")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载贴地图元")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-provider-terrain-cesium"),s._v(" "),t("vc-primitive-ground",{attrs:{appearance:s.appearance,asynchronous:s.asynchronous,interleave:s.interleave}},[t("vc-instance-geometry",{attrs:{geometry:s.geometry}},[t("vc-geometry-rectangle",{attrs:{rectangle:s.rectangle}})],1)],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),t("hr")],1)])])}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v(" 组件用于加载贴地图元，通过它加载贴地或 3DTiles 的几何图形，支持的几何图形有："),t("code",{pre:!0},[s._v("CircleGeometry")]),s._v("、 "),t("code",{pre:!0},[s._v("CorridorGeometry")]),s._v("、 "),t("code",{pre:!0},[s._v("EllipseGeometry")]),s._v("、 "),t("code",{pre:!0},[s._v("PolygonGeometry")]),s._v("、"),t("code",{pre:!0},[s._v("RectangleGeometry")]),s._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":asynchronous")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"asynchronous"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interleave")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"interleave"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-rectangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rectangle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-rectangle")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/radarImage/1.png'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("interleave")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("asynchronous")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v(" = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v("\n        viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("setView")]),s._v("({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("(-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1432246.8223880068")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5761224.588247942")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3297281.1889481535")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.20312220367255")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.9937536846355606")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.002443376981836387")]),s._v("\n          }\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("MaterialAppearance")]),s._v("({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Material")]),s._v("({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fabric")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Image'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("image")]),s._v("\n              }\n            }\n          })\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("play")]),s._v("()\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("play")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" urls = [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/radarImage/1.png'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/radarImage/2.png'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/radarImage/3.png'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/radarImage/4.png'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/radarImage/5.png'")]),s._v("\n        ]\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" _this = "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("setInterval")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n          _this."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("material")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("uniforms")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("image")]),s._v(" = urls[i]\n          i++\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (i === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(") i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n        }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(")\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("geometryInstances")]),s._v(" "),t("td",[s._v("Object|Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元用于渲染的几何图形实例。")])]),s._v(" "),t("tr",[t("td",[s._v("appearance")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元的外观参数，如果具有 color 属性，默认为 PerInstanceColorAppearance 。")])]),s._v(" "),t("tr",[t("td",[s._v("show")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否显示。")])]),s._v(" "),t("tr",[t("td",[s._v("vertexCacheOptimize")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否优化几何体顶点着色器之前和之后的缓存。")])]),s._v(" "),t("tr",[t("td",[s._v("interleave")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否交错几何体顶点属性，true 时可以稍微改善渲染性能，但会增加加载时间。")])]),s._v(" "),t("tr",[t("td",[s._v("compressVertices")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否压缩几何体顶点，压缩可以以节省内存。")])]),s._v(" "),t("tr",[t("td",[s._v("releaseGeometryInstances")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否保留图元对几何体实例的输入，不保留可以节省内存。")])]),s._v(" "),t("tr",[t("td",[s._v("allowPicking")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元是否可以被 Scene.pick 拾取，关闭拾取可以节省内存。")])]),s._v(" "),t("tr",[t("td",[s._v("asynchronous")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元时异步加载还是同步加载。")])]),s._v(" "),t("tr",[t("td",[s._v("classificationType")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("2")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是贴地形还是贴 3DTiles，还是两者都贴。 "),t("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2")])])]),s._v(" "),t("tr",[t("td",[s._v("debugShowBoundingVolume")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否显示图元的边界球，用于调试使用。")])]),s._v(" "),t("tr",[t("td",[s._v("debugShowShadowVolume")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否绘制图元中每个几何图形的阴影体积，用于调试使用。")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("参考官方文档： "),a("strong",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html"}},[this._v("GroundPrimitive")])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),t("tr",[t("td",[s._v("mousedown")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标在该图元上按下时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mouseup")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标在该图元上弹起时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("click")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标单击该图元时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("clickout")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标单击该图元外部时触。")])]),s._v(" "),t("tr",[t("td",[s._v("dblclick")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标左键双击该图元时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mousemove")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标在该图元上移动时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mouseover")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标移动到该图元时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mouseout")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标移出该图元时触发。")])])])])}],!1,null,null,null);a.default=v.exports}}]);
//# sourceMappingURL=196.9ce6fdd38c2ed865bbca.js.map