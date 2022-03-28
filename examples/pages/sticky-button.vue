<template>
  <page title="粘滞按钮 StickyButton">
    <div class="sticky-fixed left-bottom">
      <m-sticky-button direction="rt">
        <m-sticky-button-item icon="boy"></m-sticky-button-item>
        <m-sticky-button-item icon="love"></m-sticky-button-item>
        <m-sticky-button-item icon="girl"></m-sticky-button-item>
      </m-sticky-button>
    </div>

    <div class="sticky-fixed bottom">
      <m-sticky-button
        direction="t"
        :offset="0.314"
        :radius="180"
        bgcolor="#67c23a"
        sub-bgcolor="#f56c6c"
      >
        <m-sticky-button-item icon="boy"></m-sticky-button-item>
        <m-sticky-button-item icon="love"></m-sticky-button-item>
        <m-sticky-button-item
          bgcolor="#e54d42"
          icon="girl"
        ></m-sticky-button-item>
        <m-sticky-button-item icon="star-fill "></m-sticky-button-item>
        <m-sticky-button-item icon="like-fill"></m-sticky-button-item>
      </m-sticky-button>
    </div>

    <div class="sticky-fixed right-bottom">
      <m-sticky-button direction="lt">
        <m-sticky-button-item icon="boy"></m-sticky-button-item>
        <m-sticky-button-item icon="love"></m-sticky-button-item>
        <m-sticky-button-item icon="girl"></m-sticky-button-item>
      </m-sticky-button>
    </div>
  </page>
</template>

<script>
export default {
  name: "demo-sticky-button",
};
</script>

<style lang="scss" scoped>
.sticky-fixed {
  position: fixed;
  bottom: 40px;
}
.left-bottom {
  left: 40px;
}
.bottom {
  left: calc(50% - 50px);
}
.right-bottom {
  right: 40px;
}

.custom-class {
  width: 80px !important;
  height: 80px !important;
  line-height: 80px !important;
}
</style>
