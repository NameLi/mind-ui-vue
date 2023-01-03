<template>
  <page title="吸顶容器 Sticky">
    <div style="height: 60px; background: #f5f5f5"></div>

    <m-sticky :offsetTop="0" @change="onChange">
      <m-sticky-item name="a">
        <div class="sticky-title" slot="title">
          <m-cell
            icon="love"
            icon-color="#00CDA2"
            title="2020-03-25"
            value="浪淘沙令"
          />
        </div>

        <div class="content" slot="content">
          <m-cell
            v-for="(n, index) in 12"
            :key="index"
            title="梦里不知身是客"
          />
        </div>
      </m-sticky-item>

      <m-sticky-item name="b">
        <div class="sticky-title" slot="title">
          <m-cell
            icon="love"
            icon-color="#00CDA2"
            title="2020-03-26"
            value="虞美人"
          />
        </div>

        <div class="content" slot="content">
          <m-cell
            v-for="(n, index) in 12"
            :key="index"
            title="雕栏玉砌应犹在"
          />
        </div>
      </m-sticky-item>

      <m-sticky-item name="c">
        <div class="sticky-title" slot="title">
          <m-cell
            icon="love"
            icon-color="#00CDA2"
            title="2020-03-27"
            value="念奴娇"
          />
        </div>

        <div class="content" slot="content">
          <m-cell v-for="(n, index) in 12" :key="index" title="人生如梦" />
        </div>
      </m-sticky-item>

      <m-sticky-item name="c">
        <div class="sticky-title" slot="title">
          <m-cell
            icon="love"
            icon-color="#00CDA2"
            title="2020-03-28"
            value="渔家傲"
          />
        </div>

        <div class="content" slot="content">
          <m-cell
            v-for="(n, index) in 12"
            :key="index"
            title="将军白发征夫泪"
          />
        </div>
      </m-sticky-item>
    </m-sticky>
  </page>
</template>

<script>
export default {
  name: "demo-sticky",
  data() {
    return {
      scrollTop: 0,
    };
  },
  methods: {
    onChange(detail) {
      console.log(detail);
    },
  },
};
</script>

<style lang="scss">
.sticky-title {
  height: 80px;
  line-height: 80px;
  background: #f5f5f5;
}

.item {
  height: 400px;
  border-bottom: 1PX solid #eee; /*no*/
}
</style>
