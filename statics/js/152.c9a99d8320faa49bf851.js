(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{FI1z:function(s,t,e){"use strict";e.r(t);var r=e("eVuF"),a=e.n(r),v={data:function(){return{appearance:null,attributes:null,geometry:null,center:{lng:102,lat:38},centerOutline:{lng:110,lat:38}}},mounted:function(){a.a.all([this.$refs.circle.createPromise,this.$refs.circleOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var e=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,t.vm.$parent.modelMatrix):e.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,e=s.viewer;s.cesiumObject;this.viewer=e;var r=t.ColorGeometryInstanceAttribute,a=t.PerInstanceColorAppearance;this.attributes={color:new r(Math.random(),Math.random(),Math.random(),.5)},this.appearance=new a({flat:!0})},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},_=e("JFUb"),n=Object(_.a)(v,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("html",[e("head"),e("body",[e("h1",[s._v("CircleGeometry、CircleOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("示例")]),s._v(" "),e("h3",[s._v("加载圆形")]),s._v(" "),e("h4",[s._v("预览")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready,left_click:s.LEFT_CLICK}},[e("vc-primitive-ground",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes},on:{"update:geometry":function(t){s.geometry=t}}},[e("vc-geometry-circle",{ref:"circle",attrs:{center:s.center,radius:25e4}})],1)],1),s._v(" "),e("vc-primitive",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{attributes:s.attributes}},[e("vc-geometry-outline-circle",{ref:"circleOutline",attrs:{center:s.centerOutline,radius:25e4}})],1)],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),e("hr"),s._v(" "),s._m(6),s._v(" "),e("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),e("hr")],1)])])}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",{pre:!0},[s._v("vc-geometry-circle")]),s._v(" 组件用于加载圆形。")]),s._v(" "),e("li",[e("code",{pre:!0},[s._v("vc-geometry-outline-circle")]),s._v(" 组件用于加载圆形轮廓。")]),s._v(" "),e("li",[s._v("需要作为 "),e("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),e("code",{pre:!0},[s._v("vc-primitive")]),s._v(" 或 "),e("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v("。")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-circle")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circle"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":center")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"250000"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-circle")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-circle")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"circleOutline"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":center")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"centerOutline"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"250000"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-circle")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("centerOutline")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(" }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Promise")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("all")]),s._v("(["),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("circle")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("circleOutline")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("])."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reduce")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("constructor")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("createGeometry")]),s._v("(cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v(")\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v("\n            ? "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("transform")]),s._v("(geometry."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v(", cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(")\n            : geometry."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("union")]),s._v("(prev, boundingSphere)\n        }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("flyToBoundingSphere")]),s._v("(boundingSphereUnion)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v(" = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v(" } = "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("attributes")]),s._v(" = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v("({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n      },\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("LEFT_CLICK")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("movement")]),s._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("pick")]),s._v("(movement."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(feature)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-circle")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("center")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定圆形中心点。 "),e("strong",[s._v("结构：{ lng: number, lat: number, height: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("radius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定圆形半径。")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形参考椭球体。")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形离地表的高度（米）。")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.02")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形圆弧每个点的角间距（弧度）。")])]),s._v(" "),e("tr",[e("td",[s._v("vertexFormat")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定要计算的顶点属性。")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形拉伸的高度（米）。")])]),s._v(" "),e("tr",[e("td",[s._v("stRotation")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形纹理的旋转坐标（以弧度为单位）。 正旋转为逆时针方向。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-circle")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("center")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定圆形中心点。 "),e("strong",[s._v("结构：{ lng: number, lat: number, height: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("radius")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" 指定圆形半径。")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形参考椭球体。")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形离地表的高度（米）。")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.02")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形圆弧每个点的角间距（弧度）。")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形拉伸的高度（米）。")])]),s._v(" "),e("tr",[e("td",[s._v("numberOfVerticalLines")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("16")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定圆形在拉伸时顶部与底部之间绘制的线数。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CircleGeometry.html"}},[this._v("CircleGeometry")])]),this._v("、"),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CircleOutlineGeometry.html"}},[this._v("CircleOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("事件名")]),s._v(" "),e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=n.exports},POJ7:function(s,t,e){s.exports=e("FI1z")}}]);
//# sourceMappingURL=152.c9a99d8320faa49bf851.js.map