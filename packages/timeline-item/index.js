import MTimelineItem from './src/timeline-item';

MTimelineItem.install = function (Vue) {
  Vue.component(MTimelineItem.name, MTimelineItem);
};

export default MTimelineItem;
