(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{azeN:function(s,a,t){"use strict";t.r(a);var e=t("JFUb"),r=Object(e.a)({data:function(){return{protocol:"http",options:[{value:"img_c",label:"Global Image Map Service(GeographicTilingScheme)"},{value:"img_w",label:"Global Image Map Service(WebMercatorTilingScheme)"},{value:"vec_c",label:"Global vector map service(GeographicTilingScheme)"},{value:"vec_w",label:"Global vector map service(WebMercatorTilingScheme)"},{value:"ter_c",label:"Global Terrain Shading Service(GeographicTilingScheme)"},{value:"ter_w",label:"Global Terrain Shading Service(WebMercatorTilingScheme)"}],mapStyle:"img_c",alpha:1,brightness:1,contrast:1}},methods:{ready:function(s){var a=s.Cesium,t=s.viewer;this.Cesium=a,this.viewer=t},layerAdded:function(){this.$refs.layerText.imageryLayer&&this.viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("TiandituImageryProvider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Load an imagerylayer with TiandituImageryProvider")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-layer-imagery",{ref:"layerText",attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast,"sort-order":20}},[t("vc-provider-imagery-tianditu",{attrs:{"map-style":"eva_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1),s._v(" "),t("vc-layer-imagery",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast,"sort-order":10}},[t("vc-provider-imagery-tianditu",{attrs:{"map-style":s.mapStyle,token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("alpha")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(a){s.alpha=a},expression:"alpha"}}),s._v(" "),t("span",[s._v("brightness")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(a){s.brightness=a},expression:"brightness"}}),s._v(" "),t("span",[s._v("contrast")]),s._v(" "),t("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(a){s.contrast=a},expression:"contrast"}}),s._v(" "),t("span",[s._v("switch")]),s._v(" "),t("md-select",{attrs:{placeholder:"switch mapStyle"},model:{value:s.mapStyle,callback:function(a){s.mapStyle=a},expression:"mapStyle"}},s._l(s.options,(function(a){return t("md-option",{key:a.value,attrs:{value:a.value}},[s._v("\n            "+s._s(a.label)+"\n          ")])})),1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(4)],1)])])}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("The "),a("code",{pre:!0},[this._v("vc-provider-imagery-tianditu")]),this._v(" component is used to load WMTS image service of "),a("a",{attrs:{href:"http://lbs.tianditu.gov.cn/home.html"}},[this._v("Tianditu")]),this._v(".")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layerText"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sort-order")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("map-style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"eva_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sort-order")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":map-style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mapStyle"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v("\n        >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("alpha"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("brightness"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("contrast"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("switch"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mapStyle"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"switch mapStyle"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("protocol")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'http'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'img_c'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Global Image Map Service(GeographicTilingScheme)'")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'img_w'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Global Image Map Service(WebMercatorTilingScheme)'")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vec_c'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Global vector map service(GeographicTilingScheme)'")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vec_w'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Global vector map service(WebMercatorTilingScheme)'")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ter_c'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Global Terrain Shading Service(GeographicTilingScheme)'")]),s._v("\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'ter_w'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Global Terrain Shading Service(WebMercatorTilingScheme)'")]),s._v("\n          }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'img_c'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Cesium")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewer")]),s._v(" = viewer\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("mapStyle")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("'img_w'")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The type of service.")])]),s._v(" "),t("tr",[t("td",[s._v("credit")]),s._v(" "),t("td",[s._v("String|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("'天地图全球影像服务'")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The credit of service")])]),s._v(" "),t("tr",[t("td",[s._v("token")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The key of service. "),t("a",{attrs:{href:"http://lbs.tianditu.gov.cn/home.html"}},[s._v("Application address")])])]),s._v(" "),t("tr",[t("td",[s._v("protocol")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("https")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The network protocol of service, can be "),t("code",{pre:!0},[s._v("https")]),s._v(" or "),t("code",{pre:!0},[s._v("http")])])]),s._v(" "),t("tr",[t("td",[s._v("minimumLevel")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("0")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The minimum tile level to request, or undefined if there is no minimum. This parameter is ignored when accessing a tiled server.")])]),s._v(" "),t("tr",[t("td",[s._v("maximumLevel")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("20")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v("The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.")])]),s._v(" "),t("tr",[t("td",[s._v("projectionTransforms")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Specify the projection transformation parameters. "),t("strong",[s._v("structure: { from: 'GCJ02', to: 'WGS84' }")])])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("p",[s._v("mapStyle can take values:")]),s._v(" "),t("ul",[t("li",[s._v("'cia_c': Global Chinese Annotation Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'cia_w': Global Chinese Annotation Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'cta_c': Global Terrain Chinese Annotation Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'cta_w': Global Terrain Chinese Annotation Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'cva_c': Global Vector Chinese Annotation Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'cva_w': Global Vector Chinese Annotation Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'ela_c': Global Image English Annotation Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'ela_w': Global Image English Annotation Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'eva_c': Global Vector English Annotation Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'eva_w': Global Vector English Annotation Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'img_c': Global Image Map Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'img_w': Global Image Map Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'ter_c': Global Terrain Shading Service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'ter_w': Global Terrain Shading Service(WebMercatorTilingScheme).")]),s._v(" "),t("li",[s._v("'vec_c': Global vector map service(GeographicTilingScheme).")]),s._v(" "),t("li",[s._v("'vec_w': Global vector map service(WebMercatorTilingScheme).")])])]),s._v(" "),t("li",[t("p",[s._v("Refer to the official document of SuperMap: "),t("strong",[t("a",{attrs:{href:"http://support.supermap.com.cn:8090/webgl/Build/Documentation/SuperMapImageryProvider.html"}},[s._v("SuperMapImageryProvider")])])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when SuperMapImageryProvider is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("Gets an event that is raised when the imagery provider encounters an asynchronous error.. By subscribing to the event, you will be notified of the error and can potentially recover from it. Event listeners are passed an instance of TileProviderError.")])]),s._v(" "),t("tr",[t("td",[s._v("readyPromise")]),s._v(" "),t("td",[s._v("ImageryProvider")]),s._v(" "),t("td",[s._v("Gets a promise that resolves to true when the provider is ready for use.")])])])])}],!1,null,null,null);a.default=r.exports},l4NV:function(s,a,t){s.exports=t("azeN")}}]);
//# sourceMappingURL=75.950b6bbd279e65a692ff.js.map