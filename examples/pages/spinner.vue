<template>
  <page title="加载中 Spinner">
    <demo-card title="不同类型">
      <m-cell-group>
        <m-cell title="triple">
          <m-spinner type="triple" />
        </m-cell>
        <m-cell title="snake">
          <m-spinner type="snake" />
        </m-cell>
        <m-cell title="bounce">
          <m-spinner type="bounce" />
        </m-cell>
        <m-cell title="circle">
          <m-spinner type="circle" />
        </m-cell>
        <m-cell title="加载中">
          <m-spinner type="dot" />
        </m-cell>
      </m-cell-group>
    </demo-card>

    <demo-card title="自定义颜色">
      <m-cell-group>
        <m-cell title="triple">
          <m-spinner type="triple" color="#f60, #7fd901, #36a2e0" />
        </m-cell>
        <m-cell title="snake">
          <m-spinner type="snake" color="#f60" />
        </m-cell>
        <m-cell title="bounce">
          <m-spinner type="bounce" color="#f60" />
        </m-cell>
        <m-cell title="circle">
          <m-spinner type="circle" color="#f60" />
        </m-cell>
        <m-cell title="加载中">
          <m-spinner type="dot" color="#f60" />
        </m-cell>
      </m-cell-group>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-spinner",
};
</script>
