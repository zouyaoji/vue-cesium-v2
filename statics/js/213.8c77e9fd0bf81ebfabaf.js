(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{fLyI:function(s,t,a){"use strict";a.r(t);var r=a("JFUb"),e=Object(r.a)({data:function(){return{requestWaterMask:!0}},methods:{ready:function(s){var t=s.Cesium,a=s.viewer,r=new t.Cartesian3(300770.50872389384,5634912.131394585,2978152.2865545116),e=new t.Cartesian3(6344.974098678562,-793.3419798081741,2499.9508860763162);a.camera.lookAt(r,e),a.camera.lookAtTransform(t.Matrix4.IDENTITY)}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("html",[a("head"),a("body",[a("h1",[s._v("CesiumTerrainProvider")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载 Cesium 格式地形")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-layer-imagery",[a("vc-provider-imagery-bingmaps",{attrs:{url:"https://dev.virtualearth.net",bmkey:"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",mapstyle:"Aerial"}})],1),s._v(" "),a("vc-provider-terrain-cesium",{ref:"terrain",attrs:{requestwatermask:s.requestWaterMask}}),s._v(" "),a("vc-navigation")],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-provider-terrain-cesium")]),this._v(" 组件用于加载 Cesium 格式的地形，如果"),t("code",{pre:!0},[this._v("url")]),this._v("为空，默认通过 "),t("code",{pre:!0},[this._v("Cesium.createWorldTerrain")]),this._v(" 加载 CesiumIon 在线全球地形。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-bingmaps")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://dev.virtualearth.net"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bmKey")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Aerial"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-bingmaps")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"terrain"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":requestWaterMask")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"requestWaterMask"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {}\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" target = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300770.50872389384")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5634912.131394585")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2978152.2865545116")]),s._v(")\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" offset = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6344.974098678562")]),s._v(", -"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("793.3419798081741")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2499.9508860763162")]),s._v(")\n        viewer."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("lookAt")]),s._v("(target, offset)\n        viewer."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("lookAtTransform")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Matrix4")]),s._v("."),a("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("IDENTITY")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("url")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" 指定服务地址。")])]),s._v(" "),a("tr",[a("td",[s._v("requestVertexNormals")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否请求其他光照信息，否则使用每个顶点法线。")])]),s._v(" "),a("tr",[a("td",[s._v("requestWaterMask")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否请求水面数据。")])]),s._v(" "),a("tr",[a("td",[s._v("requestMetadata")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定是否请求每个切片元数据。")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定参考椭球体。")])]),s._v(" "),a("tr",[a("td",[s._v("credit")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定服务的描述信息")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档： "),t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html"}},[this._v("CesiumTerrainProvider")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=e.exports},ydeH:function(s,t,a){s.exports=a("fLyI")}}]);
//# sourceMappingURL=213.8c77e9fd0bf81ebfabaf.js.map