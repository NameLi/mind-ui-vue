<template>
  <page class="demo-style__page" title="内置样式 Style">
    <demo-card class="demo-style__card" title="1px 边框">
      <div class="m-hairline--top"></div>
    </demo-card>

    <m-cell-group title="动画" border card>
      <m-cell title="Fade" @click="animation('m-fade')" />
      <m-cell title="Slide Up" @click="animation('m-slide-up')" />
      <m-cell title="Slide Down" @click="animation('m-slide-down')" />
      <m-cell title="Slide Left" @click="animation('m-slide-left')" />
      <m-cell title="Slide Right" @click="animation('m-slide-right')" />
    </m-cell-group>

    <transition :name="transitionName">
      <div class="demo-style__toast" v-show="visible"></div>
    </transition>
  </page>
</template>

<script>
export default {
  name: "demo-style",
  data() {
    return {
      transitionName: "",
      visible: false,
    };
  },
  methods: {
    animation(name) {
      this.visible = true;

      this.transitionName = name;

      setTimeout(() => {
        this.visible = false;
      }, 600);
    },
  },
};
</script>

<style lang="scss">
.demo-style__page {
  .demo-page__main {
    background-color: #f4f4f4 !important;
  }
}
.demo-style__card {
  margin: 32px;
  background-color: #fff;
}
.demo-style__toast {
  z-index: 99;
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  background-color: #409eff;
}
</style>
