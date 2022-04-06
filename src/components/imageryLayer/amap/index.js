/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 16:57:05
 * @LastEditTime: 2022-04-06 17:01:19
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\imageryLayer\amap\index.js
 */

import AMapImageryProvider from './AMapImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(AMapImageryProvider.name, AMapImageryProvider)
}

export default plugin

export {
  AMapImageryProvider,
  plugin as install
}
