<template>
  <div class="m-sticky-button__wrap">
    <div
      class="m-sticky-button"
      :class="{ 'is-active': toggle }"
      :style="bgcolor ? 'background-color:' + bgcolor : ''"
      @click="setToggle"
    >
      <m-icon :name="icon" :size="iconSize" :color="iconColor" />
    </div>

    <div class="m-sticky-button__container">
      <slot />
    </div>
  </div>
</template>

<script>
import MIcon from "../../icon";
export default {
  name: "m-sticky-button",
  components: {
    MIcon,
  },
  props: {
    offset: {
      type: Number, // 扇面偏移角，默认是四分之π，配合默认方向lt
      default: Math.PI / 4,
    },

    direction: {
      type: String,
      default: "lb", // lt t rt this.radius rb b lb l 取值有8个方向，左上、上、右上、右、右下、下、左下、左，默认为左上
    },

    radius: {
      type: Number,
      default: 200,
    },

    icon: {
      type: String,
      default: "plus",
    },

    iconSize: {
      type: Number,
      default: 48,
    },

    iconColor: {
      type: String,
      default: "#fff",
    },

    bgcolor: {
      type: String,
      default: "",
    },

    subIconSize: {
      type: Number,
      default: 0,
    },

    subColor: {
      type: String,
    },

    subBgcolor: {
      type: String,
    },
  },
  data() {
    return {
      toggle: false,
      nodes: [],
    };
  },

  computed: {
    currentRadius() {
      return this.radius / 75;
    },
  },

  mounted() {
    this._updateChildren();
  },

  methods: {
    _updateChildren() {
      const children = this.$slots.default.map((item) => {
        return item.child;
      });

      this.children = children;

      const len = children.length;

      const direction_arc =
        (Math.PI *
          (3 +
            Math.max(
              ["lt", "t", "rt", "r", "rb", "b", "lb", "l"].indexOf(
                this.direction
              ),
              0
            ))) /
        4;

      children.forEach((child, i) => {
        let arc =
          ((Math.PI - this.offset * 2) / (len - 1)) * i +
          this.offset +
          direction_arc;
        let x = (Math.cos(arc) * this.currentRadius).toFixed(8);
        let y = (Math.sin(arc) * this.currentRadius).toFixed(8);

        let styles = [
          `transform: translate(${x}rem, ${y}rem) rotate(360deg) scale(1)`,
          `transition-delay: ${0.03 * i}s`,
        ];

        child.currentIconColor = child.iconColor || this.subIconColor;
        child.currentBgcolor = child.bgcolor || this.subBgcolor;
        child.currentIconSize = this.subIconSize || child.iconSize;

        child.updateChildStyle(styles.join(";"));
      });
    },

    setToggle(event) {
      const { toggle } = this;

      this.toggle = !toggle;

      this.children.forEach((child, i) => {
        child.setToggle();
      });

      this.$emit("toggle", !toggle);
    },
  },
};
</script>

<style lang="scss">
.m-sticky-button__wrap {
  position: relative;
  width: 100px;
  height: 100px;
  line-height: 100px;

  .m-sticky-button {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    z-index: 2;
    font-size: 60px;
    background-color: var(--color-primary);
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    &.is-active {
      transform: rotate(135deg);
    }
  }

  .m-sticky-button__container {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
