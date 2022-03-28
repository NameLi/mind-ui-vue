import MTag from './src/tag';

/* istanbul ignore next */
MTag.install = function(Vue) {
  Vue.component(MTag.name, MTag);
};

export default MTag;
