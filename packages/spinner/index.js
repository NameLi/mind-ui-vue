import MSpinner from './src/spinner';

/* istanbul ignore next */
MSpinner.install = function(Vue) {
  Vue.component(MSpinner.name, MSpinner);
};

export default MSpinner;
