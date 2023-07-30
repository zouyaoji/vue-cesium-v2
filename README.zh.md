# VUE CESIUM

<p align="center">
  <img src="https://zouyaoji.top/vue-cesium/favicon.png" width="200px">
</p>
<p align="center">VueCesium，一套为 GISer 准备的基于 Vue 2.x & Vue 3.x 的 CesiumJS 组件库。</p>

[![npm](https://img.shields.io/npm/v/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![npm](https://img.shields.io/npm/dm/vue-cesium?style=plastic)](https://www.npmjs.com/package/vue-cesium)
[![license](https://img.shields.io/github/license/zouyaoji/vue-cesium?style=plastic)](https://github.com/zouyaoji/vue-cesium/blob/master/LICENSE)
[![Package Quality](https://npm.packagequality.com/shield/vue-cesium.svg)](https://packagequality.com/#?package=vue-cesium)

## 高光时刻

- 🌎 2022-06-08 用 vue-cesium 开发的月球项目上了 20220608 期[CCTV 新闻联播](https://tv.cctv.com/2022/06/08/VIDEazqfs4AIBuVEvBzob6DA220608.shtml?spm=C31267.PXDaChrrDGdt.EbD5Beq0unIQ.29)21 分 52 秒处。[截图](https://zouyaoji.top/vue-cesium/images/cctv.png)
- 🚀 2022-12-10 通过了 Cesium 开发者认证。[Cesium Certified Developer Program](https://cesium.com/learn/certified-developer-directory/)
- 🎉 2023-04-25 GitHub 项目 `vue-cesium` 已经突破 1000 个 Star！感谢大家的支持和贡献!

## 注意

[**这是 VueCesium 的 Vue2 版本！ 转到新版本以获取更新版本！**](https://github.com/zouyaoji/vue-cesium)

**本项目已经停止维护，建议使用 Vue3 版本的 VueCesium。**

## 语言

- [中文](https://github.com/zouyaoji/vue-cesium-v2/blob/master/README.zh.md)
- [English](https://github.com/zouyaoji/vue-cesium-v2/blob/master/README.md)

- [中文 for vue 3.x](https://github.com/zouyaoji/vue-cesium/blob/dev/README.zh.md)
- [English for vue 3.x](https://github.com/zouyaoji/vue-cesium/blob/dev/README.md)

## 链接

- [在线文档](https://zouyaoji.top/vue-cesium-v2)
- [官方例子](https://sandcastle.cesium.com/)
- [更多例子](https://github.com/zouyaoji/vue-cesium-demo)

## 开始

VueCesium，一套为 GISer 准备的基于 Vue 2.x & Vue 3.x 的 CesiumJS 组件库。

支持加载官方CesiumJS，或者基于CesiumJS的第三方平台:

- [官方 CesiumJS](https://cesium.com/platform/cesiumjs/)
- [超图 SuperMap iClient3D for WebGL](http://support.supermap.com.cn:8090/webgl/web/index.html)
- [西部世界 Earth SDK](http://www.earthsdk.com/)
- [火星科技Mars3D](http://mars3d.cn/)
- [数字视觉 DC-SDK](http://dc.dvgis.cn/#/index)

### 安装

```bash
npm i --save vue-cesium@2.4.2
```

### 使用

```js
// main.js
import Vue from 'vue'
import VueCesium from 'vue-cesium'
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

### 配置

```js
// main.js
import lang from 'vue-cesium/lang/zh-hans'
// import lang from 'vue-cesium/lang/en-us'

Vue.use(VueCesium, {
  // cesiumPath 是指引用 Cesium.js 的Web服务地址，可以是本地或者 CDN 地址如
  // cesiumPath: /static/Cesium/Cesium.js
  // cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js'
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
  cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  // 如果需要使用 Cesium ion 的资源时需要指定。到 https://cesium.com/ion/ 申请一个账户，获取Access Token。不指定的话可能导致 CesiumIon 的在线影像、地形加载失败。
  accessToken: 'Your Cesium Ion defaultAccessToken',
  lang: lang // 2.0.3+ //  zh-hans
})
```

## 协议

[MIT 许可证](https://opensource.org/licenses/MIT)

版权所有 (c) 2018 至今, zouyaoji <370681295@qq.com>

## 捐赠者

[链接](https://zouyaoji.top/vue-cesium/#/zh-CN/donations)


## 贡献者

如果没有以下出色的贡献者，这个项目就不会存在

<a href="https://github.com/zouyaoji/vue-cesium/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zouyaoji/vue-cesium" />
</a>

## QQ 交流群

[点击链接加入群聊【Cesium 开心农场(16533444)】](https://jq.qq.com/?_wv=1027&k=5BCrKOi)

![开心农场](https://zouyaoji.top/vue-cesium/images/开心农场.png) ![数字视觉](https://zouyaoji.top/vue-cesium/images/数字视觉.png)


## 参考

学习借鉴了项目[vue-baidu-map](https://github.com/Dafrok/vue-baidu-map)和[vuelayers](https://github.com/ghettovoice/vuelayers/)，表示感谢。
