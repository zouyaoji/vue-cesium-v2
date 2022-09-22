# 淹没分析

`vc-analytics-flood` 组件用于模拟淹没分析。其实质是用 `vc-primitive-classification` 加载 `vc-geometry-polygon`，通过动态修改 `vc-geometry-polygon` 的 `extrudedHeight` 属性拉伸成一个闭合体对象，从而模拟淹没分析。**注意**需要场景加载地形或 3DTiles 才可以分析。

## 示例

### 淹没分析

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-analytics-flood ref="flood" :min-height="minHeight" :max-height="maxHeight" :speed="speed" :polygon-hierarchy="polygonHierarchy" @stop="onStoped">
        </vc-analytics-flood>
        <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps :url="url" :bm-key="bmKey" map-style="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
         <md-input-container>
          <label>minHeight</label>
          <md-input v-model.number="minHeight"></md-input>
        </md-input-container>
        <md-input-container>
          <label>maxHeight</label>
          <md-input v-model.number="maxHeight"></md-input>
        </md-input-container>
        <span>speed</span>
        <vue-slider v-model="speed" :min="1" :max="100" :interval="1"  ></vue-slider>
        <md-button class="md-raised md-accent" @click="start">开始</md-button>
        <md-button :disabled="!starting" class="md-raised md-accent" @click="pause">{{pausing ? '继续' : '暂停'}}</md-button>
        <md-button class="md-raised md-accent" @click="stop">结束</md-button>
      </div>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          minHeight: -1,
          maxHeight: 7000,
          speed: 10,
          polygonHierarchy: [
            {lng: 102.1, lat: 29.5},
            {lng: 106.2, lat: 29.5},
            {lng: 106.2, lat: 33.5},
            {lng: 102.1, lat: 33.5}
          ],
          url: 'https://dev.virtualearth.net',
          bmKey: 'AmGu3cvB_g1HbkQErEyvmLc9j0YIGWS7IdOqR7-hQbO8J92Fzrzkhy_bYKSsyoEx', // 可到(https://www.bingmapsportal.com/)申请Key。
          pausing: false,
          starting: false
        }
      },
      methods: {
        ready (cesiumInstance) {
          this.cesiumInstance = cesiumInstance
          window.vm = this
          const {Cesium, viewer} = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
          viewer.scene.debugShowFramesPerSecond = true
          viewer.camera.setView({
            destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
            orientation: {
              heading: 6.20312220367255,
              pitch: -0.9937536846355606,
              roll: 0.002443376981836387
            }
          })
        },
        start (){
          this.$refs.flood.start()
          this.pausing = false
          this.starting = true
        },
        pause() {
          this.$refs.flood.pause()
          this.pausing = !this.pausing
        },
        stop() {
          this.$refs.flood.stop()
          this.pausing = false
          this.starting = false
        },
        onStoped(e) {
          this.pausing = false
          this.starting = false
          console.log(e)
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready">
      <vc-analytics-flood
        ref="flood"
        :min-height="minHeight"
        :max-height="maxHeight"
        :speed="speed"
        :polygon-hierarchy="polygonHierarchy"
        @stop="onStoped"
      >
      </vc-analytics-flood>
      <vc-provider-terrain-cesium></vc-provider-terrain-cesium>
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps :url="url" :bm-key="bmKey" map-style="Aerial"></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <md-input-container>
        <label>minHeight</label>
        <md-input v-model.number="minHeight"></md-input>
      </md-input-container>
      <md-input-container>
        <label>maxHeight</label>
        <md-input v-model.number="maxHeight"></md-input>
      </md-input-container>
      <span>speed</span>
      <vue-slider v-model="speed" :min="1" :max="100" :interval="1"></vue-slider>
      <md-button class="md-raised md-accent" @click="start">开始</md-button>
      <md-button :disabled="!starting" class="md-raised md-accent" @click="pause">{{pausing ? '继续' : '暂停'}}</md-button>
      <md-button class="md-raised md-accent" @click="stop">结束</md-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minHeight: -1,
        maxHeight: 7000,
        speed: 10,
        polygonHierarchy: [
          { lng: 102.1, lat: 29.5 },
          { lng: 106.2, lat: 29.5 },
          { lng: 106.2, lat: 33.5 },
          { lng: 102.1, lat: 33.5 }
        ],
        url: 'https://dev.virtualearth.net',
        bmKey: 'AmGu3cvB_g1HbkQErEyvmLc9j0YIGWS7IdOqR7-hQbO8J92Fzrzkhy_bYKSsyoEx', // 可到(https://www.bingmapsportal.com/)申请Key。
        pausing: false,
        starting: false
      }
    },
    methods: {
      ready(cesiumInstance) {
        this.cesiumInstance = cesiumInstance
        window.vm = this
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
        viewer.scene.debugShowFramesPerSecond = true
        viewer.camera.setView({
          destination: new Cesium.Cartesian3(-1432246.8223880068, 5761224.588247942, 3297281.1889481535),
          orientation: {
            heading: 6.20312220367255,
            pitch: -0.9937536846355606,
            roll: 0.002443376981836387
          }
        })
      },
      start() {
        this.$refs.flood.start()
        this.pausing = false
      },
      pause() {
        this.$refs.flood.pause()
        this.pausing = !this.pausing
      },
      stop() {
        this.$refs.flood.stop()
        this.pausing = false
        this.starting = false
      },
      onStoped(e) {
        this.pausing = false
        this.starting = false
        console.log(e)
      }
    }
  }
</script>
```

## 属性

| 属性名           | 类型    | 默认值                   | 描述                                            |
| ---------------- | ------- | ------------------------ | ----------------------------------------------- |
| polygonHierarchy | Array   |                          | `required` 指定构建淹没分析多边形的经纬度数组。 |
| minHeight        | number  | `-1`                     | `optional` 指定最小高程。                       |
| maxHeight        | number  | `8888`                   | `optional` 指定最大高程。                       |
| speed            | number  | `10`                     | `optional` 指定每帧增加的高度。                 |
| color            | VcColor | `'rgba(40,150,200,0.6)'` | `optional` 指定淹没分析对象颜色。               |
| loop             | boolean | `false`                  | `optional` 指定到达最大高度后是否重新开始。     |

---

## 事件

| 事件名     | 参数                                    | 描述                 |
| ---------- | --------------------------------------- | -------------------- |
| beforeLoad | (instance: VcComponentInternalInstance) | 对象加载前触发。     |
| ready      | (readyObj: VcReadyObject)               | 对象加载成功时触发。 |
| destroyed  | (instance: VcComponentInternalInstance) | 对象销毁时触发。     |
| stop       | (evt: Cesium.ClassificationPrimitive)   | 到达最大高度时触发。 |

## 方法

| 方法名 | 参数                      | 描述                |
| ------ | ------------------------- | ------------------- |
| start  | (height?: number) => void | 开始淹没分析。      |
| pause  | () => void                | 暂停/继续淹没分析。 |
| stop   | () => void                | 结束淹没分析。      |
