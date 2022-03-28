<template>
  <div>
    <div
      class="custom-mask-class m-mask"
			:class="visible ? '' : 'is-hidden'"
      :style="'z-index: ' + zIndex"
      @click="handleMaskClick"
    ></div>

    <div
      class="custom-class m-sheet"
      :class="visible ? '' : 'is-hidden'"
			:style="'z-index: ' + zIndex"
    >
      <div class="m-sheet__header custom-class__header">
        <slot name="header"></slot>
      </div>

      <div class="m-sheet__content">
        <div class="m-sheet__item" v-for="(item, index) in actions" :key="item.name">
          <m-button 
						full
						type="ghost" 
						size="large"
						:loading="item.loading"
						:disabled="item.disabled"
						:color="item.color"
						@click="handleItemClick(item, index)"
					>{{ item.name }}</m-button>
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
import MIcon from "../../icon";
export default {
  name: "m-action-sheet",
  components: {
    MButton,
    MIcon,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 9,
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
      default: [],
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

<style lang="scss" scoped>
.m-mask {
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
  visibility: visible;
  background: $color-mask;
  transition: all 0.2s ease-in-out;
}

.m-mask.is-hidden {
  opacity: 0;
  visibility: hidden;
}

.m-sheet {
  z-index: 10;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: visible;
  background: #fff;
  transform: translate3d(0, 0, 0);
  transform-origin: center;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.m-sheet.is-hidden {
  transform: translate3d(0, 100%, 0);
  visibility: hidden;
}

.m-sheet__header {
  background: #fff;
  text-align: center;
  position: relative;
  font-size: 24px;
  color: #80848f;
}

.m-sheet__header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
  border: 0 solid $color-border;
  border-bottom-width: 1PX;/*no*/
}

.m-sheet__item {
  position: relative;
}

.m-sheet__item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
  box-sizing: border-box;
  border: 0 solid $color-border;
  border-bottom-width: 1PX;/*no*/
}

.m-sheet__item:nth-last-child(1)::after {
  display: none;
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
  background: 0 0;
  border-radius: 50%;
  border: 4px solid #e5e5e5;
  border-left-color: #666;
  animation: btn-spin 0.6s linear infinite;
}

.m-sheet__text {
  display: inline-block;
  vertical-align: middle;
}

.m-sheet__btn-icon {
  margin-right: 8px;
}

@keyframes btn-spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

button.m-button {
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
  color: #495060;
  overflow: visible;
  background-color: #fff;
  transition: opacity 0.16s, background-color 0.16s;
}

button.m-button::after {
  border: none;
  content: " ";
  height: 1PX;/*no*/
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scaleY(0.5);
  transform-origin: 0 0;
  box-sizing: border-box;
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
  animation: btn-spinner 0.8s linear;
  animation-iteration-count: infinite;
}

.m-button.is-disabled {
  color: #c8c9cc;
}
</style>
