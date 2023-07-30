(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{"7xZW":function(t,s,e){t.exports=e("V3hY")},V3hY:function(t,s,e){"use strict";e.r(s);var a=e("JFUb"),r=Object(a.a)({data:function(){return{fragmentShader:"\n        uniform sampler2D colorTexture;\n        varying vec2 v_textureCoordinates;\n        float hash(float x){\n          return fract(sin(x*23.3)*13.13);\n        }\n        void main(void){\n          float time = czm_frameNumber / 60.0;\n          vec2 resolution = czm_viewport.zw;\n          vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n          vec3 c=vec3(.6,.7,.8);\n          float a=-.4;\n          float si=sin(a),co=cos(a);\n          uv*=mat2(co,-si,si,co);\n          uv*=length(uv+vec2(0,4.9))*.3+1.;\n          float v=1.-sin(hash(floor(uv.x*100.))*2.);\n          float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n          c*=v*b;\n          gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n        }  "}},methods:{ready:function(t){this.cesiumInstance=t;var s=this.cesiumInstance;s.Cesium,s.viewer}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("html",[e("head"),e("body",[e("h1",[t._v("后期处理")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载后期处理的着色器")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-stage-process-post",{attrs:{"fragment-shader":t.fragmentShader}})],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(3)],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-stage-process-post")]),this._v(" 组件用于加载一组后期处理，如加载自定义着色器。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-stage-process-post")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":fragment-shader")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fragmentShader"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-stage-process-post")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"language-javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("data")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(") {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("fragmentShader")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("`\n          uniform sampler2D colorTexture;\n          varying vec2 v_textureCoordinates;\n          float hash(float x){\n            return fract(sin(x*23.3)*13.13);\n          }\n          void main(void){\n            float time = czm_frameNumber / 60.0;\n            vec2 resolution = czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 c=vec3(.6,.7,.8);\n            float a=-.4;\n            float si=sin(a),co=cos(a);\n            uv*=mat2(co,-si,si,co);\n            uv*=length(uv+vec2(0,4.9))*.3+1.;\n            float v=1.-sin(hash(floor(uv.x*100.))*2.);\n            float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n            c*=v*b;\n            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n          }  `")]),t._v("\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      "),e("span",{pre:!0,attrs:{class:"hljs-title function_"}},[t._v("ready")]),t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("cesiumInstance")]),t._v(") {\n        "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("cesiumInstance")]),t._v(" = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { "),e("span",{pre:!0,attrs:{class:"hljs-title class_"}},[t._v("Cesium")]),t._v(", viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-variable language_"}},[t._v("this")]),t._v("."),e("span",{pre:!0,attrs:{class:"hljs-property"}},[t._v("cesiumInstance")]),t._v("\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("fragmentShader")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定着色器代码。")])]),t._v(" "),e("tr",[e("td",[t._v("uniforms")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定着色器 uniforms 参数。uniform变量一般用来表示：变换矩阵，材质，光照参数和颜色等信息。")])]),t._v(" "),e("tr",[e("td",[t._v("textureScale")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定纹理尺寸缩放比例，取值范围 (0.0, 1.0] 。")])]),t._v(" "),e("tr",[e("td",[t._v("forcePowerOfTwo")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 是否强制将纹理尺寸都等于2的幂。 2的幂将是最小维度中2的下一个幂。")])]),t._v(" "),e("tr",[e("td",[t._v("sampleMode")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定输入颜色纹理的采样方式。 "),e("strong",[t._v("{NEAREST: 0, LINEAR: 1}")])])]),t._v(" "),e("tr",[e("td",[t._v("pixelFormat")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定输出纹理的像素格式。")])]),t._v(" "),e("tr",[e("td",[t._v("pixelDatatype")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定输出纹理的数据类型。")])]),t._v(" "),e("tr",[e("td",[t._v("clearColor")]),t._v(" "),e("td",[t._v("Object|Array|String")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("BLACK")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定清除输出纹理的颜色。")])]),t._v(" "),e("tr",[e("td",[t._v("scissorRectangle")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定用于测试的矩形。")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定唯一名称，未提供默认生成GUID。")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])])])])}],!1,null,null,null);s.default=r.exports}}]);
//# sourceMappingURL=195.9808331f0d33b6db4174.js.map