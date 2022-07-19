import MTimeline from "./src/timeline";

MTimeline.install = function (Vue) {
  Vue.component(MTimeline.name, MTimeline);
};

export default MTimeline;
