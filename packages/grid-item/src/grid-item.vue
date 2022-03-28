<template>
  <div class="grid-item" :style="styles" @click="onClick">
    <div
      class="grid-item__content"
      :class="border ? 'grid-item__content--border' : ''"
    >
      <template v-if="useSlot">
        <slot></slot>
      </template>

      <template v-else>
        <div class="grid-item__icon">
          <m-icon
            v-if="icon"
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          />
          <slot v-else name="icon"></slot>

          <m-badge
            custom-class="grid-item__badge"
            :is-dot="badgeDot"
            :value="badgeValue"
          ></m-badge>
        </div>

        <div class="grid-item__text">
          <span v-if="text">{{ text }}</span>
          <slot v-else name="text"></slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MBadge from "../../badge";
import MIcon from "../../icon";
export default {
  name: "m-grid-item",
  components: {
    MBadge,
    MIcon,
  },
  props: {
    icon: {
      type: String,
      value: "",
    },
    iconColor: {
      type: String,
      value: "",
    },
    iconSize: {
      type: Number,
      value: 48,
    },
    badgeDot: {
      type: Boolean,
      value: false,
    },
    badgeValue: {
      type: [Number, String],
    },
    text: {
      type: String,
      value: "",
    },
    useSlot: Boolean,

    // 链接类型，可选值为 navigateTo，redirectTo，switchTab
    linkType: {
      type: String,
      value: "navigateTo",
    },
    url: {
      type: String,
    },
  },

  computed: {
    width() {
      return this.$parent.width;
    },
    height() {
      return this.$parent.height;
    },
    styles() {
      let styles = [];
      if (this.width) {
        styles.push("width:" + this.width);
      }

      if (this.height) {
        styles.push("height:" + this.height);
      }

      return styles.join(";");
    },
    border() {
      return this.$parent.border;
    },
  },

  methods: {
    onClick() {
      this.$emit("click");

      if (!this.url) return;
      this.$router.push(this.url);
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  position: relative;
  float: left;
  box-sizing: border-box;
  background-color: #fff;
}

.grid-item--hover {
  background-color: #f3f4f5;
}

.grid-item__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  padding: 32px 16px;
}

.grid-item__content--border:after {
  z-index: 1;
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  transform: scale(0.5);
  transform-origin: 0 0;
  box-sizing: border-box;
  border: 1PX solid transparent; /*no*/
  border-right-color: $color-border;
  border-bottom-color: $color-border;
}

.grid-item__content--clickable:active {
  background-color: #f3f4f5;
}

.grid-item__icon {
  font-size: 52px;
  position: relative;
}

.grid-item__badge {
  position: absolute !important;
}

.grid-item__text {
  // word-wrap: break-word;
  color: $color-text-regular;
  font-size: 28px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
