<template>
  <div class="m-loadmore custom-class" :style="color ? 'color:' + color : ''">
    <div class="m-loadmore__loading" v-if="loading">
      <div :class="spinner ? '' : 'm-loadmore__dot'">
        <div class="m-loadmore__snake" v-if="spinner"></div>
        <div class="m-loadmore__message">{{ loadingContent }}</div>
      </div>
    </div>
    <div class="m-loadmore__end" v-else>{{ loadEndContent }}</div>
  </div>
</template>

<script>
export default {
  name: "m-loadmore",
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    spinner: {
      type: Boolean,
      default: false,
    },
    loadingContent: {
      type: String,
      default: "加载中",
    },
    loadEndContent: {
      type: String,
      default: "没有更多数据了",
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
.m-loadmore {
  height: 60px;
  line-height: 60px;
  color: $color-text-secondary;
  text-align: center;
  font-size: 28px;
}

.m-loadmore__end {
  color: $color-text-secondary;
}

.m-loadmore__snake {
  display: inline-block;
  width: 10PX;
  height: 10PX;
  border-radius: 50%;
  border: 2PX solid currentColor;
  border-left-color: transparent;
  vertical-align: middle;
  background: transparent;
  animation: loading-snake 0.8s linear infinite;
}

@keyframes loading-snake {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.m-loadmore__message {
  margin: 0 10px;
  display: inline-block;
  vertical-align: middle;
}

.m-loadmore__dot {
  vertical-align: middle;
  display: inline-block;
  padding: 0 4px;
}

.m-loadmore__dot::after {
  vertical-align: middle;
  display: inline-block;
  content: "";
  padding-left: 6px;
  width: 36px;
  height: 28px;
  line-height: 36px;
  font-weight: 600;
  letter-spacing: 4px;
  text-align: left;
  animation: dot 1.6s linear infinite;
}

@keyframes dot {
  0% {
    content: "";
  }

  25% {
    content: ".";
  }

  50% {
    content: "..";
  }

  75% {
    content: "...";
  }
}
</style>
