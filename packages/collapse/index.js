import MCollapse from './src/collapse';


MCollapse.install = function(Vue) {
  Vue.component(MCollapse.name, MCollapse);
};

export default MCollapse;
