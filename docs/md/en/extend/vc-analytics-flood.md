# VcAnalysisFlood

The `vc-analytics-flood` component is used to simulate flood analysis. **Note** Scene loading terrain or 3DTiles is required for analysis.

## Example

### Load a VcAnalysisFlood

#### Preview

<doc-preview>
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
        <md-button class="md-raised md-accent" @click="start">Start</md-button>
        <md-button :disabled="!starting" class="md-raised md-accent" @click="pause">{{pausing ? 'Start' : 'Pause'}}</md-button>
        <md-button class="md-raised md-accent" @click="stop">Stop</md-button>
      </div>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          minHeight: -1,
          maxHeight: 4000,
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
          const { Cesium, viewer } = this.cesiumInstance
          viewer.scene.globe.depthTestAgainstTerrain = true
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

#### Code

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
      <md-button class="md-raised md-accent" @click="start">Start</md-button>
      <md-button :disabled="!starting" class="md-raised md-accent" @click="pause">{{pausing ? 'Start' : 'Pause'}}</md-button>
      <md-button class="md-raised md-accent" @click="stop">Stop</md-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        minHeight: -1,
        maxHeight: 4000,
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
        const { Cesium, viewer } = this.cesiumInstance
        viewer.scene.globe.depthTestAgainstTerrain = true
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
```

## Instance Properties

<!-- prettier-ignore -->
| Name | Type | Default | Description |
| ---------------- | --------------------- | ------------------------ | ---------------------------------------------- |
| polygonHierarchy |VcPolygonHierarchy | | `required` Specify ths VcPolygonHierarchy of polygon. |
| minHeight | number | `-1 ` | `optional` Specify the minimum elevation. |
| maxHeight | number | `8888` | `optional` Specify the maximum elevation. |
| speed | number | `10` | `optional` Specify the height to increase each frame. |
| color | VcColor | `'rgba(40,150,200,0.6)'` | `optional` Specify the VcColor of water. |
| loop | boolean | `false` | `optional` Specify whether to restart after reaching the maximum height. |

---

## Events

| Name       | Parameters                              | Description                                            |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| beforeLoad | (instance: VcComponentInternalInstance) | Triggers before the cesiumObject is loaded.            |
| ready      | (readyObj: VcReadyObject)               | Triggers when the cesiumObject is successfully loaded. |
| destroyed  | (instance: VcComponentInternalInstance) | Triggers when the cesiumObject is destroyed.           |
| stop       | (evt: Cesium.ClassificationPrimitive)   | Triggers when the maxHeight is reached.                |

### Methods

| Name            | Parameters                | Description                                     |
| --------------- | ------------------------- | ----------------------------------------------- |
| getCesiumObject | () => VcCesiumObject      | Get the Cesium object loaded by this component. |
| start           | (height?: number) => void | Start flood analysis.                           |
| pause           | () => void                | Pause/resume flood analysis.                    |
| stop            | () => void                | Stop flood analysis.                            |
