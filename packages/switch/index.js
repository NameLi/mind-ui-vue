import MSwitch from './src/switch';

/* istanbul ignore next */
MSwitch.install = function(Vue) {
  Vue.component(MSwitch.name, MSwitch);
};

export default MSwitch;
