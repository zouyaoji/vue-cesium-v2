## Mars3D Demo

When vue-cesium uses [Mars3D](http://mars3d.cn/) of Mars Technology, it is only necessary to configure the address of the mars3d main library and its plug-in library through the configuration item `mars3dConfig` when introducing VueCesium, and the default use of unpkg.com cdn resources, if you need to use it locally or in the local area network, please change the resources of the relevant library to the local or local area network address through `mars3dConfig.libs`.Please [Reference](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/loadUtil.ts#L17) for non-TS project structure.


```js
Vue.use(VueCesium, {
  mars3dConfig: {
    include: 'mars3d'
  }
})

// Or specify the address of `cesiumPath` as the **directory** of the mars3d library on the `vc-viewer` component.
import { Viewer } from 'vue-cesium'
Vue.use(Viewer, {
  mars3dConfig: {
    include: 'mars3d'
  }
})
```

If `vc-viewer` is loaded successfully, it will return {Cesium, viewer, map }, and you can use mars3d API for related development through this `map`, as shown in the following example:

## Example

### Use VueCesium to load Mars Technology Mars3D

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer
        ref="vcViewer"
        :mars3d-config="mars3dConfig"
        :animation="animation"
        :timeline="timeline"
        :fullscreen-button="fullscreenButton"
        :fullscreen-element="fullscreenElement"
        @ready="onViewerReady"
        @leftClick="onLeftClick"
      >
        <vc-navigation></vc-navigation>
        <vc-entity ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
          <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
          <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
        </vc-entity>
        <!-- 天地图注记 -->
        <vc-layer-imagery :sort-order="20">
          <vc-provider-imagery-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
        <!-- 天地图影像 -->
        <vc-layer-imagery :sort-order="10">
          <vc-provider-imagery-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
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
          animation: true,
          timeline: true,
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
          mars3dConfig: {
            include: 'mars3d'
          }
        }
      },
      mounted() {
        this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
          console.log('viewer is loaded.')
        })
      },
      methods: {
        onViewerReady({ Cesium, viewer, map }) {
          console.log(map)
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
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer" ref="viewerContainer">
    <vc-viewer
      ref="vcViewer"
      :mars3d-config="mars3dConfig"
      :animation="animation"
      :timeline="timeline"
      :fullscreen-button="fullscreenButton"
      :fullscreen-element="fullscreenElement"
      @ready="onViewerReady"
      @leftClick="onLeftClick"
    >
      <vc-navigation></vc-navigation>
      <vc-entity ref="entity" @click="onEntityClick" :position="{lng: 108, lat: 32}" :point="point" :label="label">
        <vc-graphics-billboard ref="billboard" image="https://zouyaoji.top/vue-cesium/favicon.png"></vc-graphics-billboard>
        <vc-graphics-rectangle :coordinates="[130, 20, 80, 25]" material="green"></vc-graphics-rectangle>
      </vc-entity>
      <!-- 天地图注记 -->
      <vc-layer-imagery :sort-order="20">
        <vc-provider-imagery-tianditu map-style="cva_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
      <!-- 天地图影像 -->
      <vc-layer-imagery :sort-order="10">
        <vc-provider-imagery-tianditu map-style="img_c" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
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
        animation: true,
        timeline: true,
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
        mars3dConfig: {
          include: 'mars3d'
        }
      }
    },
    mounted() {
      this.$refs.vcViewer.createPromise.then(({ Cesium, viewer }) => {
        console.log('viewer is loaded.')
      })
    },
    methods: {
      onViewerReady({ Cesium, viewer, map }) {
        console.log(map)
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
</script>
```

---

- Official website: **[mars3d](http://mars3d.cn/examples.html)**
