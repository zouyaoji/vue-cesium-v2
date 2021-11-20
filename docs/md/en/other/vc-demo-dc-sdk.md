## DC-SDK Demo

When vue-cesium uses dc-sdk to develop, you only need to specify the dc-sdk library address through the configuration item `cesiumPath` when VueCesium is introduced.

```js
Vue.use(VueCesium, {
  cesiumPath: 'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'
})
```
Or specify the address of cesiumPath as the dc-sdk path on the vc-viewer component. Such as the following example:

`vc-viewer` will return {Cesium, viewer, dcViewer} after loading successfully, and you can use the dc-sdk API to carry out related development through the `dcViewer`, as shown in the following example:

## Example

### Use VueCesium to load dc-sdk

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer
        ref="vcViewer"
        :cesiumPath="cesiumPath"
        :animation="animation"
        :timeline="timeline"
        :fullscreenButton="fullscreenButton"
        :fullscreenElement="fullscreenElement"
        @ready="onViewerReady"
        @leftClick="onLeftClick"
      >
        <vc-navigation></vc-navigation>
        <vc-entity ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
          <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
          <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
        </vc-entity>
        <!-- 天地图注记 -->
        <vc-layer-imagery :sortOrder="20">
          <vc-provider-imagery-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
        <!-- 天地图影像 -->
        <vc-layer-imagery :sortOrder="10">
          <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>Animation</span>
        <md-switch v-model="animation"></md-switch>
        <span>Timeline</span>
        <md-switch v-model="timeline"></md-switch>
        <span>BaseLayerPicker</span>
        <md-switch v-model="baseLayerPicker"></md-switch>
        <span>FullscreenButton</span>
        <md-switch v-model="fullscreenButton"></md-switch>
        <span>InfoBox</span>
        <md-switch v-model="infoBox"></md-switch>
        <md-button class="md-raised md-accent" @click="unload">Unload</md-button>
        <md-button class="md-raised md-accent" @click="load">Load</md-button>
        <md-button class="md-raised md-accent" @click="reload">Reload</md-button>
      </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          animation: false,
          timeline: false,
          fullscreenButton: true,
          fullscreenElement: document.body,
          point: {
            pixelSize: 28,
            color: 'red'
          },
          label: {
            text: 'Hello World',
            pixelOffset: [0, 150]
          },
          billboard: {},
          offset: [10, 25],
          otherOpts: {
            offset: [0, 32],
            position: 'bottom-right'
          },
          cesiumPath: 'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'
        }
      },
      mounted() {
        this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
          console.log('viewer is loaded.')
        })
      },
      methods: {
        onViewerReady({ Cesium, dcViewer }) {
          console.log(dcViewer)
          const baselayer = DC.ImageryLayerFactory.createAmapImageryLayer({
            style: 'img'
          })
          dcViewer.addBaseLayer(baselayer)
          const layer = new DC.HtmlLayer('layer')
          dcViewer.addLayer(layer)
          const positions = generatePosition(5)
          positions.forEach((item, index) => {
            const divIcon = new DC.DivIcon(
              item,
              `<div style="width:200px;background:rgba(255,255,0,0.2)">我是一个div，你可以对我添加css样式和内容</div>`
            )
            layer.addOverlay(divIcon)
          })
        },
        onEntityClick(e) {
          console.log(e)
        },
        onLeftClick(e) {
          console.log(e)
        },
        load() {
          this.$refs.vcViewer.load().then(e => {
            console.log(e)
          })
        },
        unload() {
          this.$refs.vcViewer.unload().then(e => {
            console.log(e)
          })
        },
        reload() {
          this.$refs.vcViewer.reload().then(e => {
            console.log(e)
          })
        }
      }
    }
    function generatePosition(num) {
      var list = []
      for (var i = 0; i < num; i++) {
        var lng = 120.38105869 + Math.random() * 0.5
        var lat = 31.10115627 + Math.random() * 0.5
        list.push(new DC.Position(lng, lat))
      }
      return list
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer" ref="viewerContainer">
    <vc-viewer
      ref="vcViewer"
      :cesiumPath="cesiumPath"
      :animation="animation"
      :timeline="timeline"
      :fullscreenButton="fullscreenButton"
      :fullscreenElement="fullscreenElement"
      @ready="onViewerReady"
      @leftClick="onLeftClick"
    >
      <vc-navigation></vc-navigation>
      <vc-entity ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
        <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
      </vc-entity>
      <!-- 天地图注记 -->
      <vc-layer-imagery :sortOrder="20">
        <vc-provider-imagery-tianditu mapStyle="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <!-- 天地图影像 -->
      <vc-layer-imagery :sortOrder="10">
        <vc-provider-imagery-tianditu mapStyle="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>Animation</span>
      <md-switch v-model="animation"></md-switch>
      <span>Timeline</span>
      <md-switch v-model="timeline"></md-switch>
      <span>BaseLayerPicker</span>
      <md-switch v-model="baseLayerPicker"></md-switch>
      <span>FullscreenButton</span>
      <md-switch v-model="fullscreenButton"></md-switch>
      <span>InfoBox</span>
      <md-switch v-model="infoBox"></md-switch>
      <md-button class="md-raised md-accent" @click="unload">Unload</md-button>
      <md-button class="md-raised md-accent" @click="load">Load</md-button>
      <md-button class="md-raised md-accent" @click="reload">Reload</md-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        animation: false,
        timeline: false,
        fullscreenButton: true,
        fullscreenElement: document.body,
        point: {
          pixelSize: 28,
          color: 'red'
        },
        label: {
          text: 'Hello World',
          pixelOffset: [0, 150]
        },
        billboard: {},
        offset: [10, 25],
        otherOpts: {
          offset: [0, 32],
          position: 'bottom-right'
        },
        cesiumPath: 'https://dc.dvgis.cn/libs/dc-sdk/dc.base.min.js'
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, dcViewer }) {
        console.log(dcViewer)
        const baselayer = DC.ImageryLayerFactory.createAmapImageryLayer({
          style: 'img'
        })
        dcViewer.addBaseLayer(baselayer)
        const layer = new DC.HtmlLayer('layer')
        dcViewer.addLayer(layer)
        const positions = generatePosition(5)
        positions.forEach((item, index) => {
          const divIcon = new DC.DivIcon(
            item,
            `<div style="width:200px;background:rgba(255,255,0,0.2)">我是一个div，你可以对我添加css样式和内容</div>`
          )
          layer.addOverlay(divIcon)
        })
      },
      onEntityClick(e) {
        console.log(e)
      },
      onLeftClick(e) {
        console.log(e)
      },
      load() {
        this.$refs.vcViewer.load().then(e => {
          console.log(e)
        })
      },
      unload() {
        this.$refs.vcViewer.unload().then(e => {
          console.log(e)
        })
      },
      reload() {
        this.$refs.vcViewer.reload().then(e => {
          console.log(e)
        })
      }
    }
  }

  function generatePosition(num) {
    var list = []
    for (var i = 0; i < num; i++) {
      var lng = 120.38105869 + Math.random() * 0.5
      var lat = 31.10115627 + Math.random() * 0.5
      list.push(new DC.Position(lng, lat))
    }
    return list
  }
</script>
```

---

- Official website: **[dc-sdk](http://dc.dvgis.cn/#/index)**
