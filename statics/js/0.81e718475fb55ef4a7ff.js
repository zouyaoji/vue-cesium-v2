/*! For license information please see 0.81e718475fb55ef4a7ff.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,i){i("Kw5r"),i("jE9Z"),i("wZee"),e.exports=i("Q/mQ")},"5Es9":function(e,t,i){"use strict";i.r(t);var n=i("NRCh"),r=i("Hyea"),a={isoName:"en-us",nativeName:"English (US)",measure:{distance:"Distance",area:"Area",horizontalDistance:"HD",spaceDistance:"SD",verticalHeight:"VH"},draw:{drawingTip1:"Click the left button to draw the starting point.",drawingTip2:"Click the left button to draw the next point, and click the right button to end the drawing.",drawingTip3:"Click to end editing.",editingMove:"Move",editingInsert:"Insert",editingDelete:"Delete"},navigation:{compass:{description:"Drag outer ring: rotate view.\nDrag inner gyroscope: free orbit.\nDouble-click: reset view.\nTIP: You can also free orbit by holding the CTRL key and dragging the map.",title:"Click and drag to rotate the camera"},zoomCotrol:{zoomIn:"Zoom in",zoomReset:"Reset zoom",zoomOut:"Zoom out"},legend:{lat:"Lat",lon:"Lon",zone:"ZONE",e:"E",n:"N",elev:"Elev",cameraHeight:"CameraH"},printView:"Printing to share your map with others",centreMap:"Centre map at your current location"},overviewmap:{show:"Show",hidden:"Hidden"}},o=i("Lu1Z"),m={components:{Navigator:r.default,RootFrame:n.default},data:function(){return{lang:"zh"}},mounted:function(){var e=this;document.addEventListener("click",(function(t){"toZh"===t.target.id?e.lang="zh":"toEn"===t.target.id&&(e.lang="en")})),this.$router.afterEach((function(t){e.$nextTick((function(){[].filter.call(e.$el.getElementsByTagName("table"),(function(e){return!~e.parentNode.classList.value.indexOf("md-table")})).forEach((function(e){e.outerHTML='<div class="doc-table md-table md-theme-default md-whiteframe md-whiteframe-1dp">'.concat(e.outerHTML,"</div>")}))}));var i=e.$route.meta||{};e.lang=i.lang,e.$vc.lang.set("zh"===e.lang?o.a:a)}))},computed:{isIndex:function(){return"/"===this.$route.fullPath}}},c=i("JFUb");var p=function(e){i("cFWu")},l=Object(c.a)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isIndex?i("router-view"):i("root-frame",{staticClass:"root",attrs:{lang:e.lang},on:{"update:lang":function(t){e.lang=t}}},[i("navigator",{attrs:{slot:"side-nav",lang:e.lang},slot:"side-nav"}),i("router-view",{staticClass:"doc markdown-body",attrs:{slot:"page-content"},slot:"page-content"})],1)],1)}),[],!1,p,null,null);t.default=l.exports},DJCJ:function(e,t,i){},Hyea:function(e,t,i){"use strict";i.r(t);var n=i("XXOK"),r=i.n(n),a=i("ZrdR"),o={props:["lang"],computed:{routeMap:function(){var e=[],t=!0,i=!1,n=void 0;try{for(var o,m=r()(a.a);!(t=(o=m.next()).done);t=!0){var c=o.value;(!c.meta||c.meta&&!c.meta.hidden&&c.meta.lang===this.lang)&&e.push(c)}}catch(e){i=!0,n=e}finally{try{t||null==m.return||m.return()}finally{if(i)throw n}}return e}}},m=i("JFUb"),c=Object(m.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("md-list",[e._l(e.routeMap,(function(t,n){return t.name?[i("md-list-item",{key:n,attrs:{"md-expand-multiple":"md-expand-multiple"}},[i("span",{domProps:{textContent:e._s(t.name)}}),i("md-list-expand",[i("md-list",[e._l(t.children,(function(n,r){return[i("md-list-item",{key:r,staticClass:"md-inset",attrs:{"md-expand-multiple":"md-expand-multiple"}},[i("router-link",{attrs:{to:t.path+"/"+n.path},domProps:{textContent:e._s(n.name)}})],1)]}))],2)],1)],1)]:e._e()})),i("md-list-item",[i("a",{attrs:{href:"https://zouyaoji.top/vue-cesium-v1"}},[e._v(e._s("en"===this.lang?"v1 document":"v1 文档"))])]),i("md-list-item",[i("a",{attrs:{href:"https://zouyaoji.top/vue-cesium"}},[e._v("for vue 3.x")])])],2)}),[],!1,null,null,null);t.default=c.exports},Lkhb:function(e,t,i){"use strict";i.r(t);var n=i("JFUb"),r=Object(n.a)(null,(function(){var e=this.$createElement;return(this._self._c||e)("md-whiteframe",[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},Lu1Z:function(e,t,i){"use strict";t.a={isoName:"zh-hans",nativeName:"中文(简体)",measure:{distance:"距离",area:"面积",horizontalDistance:"水平距离",spaceDistance:"空间距离",verticalHeight:"垂直高度"},draw:{drawingTip1:"单击左键绘制起点。",drawingTip2:"单击左键绘制下一个点，单击右键结束绘制。",drawingTip3:"单击结束编辑。",editingMove:"移动节点",editingInsert:"插入节点",editingDelete:"删除节点"},navigation:{compass:{description:"拖拽罗盘外环: 旋转视图。\n拖拽罗盘陀螺仪: 翻转视图。\n双击罗盘: 重置视图。\n提示: 您也可以通过按住Ctrl键的同时拖拽地图来改变地图倾角。",title:"旋转相机"},zoomCotrol:{zoomIn:"放大",zoomReset:"重置视图",zoomOut:"缩小"},legend:{lat:"纬度",lon:"经度",zone:"带号",e:"X",n:"Y",elev:"高程",cameraHeight:"相机高度"},printView:"打印分享",centreMap:"定位您的位置"},overviewmap:{show:"显示鹰眼",hidden:"隐藏鹰眼"}}},NRCh:function(e,t,i){"use strict";i.r(t);var n={props:["lang"],data:function(){return{title:this.$route.name}},computed:{otherLang:function(){return"zh"===this.lang?"en":"zh"},otherUrl:function(){return-1!==this.$route.path.indexOf("/zh/")?this.$route.path.replace("/zh/","/en/"):this.$route.path.replace("/en/","/zh/")}},mounted:function(){var e=this;this.$router.afterEach((function(t){document.body.scrollTop=0,e.title=t.name}))},methods:{onDonorClick:function(){this.$router.push({name:"zh"===this.lang?"赞助":"Donations"})}}},r=i("JFUb");var a=function(e){i("DJCJ")},o=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("md-whiteframe",{staticClass:"top",attrs:{"md-tag":"md-toolbar"}},[i("div",{staticClass:"md-toolbar-container"},[i("md-button",{staticClass:"menu-button md-icon-button",on:{click:function(t){return e.$refs.sidenav.toggle()}}},[i("md-icon",[e._v("menu")])],1),i("span",{staticClass:"md-title",domProps:{textContent:e._s(e.title)}},[e._v("VUE CESIUM")]),i("md-button",{on:{click:e.onDonorClick}},[e._v(e._s("zh"===e.lang?"赞助":"Donations"))]),i("md-button",{staticClass:"md-icon-button"},[i("router-link",{staticClass:"link",attrs:{to:e.otherUrl}}),i("md-icon",{attrs:{"md-iconset":"iconfont icon-zhongyingwenqiehuan-xianshizhongyingwen"}})],1),i("md-button",{staticClass:"md-icon-button",attrs:{href:"https://github.com/zouyaoji/vue-cesium-v2"}},[i("md-icon",{attrs:{"md-iconset":"iconfont icon-github"}})],1)],1)]),i("md-sidenav",{ref:"sidenav",staticClass:"md-left md-fixed main-nav"},[i("md-toolbar",{staticClass:"logo",attrs:{"md-theme":"white"}},[i("router-link",{staticClass:"link",attrs:{to:"/"}},[i("img",{attrs:{src:"//zouyaoji.top/vue-cesium/favicon.png"}}),i("div",[e._v("Vue Cesium")])])],1),e._t("side-nav")],2),i("div",{staticClass:"page-content"},[e._t("page-content")],2)],1)}),[],!1,a,"data-v-10359526",null);t.default=o.exports},"OR7/":function(e,t,i){var n={"./en/control/vc-map-overview.md":["DKPp",10],"./en/control/vc-navigation-sm.md":["czav",11],"./en/control/vc-navigation.md":["76du",12],"./en/datasource/vc-datasource-custom.md":["8sRc",0,1,13],"./en/datasource/vc-datasource-czml.md":["f4P5",14],"./en/datasource/vc-datasource-geojson.md":["xFCK",15],"./en/datasource/vc-datasource-kml.md":["HQzq",16],"./en/donations.md":["Ccdf",17],"./en/entity/vc-entity.md":["60rK",18],"./en/entity/vc-graphics-billboard.md":["+ju6",19],"./en/entity/vc-graphics-box.md":["/HbB",0,1,20],"./en/entity/vc-graphics-corridor.md":["iZ9s",0,1,21],"./en/entity/vc-graphics-cylinder.md":["zakd",0,1,22],"./en/entity/vc-graphics-ellipse.md":["Qe9M",0,1,23],"./en/entity/vc-graphics-ellipsoid.md":["kH6G",0,1,24],"./en/entity/vc-graphics-label.md":["eNfN",25],"./en/entity/vc-graphics-model.md":["9y0t",0,1,26],"./en/entity/vc-graphics-path.md":["4VM1",0,1,27],"./en/entity/vc-graphics-plane.md":["Q7ch",0,1,28],"./en/entity/vc-graphics-point.md":["7Rmz",0,1,29],"./en/entity/vc-graphics-polygon.md":["EdzW",0,1,30],"./en/entity/vc-graphics-polyline-volume.md":["xgkD",0,1,31],"./en/entity/vc-graphics-polyline.md":["AzLo",32],"./en/entity/vc-graphics-rectangle.md":["7BS7",0,1,33],"./en/entity/vc-graphics-wall.md":["u9d0",0,1,34],"./en/extend/vc-analytics-flood.md":["YzRr",35],"./en/extend/vc-circle-roatating-double.md":["Pd3y",36],"./en/extend/vc-heatmap.md":["DqqB",37],"./en/extend/vc-kriging-map.md":["IEg6",0,1,38],"./en/extend/vc-overlay-html.md":["QXo7",0,1,7],"./en/extend/vc-ripple-circle-double.md":["wxKz",39],"./en/extend/vc-scan-circle.md":["8din",40],"./en/extend/vc-scan-radar.md":["kRmL",41],"./en/extend/vc-shine-ellipse.md":["fVHy",42],"./en/extend/vc-shine-point.md":["Qp56",43],"./en/extend/vc-trail-polyline.md":["K4gb",0,1,44],"./en/extend/vc-trail-wall.md":["xQIA",45],"./en/extend/vc-windmap.md":["n6+e",0,1,46],"./en/geometry/vc-geometry-box.md":["g5LB",0,1,47],"./en/geometry/vc-geometry-circle.md":["ozrR",0,1,48],"./en/geometry/vc-geometry-corridor.md":["oAcF",0,1,49],"./en/geometry/vc-geometry-cylinder.md":["MsPG",0,1,50],"./en/geometry/vc-geometry-ellipse.md":["clVv",0,1,51],"./en/geometry/vc-geometry-ellipsoid.md":["+44k",0,1,52],"./en/geometry/vc-geometry-frustum.md":["VLu/",0,1,53],"./en/geometry/vc-geometry-plane.md":["SwFK",0,1,54],"./en/geometry/vc-geometry-polygon-coplanar.md":["Bx3V",0,1,55],"./en/geometry/vc-geometry-polygon.md":["75V0",0,1,56],"./en/geometry/vc-geometry-polyline-ground.md":["vD6O",57],"./en/geometry/vc-geometry-polyline-simple.md":["OxhV",58],"./en/geometry/vc-geometry-polyline-volume.md":["EfHr",0,1,59],"./en/geometry/vc-geometry-polyline.md":["msut",60],"./en/geometry/vc-geometry-rectangle.md":["dOcf",0,1,61],"./en/geometry/vc-geometry-sphere.md":["Av0V",0,1,62],"./en/geometry/vc-geometry-wall.md":["3YsV",0,1,63],"./en/geometry/vc-instance-geometry.md":["8fNn",64],"./en/imageryLayer/vc-layer-imagery.md":["fukg",65],"./en/imageryLayer/vc-provider-imagery-arcgis-mapserver.md":["CXWu",66],"./en/imageryLayer/vc-provider-imagery-baidumap.md":["Afqi",67],"./en/imageryLayer/vc-provider-imagery-bingmaps.md":["dYJP",68],"./en/imageryLayer/vc-provider-imagery-grid.md":["AEBS",69],"./en/imageryLayer/vc-provider-imagery-ion.md":["PKlA",70],"./en/imageryLayer/vc-provider-imagery-mapbox.md":["Sm/d",71],"./en/imageryLayer/vc-provider-imagery-openstreetmap.md":["UD2P",72],"./en/imageryLayer/vc-provider-imagery-style-mapbox.md":["K1AZ",73],"./en/imageryLayer/vc-provider-imagery-supermap.md":["CDA4",74],"./en/imageryLayer/vc-provider-imagery-tianditu.md":["l4NV",75],"./en/imageryLayer/vc-provider-imagery-tile-coordinates.md":["8lw0",76],"./en/imageryLayer/vc-provider-imagery-tile-mapservice.md":["adDD",77],"./en/imageryLayer/vc-provider-imagery-tile-single.md":["GzpK",78],"./en/imageryLayer/vc-provider-imagery-tiledcache.md":["At3B",79],"./en/imageryLayer/vc-provider-imagery-urltemplate.md":["hTsN",80],"./en/imageryLayer/vc-provider-imagery-wms.md":["Agkg",81],"./en/imageryLayer/vc-provider-imagery-wmts.md":["ZLY8",82],"./en/index.md":["f2D8",83],"./en/other/vc-collection-stage-process-post.md":["0J3K",84],"./en/other/vc-demo-earthsdk.md":["lJAN",85],"./en/other/vc-demo-supermap.md":["twin",86],"./en/other/vc-stage-process-post.md":["5HAo",87],"./en/primitive/vc-primitive-billboard.md":["dJ0v",88],"./en/primitive/vc-primitive-classification.md":["tv5H",89],"./en/primitive/vc-primitive-ground.md":["r/cq",90],"./en/primitive/vc-primitive-label.md":["P3y7",91],"./en/primitive/vc-primitive-model.md":["tUP5",92],"./en/primitive/vc-primitive-particle.md":["20DZ",93],"./en/primitive/vc-primitive-point.md":["U4Hc",94],"./en/primitive/vc-primitive-polyline-ground.md":["Zw1l",95],"./en/primitive/vc-primitive-polyline.md":["6ykZ",96],"./en/primitive/vc-primitive-tileset.md":["xl0T",97],"./en/primitive/vc-primitive.md":["b14Y",98],"./en/primitives/vc-collection-primitive-billboard.md":["TuWJ",99],"./en/primitives/vc-collection-primitive-label.md":["O7mD",100],"./en/primitives/vc-collection-primitive-point.md":["eYa3",101],"./en/primitives/vc-collection-primitive-polyline.md":["/oJf",0,1,102],"./en/primitives/vc-collection-primitive.md":["KKDk",103],"./en/start/base.md":["rFHi",104],"./en/start/installation.md":["edSP",105],"./en/start/usage.md":["pvX3",0,1,4],"./en/terrain/vc-provider-terrain-arcgis-tiled-elevation.md":["9art",106],"./en/terrain/vc-provider-terrain-cesium.md":["xM0P",107],"./en/tool/vc-drawing.md":["fq2i",108],"./en/tool/vc-measuring.md":["BDny",109],"./en/viewer/vc-viewer.md":["nRaW",110],"./zh/control/vc-map-overview.md":["O/1+",111],"./zh/control/vc-navigation-sm.md":["bLj0",112],"./zh/control/vc-navigation.md":["xHQM",113],"./zh/datasource/vc-datasource-custom.md":["ntSI",114],"./zh/datasource/vc-datasource-czml.md":["drRm",115],"./zh/datasource/vc-datasource-geojson.md":["8J93",116],"./zh/datasource/vc-datasource-kml.md":["xFyx",117],"./zh/donations.md":["vuR9",118],"./zh/entity/vc-entity.md":["TSzH",119],"./zh/entity/vc-graphics-billboard.md":["2m0g",120],"./zh/entity/vc-graphics-box.md":["CO08",0,1,121],"./zh/entity/vc-graphics-corridor.md":["w6Qn",0,1,122],"./zh/entity/vc-graphics-cylinder.md":["iNmt",0,1,123],"./zh/entity/vc-graphics-ellipse.md":["GSrc",0,1,124],"./zh/entity/vc-graphics-ellipsoid.md":["nBjc",0,1,125],"./zh/entity/vc-graphics-label.md":["jAZM",126],"./zh/entity/vc-graphics-model.md":["gU0A",0,1,127],"./zh/entity/vc-graphics-path.md":["xzaq",0,1,128],"./zh/entity/vc-graphics-plane.md":["73oM",0,1,129],"./zh/entity/vc-graphics-point.md":["Q4Jm",0,1,130],"./zh/entity/vc-graphics-polygon.md":["Xs3i",0,1,131],"./zh/entity/vc-graphics-polyline-volume.md":["LOMs",0,1,132],"./zh/entity/vc-graphics-polyline.md":["pu8j",133],"./zh/entity/vc-graphics-rectangle.md":["I1Lu",0,1,134],"./zh/entity/vc-graphics-tileset.md":["cIia",135],"./zh/entity/vc-graphics-wall.md":["kBIa",0,1,136],"./zh/extend/vc-analytics-flood.md":["uHFS",137],"./zh/extend/vc-circle-roatating-double.md":["MHW0",138],"./zh/extend/vc-heatmap.md":["wMBu",139],"./zh/extend/vc-kriging-map.md":["Vqcz",0,1,140],"./zh/extend/vc-overlay-html.md":["o7G9",0,1,6],"./zh/extend/vc-ripple-circle-double.md":["LWPp",141],"./zh/extend/vc-scan-circle.md":["hmge",142],"./zh/extend/vc-scan-radar.md":["I4IR",143],"./zh/extend/vc-shine-ellipse.md":["CBVP",144],"./zh/extend/vc-shine-point.md":["0pdU",145],"./zh/extend/vc-trail-polyline.md":["9ojG",0,1,146],"./zh/extend/vc-trail-wall.md":["UF4i",147],"./zh/extend/vc-windmap.md":["lVUz",0,1,148],"./zh/geometry/vc-geometry-box.md":["d7K+",0,1,149],"./zh/geometry/vc-geometry-circle.md":["POJ7",0,1,150],"./zh/geometry/vc-geometry-corridor.md":["2zcI",0,1,151],"./zh/geometry/vc-geometry-cylinder.md":["OhAt",0,1,152],"./zh/geometry/vc-geometry-ellipse.md":["JaGO",0,1,153],"./zh/geometry/vc-geometry-ellipsoid.md":["lOXC",0,1,154],"./zh/geometry/vc-geometry-frustum.md":["SLVY",0,1,155],"./zh/geometry/vc-geometry-plane.md":["Twdx",0,1,156],"./zh/geometry/vc-geometry-polygon-coplanar.md":["XWG2",0,1,157],"./zh/geometry/vc-geometry-polygon.md":["F7KL",0,1,158],"./zh/geometry/vc-geometry-polyline-ground.md":["pe2I",159],"./zh/geometry/vc-geometry-polyline-simple.md":["v0eI",160],"./zh/geometry/vc-geometry-polyline-volume.md":["2ClI",0,1,161],"./zh/geometry/vc-geometry-polyline.md":["EA1F",162],"./zh/geometry/vc-geometry-rectangle.md":["bCne",0,1,163],"./zh/geometry/vc-geometry-sphere.md":["ErLW",0,1,164],"./zh/geometry/vc-geometry-wall.md":["6H6W",0,1,165],"./zh/geometry/vc-instance-geometry.md":["lilW",166],"./zh/imageryLayer/vc-layer-imagery.md":["tJRU",167],"./zh/imageryLayer/vc-provider-imagery-arcgis-mapserver.md":["alXt",168],"./zh/imageryLayer/vc-provider-imagery-baidumap.md":["mzAY",169],"./zh/imageryLayer/vc-provider-imagery-bingmaps.md":["puBn",170],"./zh/imageryLayer/vc-provider-imagery-grid.md":["mua1",171],"./zh/imageryLayer/vc-provider-imagery-ion.md":["ARmH",172],"./zh/imageryLayer/vc-provider-imagery-mapbox.md":["+m8i",173],"./zh/imageryLayer/vc-provider-imagery-openstreetmap.md":["jzZv",174],"./zh/imageryLayer/vc-provider-imagery-style-mapbox.md":["C4G3",175],"./zh/imageryLayer/vc-provider-imagery-supermap.md":["gGOn",176],"./zh/imageryLayer/vc-provider-imagery-tianditu.md":["qJyf",177],"./zh/imageryLayer/vc-provider-imagery-tile-coordinates.md":["m5Ik",178],"./zh/imageryLayer/vc-provider-imagery-tile-mapservice.md":["tptU",179],"./zh/imageryLayer/vc-provider-imagery-tile-single.md":["LEL7",180],"./zh/imageryLayer/vc-provider-imagery-tiledcache.md":["tycf",181],"./zh/imageryLayer/vc-provider-imagery-urltemplate.md":["SEKG",182],"./zh/imageryLayer/vc-provider-imagery-wms.md":["9cSN",183],"./zh/imageryLayer/vc-provider-imagery-wmts.md":["Gkq+",184],"./zh/index.md":["Rzvx",185],"./zh/other/vc-collection-stage-process-post.md":["1DV0",186],"./zh/other/vc-demo-earthsdk.md":["xUKg",187],"./zh/other/vc-demo-supermap.md":["MoDi",188],"./zh/other/vc-stage-process-post.md":["7xZW",189],"./zh/primitive/vc-primitive-billboard.md":["HDiw",190],"./zh/primitive/vc-primitive-classification.md":["q0Tn",191],"./zh/primitive/vc-primitive-ground.md":["FVCW",192],"./zh/primitive/vc-primitive-label.md":["j22j",193],"./zh/primitive/vc-primitive-model.md":["7dMU",194],"./zh/primitive/vc-primitive-particle.md":["ULfo",195],"./zh/primitive/vc-primitive-point.md":["r34X",196],"./zh/primitive/vc-primitive-polyline-ground.md":["/8wu",197],"./zh/primitive/vc-primitive-polyline.md":["OoCW",198],"./zh/primitive/vc-primitive-tileset.md":["mfmA",199],"./zh/primitive/vc-primitive.md":["KZi6",200],"./zh/primitives/vc-collection-primitive-billboard.md":["j/RI",201],"./zh/primitives/vc-collection-primitive-label.md":["Hb1w",202],"./zh/primitives/vc-collection-primitive-point.md":["TWVk",203],"./zh/primitives/vc-collection-primitive-polyline.md":["oyP/",0,1,204],"./zh/primitives/vc-collection-primitive.md":["cwaf",205],"./zh/start/base.md":["AN9I",206],"./zh/start/installation.md":["4zM+",207],"./zh/start/usage.md":["7m2+",0,1,5],"./zh/terrain/vc-provider-terrain-arcgis-tiled-elevation.md":["oYS6",208],"./zh/terrain/vc-provider-terrain-cesium.md":["ydeH",209],"./zh/tool/vc-drawing.md":["j8Y8",210],"./zh/tool/vc-measuring.md":["y9Xj",211],"./zh/viewer/vc-viewer.md":["ZfB7",212]};function r(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i.t(r,7)}))}r.keys=function(){return Object.keys(n)},r.id="OR7/",e.exports=r},QXc7:function(e,t,i){"use strict";i.r(t);var n=i("JFUb");var r=function(e){i("Ss8Y")},a=Object(n.a)({computed:{href:function(){return"https://github.com/zouyaoji/vue-cesium-v2/blob/master/docs/md"+this.$route.path+".md"},caughtMistake:function(){return-1!==this.$route.path.indexOf("/zh/")?"发现错误？":"Caught a mistake?"},editOnGithub:function(){return-1!==this.$route.path.indexOf("/zh/")?"在 GitHub 上编辑此页！":"Edit this page on GitHub!"}}},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("router-view"),t("h3",[t("div",[this._v(this._s(this.caughtMistake)),t("a",{attrs:{href:this.href,target:"_blank"}},[this._v(" "+this._s(this.editOnGithub))])])])],1)}),[],!1,r,null,null);t.default=a.exports},RPgb:function(e,t,i){},Ss8Y:function(e,t,i){},ZrdR:function(e,t,i){"use strict";var n=i("dfwq"),r=i("UXZV"),a=i.n(r),o=i("QXc7"),m=i("JFUb");var c=function(e){i("RPgb")},p=Object(m.a)(null,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"index"},[t("div",{staticClass:"content"},[t("img",{attrs:{src:"//zouyaoji.top/vue-cesium/favicon.png"}}),t("h1",[this._v("Vue Cesium")]),t("div",{staticClass:"links"},[t("router-link",{attrs:{id:"toZh",to:"/zh/index"}},[this._v("中文")]),t("router-link",{attrs:{id:"toEn",to:"/en/index"}},[this._v("English")])],1)])])}),[],!1,c,"data-v-41220b1c",null).exports,l=[{path:"index",name:{zh:"文档",en:"Documentation"},component:"index",meta:{hidden:!0}},{path:"donations",name:{zh:"赞助",en:"Donations"},component:"donations",meta:{hidden:!0}},{path:"start",component:o.default,name:{zh:"开始",en:"Get Start"},children:[{path:"installation",component:"start/installation",name:{zh:"安装",en:"Installation"}},{path:"usage",component:"start/usage",name:{zh:"快速上手",en:"Usage"}},{path:"base",component:"start/base",name:{zh:"基础",en:"Base"}}]},{path:"viewer",name:{zh:"视图",en:"Viewer"},component:o.default,children:[{path:"vc-viewer",component:"viewer/vc-viewer",name:{zh:"场景视图",en:"Viewer Instance"}}]},{path:"imageryLayer",name:{zh:"影像",en:"Imagery"},component:o.default,children:[{path:"vc-layer-imagery",component:"imageryLayer/vc-layer-imagery",name:{zh:"影像图层",en:"ImageryLayer"}},{path:"vc-provider-imagery-arcgis-mapserver",component:"imageryLayer/vc-provider-imagery-arcgis-mapserver",name:{zh:"ArcGISMapServer地图",en:"ArcGisMapServerImageryProvider"}},{path:"vc-provider-imagery-bingmaps",component:"imageryLayer/vc-provider-imagery-bingmaps",name:{zh:"BingMaps地图",en:"BingMapsImageryProvider"}},{path:"vc-provider-imagery-grid",component:"imageryLayer/vc-provider-imagery-grid",name:{zh:"经纬格网地图",en:"GridImageryProvider"}},{path:"vc-provider-imagery-ion",component:"imageryLayer/vc-provider-imagery-ion",name:{zh:"CesiumIon地图",en:"IonImageryProvider"}},{path:"vc-provider-imagery-mapbox",component:"imageryLayer/vc-provider-imagery-mapbox",name:{zh:"Mapbox地图",en:"MapboxImageryProvider"}},{path:"vc-provider-imagery-style-mapbox",component:"imageryLayer/vc-provider-imagery-style-mapbox",name:{zh:"MapboxStyle地图",en:"MapboxStyleImageryProvider"}},{path:"vc-provider-imagery-openstreetmap",component:"imageryLayer/vc-provider-imagery-openstreetmap",name:{zh:"OpenStreetMap地图",en:"OpenStreetMapImageryProvider"}},{path:"vc-provider-imagery-tile-single",component:"imageryLayer/vc-provider-imagery-tile-single",name:{zh:"Singletile地图",en:"SingleTileImageryProvider"}},{path:"vc-provider-imagery-tile-coordinates",component:"imageryLayer/vc-provider-imagery-tile-coordinates",name:{zh:"TileCoordinates地图",en:"TileCoordinatesImageryProvider"}},{path:"vc-provider-imagery-tile-mapservice",component:"imageryLayer/vc-provider-imagery-tile-mapservice",name:{zh:"TileMapService地图",en:"TileMapServiceImageryProvider"}},{path:"vc-provider-imagery-urltemplate",component:"imageryLayer/vc-provider-imagery-urltemplate",name:{zh:"UrlTemplate地图",en:"UrlTemplateImageryProvider"}},{path:"vc-provider-imagery-wms",component:"imageryLayer/vc-provider-imagery-wms",name:{zh:"WMS地图",en:"WebMapServiceImageryProvider"}},{path:"vc-provider-imagery-wmts",component:"imageryLayer/vc-provider-imagery-wmts",name:{zh:"WMTS地图",en:"WebMapTileServiceImageryProvider"}},{path:"vc-provider-imagery-tianditu",component:"imageryLayer/vc-provider-imagery-tianditu",name:{zh:"天地图",en:"TiandituImageryProvider"}},{path:"vc-provider-imagery-baidumap",component:"imageryLayer/vc-provider-imagery-baidumap",name:{zh:"百度地图",en:"BaiduMapImageryProvider"}},{path:"vc-provider-imagery-supermap",component:"imageryLayer/vc-provider-imagery-supermap",name:{zh:"SuperMap影像",en:"SuperMapImageryProvider"}},{path:"vc-provider-imagery-tiledcache",component:"imageryLayer/vc-provider-imagery-tiledcache",name:{zh:"TiledCache影像",en:"TiledCacheImageryProvider"}}]},{path:"terrain",name:{zh:"地形",en:"Terrain"},component:o.default,children:[{path:"vc-provider-terrain-cesium",component:"terrain/vc-provider-terrain-cesium",name:{zh:"Cesium地形",en:"CesiumTerrainProvider"}},{path:"vc-provider-terrain-arcgis-tiled-elevation",component:"terrain/vc-provider-terrain-arcgis-tiled-elevation",name:{zh:"ArcGISTiledElevation地形",en:"ArcGISTiledElevationTerrainProvider"}}]},{path:"datasource",name:{zh:"数据源",en:"Datasource"},component:o.default,children:[{path:"vc-datasource-custom",component:"datasource/vc-datasource-custom",name:{zh:"Custom数据源",en:"CustomDataSource"}},{path:"vc-datasource-czml",component:"datasource/vc-datasource-czml",name:{zh:"Czml数据源",en:"CzmlDataSource"}},{path:"vc-datasource-geojson",component:"datasource/vc-datasource-geojson",name:{zh:"GeoJson数据源",en:"GeoJsonDataSource"}},{path:"vc-datasource-kml",component:"datasource/vc-datasource-kml",name:{zh:"Kml数据源",en:"KmlDataSource"}}]},{path:"entity",name:{zh:"实体",en:"Entity"},component:o.default,children:[{path:"vc-entity",component:"entity/vc-entity",name:{zh:"实体实例",en:"Entity Instance"}},{path:"vc-graphics-billboard",component:"entity/vc-graphics-billboard",name:{zh:"布告板实体",en:"BillboardGraphics"}},{path:"vc-graphics-box",component:"entity/vc-graphics-box",name:{zh:"盒子实体",en:"BoxGraphics"}},{path:"vc-graphics-corridor",component:"entity/vc-graphics-corridor",name:{zh:"走廊实体",en:"CorridorGraphics"}},{path:"vc-graphics-cylinder",component:"entity/vc-graphics-cylinder",name:{zh:"圆柱（锥、台）实体",en:"CylinderGraphics"}},{path:"vc-graphics-ellipse",component:"entity/vc-graphics-ellipse",name:{zh:"椭圆实体",en:"EllipseGraphics"}},{path:"vc-graphics-ellipsoid",component:"entity/vc-graphics-ellipsoid",name:{zh:"(椭)球实体",en:"EllipsoidGraphics"}},{path:"vc-graphics-label",component:"entity/vc-graphics-label",name:{zh:"标签实体",en:"LabelGraphics"}},{path:"vc-graphics-model",component:"entity/vc-graphics-model",name:{zh:"模型实体",en:"ModelGraphics"}},{path:"vc-graphics-path",component:"entity/vc-graphics-path",name:{zh:"路径实体",en:"PathGraphics"}},{path:"vc-graphics-plane",component:"entity/vc-graphics-plane",name:{zh:"平面实体",en:"PlaneGraphics"}},{path:"vc-graphics-point",component:"entity/vc-graphics-point",name:{zh:"点实体",en:"PointGraphics"}},{path:"vc-graphics-polygon",component:"entity/vc-graphics-polygon",name:{zh:"多边形实体",en:"PolygonGraphics"}},{path:"vc-graphics-polyline",component:"entity/vc-graphics-polyline",name:{zh:"多段线实体",en:"PolylineGraphics"}},{path:"vc-graphics-polyline-volume",component:"entity/vc-graphics-polyline-volume",name:{zh:"多段线柱实体",en:"PolylineVolumeGraphics"}},{path:"vc-graphics-rectangle",component:"entity/vc-graphics-rectangle",name:{zh:"矩形实体",en:"RectangleGraphics"}},{path:"vc-graphics-wall",component:"entity/vc-graphics-wall",name:{zh:"围墙实体",en:"WallGraphics"}}]},{path:"primitives",name:{zh:"图元集合",en:"Primitives"},component:o.default,children:[{path:"vc-collection-primitive",component:"primitives/vc-collection-primitive",name:{zh:"普通图元集合",en:"PrimitiveCollection"}},{path:"vc-collection-primitive-billboard",component:"primitives/vc-collection-primitive-billboard",name:{zh:"布告板图元集合",en:"BillboardCollection"}},{path:"vc-collection-primitive-label",component:"primitives/vc-collection-primitive-label",name:{zh:"标签图元集合",en:"LabelCollection"}},{path:"vc-collection-primitive-point",component:"primitives/vc-collection-primitive-point",name:{zh:"点图元集合",en:"PointPrimitiveCollection"}},{path:"vc-collection-primitive-polyline",component:"primitives/vc-collection-primitive-polyline",name:{zh:"线图元集合",en:"PolylineCollection"}}]},{path:"primitive",name:{zh:"图元",en:"Primitive"},component:o.default,children:[{path:"vc-primitive",component:"primitive/vc-primitive",name:{zh:"普通图元",en:"VcPrimitive"}},{path:"vc-primitive-ground",component:"primitive/vc-primitive-ground",name:{zh:"贴地图元",en:"GroundPrimitive"}},{path:"vc-primitive-classification",component:"primitive/vc-primitive-classification",name:{zh:"分类图元",en:"ClassificationPrimitive"}},{path:"vc-primitive-billboard",component:"primitive/vc-primitive-billboard",name:{zh:"布告板图元",en:"Billboard"}},{path:"vc-primitive-label",component:"primitive/vc-primitive-label",name:{zh:"标签图元",en:"Label"}},{path:"vc-primitive-point",component:"primitive/vc-primitive-point",name:{zh:"点图元",en:"PointPrimitive"}},{path:"vc-primitive-polyline",component:"primitive/vc-primitive-polyline",name:{zh:"线图元",en:"PolylinePrimitive"}},{path:"vc-primitive-polyline-ground",component:"primitive/vc-primitive-polyline-ground",name:{zh:"贴地线图元",en:"GroundPolylinePrimitive"}},{path:"vc-primitive-model",component:"primitive/vc-primitive-model",name:{zh:"模型图元",en:"Model"}},{path:"vc-primitive-tileset",component:"primitive/vc-primitive-tileset",name:{zh:"Tileset图元",en:"Cesium3DTileset"}},{path:"vc-primitive-particle",component:"primitive/vc-primitive-particle",name:{zh:"粒子系统",en:"ParticleSystem"}}]},{path:"geometry",name:{zh:"几何体",en:"geometry"},component:o.default,children:[{path:"vc-instance-geometry",component:"geometry/vc-instance-geometry",name:{zh:"几何体实例",en:"GeometryInstance"}},{path:"vc-geometry-box",component:"geometry/vc-geometry-box",name:{zh:"立方体",en:"BoxGeometry"}},{path:"vc-geometry-circle",component:"geometry/vc-geometry-circle",name:{zh:"圆形",en:"CircleGeometry"}},{path:"vc-geometry-polygon-coplanar",component:"geometry/vc-geometry-polygon-coplanar",name:{zh:"共面多边形",en:"CoplanarPolygonGeometry"}},{path:"vc-geometry-corridor",component:"geometry/vc-geometry-corridor",name:{zh:"廊体",en:"CorridorGeometry"}},{path:"vc-geometry-cylinder",component:"geometry/vc-geometry-cylinder",name:{zh:"圆柱体",en:"CylinderGeometry"}},{path:"vc-geometry-ellipse",component:"geometry/vc-geometry-ellipse",name:{zh:"椭圆",en:"EllipseGeometry"}},{path:"vc-geometry-ellipsoid",component:"geometry/vc-geometry-ellipsoid",name:{zh:"椭球体",en:"EllipsoidGeometry"}},{path:"vc-geometry-frustum",component:"geometry/vc-geometry-frustum",name:{zh:"视锥体",en:"FrustumGeometry"}},{path:"vc-geometry-polyline-ground",component:"geometry/vc-geometry-polyline-ground",name:{zh:"贴地多段线",en:"GroundPolylineGeometry"}},{path:"vc-geometry-plane",component:"geometry/vc-geometry-plane",name:{zh:"平面",en:"PlaneGeometry"}},{path:"vc-geometry-polygon",component:"geometry/vc-geometry-polygon",name:{zh:"多边形",en:"PolygonGeometry"}},{path:"vc-geometry-polyline",component:"geometry/vc-geometry-polyline",name:{zh:"多段线",en:"PolylineGeometry"}},{path:"vc-geometry-polyline-volume",component:"geometry/vc-geometry-polyline-volume",name:{zh:"多段线柱体",en:"PolylineVolumeGeometry"}},{path:"vc-geometry-rectangle",component:"geometry/vc-geometry-rectangle",name:{zh:"矩形",en:"RectangleGeometry"}},{path:"vc-geometry-polyline-simple",component:"geometry/vc-geometry-polyline-simple",name:{zh:"线段",en:"SimplePolylineGeometry"}},{path:"vc-geometry-sphere",component:"geometry/vc-geometry-sphere",name:{zh:"球体",en:"SphereGeometry"}},{path:"vc-geometry-wall",component:"geometry/vc-geometry-wall",name:{zh:"围墙",en:"WallGeometry"}}]},{path:"tool",component:o.default,name:{zh:"工具",en:"Tool"},children:[{path:"vc-drawing",component:"tool/vc-drawing",name:{zh:"绘制",en:"Drawing"}},{path:"vc-measuring",component:"tool/vc-measuring",name:{zh:"量算",en:"Measuring"}}]},{path:"control",component:o.default,name:{zh:"控件",en:"Control"},children:[{path:"vc-navigation",component:"control/vc-navigation",name:{zh:"导航",en:"VcNavigation"}},{path:"vc-navigation-sm",component:"control/vc-navigation-sm",name:{zh:"导航-sm",en:"VcNavigationSM"}},{path:"vc-map-overview",component:"control/vc-map-overview",name:{zh:"鹰眼",en:"VcOverviewMap"}}]},{path:"extend",component:o.default,name:{zh:"扩展",en:"Extend"},children:[{path:"vc-heatmap",component:"extend/vc-heatmap",name:{zh:"热力图",en:"VcHeatMap"}},{path:"vc-kriging-map",component:"extend/vc-kriging-map",name:{zh:"克里金色斑图",en:"VcKrigingMap"}},{path:"vc-windmap",component:"extend/vc-windmap",name:{zh:"风向图",en:"VcWindMap"}},{path:"vc-analytics-flood",component:"extend/vc-analytics-flood",name:{zh:"淹没分析",en:"VcFloodAnalysis"}},{path:"vc-scan-circle",component:"extend/vc-scan-circle",name:{zh:"圆形扫描",en:"VcScanCircle"}},{path:"vc-scan-radar",component:"extend/vc-scan-radar",name:{zh:"雷达扫描",en:"VcScanRadar"}},{path:"vc-ripple-circle-double",component:"extend/vc-ripple-circle-double",name:{zh:"双圆涟漪",en:"VcDoubleCircleRipple"}},{path:"vc-circle-roatating-double",component:"extend/vc-circle-roatating-double",name:{zh:"双圆旋转",en:"VcDoubleRotatingCircle"}},{path:"vc-shine-ellipse",component:"extend/vc-shine-ellipse",name:{zh:"闪圆",en:"VcShineEllipse"}},{path:"vc-shine-point",component:"extend/vc-shine-point",name:{zh:"闪点",en:"VcShinePoint"}},{path:"vc-trail-polyline",component:"extend/vc-trail-polyline",name:{zh:"流动线",en:"VcPolylineTrail"}},{path:"vc-trail-wall",component:"extend/vc-trail-wall",name:{zh:"流动墙",en:"VcWallTrail"}},{path:"vc-overlay-html",component:"extend/vc-overlay-html",name:{zh:"HTML元素",en:"VcHTMLOverlay"}}]},{path:"other",component:o.default,name:{zh:"其他",en:"Other"},children:[{path:"vc-collection-stage-process-post",component:"other/vc-collection-stage-process-post",name:{zh:"后处理集合",en:"PostProcessStageCollection"}},{path:"vc-stage-process-post",component:"other/vc-stage-process-post",name:{zh:"后处理",en:"PostProcessStage"}},{path:"vc-demo-supermap",component:"other/vc-demo-supermap",name:{zh:"超图例子",en:"SuperMap Demo"}},{path:"vc-demo-earthsdk",component:"other/vc-demo-earthsdk",name:{zh:"EarthSDK例子",en:"EarthSDK Demo"}}]}];t.a=[{path:"/",component:p},{path:"/zh/issues",name:"缺陷",component:function(){return Promise.all([i.e(0),i.e(1),i.e(8)]).then(i.bind(null,"yYJS"))},meta:{lang:"zh",hidden:!0}},{path:"/en/issues",name:"ISSUE",component:function(){return Promise.all([i.e(0),i.e(1),i.e(9)]).then(i.bind(null,"KTwv"))},meta:{lang:"en",hidden:!0}}].concat(Object(n.a)(["zh","en"].reduce((function(e,t){return e.concat(function e(t,n,r){return t.reduce((function(t,o){var m={path:r?o.path:"/".concat(n,"/").concat(o.path),name:o.name[n],component:"string"==typeof o.component?function(){return i("OR7/")("./".concat(n,"/").concat(o.component,".md"))}:o.component,meta:a()({lang:n},o.meta),children:e(o.children||[],n,!0)};return t.push(m),t}),[])}(l,t))}),[])))},cFWu:function(e,t,i){}}]);
//# sourceMappingURL=0.81e718475fb55ef4a7ff.js.map