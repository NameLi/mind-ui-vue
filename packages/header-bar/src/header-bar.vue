<template>
  <div class="m-header-bar">
    <div class="m-header" :style="bgColorStyle">
      <div class="m-header-container">
        <div v-if="back" class="m-header-back" @click="pathGo()">
          <i class="back-icon" :style="'background: ' + backColor"></i>
        </div>

        <div
          v-if="title"
          class="m-header-content"
          :class="titleAlignClass"
          :style="color ? 'color :' + color : ''"
        >
          <div class="m-header-title">{{ title }}</div>
          <div class="m-spinner__loading">
            <div v-if="loading" class="m-spinner__snake"></div>
          </div>
        </div>

        <div class="m-header-content" v-else>
          <slot />
        </div>

        <div v-if="back" class="m-header-back"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-header-bar",
  
  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    // 背景色
    bgcolor: {
      type: String,
      default: "",
    },
    // 返回按钮与字体色
    backColor: {
      type: String,
      default: "#000",
    },
    // 标题文字色
    color: {
      type: String,
      default: "#000",
    },
    // 标题
    title: {
      type: String,
      default: "",
    },

    // 是否显示返回按钮
    back: {
      type: Boolean,
      default: false,
    },

    delta: {
      type: Number,
      default: -1,
    },

    // 是否显示返回按钮，默认跟随平台，ios居中对其，Android左对齐
    align: {
      type: String,
      default: "",
    },

    // 背景图片地址
    bgImage: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isIOS: false,
    };
  },

  computed: {
    bgColorStyle() {
      if (this.bgImage) {
        return `background-image: url("${this.bgImage}")`;
      } else if (this.bgcolor) {
        if (this.bgcolor.includes("gradient")) {
          return `background-image: ${this.bgcolor};`;
        } else {
          return `background-color: ${this.bgcolor};`;
        }
      } else {
        return "";
      }
    },

    titleAlignClass() {
      if (this.align) {
        return this.align;
      } else if (this.isIOS) {
        return "center";
      } else {
        return "";
      }
    },
  },

  mounted() {
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      this.isIOS = true;
    }
  },

  methods: {
    pathGo() {
      this.$router.go(this.delta);
    },
  },
};
</script>

<style lang="scss">
.m-header-bar {
  display: block;
  position: relative;
  height: 56PX; /*no*/

  .m-header {
    z-index: 1999;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    box-sizing: content-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
  }

  .m-header-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 56PX; /*no*/
  }

  .m-header .m-header-back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    padding-left: 20px;
    height: 100%;
  }

  .m-header .m-header-back .back-icon {
    width: 32px;
    height: 32px;
    background-color: #000;
    -webkit-mask: url("./back.svg") no-repeat 50% 50%;
    mask: url("./back.svg") no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
  }

  .m-header .m-header-content {
    flex: 1;
    width: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .m-header .m-header-content.center {
    justify-content: center;
  }

  .m-header-content .m-header-title {
    max-width: 420px;
    line-height: 1;
    font-size: 32px;
    font-family: "-apple-system-font", "Helvetica Neue", Helvetica, "sans-serif";
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .m-header-content.center .m-header-title {
    width: 260px;
  }

  .m-spinner__loading {
    margin-left: 10px;
  }

  .m-spinner__snake {
    display: inline-block;
    width: 11PX; /*no*/
    height: 11PX; /*no*/
    border-radius: 50%;
    border: 2px solid; /*no*/
    border-top-color: transparent;
    vertical-align: middle;
    animation: m-loading-snake 0.8s linear infinite;
  }

  @keyframes m-loading-snake {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
