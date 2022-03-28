<template>
  <page title="按钮 Button">
    <demo-card title="形状">
      <m-button inline type="primary">Default</m-button>
      <m-button inline round type="primary">Round</m-button>
    </demo-card>

    <demo-card title="自定义颜色">
      <m-button inline color="#fff" bgcolor="#ff3621">Custom Color</m-button>
      <m-button inline color="#ff3621" plain>Custom Color</m-button>
    </demo-card>

    <demo-card title="块/行内">
      <m-button inline type="primary">Inline</m-button>
      <m-button type="primary">Default</m-button>
      <m-button full type="primary">Full</m-button>
    </demo-card>

    <!-- type -->
    <demo-card title="类型">
      <m-button type="ghost">Ghost</m-button>
      <m-button>Default / White</m-button>
      <m-button type="primary">Primary</m-button>
      <m-button type="info">Info</m-button>
      <m-button type="success">Success</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="danger">Danger</m-button>
    </demo-card>

    <!-- plain -->
    <demo-card title="朴素">
      <m-button>Default</m-button>
      <m-button type="primary" plain>Primary</m-button>
      <m-button type="info" plain>Info</m-button>
      <m-button type="success" plain>Success</m-button>
      <m-button type="warning" plain>Warning</m-button>
      <m-button type="danger" plain>Danger</m-button>
    </demo-card>

    <!-- size -->
    <demo-card title="尺寸">
      <m-button type="primary" size="large" inline>Large</m-button>
      <m-button type="primary" size="default" inline>Default</m-button>
      <m-button type="primary" size="small" inline>Small</m-button>

      <m-button type="primary" size="large" inline plain>Large</m-button>
      <m-button type="primary" size="default" inline plain>Default</m-button>
      <m-button type="primary" size="small" inline plain>Small</m-button>

      <m-button type="primary" size="large" inline round>Large</m-button>
      <m-button type="primary" size="default" inline round>Default</m-button>
      <m-button type="primary" size="small" inline round>Small</m-button>

      <m-button type="primary" size="large" inline round plain>Large</m-button>
      <m-button type="primary" size="default" inline round plain
        >Default</m-button
      >
      <m-button type="primary" size="small" inline round plain>Small</m-button>
    </demo-card>

    <!-- disabled -->
    <demo-card title="禁用">
      <m-button type="primary" disabled>Primary</m-button>
      <m-button type="info" disabled>Info</m-button>
      <m-button type="success" disabled>Success</m-button>
      <m-button type="warning" disabled>Warning</m-button>
      <m-button type="danger" disabled>Danger</m-button>
    </demo-card>

    <!-- loading -->
    <demo-card title="加载中">
      <m-button type="primary" inline loading>Default</m-button>
      <m-button type="primary" inline plain round loading>Default</m-button>
      <m-button type="primary" inline loading>Default</m-button>
      <m-button type="primary" inline round loading>Default</m-button>
      <m-button type="primary" plain loading>Loading</m-button>
      <m-button type="primary" loading>Loading</m-button>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-button",
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
