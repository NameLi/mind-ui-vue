import PageComponent from "./index.vue";

const Page = {
  install: function(Vue) {
    Vue.component("Page", PageComponent);
  }
};

export default Page;