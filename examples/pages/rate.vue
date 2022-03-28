<template>
  <page title="评分 Rate">
    <demo-card title="默认">
      <m-rate @change="onChange"></m-rate>
    </demo-card>

    <demo-card title="默认">
      <m-rate
        :step="2"
        :max="10"
        allow-half
        v-model="value2"
        @change="onChange"
      ></m-rate>
    </demo-card>

    <demo-card title="半选">
      <m-rate @change="onChange" allow-half></m-rate>
    </demo-card>

    <demo-card title="自定义数量">
      <m-rate @change="onChange" :value="3.5" :max="7"></m-rate>
    </demo-card>

    <demo-card title="自定义图标">
      <m-rate
        @change="onChange"
        icon="like-fill"
        color="#f00"
        void-icon="like-fill"
        :value="3.5"
      ></m-rate>
    </demo-card>

    <demo-card title="只读">
      <m-rate @change="onChange" :value="3.5" readonly></m-rate>
    </demo-card>

    <demo-card title="辅助文字">
      <m-rate @change="onChange" :value="3" show-text :texts="texts"></m-rate>
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-rate",
  data() {
    return {
      value2: 6,
      texts: ["极差", "较差", "一般", "不错", "很棒"],
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>
