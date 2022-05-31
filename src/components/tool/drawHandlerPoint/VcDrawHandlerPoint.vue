<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-23 14:42:45
 * @LastEditTime: 2022-05-31 17:50:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\src\components\tool\drawHandlerPoint\VcDrawHandlerPoint.vue
-->
<template>
  <i :class="$options.name">
    <vc-collection-primitive-point ref="pointCollection" :points="points" @mouseover="pointMouseOver" @mouseout="pointMouseOut" @ready="pointReady">
    </vc-collection-primitive-point>
    <vc-overlay-html :position="toolbarPosition" v-if="showToolbar">
      <button :title="$vc.lang.draw.editingMove" class="vc-btn" type="button" @click="onEditClick('move')">
        <vc-icon-svg name="icon-move"></vc-icon-svg>
      </button>
      <button :title="$vc.lang.draw.editingInsert" class="vc-btn" type="button" @click="onEditClick('insert')">
        <vc-icon-svg name="icon-add"></vc-icon-svg>
      </button>
      <button :title="$vc.lang.draw.editingDelete" class="vc-btn" type="button" @click="onEditClick('delete')">
        <vc-icon-svg name="icon-delete"></vc-icon-svg>
      </button>
    </vc-overlay-html>
    <vc-overlay-html :position="tooltipPosition" v-if="showTooltip && showDrawTip" :pixelOffset="[32, 32]">
      <div class="vc-html-bubble">{{ tooltip }}</div>
    </vc-overlay-html>
  </i>
</template>

<script>
import mixinDraw from '../../../mixins/tool/mixinDraw'
import './drawIcon'
import VcIconSvg from '../../control/navigation/icon/VcIconSvg.vue'
export default {
  name: 'vc-handler-draw-point',
  mixins: [mixinDraw],
  components: {
    VcIconSvg
  },
  data () {
    return {
      drawType: 'pointDrawing'
    }
  }
}
</script>
