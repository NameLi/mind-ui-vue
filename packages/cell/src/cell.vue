<template>
  <div @click="onClick" class="m-cell" :class="customClass">
    <div v-if="icon" class="icon m-cell__header">
      <m-icon :name="icon" size="38" :color="iconColor"></m-icon>
    </div>

    <div v-if="title" class="m-cell__title">{{ title }}</div>
    <slot v-else name="title"></slot>

    <div v-if="value" class="m-cell__desc" :class="{ 'is-ellipsis': ellipsis }">
      {{ value }}
    </div>

    <div v-else class="slot">
      <slot></slot>
    </div>

    <m-icon
      v-if="url"
      class="icon m-cell__footer"
      catchtap="navigateTo"
      name="arrow-right"
      size="32"
      color="#999"
    ></m-icon>
  </div>
</template>

<script>
import MIcon from "../../icon";
export default {
  name: "m-cell",
  components: {
    MIcon,
  },
  props: {
    url: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: String,
      default: "",
    },
    title: {
      default: "",
    },
    value: {
      default: "",
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isLast: false,
    };
  },

  computed: {
    border() {
      return this.$parent.border && !this.isLast;
    },
    customClass() {
      return [
        this.border ? "border-bottom" : "",
        this.url ? "m-cell--hover" : "",
      ].join(" ");
    },
  },

  methods: {
    onClick(e) {
      if (this.url) {
        this.$router.push(this.url);
      }
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.m-cell {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 32px;
  line-height: 54px;
  font-size: 28px;
  .m-cell--hover:hover {
    background-color: #f3f4f5;
  }

  .icon {
    width: 38px;
    text-align: center;
  }

  .image-icon {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  .m-cell__header {
    margin-right: 12px;
    display: flex;
    align-items: center;
  }
  .m-cell__footer {
    text-align: right;
    margin-left: 24px;
  }

  .m-cell__title {
    display: flex;
    align-items: center;
    flex: 1;
    color: $color-text-primary;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .m-cell__desc {
    margin-left: 20px;
    max-width: 62%;
    color: $color-text-secondary;
    font-size: 28px;
    text-align: justify;
    line-height: 1.6;
    &.is-ellipsis {
      line-height: 54px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .slot {
    vertical-align: middle;
  }

  .border-bottom::after {
    content: " ";
    display: block;
    position: absolute;
    left: 20px;
    bottom: 0;
    right: 20px;
    height: 1px;
    background: $color-border;
    transform: scaleY(0.5);
  }
}
</style>