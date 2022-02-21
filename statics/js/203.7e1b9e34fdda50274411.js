(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{OG19:function(t,e,s){"use strict";s.r(e);var v={data:function(){return{url:"https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json"}},methods:{clicked:function(t){console.log(t)},ready:function(t){this.cesiumInstance=t;t.Cesium,t.viewer},readyPromise:function(t){var e=this.cesiumInstance,s=e.Cesium;e.viewer.zoomTo(t,new s.HeadingPitchRange(0,-.5,2*t.boundingSphere.radius))},allTilesLoaded:function(){console.log("All tiles are loaded")},initialTilesLoaded:function(){console.log("Initial tiles are loaded")},loadProgress:function(t,e){0!==t||0!==e?console.log("Loading: requests: "+t+", processing: "+e):console.log("Stopped loading")},tileFailed:function(t){console.log("An error occurred loading tile: "+t.url),console.log("Error: "+t.message)},tileLoad:function(t){console.log("A tile was loaded.")},tileUnload:function(t){console.log("A tile was unloaded from the cache.")},tileVisible:function(t){}}},a=s("JFUb"),_=Object(a.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("html",[s("head"),s("body",[s("h1",[t._v("Cesium3DTileset")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("示例")]),t._v(" "),s("h3",[t._v("加载 3DTileset 图元")]),t._v(" "),s("h4",[t._v("预览")]),t._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{on:{ready:t.ready}},[s("vc-primitive-tileset",{attrs:{url:t.url},on:{"ready-promise":t.readyPromise,"initial-tiles-loaded":t.initialTilesLoaded,"all-tiles-loaded":t.allTilesLoaded,"load-progress":t.loadProgress,"tile-failed":t.tileFailed,"tile-load":t.tileLoad,"tile-unload":t.tileUnload,"tile-visible":t.tileVisible,click:t.clicked}})],1)],1)]],2),t._v(" "),s("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),s("hr"),t._v(" "),t._m(3),t._v(" "),s("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),s("hr")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",{pre:!0},[this._v("vc-primitive-tileset")]),this._v(" 组件用于加载 3DTiles 模型。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready-promise")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readyPromise"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@initial-tiles-loaded")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"initialTilesLoaded"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@all-tiles-loaded")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"allTilesLoaded"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@load-progress")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loadProgress"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tile-failed")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileFailed"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tile-load")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileLoad"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tile-unload")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileUnload"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tile-visible")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileVisible"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clicked"')]),t._v("\n      >")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("data")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json'")]),t._v("\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("clicked")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("a")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("(a)\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("ready")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("cesiumInstance")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("cesiumInstance")]),t._v(" = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Cesium")]),t._v(", viewer } = cesiumInstance\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("readyPromise")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("tileset")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { "),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Cesium")]),t._v(", viewer } = "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("cesiumInstance")]),t._v("\n        viewer."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("zoomTo")]),t._v("(tileset, "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Cesium")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("HeadingPitchRange")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", -"),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(", tileset."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("boundingSphere")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("radius")]),t._v(" * "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2.0")]),t._v("))\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("allTilesLoaded")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'All tiles are loaded'")]),t._v(")\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("initialTilesLoaded")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Initial tiles are loaded'")]),t._v(")\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("loadProgress")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("numberOfPendingRequests, numberOfTilesProcessing")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (numberOfPendingRequests === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(" && numberOfTilesProcessing === "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n          "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Stopped loading'")]),t._v(")\n          "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v("\n        }\n\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Loading: requests: '")]),t._v(" + numberOfPendingRequests + "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("', processing: '")]),t._v(" + numberOfTilesProcessing)\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("tileFailed")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("error")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'An error occurred loading tile: '")]),t._v(" + error."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("url")]),t._v(")\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Error: '")]),t._v(" + error."),s("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("message")]),t._v(")\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("tileLoad")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("tile")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'A tile was loaded.'")]),t._v(")\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("tileUnload")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("tile")]),t._v(") {\n        "),s("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("console")]),t._v("."),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("log")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'A tile was unloaded from the cache.'")]),t._v(")\n      },\n      "),s("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("tileVisible")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("tile")]),t._v(") {}\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("url")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("required")]),t._v("tileset json 文件地址。")])]),t._v(" "),s("tr",[s("td",[t._v("show")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v("是否显示 tileset 模型。")])]),t._v(" "),s("tr",[s("td",[t._v("modelMatrix")]),t._v(" "),s("td",[t._v("Matrix4")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("Matrix4.IDENTITY")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 一个 4x4 变换矩阵，用于转换 tileset 的根块。")])]),t._v(" "),s("tr",[s("td",[t._v("shadows")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 确定 tileset 是否投射或接收来自每个光源的阴影。 "),s("strong",[t._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4")])])]),t._v(" "),s("tr",[s("td",[t._v("maximumScreenSpaceError")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("16")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 用于驱动细节细化级别的最大屏幕空间错误。")])]),t._v(" "),s("tr",[s("td",[t._v("maximumMemoryUsage")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("512")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" tileset 可以使用的最大内存量（MB）。")])]),t._v(" "),s("tr",[s("td",[t._v("cullWithChildrenBounds")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 是否使用子绑定卷的并集来剔除切片。")])]),t._v(" "),s("tr",[s("td",[t._v("cullRequestsWhileMoving")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 请勿请求由于相机的移动而可能回来的未使用的图块。 此优化仅适用于固定图块集。")])]),t._v(" "),s("tr",[s("td",[t._v("cullRequestsWhileMovingMultiplier")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("60.0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 移动时用于剔除请求的乘数。 较大的代表更积极的剔除，较小的代表较不积极的剔除。")])]),t._v(" "),s("tr",[s("td",[t._v("preloadWhenHidden")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" tileet.show为false时预加载图块。 加载图块时，好像图块集可见但不渲染它们。")])]),t._v(" "),s("tr",[s("td",[t._v("preloadFlightDestinations")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 在相机飞行过程中是否预加载瓦片。")])]),t._v(" "),s("tr",[s("td",[t._v("preferLeaves")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 是否优先加载第一层级。")])]),t._v(" "),s("tr",[s("td",[t._v("dynamicScreenSpaceError")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 减少远离相机的瓷砖的屏幕空间错误。")])]),t._v(" "),s("tr",[s("td",[t._v("dynamicScreenSpaceErrorDensity")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.00278")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 用于调整动态屏幕空间误差密度，类似于雾密度。")])]),t._v(" "),s("tr",[s("td",[t._v("dynamicScreenSpaceErrorFactor")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("4.0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 用于增加计算的动态屏幕空间错误的因子。")])]),t._v(" "),s("tr",[s("td",[t._v("dynamicScreenSpaceErrorHeightFalloff")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.25")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" tileset 高度开始下降的比率。")])]),t._v(" "),s("tr",[s("td",[t._v("progressiveResolutionHeightFraction")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.3")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 如果介于（0.0，0.5]之间，则将优先考虑屏幕空间错误或高于屏幕空间错误的图块，以降低ProgressiveResolutionHeightFraction * screenHeight的屏幕分辨率，这有助于在继续加载全分辨率图块的同时快速缩小图块层。")])]),t._v(" "),s("tr",[s("td",[t._v("foveatedScreenSpaceError")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 通过暂时提高屏幕边缘周围的图块的屏幕空间错误，可以优先在屏幕中央加载图块。 加载由Cesium3DTileset#foveatedConeSize确定的屏幕中心的所有图块后，屏幕空间错误将恢复正常。")])]),t._v(" "),s("tr",[s("td",[t._v("foveatedConeSize")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 当Cesium3DTileset#foveatedScreenSpaceError为true时使用，以控制确定延迟哪些图块的圆锥体大小。 此圆锥体内部的瓷砖会立即加载。 圆锥体外部的图块可能会根据其在圆锥体外部的距离和其屏幕空间误差而推迟。 这由Cesium3DTileset#foveatedInterpolationCallback和Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation控制。 将该值设置为0.0表示圆锥将是由相机位置及其视图方向形成的线。 将此值设置为1.0意味着圆锥体将覆盖相机的整个视场，从而禁用效果。")])]),t._v(" "),s("tr",[s("td",[t._v("foveatedMinimumScreenSpaceErrorRelaxation")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 当Cesium3DTileset#foveatedScreenSpaceError为true时使用，以控制凹入圆锥体外部的图块的起始屏幕空间误差松弛。 屏幕空间错误将根据提供的Cesium3DTileset#foveatedInterpolationCallback，从图块值开始直至Cesium3DTileset＃maximumScreenSpaceError引发。")])]),t._v(" "),s("tr",[s("td",[t._v("foveatedInterpolationCallback")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 当Cesium3DTileset#foveatedScreenSpaceError为true时使用，以控制在凹入圆锥体外部的图块引发屏幕空间误差的程度，并在Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation和Cesium3DTileset#maximumScreenSpaceError之间进行插值")])]),t._v(" "),s("tr",[s("td",[t._v("foveatedTimeDelay")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.2")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 当Cesium3DTileset#foveatedScreenSpaceError为true时使用，用于控制相机停止移动之后要等待多长时间（秒）才开始加载延迟的图块。此时间延迟可防止在相机移动时在屏幕边缘周围请求图块。 将此设置为0.0将立即请求任何给定视图中的所有图块。")])]),t._v(" "),s("tr",[s("td",[t._v("skipLevelOfDetail")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。")])]),t._v(" "),s("tr",[s("td",[t._v("baseScreenSpaceError")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("1024")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，在跳过详细级别之前必须达到的屏幕空间错误。")])]),t._v(" "),s("tr",[s("td",[t._v("skipScreenSpaceErrorFactor")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("16")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，定义要跳过的最小屏幕空间错误的乘数。 与 skipLevels 结合使用以确定要加载的切片。")])]),t._v(" "),s("tr",[s("td",[t._v("skipLevels")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v("当 skipLevelOfDetail 为 true 时，一个常量定义加载切片时要跳过的最小级别数。 当它为 0 时，不会跳过任何级别。与 skipScreenSpaceErrorFactor 结合使用以确定要加载的切片。")])]),t._v(" "),s("tr",[s("td",[t._v("immediatelyLoadDesiredLevelOfDetail")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。")])]),t._v(" "),s("tr",[s("td",[t._v("loadSiblings")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，确定在遍历期间是否始终下载可见切片的兄弟节点。")])]),t._v(" "),s("tr",[s("td",[t._v("clippingPlanes")]),t._v(" "),s("td",[t._v("ClippingPlaneCollection")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" ClippingPlaneCollection 用于有选择地禁用渲染 tileset。")])]),t._v(" "),s("tr",[s("td",[t._v("classificationType")]),t._v(" "),s("td",[t._v("ClassificationType")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 确定此 tileset 是否会对 terrain，3D Tiles 或两者进行分类。 有关限制和限制的详细信息，请参阅 Cesium3DTileset＃classificationType。")])]),t._v(" "),s("tr",[s("td",[t._v("ellipsoid")]),t._v(" "),s("td",[t._v("Ellipsoid")]),t._v(" "),s("td",[t._v("Ellipsoid.WGS84")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 决定地球的大小和形状参考椭球体。")])]),t._v(" "),s("tr",[s("td",[t._v("pointCloudShading")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 用于构造 PointCloudShading 对象以基于几何误差和光照控制点衰减的选项。")])]),t._v(" "),s("tr",[s("td",[t._v("imageBasedLightingFactor")]),t._v(" "),s("td",[t._v("Cartesian2")]),t._v(" "),s("td",[t._v("new Cartesian2(1.0, 1.0)")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 地球、天空、大气层的光照缩放因子。")])]),t._v(" "),s("tr",[s("td",[t._v("lightColor")]),t._v(" "),s("td",[t._v("Cartesian3")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 模型阴影的颜色和强度。")])]),t._v(" "),s("tr",[s("td",[t._v("luminanceAtZenith")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0.2")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 太阳在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。")])]),t._v(" "),s("tr",[s("td",[t._v("sphericalHarmonicCoefficients")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 用于基于图像的照明的漫反射颜色的三阶球面谐波系数。")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("specularEnvironmentMaps")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" KTX文件的URL，其中包含镜面照明的立方体贴图和卷积的镜面mipmap。")])]),t._v(" "),s("tr",[s("td",[t._v("backFaceCulling")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("debugHeatmapTilePropertyName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td"),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" tile变量以着色为热图。 所有渲染的图块将相对于彼此的指定变量值进行着色。")])]),t._v(" "),s("tr",[s("td",[t._v("debugFreezeFrame")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，确定是否只使用最后一帧的切片进行渲染。")])]),t._v(" "),s("tr",[s("td",[t._v("debugColorizeTiles")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则给每个 tile 一个随机颜色。")])]),t._v(" "),s("tr",[s("td",[t._v("debugWireframe")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用， 如果为 ture，则渲染每个 tile content 为线框。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowBoundingVolume")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则渲染每个 tile 的边界体积。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowContentBoundingVolume")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则渲染每个 tile content 的边界体积。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowViewerRequestVolume")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则渲染每个 tile 的请求量。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowGeometricError")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签表示每个 tile 的几何误差。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowRenderingStatistics")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签以表示每个 tile 的 commonds、points、triangles、features 的数量。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowMemoryUsage")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签表示每个 tile 的纹理和几何内存，以 mb 为单位。")])]),t._v(" "),s("tr",[s("td",[t._v("debugShowUrl")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签表示每个 tile 的网址。")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("参考官方文档："),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html"}},[this._v("Cesium3DTileset")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("事件名")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ready")]),t._v(" "),s("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),s("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),s("tr",[s("td",[t._v("allTilesLoaded")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("该组件所有层级的 tiles 加载完毕后触发该事件。")])]),t._v(" "),s("tr",[s("td",[t._v("initialTilesLoaded")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("该组件所有初始层级的 tiles 加载完毕触发该事件。")])]),t._v(" "),s("tr",[s("td",[t._v("loadProgress")]),t._v(" "),s("td",[t._v("(numberOfPendingRequests, numberOfTilesProcessing)")]),t._v(" "),s("td",[t._v("加载 tiles 触发，指示 tile 加载进度。")])]),t._v(" "),s("tr",[s("td",[t._v("tileFailed")]),t._v(" "),s("td",[t._v("{url, message}")]),t._v(" "),s("td",[t._v("tile 加载失败时触发该事件。")])]),t._v(" "),s("tr",[s("td",[t._v("tileLoad")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("tile 加载完成后触发该事件。")])]),t._v(" "),s("tr",[s("td",[t._v("tileUnload")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("tile 加载未成功加载时触发该事件。")])]),t._v(" "),s("tr",[s("td",[t._v("tileVisible")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("tile 可见性发生改变时触发该事件。")])]),t._v(" "),s("tr",[s("td",[t._v("mousedown")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标在该图元上按下时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("mouseup")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标在该图元上弹起时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("click")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标单击该图元时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("clickout")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标单击该图元外部时触。")])]),t._v(" "),s("tr",[s("td",[t._v("dblclick")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标左键双击该图元时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("mousemove")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标在该图元上移动时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("mouseover")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标移动到该图元时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("mouseout")]),t._v(" "),s("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),s("td",[t._v("鼠标移出该图元时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("readyPromise")]),t._v(" "),s("td",[t._v("tileset")]),t._v(" "),s("td",[t._v("图元加载完完成时触发。。")])])])])}],!1,null,null,null);e.default=_.exports},mfmA:function(t,e,s){t.exports=s("OG19")}}]);
//# sourceMappingURL=203.7e1b9e34fdda50274411.js.map