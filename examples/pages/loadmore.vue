<template>
  <page title="页底提示 Loadmore">
    <demo-card title="加载中">
      <m-loadmore :loading="true" />
      <m-loadmore spinner :loading="true" color="red" />
      <m-loadmore spinner :loading="true" loading-content="努力加载中~" />
    </demo-card>

    <demo-card title="加载完成">
      <m-loadmore :loading="false" />
      <m-loadmore :loading="false" load-end-content="我也是有底线的" />
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-loadmore",
};
</script>
