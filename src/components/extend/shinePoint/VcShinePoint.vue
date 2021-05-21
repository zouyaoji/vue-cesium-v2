<template>
  <i :class="$options.name" style="display: none !important">
    <vc-entity :position="position" ref="entity">
      <vc-graphics-point :color="callBackColor" :heightReference="2" :outlineWidth="0" :pixelSize="pixelSize" :show="show"></vc-graphics-point>
    </vc-entity>
  </i>
</template>

<script>
import cmp from '../../../mixins/virtualCmp'
import { position, color, show } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-shine-point',
  mixins: [cmp, position, color, show],
  props: {
    pixelSize: {
      type: Number,
      default: 10
    },
    deviationAlpha: {
      type: Number,
      default: 0.05
    }
  },
  data () {
    return {
      callBackColor: {}
    }
  },
  methods: {
    async createCesiumObject () {
      const { deviationAlpha, color } = this
      const colorObject = makeColor(color)
      this.flag = true
      this.x = 1
      this.callBackColor = () => {
        if (this.flag) {
          this.x -= deviationAlpha
          this.x <= 0 && (this.flag = false)
        } else {
          this.x += deviationAlpha
          this.x >= 1 && (this.flag = true)
        }
        return colorObject.withAlpha(this.x)
      }
      return this.$refs.entity
    },
    async mount () {
      return true
    },
    async unmount () {
      return this.$refs.entity && this.$refs.entity.unload()
    }
  },
  created () {
    Object.defineProperties(this, {
      entity: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
</script>
