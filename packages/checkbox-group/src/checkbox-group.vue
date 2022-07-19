<template>
  <div class="m-checkbox-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-checkbox-group",
  componentName: "m-checkbox-group",
  props: {
    max: Number,
    round: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
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
      this._getValueLength();
      this.$emit("change", val);
    },
  },

  data() {
    return {
      len: 0,
    };
  },

  mounted() {
    this._getValueLength();
  },

  methods: {
    _getValueLength() {
      if (Array.isArray(this.value)) {
        this.len = this.value.length;
      } else {
        this.len = 0;
      }
    },
  },
};
</script>