import MCell from './src/cell';


MCell.install = function(Vue) {
  Vue.component(MCell.name, MCell);
};

export default MCell;