<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-02-21 13:27:45
 * @LastEditTime: 2022-02-21 13:52:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium-v2\docs\components\AdSense.vue
-->
<template>
  <div class="adsense-content">
    <div class="adsense-title">{{sponsor}}</div>
    <div style="padding: 0 1.5rem">
      <ins
        class="adsbygoogle"
        style="display: block; text-align: center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3445228872340333"
        data-ad-slot="8270352624"
      ></ins>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    sponsor: function() {
      return this.$route.path.indexOf('/zh/') !== -1 ? '赞助商' : 'Sponsor'
    }
  },
  mounted() {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }
}
</script>

<style>
.adsense-content {
  max-width: 1440px;
  margin: 1.5rem auto;
}
.adsense-title {
  color: #999;
  transition: color 0.15s ease;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  padding: 0 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}
</style>
