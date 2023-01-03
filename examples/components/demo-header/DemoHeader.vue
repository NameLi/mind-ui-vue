<template>
  <div class="demo-header__bar">
    <div class="demo-header">
      <div class="demo-header__back" @click="$router.replace('/')">
        <i class="demo-header__back__icon"></i>
      </div>
      <div class="demo-header__title">{{ title }}</div>
      <div class="demo-header__back"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-header",
  props: {
    // 标题
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.demo-header__bar {
  display: block;
  position: relative;
  height: 56PX; /*no*/
}

.demo-header {
  background-color: #fff;
  z-index: 999;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 56PX; /*no*/
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    z-index: 1;
    display: block;
    content: "";
    position: absolute;
    left: 0;
    bottom: 1PX; /*no*/
    width: 100%;
    height: 1PX; /*no*/
    background-color: transparent;
    box-shadow: 0px 4px 8px rgba(174, 174, 174, 0.36);
  }
}

.demo-header .demo-header__back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  padding-left: 20px;
  padding-right: 40px;
  height: 100%;
  box-sizing: content-box;
}

.demo-header .demo-header__back .demo-header__back__icon {
  width: 32px;
  height: 32px;
  background-color: var(--color-text-primary);
  -webkit-mask: url("./back.svg") no-repeat 50% 50%;
  mask: url("./back.svg") no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.demo-header .demo-header__title {
  flex: 1;
  width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
