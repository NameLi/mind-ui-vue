<template>
  <page title="标签 Tag">
    <demo-card title="基础用法">
      <div class="tag-group">
        <m-tag type="primary">标签</m-tag>
        <m-tag type="success">标签</m-tag>
        <m-tag type="info">标签</m-tag>
        <m-tag type="warning">标签</m-tag>
        <m-tag type="danger">标签</m-tag>
      </div>
    </demo-card>

    <demo-card title="朴素">
      <div class="tag-group">
        <m-tag type="primary" plain>标签</m-tag>
        <m-tag type="success" plain>标签</m-tag>
        <m-tag type="info" plain>标签</m-tag>
        <m-tag type="warning" plain>标签</m-tag>
        <m-tag type="danger" plain>标签</m-tag>
      </div>
    </demo-card>

    <demo-card title="圆角">
      <div class="tag-group">
        <m-tag type="primary" round>标签</m-tag>
        <m-tag type="success" plain round>标签</m-tag>
      </div>
    </demo-card>

    <demo-card title="不同尺寸">
      <div class="tag-group">
        <m-tag type="primary" size="mini">标签</m-tag>
        <m-tag type="success" size="small">标签</m-tag>
        <m-tag type="warning" size="medium">标签</m-tag>
      </div>
    </demo-card>

    <demo-card title="自定义颜色">
      <div class="tag-group">
        <m-tag color="#EE5C42">标签</m-tag>
        <m-tag plain color="#777">标签</m-tag>
      </div>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-tag",
};
</script>

<style scoped lang="scss">
.tag-group {
  .m-tag {
    margin-right: 20px;
  }
}
</style>
