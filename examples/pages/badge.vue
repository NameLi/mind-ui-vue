<template>
  <page title="徽章 Badge">
    <demo-card title="基础用法">
      <m-badge value="42">
        <div class="demo-badge"></div>
      </m-badge>
    </demo-card>

    <demo-card title="小红点">
      <m-badge is-dot>
        <div class="demo-badge"></div>
      </m-badge>
    </demo-card>

    <demo-card title="自定义颜色与溢出值">
      <m-badge value="101" bgcolor="#67c23a" max="100">
        <div class="demo-badge"></div>
      </m-badge>
    </demo-card>

    <demo-card title="自定义内容">
      <m-badge value="new">
        <div class="demo-badge"></div>
      </m-badge>
    </demo-card>

    <demo-card title="配合其它组件使用">
      <m-navbar-group @click="onClick" @change="onChange">
        <m-navbar title="标签1" name="tab1" value="new" />
        <m-navbar title="标签2" name="tab2" value="8" />
        <m-navbar title="标签3" name="tab3" />
      </m-navbar-group>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-badge",
  methods: {
    onClick(e) {},
    onChange(name) {
      console.log(name);
    },
  },
};
</script>

<style lang="scss">
.demo-badge {
  width: 90px;
  height: 90px;
  background: #eee;
  border-radius: 12px;
  display: inline-block;
}
</style>
