import MHeaderBar from "./src/header-bar";


MHeaderBar.install = function(Vue) {
  Vue.component(MHeaderBar.name, MHeaderBar);
};

export default MHeaderBar;