import MSticky from './src/sticky';

MSticky.install = function (Vue) {
  Vue.component(MSticky.name, MSticky);
};

export default MSticky;
