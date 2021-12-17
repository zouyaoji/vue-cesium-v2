(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{suyU:function(e,s,t){"use strict";t.r(s);var a=[[-.066550267689383,-.022088055746048,.078835009246127],[.038364097478591,.045714300098753,.063498904606215],[-.01436536331281,-.026490613715151,-.05018940406602],[-.05153278691789,-.050777795729986,-.056449044453032],[.043454596136534,.046672590104157,.05753010764661],[-.00164046627411,.001286638231156,.007228908989616],[-.042260855700641,-.046394335094707,-.057562936365585],[-.004953478914091,-.000479681664876,.008508150106928]],r="./statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx",n={data:function(){return{url:"./statics/SampleData/models/Pawns/Pawns.glb",modelMatrix:{},proceduralEnvironmentLighting:!1,luminanceAtZenith:.2,specularEnvironmentMaps:r,sphericalHarmonicCoefficients:a}},watch:{proceduralEnvironmentLighting:function(e){e?(this.specularEnvironmentMaps=void 0,this.sphericalHarmonicCoefficients=void 0):(this.specularEnvironmentMaps=r,this.sphericalHarmonicCoefficients=a)}},methods:{ready:function(e){var s=e.Cesium,t=e.viewer;this.viewer=t,this.modelMatrix=s.Transforms.eastNorthUpToFixedFrame(s.Cartesian3.fromDegrees(105,38,1e4))},readyPromise:function(e){var s=Cesium.BoundingSphere.transform(e.boundingSphere,e.modelMatrix);this.viewer.scene.camera.flyToBoundingSphere(s)},clicked:function(e){console.log(e)}}},v=t("JFUb"),_=Object(v.a)(n,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("html",[t("head"),t("body",[t("h1",[e._v("Model")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),t("h4",[e._v("Preview")]),e._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:e.ready}},[t("vc-primitive-model",{attrs:{url:e.url,modelmatrix:e.modelMatrix,scale:1e4,minimumpixelsize:128,maximumscale:2e5,luminanceatzenith:e.luminanceAtZenith,specularenvironmentmaps:e.specularEnvironmentMaps,sphericalharmoniccoefficients:e.sphericalHarmonicCoefficients},on:{readypromise:e.readyPromise,click:e.clicked}}),e._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[e._v("Luminance at Zenith")]),e._v(" "),t("vue-slider",{attrs:{min:0,max:2,interval:.01},model:{value:e.luminanceAtZenith,callback:function(s){e.luminanceAtZenith=s},expression:"luminanceAtZenith"}}),e._v(" "),t("md-checkbox",{staticClass:"md-primary",model:{value:e.proceduralEnvironmentLighting,callback:function(s){e.proceduralEnvironmentLighting=s},expression:"proceduralEnvironmentLighting"}},[e._v("Use procedural environment lighting")])],1)],1)],1)]],2),e._v(" "),t("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),t("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),t("hr"),e._v(" "),e._m(4),e._v(" "),t("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),t("hr")],1)])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-primitive-model")]),this._v(" component is used to load a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL.")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",[this._v("Load a model with "),s("code",{pre:!0},[this._v("vc-primitive-model")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-model")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":url")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"url"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@readyPromise")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"readyPromise"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":modelMatrix")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"modelMatrix"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":scale")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"10000"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":minimumPixelSize")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"128"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":maximumScale")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"200000"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@click")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"clicked"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":luminanceAtZenith")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"luminanceAtZenith"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":specularEnvironmentMaps")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"specularEnvironmentMaps"')]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":sphericalHarmonicCoefficients")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"sphericalHarmonicCoefficients"')]),e._v("\n      >")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-model")]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"demo-tool"')]),e._v(">")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("Luminance at Zenith"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("span")]),e._v(">")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"luminanceAtZenith"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":min")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":max")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"2"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":interval")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"0.01"')]),e._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vue-slider")]),e._v(">")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-checkbox")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("v-model")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"proceduralEnvironmentLighting"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"md-primary"')]),e._v(">")]),e._v("Use procedural environment lighting"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("md-checkbox")]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" coefficients = [\n    [-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.066550267689383")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.022088055746048")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.078835009246127")]),e._v("],\n    ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.038364097478591")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.045714300098753")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.063498904606215")]),e._v("],\n    [-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.01436536331281")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.026490613715151")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.05018940406602")]),e._v("],\n    [-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.05153278691789")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.050777795729986")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.056449044453032")]),e._v("],\n    ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.043454596136534")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.046672590104157")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.05753010764661")]),e._v("],\n    [-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.00164046627411")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.001286638231156")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.007228908989616")]),e._v("],\n    [-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.042260855700641")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.046394335094707")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.057562936365585")]),e._v("],\n    [-"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.004953478914091")]),e._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.000479681664876")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.008508150106928")]),e._v("]\n  ]\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" environmentMapURL = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'./statics/SampleData/EnvironmentMap/kiara_6_afternoon_2k_ibl.ktx'")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("data")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),e._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("url")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'./statics/SampleData/models/Pawns/Pawns.glb'")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("modelMatrix")]),e._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("proceduralEnvironmentLighting")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("luminanceAtZenith")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.2")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("specularEnvironmentMaps")]),e._v(": environmentMapURL,\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("sphericalHarmonicCoefficients")]),e._v(": coefficients\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("watch")]),e._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("proceduralEnvironmentLighting")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("val")]),e._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("if")]),e._v(" (val) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("specularEnvironmentMaps")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("undefined")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("sphericalHarmonicCoefficients")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("undefined")]),e._v("\n        } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("else")]),e._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("specularEnvironmentMaps")]),e._v(" = environmentMapURL\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("sphericalHarmonicCoefficients")]),e._v(" = coefficients\n        }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("ready")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("cesiumInstance")]),e._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[e._v("Cesium")]),e._v(", viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("viewer")]),e._v(" = viewer\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("modelMatrix")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[e._v("Cesium")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("Transforms")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("eastNorthUpToFixedFrame")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[e._v("Cesium")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("Cartesian3")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("fromDegrees")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("105")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("38")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("10000")]),e._v("))\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("readyPromise")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("model")]),e._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" boundingSphere = "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[e._v("Cesium")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("BoundingSphere")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("transform")]),e._v("(model."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("boundingSphere")]),e._v(", model."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("modelMatrix")]),e._v(")\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("this")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("viewer")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("scene")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[e._v("camera")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("flyToBoundingSphere")]),e._v("(boundingSphere)\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("clicked")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("e")]),e._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[e._v("console")]),e._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[e._v("log")]),e._v("(e)\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),e._v(" "),t("th",[e._v("type")]),e._v(" "),t("th",[e._v("default")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("url")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("required")]),e._v(" The url to the .gltf file.")])]),e._v(" "),t("tr",[t("td",[e._v("basePath")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The base path that paths in the glTF JSON are relative to.")])]),e._v(" "),t("tr",[t("td",[e._v("show")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the model primitive will be shown.")])]),e._v(" "),t("tr",[t("td",[e._v("modelMatrix")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The 4x4 transformation matrix that transforms the model from model to world coordinates.")])]),e._v(" "),t("tr",[t("td",[e._v("scale")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("1.0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" A uniform scale applied to this model.")])]),e._v(" "),t("tr",[t("td",[e._v("minimumPixelSize")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0.0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The approximate minimum pixel size of the model regardless of zoom.")])]),e._v(" "),t("tr",[t("td",[e._v("maximumScale")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The maximum scale for the model.")])]),e._v(" "),t("tr",[t("td",[e._v("id")]),e._v(" "),t("td",[e._v("*")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" A user-defined object to return when the model is picked with Scene#pick.")])]),e._v(" "),t("tr",[t("td",[e._v("allowPicking")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" When true, each glTF mesh and primitive is pickable with Scene#pick.")])]),e._v(" "),t("tr",[t("td",[e._v("incrementallyLoadTextures")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determine if textures may continue to stream in after the model is loaded.")])]),e._v(" "),t("tr",[t("td",[e._v("asynchronous")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded.")])]),e._v(" "),t("tr",[t("td",[e._v("clampAnimations")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the model's animations should hold a pose over frames where no keyframes are specified.")])]),e._v(" "),t("tr",[t("td",[e._v("shadows")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("1")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines whether the model casts or receives shadows from each light source. "),t("strong",[e._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4")])])]),e._v(" "),t("tr",[t("td",[e._v("debugShowBoundingVolume")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Draws the bounding sphere for each DrawCommand in the model.")])]),e._v(" "),t("tr",[t("td",[e._v("debugWireframe")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Draws the model in wireframe.")])]),e._v(" "),t("tr",[t("td",[e._v("heightReference")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines how the model is drawn relative to terrain. "),t("strong",[e._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),e._v(" "),t("tr",[t("td",[e._v("scene")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Must be passed in for models that use the height reference property.")])]),e._v(" "),t("tr",[t("td",[e._v("distanceDisplayCondition")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The condition specifying at what distance from the camera that this model will be displayed. "),t("strong",[e._v("Structure: { near: number, far: number }")])])]),e._v(" "),t("tr",[t("td",[e._v("color")]),e._v(" "),t("td",[e._v("Object|String|Array")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("'WHITE'")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" A color that blends with the model's rendered color.")])]),e._v(" "),t("tr",[t("td",[e._v("colorBlendMode")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Defines how the color blends with the model. "),t("strong",[e._v("HIGHLIGHT: 0, REPLACE: 1, MIX: 2")])])]),e._v(" "),t("tr",[t("td",[e._v("colorBlendAmount")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0.5")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two.")])]),e._v(" "),t("tr",[t("td",[e._v("silhouetteColor")]),e._v(" "),t("td",[e._v("Object|String|Array")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("'RED'")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts.")])]),e._v(" "),t("tr",[t("td",[e._v("silhouetteSize")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0.0")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The size of the silhouette in pixels.")])]),e._v(" "),t("tr",[t("td",[e._v("clippingPlanes")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The ClippingPlaneCollection used to selectively disable rendering the model.")])]),e._v(" "),t("tr",[t("td",[e._v("dequantizeInShader")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models.")])]),e._v(" "),t("tr",[t("td",[e._v("imageBasedLightingFactor")]),e._v(" "),t("td",[e._v("Array|Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Scales diffuse and specular image-based lighting from the earth, sky, atmosphere and star skybox.")])]),e._v(" "),t("tr",[t("td",[e._v("lightColor")]),e._v(" "),t("td",[e._v("Array|Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The light color when shading the model. When undefined the scene's light color is used instead.")])]),e._v(" "),t("tr",[t("td",[e._v("luminanceAtZenith")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("0.2")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The sun's luminance at the zenith in kilo candela per meter squared to use for this model's procedural environment map.")])]),e._v(" "),t("tr",[t("td",[e._v("sphericalHarmonicCoefficients")]),e._v(" "),t("td",[e._v("Array|Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The third order spherical harmonic coefficients used for the diffuse color of image-based lighting.")])]),e._v(" "),t("tr",[t("td",[e._v("specularEnvironmentMaps")]),e._v(" "),t("td",[e._v("String")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" A URL to a KTX file that contains a cube map of the specular lighting and the convoluted specular mipmaps.")])]),e._v(" "),t("tr",[t("td",[e._v("credit")]),e._v(" "),t("td",[e._v("Object|String")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" A credit for the model, which is displayed on the canvas.")])]),e._v(" "),t("tr",[t("td",[e._v("backFaceCulling")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Whether to cull back-facing geometry. When true, back face culling is determined by the material's doubleSided property; when false, back face culling is disabled. Back faces are not culled if Model#color is translucent or Model#silhouetteSize is greater than 0.0.")])])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Model.html"}},[this._v("Model")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),e._v(" "),t("th",[e._v("parameter")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("ready")]),e._v(" "),t("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),t("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),t("tr",[t("td",[e._v("readyPromise")]),e._v(" "),t("td",[e._v("model")]),e._v(" "),t("td",[e._v("Triggers when the model is ready for use.")])]),e._v(" "),t("tr",[t("td",[e._v("mousedown")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the mouse is pressed on this primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("mouseup")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the mouse bounces on the primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("click")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the mouse clicks on the primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("clickout")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Touch when the mouse clicks outside the primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("dblclick")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the left mouse button double-clicks the primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("mousemove")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the mouse moves on this primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("mouseover")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the mouse moves to this primitive.")])]),e._v(" "),t("tr",[t("td",[e._v("mouseout")]),e._v(" "),t("td",[e._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),e._v(" "),t("td",[e._v("Triggered when the mouse moves out of the primitive.")])])])])}],!1,null,null,null);s.default=_.exports},tUP5:function(e,s,t){e.exports=t("suyU")}}]);
//# sourceMappingURL=94.427d525d80d561a9b8c5.js.map