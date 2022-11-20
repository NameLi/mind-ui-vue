<template>
  <div class="m-collapse" :style="styles" @transitionend="onTransitionEnd">
    <div class="m-collapse__content" ref="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "m-collapse",

  props: {
    duration: {
      type: [Number, String],
      default: 300,
    },
    value: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: undefined,
    },
  },

  data() {
    return {
      contentHeight: 0, // 内容区域高度
      isReady: false,
    };
  },

  watch: {
    visible(val) {
      if (val && this.isReady) {
        this.getContainerHeight();
      } else {
        this.contentHeight = 0;
      }
    },
    value(val) {
      if (val && this.isReady) {
        this.getContainerHeight();
      } else {
        this.contentHeight = 0;
      }
    },
  },

  computed: {
    styles() {
      return [
        `height: ${this.contentHeight}px`,
        `transition-duration: ${this.duration}ms`,
      ].join(";");
    },
  },
  mounted() {
    this.isReady = true;

    if (this.value || this.visible) {
      this.getContainerHeight();
    }
  },

  methods: {
    getContainerHeight() {
      this.$nextTick(() => {
        this.contentHeight = this.$refs.content.offsetHeight;
      });
    },

    onTransitionEnd() {
      const value = this.visible === undefined ? this.value : this.visible;

      this.$emit("input", value);
      this.$emit("on-change", value);
    },
  },
};
</script>

<style lang="scss">
.m-collapse {
  transition-property: height;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  overflow: hidden;
  height: 0;
}
</style>
