<template>
  <div class="demo-card">
    <div class="demo-card__header">
      <div class="demo-card__title">{{ title }}</div>
      <div class="demo-card__desc" v-if="desc !== ''">{{ desc }}</div>
      <div v-else class="demo-card__desc">
        <slot name="header-suffix" />
      </div>
    </div>
    <div class="demo-card__content" :class="{ 'no-margin': noMargin }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-card",
  props: {
    noMargin: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    desc: {
      type: [String, Number, Boolean],
      default: "",
    },
  },
};
</script>

<style lang="scss">
.demo-card {
  padding: 32px;
  .demo-card__header {
    display: flex;
    padding: 24px 0;
    color: #999;
    justify-content: space-between;
    font-size: 28px;
  }
  .demo-card__desc {
    color: #aaa;
  }
  .no-margin {
    margin: 0 -32px;
  }
}
</style>
