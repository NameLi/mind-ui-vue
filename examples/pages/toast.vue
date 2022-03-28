<template>
  <page title="提示 Toast">
    <demo-card title="基础用法">
      <m-button @click="handleToast">简单提示</m-button>
    </demo-card>

    <demo-card title="不同位置">
      <m-button inline @click="handleTextTop">top</m-button>
      <m-button inline @click="handleTextMiddle">middle</m-button>
      <m-button inline @click="handleTextBottom">bottom</m-button>
    </demo-card>

    <demo-card title="功能类">
      <m-button @click="handleLoading">Loading</m-button>
      <m-button @click="handleIcon">使用图标</m-button>
      <m-button @click="handleImage">使用图片</m-button>
      <m-button @click="handleMask">透明遮罩层</m-button>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-toast",

  mounted() {},

  methods: {
    // 基础文字提示
    handleToast() {
      this.$toast("simple toast");
    },

    // 不同位置
    handleTextTop() {
      this.$toast({
        message: "toast top",
        position: "top",
      });
    },

    handleTextMiddle() {
      this.$toast({
        message: "toast middle",
        position: "middle",
      });
    },

    handleTextBottom() {
      this.$toast({
        message: "toast bottom",
        position: "bottom",
      });
    },

    // 加载中
    handleLoading() {
      this.$toast({
        message: "加载中",
        type: "loading",
      });
    },

    // 内置图标
    handleIcon() {
      this.$toast({
        message: "使用内置的图标",
        icon: "love",
        iconColor: "#f56c6c",
      });
    },

    // 自定义图片
    handleImage() {
      this.$toast({
        message: "使用自定义图片",
        image: "https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq",
      });
    },

    // 开启蒙层
    handleMask() {
      const toast = this.$toast({
        message: "5 秒后自动关闭",
        duration: 0,
        mask: true,
      });

      let sec = 5;
      let timer = setInterval(() => {
        sec--;
        if (sec) {
          toast.message = `${sec} 秒后自动关闭`;
        } else {
          clearInterval(timer);
          toast.close();
        }
      }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
/deep/ .m-button {
  margin-bottom: 15px;
  &.is-inline {
    margin-right: 20px !important;
  }
}
</style>
