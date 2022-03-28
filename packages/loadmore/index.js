import MLoadmore from './src/loadmore';

/* istanbul ignore next */
MLoadmore.install = function(Vue) {
  Vue.component(MLoadmore.name, MLoadmore);
};

export default MLoadmore;