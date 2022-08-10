<template>
  <vc-primitive-classification
    :asynchronous="false"
    ref="primitive"
  >
    <vc-instance-geometry :attributes="attributes">
      <vc-geometry-polygon :extrudedHeight="extrudedHeight" :polygonHierarchy="polygonHierarchy"></vc-geometry-polygon>
    </vc-instance-geometry>
  </vc-primitive-classification>
</template>
<script>
import cmp from '../../../mixins/virtualCmp'
import { polygonHierarchy } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
import { getVmListenerName } from '../../../utils/util'

export default {
  name: 'vc-analytics-flood',
  data () {
    return {
      attributes: undefined,
      extrudedHeight: -1
    }
  },
  mixins: [cmp, polygonHierarchy],
  props: {
    minHeight: {
      type: Number,
      default: -1
    },
    maxHeight: {
      type: Number,
      default: 8888
    },
    loop: {
      type: Boolean,
      default: false
    },
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
    minHeight (val) {
      this.extrudedHeight = val
    }
  },
  methods: {
    async createCesiumObject () {
      const { Cesium, color } = this
      const { ColorGeometryInstanceAttribute } = Cesium

      this.attributes = {
        color: ColorGeometryInstanceAttribute.fromColor(makeColor(color))
      }
      return true
    },
    async mount () {
      this.viewer.clock.onTick.addEventListener(this.onClockTick)
      return true
    },
    async unmount () {
      this.viewer.clock.onTick.removeEventListener(this.onClockTick)
      this.extrudedHeight = -1
      this.flooding = false
      return true
    },
    onClockTick (e) {
      if (this.flooding) {
        if (this.extrudedHeight <= this.maxHeight) {
          this.extrudedHeight += this.speed
          this.stoped = false
        } else {
          const listener = getVmListenerName.call(this, 'stop')
          listener && this.$emit('stop', this.$refs.primitive)
          this.stoped = true
          if (this.loop) {
            this.extrudedHeight = this.minHeight
          } else {
            this.flooding = false
          }
        }
      }
    },
    start (height) {
      this.extrudedHeight = Cesium.defined(height) ? height : this.minHeight
      this.flooding = true
    },
    pause () {
      this.flooding = !this.flooding
      if (this.stoped) {
        this.extrudedHeight = this.minHeight
      }
    },
    stop () {
      this.extrudedHeight = -1
      this.flooding = false
    }
  }
}
</script>
