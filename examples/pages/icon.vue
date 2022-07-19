<template>
  <page class="demo-page__icon" title="图标 Icon">
    <demo-card title="基础用法">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon name="love" color="pink" size="40" />
        </div>
      </div>
    </demo-card>

    <demo-card title="自定义颜色">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon name="love" size="60" color="#0181ff" />
        </div>
        <div class="icon-item">
          <m-icon name="love" size="60" color="#EE5C42" />
        </div>
        <div class="icon-item">
          <m-icon name="love" size="60" color="#67c23a" />
        </div>
      </div>
    </demo-card>

    <demo-card title="自定义大小">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon name="love" size="48" />
        </div>
        <div class="icon-item">
          <m-icon name="love" size="60" />
        </div>
        <div class="icon-item">
          <m-icon name="love" size="84" />
        </div>
      </div>
    </demo-card>

    <demo-card title="外链图片">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon
            name="https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq"
            size="80"
          />
        </div>
      </div>
    </demo-card>

    <demo-card title="基础图标">
      <m-grid :column-count="4">
        <m-grid-item icon="confirm" text="confirm" />
        <m-grid-item icon="cross" text="cross" />
        <m-grid-item icon="plus" text="plus" />
        <m-grid-item icon="fail" text="fail" />
        <m-grid-item icon="arrow-left" text="arrow-left" />
        <m-grid-item icon="arrow-up" text="arrow-up" />
        <m-grid-item icon="arrow-right" text="arrow-right" />
        <m-grid-item icon="arrow-down" text="arrow-down" />
      </m-grid>
    </demo-card>

    <demo-card title="内置图标">
      <m-grid :column-count="4">
        <m-grid-item
          v-for="item in list"
          :key="item"
          :icon="item"
          :text="item"
        />
      </m-grid>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-icon",
  data() {
    return {
      list: [
        "star",
        "star-fill",
        "like",
        "like-fill",
        "up",
        "down",
        "send",
        "send-fill",
        "see",
        "see-fill",
        "boy",
        "girl",
        "unknown",
        "edit",
        "set",
        "date",
        "news",
        "feed",
        "aboutus",
        "search",
        "more",
        "category",
        "close-fill",
        "delete",
      ],
    };
  },
};
</script>

<style lang="scss">
.demo-page__icon {
  .demo-card__content {
    margin-left: -32px;
    margin-right: -32px;
  }

  .icon-wrap {
    font-size: 0;
  }

  .icon-item {
    display: inline-block;
    padding: 30px 0;
    min-width: 33%;
    max-width: 33.3%;
    text-align: center;
  }

  .icon-name {
    font-size: 32px;
    color: #aaa;
  }
}
</style>
