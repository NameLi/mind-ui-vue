<template>
  <div class="m-grid" :class="{ 'm-grid__hairline--lt': border }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-grid",
  props: {
    height: {
      type: String,
      default: "auto",
    },

    columnCount: {
      type: [Number, String],
      default: 4,
    },

    border: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    width() {
      return 100 / parseInt(this.columnCount) + "%";
    },
  },
};
</script>

<style lang="scss">
.m-grid {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
  &.m-grid__hairline--lt {
    &::after {
      z-index: 1;
      position: absolute;
      content: " ";
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid var(--color-border);
      transform: scale(0.5);
      box-sizing: border-box;
      border-width: 1px 0 0 1PX; /*no*/
    }
  }
}
</style>
