import MSticky from './src/sticky';

/* istanbul ignore next */
MSticky.install = function(Vue) {
  Vue.component(MSticky.name, MSticky);
};

export default MSticky;
