import MModal from "./src/modal.vue";

/* istanbul ignore next */
MModal.install = function(Vue) {
  Vue.component(MModal.name, MModal);
};

export default MModal;
