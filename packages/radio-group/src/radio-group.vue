<template>
  <div class="m-radio-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-radio-group",
  componentName: "m-radio-group",
  props: {
    value: {
      type: null,
    },
    disabled: {
      type: Boolean,
    },
    checkedColor: {
      type: String,
      default: "",
    },
    labelLeft: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    value(val) {
      this.$emit("change", val);
    },
  },
};
</script>
