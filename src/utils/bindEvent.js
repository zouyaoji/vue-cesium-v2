/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 00:33:35
 * @LastEditTime: 2022-02-21 23:26:49
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\utils\bindEvent.js
 */
import { warn } from './log'
import { Events } from './events'
import { toKebabCase } from './util'
import { camelCase } from 'lodash-es'
/**
 * 将 Cesium 对象事件注册为 Vue 组件事件。
 * @param {Object} instance Cesium 对象。
 * @param {Array} eventList 该 Cesium 对象的事件数组。
 * @param {Boolean} flag true 注册事件，false 注销事件。
 */
export default function (instance, eventList, flag = true) {
  const ev = eventList || Events[toKebabCase(this.$options.name)]
  ev &&
    ev.forEach((eventName) => {
      if (instance && instance[eventName]) {
        const listener =
          this.$listeners[eventName] ||
          this.$listeners[toKebabCase(eventName)] ||
          this.$listeners[camelCase(eventName)] ||
          this.$listeners[eventName.toLowerCase()]
        const methodName = flag ? 'addEventListener' : 'removeEventListener'
        listener && instance[eventName][methodName](listener.fns)
      } else if (process.env.VUECESIUM_DEBUG) {
        warn('Add event linstener of ' + eventName + ' failed, try to upgrade Cesium to latest version.')
      }
    })
}
