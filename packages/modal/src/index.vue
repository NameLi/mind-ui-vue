<template>
  <div class="m-modal__wrap">
    <div v-show="visible" class="m-mask" @click="onMaskClick"></div>

    <transition name="modal-bounce">
      <div v-show="visible" class="m-modal-wrapper">
        <div class="m-modal">
          <div class="m-modal__content">
            <div class="m-modal__title" v-if="title">{{ title }}</div>

            <div class="m-modal__body" v-if="content">
              {{ content }}
            </div>

            <div class="m-modal__body" v-else>
              <slot />
            </div>

            <div class="m-btn-group">
              <div class="m-btn-item m-btn-cancel" v-if="showCancelButton">
                <m-button full type="ghost" @click="onCancel">
                  {{ cancelButtonText }}
                </m-button>
              </div>

              <div class="m-btn-item" v-if="showConfirmButton">
                <m-button
                  full
                  type="ghost"
                  :loading="loading"
                  @click="onConfirm"
                  :color="confirmTextColor"
                >
                  {{ confirmButtonText }}
                </m-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MButton from "../../button";

export default {
  name: "m-modal",
  components: {
    MButton,
  },

  data() {
    return {
      loading: false,
      visible: false,
      title: "",
      content: "",
      showConfirmButton: false,
      showCancelButton: false,
      confirmButtonText: "确定",
      confirmButtonDisabled: false,
      cancelButtonText: "取消",
      confirmTextColor: "#409EFF",
      asyncClose: false,
    };
  },

  methods: {
    // 确定
    onConfirm() {
      if (this.confirmButtonDisabled) return;

      if (this.loading) return;

      this._confirm(this);

      // 异步
      if (this.asyncClose) {
        this.loading = true;
      } else {
        this.close();
      }

      this.$emit("confirm");
    },

    onCancel() {
      this.visible = false;

      this.$emit("cancel");

      if (this._cancel) {
        this._cancel(this);
        this.close();
      }
    },

    onMaskClick() {
      this.visible = false;
      this.close();
    },

    // 关闭并重置默认参数
    close() {
      this.visible = false;
      this.$emit("close");
      document.body.classList.remove("m-overflow-hidden");
    },
  },
};
</script>

<style lang="scss">
.m-modal__wrap {
  .m-mask {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    visibility: visible;
    background-color: var(--color-mask);
    transition: opacity 0.2s ease-in-out;
  }

  .m-mask.is-hidden {
    opacity: 0;
    visibility: hidden;
  }

  .m-modal-wrapper {
    z-index: 1001;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    opacity: 1;
  }

  .m-modal {
    z-index: 9;
    position: relative;
    width: 540px;
  }

  .m-modal__content {
    position: relative;
    border-radius: 3px;
    padding-top: 30px;
    background-color: #fff;
    border: 0;
    background-clip: padding-box;
    text-align: center;
    height: 100%;
    overflow: hidden;
  }

  .m-modal__title {
    margin: 0;
    padding: 12px 30px 24px;
    font-size: 36px;
    line-height: 1;
    color: var(--color-text-primary);
    text-align: center;
  }

  .m-modal__body {
    // max-height: 300px;
    margin-bottom: 30px;
    padding: 20px 40px;
    font-size: 28px;
    color: var(--color-text-regular);
    line-height: 1.5;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .m-btn-group {
    position: relative;
    display: flex;
  }

  .m-btn-item {
    position: relative;
    flex: 1;
  }

  .m-btn-group::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background-color: #ddd;
  }

  .m-btn-cancel::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    transform: scaleX(0.5);
    background-color: #ddd;
  }

  .modal-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .modal-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
}
</style>
