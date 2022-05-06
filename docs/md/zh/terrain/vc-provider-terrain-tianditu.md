<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-26 11:40:08
 * @LastEditTime: 2022-04-26 13:26:39
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\md\zh\terrain\vc-provider-terrain-tianditu.md
-->
<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:23:34
 * @LastEditTime: 2021-12-23 17:45:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\md\zh\terrain\vc-provider-terrain-cesium.md
-->
# VcProviderTerrainTianditu

`vc-provider-terrain-tianditu` 组件用于加载天地图地形。

## 示例

### 加载天地图地形

#### 预览

<doc-preview>
  <template>
    <div class="viewer">
      <vc-viewer @ready="ready">
        <vc-layer-imagery>
          <vc-provider-imagery-bingmaps url="https://dev.virtualearth.net" bm-key="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-" map-style="Aerial"></vc-provider-imagery-bingmaps>
        </vc-layer-imagery>
        <vc-provider-terrain-tianditu ref="terrain" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-terrain-tianditu>
        <vc-navigation></vc-navigation>
      </vc-viewer>
    </div>
  </template>
  <script>
    export default {
      data () {
        return {
        }
      },
      methods: {
        ready (cesiumInstance) {
          const {Cesium, viewer} = cesiumInstance
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
      <vc-layer-imagery>
        <vc-provider-imagery-bingmaps
          url="https://dev.virtualearth.net"
          bm-key="AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"
          map-style="Aerial"
        ></vc-provider-imagery-bingmaps>
      </vc-layer-imagery>
      <vc-provider-terrain-tianditu ref="terrain" token="436ce7e50d27eede2f2929307e6b33c0"></vc-provider-terrain-tianditu>
    </vc-viewer>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      ready(cesiumInstance) {
      }
    }
  }
</script>
```

## 属性

<!-- prettier-ignore -->
| 属性名 | 类型 | 默认值 | 描述 |
| --------------- | ------- | -------------------------------- | ------------------------------------------------------------------- |
| url | string | `'https://{s}.tianditu.gov.cn/'` | `required` 指定服务地址。 |
| subdomains | Array  | `['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7']` | 指定轮询子域名。 |
| pluginPath | string | `'https://api.tianditu.gov.cn/cdn/plugins/cesium/cesiumTdt.js'` | `optional` 指定天地图地形插件库地址。 |
| dataType | string | `int` | `optional` 指定数据类型。 |
| tileType | string | `heightmap` | `optional` 指定瓦片类型。 |
| token | string | | `optional` 指定天地图服务秘钥。 |

---

- 参考资料： **[天地图帮助文档](http://lbs.tianditu.gov.cn/docs/#/sanwei/)**

## 事件

| 事件名 | 参数                           | 描述                                                                             |
| ------ | ------------------------------ | -------------------------------------------------------------------------------- |
| ready  | {Cesium, viewer, cesiumObject} | 该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。 |

---
