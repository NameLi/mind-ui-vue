import MDrawer from './src/drawer';

/* istanbul ignore next */
MDrawer.install = function(Vue) {
  Vue.component(MDrawer.name, MDrawer);
};

export default MDrawer;
