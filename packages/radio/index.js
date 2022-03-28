import MRadio from './src/radio';

/* istanbul ignore next */
MRadio.install = function(Vue) {
  Vue.component(MRadio.name, MRadio);
};

export default MRadio;
