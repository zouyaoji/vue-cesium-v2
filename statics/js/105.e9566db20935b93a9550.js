(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{KKDk:function(s,t,a){s.exports=a("UR68")},UR68:function(s,t,a){"use strict";a.r(t);var e={data:function(){return{show:!0,billboards1:[],billboards2:[],url:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",modelMatrix:{}}},methods:{ready:function(s){for(var t=s.Cesium,a=(s.viewer,[]),e=[],r=0;r<100;r++){var l={};l.position={lng:40*Math.random()+85,lat:30*Math.random()+21},l.image="https://zouyaoji.top/vue-cesium/favicon.png",l.scale=.1,a.push(l);var v={};v.position={lng:40*Math.random()+85,lat:30*Math.random()+21},v.image="https://zouyaoji.top/vue-cesium/favicon.png",v.scale=.15,e.push(v)}this.billboards1=a,this.billboards2=e,this.modelMatrix=t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(105,38,1e4))},clicked:function(s){console.log(s)}}},r=a("JFUb"),l=Object(r.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("PrimitiveCollection")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-collection-primitive",{attrs:{show:s.show},on:{click:s.clicked}},[a("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards1}}),s._v(" "),a("vc-collection-primitive",[a("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards2}})],1)],1),s._v(" "),a("vc-collection-primitive",{on:{click:s.clicked}},[a("vc-primitive-model",{attrs:{url:s.url,modelmatrix:s.modelMatrix,scale:1e4,minimumpixelsize:128,maximumscale:2e5}})],1)],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[s._v(s._s(s.show?"Hide":"Show"))]),s._v(" "),a("md-switch",{model:{value:s.show,callback:function(t){s.show=t},expression:"show"}})],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),s._m(4),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),a("hr")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-collection-primitive")]),this._v(" component is used to load a collection of primitives.This is most often used with Scene#primitives, but PrimitiveCollection is also a primitive itself so collections can be added to collections forming a hierarchy.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[this._v("Load PrimitiveCollection with "),t("code",{pre:!0},[this._v("vc-collection-primitive")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards1"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards2"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-model")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":scale")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10000"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":minimumPixelSize")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"128"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":maximumScale")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-model")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{ show ? 'Hide' : 'Show' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards1")]),s._v(": [],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards2")]),s._v(": [],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": {}\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards1 = []\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards2 = []\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("; i++) {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard1 = {}\n          billboard1."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(" = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard1."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("image")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard1."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scale")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          billboards1."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("(billboard1)\n\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard2 = {}\n          billboard2."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(" = { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard2."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("image")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard2."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scale")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.15")]),s._v("\n          billboards2."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("(billboard2)\n        }\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("billboards1")]),s._v(" = billboards1\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("billboards2")]),s._v(" = billboards2\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Transforms")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("eastNorthUpToFixedFrame")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Cartesian3")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromDegrees")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v("))\n      },\n      clicked (e) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("default")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Determines if the primitives in the collection will be shown.")])]),s._v(" "),a("tr",[a("td",[s._v("destroyPrimitives")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" Determines if primitives in the collection are destroyed when they are removed.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html"}},[this._v("PrimitiveCollection")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),a("tr",[a("td",[s._v("mousedown")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the mouse is pressed on the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("mouseup")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the mouse bounces on the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("click")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the mouse clicks on the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("clickout")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Touch when the mouse clicks outside the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("dblclick")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the left mouse button double-clicks the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("mousemove")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the mouse moves on the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("mouseover")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the mouse moves to the collection of primitives.")])]),s._v(" "),a("tr",[a("td",[s._v("mouseout")]),s._v(" "),a("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),a("td",[s._v("Triggered when the mouse moves out of the collection of primitives.")])])])])}],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=105.e9566db20935b93a9550.js.map