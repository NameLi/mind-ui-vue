import HeaderBar from "./src/header-bar";

/* istanbul ignore next */
HeaderBar.install = function(Vue) {
  Vue.component(HeaderBar.name, HeaderBar);
};

export default HeaderBar;