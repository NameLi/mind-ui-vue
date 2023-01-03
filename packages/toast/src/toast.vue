<template>
  <div class="m-toast__wrap" v-show="visible">
    <div
      v-show="visible && mask"
      class="m-toast__mask"
      :style="'z-index:' + zIndex + ';' + ghost ? 'opacity: 0' : ''"
    ></div>

    <div class="m-toast" :class="customClass" :style="'z-index:' + zIndex">
      <div class="m-toast__container">
        <div v-if="icon" class="m-toast__icon">
          <m-icon :name="icon" size="72" color="#fff"></m-icon>
        </div>

        <div v-else-if="image" class="m-toast__image">
          <img :src="image" />
        </div>

        <div v-show="type === 'loading'" class="m-toast__loading"></div>
        <div v-show="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MIcon from "../../icon/src/icon";
export default {
  name: "m-toast",
  components: {
    MIcon,
  },

  computed: {
    customClass() {
      let classes = [];

      if (this.visible) {
        classes.push("toast-show");
      }

      classes.push(this.position);

      return classes.join(" ");
    },
  },
};
</script>

<style lang="scss">
.m-toast__wrap {
  .m-toast__mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-mask);
    z-index: 2000;
  }

  .m-toast {
    z-index: 2001;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .m-toast.top {
    top: 110px;
    animation: m-toast-top 0.25s ease-in-out;
  }

  .m-toast.middle {
    top: 45%;
    animation: m-toast-middle 0.25s ease-in-out;
  }

  .m-toast.bottom {
    bottom: 110px;
    animation: m-toast-bottom 0.25s ease-in-out;
  }

  .m-toast__container {
    margin: 0 auto;
    padding: 24px 40px;
    color: #fff;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .m-toast__icon {
    padding: 30px 0 60px;
  }

  .m-toast__image {
    padding-bottom: 20px;
  }
  .m-toast__image img {
    max-width: 110px;
    max-height: 110px;
  }

  .m-toast__loading {
    display: inline-block;
    margin: 26px 36px 36px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 2PX solid #fff; /*no*/
    border-left-color: transparent;
    vertical-align: middle;
    background-position: 0 0;
    animation: m-btn-spinner 0.8s linear infinite;
  }

  @keyframes m-toast-top {
    0% {
      opacity: 0;
      top: 40px;
    }

    60% {
      opacity: 1;
      top: 130px;
    }

    100% {
      top: 110px;
    }
  }

  @keyframes m-toast-middle {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.85);
    }

    80% {
      transform: translate(-50%, -50%) scale(1.02);
    }

    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes m-toast-bottom {
    0% {
      opacity: 0;
      bottom: 40px;
    }

    60% {
      opacity: 1;
      bottom: 130px;
    }

    100% {
      bottom: 110px;
    }
  }

  @keyframes m-btn-spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
