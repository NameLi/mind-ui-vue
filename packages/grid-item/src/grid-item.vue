<template>
  <div class="m-grid-item" :style="styles" @click="onClick">
    <div
      class="m-grid-item__content"
      :class="{ 'm-grid-item__hairline--rb': border }"
    >
      <template v-if="useSlot">
        <slot />
      </template>

      <template v-else>
        <div class="m-grid-item__icon">
          <m-icon
            v-if="icon"
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          />
          <slot v-else name="icon" />

          <m-badge
            class="m-grid-item__badge"
            :is-dot="badgeDot"
            :value="badgeValue"
          />
        </div>

        <div class="m-grid-item__text">
          <span v-if="text">{{ text }}</span>
          <slot v-else name="text" />
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
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
    iconSize: {
      type: Number,
      default: 48,
    },
    badgeDot: {
      type: Boolean,
      default: false,
    },
    badgeValue: {
      type: [Number, String],
    },
    text: {
      type: String,
      default: "",
    },

    useSlot: Boolean,

    replace: {
      type: Boolean,
      default: false,
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
        styles.push("flex-basis:" + this.width);
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

<style lang="scss">
.m-grid-item {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  .m-grid-item__hairline--rb {
    position: relative;
    &::after {
      z-index: 1;
      position: absolute;
      content: " ";
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border: 0 solid var(--color-border);
      transform: scale(0.5);
      box-sizing: border-box;
      border-width: 0 1PX 1PX 0; /*no*/
    }
  }

  .m-grid-item--hover {
    background-color: #f3f4f5;
  }

  .m-grid-item__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 0;
    box-sizing: border-box;
    height: 100%;
    padding: 32px 16px;
  }

  .m-grid-item__content--clickable:active {
    background-color: #f3f4f5;
  }

  .m-grid-item__icon {
    font-size: 52px;
    position: relative;
  }

  .m-grid-item__badge {
    position: absolute;
  }

  .m-grid-item__text {
    color: var(--color-text-regular);
    font-size: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
