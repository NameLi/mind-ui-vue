<template>
  <div class="m-sticky">
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-sticky",
  props: {
    useSticky: {
      type: Boolean,
      default: false,
    },

    // 吸顶时与顶部的距离
    offsetTop: {
      type: [Number, String],
      default: 0,
    },

    // 层叠
    zIndex: {
      type: Number,
      default: 9,
    },
  },
  data() {
    return {
      timer: null,
      itemLength: 0,
      children: [],
      childLength: 0,
      absOffsetTop: 0,
    };
  },

  mounted() {
    window.addEventListener("scroll", this._updateScrollTopChange);

    this._updateAbsOffsetTop(this.offsetTop);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this._updateScrollTopChange);
  },

  methods: {
    _updateAbsOffsetTop(val) {
      if (!parseInt(val)) return;
      this.absOffsetTop = parseInt(val);
    },

    // 页面滚动
    _updateScrollTopChange() {
      if (this.useSticky) return;

      if (this.childLength) {
        this.children.forEach((child) => {
          child.updateScrollTopChange(window.scrollY);
        });
      }
    },

    // 更新子组件数据
    _updateChildren() {
      if (this.useSticky) return;

      // 防抖减少重复触发
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        const { zIndex } = this;

        const children = this.$slots.default.map((item) => {
          return item.child;
        });
        const len = children.length;

        this.children = children;
        this.childLength = len;

        if (len > 0) {
          children.forEach((child, index) => {
            child.updateRect(zIndex, index);
          });
        }
      }, 0);
    },
  },
};
</script>
