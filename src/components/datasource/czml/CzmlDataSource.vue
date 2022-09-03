<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 14:42:45
 * @LastEditTime: 2022-09-03 09:51:26
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\datasource\czml\CzmlDataSource.vue
-->

<script>
import mixinDatasource from '../../../mixins/datasource/mixinDatasource'
export default {
  name: 'vc-datasource-czml',
  mixins: [mixinDatasource],
  props: {
    czml: {
      type: [String, Object, Array],
      required: true
    },
    options: Object
  },
  methods: {
    async createCesiumObject () {
      const { czml, options } = this
      return Cesium.CzmlDataSource.load(czml, options)
    }
  }
}
</script>
