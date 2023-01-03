<template>
  <div class="m-divider" :style="color ? 'color:' + color : ''">
    <div class="m-divider__content" v-if="content !== ''">
      {{ content }}
    </div>
    <div class="m-divider__content" v-else>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "m-divider",
  props: {
    content: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.m-divider {
  display: flex;
  width: 100%;
  height: 76px;
  text-align: center;
  font-size: 28px;
  position: relative;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);

  .m-divider__content {
    z-index: 1;
    position: relative;
    display: inline-block;
    max-width: 400px;
    &::before,
    &::after {
      display: block;
      content: "";
      position: absolute;
      top: 50%;
      width: 120px;
      height: 1PX; /*no*/
      transform: scaleY(0.5);
      background-color: currentColor;
    }
    &::before {
      left: -140px;
    }
    &::after {
      right: -140px;
    }
  }
}
</style>
