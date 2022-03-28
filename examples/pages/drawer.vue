<template>
  <page title="抽屉 Drawer">
    <div style="margin-top: 20px"></div>

    <div class="button-group">
      <m-button @click="toggleLeft">左边弹出</m-button>
      <m-button @click="toggleRight">右边弹出</m-button>
      <m-button @click="toggleTop">上边弹出</m-button>
      <m-button @click="toggleBottom">下边弹出</m-button>
      <m-button @click="toggleMaskBottom">点击蒙层不可关闭</m-button>
    </div>

    <!-- 左边弹出 -->
    <m-drawer position="left" :visible="showLeft" @close="toggleLeft">
      <div class="container">左边弹出</div>
    </m-drawer>

    <!-- 右边弹出 -->
    <m-drawer position="right" :visible="showRight" @close="toggleRight">
      <div class="container">右边弹出</div>
    </m-drawer>

    <!-- 上边弹出 -->
    <m-drawer position="top" :visible="showTop" @close="toggleTop">
      <div class="container2">上边弹出</div>
    </m-drawer>

    <!-- 下边弹出 -->
    <m-drawer position="bottom" :visible="showBottom" @close="toggleBottom">
      <div class="container2">下边弹出</div>
    </m-drawer>

    <!-- 点击蒙层不可关闭 -->
    <m-drawer
      position="bottom"
      :visible="showCloseBottom"
      :mask-closable="false"
    >
      <div class="container2">
        <m-button @click="toggleMaskBottom">点我关闭</m-button>
      </div>
    </m-drawer>
  </page>
</template>

<script>
export default {
  data() {
    return {
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false,
      showCloseBottom: false,
    };
  },
  methods: {
    // 左边抽屉
    toggleLeft() {
      this.showLeft = !this.showLeft;
    },

    // 右边抽屉
    toggleRight() {
      this.showRight = !this.showRight;
    },

    // 上边抽屉
    toggleTop() {
      this.showTop = !this.showTop;
    },

    // 下边抽屉
    toggleBottom() {
      this.showBottom = !this.showBottom;
    },

    // 点击蒙层不可关闭
    toggleMaskBottom() {
      this.showCloseBottom = !this.showCloseBottom;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 50vw;
  height: 100vh;
  background: #fff;
}

.container2 {
  padding: 32px;
  width: 100vw;
  height: 40vh;
  background: #fff;
  box-sizing: border-box;
}

.container,
.container2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
