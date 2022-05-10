/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:23:38
 * @LastEditTime: 2022-05-10 22:14:09
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\mixins\primitives\mixinPrimitive.js
 */
/**
 * for
 * ClassificationPrimitive
 * GroundPolylinePrimitive
 * GroundPrimitive
 * Model
 * Cesium3DTileset
 * Primitive
 */
import cmp from '../virtualCmp'
import mergeDescriptors from '../../utils/mergeDescriptors'
import bindEvents from '../../utils/bindEvent'
import mixinPickEvent from '../event/mixinPickEvent'
import { getVmListenerName } from '../../utils/util'

const methods = {
  async mount () {
    const { primitives, primitive, registerEvents } = this
    primitive.readyPromise && primitive.readyPromise.then(primitive => {
      const listener = getVmListenerName.call(this, 'readyPromise')
      listener && this.$emit(listener, primitive, this.viewer)
    })
    bindEvents.call(this, primitive, undefined, true)
    registerEvents(true)
    primitive._vcParent = primitives
    return primitives && primitives.add(primitive)
  },
  async unmount () {
    const { primitives, primitive, registerEvents } = this
    this.childCount = 0
    this.instances = []
    bindEvents.call(this, primitive, undefined, false)
    registerEvents(false)
    return primitives && primitives.remove(primitive)
  },
  async setGeometryInstances (geometryInstance, index) {
    this.instances.push(geometryInstance)
    if (index === this.childCount - 1) {
      const listener = getVmListenerName.call(this, 'update:geometryInstances')
      if (listener) {
        this.$emit(listener, this.instances)
      } else {
        this.primitive.geometryInstances = index === 0 ? geometryInstance : this.instances
      }
    }
    return true
  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitive () {
        return vm.primitive
      },
      get primitiveContainer () {
        return vm
      }
    })
  }
}

export default {
  data () {
    return {
      childCount: 0,
      instances: []
    }
  },
  props: {
    enableEvent: {
      type: Boolean,
      default: true
    }
  },
  mixins: [cmp, mixinPickEvent],
  methods,
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      primitive: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      primitives: {
        enumerable: true,
        get: () => this.$services && this.$services.primitives
      },
      groundPrimitives: {
        enumerable: true,
        get: () => this.$services && this.$services.groundPrimitives
      }
    })
  }
}
