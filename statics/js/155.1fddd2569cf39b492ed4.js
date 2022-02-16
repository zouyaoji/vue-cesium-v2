(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{JaGO:function(s,t,e){s.exports=e("lim3")},lim3:function(s,t,e){"use strict";e.r(t);var r=e("eVuF"),a=e.n(r),v={data:function(){return{appearance:null,geometry:null,attributes:null,center:{lng:102,lat:38}}},mounted:function(){a.a.all([this.$refs.ellipse.createPromise,this.$refs.ellipseOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var e=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,t.vm.$parent.modelMatrix):e.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,e=s.viewer;this.viewer=e;var r=t.PerInstanceColorAppearance,a=t.ColorGeometryInstanceAttribute;this.appearance=new r({flat:!0}),this.attributes={color:new a(Math.random(),Math.random(),Math.random(),.5)}},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},_=e("JFUb"),l=Object(_.a)(v,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("html",[e("head"),e("body",[e("h1",[s._v("EllipseGeometry、 EllipseOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("示例")]),s._v(" "),e("h3",[s._v("加载椭圆")]),s._v(" "),e("h4",[s._v("预览")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready,left_click:s.LEFT_CLICK}},[e("vc-primitive-ground",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes},on:{"update:geometry":function(t){s.geometry=t}}},[e("vc-geometry-ellipse",{ref:"ellipse",attrs:{center:s.center,"semi-minor-axis":2e5,"semi-major-axis":3e5,height:5e4}})],1)],1),s._v(" "),e("vc-primitive",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{attributes:s.attributes}},[e("vc-geometry-outline-ellipse",{ref:"ellipseOutline",attrs:{center:s.center,"semi-minor-axis":2e5,"semi-major-axis":3e5,height:1e5}})],1)],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),e("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),e("hr")],1)])])}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",{pre:!0},[s._v("vc-geometry-ellipse")]),s._v(" 组件用于加载椭圆。")]),s._v(" "),e("li",[e("code",{pre:!0},[s._v("vc-geometry-outline-ellipse")]),s._v(" 组件用于加载椭圆轮廓。")]),s._v(" "),e("li",[s._v("需要作为 "),e("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),e("code",{pre:!0},[s._v("vc-primitive")]),s._v(" 或 "),e("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v("。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipse")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipse"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":center")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-minor-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-major-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50000"')]),s._v("\n          >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipse")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-ellipse")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipseOutline"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":center")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-minor-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-major-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100000"')]),s._v("\n          >")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-ellipse")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(" }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Promise")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("all")]),s._v("(["),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("ellipse")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("ellipseOutline")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("])."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reduce")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("constructor")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("createGeometry")]),s._v("(cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v(")\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v("\n            ? "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("transform")]),s._v("(geometry."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v(", cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(")\n            : geometry."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("union")]),s._v("(prev, boundingSphere)\n        }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("flyToBoundingSphere")]),s._v("(boundingSphereUnion)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v(" = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v(" } = "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v("({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("attributes")]),s._v(" = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n      },\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("LEFT_CLICK")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("movement")]),s._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("pick")]),s._v("(movement."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(feature)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-ellipse")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("center")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定椭圆的中心位置。 "),e("strong",[s._v("结构: { lng: number, lat: number, height: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("semiMajorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定椭圆的长半轴长度，单位是米。")])]),s._v(" "),e("tr",[e("td",[s._v("semiMinorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定椭圆的短半轴长度，单位是米。")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆的参考椭球体。")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆离地表的高度。")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆拉伸高度。")])]),s._v(" "),e("tr",[e("td",[s._v("rotation")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆以正北逆时针方向旋转的角度。")])]),s._v(" "),e("tr",[e("td",[s._v("stRotation")]),s._v(" "),e("td",[s._v("Number|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆纹理以正北逆时针方向旋转的角度。")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆上点之间的角距离（弧度）。")])]),s._v(" "),e("tr",[e("td",[s._v("vertexFormat")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定顶点属性渲染方式。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-ellipse")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("center")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定椭圆的中心位置。 "),e("strong",[s._v("结构: { lng: number, lat: number, height: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("semiMajorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定椭圆的长半轴长度，单位是米。")])]),s._v(" "),e("tr",[e("td",[s._v("semiMinorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定椭圆的短半轴长度，单位是米。")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆的参考椭球体。")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆离地表的高度。")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆拉伸高度。")])]),s._v(" "),e("tr",[e("td",[s._v("rotation")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆以正北逆时针方向旋转的角度。")])]),s._v(" "),e("tr",[e("td",[s._v("stRotation")]),s._v(" "),e("td",[s._v("Number|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆纹理以正北逆时针方向旋转的角度。")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定椭圆上点之间的角距离（弧度）。")])]),s._v(" "),e("tr",[e("td",[s._v("numberOfVerticalLines")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("16")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定拉伸的椭圆连接顶部与底部的线条数量。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html"}},[this._v("EllipseGeometry")])]),this._v("、 "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html"}},[this._v("EllipseOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("事件名")]),s._v(" "),e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=155.1fddd2569cf39b492ed4.js.map