import MStickyButton from './src/sticky-button';

/* istanbul ignore next */
MStickyButton.install = function(Vue) {
  Vue.component(MStickyButton.name, MStickyButton);
};

export default MStickyButton;
