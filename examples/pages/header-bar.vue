<template>
  <page class="demo-page__header">
    <m-header-bar
      :back="back"
      :back-color="backColor"
      :title="title"
      :color="titleColor"
      :align="titleAlign"
      :bgcolor="bgcolor"
      :bg-image="bgImage"
      :loading="loading"
    >
      <div class="custom-title" v-if="!title">
        <div class="title">自定义 Header-bar</div>
        <div class="subtitle">副标题</div>
      </div>
    </m-header-bar>

    <div class="button-group" style="margin-top: 20px">
      <m-button @click="handleCuntomLoading">加载中</m-button>
      <m-button @click="handleCustomBgcolor">自定义背景色</m-button>

      <m-button @click="handleCustomBgcolorGradients">渐变背景色</m-button>

      <m-button @click="handleCustomBgImage">自定义背景图片</m-button>

      <m-button @click="handleCustomTitleColor">设置title为白色</m-button>

      <m-button @click="handleCustomTitleAlign">{{
        titleAlign === "center" ? "title 随平台对齐" : "title 居中对齐"
      }}</m-button>

      <m-button @click="handleCustomBackColor">自定义返回按钮为白色</m-button>

      <m-button @click="handleCustomBack">是否显示返回按钮</m-button>

      <m-button @click="handleCuntomTitle">自定义title区域内容</m-button>

      <m-button @click="handleReset" type="primary" plain>重置</m-button>
      
      <div style="height: 60vh"></div>
    </div>
  </page>
</template>

<script>
export default {
  name: "demo-header-bar",
  data() {
    return {
      title: "自定义 Header-bar",
      bgcolor: "",
      bgImage: "",
      titleColor: "",
      titleAlign: "",
      backColor: "",
      back: true,
      loading: false,
    };
  },
  methods: {
    handleCuntomLoading() {
      this.loading = !this.loading;
    },

    handleCustomBgcolor() {
      this.bgImage = "";

      const colors = [
        "#f8a52d",
        "#ff9902",
        "#a570f3",
        "#479eff",
        "#9ACD32",
        "#EE7942",
        "#EE7942",
      ];

      this.bgcolor = colors[Math.floor(Math.random() * 7)];
    },

    handleCustomBgcolorGradients() {
      this.bgImage = "";
      this.bgcolor = "linear-gradient(45deg, #9000ff , #5e00ff)";
    },

    handleCustomBgImage() {
      this.bgImage = "https://note-file.ixook.com/FiDc9WTfG9DwiFrbYRl6E6ljShqF";
    },

    handleCustomTitleColor() {
      this.titleColor = "#fff";
    },

    handleCustomTitleAlign() {
      this.titleAlign = this.titleAlign === "" ? "center" : "";
    },

    handleCustomBackColor() {
      this.backColor = "#fff";
    },

    handleCustomBack() {
      this.back = !this.back;
    },

    handleCuntomTitle() {
      this.title = "";
    },

    // 重置
    handleReset() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

<style lang="scss">
.demo-page__header {
  .m-button {
    margin: 10px 0;
  }

  .custom-title {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 30px;
  }

  .subtitle {
    font-size: 24px;
    color: #aaa;
  }
}
</style>
