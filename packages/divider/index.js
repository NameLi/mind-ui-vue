import MDivider from './src/divider';

/* istanbul ignore next */
MDivider.install = function(Vue) {
  Vue.component(MDivider.name, MDivider);
};

export default MDivider;
