import MModal from "./src/modal.vue";

MModal.install = function (Vue) {
  Vue.component(MModal.name, MModal);
};

export default MModal;
