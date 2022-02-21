<template>
  <i :class="$options.name" style="display: none !important">
    <vc-primitive-classification
      :asynchronous="false"
      :show="extrudedHeight !== 0"
      ref="primitive"
    >
      <vc-instance-geometry :attributes="attributes">
        <vc-geometry-polygon :extrudedHeight="extrudedHeight" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon>
      </vc-instance-geometry>
    </vc-primitive-classification>
  </i>
</template>
<script>
import cmp from '../../../mixins/virtualCmp'
import { makeColor } from '../../../utils/cesiumHelpers'
import { getVmListenerName } from '../../../utils/util'

export default {
  name: 'vc-analytics-flood',
  data () {
    return {
      attributes: null,
      extrudedHeight: 0.1,
      flooding: false,
      show: false
    }
  },
  mixins: [cmp],
  props: {
    minHeight: {
      type: Number,
      default: 0
    },
    maxHeight: Number,
    polygonHierarchy: Array,
    speed: {
      type: Number,
      default: 10
    },
    color: {
      type: [Object, Array, String],
      default: 'rgba(40,150,200,0.6)'
    }
  },
  watch: {
    flooding (val) {
      const listener = getVmListenerName.call(this, 'activeEvt')
      if (val) {
        if (this.floodDone) {
          this.extrudedHeight = this.extrudedHeight >= this.minHeight ? this.minHeight : 0.1
          this.floodDone = false
        }
        this.viewer.clock.onTick.addEventListener(this.onTick)
        listener && this.$emit(listener, { isActive: val })
        this.show = true
      } else {
        this.viewer.clock.onTick.removeEventListener(this.onTick)
        listener && this.$emit(listener, { isActive: val })
      }
    },
    minHeight (val) {
      this.extrudedHeight = val
    }
  },
  methods: {
    async createCesiumObject () {
      const { Cesium, minHeight, color } = this
      const { ColorGeometryInstanceAttribute } = Cesium

      this.attributes = {
        color: ColorGeometryInstanceAttribute.fromColor(makeColor(color))
      }
      this.extrudedHeight = minHeight
      return true
    },
    onTick (e) {
      const { maxHeight, speed } = this
      if (this.extrudedHeight < maxHeight) {
        this.extrudedHeight += speed
        const listener = getVmListenerName.call(this, 'tickEvt')
        listener && this.$emit(listener, { clock: e, extrudedHeight: this.extrudedHeight })
      } else {
        this.floodDone = true
        this.flooding = false
      }
    },
    clear () {
      this.extrudedHeight = 0
    },
    async mount () {
      return true
    },
    async unmount () {
      this.extrudedHeight = this.minHeight
      this.flooding = false
    }
  }
}
</script>
