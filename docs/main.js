/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-30 22:20:50
 * @LastEditTime: 2023-07-24 01:17:10
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\main.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'

import DocPreview from './components/DocPreview.vue'
import TextField from './components/TextField.vue'
import VueSlider from 'vue-slider-component'
import VueMaterial from 'vue-material'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'material-design-icons/iconfont/material-icons.css'
import './fonts/iconfont.css'
import 'vue-material/dist/vue-material.css'
import 'vue-slider-component/theme/default.css'
import AdSense from './components/AdSense.vue'

import * as VueCesium from '../src/index.js'
import { VcOverviewMap, VcNavigationSM } from '../src/index.js'
// import * as VueCesium from '../lib/index.js'
// import lang from '../lang/en-us'
// import '../lib/style.css'
// import '../lib/vc-navigation.css'
// import '../lib/vc-navigation-sm.css'
Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: '/static/Cesium/Cesium.js'
  // Online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  // cesiumPath: 'https://unpkg.com/cesium@1.54.0/Build/Cesium/Cesium.js',
  // cesiumPath: './statics/SupermapCesium/Cesium.js', // 超图
  // cesiumPath: './statics/EarthSDK/XbsjEarth/XbsjEarth.js', // CesiumLab EarthSDK
  // cesiumPath: './statics/Cesium/Cesium.js',
  // cesiumPath: './statics/CesiumUnminified/Cesium.js',
  cesiumPath: 'https://unpkg.com/cesium@1.100/Build/Cesium/Cesium.js',
  // lang: lang,
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjNzkyNWNlYi0xMzgxLTQwOTYtOTRhYS02ZTM4YjYwYWVjMzYiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODAzNDEyMn0.0MtHA4jjYQAtYyKjnKnzNziwkSmtLq8qiQqqPtiAfnA'
})
Vue.use(VcOverviewMap)
Vue.use(VcNavigationSM)

Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.material.registerTheme({
  white: {
    primary: 'white',
    accent: 'black'
  }
})

Vue.component('doc-preview', DocPreview)
Vue.component('text-field', TextField)
Vue.component('VueSlider', VueSlider)
Vue.component('AdSense', AdSense)

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

router.afterEach((route) => {
  Vue.nextTick(Prism.highlightAll)
})

export default new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
