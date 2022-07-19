import MBadge from './src/badge';


MBadge.install = function(Vue) {
  Vue.component(MBadge.name, MBadge);
};

export default MBadge;
