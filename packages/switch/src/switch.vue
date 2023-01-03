<template>
  <label
    class="m-switch"
    :class="{ 'm-switch--disabled': disabled, 'm-switch--on': checked }"
    :style="customStyle"
  >
    <input
      type="checkbox"
      :disabled="disabled || loading"
      v-model="currentValue"
      @change="$emit('change', currentValue)"
      class="m-switch__input"
    />

    <div class="m-switch__node">
      <div
        v-if="loading"
        class="m-spinner__snake"
        :style="'color: ' + activeColor"
      ></div>
    </div>
  </label>
</template>

<script>
export default {
  name: "m-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    activeColor: {
      type: String,
      default: "#1989fa",
    },

    inactiveColor: {
      type: String,
      default: "#fff",
    },

    name: {
      type: String,
      default: "",
    },

    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },

    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
  },

  computed: {
    checked() {
      return this.currentValue === this.activeValue;
    },
    customStyle() {
      let bgcolor =
        this.currentValue === this.activeValue
          ? this.activeColor
          : this.inactiveColor;
      if (bgcolor) {
        return "background-color: " + bgcolor;
      } else {
        return "";
      }
    },
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        if (this.loading || this.disabled) return;
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss">
.m-switch {
  position: relative;
  display: inline-block;
  width: 96px;
  height: 48px;
  background-color: #fff;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  transition: background-color 0.3s;
  box-sizing: content-box;
  vertical-align: middle;

  &.m-switch--on {
    background-color: var(--color-theme);
    .m-switch__node {
      transform: translateX(48px);
    }
  }

  &.m-switch--disabled {
    opacity: 0.7;
  }

  .m-switch__input {
    display: none;
    opacity: 0;
  }

  .m-switch__node {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: 1;
    width: 48px;
    height: 48px;
    background-color: #fff;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 4px 4px 0 rgba(0, 0, 0, 0.1),
      0 6px 6px 0 rgba(0, 0, 0, 0.05);
    transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05);
  }

  .m-spinner__snake {
    display: inline-block;
    width: 13PX; /*no*/
    height: 13PX; /*no*/
    border-radius: 50%;
    border: 2px solid; /*no*/
    border-top-color: transparent;
    vertical-align: middle;
    background-color: transparent;
    animation: m-loading-snake 0.8s linear infinite;
  }

  @keyframes m-loading-snake {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
