import MNoticeBar from './src/notice-bar';

MNoticeBar.install = function (Vue) {
  Vue.component(MNoticeBar.name, MNoticeBar);
};

export default MNoticeBar;
