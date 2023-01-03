<template>
  <div
    class="m-tab-item"
    :class="{ 'm-tab-item--is-active': isActive }"
    ref="tabItem"
    @click="onClick"
  >
    <div class="m-tab-item__content">
      <div
        ref="tabItem__text"
        class="m-tab-item__text"
        :style="activeColor ? 'color:' + activeColor : ''"
      >
        {{ title }}
        <m-badge
          v-if="isShowBadge"
          class="badge-custom"
          :value="count"
          static
        />
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
    count: {
      type: [Number, String],
      default: "",
    },
  },

  computed: {
    isShowBadge() {
      return this.count || this.count !== undefined;
    },
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

      if (this.isActive) return;

      this.$emit("click", this.name);

      const baseLeft = this.$parent.baseLeft;
      const offsetLeft = ev
        ? ev.currentTarget.offsetLeft
        : this.$refs.tabItem.offsetLeft - baseLeft;

      const itemWidth = this.$refs.tabItem.offsetWidth;
      const textWidth = this.$refs.tabItem__text.offsetWidth;

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

<style lang="scss">
.m-tab-item {
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-text-regular);
  line-height: 88px;
  font-size: 28px;
  -webkit-tap-highlight-color: transparent;
  .m-tab-item__content {
    white-space: nowrap;
    margin: 0 20px;
  }

  .m-tab-item__text {
    display: inline-flex;
    align-items: center;
  }

  .m-tab-item--is-active {
    font-weight: 500;
    color: var(--color-text-primary);
  }

  .badge-custom {
    margin-left: 6px;
  }
}
</style>
