<template>
  <div class="m-rate">
    <div
      class="m-rate__content"
      :class="{ 'is-active': actived === index }"
      v-for="(item, index) in starNum"
      :key="index"
    >
      <m-icon
        :name="icon"
        :size="size"
        :color="
          disabled ? disabledColor : index + 1 <= tValue ? color : voidColor
        "
        @click="handleClick(index + 1)"
      />

      <m-icon
        v-if="allowHalf"
        :name="voldIcon"
        :size="size"
        class="m-rate__half-icon"
        :color="
          disabled ? disabledColor : index + 0.5 <= tValue ? color : voidColor
        "
        @click="handleClick(index + 0.5)"
      />
    </div>

    <div
      v-if="text"
      class="m-score"
      :style="'font-size: ' + size / 75 / 1.2 + 'rem;color: ' + textColor"
    >
      {{ text }}
    </div>
  </div>
</template>

<script>
import MIcon from "../../icon";
export default {
  name: "m-rate",
  components: {
    MIcon,
  },
  props: {
    value: {
      type: [Number, String],
      default: 0,
      validator: function (value) {
        if (!isNaN(Number(value))) {
          return true;
        } else {
          console.warn("value is not a number");
          return false;
        }
      },
    },
    max: {
      type: Number,
      default: 5,
    },
    step: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 40,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "star-fill",
    },
    voldIcon: {
      type: String,
      default: "star-fill",
    },
    voidColor: {
      type: String,
      default: "#eee",
    },
    color: {
      type: String,
      default: "#F7BA2A",
    },
    allowHalf: {
      type: Boolean,
      default: false,
    },
    showScore: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: "#F7BA2A",
    },
    texts: {
      type: Array,
      default: () => ["极差", "较差", "一般", "不错", "很棒"],
    },
    showText: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      actived: -1,
      text: "",
      tValue: 0,
    };
  },

  computed: {
    starNum() {
      return Math.ceil(this.max / this.step);
    },
  },

  watch: {
    value: {
      handler() {
        this.tValue = parseInt(this.value) / this.step;
        this._setShowText();
      },
      immediate: true,
    },
  },

  methods: {
    _setShowText() {
      let score = this.tValue;

      if (score > 0 && (this.showScore || this.showText)) {
        let text = score;
        let textLen = this.texts.length;

        if (this.showText) {
          if (score > textLen) {
            text = this.texts[textLen - 1];
          } else {
            if (this.allowHalf) {
              text = this.texts[Math.floor(score - 0.5)];
            } else {
              text = this.texts[Math.floor(score) - 1];
            }
          }
        }

        this.text = text;
      }
    },

    handleClick(score) {
      if (this.readonly || this.disabled) return;

      this.actived = -1;

      setTimeout(() => {
        this.tValue = score;
        this.actived = Math.floor(score - 0.5);
        this._setShowText();
      }, 20);

      this.$emit("change", score * this.step);
      this.$emit("input", score * this.step);
    },
  },
};
</script>

<style lang="scss">
.m-rate {
  display: inline-flex;
  align-items: center;
  .m-rate__content {
    position: relative;
    display: flex;
    align-content: center;
    margin-right: 10px;
    .m-rate__half-icon {
      position: absolute;
      left: 0;
      width: 50%;
      overflow: hidden;
    }
    &.is-active {
      animation: m-jump 0.4s ease-in-out;
    }
  }
  .m-score {
    margin-left: 12px;
  }
}

@keyframes m-jump {
  0% {
    transform: scale(1);
  }

  60% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
