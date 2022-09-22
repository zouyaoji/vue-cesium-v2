<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:23:34
 * @LastEditTime: 2021-12-23 17:44:22
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\md\en\terrain\vc-provider-terrain-arcgis-tiled-elevation.md
-->
# ArcGISTiledElevationTerrainProvider

The `vc-provider-terrain-arcgis-tiled-elevation` component is used to load terrain geometry by tessellating height maps retrieved from Elevation Tiles of an ArcGIS ImageService.

## Example

### Load terrain data in ArcGISTiledElevation

#### Preview

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps url="https://dev.virtualearth.net" bm-key="AmGu3cvB_g1HbkQErEyvmLc9j0YIGWS7IdOqR7-hQbO8J92Fzrzkhy_bYKSsyoEx" map-style="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
        <vc-provider-terrain-arcgis-tiled-elevation :url="terrainUrl"></vc-provider-terrain-arcgis-tiled-elevation>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
          terrainUrl: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
          var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
          var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
          viewer.camera.lookAt(target, offset)
          viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
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
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps
          url="https://dev.virtualearth.net"
          bm-key="AmGu3cvB_g1HbkQErEyvmLc9j0YIGWS7IdOqR7-hQbO8J92Fzrzkhy_bYKSsyoEx"
          map-style="Aerial"
        ></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
      <vc-provider-terrain-arcgis-tiled-elevation :url="terrainUrl"></vc-provider-terrain-arcgis-tiled-elevation>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        terrainUrl: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
      }
    },
    methods: {
      ready(cesiumInstance) {
        const { Cesium, viewer } = cesiumInstance
        var target = new Cesium.Cartesian3(300770.50872389384, 5634912.131394585, 2978152.2865545116)
        var offset = new Cesium.Cartesian3(6344.974098678562, -793.3419798081741, 2499.9508860763162)
        viewer.camera.lookAt(target, offset)
        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      }
    }
  }
</script>
```

## Instance Properties

<!-- prettier-ignore -->
| name      | type           | default | description                                                          |
| --------- | -------------- | ------- | -------------------------------------------------------------------- |
| url       | String\|Object |         | `required` The URL of the ArcGIS ImageServer service.                |
| token     | String         |         | `optional` The authorization token to use to connect to the service. |
| ellipsoid | Object         |         | `optional` The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.|

---

Refer to the official document: [ArcGISTiledElevationTerrainProvider](https://cesium.com/docs/cesiumjs-ref-doc/ArcGISTiledElevationTerrainProvider.html)

## Events

| name       | parameter                      | description                                                                                                       |
| ---------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| ready      | {Cesium, viewer, cesiumObject} | Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject. |
| errorEvent | TileProviderError              | Triggers when the terrain provider encounters an asynchronous error.                                              |

---
