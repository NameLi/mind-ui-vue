<template>
  <div
    ref="slider"
    class="m-slider"
    :class="{ 'm-slider--disabled': disabled }"
    :style="inactiveColor ? 'background-color: ' + inactiveColor : ''"
    dom="slider"
    @click="onClick"
  >
    <div class="m-slider__bar" dom="slider" :style="barStyle">
      <div
        class="m-slider__button-wrapper"
        @mousedown="onButtonDown"
        @touchstart="onButtonDown"
      >
        <slot v-if="useSlot" />
        <div v-else class="m-slider__button"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-slider",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    useSlot: {
      type: Boolean,
      default: false,
    },
    activeColor: String,
    inactiveColor: String,
    max: {
      type: [Number, String],
      default: 100,
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    height: {
      type: [Number, String],
      default: 3,
    },
  },
  data() {
    return {
      newValue: 0,
      barStyle: "",
      sliderWitdh: 0,
      deltaX: 0,
      offsetX: 0,
      startX: 0,
      dragStatus: "",
      isMouseDown: false,
      startValue: 0,
    };
  },

  mounted() {
    this.newValue = this.value;

    this.resetDomSize();
  },

  methods: {
    resetDomSize() {
      this.sliderWitdh = this.$refs.slider.offsetWidth;
      this.updateValue(this.newValue);
    },

    onButtonDown(ev) {
      if (this.disabled) return;
      ev.preventDefault();
      this.resetDomSize();

      this.onTouchStart(ev);
      window.addEventListener("mousemove", this.onTouchMove);
      window.addEventListener("touchmove", this.onTouchMove);
      window.addEventListener("mouseup", this.onDragEnd);
      window.addEventListener("touchend", this.onDragEnd);
      window.addEventListener("contextmenu", this.onDragEnd);
    },

    onDragEnd(ev) {
      if (this.dragStatus === "start" || this.dragStatus === "draging") {
        window.removeEventListener("mousemove", this.onTouchMove);
        window.removeEventListener("touchmove", this.onTouchMove);
        window.removeEventListener("mouseup", this.onDragEnd);
        window.removeEventListener("touchend", this.onDragEnd);
        window.removeEventListener("contextmenu", this.onDragEnd);
        this.onTouchEnd(ev);
      }
    },

    onTouchStart(ev) {
      const touch = ev.touches ? ev.touches[0] : ev;

      this.deltaX = 0;
      this.offsetX = 0;
      this.startX = touch.clientX;

      this.startValue = this.format(this.newValue);
      this.dragStatus = "start";
    },

    onTouchMove(ev) {
      if (this.dragStatus === "start") {
        this.$emit("drag-start");
      }

      const touch = ev.touches ? ev.touches[0] : ev;

      this.deltaX = touch.clientX - this.startX;

      this.offsetX = Math.abs(this.deltaX);

      this.dragStatus = "draging";

      const diff = (this.deltaX / this.sliderWitdh) * 100;

      this.newValue = this.startValue + diff;

      this.updateValue(this.newValue, false, true);
    },

    onTouchEnd(ev) {
      ev.stopPropagation();

      if (this.disabled) return;

      if (this.dragStatus === "draging") {
        this.updateValue(this.newValue, true);
        this.$emit("drag-end");
      }
    },

    onClick(ev) {
      if (this.disabled) return;

      const dom = ev.srcElement || ev.target;
      if (dom.getAttribute("dom") === "slider") {
        const value =
          (ev.offsetX / this.sliderWitdh) * this.getRange() +
          parseInt(this.min);
        this.updateValue(value, true);
      }
    },

    updateValue(value, end, drag) {
      value = this.format(value);

      const { height, min } = this;

      const width = `${((value - min) * 100) / this.getRange()}%`;

      this.newValue = value;

      this.barStyle = `
        width: ${width};
        height: ${height}px;
        ${drag ? "transition: none;" : ""}
        ${this.activeColor ? "background-color:" + this.activeColor : ""}
      `;

      this.$emit("input", value);

      if (end) {
        this.$emit("change", value);
      }
    },

    getRange() {
      return this.max - this.min;
    },

    format(value) {
      const { max, min, step } = this;
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
    },
  },
};
</script>

<style lang="scss">
.m-slider {
  position: relative;
  border-radius: 999px;
  background-color: #e5e5e5;
  &:before {
    position: absolute;
    right: 0;
    left: 0;
    content: "";
    top: -8px;
    bottom: -8px;
  }

  .m-slider__bar {
    position: relative;
    border-radius: inherit;
    transition: width 0.2s;
    background-color: var(--color-theme);
  }

  .m-slider__button {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    box-shadow: 0 1px 2px var(--color-mask);
    background-color: #fff;
  }

  .m-slider__button-wrapper {
    z-index: 1;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate3d(50%, -50%, 0);
  }

  .m-slider--disabled {
    opacity: 0.7;
  }
}
</style>
