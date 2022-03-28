<template>
  <div>
    <div class="m-header-bar" :style="bgColorStyle">
      <div class="m-header">
        <!-- <div class="status-bar"></div> -->
        <div class="custom-bar">
          <div v-if="back" class="back" @click="$router.back()">
            <i class="back-icon" :style="'background: ' + backColor"></i>
          </div>

          <div
            class="content"
            :class="titleAlignClass"
            v-if="title"
            :style="color ? 'color :' + color : ''"
          >
            <div class="title">{{ title }}</div>
            <div class="m-spinner__loading">
              <div v-if="loading" class="m-spinner__snake"></div>
            </div>
          </div>

          <div class="content" v-else>
            <slot></slot>
          </div>

          <div v-if="back" class="back"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-header-bar",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    // 背景色
    bgcolor: {
      type: String,
      default: "",
    },
    // 返回按钮与字体色
    backColor: {
      type: String,
      default: "#000",
    },
    // 标题文字色
    color: {
      type: String,
      default: "#000",
    },
    // 标题
    title: {
      type: String,
      default: "",
    },

    // 是否显示返回按钮
    back: {
      type: Boolean,
      default: false,
    },

    delta: {
      type: Number,
      default: 1,
    },

    // 是否显示返回按钮，默认跟随平台，ios居中对其，Android左对齐
    align: {
      type: String,
      default: "",
    },

    // 背景图片地址
    bgImage: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      isIos: false,
    };
  },

  computed: {
    bgColorStyle() {
      if (this.bgImage) {
        return `background-image: url("${this.bgImage}")`;
      } else if (this.bgcolor) {
        if (this.bgcolor.includes("gradient")) {
          return `background-image: ${this.bgcolor};`;
        } else {
          return `background-color: ${this.bgcolor};`;
        }
      } else {
        return "";
      }
    },

    titleAlignClass() {
      if (this.align) {
        return this.align;
      } else if (this.isIos) {
        return "center";
      } else {
        return "";
      }
    },
  },

  mounted() {
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      this.isIos = true;
    }
  },
};
</script>

<style scoped lang="scss">
.m-header-bar {
  display: block;
  position: relative;
  height: 56PX; /*no*/
}

.m-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  box-sizing: content-box;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.status-bar {
  height: 20PX; /*no*/
  background: pink;
}

.custom-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 56PX; /*no*/
}

.m-header .back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  padding-left: 20px;
  height: 100%;
}

.m-header .back .back-icon {
  width: 32px;
  height: 32px;
  background: #000;
  -webkit-mask: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E")
    no-repeat 50% 50%;
  mask: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E")
    no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.m-header .back .back-text {
  color: #000;
  font-size: 32px;
  font-weight: 600;
}

.m-header .content {
  flex: 1;
  width: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.m-header .content.center {
  justify-content: center;
}

.content .title {
  max-width: 420px;
  line-height: 1;
  font-size: 32px;
  font-family: "-apple-system-font", "Helvetica Neue", Helvetica, "sans-serif";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content.center .title {
  width: 260px;
}

.m-spinner__loading {
  margin-left: 10px;
}

.m-spinner__snake {
  display: inline-block;
  width: 11PX;
  height: 11PX;
  border-radius: 50%;
  border: 2PX solid;
  border-top-color: transparent;
  vertical-align: middle;
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
</style>
