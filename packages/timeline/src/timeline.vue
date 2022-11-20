<template>
  <div class="m-timeline">
    <slot />
  </div>
</template>

<script>
export default {
  name: "m-timeline",
};
</script>

<style lang="scss">
.m-timeline {
  .m-timeline-item:nth-last-child(1) {
    .m-timeline-item__time {
      &::after {
        display: none;
      }
    }
  }
}
</style>