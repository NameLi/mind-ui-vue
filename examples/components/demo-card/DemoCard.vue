<template>
  <div class="demo-item custom-class">
    <div class="demo-header">
      <div class="demo-title">{{ title }}</div>
      <div class="demo-desc" v-if="desc !== ''">{{ desc }}</div>
      <div v-else class="demo-desc">
        <slot name="header-suffix"></slot>
      </div>
    </div>
    <div 
      class="demo-content custom-content-class"
      :class="noMargin ? 'no-margin':''"
    >
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
      default: false
    },
    title: {
      type: String
    },
    desc: {
      type: [String, Number, Boolean],
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
.demo-item {
  padding: 32px;
}

.demo-header {
  display: flex;
  padding: 24px 0;
  color: #999;
  justify-content: space-between;
  font-size: 28px;
}

.demo-desc {
  color: #aaa;
}
.no-margin {
  margin: 0 -32px;
}
</style>
