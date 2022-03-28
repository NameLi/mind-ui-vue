import MProgress from './src/progress';

/* istanbul ignore next */
MProgress.install = function(Vue) {
  Vue.component(MProgress.name, MProgress);
};

export default MProgress;
