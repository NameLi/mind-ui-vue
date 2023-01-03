<template>
  <button
    class="m-button"
    :class="[
      type ? 'm-button--' + type : '',
      size ? 'm-button--' + size : '',
      { 'm-hairline--surround': isPlain },
      { 'm-button--full': full },
      { 'is-round': round },
      { 'is-plain': plain },
      { 'is-loading': loading },
      { 'is-disabled': disabled },
      { 'is-inline': inline },
    ]"
    :style="styles"
    @click="onClick"
  >
    <i class="m-icon m-button__icon" :class="icon" v-if="icon && !loading"></i>
    <div v-if="loading" class="m-button__loading"></div>
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script>
export default {
  name: "m-button",

  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    round: {
      type: Boolean,
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
    full: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },
    bgcolor: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
  },

  computed: {
    isPlain() {
      return this.plain || this.type === "default";
    },

    styles() {
      let styles = [];
      if (this.color) {
        styles.push("color:" + this.color);
      }

      if (this.bgcolor) {
        styles.push("background-color:" + this.bgcolor);
      }

      return styles.join(";");
    },
  },

  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.m-button {
  display: block;
  position: relative;
  padding: 0 28px;
  width: 100%;
  min-width: 86px;
  height: 86px;
  line-height: 86px;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 4px;
  font-size: 28px;
  border-radius: 6px;
  border: 0;
  box-sizing: border-box;
  color: var(--color-text-primary);
  overflow: visible;
  background-color: #fff;
  user-select: none;
  outline: none;
  transition: opacity 0.16s, background-color 0.16s;
  &.m-hairline--surround::after {
    z-index: 1;
    border-radius: 6px;
    border-color: currentColor;
  }
  &-icon {
    display: inline-block;
    font-size: 28px;
    width: 24px;
    height: 24px;
    text-align: center;
  }

  &:not(.is-disabled):active {
    opacity: 0.8;
  }

  &--full {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    &.m-hairline--surround::after {
      border-radius: 0;
    }
  }
  &--default {
    background-color: transparent;
    color: var(--color-text-primary);
  }
  &--default:active {
    background-color: rgba(0, 0, 0, 0.07);
  }
  &--default.m-hairline--surround::after {
    border-color: var(--color-border);
    pointer-events: none;
  }

  &--large {
    height: 96px;
    line-height: 96px;
    font-size: 32px;
  }

  &--small {
    height: 68px;
    line-height: 68px;
  }
  &--primary {
    color: #fff;
    background-color: var(--color-primary);
  }
  &.is-round.m-hairline--surround::after {
    border-radius: 200px;
  }

  &--ghost {
    background-color: transparent;
    color: var(--color-text-primary);
  }

  &--success {
    color: #fff;
    background-color: var(--color-success);
  }

  &--warning {
    color: #fff;
    background-color: var(--color-warning);
  }

  &--danger {
    color: #fff;
    background-color: var(--color-danger);
  }

  &--info {
    color: #fff;
    background-color: var(--color-info);
  }

  /* plain */
  &--primary.is-plain {
    color: var(--color-primary);
  }

  &--success.is-plain {
    color: var(--color-success);
  }

  &--warning.is-plain {
    color: var(--color-warning);
  }

  &--danger.is-plain {
    color: var(--color-danger);
  }

  &--info.is-plain {
    color: var(--color-info);
  }
  &[class*="m-button-"].is-plain {
    background-color: #fff;
  }

  &.m-hairline--surround.is-plain::after {
    border-color: currentColor;
    pointer-events: none;
  }

  &.is-round {
    border-radius: 200px;
    &:active::after {
      border-radius: 200px;
    }
    &.is-plain::after {
      border-radius: 200px;
    }
  }

  &.is-loading {
    opacity: 0.9;
    pointer-events: none;
  }

  .m-button__loading {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    background-position: 0 0;
    border-radius: 50%;
    border: 2PX solid currentColor; /*no*/
    border-left-color: transparent;
    animation: btn-spinner 0.8s linear;
    animation-iteration-count: infinite;
    pointer-events: none;
  }

  &.is-disabled {
    opacity: 0.65;
    pointer-events: none;
  }
  &.is-inline {
    display: inline-block;
    width: auto !important;
  }

  [class*="m-icon-"] + span,
  [class*="m-button__loading"] + span {
    margin-left: 12px;
  }

  &:active::before {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.15;
    content: "";
    border-radius: 6px;
    background-color: currentColor;
  }
}

@keyframes btn-spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
