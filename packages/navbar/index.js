import MNavbar from './src/navbar';

MNavbar.install = function (Vue) {
  Vue.component(MNavbar.name, MNavbar);
};

export default MNavbar;
