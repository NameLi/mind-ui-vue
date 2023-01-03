<template>
  <div class="m-progress__wrap">
    <div class="m-progress" :style="'height: ' + barHeight + 'px'">
      <div
        class="m-progress__portion"
        :class="'m-progress__portion--' + type"
        :style="progressStyle"
      >
        <div
          v-if="pointVisible && text"
          :style="pointStyle"
          class="m-progress__point"
          :class="'m-progress__point--' + type"
        >
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-progress",
  props: {
    type: {
      type: String,
      default: "primary",
    },

    percent: {
      type: [Number, String],
      default: 0,
    },

    pointText: {
      type: String,
      default: "",
    },
    pointColor: {
      type: String,
      default: "",
    },

    activeColor: {
      type: String,
      default: "",
    },

    pointVisible: {
      type: Boolean,
      default: true,
    },

    textColor: {
      type: String,
      default: "#fff",
    },

    barHeight: {
      type: [Number, String],
      default: 6,
    },
  },
  computed: {
    progressStyle() {
      let styles = [`width: ${this.percent}%`];

      if (this.activeColor) {
        styles.push("background-color: " + this.activeColor);
      }
      return styles.join(";");
    },
    text() {
      return this.pointText || this.percent + "%";
    },
    pointStyle() {
      return [
        "color: " + this.textColor,
        "background-color: " + this.pointColor || this.activeColor,
      ].join(";");
    },
  },
};
</script>

<style lang="scss">
.m-progress__wrap {
  padding: 20px 0;

  .m-progress {
    position: relative;
    height: 6px;
    border-radius: 100px;
    background-color: #e5e5e5;
  }

  .m-progress__portion {
    position: absolute;
    left: 0;
    height: 100%;
    border-radius: inherit;
    background-color: var(--color-primary);
  }

  .m-progress__portion--primary {
    background-color: var(--color-primary);
  }
  .m-progress__portion--success {
    background-color: var(--color-success);
  }
  .m-progress__portion--warning {
    background-color: var(--color-warning);
  }
  .m-progress__portion--danger {
    background-color: var(--color-danger);
  }

  .m-progress__point {
    position: absolute;
    top: 50%;
    right: 0;
    box-sizing: border-box;
    min-width: 40px;
    line-height: 1.5;
    text-align: center;
    word-break: keep-all;
    border-radius: 100px;
    transform: translateY(-50%);
    color: #fff;
    padding: 0 8px;
    font-size: 20px;
    background-color: var(--color-primary);
  }

  .m-progress__point--primary {
    background-color: var(--color-primary);
  }
  .m-progress__point--success {
    background-color: var(--color-success);
  }
  .m-progress__point--warning {
    background-color: var(--color-warning);
  }
  .m-progress__point--danger {
    background-color: var(--color-danger);
  }
}
</style>
