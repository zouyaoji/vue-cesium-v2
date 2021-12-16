<template>
  <i :class="$options.name" style="display: none !important">
    <!-- 贴地 -->
    <vc-collection-primitive ref="groundPolylineCollection" v-if="clampToGround">
      <template v-for="(polyline, index) of polylines">
        <vc-primitive-polyline-ground
          :appearance="makeAppearance(polylineMaterial)"
          :arcType="arcType"
          :asynchronous="false"
          :key="index"
          v-if="polyline.positions.length > 1"
        >
          <vc-instance-geometry>
            <vc-geometry-polyline-ground :positions="polyline.positions" :width="polylineWidth"></vc-geometry-polyline-ground>
          </vc-instance-geometry>
        </vc-primitive-polyline-ground>
      </template>
    </vc-collection-primitive>
    <vc-collection-primitive-polyline ref="polylineCollection" :polylines="primitivePolylines" v-else></vc-collection-primitive-polyline>
    <vc-collection-primitive-point ref="pointCollection" :points="points"></vc-collection-primitive-point>
    <vc-collection-primitive-label ref="labelCollection" :labels="labels"></vc-collection-primitive-label>
  </i>
</template>
<script>
import mixinMeasure from '../../../mixins/tool/mixinMeasure'
import { makeMaterial } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-measure-distance',
  mixins: [mixinMeasure],
  data () {
    return {
      type: 'distanceMeasuring',
      measuring: false,
      polylines: []
    }
  },
  props: {
    arcType: {
      type: Number,
      default: 0
    },
    clampToGround: {
      type: Boolean,
      default: false
    },
    alongLine: {
      type: Boolean,
      default: true
    },
    removeLastPosition: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    clampToGround () {
      const { getDistance, polylines } = this
      polylines.forEach((polyline) => {
        const distances = [0]
        let totalDistance = 0
        for (let i = 0; i < polyline.positions.length - 1; i++) {
          const positions = [polyline.positions[i], polyline.positions[i + 1]]
          const distance = getDistance(positions)
          totalDistance += distance
          distances.push(totalDistance)
        }
        polyline.distances = distances
        polyline.distance = totalDistance
      })
    }
  },
  computed: {
    primitivePolylines () {
      const polylines = []
      this.polylines.forEach((item, index) => {
        const polyline = {
          material: this.polylineMaterial,
          positions: item.positions,
          width: this.polylineWidth,
          polylineIndex: index
        }
        polylines.push(polyline)
      })
      return polylines
    },
    labels () {
      const labels = []
      this.polylines.forEach((polyline, index) => {
        polyline.positions.forEach((position, subIndex) => {
          if (subIndex === polyline.positions.length - 1) {
            const label = {
              backgroundColor: this.backgroundColor,
              fillColor: this.fillColor,
              font: this.font,
              labelStyle: this.labelStyle,
              outlineColor: this.outlineColor,
              outlineWidth: this.outlineWidth,
              pixelOffset: this.pixelOffset,
              position: position,
              showBackground: this.showBackground,
              disableDepthTestDistance: Cesium.SuperMapVersion ? 0 : Number.POSITIVE_INFINITY,
              text: this.$vc.lang.measure.distance + ': ' + this.getDistanceText(polyline.distances[subIndex])
            }
            labels.push(label)
          }
          if (((subIndex !== polyline.positions.length - 1 && polyline.positions.length > 2 + subIndex) ||
                (polyline.positions.length > 2 + subIndex ||
                  (polyline.positions.length - 2 === subIndex && polyline.positions.length !== 2)) && this.alongLine)) {
            const label = {
              backgroundColor: this.backgroundColor,
              fillColor: this.fillColor,
              font: this.font,
              horizontalOrigin: 0,
              labelStyle: this.labelStyle,
              outlineColor: this.outlineColor,
              outlineWidth: this.outlineWidth,
              pixelOffset: this.pixelOffset,
              position: this.getMidPoistion(polyline.positions[subIndex], polyline.positions[subIndex + 1]),
              showBackground: this.showBackground,
              disableDepthTestDistance: Number.POSITIVE_INFINITY,
              text: this.getDistanceText(polyline.distances[subIndex + 1] - polyline.distances[subIndex]),
              verticalOrigin: 0
            }
            labels.push(label)
          }
        })
      })
      return labels
    }
  },
  methods: {
    getDistanceText (distance) {
      return distance > 1000 ? (distance / 1000).toFixed(2) + 'km' : distance.toFixed(2) + 'm'
    },
    getMidPoistion (left, right) {
      const { Cartesian3 } = Cesium
      return Cartesian3.midpoint(left, right, new Cartesian3())
    },
    clear () {
      this.polylines = []
      this.measuring = false
    },
    makeAppearance (val) {
      return new Cesium.PolylineMaterialAppearance({
        material: makeMaterial.call(this, val)
      })
    }
  }
}
</script>
