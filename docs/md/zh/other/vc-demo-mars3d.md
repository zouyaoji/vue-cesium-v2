## Mars3D Demo

vue-cesium 使用火星科技的 [Mars3D](http://mars3d.cn/) 开发时只需要在引入 VueCesium 时通过配置项 `mars3dConfig` 配置 mars3d 主库和其插件库地址，默认使用 unpkg.com 的 cdn 资源，如需本地或局域网使用，请通过 mars3dConfig.libs 将相关库的资源改为本地或局域网地址即可。非 TS 项目结构请 [参考](https://github.com/zouyaoji/vue-cesium/blob/dev/packages/components/viewer/src/loadUtil.ts#L17)。


```js
Vue.use(VueCesium, {
  mars3dConfig: {
    include: 'mars3d'
  }
})

// 如果是局部引入，也可以这样:
import { Viewer } from 'vue-cesium'
Vue.use(Viewer, {
  mars3dConfig: {
    include: 'mars3d'
  }
})
```

`vc-viewer` 加载成功会返回 { Cesium, viewer, map }, 通过该 `map` 使用 [mars3d 教程](http://mars3d.cn/doc) 和 [mars3d API](http://mars3d.cn/api/) 进行相关开发即可， 如下面的例子：

## 示例

### 使用 VueCesium 加载火星科技 Mars3D

#### 预览

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
        <md-button class="md-raised md-accent" @click="unload">销毁</md-button>
        <md-button class="md-raised md-accent" @click="load">加载</md-button>
        <md-button class="md-raised md-accent" @click="reload">重载</md-button>
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

#### 代码

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
      <md-button class="md-raised md-accent" @click="unload">销毁</md-button>
      <md-button class="md-raised md-accent" @click="load">加载</md-button>
      <md-button class="md-raised md-accent" @click="reload">重载</md-button>
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

- Mars3D平台官网： **[http://mars3d.cn](http://mars3d.cn/example)**
