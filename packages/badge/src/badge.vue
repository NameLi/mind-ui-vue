<template>
  <div class="m-badge">
    <slot />
    <div v-if="isDot" class="m-badge__dot" :style="bgStyle"></div>

    <div
      v-else-if="value"
      :class="[{ 'is-static': isStatic }, 'm-badge__count']"
      :style="bgStyle"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "m-badge",
  props: {
    value: {
      type: [Number, String],
      default: null,
    },
    max: {
      type: [Number, String],
      default: 99,
    },
    bgcolor: {
      type: String,
      default: "",
    },
    isDot: {
      type: Boolean,
      default: false,
    },
    static: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      text: 0,
    };
  },

  computed: {
    isStatic() {
      return this.static;
    },
    bgStyle() {
      return this.bgcolor ? `background-color: ${this.bgcolor}` : "";
    },
  },

  watch: {
    value: {
      handler() {
        this._getValue();
      },
      immediate: true,
    },
  },

  methods: {
    _getValue() {
      if (this.isDot) return;

      const { value, max } = this;

      let _value = "";
      if (Number(value)) {
        _value = parseInt(value) > parseInt(max) ? `${parseInt(max)}+` : value;
      } else {
        _value = value;
      }

      this.text = _value;
    },
  },
};
</script>

<style lang="scss">
.m-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .m-badge__count {
    z-index: 1;
    position: absolute;
    transform: translate(80%, -50%);
    top: 0;
    right: 0;
    height: 28px;
    line-height: 28px;
    border-radius: 40px;
    min-width: 20px;
    background-color: var(--color-danger);
    border: 1PX solid transparent; /*no*/
    color: #fff;
    text-align: center;
    padding: 0 6px;
    font-size: 24px;
    white-space: nowrap;
    box-shadow: 0 0 0 4px #fff;
    box-sizing: content-box;
    &.is-static {
      position: static;
      transform: translate(0, 0);
    }
  }

  .m-badge__dot {
    z-index: 1;
    position: absolute;
    transform: translate(50%, -50%);
    transform-origin: 0;
    top: 0;
    right: 0;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background-color: var(--color-danger);
    z-index: 1;
    box-shadow: 0 0 0 1PX #fff; /*no*/
  }
}
</style>
