import MCell from './src/cell';

/* istanbul ignore next */
MCell.install = function(Vue) {
  Vue.component(MCell.name, MCell);
};

export default MCell;