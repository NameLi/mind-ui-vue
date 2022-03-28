import MTimelineItem from './src/timeline-item';

/* istanbul ignore next */
MTimelineItem.install = function(Vue) {
  Vue.component(MTimelineItem.name, MTimelineItem);
};

export default MTimelineItem;
