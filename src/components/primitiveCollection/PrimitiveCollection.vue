<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 14:42:45
 * @LastEditTime: 2022-05-06 13:40:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\primitiveCollection\PrimitiveCollection.vue
-->
<script>
import { show } from '../../mixins/mixinProps'
import mixinPrimitiveCollection from '../../mixins/primitives/mixinPrimitiveCollection'
import PolygonPrimitive from '../../exts/PolygonPrimitive'
import { addCustomProperty } from '../../utils/util'
import { differenceBy } from 'lodash-es'

export default {
  name: 'vc-collection-primitive',
  mixins: [show, mixinPrimitiveCollection],
  props: {
    destroyPrimitives: {
      type: Boolean,
      default: true
    },
    polygons: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    polygons: {
      handler: function (newVal, oldVal) {
        if (!this.mounted) {
          return
        }
        const { transformProp, collection: primitiveCollection } = this
        if (newVal.length === oldVal.length) {
          // 视为修改操作
          // Treated as modified
          const modifies = []
          for (let i = 0; i < newVal.length; i++) {
            const options = newVal[i]
            const oldOptions = oldVal[i]

            if (JSON.stringify(options) !== JSON.stringify(oldOptions)) {
              modifies.push({
                newOptions: options,
                oldOptions: oldOptions
              })
            }
          }

          modifies.forEach((modify) => {
            const modifyPolygon = primitiveCollection._primitives.find((v) => v._id === modify.oldOptions.id)
            modifyPolygon &&
              Object.keys(modify.newOptions).forEach((prop) => {
                if (modify.oldOptions[prop] !== modify.newOptions[prop]) {
                  modifyPolygon[prop] = transformProp(prop, modify.newOptions[prop])
                }
              })
          })
        } else {
          const addeds = differenceBy(newVal, oldVal, 'id')
          const deletes = differenceBy(oldVal, newVal, 'id')
          const deletePolygons = []
          for (let i = 0; i < deletes.length; i++) {
            const deletePolygon = primitiveCollection._primitives.find((v) => v.id === deletes[i].id)
            deletePolygon && deletePolygons.push(deletePolygon)
          }

          deletePolygons.forEach(v => {
            primitiveCollection.remove(v)
          })

          this.addPolygons(primitiveCollection, addeds)
        }
      },
      deep: true
    }
  },
  methods: {
    async createCesiumObject () {
      const { $props, transformProps } = this
      const options = transformProps($props)
      const primitiveCollection = new Cesium.PrimitiveCollection(options)
      this.addPolygons(primitiveCollection, this.polygons)
      return primitiveCollection
    },
    addPolygons (primitiveCollection, polygons) {
      const { transformProps } = this
      for (let i = 0; i < polygons.length; i++) {
        const polygonOptions = polygons[i]
        polygonOptions.id = Cesium.defined(polygonOptions.id) ? polygonOptions.id : Cesium.createGuid()
        const polygonOptionsTransform = transformProps(polygonOptions)
        const polygonPrimitive = new PolygonPrimitive(polygonOptionsTransform)
        polygonPrimitive._vcParent = primitiveCollection
        addCustomProperty(polygonPrimitive, polygonOptionsTransform)
        primitiveCollection.add(polygonPrimitive)
      }
    }
  }
}
</script>
