<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 17:01:34
 * @LastEditTime: 2022-04-06 17:03:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\imageryLayer\tencent\TencentImageryProvider.vue
-->
<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 16:57:05
 * @LastEditTime: 2022-04-06 17:00:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\imageryLayer\amap\TencentImageryProvider.vue
-->

<script>
import {
  url,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  projectionTransforms
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
import TencentImageryProvider from '../../../exts/imageryProvider/TencentImageryProvider'
export default {
  name: 'vc-provider-imagery-tencent',
  mixins: [url, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, projectionTransforms, mixinImageryProvider],
  props: {
    ...url,
    subdomains: {
      type: Array,
      default: () => ['1', '2', '3']
    },
    mapStyle: {
      type: String,
      default: 'vector'
    },
    styleId: {
      // 1: 经典; 2: 标签; 3: 标签; 4: 墨渊; 8: 白浅; 9: 灰色;
      type: String,
      default: '1'
    },
    protocol: String
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, setPropWatchers, unwatchFns } = this
      const options = transformProps($props)
      Cesium.TencentImageryProvider = TencentImageryProvider
      if (unwatchFns.length === 0) {
        setPropWatchers(true)
      }
      return new Cesium.TencentImageryProvider(options)
    }
  }
}
</script>
