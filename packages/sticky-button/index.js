import MStickyButton from './src/sticky-button';

MStickyButton.install = function (Vue) {
  Vue.component(MStickyButton.name, MStickyButton);
};

export default MStickyButton;
