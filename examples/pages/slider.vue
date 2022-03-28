<template>
  <page title="滑动块 Slider">
    <demo-card title="基础用法" :desc="value1">
      <m-slider v-model="value1" @change="onChange1"></m-slider>
    </demo-card>

    <demo-card title="预设值" :desc="value2">
      <m-slider v-model="value2" @change="onChange2"></m-slider>
    </demo-card>

    <demo-card title="定义步长10" :desc="value3">
      <m-slider v-model="value3" :step="10" @change="onChange3"></m-slider>
    </demo-card>

    <demo-card title="定义区间 100-200" :desc="value4">
      <m-slider
        v-model="value4"
        :min="100"
        :max="200"
        @change="onChange4"
      ></m-slider>
    </demo-card>

    <demo-card title="定义线宽与颜色" :desc="value5">
      <m-slider
        v-model="value5"
        active-color="#ee0a24"
        bar-height="10"
        @change="onChange5"
      ></m-slider>
    </demo-card>

    <demo-card title="禁用" desc="50">
      <m-slider v-model="value7" disabled></m-slider>
    </demo-card>

    <demo-card title="自定义按钮" :desc="value6">
      <m-slider v-model="value6" use-slot @input="onChange6">
        <div class="custom-button">{{ value6 }}</div>
      </m-slider>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-slider",
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 0,
      value4: 0,
      value5: 0,
      value6: 0,
      value7: 50,
    };
  },
  methods: {
    onChange1(detail) {
      console.log(detail);
    },

    onChange2(detail) {},

    onChange3(detail) {},

    onChange4(detail) {},

    onChange5(detail) {},

    onChange6(detail) {},
  },
};
</script>

<style scoped lang="scss">
.custom-content-class {
  padding: 24px;
}

.custom-button {
  width: 52px;
  color: #fff;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  border-radius: 100px;
  background-color: $color-success;
}
</style>
