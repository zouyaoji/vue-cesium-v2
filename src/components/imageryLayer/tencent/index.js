/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 16:57:05
 * @LastEditTime: 2022-04-06 17:05:27
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\imageryLayer\tencent\index.js
 */

import TencentImageryProvider from './TencentImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TencentImageryProvider.name, TencentImageryProvider)
}

export default plugin

export {
  TencentImageryProvider,
  plugin as install
}
