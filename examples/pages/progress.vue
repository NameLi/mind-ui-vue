<template>
  <page class="demo-page__progress" title="进度条 Porgress">
    <demo-card title="基础用法">
      <m-progress percent="50" />
    </demo-card>

    <demo-card title="不同类型">
      <m-progress type="primary" percent="50" />
      <m-progress type="success" percent="50" />
      <m-progress type="warning" percent="50" />
      <m-progress type="danger" percent="50" />
    </demo-card>

    <demo-card title="自定义颜色">
      <m-progress point-text="橙色" active-color="orange" percent="25" />
    </demo-card>

    <demo-card title="自定义高度">
      <m-progress bar-height="12" percent="50" />
    </demo-card>

    <demo-card title="不显示节点">
      <m-progress :point-visible="false" percent="50" />
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-progress",
};
</script>

<style lang="scss">
.demo-page__progress {
  .progress {
    margin: 5px 15px 20px;
  }
}
</style>
