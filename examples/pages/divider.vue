<template>
  <page title="分割线 Divider">
    <demo-card title="基本用法">
      <m-divider content="我也是有底线的" />
    </demo-card>

    <demo-card title="自定义内容">
      <m-divider>
        <m-icon name="love" v-for="n in 5" :key="n" />
      </m-divider>
    </demo-card>

    <demo-card title="自定义颜色">
      <m-divider color="#2d8cf0">我也是有底线的</m-divider>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-divider",
};
</script>
