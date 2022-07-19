<template>
  <div class="m-cell__group" :class="{ 'm-cell__group--card': card }">
    <div v-if="title" class="m-cell__group__header">
      <div class="m-cell__group__title">{{ title }}</div>
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
.m-cell__group {
  position: relative;
  margin: 0;
  background: #fff;
  transition: margin 0.2s;
  &.m-cell__group--card {
    margin: 32px;
    border-radius: 12px;
    overflow: hidden;
  }

  .m-cell__group__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 32px;
    height: 100px;
    font-size: 32px;
    color: #999;
    background: #fcfcfc;
  }

  .m-cell__group__title {
    flex: 1;
    width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>