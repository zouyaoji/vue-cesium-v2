(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{gygi:function(s,t,a){"use strict";a.r(t);var r=a("eVuF"),e=a.n(r),v={data:function(){return{description:"Hello Vue Cesium",cylinder1:{},position1:{lng:105,lat:40,height:2e5},outlineColor1:"DARK_GREEN",material1:{},cylinder2:{},position2:{lng:110,lat:40,height:2e5},material2:"RED"}},mounted:function(){e.a.all([this.$refs.entity1.createPromise,this.$refs.entity2.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.material1=t.Color.GREEN.withAlpha(.5)}}},_=a("JFUb"),n=Object(_.a)(v,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("CylinderGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("添加圆柱（锥）体到场景")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready}},[a("vc-entity",{ref:"entity1",attrs:{position:s.position1,description:s.description,cylinder:s.cylinder1},on:{"update:cylinder":function(t){s.cylinder1=t}}},[a("vc-graphics-cylinder",{attrs:{length:4e5,topRadius:2e5,bottomRadius:2e5,material:s.material1,outline:!0,outlineColor:s.outlineColor1}})],1),s._v(" "),a("vc-entity",{ref:"entity2",attrs:{position:s.position2,description:s.description,cylinder:s.cylinder2},on:{"update:cylinder":function(t){s.cylinder2=t}}},[a("vc-graphics-cylinder",{attrs:{length:4e5,topRadius:0,bottomRadius:2e5,material:s.material2}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-graphics-cylinder")]),this._v(" 组件用于加载圆柱体、圆锥、圆锥台。需要作为 "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(" 的子组件使用。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cylinder.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder1"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":length")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":topRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottomRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"outlineColor1"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cylinder.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cylinder2"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":topRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":bottomRadius")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-cylinder")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cylinder1")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'DARK_GREEN'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cylinder2")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200000.0")]),s._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'RED'")]),s._v("\n      }\n    },\n    mounted() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity1.createPromise, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity2.createPromise]).then("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.zoomTo(instances["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.entities)\n      })\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.GREEN.withAlpha("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("show")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 是否显示。")])]),s._v(" "),a("tr",[a("td",[s._v("length")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 的长。")])]),s._v(" "),a("tr",[a("td",[s._v("topRadius")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 的顶部半径。")])]),s._v(" "),a("tr",[a("td",[s._v("bottomRadius")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 的底部半径。")])]),s._v(" "),a("tr",[a("td",[s._v("heightReference")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 高度模式。 "),a("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),a("tr",[a("td",[s._v("fill")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 是否填充材质。")])]),s._v(" "),a("tr",[a("td",[s._v("material")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'WHITE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 的材质。")])]),s._v(" "),a("tr",[a("td",[s._v("outline")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 是否绘制轮廓线。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("Object|String|Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'BLACK'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 轮廓线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1.0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 轮廓线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("numberOfVerticalLines")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("16")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定沿轮廓线周长绘制的垂直线数。")])]),s._v(" "),a("tr",[a("td",[s._v("slices")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("128")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 边节点数量。")])]),s._v(" "),a("tr",[a("td",[s._v("shadows")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 是否投射或接收每个点光源的阴影。 "),a("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3")])])]),s._v(" "),a("tr",[a("td",[s._v("distanceDisplayCondition")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 cylinder 随相机距离显示条件。 "),a("strong",[s._v("结构：{ near: number, far: number }")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html"}},[this._v("CylinderGraphics")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("definitionChanged")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("每当更改或修改属性或子属性时触发该事件。")])])])])}],!1,null,null,null);t.default=n.exports},iNmt:function(s,t,a){s.exports=a("gygi")}}]);
//# sourceMappingURL=123.0049ef3adc7279225924.js.map