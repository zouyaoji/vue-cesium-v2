<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-08-09 10:36:41
 * @LastEditTime: 2022-08-09 11:49:11
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\primitive\Primitive.vue
-->
<script>
import {
  vcMixin,
  modelMatrix,
  shadows,
  geometryInstances,
  appearance,
  depthFailAppearance,
  show,
  interleave,
  releaseGeometryInstances,
  aaMixin,
  classificationType,
  debugShowBoundingVolume,
  debugShowShadowVolume
} from '../../mixins/mixinProps'
import mixinPrimitive from '../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive',
  mixins: [
    vcMixin,
    modelMatrix,
    shadows,
    geometryInstances,
    appearance,
    depthFailAppearance,
    show,
    interleave,
    releaseGeometryInstances,
    aaMixin,
    classificationType,
    debugShowBoundingVolume,
    debugShowShadowVolume,
    mixinPrimitive
  ],
  props: {
    cull: {
      type: Boolean,
      default: true
    }
  }
}
</script>
