<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 16:57:05
 * @LastEditTime: 2022-04-06 17:29:20
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\imageryLayer\amap\AMapImageryProvider.vue
-->

<script>
import {
  ellipsoid,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  projectionTransforms
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
import AMapImageryProvider from '../../../exts/imageryProvider/AMapImageryProvider'
export default {
  name: 'vc-provider-imagery-amap',
  mixins: [ellipsoid, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, projectionTransforms, mixinImageryProvider],
  props: {
    url: {
      type: String,
      default:
        'https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}'
    },
    subdomains: {
      type: Array,
      default: () => ['01', '02', '03', '04']
    },
    domain: {
      type: String,
      default: 'webst'
    },
    lang: {
      type: String,
      default: 'zh_cn'
    },
    mapStyle: {
      // 地图类型控制，6卫星图（st），7简图（st rd），8详图（不透明rd，透明图st）
      type: String,
      default: '6'
    },
    scl: {
      // 尺寸控制，1=256,2=512
      type: String,
      default: '1'
    },
    ltype: {
      // 线性控制，只对地图要素进行控制，没有文字注记，要素多少，是否透明
      // 纯道路 ltype=11 mapStyle=8
      // 纯地标  ltype=4 mapStyle=8
      // 道路标注 ltype=0 mapStyle=8
      type: String,
      default: '0'
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps, setPropWatchers, unwatchFns } = this
      const options = transformProps($props)
      Cesium.AMapImageryProvider = AMapImageryProvider
      console.log('unwatchFns', unwatchFns)
      if (unwatchFns.length === 0) {
        setPropWatchers(true)
      }
      return new Cesium.AMapImageryProvider(options)
    }
  }
}
</script>
