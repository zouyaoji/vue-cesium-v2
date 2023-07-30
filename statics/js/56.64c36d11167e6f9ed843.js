(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"75V0":function(s,t,a){s.exports=a("FW8M")},FW8M:function(s,t,a){"use strict";a.r(t);var e=a("eVuF"),r=a.n(e),n={data:function(){return{appearance:null,geometry:null,vertexFormat:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:1e5,polygonHierarchyOutline:[{lng:107.1,lat:29.5},{lng:111.2,lat:29.5},{lng:111.2,lat:33.5},{lng:113.2,lat:35.5},{lng:107.1,lat:33.5}],appearanceOutline:null,attributes:null}},mounted:function(){r.a.all([this.$refs.polygon.createPromise,this.$refs.polygonOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var a=t.cesiumObject.constructor.createGeometry(t.cesiumObject),e=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(a.boundingSphere,t.vm.$parent.modelMatrix):a.boundingSphere;return null===s?e:Cesium.BoundingSphere.union(s,e)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,a=s.viewer;this.viewer=a;var e=t.PerInstanceColorAppearance,r=t.ColorGeometryInstanceAttribute,n=t.EllipsoidSurfaceAppearance,l=t.Material;this.appearanceOutline=new e({flat:!0}),this.attributes={color:new r(Math.random(),Math.random(),Math.random(),.5)},this.vertexFormat=n.VERTEX_FORMAT,this.appearance=new n({material:new l({fabric:{type:"Water",uniforms:{normalMap:"./statics/SampleData/images/waterNormals.jpg",frequency:1e3,animationSpeed:.05,amplitude:10}}})})}}},l=a("JFUb"),v=Object(l.a)(n,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("PolygonGeometry、PolygonOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),a("h3",[s._v("Load PolygonGeometry")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-primitive",{attrs:{appearance:s.appearance}},[a("vc-instance-geometry",[a("vc-geometry-polygon",{ref:"polygon",attrs:{"vertex-format":s.vertexFormat,"polygon-hierarchy":s.polygonHierarchy,height:s.height,"extruded-height":30}})],1)],1),s._v(" "),a("vc-primitive",{attrs:{appearance:s.appearanceOutline}},[a("vc-instance-geometry",{attrs:{attributes:s.attributes}},[a("vc-geometry-outline-polygon",{ref:"polygonOutline",attrs:{"polygon-hierarchy":s.polygonHierarchyOutline}})],1)],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),a("hr"),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(9),s._v(" "),a("hr")],1)])])}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("The "),a("code",{pre:!0},[s._v("vc-geometry-polygon")]),s._v(" component is used to load a geometry that describes a polygon on the ellipsoid.")]),s._v(" "),a("li",[s._v("The "),a("code",{pre:!0},[s._v("vc-geometry-outline-polygon")]),s._v(" component is used to load a geometry that describes the outline of a polygon on the ellipsoid.")]),s._v(" "),a("li",[s._v("It needs to be used as a sub-component of "),a("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(", can be mounted on "),a("code",{pre:!0},[s._v("vc-primitive")]),s._v(" or "),a("code",{pre:!0},[s._v("vc-primitive-ground")]),s._v(".")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygon"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertex-format")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygon-hierarchy")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchy"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"height"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":extruded-height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"30"')]),s._v("\n          >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearanceOutline"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-polygon")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonOutline"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygon-hierarchy")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchyOutline"')]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-polygon")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchyOutline")]),s._v(": [\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("111.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("111.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("113.2")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107.1")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearanceOutline")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Promise")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("all")]),s._v("(["),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("polygon")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("polygonOutline")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("])."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reduce")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("constructor")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("createGeometry")]),s._v("(cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumObject")]),s._v(")\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v("\n            ? "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("transform")]),s._v("(geometry."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v(", cur."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vm")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$parent")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(")\n            : geometry."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("boundingSphere")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("BoundingSphere")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("union")]),s._v("(prev, boundingSphere)\n        }, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("flyToBoundingSphere")]),s._v("(boundingSphereUnion)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v(" = viewer\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("EllipsoidSurfaceAppearance")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Material")]),s._v(" } = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearanceOutline")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("PerInstanceColorAppearance")]),s._v("({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("attributes")]),s._v(" = {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("ColorGeometryInstanceAttribute")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("(), "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vertexFormat")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("EllipsoidSurfaceAppearance")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("VERTEX_FORMAT")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("appearance")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("EllipsoidSurfaceAppearance")]),s._v("({\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Material")]),s._v("({\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fabric")]),s._v(": {\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Water'")]),s._v(",\n              "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": {\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("normalMap")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/images/waterNormals.jpg'")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("frequency")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000.0")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animationSpeed")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.05")]),s._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("amplitude")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10.0")]),s._v("\n              }\n            }\n          })\n        })\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-polygon")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("polygonHierarchy")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" A polygon hierarchy that can include holes.")])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the polygon and the ellipsoid surface.")])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the polygon's extruded face and the ellipsoid surface.")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The vertex attributes to be computed.")])]),s._v(" "),a("tr",[a("td",[s._v("stRotation")]),s._v(" "),a("td",[s._v("Number|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid to be used as a reference.")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.")])]),s._v(" "),a("tr",[a("td",[s._v("perPositionHeight")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Use the height of options.positions for each position instead of using options.height to determine the height.")])]),s._v(" "),a("tr",[a("td",[s._v("closeTop")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" When false, leaves off the top of an extruded polygon open.")])]),s._v(" "),a("tr",[a("td",[s._v("closeBottom")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" When false, leaves off the bottom of an extruded polygon open.")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. "),a("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-polygon")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("polygonHierarchy")]),s._v(" "),a("td",[s._v("Object|Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" A polygon hierarchy that can include holes.")])]),s._v(" "),a("tr",[a("td",[s._v("height")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the polygon and the ellipsoid surface.")])]),s._v(" "),a("tr",[a("td",[s._v("extrudedHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The distance in meters between the polygon's extruded face and the ellipsoid surface.")])]),s._v(" "),a("tr",[a("td",[s._v("vertexFormat")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The vertex attributes to be computed.")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid to be used as a reference.")])]),s._v(" "),a("tr",[a("td",[s._v("granularity")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.")])]),s._v(" "),a("tr",[a("td",[s._v("perPositionHeight")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Use the height of options.positions for each position instead of using options.height to determine the height.")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. "),a("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("structure of hierarchy")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Array")]),s._v("\n[{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Object")]),s._v("\n{\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n    {\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}],\n      "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number},...,{"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": number, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": number}]\n        "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// ...")]),s._v("\n      ]\n    }\n  ]\n}\n\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonGeometry.html"}},[this._v("PolygonGeometry")])]),this._v(", "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PolygonOutlineGeometry.html"}},[this._v("PolygonOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=v.exports}}]);
//# sourceMappingURL=56.64c36d11167e6f9ed843.js.map