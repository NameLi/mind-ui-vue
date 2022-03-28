<template>
  <page title="多选框 Checkbox">
    <demo-card title="基础用法" :desc="String(checkbox1)">
      <m-checkbox v-model="checkbox1" @change="onChange"> 复选框 </m-checkbox>
    </demo-card>

    <demo-card title="圆形" :desc="String(checkbox2)">
      <m-checkbox v-model="checkbox2" round @change="onChange">
        复选框
      </m-checkbox>
    </demo-card>

    <demo-card title="自定义颜色" :desc="String(checkbox3)">
      <m-checkbox v-model="checkbox3" checked-color="red" @change="onChange">
        复选框
      </m-checkbox>
    </demo-card>

    <demo-card title="禁用" :desc="String(checkbox4)">
      <m-checkbox v-model="checkbox4" disabled> 复选框 </m-checkbox>
    </demo-card>

    <demo-card title="label 居左" :desc="String(checkbox5)">
      <m-checkbox label-left v-model="checkbox5" @change="onChange">
        复选框
      </m-checkbox>
    </demo-card>

    <demo-card title="group 基础用法" :desc="String(result)">
      <m-checkbox-group v-model="result" @change="onGroupChange">
        <m-checkbox name="a">复选框a</m-checkbox>
        <m-checkbox name="b">复选框b</m-checkbox>
        <m-checkbox name="c">复选框c</m-checkbox>
        <m-checkbox name="d">复选框d</m-checkbox>
      </m-checkbox-group>
    </demo-card>

    <demo-card title="限制个数3个" :desc="String(result2)">
      <m-checkbox-group v-model="result2" :max="3" @change="onGroupChange2">
        <m-checkbox name="e">复选框e</m-checkbox>
        <m-checkbox name="f">复选框f</m-checkbox>
        <m-checkbox name="g">复选框g</m-checkbox>
        <m-checkbox name="h">复选框h</m-checkbox>
      </m-checkbox-group>
    </demo-card>

    <demo-card title="单元格中使用" no-margin>
      <m-cell-group border>
        <m-checkbox-group v-model="result3" :max="2" @change="onGroupChange">
          <m-cell title="复选框o">
            <m-checkbox name="o"></m-checkbox>
          </m-cell>
          <m-cell title="复选框p">
            <m-checkbox name="p"></m-checkbox>
          </m-cell>
          <m-cell title="复选框q">
            <m-checkbox name="q"></m-checkbox>
          </m-cell>
        </m-checkbox-group>
      </m-cell-group>
    </demo-card>
  </page>
</template>

<script>
export default {
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true,
      checkbox5: false,
      result: ["a", "b"],
      result2: [],
      result3: [],
    };
  },
  methods: {
    onChange(value) {},

    onGroupChange(value) {},

    onGroupChange2(value) {},
  },
};
</script>

<style lang="scss" scoped>
/deep/ .m-checkbox {
  margin-bottom: 12px !important;
}
</style>
