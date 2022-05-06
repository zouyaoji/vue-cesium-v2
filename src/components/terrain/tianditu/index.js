/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-26 11:05:59
 * @LastEditTime: 2022-04-26 11:05:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\terrain\tianditu\index.js
 */
import TiandituTerrainProvider from './TiandituTerrainProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TiandituTerrainProvider.name, TiandituTerrainProvider)
}

export default plugin

export {
  TiandituTerrainProvider,
  plugin as install
}
