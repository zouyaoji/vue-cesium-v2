(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{Ci1L:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),e=Object(r.a)({data:function(){return{terrainUrl:"https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"}},methods:{ready:function(s){var a=s.Cesium,t=s.viewer,r=new a.Cartesian3(300770.50872389384,5634912.131394585,2978152.2865545116),e=new a.Cartesian3(6344.974098678562,-793.3419798081741,2499.9508860763162);t.camera.lookAt(r,e),t.camera.lookAtTransform(a.Matrix4.IDENTITY)}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("ArcGISTiledElevationTerrainProvider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载 ArcGISTiledElevation 格式地形")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-layer-imagery",[t("vc-provider-imagery-bingmaps",{attrs:{url:"https://dev.virtualearth.net",bmkey:"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",mapstyle:"Aerial"}})],1),s._v(" "),t("vc-provider-terrain-arcgis-tiled-elevation",{attrs:{url:s.terrainUrl}})],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(4)],1)])])}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-provider-terrain-arcgis-tiled-elevation")]),this._v(" 组件用于加载 ArcGISTiledElevation 格式的地形。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-bingmaps")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://dev.virtualearth.net"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bmKey")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Aerial"')]),s._v("\n        >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-bingmaps")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-arcgis-tiled-elevation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"terrainUrl"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-arcgis-tiled-elevation")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("terrainUrl")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" target = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300770.50872389384")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5634912.131394585")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2978152.2865545116")]),s._v(")\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" offset = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cartesian3")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6344.974098678562")]),s._v(", -"),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("793.3419798081741")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2499.9508860763162")]),s._v(")\n        viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("lookAt")]),s._v("(target, offset)\n        viewer."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("camera")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("lookAtTransform")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Matrix4")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("IDENTITY")]),s._v(")\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("url")]),s._v(" "),t("td",[s._v("String|Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" 指定服务地址。")])]),s._v(" "),t("tr",[t("td",[s._v("token")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定服务授权令牌。")])]),s._v(" "),t("tr",[t("td",[s._v("ellipsoid")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定参考椭球体。")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("参考官方文档： "),a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html"}},[this._v("ArcGISTiledElevationTerrainProvider")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);a.default=e.exports},oYS6:function(s,a,t){s.exports=t("Ci1L")}}]);
//# sourceMappingURL=212.5988b4f8d5c1b4daa41f.js.map