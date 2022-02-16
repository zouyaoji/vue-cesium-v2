(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"9y0t":function(t,e,s){t.exports=s("eIgg")},eIgg:function(t,e,s){"use strict";s.r(e);var r=s("eVuF"),a=s.n(r),n={data:function(){return{description:"Hello Vue Cesium",model1:{},label1:{},position1:{lng:114,lat:40,height:1},uri1:"./statics/SampleData/models/GroundVehicle/GroundVehicle.glb"}},mounted:function(){a.a.all([this.$refs.label.createPromise,this.$refs.model.createPromise]).then((function(t){t[0].viewer.zoomTo(t[0].viewer.entities)}))},methods:{ready:function(t){t.Cesium,t.viewer}}},v=s("JFUb"),_=Object(v.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("html",[s("head"),s("body",[s("h1",[t._v("ModelGraphics")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),s("h4",[t._v("Preview")]),t._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:t.ready}},[s("vc-entity",{attrs:{position:t.position1,description:t.description,model:t.model1,label:t.label1},on:{"update:model":function(e){t.model1=e},"update:label":function(e){t.label1=e}}},[s("vc-graphics-label",{ref:"label",attrs:{text:"Hello Vue Cesium",font:"20px sans-serif"}}),t._v(" "),s("vc-graphics-model",{ref:"model",attrs:{uri:t.uri1}})],1)],1)],1)]],2),t._v(" "),s("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),s("h2",[t._v("Instance Properties")]),t._v(" "),t._m(3),t._v(" "),s("hr"),t._v(" "),t._m(4),t._v(" "),s("h2",[t._v("Events")]),t._v(" "),t._m(5),t._v(" "),s("hr")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",{pre:!0},[this._v("vc-graphics-model")]),this._v(" component is used to load a 3D model based on glTF. Need to be used as a subcomponent of "),e("code",{pre:!0},[this._v("vc-entity")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Load ModelGraphics with "),e("code",{pre:!0},[this._v("vc-graphics-model")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":model.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"model1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":label.sync")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"label1"')]),t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-label")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"label"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("text")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"Hello Vue Cesium"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("font")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"20px sans-serif"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-label")]),t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"model"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":uri")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"uri1"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-model")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("data")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("model1")]),t._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label1")]),t._v(": {},\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position1")]),t._v(": { "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("114.0")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40.0")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1.0")]),t._v(" },\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("uri1")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'./statics/SampleData/models/GroundVehicle/GroundVehicle.glb'")]),t._v("\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("mounted")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n      "),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Promise")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("all")]),t._v("(["),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("$refs")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("label")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("createPromise")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("$refs")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("model")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("createPromise")]),t._v("])."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("then")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("instances")]),t._v(") =>")]),t._v(" {\n        instances["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("]."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("viewer")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("zoomTo")]),t._v("(instances["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("]."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("viewer")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("entities")]),t._v(")\n      })\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("ready")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("cesiumInstance")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Cesium")]),t._v(", viewer } = cesiumInstance\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("show")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying the visibility of the model.")])]),t._v(" "),s("tr",[s("td",[t._v("uri")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A string or Resource Property specifying the URI of the glTF asset.")])]),t._v(" "),s("tr",[s("td",[t._v("scale")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1.0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying a uniform linear scale.")])]),t._v(" "),s("tr",[s("td",[t._v("minimumPixelSize")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the approximate minimum pixel size of the model regardless of zoom.")])]),t._v(" "),s("tr",[s("td",[t._v("maximumScale")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" The maximum scale size of a model. An upper limit for minimumPixelSize.")])]),t._v(" "),s("tr",[s("td",[t._v("incrementallyLoadTextures")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Determine if textures may continue to stream in after the model is loaded.")])]),t._v(" "),s("tr",[s("td",[t._v("runAnimations")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying if glTF animations specified in the model should be started.")])]),t._v(" "),s("tr",[s("td",[t._v("clampAnimations")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying if glTF animations should hold the last pose for time durations with no keyframes.")])]),t._v(" "),s("tr",[s("td",[t._v("shadows")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" An enum Property specifying whether the model casts or receives shadows from each light source. "),s("strong",[t._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3")])])]),t._v(" "),s("tr",[s("td",[t._v("heightReference")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying what the height is relative to. "),s("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),s("tr",[s("td",[t._v("silhouetteColor")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'RED'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the Color of the silhouette.")])]),t._v(" "),s("tr",[s("td",[t._v("silhouetteSize")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the size of the silhouette in pixels.")])]),t._v(" "),s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'WHITE'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the Color that blends with the model's rendered color.")])]),t._v(" "),s("tr",[s("td",[t._v("colorBlendMode")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" An enum Property specifying how the color blends with the model. "),s("strong",[t._v("HIGHLIGHT: 0, REPLACE: 1, MIX: 2")])])]),t._v(" "),s("tr",[s("td",[t._v("colorBlendAmount")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.5")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.")])]),t._v(" "),s("tr",[s("td",[t._v("imageBasedLightingFactor")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("{x: 1.0, y: 1.0}")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A property specifying the contribution from diffuse and specular image-based lighting.")])]),t._v(" "),s("tr",[s("td",[t._v("lightColor")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A property specifying the light color to use when shading the model. The default sun light color will be used when undefined.")])]),t._v(" "),s("tr",[s("td",[t._v("distanceDisplayCondition")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A NearFarScalar Property used to set pixelOffset based on distance from the camera.A Property specifying at what distance from the camera that this model will be displayed. "),s("strong",[t._v("structure: { near: number, far: number }")])])]),t._v(" "),s("tr",[s("td",[t._v("nodeTransformations")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" An object, where keys are names of nodes, and values are TranslationRotationScale Properties describing the transformation to apply to that node. The transformation is applied after the node's existing transformation as specified in the glTF, and does not replace the node's existing transformation. "),s("strong",[t._v("structure:{translation: {x: number, y: number, z: number}, rotation: {x: number, y: number, z: number, w: number}, scale:{x: number, y: number, z: number}}")])])]),t._v(" "),s("tr",[s("td",[t._v("articulations")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.")])]),t._v(" "),s("tr",[s("td",[t._v("clippingPlanes")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A property specifying the ClippingPlaneCollection used to selectively disable rendering the model.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Refer to the official document: "),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ModelGraphics.html"}},[this._v("ModelGraphics")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ready")]),t._v(" "),s("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),s("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),s("tr",[s("td",[t._v("definitionChanged")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);e.default=_.exports}}]);
//# sourceMappingURL=26.ec479337994397252359.js.map