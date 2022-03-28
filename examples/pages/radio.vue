<template>
  <page title="单选框 Radio">
    <demo-card title="基础用法" :desc="radio1">
      <m-radio-group v-model="radio1" @change="onChange">
        <m-radio name="选项1">选项1</m-radio>
        <m-radio name="选项2">选项2</m-radio>
      </m-radio-group>
    </demo-card>

    <demo-card title="禁用" :desc="radio2">
      <m-radio-group disabled v-model="radio2" @change="onChange">
        <m-radio name="选项1">选项1</m-radio>
        <m-radio name="选项2">选项2</m-radio>
      </m-radio-group>
    </demo-card>

    <demo-card title="自定义选中颜色" :desc="radio3">
      <m-radio-group
        checked-color="#00CDA2"
        v-model="radio3"
        @change="onChange"
      >
        <m-radio checked-color="red" name="选项1">选项1</m-radio>
        <m-radio checked-color="red" name="选项2">选项2</m-radio>
      </m-radio-group>
    </demo-card>

    <demo-card title="label 在左边" :desc="radio4">
      <m-radio-group label-left v-model="radio4" @change="onChange">
        <m-radio name="选项1">选项1</m-radio>
        <m-radio name="选项2">选项2</m-radio>
      </m-radio-group>
    </demo-card>

    <demo-card title="单元格" :desc="radio5" no-margin>
      <m-radio-group
        checked-color="#00CDA2"
        v-model="radio5"
        @change="onChange"
      >
        <m-cell icon="feed" icon-color="#00CDA2" title="选项1">
          <m-radio name="选项1"></m-radio>
        </m-cell>
        <m-cell icon="feed" icon-color="#00CDA2" title="选项2">
          <m-radio name="选项2"></m-radio>
        </m-cell>
      </m-radio-group>
    </demo-card>
  </page>
</template>

<script>
export default {
  data() {
    return {
      radio1: "",
      radio2: "选项1",
      radio3: "",
      radio4: "选项1",
      radio5: "选项1",
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .m-radio {
  margin-bottom: 12px !important;
}
</style>
