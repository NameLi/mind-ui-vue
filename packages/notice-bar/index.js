import MNoticeBar from './src/notice-bar';

/* istanbul ignore next */
MNoticeBar.install = function(Vue) {
  Vue.component(MNoticeBar.name, MNoticeBar);
};

export default MNoticeBar;
