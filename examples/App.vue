<template>
  <div id="app">
    <keep-alive include="home">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
const pathList = [
  "home",
  "color",
  "style",
  "button",
  "icon",
  "cell",
  "grid",
  "message",
  "toast",
  "action-sheet",
  "modal",
  "spinner",
  "drawer",
  "swipeout",
  "tag",
  "badge",
  "swiper",
  "collapse",
  "progress",
  "divider",
  "loadmore",
  "timeline",
  "header-bar",
  "navbar",
  "notice-bar",
  "sticky",
  "indexs",
  "sticky-button",
  "slider",
  "switch",
  "radio",
  "checkbox",
  "rate",
];

export default {
  name: "App",
  watch: {
    $route: "routerChange",
  },

  mounted() {
    if (window.parent !== window.self) {
      window.addEventListener("message", this.handleMessage);
    }
  },

  methods: {
    routerChange(route) {
      if (window.parent === window.self) return;

      if (!route.path) return;

      window.parent.postMessage(
        {
          url: route.path,
        },
        "*"
      );
    },

    handleMessage(ev) {
      if (ev.data) {
        let url = ev.data.url;
        const currentPath = this.$route.path;

        if (currentPath === "/" + url) return;

        if (pathList.includes(url)) {
          this.$router.push(url);
        } else {
          if (currentPath === "/") return;
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style lang="scss">
.overflow-hidden {
  overflow: hidden;
}
#app {
  font-family: "PingFang SC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s;
}
.slide-left-enter,
.slide-left-leave-to {
  transform: translateX(100%);
}

.button-group {
  padding: 0 32px;
  .m-button {
    margin-bottom: 15px;
  }
}
</style>
