<template>
  <div class="m-badge" :class="customClass">
    <slot></slot>
    <div
      v-if="isDot"
      class="m-badge-dot"
      :style="bgcolor ? 'background-color: ' + bgcolor : ''"
    ></div>

    <div
      v-else-if="value"
      :class="[{'m-badge-count__static': static }, 'm-badge-count']"
      :style="bgcolor ? 'background-color: ' + bgcolor : ''"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-badge',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: "",
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
  watch: {
    value() {
      this._getValue();
    },
  },
  methods: {
    _getValue() {
      const {value, max} = this;

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

<style scoped lang="scss">
.m-badge {
  position: relative;
  display: inline-block;
  line-height: 1;
}

.m-badge-count {
  z-index: 1;
  position: absolute;
  transform: translate(80%, -50%);
  top: 0;
  right: 0;
  height: 28px;
  line-height: 28px;
  border-radius: 40px;
  min-width: 20px;
  background-color: $color-danger;
  border: 1PX solid transparent;/*no*/
  color: #fff;
  text-align: center;
  padding: 0 6px;
  font-size: 24px;
  white-space: nowrap;
  box-shadow: 0 0 0 4px #fff;
  box-sizing: content-box;
}

.m-badge-count__static {
  display: inline-block;
  position: static;
  transform: translateX(0);
}

.m-badge-dot {
  z-index: 1;
  position: absolute;
  transform: translate(50%, -50%);
  transform-origin: 0;
  top: 0;
  right: 0;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: $color-danger;
  z-index: 1;
  box-shadow: 0 0 0 1px #fff;/*no*/
}
</style>
