<template>
  <div class="m-timeline" :class="isLast ? 'is-last' : ''">
    <div class="m-time">
      <m-icon v-if="icon" :name="icon" :color="color"></m-icon>
      <span v-else :style="color ? 'color:' + color : ''"> {{ text }}</span>
    </div>

    <div class="m-timeline__content">
      <slot></slot>
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
  data() {
    return {
      isLast: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.m-timeline {
  display: flex;
}

.m-timeline .m-time {
  position: relative;
  width: 120px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  color: #aaa;
  font-size: 28px;
}
.m-timeline .m-time::after {
  display: block;
  position: absolute;
  top: 44px;
  width: 1px; /*no*/
  bottom: 10px;
  content: " ";
  background: #ccc;
  // transform: scaleX(0.5);
}

.is-last .m-time::after {
  display: none;
}

.m-timeline__content {
  flex: 1;
  width: 0;
  margin-top: 16px;
  margin-bottom: 46px;
  margin-right: 32px;
}
</style>
