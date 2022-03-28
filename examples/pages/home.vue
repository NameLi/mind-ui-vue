<template>
  <div class="wrap">
    <div class="logo__wrap">
      <img
        class="logo"
        src="https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq"
      />
    </div>
    <div class="title">Mind UI</div>
    <div class="desc">原生、轻量、高效的微信小程序UI组件库</div>

    <m-cell-group title="基础组件" border card>
      <m-cell title="Color" url="/color"></m-cell>
      <m-cell title="Button" url="/button"></m-cell>
      <m-cell title="Icon" url="/icon"></m-cell>
      <m-cell title="Cell" url="/cell"></m-cell>
      <m-cell title="Grid" url="/grid"></m-cell>
    </m-cell-group>

    <m-cell-group title="操作反馈" border card>
      <m-cell title="Message" url="/message"></m-cell>
      <m-cell title="Toast" url="/toast"></m-cell>
      <m-cell title="ActionSheet" url="/action-sheet"></m-cell>
      <m-cell title="Modal" url="/modal"></m-cell>
      <m-cell title="Spinner" url="/spinner"></m-cell>
      <m-cell title="Drawer" url="/drawer"></m-cell>
      <m-cell title="Swipeout" url="/swipeout"></m-cell>
    </m-cell-group>

    <m-cell-group title="视图" border card>
      <m-cell title="Tag" url="/tag"></m-cell>
      <m-cell title="Badge" url="/badge"></m-cell>
      <m-cell title="Swiper" url="/swiper"></m-cell>
      <m-cell title="Collapse" url="/collapse"></m-cell>
      <m-cell title="Progress" url="/progress"></m-cell>
      <m-cell title="Divider" url="/divider"></m-cell>
      <m-cell title="Loadmore" url="/loadmore"></m-cell>
      <m-cell title="Timeline" url="/timeline"></m-cell>
    </m-cell-group>

    <m-cell-group title="导航" border card>
      <m-cell title="HeaderBar" url="/header-bar"></m-cell>
      <m-cell title="Navbar" url="/navbar"></m-cell>
      <m-cell title="NoticeBar" url="/notice-bar"></m-cell>
      <m-cell title="Sticky" url="/sticky"></m-cell>
      <m-cell title="Index" url="/indexs"></m-cell>
      <m-cell title="StickyButton" url="/sticky-button"></m-cell>
    </m-cell-group>

    <m-cell-group title="表单" border card>
      <m-cell title="Slider" url="/slider"></m-cell>
      <m-cell title="Switch" url="/switch"></m-cell>
      <m-cell title="Radio" url="/radio"></m-cell>
      <m-cell title="Checkbox" url="/checkbox"></m-cell>
      <m-cell title="Rate" url="/rate"></m-cell>
    </m-cell-group>

    <transition name="slide-left">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
.child-page {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.wrap {
  background-color: #f4f4f4;
  padding-bottom: 10px;
  .logo__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    .logo {
      width: 280px;
      height: 280px;
    }
  }
  .title {
    text-align: center;
    font-size: 42px;
    padding-bottom: 20px;
    color: $color-text-primary;
  }

  .desc {
    text-align: center;
    font-size: 28px;
    padding-bottom: 20px;
    color: $color-text-regular;
  }
}
</style>
