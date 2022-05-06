<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-05-06 10:34:27
 * @LastEditTime: 2022-05-06 12:22:42
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\primitive\polygon\Polygon.vue
-->
<script>
import {
  show,
  id,
  positions,
  classificationType,
  polygonHierarchy,
  clampToGround,
  appearance,
  depthFailAppearance,
  ellipsoid,
  aaMixin
} from '../../../mixins/mixinProps'
import mixinPrimitiveCollectionItem from '../../../mixins/primitives/mixinPrimitiveCollectionItem'
import PolygonPrimitive from '../../../exts/PolygonPrimitive'
import { makeCartesian3Array, makePolygonHierarchy, makeAppearance } from '../../../utils/cesiumHelpers'
export default {
  name: 'vc-polygon',
  mixins: [
    show,
    id,
    positions,
    classificationType,
    polygonHierarchy,
    clampToGround,
    appearance,
    depthFailAppearance,
    ellipsoid,
    aaMixin,
    mixinPrimitiveCollectionItem
  ],
  watch: {
    clampToGround (val) {
      const polygonPrimitive = this.cesiumObject
      polygonPrimitive && (polygonPrimitive.clampToGround = val)
    },
    positions (val) {
      const polygonPrimitive = this.cesiumObject
      polygonPrimitive && (polygonPrimitive.positions = makeCartesian3Array(val))
    },
    polygonHierarchy (val) {
      const polygonPrimitive = this.cesiumObject
      polygonPrimitive && (polygonPrimitive.polygonHierarchy = makePolygonHierarchy(val))
    },
    appearance (val) {
      const polygonPrimitive = this.cesiumObject
      polygonPrimitive && (polygonPrimitive.appearance = makeAppearance.call(this, val))
    },
    depthFailAppearance (val) {
      const polygonPrimitive = this.cesiumObject
      polygonPrimitive && (polygonPrimitive.depthFailAppearance = makeAppearance.call(this, val))
    },
    show (val) {
      const polygonPrimitive = this.cesiumObject
      polygonPrimitive && (polygonPrimitive.classificationType = val)
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      return new PolygonPrimitive(options)
    },
    async mount () {
      const { primitives, primitive, registerEvents } = this
      registerEvents(true)
      primitive._vcParent = primitives
      return primitives && primitives.add(primitive)
    },
    async unmount () {
      const { primitives, primitive, registerEvents } = this
      registerEvents(false)
      return primitives && !primitives.isDestroyed() && primitives.remove(primitive)
    }
  }
}
</script>
