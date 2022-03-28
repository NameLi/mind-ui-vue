import MCellGroup from './src/cell-group';

/* istanbul ignore next */
MCellGroup.install = function(Vue) {
  Vue.component(MCellGroup.name, MCellGroup);
};

export default MCellGroup;
