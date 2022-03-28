<template>
  <label class="m-checkbox custom-class">
    <div v-if="labelLeft" class="m-checkbox__label m-checkbox__label--left">
      <slot></slot>
    </div>

    <div class="m-checkbox__icon-wrap">
      <div class="m-checkbox__icon" :class="getClass" :style="getStyle">
        <input
          class="checkbox-input"
          type="checkbox"
          :value="name"
          v-model="currentValue"
          :disabled="isDisabled"
          :name="name"
        />

        <m-icon
          name="confirm"
          size="28"
          :color="currentValue ? '#fff' : 'transparent'"
        ></m-icon>
      </div>
    </div>

    <div v-if="!labelLeft" class="m-checkbox__label m-checkbox__label--right">
      <slot></slot>
    </div>
  </label>
</template>

<script>
import MIcon from "../../icon";
export default {
  name: "m-checkbox",
  components: {
    MIcon,
  },
  props: {
    name: {
      type: String,
    },
    value: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },

    checkedColor: {
      type: String,
      value: "",
    },

    labelLeft: {
      type: Boolean,
      value: false,
    },

    round: {
      type: Boolean,
      value: false,
    },
  },
  data() {
    return {
      parent: null,
    };
  },
  computed: {
    getClass() {
      var classes = [];

      if (this.isGroup && !this.currentValue && !this.isDisabled && this.parent.max !== undefined && this.parent.len >= this.parent.max) {
        classes.push("m-checkbox__icon--prevent");
      }

      if (this.currentValue) {
        classes.push("m-checkbox__icon--checked");
      }

      if (this.isDisabled) {
        classes.push("m-checkbox__icon--disabled");
      }

      if (this.round) {
        classes.push("m-checkbox__icon--round");
      }

      return classes.join(" ");
    },
    getStyle() {
      if (!this.checkedColor) return;

      let styles = [];

      if (this.value) {
        styles.push("background-color: " + this.checkedColor);
        styles.push("border-color: " + this.checkedColor);
      }

      return styles.join(";");
    },

    isGroup() {
      const parent = this.$parent;

      if (parent.$options.componentName === "m-checkbox-group") {
        this.parent = parent;
        return true;
      } else if (parent.$parent.$options.componentName === "m-checkbox-group") {
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
        if (this.isGroup) {
          return this.parent.value.includes(this.name);
        } else {
          return this.value;
        }
      },
      set(val) {
        if (this.isGroup) {
          let parentValue = this.parent.value

          if(parentValue.includes(this.name)) {
            const idx = parentValue.indexOf(this.name)
            parentValue.splice(idx, 1)
          } else {

            if(this.parent.max === undefined || parentValue.length < this.parent.max) {
              parentValue.push(this.name)
            }
          }

          this.parent.$emit("input", parentValue);
        } else {
          this.$emit("input", val);
        }
      },
    }
  },

  methods: {
    // setParentValue(parent, value) {
    //   const parentValue = parent.value.slice();

    //   const { name } = this;
    //   const { max } = parent;

    //   if (value) {
    //     if (max && parentValue.length >= max) {
    //       return;
    //     }

    //     if (parentValue.indexOf(name) === -1) {
    //       parentValue.push(name);

    //       parent.$emit("input", parentValue);
    //       parent.$emit("change", parentValue);
    //     }
    //   } else {
    //     const index = parentValue.indexOf(name);

    //     if (index !== -1) {
    //       parentValue.splice(index, 1);
    //       parent.$emit("input", parentValue);
    //       parent.$emit("change", parentValue);
    //     }
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.m-checkbox {
  display: flex;
  overflow: hidden;
  user-select: none;
}

.m-checkbox__icon-wrap,
.m-checkbox__label {
  line-height: 40px;
}

.m-checkbox__icon-wrap {
  flex: none;
}

.checkbox-input {
  display: none;
}

.m-checkbox__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: 42px;
  height: 42px;
  color: transparent;
  text-align: center;
  transition-property: color, border-color, background-color;
  font-size: 30px;
  font-weight: bold;
  border: 1PX solid #e5e5e5; /*no*/
  border-radius: 4px;
  transition-duration: 0.25s;
}

.m-checkbox__icon--round {
  border-radius: 50%;
}

.m-checkbox__icon--checked {
  background-color: $color-primary;
  border-color: $color-primary;
}

.m-checkbox__icon--disabled {
  background-color: #ebedf0;
  border-color: #d3d4d5;
}

.m-checkbox__icon--disabled.m-checkbox__icon--checked {
  color: #d3d4d5;
}

.m-checkbox__label {
  flex: 1;
  word-wrap: break-word;
  color: $color-text-primary;
  display: flex;
  align-items: center;
}

.m-checkbox__label--left {
  margin-right: 20px;
}

.m-checkbox__label--right {
  margin-left: 20px;
}

.m-checkbox__label--disabled {
  color: #d3d4d5;
}

.m-checkbox__icon--prevent {
  background-color: #ebedf0;
}
</style>
