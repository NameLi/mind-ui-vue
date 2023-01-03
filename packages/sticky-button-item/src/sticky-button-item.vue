<template>
  <div class="m-sticky-button__item" :style="getStyles">
    <m-icon :name="icon" :size="currentIconSize" :color="currentIconColor" />
  </div>
</template>

<script>
import MIcon from "../../icon";
export default {
  name: "m-sticky-button-item",
  components: {
    MIcon,
  },
  props: {
    icon: {
      type: String,
    },
    iconColor: {
      type: String,
      default: "#fff",
    },
    iconSize: {
      type: Number,
      default: 48,
    },
    bgcolor: {
      type: String,
    },
  },
  data() {
    return {
      currentIconColor: "",
      currentIconSize: "",
      currentBgcolor: "",
      style: "",
      toggle: false,
    };
  },

  computed: {
    getStyles() {
      let bgcolor = this.currentBgcolor
        ? `background-color: ${this.currentBgcolor};`
        : "";
      let style = this.toggle ? this.style : "";
      return bgcolor + style;
    },
  },

  mounted() {
    this.currentIconColor = this.iconColor;
    this.currentIconSize = this.iconSize;
    this.currentBgcolor = this.bgcolor;
  },

  methods: {
    updateChildStyle(style) {
      this.style = style;
    },

    setToggle() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss">
.m-sticky-button__item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: #ffff;
  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  transform: translate(0, 0) rotate(0) scale(0.5);
  transition: transform 0.3s ease-in-out;
  .m-icon {
    vertical-align: middle !important;
  }
}
</style>
