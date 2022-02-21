<script>
import { cutoutRectangle, colorToAlpha } from '../../mixins/mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import { getVmListenerName } from '../../utils/util'

export default {
  name: 'vc-layer-imagery',
  mixins: [cmp, cutoutRectangle, colorToAlpha],
  props: {
    imageryProvider: Object,
    rectangle: Object,
    alpha: {
      type: [Number, Function],
      default: 1.0
    },
    brightness: {
      type: [Number, Function],
      default: 1.0
    },
    contrast: {
      type: [Number, Function],
      default: 1.0
    },
    hue: {
      type: [Number, Function],
      default: 0.0
    },
    saturation: {
      type: [Number, Function],
      default: 1.0
    },
    gamma: {
      type: [Number, Function],
      default: 1.0
    },
    splitDirection: Number,
    minificationFilter: Number,
    magnificationFilter: Number,
    show: {
      type: Boolean,
      default: true
    },
    maximumAnisotropy: Number,
    minimumTerrainLevel: Number,
    maximumTerrainLevel: Number,
    colorToAlphaThreshold: {
      type: Number,
      default: 0.004
    },
    sortOrder: Number
  },
  methods: {
    /**
     * ImageryLayer 初始化方式较为特殊，这儿覆盖重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const { $props, transformProps, requiredArg } = this
      const options = transformProps($props)
      return new Cesium.ImageryLayer(requiredArg || {}, options)
    },
    async mount () {
      const { viewer, imageryLayer, sortOrder } = this
      imageryLayer.sortOrder = sortOrder
      viewer.imageryLayers.add(imageryLayer)
      return !this.viewer.isDestroyed() && viewer.imageryLayers.contains(imageryLayer)
    },
    async unmount () {
      const { viewer, imageryLayer } = this
      return !viewer.isDestroyed() && viewer.imageryLayers.remove(imageryLayer)
    },
    setProvider (provider) {
      if (undefined === provider) {
        this.unmount()
      } else {
        this.imageryLayer._imageryProvider = provider
        const listener = getVmListenerName.call(this, 'update:imageryProvider')
        if (listener) this.$emit(listener, provider)
      }

      return true
    },
    getServices () {
      const vm = this
      return mergeDescriptors(
        cmp.methods.getServices.call(this),
        {
          get imageryLayer () { return vm.imageryLayer },
          get providerContainer () { return vm }
        }
      )
    }
  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    this._provider = undefined
    Object.defineProperties(this, {
      imageryLayer: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      requiredArg: {
        enumerable: true,
        get: () => this.imageryProvider || this._provider
      }
    })
  }
}
</script>
