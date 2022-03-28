<template>
  <div class="m-sticky-item custom-class" ref="wrap">
    <div class="sticky" :style="getWrapStyle">
      <div
        ref="header"
        class="m-sticky-item__header"
        :class="isFixed === true ? 'm-sticky__is-fixed' : ''"
        :style="getStyle"
      >
        <slot name="title"></slot>
      </div>
    </div>

    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "m-sticky-item",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      headerH: 0,
      top: 0,
      height: 0,
      isFixed: false,
      zIndex: 9,
    };
  },

  computed: {
    getWrapStyle() {
      let styles = ["top:" + this.offsetTop + "px", "z-index:" + this.zIndex];
      if (this.headerH) {
        styles.push("height: " + this.headerH + "px");
      }
      return styles.join(";");
    },
    getStyle() {
      return [`top: ${this.offsetTop}px`, `z-index: ${this.zIndex}`].join(";");
    },
    offsetTop() {
      return this.$parent.absOffsetTop;
    },
  },

  mounted() {
    this.$parent._updateChildren();
  },

  methods: {
    // 页面滚动判断组件距离顶部距离是否改吸顶
    updateScrollTopChange(scrollTop) {
      const { top, height, name, offsetTop } = this;

      let isFixed = scrollTop + offsetTop >= top && scrollTop < top + height;

      if (this.isFixed !== isFixed) {
        if (isFixed && name) {
          this.$parent.$emit("change", name);
        }

        this.isFixed = isFixed;
      }
    },

    // 更新元素高度
    updateRect(zIndex, index) {
      this.zIndex = zIndex;

      this.getHeaderHeight();

      this.$nextTick(() => {
        const dom = this.$refs.wrap;
        this.top = dom.offsetTop;
        this.height = dom.offsetHeight;
      });
    },

    getHeaderHeight() {
      this.$nextTick(() => {
        this.headerH = this.$refs.header.offsetHeight;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.m-sticky-item {
  position: relative;
}

.m-sticky-item__header {
  width: 100%;
}

.sticky {
  width: 100%;
  z-index: 9;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.m-sticky-item__title {
  z-index: 1;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: #eee;
}

.m-sticky__is-fixed {
  position: fixed;
  top: 0;
}
</style>
