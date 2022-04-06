<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 14:42:45
 * @LastEditTime: 2022-04-06 16:38:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\imageryLayer\baidu\BaiduMapImageryProvider.vue
-->
<script>
import { url, ellipsoid, tileDiscardPolicy, credit, minimumLevel, maximumLevel } from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
import BaiduMapImageryProvider from '../../../exts/imageryProvider/BaiduMapImageryProvider'
export default {
  name: 'vc-provider-imagery-baidumap',
  mixins: [url, ellipsoid, tileDiscardPolicy, credit, minimumLevel, maximumLevel, mixinImageryProvider],
  props: {
    protocol: {
      type: String,
      default: 'https'
    },
    projectionTransforms: {
      type: [Boolean, Object],
      default: () => {
        return {
          from: 'BD09',
          to: 'WGS84'
        }
      }
    },
    scale: {
      type: Number,
      default: 1
    },
    ak: {
      type: String,
      default: 'E4805d16520de693a3fe707cdc962045'
    },
    // https://lbsyun.baidu.com/custom/list.htm
    customid: {
      type: String,
      default: 'normal' // img vec traffic normal light dark redalert googlelite grassgreen midnight pink darkgreen bluish grayscale hardedge
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, setPropWatchers, unwatchFns } = this
      const options = transformProps($props)
      Cesium.BaiduMapImageryProvider = BaiduMapImageryProvider
      if (unwatchFns.length === 0) {
        setPropWatchers(true)
      }
      return new Cesium.BaiduMapImageryProvider(options)
    }
  }
}
</script>
