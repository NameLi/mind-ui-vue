import DemoCardComponent from "./DemoCard.vue";

const DemoCard = {
  install: function(Vue) {
    Vue.component("DemoCard", DemoCardComponent);
  }
};

export default DemoCard;