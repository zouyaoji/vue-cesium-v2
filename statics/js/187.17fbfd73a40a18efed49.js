(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{"5kEa":function(s,a,t){"use strict";t.r(a);var r={data:function(){return{animation:!0,timeline:!0,baseLayerPicker:!1,fullscreenButton:!0,infoBox:!0,fullscreenElement:document.body,tk:"436ce7e50d27eede2f2929307e6b33c0",cesiumPath:"./statics/EarthSDK/XbsjEarth/XbsjEarth.js"}},mounted:function(){this.$refs.vcViewer.createPromise.then((function(s){s.Cesium,s.viewer;console.log("viewer is loaded.")}))},methods:{ready:function(s){var a=s.Cesium,t=s.viewer,r=s.earth;t.scene.globe.depthTestAgainstTerrain=!0,t.scene.globe.enableLighting=!0,this.fullscreenElement=this.$refs.viewerContainer,t.entities.add({id:"成都欢迎你",position:a.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new a.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",scale:.1}),label:new a.LabelGraphics({text:"Hello Cesium",font:"24px sans-serif",horizontalOrigin:1,outlineColor:new a.Color(0,0,0,1),outlineWidth:2,pixelOffset:new a.Cartesian2(17,-5),style:a.LabelStyle.FILL})}),r.sceneTree.root={expand:!0,title:"预览场景",children:[{ref:"polyline1",czmObject:{xbsjType:"Polyline",positions:[[1.6049052178907162,.4547675537396452,0],[2.266206367018494,.4857724702174004,-5.6841204016160695e-9],[2.8083374819013205,.9842980731992482,-6.859619106471648e-9]]}},{czmObject:{name:"默认影像",xbsjType:"Imagery",xbsjImageryProvider:XE.Obj.Imagery.defaultImageryProviderConfig}}]};var e=r.sceneTree.$refs.polyline1.czmObject;r.camera.position=[1.9801824720243058,.5645924417726427,8556103.623693792],r.camera.rotation=[26645352591003757e-31,-1.5694528555019995,0],e.width=4}}},e=t("JFUb"),n=Object(e.a)(r,(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("EarthSDK 例子")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("用 EarthSDK 加载 vc-viewer 组件")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{ref:"viewerContainer",staticClass:"viewer"},[t("vc-viewer",{ref:"vcViewer",attrs:{animation:s.animation,baseLayerPicker:s.baseLayerPicker,timeline:s.timeline,cesiumPath:s.cesiumPath,fullscreenButton:s.fullscreenButton,fullscreenElement:s.fullscreenElement,infoBox:s.infoBox},on:{ready:s.ready}},[t("vc-navigation"),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:s.tk}})],1),s._v(" "),t("vc-layer-imagery",{ref:"layerText"},[t("vc-provider-imagery-tianditu",{attrs:{mapStyle:"cia_c",token:s.tk}})],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("动画部件")]),s._v(" "),t("md-switch",{model:{value:s.animation,callback:function(a){s.animation=a},expression:"animation"}}),s._v(" "),t("span",[s._v("时间轴部件")]),s._v(" "),t("md-switch",{model:{value:s.timeline,callback:function(a){s.timeline=a},expression:"timeline"}}),s._v(" "),t("span",[s._v("基础图层拾取器")]),s._v(" "),t("md-switch",{model:{value:s.baseLayerPicker,callback:function(a){s.baseLayerPicker=a},expression:"baseLayerPicker"}}),s._v(" "),t("span",[s._v("全屏按钮")]),s._v(" "),t("md-switch",{model:{value:s.fullscreenButton,callback:function(a){s.fullscreenButton=a},expression:"fullscreenButton"}}),s._v(" "),t("span",[s._v("信息提示框")]),s._v(" "),t("md-switch",{model:{value:s.infoBox,callback:function(a){s.infoBox=a},expression:"infoBox"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(3),s._v(" "),t("hr"),s._v(" "),s._m(4)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("使用 CesiumLab 的 EarthSDK 开发时只需要在引入 vue-cesium 时通过配置项 "),a("code",{pre:!0},[this._v("cesiumPath")]),this._v(" 指定为 EarthSDK 路径即可:")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("Vue.use(VueCesium, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/EarthSDK/XbsjEarth/XbsjEarth.js'")]),s._v("\n})\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 如果是局部引入，也可以这样:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" { Viewer } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-cesium'")]),s._v("\nVue.use(Viewer, {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/EarthSDK/XbsjEarth/XbsjEarth.js'")]),s._v("\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("或者是直接在 "),t("code",{pre:!0},[s._v("vc-viewer")]),s._v(" 组件上指定 "),t("code",{pre:!0},[s._v("cesiumPath")]),s._v(" 属性，需要"),t("strong",[s._v("注意")]),s._v("的是如果要使用 EarthSDK API，只能用 EarthSDK 的方法加载才行，不能放入 Cesium 原生的方法中的。"),t("code",{pre:!0},[s._v("vc-viewer")]),s._v(" 加载成功会返回 { Cesium, viewer, earth }, 通过该 "),t("code",{pre:!0},[s._v("earth")]),s._v(" 进行相关开发即可， 如下面的例子：")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewerContainer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vcViewer"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":baseLayerPicker")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baseLayerPicker"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":cesiumPath")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cesiumPath"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreenButton")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fullscreenElement")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenElement"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":infoBox")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"infoBox"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v("\n    >")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tk"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layerText"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cia_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tk"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("动画部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("时间轴部件"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("基础图层拾取器"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"baseLayerPicker"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("全屏按钮"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fullscreenButton"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("信息提示框"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"infoBox"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("baseLayerPicker")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenButton")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("infoBox")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fullscreenElement")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("document")]),s._v(".body,\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tk")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'436ce7e50d27eede2f2929307e6b33c0'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cesiumPath")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'./statics/EarthSDK/XbsjEarth/XbsjEarth.js'")]),s._v("\n      }\n    },\n    mounted() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.vcViewer.createPromise.then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer }")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'viewer is loaded.'")]),s._v(")\n      })\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer, earth } = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer.scene.globe.enableLighting = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".fullscreenElement = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.viewerContainer\n        viewer.entities.add({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'成都欢迎你'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": Cesium.Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.BillboardGraphics({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n          }),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.LabelGraphics({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Cesium'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'24px sans-serif'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("horizontalOrigin")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Color("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("),\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("outlineWidth")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("17")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-5")]),s._v("),\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": Cesium.LabelStyle.FILL\n          })\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 下面是 earth sdk 提供的方法")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 1.1.2 场景配置")]),s._v("\n        earth.sceneTree.root = {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("expand")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'预览场景'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'polyline1'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("czmObject")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("xbsjType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Polyline'")]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n                  ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.6049052178907162")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4547675537396452")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("],\n                  ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.266206367018494")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.4857724702174004")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-5.6841204016160695e-9")]),s._v("],\n                  ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.8083374819013205")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.9842980731992482")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-6.859619106471648e-9")]),s._v("]\n                ]\n              }\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("czmObject")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'默认影像'")]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("xbsjType")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Imagery'")]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("xbsjImageryProvider")]),s._v(": XE.Obj.Imagery.defaultImageryProviderConfig\n              }\n            }\n          ]\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" polyline1 = earth.sceneTree.$refs.polyline1.czmObject\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 1.1.3 设置相机位置")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// earth.camera.position.toString()和earth.camera.toAllJSONStr()这两个方法可获取相机位置")]),s._v("\n        earth.camera.position = ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.9801824720243058")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5645924417726427")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("8556103.623693792")]),s._v("]\n        earth.camera.rotation = ["),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.6645352591003757e-15")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1.5694528555019995")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("]\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 1.1.3 设置初始值")]),s._v("\n        polyline1.width = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v("\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("参考西部世界 EarthSDK 在线示例： "),a("a",{attrs:{href:"http://earthsdk.com/v/last/Apps/Examples/?menu=true&url=./startup-createEarth.html"}},[this._v("示例集合")])])])}],!1,null,null,null);a.default=n.exports},xUKg:function(s,a,t){s.exports=t("5kEa")}}]);
//# sourceMappingURL=187.17fbfd73a40a18efed49.js.map