import MProgress from './src/progress';

MProgress.install = function (Vue) {
  Vue.component(MProgress.name, MProgress);
};

export default MProgress;
