<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 14:42:45
 * @LastEditTime: 2022-04-26 11:01:45
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
      type: String,
      default: '2'
    },
    ak: {
      type: String,
      default: 'E4805d16520de693a3fe707cdc962045'
    },
    subdomains: {
      type: Array,
      default: () => ['0', '1', '2', '3']
    },
    // https://lbsyun.baidu.com/custom/list.htm
    mapStyle: {
      type: String,
      default: 'vec' // img vec traffic normal light dark redalert googlelite grassgreen midnight pink darkgreen bluish grayscale hardedge
    },
    qt: {
      type: String,
      default: 'vtile' // tile vtile
    },
    styles: {
      type: String,
      default: 'pl' // pl sl
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
