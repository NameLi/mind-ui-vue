import MNavbar from './src/navbar';

/* istanbul ignore next */
MNavbar.install = function(Vue) {
  Vue.component(MNavbar.name, MNavbar);
};

export default MNavbar;
