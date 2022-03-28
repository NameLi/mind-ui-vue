<template>
  <div
    class="tabs__item"
    :class="{ 'tab__item--is-active': isActive }"
    ref="tabs__item"
    @click="onClick"
  >
    <div class="tabs__item__content">
      <div
        ref="tabs__item__text"
        class="tabs__item__text"
        :style="activeColor ? 'color:' + activeColor : ''"
      >
        {{ title }}
        <m-badge
          v-if="value"
          custom-class="badge-custom"
          :value="value"
          static
        ></m-badge>
      </div>
    </div>
  </div>
</template>

<script>
import MBadge from "../../badge";
export default {
  name: "m-navbar",
  components: {
    MBadge,
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    title: {
      required: true,
      type: String,
      default: "",
    },
    value: {
      type: [Number, String],
      default: "",
    },
  },

  computed: {
    isActive() {
      return this.$parent.activeTabName === this.name;
    },
    activeColor() {
      return this.isActive ? this.$parent.activeColor : "";
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$parent.initChildrenStyle();
    });
  },

  methods: {
    onClick(ev = null) {
      if (this.$parent.disabled) return;

      this.$emit("click", this.name);

      const baseLeft = this.$parent.baseLeft;
      const offsetLeft = ev
        ? ev.currentTarget.offsetLeft
        : this.$refs.tabs__item.offsetLeft - baseLeft;

      const itemWidth = this.$refs.tabs__item.offsetWidth;
      const textWidth = this.$refs.tabs__item__text.offsetWidth;

      this.$parent.updateScrollPositon(
        offsetLeft,
        itemWidth,
        textWidth,
        this.name
      );
    },
  },
};
</script>

<style scoped lang="scss">
.tabs__item {
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #7d7e80;
  line-height: 88px;
  font-size: 28px;
  -webkit-tap-highlight-color: transparent;
}
.tabs__item__content {
  white-space: nowrap;
  margin: 0 20px;
}

.tabs__item__text {
  display: inline-block;
}

.tabs__item--is-active {
  font-weight: 500;
  color: #323233;
}

.badge-custom {
  vertical-align: text-top;
  margin-left: 6px;
}
</style>
