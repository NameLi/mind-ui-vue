<template>
  <page title="操作表单 ActionSheet">
    <div class="button-group" style="margin-top: 160px">
      <m-button @click="handleOpen1">基础用法</m-button>
      <m-button @click="handleOpen2">自定义头部</m-button>
      <m-button @click="handleOpen3">不显示取消按钮</m-button>
    </div>

    <!-- 基础用法 -->
    <m-action-sheet
      :visible="visible1"
      :actions="actions1"
      show-cancel
      @cancel="handleCancel1"
      @click="handleClickItem1"
    ></m-action-sheet>

    <!-- 自定义头部 -->
    <m-action-sheet
      :visible="visible2"
      :actions="actions2"
      show-cancel
      @cancel="handleCancel2"
      @click="handleClickItem2"
    >
      <div slot="header" class="custom-header">
        <div class="custom-title">确定吗？</div>
        <span>删除后无法恢复哦</span>
      </div>
    </m-action-sheet>

    <!-- 不显示取消按钮 -->
    <m-action-sheet
      :visible="visible3"
      :actions="actions3"
      @cancel="handleCancel3"
      @click="handleClickItem3"
    >
    </m-action-sheet>
  </page>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      actions1: [
        {
          name: "选项1",
        },
        {
          name: "选项2",
          loading: true,
        },
        {
          name: "选项3",
          icon: "love",
          color: "#EE5C42",
          // disabled: true,
        },
        {
          name: "禁用",
          disabled: true,
        },
      ],

      visible2: false,
      actions2: [
        {
          name: "删除",
          color: "#ed3f14",
        },
      ],

      visible3: false,
      actions3: [
        {
          name: "确定",
        },
        {
          name: "关闭",
        },
      ],
    };
  },
  methods: {
    handleOpen1() {
      this.visible1 = true;
    },

    handleCancel1() {
      this.visible1 = false;
    },

    handleOpen2() {
      this.visible2 = true;
    },

    handleCancel2() {
      this.visible2 = false;
    },

    handleOpen3() {
      this.visible3 = true;
    },

    handleCancel3() {
      this.visible3 = false;
    },

    handleClickItem1(index) {
      const idx = index + 1;
      this.$message("点击了选项" + idx);
    },

    handleClickItem2() {
      const action = [...this.actions2];
      action[0].loading = true;

      this.actions2 = action;

      setTimeout(() => {
        action[0].loading = false;
        this.visible2 = false;
        this.actions2 = action;

        this.$message.success("删除成功！");
      }, 2000);
    },

    handleClickItem3(index) {
      this.visible3 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-header {
  padding: 24px;
  .custom-title {
    color: #444;
    font-size: 32px;
  }
}
</style>
