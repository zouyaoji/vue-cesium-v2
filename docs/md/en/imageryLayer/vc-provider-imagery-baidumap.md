# BaiduMapImageryProvider

The `vc-provider-imagery-baidumap` component is used for Baidu raster tile map service.

## Example

### Load an imagerylayer with BaiduMapImageryProvider

#### Preview

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
          mapStyle: 'normal',
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

#### Code

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
        mapStyle: 'normal',
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

## Instance Properties

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| url | String | | `optional` Specify the service address. |
| rectangle | Object\|Object | | `optional` The rectangle of the layer. This parameter is ignored when accessing a tiled layer. |
| credit | String\|Object | `''` | `optional` A credit for the data source, which is displayed on the canvas. |
| minimumLevel | Number | `0` | `optional` The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems. |
| maximumLevel | Number | `18` | `optional` The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit. |
| scale | Number | `1` | `optional` Specify the scale. |
| ak | String | `E4805d16520de693a3fe707cdc962045` | `optional` Specify the baidumap key. |
| mapStyle | String | `normal` | `optional` Specify the mapStyle. |img/vec/traffic/normal/light/dark/redalert/googlelite/grassgreen/midnight/pink/darkgreen/bluish/grayscale/hardedge|
| projectionTransforms | Boolean\|Object |  | `optional` Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }** |
| protocol | String | `'https'` | `optional` Specify protocol of service. |

## Events

<!-- prettier-ignore -->
| name | parameter | description |
| ---- | --------- | ----------- |
| ready | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError | Triggers when the imagery provider encounters an asynchronous error. |
| readyPromise | ImageryProvider | Triggers when the provider is ready for use. |

---
