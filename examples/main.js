import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "lib-flexible";
import "./assets/style/index.css";

import MindUI from '../src/index.js'
Vue.use(MindUI);

import DemoCard from "./components/demo-card/index";
Vue.use(DemoCard);

import DemoHeader from "./components/demo-header/index";
Vue.use(DemoHeader);

import Page from "./components/page/index";
Vue.use(Page);

import { preventScroll } from './util/index'
Vue.prototype.$preventScroll = preventScroll;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
