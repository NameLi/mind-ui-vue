import MStickyItem from './src/sticky-item';

MStickyItem.install = function (Vue) {
  Vue.component(MStickyItem.name, MStickyItem);
};

export default MStickyItem;
