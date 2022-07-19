<template>
  <div class="m-timeline">
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-timeline",

  data() {
    return {
      children: [],
    };
  },

  mounted() {
    this._updateChildren();
  },

  methods: {
    _updateChildren() {
      const children = this.$slots.default.map((item) => {
        return item.child;
      });

      children[children.length - 1].isLast = true;
    },
  },
};
</script>