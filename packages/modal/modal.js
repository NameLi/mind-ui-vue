import Vue from "vue";

import modalComponent from "./src/index.vue";

const ModalConstructor = Vue.extend(modalComponent);

let instance = null;

const defaults = {
  title: "",
  content: "",
  showConfirmButton: true,
  showCancelButton: true,
  confirmButtonText: "确定",
  confirmButtondisabled: false,
  cancelButtonText: "取消",
  confirmTextColor: "#409EFF",
  loading: false,
  asyncClose: false,
};

const Modal = (options = {}) => {
  options = Object.assign({}, defaults, options);

  return new Promise((resolve, reject) => {

    if (!instance) {
      instance = new ModalConstructor({
        el: document.createElement("div"),
        data: options,
      });
    } else {
      instance = Object.assign(instance, defaults, options);
    }

    instance.visible = true;

    instance._confirm = resolve;
    instance._cancel = reject;

    document.body.classList.add("m-overflow-hidden");

    document.body.appendChild(instance.$el);
  });
};

Modal.alert = (options) =>
  Modal(
    Object.assign(
      {
        showCancelButton: false,
      },
      options
    )
  );

Modal.confirm = (options) =>
  Modal(
    Object.assign(
      options
    )
  );

Modal.close = function () {
  if (!instance) return;

  instance.visible = false;
};

export default Modal;
