import MActionsheet from './src/action-sheet';

/* istanbul ignore next */
MActionsheet.install = function(Vue) {
  Vue.component(MActionsheet.name, MActionsheet);
};

export default MActionsheet;