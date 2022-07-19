<template>
  <i
    class="m-icon"
    :class="!isImage ? 'm-icon-' + name : ''"
    :style="styles"
    @click="onClick"
  >
    <img v-if="isImage" :src="name" :style="imageStyles" class="icon__image" />
  </i>
</template>

<script>
export default {
  name: "m-icon",
  props: {
    name: {
      type: String,
      required: true,
    },

    size: {
      type: [Number, String],
      default: 36,
    },
    color: {
      type: String,
      default: "",
    },
  },

  computed: {
    styles() {
      let styles = [];
      const size = this.size / 75 + "rem";
      let font = "font-size: " + size;
      styles.push(font);

      if (this.color) {
        styles.push("color:" + this.color);
      }

      return styles.join(";");
    },
    isImage() {
      return this.name.includes("/");
    },

    imageStyles() {
      let styles = [];
      const size = this.size / 75 + "rem";
      styles.push("width:" + size);
      styles.push("height:" + size);

      return styles.join(";");
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss">
.m-icon {
  display: inline-block;
}
</style>
