import MSwipeout from './src/swipeout';

/* istanbul ignore next */
MSwipeout.install = function(Vue) {
  Vue.component(MSwipeout.name, MSwipeout);
};

export default MSwipeout;
