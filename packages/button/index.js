import MButton from './src/button';

/* istanbul ignore next */
MButton.install = function(Vue) {
  Vue.component(MButton.name, MButton);
};

export default MButton;
