<template>
  <div
    class="tab-item"
    :class="{ 'tab-item--is-active': isActive }"
    ref="tabItem"
    @click="onClick"
  >
    <div class="tab-item__content">
      <div
        ref="tabItem__text"
        class="tab-item__text"
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
.tab-item {
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
  .tab-item__content {
    white-space: nowrap;
    margin: 0 20px;
  }

  .tab-item__text {
    display: inline-block;
  }

  .tab-item--is-active {
    font-weight: 500;
    color: #323233;
  }

  .badge-custom {
    vertical-align: text-top;
    margin-left: 6px;
  }
}
</style>
