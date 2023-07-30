(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{"E/FE":function(s,a,t){"use strict";t.r(a);var r=t("O40h"),e=t("ln6h"),v=t.n(e),l=t("Wa2I"),n=t.n(l),_={data:function(){return{values:[],lngs:[],lats:[],breaks:[.1,10,25,50,100,250,500],colors:["#A5F38D","#3DB93F","#63B8F9","#0002E2","#FA00FA","#7F0140"]}},methods:{ready:function(s){var a=this;return Object(r.a)(v.a.mark((function t(){var r,e,l,_,p,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.vm=a,a.cesiumInstance=s,r=a.cesiumInstance,e=r.Cesium,r.viewer,t.next=5,e.Resource.fetchJson({url:"./statics/SampleData/weather/precipitation/guilin.json"});case 5:l=t.sent,_=[],p=[],c=[],l.reduce((function(s,a){_.push(n()(a.lon)),p.push(n()(a.lat)),c.push(n()(a.value))}),[]),a.lngs=_,a.lats=p,a.values=c;case 13:case"end":return t.stop()}}),t)})))()},subReady:function(s){s.Cesium;var a=s.viewer;s.cesiumObject.createPromise.then((function(){a.zoomTo(a.dataSources.get(0))}))}}},p=t("JFUb"),c=Object(p.a)(_,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("克里金插值色斑图")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("添加克里金插值色斑图到场景")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[0!==s.values.length?t("vc-kriging-map",{ref:"krigingmap",attrs:{breaks:s.breaks,values:s.values,lngs:s.lngs,lats:s.lats,colors:s.colors,"clip-coords":"./statics/SampleData/shp/china/guilin.json"},on:{ready:s.subReady}}):s._e(),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-tianditu",{attrs:{"map-style":"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)])])}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-kriging-map")]),this._v(" 组件用于加载克里金插值色斑图，基于 "),a("code",{pre:!0},[this._v("kriging.js")]),this._v(" 和 "),a("code",{pre:!0},[this._v("turf.js")]),this._v(" 实现。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-kriging-map")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-if")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"values.length !== 0"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":breaks")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"breaks"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":values")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"values"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":lngs")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lngs"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":lats")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"lats"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":colors")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"colors"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clipCoords")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./statics/SampleData/shp/guilin.json"')]),s._v("\n        >")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('\x3c!-- <vc-kriging-map ref="krigingmap" v-if="values.length !== 0" :breaks="breaks" :values="values" :lngs="lngs" :lats="lats" :colors="colors"      @ready="subReady" :clip-coords="[109.61826, 24.25883, 111.49207, 26.38528]"> --\x3e')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-kriging-map")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("values")]),s._v(": [],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lngs")]),s._v(": [],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lats")]),s._v(": [],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("breaks")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("250")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v("],\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("colors")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#A5F38D'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#3DB93F'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#63B8F9'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#0002E2'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#FA00FA'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'#7F0140'")]),s._v("]\n        }\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("async")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v(" = cesiumInstance\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("cesiumInstance")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" data = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("await")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Resource")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fetchJson")]),s._v("({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/weather/guilin.json'")]),s._v(" })\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" lngs = []\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" lats = []\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" values = []\n          data."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("reduce")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("pre, cur")]),s._v(") =>")]),s._v(" {\n            lngs."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("parseFloat")]),s._v("(cur."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("lon")]),s._v("))\n            lats."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("parseFloat")]),s._v("(cur."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("lat")]),s._v("))\n            values."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("parseFloat")]),s._v("(cur."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("value")]),s._v("))\n          }, [])\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("lngs")]),s._v(" = lngs\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("lats")]),s._v(" = lats\n          "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("values")]),s._v(" = values\n        },\n        subReady ({ "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer, cesiumObject }) {\n          cesiumObject."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("createPromise")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("then")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("() =>")]),s._v(" {\n            viewer."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("zoomTo")]),s._v("(viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("dataSources")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("get")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("))\n          })\n        }\n      }\n    }\n  ")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("</template\n>\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("krigingModel")]),s._v(" "),t("td",[s._v("string")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("'exponential'")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定克里金模型名字，取 'gaussian', 'spherical', 'exponential'。")])]),s._v(" "),t("tr",[t("td",[s._v("krigingSigma2")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定克里金插值 sigma 参数。")])]),s._v(" "),t("tr",[t("td",[s._v("krigingAlpha")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定克里金插值 alpha 参数。")])]),s._v(" "),t("tr",[t("td",[s._v("canvasAlpha")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("1")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定渲染时 alpha 参数。")])]),s._v(" "),t("tr",[t("td",[s._v("colors")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图分段颜色数组。")])]),s._v(" "),t("tr",[t("td",[s._v("breaks")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图分段数组。")])]),s._v(" "),t("tr",[t("td",[s._v("clipCoords")]),s._v(" "),t("td",[s._v("Array|String")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("[]")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" 指定色斑图裁剪的坐标数组或 json 文件地址。")])]),s._v(" "),t("tr",[t("td",[s._v("show")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定色斑图是否显示。")])]),s._v(" "),t("tr",[t("td",[s._v("cell")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定插值时分辨率。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject }")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])])])])}],!1,null,null,null);a.default=c.exports},Vqcz:function(s,a,t){s.exports=t("E/FE")}}]);
//# sourceMappingURL=142.f29354ab7054ddce3818.js.map