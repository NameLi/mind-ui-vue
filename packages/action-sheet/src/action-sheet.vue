<template>
  <div class="m-actionsheet__wrap">
    <div
      class="m-mask"
      :class="{ 'is-hidden': !visible }"
      :style="'z-index: ' + zIndex"
      @click="handleMaskClick"
    ></div>

    <div
      class="m-sheet"
      :class="{ 'is-hidden': !visible }"
      :style="'z-index: ' + zIndex"
    >
      <div class="m-sheet__header m-hairline--bottom">
        <slot name="header" />
      </div>

      <div class="m-sheet__content">
        <div
          class="m-sheet__item m-hairline--bottom"
          v-for="(item, index) in actions"
          :key="item.name"
        >
          <m-button
            full
            type="ghost"
            size="large"
            :loading="item.loading"
            :disabled="item.disabled"
            :color="item.color"
            @click="handleItemClick(item, index)"
            >{{ item.name }}</m-button
          >
        </div>
      </div>

      <div class="m-sheet__cancel" v-if="showCancel">
        <m-button
          m-class="m-sheet__button"
          size="large"
          type="ghost"
          full
          @click="handleCancelClick"
          >{{ cancelText }}</m-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "../../button";
export default {
  name: "m-action-sheet",
  components: {
    MButton,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 2009,
    },
    maskClosable: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: false,
    },
    cancelText: {
      type: String,
      default: "取消",
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    // 点击遮罩
    handleMaskClick() {
      if (!this.maskClosable) return;
      this.handleCancelClick();
    },

    // 点击事件
    handleItemClick(item, index) {
      if (item.loading || item.disabled) return;

      this.$emit("click", index);
    },

    // 取消
    handleCancelClick() {
      this.$emit("cancel");
    },
  },
};
</script>

<style lang="scss">
.m-actionsheet__wrap {
  .m-mask {
    z-index: 2001;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    visibility: visible;
    background-color: var(--color-mask);
    transition: all 0.2s ease-in-out;
    &.is-hidden {
      opacity: 0;
      visibility: hidden;
    }
  }

  .m-sheet {
    z-index: 2005;
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: visible;
    background-color: #fff;
    transform: translate3d(0, 0, 0);
    transform-origin: center;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    &.is-hidden {
      transform: translate3d(0, 100%, 0);
      visibility: hidden;
    }
  }

  .m-sheet__header {
    background-color: #fff;
    text-align: center;
    position: relative;
    font-size: 24px;
    color: var(--color-text-primary);
  }

  .m-sheet__item {
    position: relative;
  }

  .m-sheet__cancel {
    border-top: 24px solid #e3e3e3;
  }

  .m-sheet__loading {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
    width: 24px;
    height: 24px;
    background-position: 0 0;
    border-radius: 50%;
    border: 4px solid #e5e5e5;
    border-left-color: #666;
    animation: m-btn-spin 0.6s linear infinite;
  }

  .m-sheet__text {
    display: inline-block;
    vertical-align: middle;
  }

  .m-sheet__btn-icon {
    margin-right: 8px;
  }

  @keyframes m-btn-spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .m-button {
    position: relative;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    letter-spacing: 4px;
    height: 96px;
    line-height: 96px;
    font-size: 32px;
    border: 0;
    border-radius: 0;
    color: var(--color-text-regular);
    overflow: visible;
    background-color: #fff;
    transition: opacity 0.16s, background-color 0.16s;
  }

  .m-button-icon {
    display: inline-block;
    font-size: 28px;
    width: 24px;
    height: 24px;
  }

  .m-button.is-hover {
    background-color: #f9f9f9;
  }

  .m-button__loading {
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    background-color: 0 0;
    border-radius: 50%;
    border: 4px solid currentColor;
    border-left-color: transparent;
    animation: m-btn-spinner 0.8s linear;
    animation-iteration-count: infinite;
  }

  .m-button.is-disabled {
    color: #c8c9cc;
  }
}
</style>
