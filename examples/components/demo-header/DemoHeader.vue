<template>
  <div class="demo-header-bar">
    <div class="demo-header">
      <div class="back" @click="$router.replace('/')">
        <i class="back-icon"></i>
      </div>
      <div class="title">{{ title }}</div>
      <div class="back"></div>
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

<style scoped lang="scss">
.demo-header-bar {
  display: block;
  position: relative;
  height: 56PX;
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

.demo-header .back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  padding-left: 20px;
  padding-right: 40px;
  height: 100%;
  box-sizing: content-box;
}

.demo-header .back .back-icon {
  width: 32px;
  height: 32px;
  background-color: $color-text-primary;
  -webkit-mask: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E")
    no-repeat 50% 50%;
  mask: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10%2019.438L8.955%2020.5l-7.666-7.79a1.02%201.02%200%20010-1.42L8.955%203.5%2010%204.563%202.682%2012%2010%2019.438z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E")
    no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.demo-header .title {
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
