<template>
  <div class="demo-home">
    <div class="demo-home__logo__wrap">
      <img
        class="demo-home__logo"
        src="https://note-file.ixook.com/FkwInL0tWpqDeRNtYHMfmaHlioTq"
      />
    </div>
    <div class="demo-home__title">Mind UI Vue</div>
    <div class="demo-home__desc">轻量、高效的 Vue2.x 移动端组件库</div>

    <m-cell-group title="基础组件" border card>
      <m-cell title="Color" url="/color" />
      <m-cell title="Style" url="/style" />
      <m-cell title="Button" url="/button" />
      <m-cell title="Icon" url="/icon" />
      <m-cell title="Cell" url="/cell" />
      <m-cell title="Grid" url="/grid" />
    </m-cell-group>

    <m-cell-group title="操作反馈" border card>
      <m-cell title="Message" url="/message" />
      <m-cell title="Toast" url="/toast" />
      <m-cell title="ActionSheet" url="/action-sheet" />
      <m-cell title="Modal" url="/modal" />
      <m-cell title="Spinner" url="/spinner" />
      <m-cell title="Drawer" url="/drawer" />
      <m-cell title="Swipeout" url="/swipeout" />
    </m-cell-group>

    <m-cell-group title="视图" border card>
      <m-cell title="Tag" url="/tag" />
      <m-cell title="Badge" url="/badge" />
      <m-cell title="Swiper" url="/swiper" />
      <m-cell title="Collapse" url="/collapse" />
      <m-cell title="Progress" url="/progress" />
      <m-cell title="Divider" url="/divider" />
      <m-cell title="Loadmore" url="/loadmore" />
      <m-cell title="Timeline" url="/timeline" />
    </m-cell-group>

    <m-cell-group title="导航" border card>
      <m-cell title="HeaderBar" url="/header-bar" />
      <m-cell title="Navbar" url="/navbar" />
      <m-cell title="NoticeBar" url="/notice-bar" />
      <m-cell title="Sticky" url="/sticky" />
      <m-cell title="Index" url="/indexs" />
      <m-cell title="StickyButton" url="/sticky-button" />
    </m-cell-group>

    <m-cell-group title="表单" border card>
      <m-cell title="Slider" url="/slider" />
      <m-cell title="Switch" url="/switch" />
      <m-cell title="Radio" url="/radio" />
      <m-cell title="Checkbox" url="/checkbox" />
      <m-cell title="Rate" url="/rate" />
    </m-cell-group>

    <transition name="slide-left">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss">
.child-page {
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.demo-home {
  padding-bottom: 10px;
  background-color: #f4f4f4;
  .demo-home__logo__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    .demo-home__logo {
      width: 280px;
      height: 280px;
    }
  }
  .demo-home__title {
    text-align: center;
    font-size: 42px;
    padding-bottom: 20px;
    color: $color-text-primary;
  }

  .demo-home__desc {
    text-align: center;
    font-size: 28px;
    padding-bottom: 20px;
    color: $color-text-regular;
  }
}
</style>
