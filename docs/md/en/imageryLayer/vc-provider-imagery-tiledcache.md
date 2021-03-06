# TiledCacheImageryProvider

The `vc-provider-imagery-tiledcache` component is used to load the TiledCache image service.

## Example

### Load an imagerylayer with TiledCacheImageryProvider

#### Preview

<doc-preview>
  <template>
    <div class="viewer" ref="viewerContainer">
      <vc-viewer @ready="ready" fullscreenButton :fullscreenElement="fullscreenElement">
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tiledcache
            url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
            dir="WhiteMap"
          ></vc-provider-imagery-tiledcache>
        </vc-layer-imagery>
        <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
          <vc-provider-imagery-tiledcache
            url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
            dir="Labels"
          ></vc-provider-imagery-tiledcache>
        </vc-layer-imagery>
      </vc-viewer>
      <div class="demo-tool">
        <span>alpha</span>
        <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
        <span>brightness</span>
        <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
        <span>contrast</span>
        <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
      </div>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          alpha: 1,
          brightness: 1,
          contrast: 1,
          fullscreenElement: document.body
        }
      },
      methods: {
        ready(cesiumInstance) {
          const { Cesium, viewer } = cesiumInstance
          this.cesiumInstance = cesiumInstance
          this.fullscreenElement = this.$refs.viewerContainer
        }
      }
    }
  </script>
</doc-preview>

#### Code

```html
<template>
  <div class="viewer" ref="viewerContainer">
    <vc-viewer @ready="ready" fullscreenButton :fullscreenElement="fullscreenElement">
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tiledcache
          url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
          dir="WhiteMap"
        ></vc-provider-imagery-tiledcache>
      </vc-layer-imagery>
      <vc-layer-imagery :alpha="alpha" :brightness="brightness" :contrast="contrast">
        <vc-provider-imagery-tiledcache
          url="https://songluck.com/gis/TiledCacheService/TiledCacheServlet"
          dir="Labels"
        ></vc-provider-imagery-tiledcache>
      </vc-layer-imagery>
    </vc-viewer>
    <div class="demo-tool">
      <span>alpha</span>
      <vue-slider v-model="alpha" :min="0" :max="1" :interval="0.01"></vue-slider>
      <span>brightness</span>
      <vue-slider v-model="brightness" :min="0" :max="3" :interval="0.01"></vue-slider>
      <span>contrast</span>
      <vue-slider v-model="contrast" :min="0" :max="3" :interval="0.01"></vue-slider>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        alpha: 1,
        brightness: 1,
        contrast: 1,
        fullscreenElement: document.body
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        this.cesiumInstance = cesiumInstance
        this.fullscreenElement = this.$refs.viewerContainer
      }
    }
  }
</script>
```

## ??????

| ????????? | ??????   | ????????? | ??????                                 |
| ------ | ------ | ------ | ------------------------------------ |
| url    | String |        | `required` TiledCache ????????????????????? |
| dir    | String |        | `required` ???????????????                |
| scales | Array  |        | `optional` ??????????????????????????????      |

---

## ??????

| ?????????       | ??????              | ??????                                                                |
| ------------ | ----------------- | ------------------------------------------------------------------- |
| ready        | {Cesium, viewer}  | ??????????????????????????????????????? Cesium ???, viewer ?????????                 |
| errorEvent   | TileProviderError | ????????????????????????????????????????????????, ???????????? TileProviderError ????????? |
| readyPromise | ImageryProvider   | ????????????????????????, ?????? ImageryProvider ?????????                       |

---
