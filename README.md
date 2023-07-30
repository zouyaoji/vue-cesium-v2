# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">VueCesium, a Vue 2.x & Vue 3.x based component library of CesiumJS for GISer.</p>

[![npm](https://img.shields.io/npm/v/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic)](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE)
[![Package Quality](https://npm.packagequality.com/shield/vue-cesium.svg)](https://packagequality.com/#?package=vue-cesium)

## Highlight Moments

- 🌎 2022-06-08 The moon project developed with vue-cesium was featured in the [CCTV News Broadcast](https://tv.cctv.com/2022/06/08/VIDEazqfs4AIBuVEvBzob6DA220608.shtml?spm=C31267.PXDaChrrDGdt.EbD5Beq0unIQ.29) on June 8, 2022, at 21 minutes and 52 seconds. [Screenshot](https://zouyaoji.top/vue-cesium/images/cctv.png).
- 🚀 2022-12-10 Joined the [Cesium Certified Developer Program](https://cesium.com/learn/certified-developer-directory/).
- 🎉 2023-04-25 The GitHub project `vue-cesium` has reached over 1000 [stars](https://github.com/zouyaoji/vue-cesium/stargazers)! Thank you all for your support and contributions.

## Notice

[**This is the Vue2 version of VueCesium! Go to new version to get the updated version!**](https://github.com/zouyaoji/vue-cesium)

**This project has stopped maintenance, it is recommended to use the Vue3 version of VueCesium.**

## Languages

- [中文](https://github.com/zouyaoji/vue-cesium-v2/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium-v2/blob/master/README.md)

- [中文 for vue 3.x](https://github.com/zouyaoji/vue-cesium/blob/dev/README.zh.md)
- [English for vue 3.x](https://github.com/zouyaoji/vue-cesium/blob/dev/README.md)

## Links

- [Documentation](https://zouyaoji.top/vue-cesium-v2)
- [Official Demo](https://sandcastle.cesium.com/)
- [More examples](https://github.com/zouyaoji/vue-cesium-demo)

## Get Start

VueCesium, a Vue 2.x & Vue 3.x based component library of CesiumJS for GISer.

Support loading official CesiumJS, or third-party platforms based on CesiumJS:

- [CesiumJS](https://cesium.com/platform/cesiumjs/)
- [SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)
- [Earth SDK](http://www.earthsdk.com/)
- [Mars3D](http://mars3d.cn/)
- [DC-SDK](http://dc.dvgis.cn/#/index)

### Installation

```bash
npm i --save vue-cesium@2.4.2
```

### Usage

```js
// main.js
import Vue from 'vue'
import VueCesium from 'vue-cesium@2.4.2'
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'
Vue.use(VueCesium, {
  cesiumPath: 'https://unpkg.com/cesium@1.100/Build/Cesium/Cesium.js'
})
```

```html
<template>
  <div class="viewer">
    <vc-viewer></vc-viewer>
  </div>
</template>

<style>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
```

### Configuration

```js
// main.js
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'

Vue.use(VueCesium, {
  // cesiumPath is the web service address that guides the use of Cesium.js, which can be a local or CDN address such as
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
  cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@1.100/Build/Cesium/Cesium.js',
  // If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon's online images and terrain to fail.
  accessToken: 'Your Cesium Ion defaultAccessToken',
  lang: lang // 2.0.3+ //  zh-hans
})
```

## License

[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2018-present, zouyaoji <370681295@qq.com>

## Sponsors

[See](https://zouyaoji.top/vue-cesium/#/en-US/donations)

## Contributors

This project wouldn't exist without our amazing contributors

<a href="https://github.com/zouyaoji/vue-cesium-v2/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zouyaoji/vue-cesium-v2" />
</a>

## QQGroup

[16533444](https://jq.qq.com/?_wv=1027&k=5BCrKOi)

![开心农场](https://zouyaoji.top/vue-cesium/images/开心农场.png) ![数字视觉](https://zouyaoji.top/vue-cesium/images/数字视觉.png)

## Reference

Two good vue components projects: [vue-baidu-map](https://github.com/Dafrok/vue-baidu-map) and [vuelayers](https://github.com/ghettovoice/vuelayers/).
