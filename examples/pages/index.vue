<template>
  <page title="索引选择器 Index">
    <div class="demo-index">
      <m-index @change="onChange">
        <m-index-item name="当前">
          <div class="now-city">
            <m-tag plain size="medium">苏州</m-tag>
          </div>
        </m-index-item>

        <m-index-item name="热门">
          <div class="hot-city">
            <m-tag
              v-for="(item, index) in hotCities"
              :key="index"
              plain
              size="medium"
              >{{ item }}</m-tag
            >
          </div>
        </m-index-item>

        <m-index-item
          v-for="(item, index) in cities"
          :key="index"
          :name="item.key"
        >
          <div
            class="m-index-demo-item"
            v-for="(sub, idx) in item.list"
            :key="idx"
          >
            {{ sub.name }}
          </div>
        </m-index-item>
      </m-index>
    </div>
  </page>
</template>

<script>
import { cities } from "../static/city";

export default {
  name: "demo-index",
  data() {
    return {
      cities: [],

      hotCities: [
        "杭州",
        "北京",
        "上海",
        "广州",
        "深圳",
        "成都",
        "重庆",
        "天津",
        "南京",
        "苏州",
        "武汉",
        "西安",
      ],
    };
  },
  mounted() {
    let storeCity = new Array(26);
    const words = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    words.forEach((item, index) => {
      storeCity[index] = {
        key: item,
        list: [],
      };
    });

    cities.forEach((item) => {
      let firstName = item.pinyin.substring(0, 1);
      let index = words.indexOf(firstName);
      storeCity[index].list.push({
        name: item.name,
        key: firstName,
      });
    });

    this.cities = storeCity;
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss">
.demo-index {
  .m-index-demo-item {
    padding: 20px;
    font-size: 28px;
  }
  .now-city,
  .hot-city {
    margin: 10px 0;
    .m-tag {
      color: #333;
    }
  }
  .m-tag {
    margin: 12px 20px;
    width: 200px;
    box-sizing: border-box;
  }
}
</style>
