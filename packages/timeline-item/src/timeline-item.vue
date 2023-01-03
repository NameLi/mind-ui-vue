<template>
  <div class="m-timeline-item">
    <div class="m-timeline-item__time">
      <m-icon v-if="icon" :name="icon" :color="color" />
      <span v-else :style="color ? 'color:' + color : ''"> {{ text }}</span>
    </div>

    <div class="m-timeline-item__content">
      <slot />
    </div>
  </div>
</template>

<script>
import MIcon from "../../icon";
export default {
  name: "m-timeline-item",
  components: {
    MIcon,
  },
  props: {
    icon: {
      type: String,
    },
    text: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.m-timeline-item {
  display: flex;

  .m-timeline-item__time {
    position: relative;
    width: 120px;
    min-height: 80px;
    display: flex;
    justify-content: center;
    color: var(--color-text-secondary);
    font-size: 28px;
    &::after {
      display: block;
      position: absolute;
      top: 44px;
      width: 1PX; /*no*/
      bottom: 10px;
      content: " ";
      background-color: var(--color-border);
    }
  }

  .m-timeline-item__content {
    flex: 1;
    width: 0;
    margin-top: 16px;
    margin-bottom: 46px;
    margin-right: 32px;
  }
}
</style>
