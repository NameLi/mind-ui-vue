import MStickyItem from './src/sticky-item';

/* istanbul ignore next */
MStickyItem.install = function(Vue) {
  Vue.component(MStickyItem.name, MStickyItem);
};

export default MStickyItem;
