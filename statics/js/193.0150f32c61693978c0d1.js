(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{BMJD:function(s,a,t){"use strict";t.r(a);var r={data:function(){return{animation:!0,timeline:!0,fullscreenButton:!0,fullscreenElement:document.body,point:{pixelSize:28,color:"red"},label:{text:"Hello World",pixelOffset:[0,150]},billboard:{},offset:[10,25],otherOpts:{offset:[0,32],position:"bottom-right"},mars3dConfig:{include:"mars3d"}}},mounted:function(){this.$refs.vcViewer.createPromise.then((function(s){s.Cesium,s.viewer;console.log("viewer is loaded.")}))},methods:{onViewerReady:function(s){s.Cesium,s.viewer;var a=s.map;console.log(a)},onEntityClick:function(s){console.log(s)},onLeftClick:function(s){console.log(s)},load:function(){this.$refs.vcViewer.load().then((function(s){console.log(s)}))},unload:function(){this.$refs.vcViewer.unload().then((function(s){console.log(s)}))},reload:function(){this.$refs.vcViewer.reload().then((function(s){console.log(s)}))}}},e=t("JFUb"),l=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h2",[s._v("Mars3D Demo")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("使用 VueCesium 加载火星科技 Mars3D")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{ref:"viewerContainer",staticClass:"viewer"},[t("vc-viewer",{ref:"vcViewer",attrs:{"mars3d-config":s.mars3dConfig,animation:s.animation,timeline:s.timeline,"fullscreen-button":s.fullscreenButton,"fullscreen-element":s.fullscreenElement},on:{ready:s.onViewerReady,leftclick:s.onLeftClick}},[t("vc-navigation"),s._v(" "),t("vc-entity",{ref:"entity",attrs:{position:{lng:108,lat:32},point:s.point,label:s.label},on:{click:s.onEntityClick}},[t("vc-graphics-billboard",{ref:"billboard",attrs:{image:"https://zouyaoji.top/vue-cesium/favicon.png"}}),s._v(" "),t("vc-graphics-rectangle",{attrs:{coordinates:[130,20,80,25],material:"green"}})],1),s._v(" "),t("vc-layer-imagery",{attrs:{"sort-order":20}},[t("vc-provider-imagery-tianditu",{attrs:{"map-style":"cva_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1),s._v(" "),t("vc-layer-imagery",{attrs:{"sort-order":10}},[t("vc-provider-imagery-tianditu",{attrs:{"map-style":"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("md-button",{staticClass:"md-raised md-accent",on:{click:s.unload}},[s._v("销毁")]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:s.load}},[s._v("加载")]),s._v(" "),t("md-button",{staticClass:"md-raised md-accent",on:{click:s.reload}},[s._v("重载")])],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),t("hr"),s._v(" "),s._m(4)],1)])])}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("vue-cesium 使用火星科技的 "),a("a",{attrs:{href:"http://mars3d.cn/"}},[this._v("Mars3D")]),this._v(" 开发时只需要在引入 VueCesium 时通过配置项 "),a("code",{pre:!0},[this._v("mars3dConfig")]),this._v(" 配置 mars3d 主库和其插件库地址，默认使用 unpkg.com 的 cdn 资源，如需本地或局域网使用，请通过 mars3dConfig.libs 将相关库的资源改为本地或局域网地址即可。非 TS 项目结构请 "),a("a",{attrs:{href:"https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/loadUtil.ts#L17"}},[this._v("参考")]),this._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Vue")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("use")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("VueCesium")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mars3dConfig")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("include")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mars3d'")]),s._v("\n  }\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 如果是局部引入，也可以这样:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Viewer")]),s._v(" } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-cesium'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Vue")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("use")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Viewer")]),s._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mars3dConfig")]),s._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("include")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mars3d'")]),s._v("\n  }\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("vc-viewer")]),s._v(" 加载成功会返回 { Cesium, viewer, map }, 通过该 "),t("code",{pre:!0},[s._v("map")]),s._v(" 使用 "),t("a",{attrs:{href:"http://mars3d.cn/doc"}},[s._v("mars3d 教程")]),s._v(" 和 "),t("a",{attrs:{href:"http://mars3d.cn/api/"}},[s._v("mars3d API")]),s._v(" 进行相关开发即可， 如下面的例子：")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewerContainer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vcViewer"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":mars3d-config")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mars3dConfig"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreen-button")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreen-element")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenElement"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onViewerReady"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@leftClick")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onLeftClick"')]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"onEntityClick"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"{lng: 108, lat: 32}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":point")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"point"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":label")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"label"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-billboard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboard"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://zouyaoji.top/vue-cesium/favicon.png"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-billboard")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[130, 20, 80, 25]"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"green"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-rectangle")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 天地图注记 --\x3e")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sort-order")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"20"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("map-style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cva_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 天地图影像 --\x3e")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":sort-order")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("map-style")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"unload"')]),s._v(">")]),s._v("销毁"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"load"')]),s._v(">")]),s._v("加载"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"reload"')]),s._v(">")]),s._v("重载"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenButton")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenElement")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("document")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("body")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("point")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelSize")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("28")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello World'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("150")]),s._v("]\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("otherOpts")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("offset")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'bottom-right'")]),s._v("\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mars3dConfig")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("include")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mars3d'")]),s._v("\n        }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("mounted")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vcViewer")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'viewer is loaded.'")]),s._v(")\n      })\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("onViewerReady")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer, map }")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(map)\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("onEntityClick")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("onLeftClick")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("load")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vcViewer")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("load")]),s._v("()."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n        })\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("unload")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vcViewer")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("unload")]),s._v("()."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n        })\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reload")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("$refs")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("vcViewer")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reload")]),s._v("()."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(" =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("Mars3D平台官网： "),a("strong",[a("a",{attrs:{href:"http://mars3d.cn/example"}},[this._v("http://mars3d.cn")])])])])}],!1,null,null,null);a.default=l.exports},TUbT:function(s,a,t){s.exports=t("BMJD")}}]);
//# sourceMappingURL=193.0150f32c61693978c0d1.js.map