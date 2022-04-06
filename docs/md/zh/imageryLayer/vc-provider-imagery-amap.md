<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 17:20:24
 * @LastEditTime: 2022-04-06 17:31:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\md\zh\imageryLayer\vc-provider-imagery-amap.md
-->

# AMapImageryProvider

`vc-provider-imagery-amap` 组件用于高德栅格瓦片地图服务。

## 示例

### 加载高德地图影像服务图层

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready" :camera="camera">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast" :sort-order="10">
          <vc-provider-imagery-amap
            :map-style="mapStyle"
            :ltype="ltype"
            :projection-transforms="projectionTransforms"
          ></vc-provider-imagery-amap>
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
        <md-select v-model="ltype" placeholder="请选择">
          <md-option v-for="item in ltypeOptions" :key="item.value" :label="item.label" :value="item.value">
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
              value: '6',
              label: '卫星影像'
            },
            {
              value: '7',
              label: '道路图'
            },
            {
              value: '8',
              label: '道路图（背景透明）'
            }
          ],
          ltypeOptions: [
            {
              value: '0',
              label: '默认'
            },
            {
              value: '4',
              label: '只有注记'
            },
            {
              value: '11',
              label: '只有道路'
            }
          ],
          mapStyle: '7',
          ltype: '0',
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
        <vc-provider-imagery-amap
          :map-style="mapStyle"
          :ltype="ltype"
          :projection-transforms="projectionTransforms"
        ></vc-provider-imagery-amap>
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
      <md-select v-model="ltype" placeholder="请选择">
        <md-option v-for="item in ltypeOptions" :key="item.value" :label="item.label" :value="item.value">
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
            value: '6',
            label: '卫星影像'
          },
          {
            value: '7',
            label: '道路图'
          },
          {
            value: '8',
            label: '道路图（背景透明）'
          }
        ],
        ltypeOptions: [
          {
            value: '0',
            label: '默认'
          },
          {
            value: '4',
            label: '只有注记'
          },
          {
            value: '11',
            label: '只有道路'
          }
        ],
        mapStyle: '7',
        ltype: '0',
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
|domain| 'webst' \| 'webrd'| `'webst'` | `optional` 指定域名。|webst/webrd|
|subdomains|Array\<string\>|`['01', '02', '03', '04']`| `optional` 指定服务轮询参数。|
|lang| 'zh_cn' \| 'en'| `'zh_cn'` | `optional` 指定语言。|zh_cn/en|
| mapStyle | string | `'6'` | `optional` 指定高德地图服务地图风格类型。'6': 卫星影像; '7': 道路图; '8': 道路图(背景透明) | 6/7/8 |
| scl | '1' \| '2' | `'1'` | `optional` 指定尺寸控制参数。 '1': 256\*256; '2': 512\*512| 1/2 |
|ltype| string | `'0'` | 指定类型参数。'0': 默认; '4': 只有注记; '8': 只有道路 |0/4/11|
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
