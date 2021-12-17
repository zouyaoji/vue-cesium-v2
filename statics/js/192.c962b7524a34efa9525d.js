(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{MoDi:function(s,a,t){s.exports=t("Puzc")},Puzc:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{animation:!0,timeline:!0,baseLayerPicker:!1,fullscreenButton:!0,infoBox:!0,fullscreenElement:document.body,tk:"436ce7e50d27eede2f2929307e6b33c0",cesiumPath:"./statics/SuperMapCesium/Cesium.js"}},mounted:function(){this.$refs.vcViewer.createPromise.then((function(s){s.Cesium,s.viewer;console.log("viewer is loaded.")}))},methods:{ready:function(s){var a=s.Cesium,t=s.viewer;t.scene.globe.depthTestAgainstTerrain=!0,t.scene.globe.enableLighting=!0,this.fullscreenElement=this.$refs.viewerContainer,t.entities.add({id:"成都欢迎你",position:a.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new a.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",scale:.1}),label:new a.LabelGraphics({text:"Hello Cesium",font:"24px sans-serif",horizontalOrigin:1,outlineColor:new a.Color(0,0,0,1),outlineWidth:2,pixelOffset:new a.Cartesian2(17,-5),style:a.LabelStyle.FILL})})}}},e=t("JFUb"),l=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("超图例子")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("用超图版本加载 vc-viewer 组件")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{ref:"viewerContainer",staticClass:"viewer"},[t("vc-viewer",{ref:"vcViewer",attrs:{animation:s.animation,baselayerpicker:s.baseLayerPicker,timeline:s.timeline,cesiumpath:s.cesiumPath,fullscreenbutton:s.fullscreenButton,fullscreenelement:s.fullscreenElement,infobox:s.infoBox,logo:!0},on:{ready:s.ready}},[t("vc-navigation"),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-tianditu",{attrs:{mapstyle:"img_c",token:s.tk}})],1),s._v(" "),t("vc-layer-imagery",{ref:"layerText"},[t("vc-provider-imagery-tianditu",{attrs:{mapstyle:"cia_c",token:s.tk}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("动画部件")]),s._v(" "),t("md-switch",{model:{value:s.animation,callback:function(a){s.animation=a},expression:"animation"}}),s._v(" "),t("span",[s._v("时间轴部件")]),s._v(" "),t("md-switch",{model:{value:s.timeline,callback:function(a){s.timeline=a},expression:"timeline"}}),s._v(" "),t("span",[s._v("基础图层拾取器")]),s._v(" "),t("md-switch",{model:{value:s.baseLayerPicker,callback:function(a){s.baseLayerPicker=a},expression:"baseLayerPicker"}}),s._v(" "),t("span",[s._v("全屏按钮")]),s._v(" "),t("md-switch",{model:{value:s.fullscreenButton,callback:function(a){s.fullscreenButton=a},expression:"fullscreenButton"}}),s._v(" "),t("span",[s._v("信息提示框")]),s._v(" "),t("md-switch",{model:{value:s.infoBox,callback:function(a){s.infoBox=a},expression:"infoBox"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),t("hr"),s._v(" "),s._m(4)],1)])])}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("使用超图版本开发时只需要在引入 vue-cesium 时通过配置项 "),a("code",{pre:!0},[this._v("cesiumPath")]),this._v(" 指定为超图版本路径即可:")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Vue")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("use")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("VueCesium")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SupermapCesium/Cesium.js'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 如果是局部引入，也可以这样:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Viewer")]),s._v(" } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-cesium'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Vue")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("use")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Viewer")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SupermapCesium/Cesium.js'")]),s._v("\n})\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("或者是直接在 "),a("code",{pre:!0},[this._v("vc-viewer")]),this._v(" 组件上指定 "),a("code",{pre:!0},[this._v("cesiumPath")]),this._v(" 属性，如下面的例子：")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewerContainer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vcViewer"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":baseLayerPicker")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baseLayerPicker"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cesiumPath")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cesiumPath"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreenButton")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreenElement")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenElement"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":infoBox")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"infoBox"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tk"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layerText"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cia_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tk"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("动画部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("时间轴部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("基础图层拾取器"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baseLayerPicker"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("全屏按钮"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("信息提示框"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"infoBox"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("baseLayerPicker")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenButton")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("infoBox")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenElement")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("document")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("body")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tk")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'436ce7e50d27eede2f2929307e6b33c0'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SuperMapCesium/Cesium.js'")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vcViewer")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'viewer is loaded.'")]),s._v(")\n      })\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("globe")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("depthTestAgainstTerrain")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scene")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("globe")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("enableLighting")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("fullscreenElement")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("viewerContainer")]),s._v("\n        viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("entities")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("add")]),s._v("({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'成都欢迎你'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Cartesian3")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromDegrees")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("BillboardGraphics")]),s._v("({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          }),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("LabelGraphics")]),s._v("({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Cesium'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'24px sans-serif'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("horizontalOrigin")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Color")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("),\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian2")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17")]),s._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v("),\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("LabelStyle")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("FILL")]),s._v("\n          })\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("参考超图官方文档： "),a("a",{attrs:{href:"http://support.supermap.com.cn:8090/webgl/"}},[this._v("SuperMap iClient 3D for WebGL")])])])}],!1,null,null,null);a.default=l.exports}}]);
//# sourceMappingURL=192.c962b7524a34efa9525d.js.map