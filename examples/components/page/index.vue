<template>
  <div class="page">
    <demo-header :title="title" v-if="title"></demo-header>

    <!-- 内容区 -->
    <div class="page-main" :style="!title ? 'top: 0' : ''">
      <slot></slot>
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

<style scoped lang="scss">
.page {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .page-main {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 56px; /*no*/
    right: 0;
    bottom: 0;
    background-color: #fff;
    overflow: auto;
  }
}
</style>