import MSlider from './src/slider';

/* istanbul ignore next */
MSlider.install = function(Vue) {
  Vue.component(MSlider.name, MSlider);
};

export default MSlider;
