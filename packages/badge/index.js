import MBadge from './src/badge';

/* istanbul ignore next */
MBadge.install = function(Vue) {
  Vue.component(MBadge.name, MBadge);
};

export default MBadge;
