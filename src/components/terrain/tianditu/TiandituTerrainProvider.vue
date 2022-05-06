<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-26 11:06:19
 * @LastEditTime: 2022-04-26 11:47:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\terrain\tianditu\TiandituTerrainProvider.vue
-->
<script>
import mixinTerrainProvider from '../../../mixins/providers/mixinTerrainProvider'
import bindEvents from '../../../utils/bindEvent'
import { Events } from '../../../utils/events'

export default {
  name: 'VcProviderTerrainTianditu',
  mixins: [mixinTerrainProvider],
  props: {
    url: {
      type: String,
      default: 'https://{s}.tianditu.gov.cn/'
    },
    subdomains: {
      type: Array,
      default: () => ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']
    },
    pluginPath: {
      type: String,
      default: 'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'
    },
    dataType: {
      type: String,
      default: 'int',
      validator: (v) => ['int', 'float'].includes(v)
    },
    tileType: {
      type: String,
      default: 'heightmap',
      validator: (v) => ['heightmap', 'quantized-mesh'].includes(v)
    },
    token: String
  },
  methods: {
    /**
     * 重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const that = this
      const { unwatchFns, setPropWatchers, subdomains, pluginPath, token } = this
      return new Promise((resolve, reject) => {
        that.$script = document.createElement('script')
        document.body.appendChild(that.$script)
        that.$script.src = pluginPath
        that.$script.onload = () => {
          if (unwatchFns.length === 0) {
            setPropWatchers(true)
          }
          const terrainUrls = []

          for (let i = 0; i < subdomains.length; i++) {
            const url = this.url.replace('{s}', subdomains[i]) + 'mapservice/swdx?tk=' + token
            terrainUrls.push(url)
          }

          resolve(
            new Cesium.GeoTerrainProvider({
              urls: terrainUrls
            })
          )
        }
      })
    },
    async unmount () {
      const { viewer, terrainProvider } = this
      bindEvents.call(this, terrainProvider, Events['imagery-layer-events'], false)
      viewer.terrainProvider = new Cesium.EllipsoidTerrainProvider()
      this.$script?.parentNode.removeChild(this.$script)
      return true
    }
  }
}
</script>
