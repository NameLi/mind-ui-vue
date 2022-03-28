<template>
  <page title="模态框 Modal">
    <demo-card title="JS 调用">
      <m-button @click="handleOpen6">Alert</m-button>
      <m-button @click="handleOpen7">Confirm</m-button>
      <m-button @click="handleOpen8">异步操作</m-button>
    </demo-card>

    <demo-card title="组件调用">
      <m-button @click="handleOpen1">Alert</m-button>
      <m-button @click="handleOpen2">Confirm</m-button>
      <m-button @click="handleOpen3">无标题自定义内容</m-button>
      <m-button @click="handleOpen4">异步操作</m-button>
    </demo-card>

    <m-modal
      title="提示"
      :visible.sync="visible1"
      @confirm="handleClose1"
      :show-cancel-button="false"
      content="操作成功！"
    ></m-modal>

    <m-modal title="提示" :visible.sync="visible2" @confirm="handleClose2">
      确定执行此操作？
    </m-modal>

    <m-modal :visible.sync="visible3" @confirm="handleClose3">
      <img
        class="custom-content"
        src="https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq"
      />
    </m-modal>

    <m-modal
      title="删除确认"
      :visible.sync="visible4"
      asyncClose
      confirmColor="red"
      @confirm="handleClose4"
      confirmButtonText="删除"
    >
      异步操作
    </m-modal>
  </page>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      loading: false,
    };
  },

  mounted() {},

  methods: {
    // 组件调用
    handleOpen1() {
      this.visible1 = true;
    },

    handleClose1() {
      this.visible1 = false;
    },

    handleOpen2() {
      this.visible2 = true;
    },

    handleClose2() {
      this.visible2 = false;
    },

    handleOpen3() {
      this.visible3 = true;
    },

    handleClose3() {
      this.visible3 = false;
    },

    handleOpen4() {
      this.visible4 = true;
    },

    handleClose4() {
      this.loading = true;

      setTimeout(() => {
        this.visible4 = false;
        this.loading = false;

        this.$message({
          content: "删除成功！",
          type: "success",
        });
      }, 2000);
    },

    // js 调用
    handleOpen6() {
      this.$modal
        .alert({
          title: "提示",
          content: "操作成功！",
        })
        .then(() => {
          this.$message({
            content: "确认回调",
            type: "success",
          });
        });
    },

    handleOpen7() {
      this.$modal
        .confirm({
          title: "提示",
          content: "操作成功！",
        })
        .then(() => {
          this.$message({
            content: "确认回调",
            type: "success",
          });
        })
        .catch(() => {
          this.$message({
            content: "取消回调",
            type: "warning",
          });
        });
    },

    handleOpen8() {
      this.$modal({
        title: "异步操作",
        content: "异步操作",
        confirmTextColor: "red",
        confirmButtonText: "删除",
        asyncClose: true,
      })
        .then((instance) => {
          setTimeout(() => {
            this.$message({
              content: "删除成功！",
              type: "success",
            });

            instance.close();
          }, 1200);
        })
        .catch((instance) => {
          this.$message({
            content: "取消回调",
            type: "warning",
          });
          instance.close();
        });
    },
  },
};
</script>

<style scoped lang="scss">
.custom-content {
  max-width: 100%;
  max-height: 250px;
}

/deep/ .m-button {
  margin-bottom: 15px;
  &.is-inline {
    margin-right: 20px !important;
  }
}
</style>
