<template>
  <div
    class="m-tag"
    :class="customClass"
    :style="plain ? 'color: ' + color : 'background-color: ' + color"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-tag",
  props: {
    // 胶囊样式
    capsule: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
    },
    type: {
      type: String,
      default: "",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    customClass() {
      let cls = [];
      cls.push("m-tag--" + this.size);
      cls.push("m-tag--" + this.type);
      if (this.round) {
        cls.push("is-round");
      }
      if (this.plain) {
        cls.push("is-plain");
      }

      return cls.join(" ");
    },
  },
};
</script>

<style lang="scss">
.m-tag {
  position: relative;
  display: inline-block;
  height: 38px;
  line-height: 38px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: #fff;
  font-size: 24px;
  vertical-align: middle;
  letter-spacing: 2px;
  text-align: center;
  color: #fff;

  &.m-tag--large {
    height: 64px;
    line-height: 64px;
    padding: 0 24px;
    font-size: 36px;
    border-radius: 6px;
  }
  &.m-tag--medium,
  &.m-tag--normal {
    height: 56px;
    line-height: 56px;
    padding: 0 16px;
    font-size: 28px;
    border-radius: 6px;
  }
  &.m-tag--small {
    height: 42px;
    line-height: 42px;
    padding: 0 12px;
    font-size: 20px;
  }
  &.m-tag--mini {
    height: 32px;
    line-height: 32px;
    padding: 0 8px;
    font-size: 18px;
  }

  /* 类型 type */
  &.m-tag--primary {
    color: #fff;
    background-color: var(--color-primary);
  }

  &.m-tag--success {
    color: #fff;
    background-color: var(--color-success);
  }

  &.m-tag--info {
    color: #fff;
    background-color: var(--color-info);
  }

  &.m-tag--warning {
    color: #fff;
    background-color: var(--color-warning);
  }

  &.m-tag--danger {
    color: #fff;
    background-color: var(--color-danger);
  }

  /* plain */
  &.is-plain {
    background-color: #fff;
  }

  &.is-plain::after {
    content: " ";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1PX solid; /*no*/
    transform: scale(0.5);
    transform-origin: 0 0;
    box-sizing: border-box;
    border-radius: 8px;
    z-index: 1;
    pointer-events: none;
    opacity: 0.85;
  }

  &.is-plain.is-round::after {
    border-radius: 100px;
  }

  &.m-tag--primary.is-plain {
    color: var(--color-primary);
  }

  &.m-tag--success.is-plain {
    color: var(--color-success);
  }

  &.m-tag--warning.is-plain {
    color: var(--color-warning);
  }

  &.m-tag--info.is-plain {
    color: var(--color-info);
  }

  &.m-tag--danger.is-plain {
    color: var(--color-danger);
  }

  /* 自定义颜色 */
  &.m-tag:not(.is-plain) {
    color: #fff important;
  }

  &.is-round {
    border-radius: 100px;
  }
}
</style>
