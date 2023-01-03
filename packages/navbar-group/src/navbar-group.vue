<template>
  <div class="m-tabs__wrap" ref="tabs__wrap">
    <div class="m-tabs__scroll" ref="tabs__scroll">
      <div class="m-tabs__nav">
        <div class="m-tabs__line" v-if="lineHeight" :style="styles"></div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-navbar-group",
  props: {
    value: {
      type: String,
      default: "",
    },

    activeName: {
      type: [Number, String],
      default: "",
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    activeColor: {
      type: String,
      default: "",
    },

    lineWidth: {
      type: [Number, String],
      default: 0,
    },

    lineColor: {
      type: String,
      default: "",
    },

    lineHeight: {
      type: Number,
      default: 3,
    },
  },

  data() {
    return {
      baseLeft: 0,
      scrollLeft: 0,
      lineLeft: 0,
      activeLineWidth: 0,
      tabWidth: 0,
      activeTabName: null,
      timer: null,
      children: [],
      initTimer: null,
    };
  },

  computed: {
    styles() {
      if (!this.activeLineWidth || !this.lineHeight) return "";

      let styles = [
        "transform: translateX(" + this.lineLeft + "px)",
        "width:" + this.activeLineWidth + "px",
      ];

      if (this.lineHeight) {
        styles.push("height:" + this.lineHeight + "px");
      }

      if (this.lineColor) {
        styles.push("background-color:" + this.lineColor);
      }

      return styles.join(";");
    },
  },

  watch: {
    value() {
      this.initChildrenStyle();
    },
  },

  methods: {
    initChildrenStyle() {
      if (this.initTimer) clearTimeout(this.initTimer);
      this.initTimer = setTimeout(() => {
        this._updateChildren();
      }, 1000 / 60);
    },

    _updateChildren() {
      this.children = this.$slots.default.map((item) => {
        return item.child;
      });

      if (this.children.length) {
        this._updateWrapInfo(this.children);
      }
    },

    // 渲染完成后更新内容区域宽度
    _updateWrapInfo(children) {
      this.baseLeft =
        this.$refs.tabs__wrap.offsetLeft - this.$refs.tabs__scroll.offsetLeft;

      this.tabWidth = this.$refs.tabs__wrap.offsetWidth; // 选项卡总宽度

      const value = this.value || this.activeName;

      if (value) {
        children.forEach((child) => {
          if (child.name === value) {
            child.onClick();
          }
        });
      } else {
        children[0].onClick();
      }
    },

    updateScrollPositon(left, domWidth, lineWidth, name) {
      if (this.activeTabName === name) return;

      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      const oldScrollLeft = this.$refs.tabs__scroll.scrollLeft;

      let scrollLeft = left - this.tabWidth / 2 + domWidth / 2;
      scrollLeft = scrollLeft > 0 ? scrollLeft : 0;

      const diffDiatance = oldScrollLeft - scrollLeft; // 两次差值

      const custonLineWidth = this.lineWidth;

      const activeLineWidth = custonLineWidth
        ? custonLineWidth <= domWidth
          ? custonLineWidth
          : domWidth
        : lineWidth;

      const lineLeft = left + domWidth / 2 - activeLineWidth / 2;

      this.lineLeft = lineLeft;
      this.activeLineWidth = activeLineWidth;

      // if(scrollLeft === oldScrollLeft) return

      let loopTimes = 300 / 20; // 循环次数
      const perDistace = diffDiatance / loopTimes; // 每次移动距离

      let moveDistance = oldScrollLeft;

      this.timer = setInterval(() => {
        if (loopTimes > 0) {
          loopTimes--;
          moveDistance = moveDistance - perDistace; //diffDiatance

          this.$refs.tabs__scroll.scrollLeft = moveDistance;
        } else {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 20);

      this.$refs.tabs__scroll.scrollLeft = moveDistance;

      this.activeTabName = name;

      this.$emit("input", name);
      this.$emit("change", name);
    },
  },
};
</script>

<style lang="scss">
.m-tabs__wrap {
  justify-content: center;
  height: 88px;
  overflow: hidden;

  .m-tabs__scroll {
    // height: 88px;
    // padding-bottom: 20px;
    white-space: nowrap;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .m-tabs__nav {
    position: relative;
    display: flex;
    white-space: nowrap;
  }

  .m-tabs__line {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 3px;
    border-radius: 12px;
    background-color: var(--color-primary);
    transition-duration: 0.3s;
  }
}
</style>
