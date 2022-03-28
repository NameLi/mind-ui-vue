import MTimeline from "./src/timeline";

/* istanbul ignore next */
MTimeline.install = function(Vue) {
  Vue.component(MTimeline.name, MTimeline);
};

export default MTimeline;
