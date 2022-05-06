/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-05-06 10:34:27
 * @LastEditTime: 2022-05-06 10:34:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\primitive\polygon\index.js
 */
import Polygon from './Polygon.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Polygon.name, Polygon)
}

export default plugin

export {
  Polygon,
  plugin as install
}
