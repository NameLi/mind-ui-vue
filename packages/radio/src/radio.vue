<template>
  <label
    class="m-radio custom-class"
    :class="isDisabled ? 'm-radio--disabled' : ''"
  >
    <div v-if="labelLeft" class="radio__label radio__label--left">
      <slot></slot>
    </div>

    <div class="radio__icon-wrap">
      <input
        class="radio-input"
        type="radio"
        :value="name"
        v-model="currentValue"
        :disabled="isDisabled"
        :name="name"
      />
      <div
        class="radio__icon"
        :class="getClass"
        :style="checkedColor ? 'color: ' + checkedColor : ''"
      ></div>
    </div>

    <div
      v-if="!labelLeft"
      class="radio__label radio__label--right"
      @click="onClickLabel"
    >
      <slot></slot>
    </div>
  </label>
</template>

<script>
export default {
  name: "m-radio",
  props: {
    value: {
      type: null,
    },
    name: {
      type: null,
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

  data() {
    return {
      parent: null,
    };
  },

  computed: {
    getClass() {
      let classes = [];
      if (this.isDisabled) {
        classes.push("radio__icon--disabled");
      }
      if (this.currentValue === this.name) {
        classes.push("radio__icon--checked");
      }
      return classes.join(" ");
    },

    isGroup() {
      const parent = this.$parent;

      if (parent.$options.componentName === "m-radio-group") {
        this.parent = parent;
        return true;
      } else if (parent.$parent.$options.componentName === "m-radio-group") {
        this.parent = parent.$parent;
        return true;
      } else {
        return false;
      }
    },

    isDisabled() {
      return this.isGroup
        ? this.parent.disabled || this.disabled
        : this.disabled;
    },

    currentValue: {
      get() {
        return this.isGroup ? this.parent.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.parent.$emit("input", val);
        } else {
          this.$emit("input", val);
        }
      },
    },
  },

  methods: {
    onClickLabel() {
      const { isDisabled, labelDisabled, name } = this;
      if (!isDisabled && !labelDisabled) {
        this.$emit("change", this.currentValue);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.m-radio {
  display: flex;
  align-items: center;
}

.radio-input {
  display: none;
}

.radio__icon-wrap {
  /* display: inline-block; */ /* vertical-align: middle; */
  font-size: 0;
}

.radio__icon {
  position: relative;
  display: inline-block;
  width: 18PX;
  height: 18PX;
  color: $color-primary;
  text-align: center;
  border: 1PX solid #e5e5e5; /*no*/
  border-radius: 100%;
  box-sizing: content-box;
  vertical-align: middle;
  transition-property: color, border-color, background-color;
  transition-duration: 0.2s;
  box-sizing: border-box;
}

.radio__icon::after {
  display: block;
  content: " ";
  margin: auto;
  width: 8PX;
  height: 8PX;
  border-radius: 100%;
  background-color: currentColor;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transform: scale(0);
  transition: transform 0.15s ease-in;
}

.radio__icon--checked {
  border-color: currentColor;
}

.radio__icon--checked::after {
  transform: scale(1);
}

.radio__icon--disabled {
  background-color: #ebedf0;
  border-color: #c8c9cc;
}

.radio__icon--disabled.radio__icon--checked {
  color: #c8c9cc;
}

.radio__icon--disabled.radio__icon--checked::after {
  color: #c8c9cc;
  background-color: #c8c9cc;
}

.radio__label {
  flex: 1;
  word-wrap: break-word;
  color: $color-text-regular;
  line-height: 36px;
}

.radio__label--left {
  margin-right: 20px;
}

.radio__label--right {
  margin-left: 20px;
}

.radio__label--disabled {
  color: #c8c9cc;
}

.m-radio--disabled .label-class {
  color: #c8c9cc;
}
</style>
