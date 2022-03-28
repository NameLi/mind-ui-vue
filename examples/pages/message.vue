<template>
  <page title="消息 Message">
    <demo-card title="基础用法">
      <m-button @click="handleDefault">默认提示</m-button>
    </demo-card>

    <demo-card title="不同类型">
      <m-button @click="handleDefault">默认提示</m-button>
      <m-button @click="handleSuccess">成功提示</m-button>
      <m-button @click="handleWarning">警告提示</m-button>
      <m-button @click="handleError">错误提示</m-button>
    </demo-card>

    <demo-card title="自定义配置">
      <m-button @click="handleDuration">自定义提示时间</m-button>
      <m-button @click="handleShowClose">显示关闭按钮</m-button>
      <m-button @click="handleOpen" v-if="!isOpen">需手动关闭提示</m-button>
      <m-button type="warning" plain @click="handleClose" v-else
        >手动关闭提示</m-button
      >
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-toast",
  data() {
    return {
      isOpen: false,
      msg: null,
      visible: false,
    };
  },

  mounted() {},

  methods: {
    handleDefault() {
      this.$message("这是一条默认提示");
    },

    handleSuccess() {
      this.$message.success("这是一条成功提示");
    },

    handleWarning() {
      this.$message.warning("这是一条警告提示");
    },

    handleError() {
      this.$message({
        content: "这是一条错误提醒",
        type: "error",
      });
    },

    handleDuration() {
      const msg = this.$message({
        content: "我将在 5 秒后消失",
        duration: 5000,
      });
    },

    handleShowClose() {
      this.$message({
        content: "显示关闭按钮",
        duration: 5000,
        showClose: true,
      });
    },

    handleOpen() {
      this.msg = this.$message({
        content: "主动调用关闭",
        duration: 0,
      });

      this.isOpen = true;
    },

    handleClose() {
      this.isOpen = false;
      this.msg.close();
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
