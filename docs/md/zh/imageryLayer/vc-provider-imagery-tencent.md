<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 17:33:01
 * @LastEditTime: 2022-04-06 17:36:24
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\md\zh\imageryLayer\vc-provider-imagery-tencent.md
-->

# TencentImageryProvider

`vc-provider-imagery-tencent` 组件用于高德栅格瓦片地图服务。

## 示例

### 加载腾讯地图影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" :camera="camera">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
          <vc-provider-imagery-tencent
            :map-style="mapStyle"
            :style-id="styleId"
            :projection-transforms="projectionTransforms"
          ></vc-provider-imagery-tencent>
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
        <md-select v-model="mapStyle" placeholder="请选择">
          <md-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value">
            {{item.label}}
          </md-option>
        </md-select>
        <span>切换服务</span>
        <md-select v-model="styleId" placeholder="请选择">
          <md-option v-for="item in styleIdOptions" :key="item.value" :label="item.label" :value="item.value">
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
          mapStyleOptions: [
            {
              value: 'img',
              label: '卫星影像'
            },
            {
              value: 'terrain',
              label: '地形图'
            },
            {
              value: 'vector',
              label: '道路图'
            }
          ],
          styleIdOptions: [
            {
              value: '1',
              label: '经典'
            },
            {
              value: '2',
              label: '标签1'
            },
            {
              value: '3',
              label: '标签2'
            },
            {
              value: '4',
              label: '墨渊'
            },
            {
              value: '8',
              label: '白浅'
            },
            {
              value: '9',
              label: '浅灰'
            }
          ],
          mapStyle: 'vector',
          styleId: '1',
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
        <vc-provider-imagery-tencent
          :map-style="mapStyle"
          :style-id="styleId"
          :projection-transforms="projectionTransforms"
        ></vc-provider-imagery-tencent>
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
      <md-select v-model="mapStyle" placeholder="请选择">
        <md-option v-for="item in mapStyleOptions" :key="item.value" :label="item.label" :value="item.value">
          {{item.label}}
        </md-option>
      </md-select>
      <span>切换服务</span>
      <md-select v-model="styleId" placeholder="请选择">
        <md-option v-for="item in styleIdOptions" :key="item.value" :label="item.label" :value="item.value">
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
        mapStyleOptions: [
          {
            value: 'img',
            label: '卫星影像'
          },
          {
            value: 'terrain',
            label: '地形图'
          },
          {
            value: 'vector',
            label: '道路图'
          }
        ],
        styleIdOptions: [
          {
            value: '1',
            label: '经典'
          },
          {
            value: '2',
            label: '标签1'
          },
          {
            value: '3',
            label: '标签2'
          },
          {
            value: '4',
            label: '墨渊'
          },
          {
            value: '8',
            label: '白浅'
          },
          {
            value: '9',
            label: '浅灰'
          }
        ],
        mapStyle: 'vector',
        styleId: '1',
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
| 属性名 | 类型 | 默认值 | 描述 | 可选值 |
| -------------------- | --------------- | --------- | ---------------------------------------------------------------------------- | ------ |
| url | string |  | `optional` 指定服务地址。 |
|subdomains|Array\<string\>|`['1', '2', '3']`| `optional` 指定服务轮询参数。|
| mapStyle | string | `'vector'` | `optional` 指定腾讯地图服务地图风格类型。'img': 卫星影像; 'terrain': 地形图; 'vector': 道路图 | img/terrain/vector |
|styleId| string | `'1'` | 指定风格id，mapStyle 为 vector 时有效。1: 经典; 2: 标签; 3: 标签; 4: 墨渊; 8: 白浅; 9: 灰色 |1/2/3/4/8/9|
| protocol | string |  | `optional` 指定服务协议。 |http/https|
| credit | string\|Cesium.Credit | `''` | `optional` 服务版权描述信息。 |
| rectangle | VcRectangle | | `optional` 图层的矩形范围，此矩形限制了影像可见范围。 |
| minimumLevel | number | `0` | `optional` 最小层级。 |
| maximumLevel | number | `20` | `optional` 最大层级。 |
| tilingScheme | Cesium.GeographicTilingScheme \| Cesium.WebMercatorTilingScheme | `new Cesium.WebMercatorTilingScheme()` | `optional` 指定将影像瓦片展开到地球的投影方案。 |
| projectionTransforms | boolean\|ProjectionTransforms | `false` | `optional` 指定投影变换参数。**结构： { from: 'GCJ02', to: 'WGS84' }** |

## 事件

| 事件名       | 参数              | 描述                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。                 |
| errorEvent   | TileProviderError | 当图层的提供者发生异步错误时触发, 返回一个 TileProviderError 实例。 |
| readyPromise | ImageryProvider   | 当图层可用时触发, 返回 ImageryProvider 实例。                       |

---
