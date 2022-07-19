<template>
  <page title="开关 Switch">
    <demo-card title="基础用法">
      <m-switch v-model="checked" @change="onChange" />
    </demo-card>

    <demo-card title="禁用状态">
      <m-switch v-model="switchDisabled" disabled />
    </demo-card>

    <demo-card title="加载状态">
      <m-switch v-model="switchLoading" loading />
    </demo-card>

    <demo-card title="自定义颜色">
      <m-switch
        v-model="switchCustom"
        active-color="#07c160"
        inactive-color="#ee0a24"
        @change="onChange"
      />
    </demo-card>

    <demo-card title="异步控制">
      <m-switch
        v-model="checkedAsync"
        :loading="loading"
        @change="onAsyncChange"
      />
    </demo-card>
  </page>
</template>

<script>
export default {
  name: "demo-switch",
  data() {
    return {
      checked: false,
      checkedAsync: false,
      loading: false,
      switchCustom: false,
      switchDisabled: true,
      switchLoading: true,
    };
  },

  methods: {
    onChange(value) {
      console.log(value);
    },

    // 异步
    onAsyncChange() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>
