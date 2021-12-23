(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{FQuy:function(s,t,e){"use strict";e.r(t);var r=e("eVuF"),a=e.n(r),n={data:function(){return{appearance:null,geometry:null,attributes:null,center:{lng:102,lat:38}}},mounted:function(){a.a.all([this.$refs.ellipse.createPromise,this.$refs.ellipseOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var e=t.cesiumObject.constructor.createGeometry(t.cesiumObject),r=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(e.boundingSphere,t.vm.$parent.modelMatrix):e.boundingSphere;return null===s?r:Cesium.BoundingSphere.union(s,r)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,e=s.viewer;this.viewer=e;var r=t.PerInstanceColorAppearance,a=t.ColorGeometryInstanceAttribute;this.appearance=new r({flat:!0}),this.attributes={color:new a(Math.random(),Math.random(),Math.random(),.5)}},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},v=e("JFUb"),l=Object(v.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("html",[e("head"),e("body",[e("h1",[s._v("EllipseGeometry, EllipseOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),e("h3",[s._v("Load EllipseGeometry")]),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready,left_click:s.LEFT_CLICK}},[e("vc-primitive-ground",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes},on:{"update:geometry":function(t){s.geometry=t}}},[e("vc-geometry-ellipse",{ref:"ellipse",attrs:{center:s.center,"semi-minor-axis":2e5,"semi-major-axis":3e5,height:5e4}})],1)],1),s._v(" "),e("vc-primitive",{attrs:{appearance:s.appearance}},[e("vc-instance-geometry",{attrs:{attributes:s.attributes}},[e("vc-geometry-outline-ellipse",{ref:"ellipseOutline",attrs:{center:s.center,"semi-minor-axis":2e5,"semi-major-axis":3e5,height:1e5}})],1)],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),e("h2",[s._v("Events")]),s._v(" "),s._m(7),s._v(" "),e("hr")],1)])])}),[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[s._v("The "),e("code",{pre:!0},[s._v("vc-geometry-ellipse")]),s._v(" component is used to load a geometry that describes a ellipse.")]),s._v(" "),e("li",[s._v("The "),e("code",{pre:!0},[s._v("vc-geometry-outline-ellipse")]),s._v(" component is used to load a geometry that describes a ellipse outline.")]),s._v(" "),e("li",[s._v("It needs to be used as a sub-component of "),e("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(", can be mounted on "),e("code",{pre:!0},[s._v("vc-primitive")]),s._v(" or "),e("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v(".")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipse")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipse"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":center")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-minor-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-major-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"50000"')]),s._v("\n          >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-ellipse")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-ground")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-ellipse")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipseOutline"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":center")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-minor-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semi-major-axis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"100000"')]),s._v("\n          >")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-ellipse")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("center")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(" }\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Promise")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("all")]),s._v("(["),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("ellipse")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("ellipseOutline")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("])."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reduce")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("constructor")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("createGeometry")]),s._v("(cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v(")\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v("\n            ? "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("transform")]),s._v("(geometry."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v(", cur."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(")\n            : geometry."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("union")]),s._v("(prev, boundingSphere)\n        }, "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("flyToBoundingSphere")]),s._v("(boundingSphereUnion)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v(" = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v(" } = "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v("({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("attributes")]),s._v(" = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n      },\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("LEFT_CLICK")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("movement")]),s._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("pick")]),s._v("(movement."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(feature)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-ellipse")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("center")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The ellipse's center point in the fixed frame. "),e("strong",[s._v("Structure: { lng: number, lat: number, height: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("semiMajorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The length of the ellipse's semi-major axis in meters.")])]),s._v(" "),e("tr",[e("td",[s._v("semiMinorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The length of the ellipse's semi-minor axis in meters.")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid the ellipse will be on.")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the ellipse and the ellipsoid surface.")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the ellipse's extruded face and the ellipsoid surface.")])]),s._v(" "),e("tr",[e("td",[s._v("rotation")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The angle of rotation counter-clockwise from north.")])]),s._v(" "),e("tr",[e("td",[s._v("stRotation")]),s._v(" "),e("td",[s._v("Number|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The rotation of the texture coordinates counter-clockwise from north.")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The angular distance between points on the ellipse in radians.")])]),s._v(" "),e("tr",[e("td",[s._v("vertexFormat")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The vertex attributes to be computed.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-ellipse")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("center")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The ellipse's center point in the fixed frame. "),e("strong",[s._v("Structure: { lng: number, lat: number, height: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("semiMajorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The length of the ellipse's semi-major axis in meters.")])]),s._v(" "),e("tr",[e("td",[s._v("semiMinorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("required")]),s._v(" The length of the ellipse's semi-minor axis in meters.")])]),s._v(" "),e("tr",[e("td",[s._v("ellipsoid")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid the ellipse will be on.")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the ellipse and the ellipsoid surface.")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the ellipse's extruded face and the ellipsoid surface.")])]),s._v(" "),e("tr",[e("td",[s._v("rotation")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The angle of rotation counter-clockwise from north.")])]),s._v(" "),e("tr",[e("td",[s._v("stRotation")]),s._v(" "),e("td",[s._v("Number|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The rotation of the texture coordinates counter-clockwise from north.")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The angular distance between points on the ellipse in radians.")])]),s._v(" "),e("tr",[e("td",[s._v("numberOfVerticalLines")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("16")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Number of lines to draw between the top and bottom surface of an extruded ellipse.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseGeometry.html"}},[this._v("EllipseGeometry")])]),this._v(", "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseOutlineGeometry.html"}},[this._v("EllipseOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=l.exports},clVv:function(s,t,e){s.exports=e("FQuy")}}]);
//# sourceMappingURL=51.87450ed907bf8adf231d.js.map