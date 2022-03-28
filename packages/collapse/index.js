import MCollapse from './src/collapse';

/* istanbul ignore next */
MCollapse.install = function(Vue) {
  Vue.component(MCollapse.name, MCollapse);
};

export default MCollapse;
