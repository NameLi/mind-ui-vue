<template>
  <div class="m-spinner" :style="'color:' + color">
    <div v-if="type === 'snake'" class="m-spinner__snake"></div>

    <div v-if="type === 'bounce'" class="m-spinner__bounce">
      <div class="m-bounce m-bounce1"></div>
      <div class="m-bounce m-bounce2"></div>
    </div>

    <div v-if="type === 'circle'" class="m-spinner__circle">
      <div
        v-for="(i, index) in 10"
        :key="index"
        class="m-circle"
        :style="index | styles"
      ></div>
    </div>

    <div v-if="type === 'triple'" class="m-spinner__triple">
      <div class="m-triple" v-for="(item, index) in colors" :key="index">
        <div :class="'m-rect m-rect' + index" :style="'color: ' + item"></div>
      </div>
    </div>

    <div v-if="type === 'dot'" class="m-spinner__dot">
      <div class="m-dot">加载中</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-spinner",
  props: {
    type: {
      type: String,
      default: "snake",
    },
    color: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      colors: [],
    };
  },
  filters: {
    styles(index) {
      let styles = [];
      styles.push("opacity: " + 1 - 0.06 * index);
      styles.push("transform: rotate(" + index * 36 + "deg)");
      return styles.join(";");
    },
  },
  mounted() {
    this.setColors();
  },
  methods: {
    setColors() {
      // triple 可以传多个颜色字符串，逗号分隔
      if (this.type === "triple") {
        const color = this.color;
        let colors;

        if (color.split(",").length === 3) {
          colors = color.split(",");
        } else {
          colors = new Array(3).fill(color);
        }

        this.colors = colors;
      }
    },
  },
};
</script>

<style lang="scss">
.m-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);

  /* snake */
  .m-spinner__snake {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid;
    border-top-color: transparent;
    vertical-align: middle;
    background-color: transparent;
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

  /* bounce */

  .m-spinner__bounce {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
  }

  .m-bounce {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    animation: loading-bounce 2s infinite ease-in-out;
    background-color: currentColor;
  }

  .m-bounce2 {
    animation-delay: -1s;
  }

  @keyframes loading-bounce {
    0%,
    100% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }
  }

  /* circle */
  .m-spinner__circle {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 40px;
    animation: loading-circle 1s linear infinite;
    animation-timing-function: steps(12);
  }

  .m-circle {
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .m-circle::before {
    width: 4px;
    height: 25%;
    border-radius: 2px;
    content: " ";
    display: block;
    margin: 0 auto;
    background-color: currentColor;
  }

  @keyframes loading-circle {
    0% {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(1turn);
    }
  }

  /* triple */
  .m-spinner__triple {
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .m-triple {
    margin: 0 5px;
    height: 24px;
    width: 10px;
    display: inline-block;
  }

  .m-triple .m-rect {
    height: 24px;
    width: 100%;
    border-radius: 10px;
    animation: stretchdelay 1s infinite;
    transform: rotate(12deg);
    opacity: 0;
    background-color: currentColor;
  }

  .m-triple .m-rect1 {
    animation-delay: 0.2s;
  }

  .m-triple .m-rect2 {
    animation-delay: 0.4s;
  }

  @keyframes stretchdelay {
    0%,
    40%,
    100% {
      opacity: 0;
      transform: rotate(12deg) scale(0.2, 0.2);
    }

    70% {
      opacity: 1;
      transform: rotate(12deg) scale(1, 1);
    }
  }

  /* dot */
  .m-spinner__dot {
    height: 40px;
    line-height: 40px;
    font-size: 28px;
    text-align: center;
  }

  .m-dot {
    display: inline-block;
    padding: 0 4px;
  }

  .m-dot::after {
    display: inline-block;
    margin-left: 6px;
    content: "";
    width: 36px;
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
}
</style>
