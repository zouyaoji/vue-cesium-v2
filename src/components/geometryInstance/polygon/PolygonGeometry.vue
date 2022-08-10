<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-08-09 10:36:41
 * @LastEditTime: 2022-08-10 20:10:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\geometryInstance\polygon\PolygonGeometry.vue
-->
<script>
import { ellipsoid, vertexFormat, polygonHierarchy } from '../../../mixins/mixinProps'
import mixinPolygon from '../../../mixins/graphics/mixinPolygon'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polygon',
  mixins: [polygonHierarchy, mixinPolygon, ellipsoid, vertexFormat, mixinGeometry]
}
</script>
