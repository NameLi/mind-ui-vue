import MGrid from './src/grid';

/* istanbul ignore next */
MGrid.install = function(Vue) {
  Vue.component(MGrid.name, MGrid);
};

export default MGrid;
