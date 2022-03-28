<template>
  <page title="图标 Icon">
    <demo-card title="基础用法">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon name="love" color="pink" size="40"></m-icon>
        </div>
      </div>
    </demo-card>

    <demo-card title="自定义颜色">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon name="love" size="60" color="#0181ff"></m-icon>
        </div>
        <div class="icon-item">
          <m-icon name="love" size="60" color="#EE5C42"></m-icon>
        </div>
        <div class="icon-item">
          <m-icon name="love" size="60" color="#67c23a"></m-icon>
        </div>
      </div>
    </demo-card>

    <demo-card title="自定义大小">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon name="love" size="48"></m-icon>
        </div>
        <div class="icon-item">
          <m-icon name="love" size="60"></m-icon>
        </div>
        <div class="icon-item">
          <m-icon name="love" size="84"></m-icon>
        </div>
      </div>
    </demo-card>

    <demo-card title="外链图片">
      <div class="icon-wrap">
        <div class="icon-item">
          <m-icon
            name="https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq"
            size="80"
          ></m-icon>
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

<style scoped lang="scss">
/deep/ .custom-content-class {
  margin-left: -32px;
  margin-right: -30px;
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
</style>
