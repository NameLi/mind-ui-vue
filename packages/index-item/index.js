import MIndexItem from './src/index-item';

/* istanbul ignore next */
MIndexItem.install = function(Vue) {
  Vue.component(MIndexItem.name, MIndexItem);
};

export default MIndexItem;