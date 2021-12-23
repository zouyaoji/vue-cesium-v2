(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{xkSk:function(s,t,r){"use strict";r.r(t);var e=r("eVuF"),a=r.n(e),n={data:function(){return{description:"Hello Vue Cesium",cylinder1:{},position1:{lng:105,lat:40,height:2e5},outlineColor1:"DARK_GREEN",material1:{},cylinder2:{},position2:{lng:110,lat:40,height:2e5},material2:"RED"}},mounted:function(){a.a.all([this.$refs.entity1.createPromise,this.$refs.entity2.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.material1=t.Color.GREEN.withAlpha(.5)},subReady:function(s){s.Cesium;var t=s.viewer;t.zoomTo(t.entities)}}},v=r("JFUb"),_=Object(v.a)(n,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("html",[r("head"),r("body",[r("h1",[s._v("CylinderGraphics")]),s._v(" "),s._m(0),s._v(" "),r("h2",[s._v("Example")]),s._v(" "),r("h3",[s._v("Load CylinderGraphics with vc-graphics-cylinder")]),s._v(" "),r("h4",[s._v("Preview")]),s._v(" "),r("doc-preview",[[r("div",{staticClass:"viewer"},[r("vc-viewer",{on:{ready:s.ready}},[r("vc-entity",{ref:"entity1",attrs:{position:s.position1,description:s.description,cylinder:s.cylinder1},on:{"update:cylinder":function(t){s.cylinder1=t}}},[r("vc-graphics-cylinder",{attrs:{length:4e5,"top-radius":2e5,"bottom-radius":2e5,material:s.material1,outline:!0,"outline-color":s.outlineColor1}})],1),s._v(" "),r("vc-entity",{ref:"entity2",attrs:{position:s.position2,description:s.description,cylinder:s.cylinder2},on:{"update:cylinder":function(t){s.cylinder2=t}}},[r("vc-graphics-cylinder",{attrs:{length:4e5,"top-radius":0,"bottom-radius":2e5,material:s.material2}})],1)],1)],1)]],2),s._v(" "),r("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),r("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),r("hr"),s._v(" "),s._m(3),s._v(" "),r("h2",[s._v("Events")]),s._v(" "),s._m(4),s._v(" "),r("hr")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The vc-graphics-cylinder"),t("code",{pre:!0},[this._v("component is used to load cylinder, cone, or truncated cone. Need to be used as a subcomponent of vc-entity")]),this._v(".")])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cylinder.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder1"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":top-radius")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottom-radius")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline-color")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"outlineColor1"')]),s._v("\n        >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity2"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cylinder.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder2"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":top-radius")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottom-radius")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v("\n        >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),r("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cylinder1")]),s._v(": {},\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(" },\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor1")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'DARK_GREEN'")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cylinder2")]),s._v(": {},\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(" },\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'RED'")]),s._v("\n      }\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),r("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Promise")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("all")]),s._v("(["),r("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("entity1")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("entity2")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("])."),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        instances["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("zoomTo")]),s._v("(instances["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("entities")]),s._v(")\n      })\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),r("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        "),r("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("material1")]),s._v(" = "),r("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Color")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("GREEN")]),s._v("."),r("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("withAlpha")]),s._v("("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n      }\n    }\n  }\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("name")]),s._v(" "),r("th",[s._v("type")]),s._v(" "),r("th",[s._v("default")]),s._v(" "),r("th",[s._v("description")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("show")]),s._v(" "),r("td",[s._v("Boolean")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("true")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying the visibility of the cylinder.")])]),s._v(" "),r("tr",[r("td",[s._v("length")]),s._v(" "),r("td",[s._v("Array")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the length of the cylinder.")])]),s._v(" "),r("tr",[r("td",[s._v("topRadius")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the radius of the top of the cylinder.")])]),s._v(" "),r("tr",[r("td",[s._v("bottomRadius")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the radius of the bottom of the cylinder.")])]),s._v(" "),r("tr",[r("td",[s._v("heightReference")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying what the height from the entity position is relative to. "),r("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),r("tr",[r("td",[s._v("fill")]),s._v(" "),r("td",[s._v("Boolean")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("true")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying whether the cylinder is filled with the provided material.")])]),s._v(" "),r("tr",[r("td",[s._v("material")]),s._v(" "),r("td",[s._v("Object|String|Array")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the material used to fill the cylinder.")])]),s._v(" "),r("tr",[r("td",[s._v("outline")]),s._v(" "),r("td",[s._v("Boolean")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("false")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying whether the cylinder is outlined.")])]),s._v(" "),r("tr",[r("td",[s._v("outlineColor")]),s._v(" "),r("td",[s._v("Object|String|Array")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("'BLACK'")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the Color of the outline.")])]),s._v(" "),r("tr",[r("td",[s._v("outlineWidth")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("1.0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the width of the outline.")])]),s._v(" "),r("tr",[r("td",[s._v("numberOfVerticalLines")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("16")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline.")])]),s._v(" "),r("tr",[r("td",[s._v("slices")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("128")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" The number of edges around the perimeter of the cylinder.")])]),s._v(" "),r("tr",[r("td",[s._v("shadows")]),s._v(" "),r("td",[s._v("Number")]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("0")])]),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" An enum Property specifying whether the cylinder casts or receives shadows from each light source. "),r("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3")])])]),s._v(" "),r("tr",[r("td",[s._v("distanceDisplayCondition")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying at what distance from the camera that this cylinder will be displayed. "),r("strong",[s._v("structure: { near: number, far: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html"}},[this._v("CylinderGraphics")])])])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("name")]),s._v(" "),r("th",[s._v("parameter")]),s._v(" "),r("th",[s._v("description")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("ready")]),s._v(" "),r("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),r("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),r("tr",[r("td",[s._v("definitionChanged")]),s._v(" "),r("td"),s._v(" "),r("td",[s._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);t.default=_.exports},zakd:function(s,t,r){s.exports=r("xkSk")}}]);
//# sourceMappingURL=22.52b9e0975f1028eeccd9.js.map