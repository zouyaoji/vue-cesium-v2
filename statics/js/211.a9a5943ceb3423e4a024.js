(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{"9ZTi":function(s,a,t){"use strict";t.r(a);var r={data:function(){return{show:!0,positions:[[105,32],[106,34],[107,30]],billboards1:[],billboards2:[],url:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",modelMatrix:{},polygons:[{positions:[[115,37],[115,32],[107,33],[102,31],[102,35]],appearance:{type:"MaterialAppearance",options:{material:"green"}}},{positions:[{lng:108,lat:42},{lng:100,lat:42},{lng:104,lat:40}],appearance:{type:"MaterialAppearance",options:{material:"red"}},depthFailAppearance:{type:"MaterialAppearance",options:{material:"red"}}},{positions:[90,41,0,85,41,5e5,80,41,0],appearance:{type:"MaterialAppearance",options:{material:"blue"}}},{polygonHierarchy:{positions:[[99,30],[85,30],[85,40],[99,40]],holes:[{positions:[[97,31],[97,39],[87,39],[87,31]],holes:[{positions:[[95,33],[89,33],[89,37],[95,37]],holes:[{positions:[[93,34],[91,34],[91,36],[93,36]]}]}]}]},appearance:{type:"MaterialAppearance",options:{material:"yellow"}}}]}},methods:{ready:function(s){for(var a=s.Cesium,t=(s.viewer,[]),r=[],l=0;l<100;l++){var e={};e.position={lng:40*Math.random()+85,lat:30*Math.random()+21},e.image="https://zouyaoji.top/vue-cesium/favicon.png",e.scale=.1,t.push(e);var n={};n.position={lng:40*Math.random()+85,lat:30*Math.random()+21},n.image="https://zouyaoji.top/vue-cesium/favicon.png",n.scale=.15,r.push(n)}this.billboards1=t,this.billboards2=r,this.modelMatrix=a.Transforms.eastNorthUpToFixedFrame(a.Cartesian3.fromDegrees(105,38,1e4))},clicked:function(s){console.log(s)}}},l=t("JFUb"),e=Object(l.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("html",[t("head"),t("body",[t("h1",[s._v("PrimitiveCollection")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载普通图元集合")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-collection-primitive",{attrs:{show:s.show},on:{click:s.clicked}},[t("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards1}}),s._v(" "),t("vc-collection-primitive",[t("vc-collection-primitive-billboard",{attrs:{billboards:s.billboards2}})],1)],1),s._v(" "),t("vc-collection-primitive",{attrs:{polygons:s.polygons}},[t("vc-primitive-model",{attrs:{url:s.url,"model-matrix":s.modelMatrix,scale:1e4,"minimum-pixel-size":128,"maximum-scale":2e5},on:{click:s.clicked}}),s._v(" "),t("vc-polygon",{attrs:{positions:s.positions}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v(s._s(s.show?"隐藏":"显示"))]),s._v(" "),t("md-switch",{model:{value:s.show,callback:function(a){s.show=a},expression:"show"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),t("hr")],1)])])}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[t("code",{pre:!0},[s._v("vc-collection-primitive")]),s._v(" 组件用于加载常规图元集合。通常用的是 "),t("code",{pre:!0},[s._v("vc-viewer")]),s._v(" 初始化得到的 "),t("code",{pre:!0},[s._v("Viewer")]),s._v(" 实例自带的一个成员属性 "),t("code",{pre:!0},[s._v("Scene.primitives")]),s._v("。它可作为一切图元的父组件，如有需要也可以作为子集嵌套一层或多层再加载到 "),t("code",{pre:!0},[s._v("Scene.primitives")]),s._v("。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards1"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":billboards")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"billboards2"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive-billboard")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygons")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygons"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-model")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clicked"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":model-matrix")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":scale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"10000"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":minimum-pixel-size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"128"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":maximum-scale")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000"')]),s._v("\n        >")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-model")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-polygon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-polygon")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-primitive")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("{{ show ? '隐藏' : '显示' }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"show"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("data")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32")]),s._v("],\n          ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("34")]),s._v("],\n          ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("]\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards1")]),s._v(": [],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboards2")]),s._v(": [],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygons")]),s._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("115")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("37")]),s._v("],\n              ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("115")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32")]),s._v("],\n              ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("107")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("],\n              ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31")]),s._v("],\n              ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v("]\n            ],\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'MaterialAppearance'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'green'")]),s._v("\n              }\n            }\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n              { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42.0")]),s._v(" },\n              { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("42.0")]),s._v(" },\n              { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("104.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" }\n            ],\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'MaterialAppearance'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n              }\n            },\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("depthFailAppearance")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'MaterialAppearance'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'red'")]),s._v("\n              }\n            }\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("90.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("80.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("41.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v("],\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'MaterialAppearance'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v("\n              }\n            }\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("99")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("],\n                ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("],\n                ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v("],\n                ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("99")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v("]\n              ],\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n                {\n                  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                    ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("97")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31")]),s._v("],\n                    ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("97")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39")]),s._v("],\n                    ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("87")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("39")]),s._v("],\n                    ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("87")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31")]),s._v("]\n                  ],\n                  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n                    {\n                      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                        ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("],\n                        ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("89")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33")]),s._v("],\n                        ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("89")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("37")]),s._v("],\n                        ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("37")]),s._v("]\n                      ],\n                      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("holes")]),s._v(": [\n                        {\n                          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                            ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("93")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("34")]),s._v("],\n                            ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("91")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("34")]),s._v("],\n                            ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("91")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v("],\n                            ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("93")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("36")]),s._v("]\n                          ]\n                        }\n                      ]\n                    }\n                  ]\n                }\n              ]\n            },\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'MaterialAppearance'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'yellow'")]),s._v("\n              }\n            }\n          }\n        ]\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("ready")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("cesiumInstance")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v(", viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards1 = []\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" billboards2 = []\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("for")]),s._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("; i < "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("; i++) {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard1 = {}\n          billboard1."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(" = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard1."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("image")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard1."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scale")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          billboards1."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("(billboard1)\n\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" billboard2 = {}\n          billboard2."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("position")]),s._v(" = { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("85")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Math")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("random")]),s._v("() * "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("21")]),s._v(" }\n          billboard2."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("image")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n          billboard2."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("scale")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.15")]),s._v("\n          billboards2."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("push")]),s._v("(billboard2)\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("billboards1")]),s._v(" = billboards1\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("billboards2")]),s._v(" = billboards2\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("this")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("modelMatrix")]),s._v(" = "),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Transforms")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("eastNorthUpToFixedFrame")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-title class_"}},[s._v("Cesium")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-property"}},[s._v("Cartesian3")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("fromDegrees")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("38")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10000")]),s._v("))\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("clicked")]),s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("e")]),s._v(") {\n        "),t("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[s._v("console")]),s._v("."),t("span",{pre:!0,attrs:{class:"hljs-title function_"}},[s._v("log")]),s._v("(e)\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("show")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定图元集合中的图元是否显示。")])]),s._v(" "),t("tr",[t("td",[s._v("destroyPrimitives")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定移除图元集合时是否销毁集合中的图元。")])]),s._v(" "),t("tr",[t("td",[s._v("polygons")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("[]")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定面图元集合。 数组对象结构与 vc-polygon 组件属性相同。")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("参考官方文档："),a("strong",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/PrimitiveCollection.html"}},[this._v("PrimitiveCollection")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),t("tr",[t("td",[s._v("mousedown")]),s._v(" "),t("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标在该图元集合上按下时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mouseup")]),s._v(" "),t("td",[s._v("{button,surfacePosition,target,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标在该图元集合上弹起时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("click")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标单击该图元集合时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("clickout")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标单击该图元集合外部时触。")])]),s._v(" "),t("tr",[t("td",[s._v("dblclick")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标左键双击该图元集合时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mousemove")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标在该图元集合上移动时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mouseover")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标移动到该图元集合时触发。")])]),s._v(" "),t("tr",[t("td",[s._v("mouseout")]),s._v(" "),t("td",[s._v("{button,surfacePosition,pickedFeature,type,windowPosition}")]),s._v(" "),t("td",[s._v("鼠标移出该图元集合时触发。")])])])])}],!1,null,null,null);a.default=e.exports},cwaf:function(s,a,t){s.exports=t("9ZTi")}}]);
//# sourceMappingURL=211.a9a5943ceb3423e4a024.js.map