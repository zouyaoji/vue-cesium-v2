<template lang="pug">
  div
    md-toolbar(md-theme="default").top.md-dense.md-accent.main-banner
      span {{banner.message}}
      md-button(:href="banner.href").md-raised {{banner.caption}}
    md-whiteframe(md-tag="md-toolbar").top.header
      .md-toolbar-container
        md-button.menu-button.md-icon-button(@click="$refs.sidenav.toggle()")
          md-icon menu
        span.md-title(v-text="title") VUE CESIUM
        a(href="https://new.502502.xyz/#/register?code=jlz6Frzz" target="_blank" style="font-size: 16px; color: #fff") {{ lang === 'zh' ? '高速稳定梯子推荐' : 'Stable VPN Recommendation' }}
        md-button(@click="onDonorClick") {{ lang === 'zh' ? '赞助' : 'Donations' }}
        md-button.md-icon-button
          router-link.link(:to="otherUrl")
          md-icon(md-iconset="iconfont icon-zhongyingwenqiehuan-xianshizhongyingwen")
        md-button.md-icon-button(href="https://github.com/zouyaoji/vue-cesium-v2")
          md-icon(md-iconset="iconfont icon-github")
    md-sidenav.md-left.md-fixed.main-nav(ref="sidenav")
      md-toolbar(md-theme="white").logo
        div
        .ad-sense-frame
          ad-sense(adSlot="4608014562" :adStyle="{ display: 'inline-block', width: '235px', height: '235px' }")
      slot(name="side-nav")
    .page-content
      slot(name="page-content")
</template>

<script>
export default {
  props: ['lang'],
  data() {
    return {
      title: this.$route.name
    }
  },
  computed: {
    otherLang() {
      return this.lang === 'zh' ? 'en' : 'zh'
    },
    otherUrl() {
      const url =
        this.$route.path.indexOf('/zh/') !== -1
          ? this.$route.path.replace('/zh/', '/en/')
          : this.$route.path.replace('/en/', '/zh/')
      return url
    },
    banner() {
      const result =
        this.$route.path.indexOf('/zh/') !== -1
          ? {
              message: '这是 Vue Cesium 的旧版本！ 转到新版本以获取更新版本！',
              caption: '过去看看!',
              href: 'https://zouyaoji.top/vue-cesium/#/zh-CN'
            }
          : {
              message: 'This is an old version of Vue Cesium! Go to new version to get the updated version!',
              caption: 'CHECK IT OUT!',
              href: 'https://zouyaoji.top/vue-cesium/#/en-US'
            }
      return result
    }
  },
  mounted() {
    this.$router.afterEach((route) => {
      document.body.scrollTop = 0
      this.title = route.name
    })
  },
  methods: {
    onDonorClick() {
      // this.$router.push({ name: this.lang === 'zh' ? '赞助' : 'Donations' })
      window.open(
        this.lang === 'zh'
          ? 'https://zouyaoji.top/vue-cesium/#/zh-CN/donations'
          : 'https://zouyaoji.top/vue-cesium/#/en-US/donations'
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.header {
  top: 48px;
}

.main-banner {
  padding-left: 16px;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px;
  font-font-weight: 400;
  -webkit-font-smoothing antialiased;
  font-family: Roboto,Noto Sans,Noto,sans-serif;
}

.logo {
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  height: 16rem;
  justify-content: center;
  text-align: center;

  a.link:hover {
    text-decoration: none;
  }

  img {
    width: 90px;
    margin-bottom: 1rem;
  }
}

.md-icon-button {
  a.link {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: block;
    opacity: 0;
  }
}

.md-title {
  flex: 1;
}

.ad-sense-frame {
  position: absolute;
  right: 50px;
  top: 120px;
  width: 230px;
  height: auto;
  max-height: 300px;
  // background: red;
}

.page-content {
  padding-top: 112px;
}

@media (min-width: 1281px) {
  .md-title {
    margin-left: 8px !important;
  }

  .top {
    left: 304px;
  }
}
</style>
