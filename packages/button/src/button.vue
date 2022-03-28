<template>
  <button
    :class="[
      'm-button',
      'm-button--' + type,
      'm-button--' + size,
      { 'm-button--full': full },
      { 'is-round': round },
      { 'is-plain': plain },
      { 'is-loading': loading },
      { 'is-disabled': disabled },
      { 'is-inline': inline }
    ]"
    :style="styles"
    @click="onClick"
  >
    <div v-if="loading" class="m-button__loading"></div>
    <slot v-else></slot>
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
  },

  computed: {
    styles() {
      let styles = []
      if(this.color) {
        styles.push('color:' + this.color)
      }

      if(this.bgcolor) {
        styles.push('background-color:' + this.bgcolor)
      }

      return styles.join(";")
    }
  },

  mounted() {
    
  },
  methods: {
    onClick(e) {
      this.$emit('click', e)
    }
  }
};
</script>

<style scoped lang="scss">
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
  color: $color-text-primary;
  overflow: visible;
  background-color: #fff;
  user-select: none;
  outline: none;
  transition: opacity 0.16s, background-color 0.16s;
}

.m-button-icon {
  display: inline-block;
  font-size: 28px;
  width: 24px;
  height: 24px;
}

.m-button:active {
  opacity: 0.8;
}

.m-button:not(.is-disabled):active::before,
.m-button:not(.is-loading):active::before {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.15;
  content: " ";
  background-color: currentColor;
}
.m-button.is-round:active::before {
  border-radius: 100px;
}

.m-button.m-button--full {
  margin: 0;
  border-radius: 0;
  box-shadow: none;
}

.m-button.m-button--large {
  height: 96px;
  line-height: 96px;
  font-size: 32px;
}

.m-button.m-button--small {
  height: 68px;
  line-height: 68px;
}

.m-button.m-button--primary {
  color: #fff;
  background-color: $color-primary;
}

.m-button.m-button--default {
  background-color: transparent;
  color: $color-text-primary;
}
.m-button.m-button--default:active {
  background-color: rgba(0, 0, 0, 0.07);
}
.m-button.m-button--default::after {
  content: " ";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1PX solid #dcdfe6; /*no*/
  transform: scale(0.5);
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
}

.m-button.m-button--ghost {
  background-color: transparent;
  color: $color-text-primary;
}

.m-button.m-button--success {
  color: #fff;
  background-color: $color-success;
}

.m-button.m-button--warning {
  color: #fff;
  background-color: $color-warning;
}

.m-button.m-button--danger {
  color: #fff;
  background-color: $color-danger;
}

.m-button.m-button--info {
  color: #fff;
  background-color: $color-info;
}

/* plain */
.m-button--primary.is-plain {
  color: $color-primary;
  background-color: #fff;
}

.m-button--success.is-plain {
  color: $color-success;
  background-color: #fff;
}

.m-button--warning.is-plain {
  color: $color-warning;
  background-color: #fff;
}

.m-button--danger.is-plain {
  color: $color-danger;
  background-color: #fff;
}

.m-button--info.is-plain {
  color: $color-info;
  background-color: #fff;
}

.m-button.is-plain::after {
  content: " ";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1PX solid currentColor; /*no*/
  transform: scale(0.5);
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: 6px;
  z-index: 1;
  pointer-events: none;
}

.m-button.is-round {
  border-radius: 100px;
}

.m-button.is-round.is-plain::after {
  border-radius: 100px;
}

.m-button.is-loading {
  opacity: 0.9;
}

.m-button__loading {
  display: inline-block;
  vertical-align: middle;
  width: 12PX;
  height: 12PX;
  background-position: 0 0;
  border-radius: 50%;
  border: 2PX solid currentColor;
  border-left-color: transparent;
  animation: btn-spinner 0.8s linear;
  animation-iteration-count: infinite;
}

.m-button.is-disabled {
  opacity: 0.65;
}
.m-button.is-inline {
  display: inline-block;
  width: auto !important;
}

@keyframes btn-spinner {
  100% {
    transform: rotate(360deg);
  }
}
</style>
