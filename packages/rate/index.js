import MRate from './src/rate';

/* istanbul ignore next */
MRate.install = function(Vue) {
  Vue.component(MRate.name, MRate);
};

export default MRate;
