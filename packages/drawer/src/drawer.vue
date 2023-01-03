<template>
  <div
    class="m-drawer"
    :class="`m-drawer--${position} ${visible ? 'm-drawer-show' : ''}`"
  >
    <div
      v-if="mask"
      class="m-drawer-mask"
      :style="'z-index: ' + zIndex"
      @click="handleMaskClick"
    ></div>

    <div class="m-drawer__content" :style="'z-index: ' + zIndex">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "m-drawer",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },

    zIndex: {
      type: Number,
      default: 9,
    },

    mask: {
      type: Boolean,
      default: true,
    },

    maskClosable: {
      type: Boolean,
      default: true,
    },

    position: {
      type: String,
      default: "bottom", // left right top bottom
    },
  },

  watch: {
    visible(val) {
      if (val) {
        document.body.classList.add("m-overflow-hidden");
      } else {
        document.body.classList.remove("m-overflow-hidden");
      }
    },
  },

  methods: {
    handleMaskClick() {
      if (!this.maskClosable) return;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.m-drawer {
  visibility: hidden;
  box-sizing: border-box;

  &.m-drawer-show {
    visibility: visible;
    .m-drawer-mask {
      display: block;
      opacity: 1;
    }
    &[class*="m-drawer--"] {
      .m-drawer__content {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .m-drawer-mask {
    opacity: 0;
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-mask);
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  .m-drawer__content {
    opacity: 0;
    z-index: 10;
    position: fixed;
    transform-origin: center;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
      visibility 0.3s ease-in-out;
  }

  &.m-drawer--left .m-drawer__content {
    top: 0;
    left: 0;
    transform: translate3d(-100%, 0, 0);
  }

  &.m-drawer--right .m-drawer__content {
    right: 0;
    top: 0;
    transform: translate3d(100%, 0, 0);
  }

  &.m-drawer--top .m-drawer__content {
    left: 0;
    top: 0;
    width: 100%;
    transform: translate3d(0, -100%, 0);
  }

  &.m-drawer--bottom .m-drawer__content {
    left: 0;
    bottom: 0;
    width: 100%;
    transform: translate3d(0, 100%, 0);
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>