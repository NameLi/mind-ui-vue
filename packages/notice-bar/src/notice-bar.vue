<template>
  <div class="m-notice-bar__wrap">
    <slot name="preifx" />

    <div class="m-notice-bar">
      <div class="m-notice-bar__content" :class="classes" :style="styles">
        <slot />
      </div>
    </div>

    <slot name="suffix" />
  </div>
</template>

<script>
export default {
  name: "m-notice-bar",
  props: {
    // 延迟播放时长
    delay: {
      type: Number,
      default: 1,
    },
    // 滚动速度 rpx/s
    speed: {
      type: Number,
      default: 150,
    },
    // 长度溢出时自动滚动播放
    scrollable: {
      type: Boolean,
      default: true,
    },
    multiline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      delaySec: 0,
      isScrollable: true,
    };
  },
  watch: {
    scrollable(val) {
      this.isScrollable = val;
    },
  },
  computed: {
    styles() {
      if (!this.isScrollable || this.delaySec === 0 || this.multiline)
        return "";
      return [
        "animation-name: m-notice-once, m-notice-round",
        `animation-duration: ${this.delaySec}s, ${
          this.delaySec + 750 / this.speed
        }s`,
        "animation-timing-function: linear, linear",
        `animation-delay: ${this.delay}s, ${this.delaySec + this.delay}s`,
        "animation-iteration-count: 1, infinite",
      ].join(";");
    },
    classes() {
      let classes = [];
      if (!this.isScrollable) {
        classes.push("m-ellipsis");
      }
      if (this.multiline) {
        classes.push("m-multiline");
      }
      return classes.join(" ");
    },
  },
  mounted() {
    this.getContainerWidth();
  },
  methods: {
    getContainerWidth() {
      const wrapW = document.body.offsetWidth;
      const containW = document.querySelector(
        ".m-notice-bar__content"
      ).offsetWidth;
      const noticeW = document.querySelector(".m-notice-bar").offsetWidth;

      const absContainW = containW * (750 / wrapW); // 内容宽度

      // 内容宽度小于内容区域宽度，则不滚动
      if (containW <= noticeW) {
        this.isScrollable = false;
      }

      this.delaySec = absContainW / this.speed;
    },
  },
};
</script>

<style lang="scss">
@keyframes m-notice-once {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes m-notice-round {
  0% {
    transform: translateX(750px);
  }
  100% {
    transform: translateX(-100%);
  }
}
.m-notice-bar__wrap {
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #ed6a0c;
  background-color: #fffbe8;

  .m-notice-bar {
    position: relative;
    flex: 1;
    padding: 20px 16px;
    width: 0;
    min-height: 76px;
    line-height: 1.4;
    overflow: hidden;
  }

  .m-notice-bar__content {
    z-index: 0;
    position: absolute;
    white-space: nowrap;
    transform: translateX(0);
    animation-name: m-notice-once, round;
  }

  .m-ellipsis {
    position: static;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .m-multiline {
    position: static;
    overflow: auto;
    white-space: normal;
  }
}
</style>
