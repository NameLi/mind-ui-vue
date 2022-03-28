<template>
  <div class="m-index-item" ref="indexItem">
    <div class="m-index-item__header custom-class">{{ name }}</div>
    <div class="m-index-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-index-item",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      top: 0,
      height: 0,
      currentName: "",
    };
  },
  mounted() {
    this.$parent._updateChildren();
  },
  methods: {
    updateDataChange() {
      const dom = this.$refs.indexItem;

      this.top = dom.offsetTop;
      this.height = dom.offsetHeight;
      this.currentName = this.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.m-index-item__header {
  height: 60px;
  line-height: 60px;
  font-size: 28px;
  padding-left: 20px;
  background: #eee;
  box-sizing: border-box;
}

.m-index-item__content {
  font-size: 28px;
}
</style>
