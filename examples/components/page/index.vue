<template>
  <div class="demo-page">
    <demo-header :title="title" v-if="title" />

    <!-- 内容区 -->
    <div class="demo-page__main" :style="!title ? 'top: 0' : ''">
      <slot />
    </div>
  </div>
</template>

<script>
import DemoHeader from "../demo-header/DemoHeader.vue";
export default {
  name: "Page",

  components: { DemoHeader },

  props: {
    zIndex: {
      type: [Number, String],
      default: 97,
    },
    title: {
      type: String,
      default: "",
    },
  },

  mounted() {
    this.$preventScroll(true);
  },

  beforeDestroy() {
    this.$preventScroll(false);
  },

  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
.demo-page {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .demo-page__main {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 56PX; /*no*/
    right: 0;
    bottom: 0;
    background-color: #fff;
    overflow: auto;
  }
}
</style>