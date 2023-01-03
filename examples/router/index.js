import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/",
    name: 'home',
    component: require("../pages/home.vue").default,
    children: [
      {
        path: "/button",
        component: require("../pages/button.vue").default,
      },
      {
        path: "/style",
        component: require("../pages/style.vue").default,
      },
      {
        path: "/color",
        component: require("../pages/color.vue").default,
      },
      {
        path: "/header-bar",
        component: require("../pages/header-bar.vue").default,
      },
      {
        path: "/cell",
        component: require("../pages/cell.vue").default,
      },
      {
        path: "/icon",
        component: require("../pages/icon.vue").default,
      },
      {
        path: "/toast",
        component: require("../pages/toast.vue").default,
      },
      {
        path: "/message",
        component: require("../pages/message.vue").default,
      },
      {
        path: "/modal",
        component: require("../pages/modal.vue").default,
      },
      {
        path: "/badge",
        component: require("../pages/badge.vue").default,
      },
      {
        path: "/divider",
        component: require("../pages/divider.vue").default,
      },
      {
        path: "/loadmore",
        component: require("../pages/loadmore.vue").default,
      },
      {
        path: "/spinner",
        component: require("../pages/spinner.vue").default,
      },
      {
        path: "/tag",
        component: require("../pages/tag.vue").default,
      },
      {
        path: "/progress",
        component: require("../pages/progress.vue").default,
      },
      {
        path: "/rate",
        component: require("../pages/rate.vue").default,
      },
      {
        path: "/notice-bar",
        component: require("../pages/notice-bar.vue").default,
      },
      {
        path: "/navbar",
        component: require("../pages/navbar.vue").default,
      },
      {
        path: "/collapse",
        component: require("../pages/collapse.vue").default,
      },
      {
        path: "/slider",
        component: require("../pages/slider.vue").default,
      },
      {
        path: "/drawer",
        component: require("../pages/drawer.vue").default,
      },
      {
        path: "/timeline",
        component: require("../pages/timeline.vue").default,
      },
      {
        path: "/grid",
        component: require("../pages/grid.vue").default,
      },
      {
        path: "/action-sheet",
        component: require("../pages/actionsheet.vue").default,
      },
      {
        path: "/switch",
        component: require("../pages/switch.vue").default,
      },
      {
        path: "/checkbox",
        component: require("../pages/checkbox.vue").default,
      },
      {
        path: "/radio",
        component: require("../pages/radio.vue").default,
      },
      {
        path: "/sticky-button",
        component: require("../pages/sticky-button.vue").default,
      },
      {
        path: "/swipeout",
        component: require("../pages/swipeout.vue").default,
      },
      {
        path: "/indexs",
        component: require("../pages/index.vue").default,
      },
      {
        path: "/sticky",
        component: require("../pages/sticky.vue").default,
      },
      {
        path: "/can-use-sticky",
        component: require("../pages/can-use-sticky.vue").default,
      },
    ]
  },
];

export default new Router({
  mode: "history",
  linkActiveClass: "actived",
  linkExactActiveClass: "actived",
  base: '/',//__dirname,
  routes: constantRoutes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.name === 'home') {
  //     return false
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // },
});
