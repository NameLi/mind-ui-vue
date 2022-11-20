<template>
  <page class="demo-page__notice" title="通告栏 NoticeBar">
    <demo-card title="基础用法">
      <m-notice-bar>
        练得身形似鹤形，千株松下两函经。 我来问道无馀说，云在青霄水在瓶。
        选得幽居惬野情，终年无送亦无迎。 有时直上孤峰顶，月下披云啸一声。
      </m-notice-bar>
    </demo-card>

    <demo-card title="内容超出不滚动">
      <m-notice-bar :scrollable="false">
        练得身形似鹤形，千株松下两函经。 我来问道无馀说，云在青霄水在瓶。
        选得幽居惬野情，终年无送亦无迎。 有时直上孤峰顶，月下披云啸一声。
      </m-notice-bar>
    </demo-card>

    <demo-card title="多行显示">
      <m-notice-bar multiline>
        练得身形似鹤形，千株松下两函经。 我来问道无馀说，云在青霄水在瓶。
        选得幽居惬野情，终年无送亦无迎。 有时直上孤峰顶，月下披云啸一声。
      </m-notice-bar>
    </demo-card>

    <demo-card title="自定义两端内容">
      <m-notice-bar>
        <div class="preifx" slot="preifx">
          <m-icon name="notice" size="36" color="#ed6a0c" />
        </div>

        <div>
          练得身形似鹤形，千株松下两函经。 我来问道无馀说，云在青霄水在瓶。
          选得幽居惬野情，终年无送亦无迎。 有时直上孤峰顶，月下披云啸一声。
        </div>

        <div class="suffix" slot="suffix">
          <m-icon name="cross" size="32" color="#ed6a0c" />
        </div>
      </m-notice-bar>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-notice-bar",
};
</script>

<style lang="scss">
.demo-page__notice {
  .demo-card__content {
    margin: 0 -32px;
  }
  .split-line {
    height: 30px;
  }
  .preifx,
  .suffix {
    padding: 0 20px;
  }
}
</style>
