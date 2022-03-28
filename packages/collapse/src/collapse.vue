<template>
  <div
    class="collapse__wrap"
    :style="styles"
    @transitionend="onTransitionEnd"
  >
    <div class="content" ref="content">
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
      value: 300,
    },
    visible: {
      type: Boolean,
      value: false,
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
        this.contentHeight = 0
      }
		}
	},
	computed: {
		styles() {
			return [`height: ${this.contentHeight}px`, `transition-duration: ${this.duration}ms`].join(";")
		}
	},
  mounted() {
    this.isReady = true;

    if (this.visible) {
			this.getContainerHeight();
    }
  },

  methods: {
    getContainerHeight() {
        const contentHeight = this.$refs.content.offsetHeight
        this.contentHeight = contentHeight
    },

    onTransitionEnd() {
      this.$emit("on-change", this.visible);
    },
  },
};
</script>

<style scoped lang="scss">
.collapse__wrap {
  transition-property: height;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  overflow: hidden;
  height: 0;
}
</style>
