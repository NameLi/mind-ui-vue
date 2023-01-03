<template>
  <div class="m-cell-group" :class="{ 'm-cell-group--card': card }">
    <div v-if="title" class="m-cell-group__header">
      <div class="m-cell-group__title">{{ title }}</div>
      <slot name="group-suffix" />
    </div>

    <div class="m-cell__list" :class="{ 'is-border': border }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "m-cell-group",
  componentName: "m-cell-group",
  props: {
    card: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      children: [],
    };
  },

  mounted() {
    this._updateChildren();
  },

  methods: {
    _updateChildren() {
      const children = this.$slots.default.map((item) => {
        return item.child;
      });

      children[children.length - 1].isLast = true;
    },
  },
};
</script>

<style lang="scss">
.m-cell-group {
  position: relative;
  margin: 0;
  background-color: #fff;
  transition: margin 0.2s;
  &.m-cell-group--card {
    margin: 32px;
    border-radius: 12px;
    overflow: hidden;
  }

  .m-cell-group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 32px;
    height: 100px;
    font-size: 32px;
    color: var(--color-text-secondary);
    background-color: #fcfcfc;
  }

  .m-cell-group__title {
    flex: 1;
    width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>