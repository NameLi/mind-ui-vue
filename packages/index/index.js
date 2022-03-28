import MIndex from './src/index';

/* istanbul ignore next */
MIndex.install = function(Vue) {
  Vue.component(MIndex.name, MIndex);
};

export default MIndex;
