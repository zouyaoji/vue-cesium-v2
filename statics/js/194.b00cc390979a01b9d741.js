(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{BWEe:function(t,s,a){"use strict";a.r(s);var r={data:function(){return{id:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:108,lat:35,height:1e4},billboard:{},show:!0,distanceDisplayCondition:{near:0,far:2e7},horizontalOrigin:0}},methods:{ready:function(t){t.Cesium,t.viewer},clicked:function(t){console.log(t)}}},v=a("JFUb"),e=Object(v.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("html",[a("head"),a("body",[a("h1",[t._v("Billboard")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("加载布告板图元")]),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:t.ready}},[a("vc-collection-primitive-billboard",[a("vc-primitive-billboard",{attrs:{image:t.image,scale:.4,show:t.show,"distance-display-condition":t.distanceDisplayCondition,"horizontal-origin":t.horizontalOrigin,position:t.position},on:{click:t.clicked}})],1)],1)],1)]],2),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),a("hr"),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),a("hr")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-primitive-billboard")]),this._v(" 组件用于加载布告板图元，布告板是场景中与视口对齐的图像，只能作为 "),s("code",{pre:!0},[this._v("vc-collection-primitive-billboard")]),this._v(" 的子组件使用。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-collection-primitive-billboard")]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-billboard")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":image")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"image"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":scale")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"0.4"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":distance-display-condition")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"distanceDisplayCondition"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":horizontal-origin")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"horizontalOrigin"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position"')]),t._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-billboard")]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-collection-primitive-billboard")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("data")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position")]),t._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("108")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("10000")]),t._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("billboard")]),t._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("distanceDisplayCondition")]),t._v(": { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("near")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("far")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("20000000")]),t._v(" },\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("horizontalOrigin")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("ready")]),t._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("cesiumInstance")]),t._v(") {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { "),a("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Cesium")]),t._v(", viewer } = cesiumInstance\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("alignedAxis")]),t._v(" "),a("td",[t._v("Cartesian3")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("{x: 0, y: 0, z: 0}")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 按单位矢量轴旋转参数。"),a("strong",[t._v("结构：{ x: number, y: number, z: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("Object|String|Array")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("'white'")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 图片的颜色。")])]),t._v(" "),a("tr",[a("td",[t._v("disableDepthTestDistance")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 的深度检测距离。")])]),t._v(" "),a("tr",[a("td",[t._v("distanceDisplayCondition")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 的显示条件。. "),a("strong",[t._v("结构: { near: number, far: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("eyeOffset")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("{x: 0, y: 0, z: 0}")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 视角偏移量。 "),a("strong",[t._v("结构：{ x: number, y: number, z: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 的高度（像素）。")])]),t._v(" "),a("tr",[a("td",[t._v("heightReference")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 高度模式。"),a("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),a("tr",[a("td",[t._v("horizontalOrigin")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 水平对齐方式。"),a("strong",[t._v("CENTER: 0, LEFT: 1, RIGHT: -1")])])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("*")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定与 billboard 关联的信息。")])]),t._v(" "),a("tr",[a("td",[t._v("image")]),t._v(" "),a("td",[t._v("String|Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 加载的的 Image、 URI 或者 Canvas。")])]),t._v(" "),a("tr",[a("td",[t._v("pixelOffset")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("{x: 0, y: 0}")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 像素偏移量。 "),a("strong",[t._v("结构：{ x: number, y: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("pixelOffsetScaleByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 偏移量随相机距离改变的参数。"),a("strong",[t._v("结构：{ near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 的位置。 "),a("strong",[t._v("结构：{ lng: number, lat: number, height: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("rotation")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 沿 x 轴方向旋转的角度。")])]),t._v(" "),a("tr",[a("td",[t._v("scale")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("1.0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 缩放比例。")])]),t._v(" "),a("tr",[a("td",[t._v("scaleByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 的缩放显示参数。 "),a("strong",[t._v("结构： { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v("指定 billboard 是否显示。")])]),t._v(" "),a("tr",[a("td",[t._v("sizeInMeters")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 的单位是否是米。")])]),t._v(" "),a("tr",[a("td",[t._v("translucencyByDistance")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 透明度改变参数。 "),a("strong",[t._v("结构： { near: number, nearValue: number, far: number, farValue: number }")])])]),t._v(" "),a("tr",[a("td",[t._v("verticalOrigin")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("0")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定 billboard 垂直对齐方式。"),a("strong",[t._v("CENTER: 0, BOTTOM: 1, BASELINE: 2, TOP: -1")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("参考官方文档: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Billboard.html"}},[this._v("Billboard")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),a("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标在该布告板上按下时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标在该布告板上弹起时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标单击该布告板时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("clickout")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标单击该布告板外部时触。")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标左键双击该布告板时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("mousemove")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标在该布告板上移动时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标移动到该布告板时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),t._v(" "),a("td",[t._v("鼠标移出该布告板时触发。")])])])])}],!1,null,null,null);s.default=e.exports},HDiw:function(t,s,a){t.exports=a("BWEe")}}]);
//# sourceMappingURL=194.b00cc390979a01b9d741.js.map