import MIcon from "./src/icon";

/* istanbul ignore next */
MIcon.install = function(Vue) {
  Vue.component(MIcon.name, MIcon);
};

export default MIcon;