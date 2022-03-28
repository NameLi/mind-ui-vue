import DemoHeaderComponent from "./DemoHeader.vue";

const DemoHeader = {
  install: function(Vue) {
    Vue.component("DemoHeader", DemoHeaderComponent);
  }
};

export default DemoHeader;