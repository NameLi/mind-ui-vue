<template>
  <div class="m-grid" :class="border ? 'm-grid--border' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "m-grid",
  props: {
    height: {
      type: String,
      value: 'auto',
    },

    columnCount: {
      type: [Number, String],
      value: 4,
    },

    border: {
      type: Boolean,
      value: true,
    }
  },

  computed: {
    width() {
      return 100 / parseInt(this.columnCount) + '%'
    }
  },
};
</script>

<style lang="scss" scoped>
.m-grid {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
}

.m-grid.m-grid--border::after {
  z-index: 1;
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  box-sizing: border-box;
  border: 1PX solid transparent;/*no*/
  border-left-color: $color-border;
  border-top-color: $color-border;
}
</style>
