/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:23:38
 * @LastEditTime: 2022-09-22 23:36:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\viewer\index.js
 */
import Viewer from './Viewer.vue'
import lang from '../../exts/lang'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  const $vc = {
    VERSION: 'C_PKG_VERSION',
    ...options
  }
  Vue.prototype.$vc = Vue.prototype.$vc || $vc
  if (!Vue.prototype.$vc.lang) {
    lang.install($vc, options.lang)
  }

  plugin.installed = true
  Vue.prototype._Cesium = () => options
  Vue.component(Viewer.name, Viewer)
}

export default plugin

export {
  Viewer,
  plugin as install
}
