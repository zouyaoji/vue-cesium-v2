# BaiduMapImageryProvider

`vc-provider-imagery-baidumap` 组件用于百度栅格瓦片地图服务。

## 示例

### 加载百度地图影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" :camera="camera">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
          <vc-provider-imagery-baidumap
            :map-style="mapStyle"
            :projection-transforms="projectionTransforms"
          ></vc-provider-imagery-baidumap>
        </vc-layer-imagery>
        <vc-layer-imagery :sort-order="5">
          <vc-provider-imagery-tianditu map-style="img_w" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>透明度</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>亮度</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>对比度</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>切换服务</span>
        <md-select v-model="mapStyle" placeholder="请选择地图服务类型">
          <md-option v-for="item in options" :key="item.value" :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          options: [
            {
              value: 'normal',
              label: '默认样式'
            },
            {
              value: 'vec',
              label: '百度电子'
            },
            {
              value: 'img',
              label: '百度影像'
            },
            {
              value: 'dark',
              label: '黑夜风格'
            },
            {
              value: 'midnight',
              label: '午夜蓝'
            },
            {
              value: 'traffic',
              label: '百度路况'
            }
          ],
          mapStyle: 'vec',
          alpha: 1,
          brightness: 1,
          contrast: 1,
          projectionTransforms: {
            form: 'BD09',
            to: 'WGS84'
          },
          camera: {
            position: {
              x: -1336250.5076601694,
              y: 5333101.760774733,
              z: 3229877.420756886
            },
            heading: 6.259802922203329,
            pitch: -1.5382656190477708,
            roll: 0
          }
        }
      },
      methods: {
        ready({ Cesium, viewer }) {
          this.Cesium = Cesium
          this.viewer = viewer
          window.vm = this
          window.viewer = viewer
        }
      }
    }
  </script>
</doc-preview>

#### 代码

```html
<template>
  <div class="viewer">
    <vc-viewer @ready="ready" :camera="camera">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
        <vc-provider-imagery-baidumap
          :map-style="mapStyle"
          :projection-transforms="projectionTransforms"
        ></vc-provider-imagery-baidumap>
      </vc-layer-imagery>
      <vc-layer-imagery :sort-order="5">
        <vc-provider-imagery-tianditu map-style="img_w" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-imagery-tianditu>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>透明度</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>亮度</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>对比度</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>切换服务</span>
      <md-select v-model="mapStyle" placeholder="请选择地图服务类型">
        <md-option v-for="item in options" :key="item.value" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {
            value: 'normal',
            label: '默认样式'
          },
          {
            value: 'img',
            label: '百度影像'
          },
          {
            value: 'vec',
            label: '百度电子'
          },
          {
            value: 'dark',
            label: '黑夜风格'
          },
          {
            value: 'midnight',
            label: '午夜蓝'
          },
          {
            value: 'traffic',
            label: '百度路况'
          }
        ],
        mapStyle: 'vec',
        alpha: 1,
        brightness: 1,
        contrast: 1,
        projectionTransforms: {
          form: 'BD09',
          to: 'WGS84'
        },
        camera: {
          position: {
            x: -1336250.5076601694,
            y: 5333101.760774733,
            z: 3229877.420756886
          },
          heading: 6.259802922203329,
          pitch: -1.5382656190477708,
          roll: 0
        }
      }
    },
    methods: {
      ready({ Cesium, viewer }) {
        this.Cesium = Cesium
        this.viewer = viewer
        window.vm = this
        window.viewer = viewer
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| ----- | ---- | ----- | ---- |
| url | String |  | `optional` 指定服务地址。 指定了 `url` 将忽略 `customid` 属性。 |
| rectangle | Object\|Object | | `optional` 指定影像图层的矩形范围，此矩形限制了影像可见范围。 |
| credit | String\|Object | `''` | `optional` 服务版权描述信息。 |
| minimumLevel | Number | `0` | `optional` 最小层级。 |
| maximumLevel | Number | `18` | `optional` 最大层级。 |
| scale | Number | `1` | `optional` 指定缩放。 |
| ak | String | `E4805d16520de693a3fe707cdc962045` | `optional` 指定百度地图key。 |
| customid | String | `normal` | `optional` 指定自定义风格id。 |img/vec/traffic/normal/light/dark/redalert/googlelite/grassgreen/midnight/pink/darkgreen/bluish/grayscale/hardedge|
| projectionTransforms | Boolean\|Object |  | `optional` 指定投影变换参数。**结构： { from: 'BD09', to: 'WGS84' }** |
| protocol | String | `'https'` | `optional` 指定服务协议。 |

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |

---
