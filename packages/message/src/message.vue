<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="m-message"
      :class="'m-message--' + type"
      :style="customStyle"
    >
      {{ content }}
      <div class="m-message-close" v-if="showClose">
        <div class="m-message-close__btn" @click="onClose"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "m-message",
  data() {
    return {
      zIndex: 2001,
      offsetTop: 0,
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
  },
  computed: {
    customStyle() {
      return ["z-index:" + this.zIndex, "top:" + this.offsetTop + "px"].join(
        ";"
      );
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}

.m-message {
  display: block;
  z-index: 2000;
  margin-top: 22px;
  position: fixed;
  top: 0;
  left: 32px;
	right: 32px;
	padding: 15px 80px;
	min-height: 66px;
	line-height: 36px;
  color: #fff;
  font-size: 28px;
  border-radius: 4px;
  text-align: center;
  background-color: var(--color-primary);
  box-sizing: border-box;

  &.m-message--primary {
    background-color: var(--color-primary);
  }

  &.m-message--success {
    background-color: var(--color-success);
  }

  &.m-message--warning {
    background-color: var(--color-warning);
  }

  &.m-message--error {
    background-color: var(--color-danger);
  }

  .m-message-close {
    position: absolute;
    right: 10px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }
  .m-message-close__btn {
    position: relative;
    width: 40px;
    height: 40px;
    color: #fff;
    border: 10px;
  }
  .m-message-close__btn::before,
  .m-message-close__btn::after {
    z-index: 1;
    display: block;
    content: "";
    position: absolute;
    left: 3px;
    top: 50%;
    color: #fff;
    width: 32px;
    height: 1PX; /*no*/
    background-color: currentColor;
  }

  .m-message-close__btn::before {
    transform: rotate(45deg);
  }
  .m-message-close__btn::after {
    transform: rotate(-45deg);
  }
}
</style>
