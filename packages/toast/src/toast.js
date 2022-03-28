import Vue from "vue";

import toastComponent from "./toast.vue";

const ToastConstructor = Vue.extend(toastComponent);

let instance = null;
let timer = null;

const defaults = {
  visible: false,
  type: "",
  icon: "",
  image: "",
  duration: 2000,
  position: "middle",
  ghost: true,
  zIndex: 2001,
  mask: false,
};

const Toast = (options = {}) => {
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }

  if (options.type === "loading") {
    options.mask = true;
  }

  options = Object.assign({}, defaults, options);

  if (!instance) {
    instance = new ToastConstructor({
      el: document.createElement("div"),
      data: options,
    });
  } else {
    instance = Object.assign(instance, defaults, options);
    // instance.visible = true;
  }

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
    clearTimeout(timer);

    if (options.duration > 0) {
      timer = setTimeout(() => {
        instance.visible = false;
      }, options.duration);
    }
  });

  return instance;
};

function _show(options = {}) {
  const message = typeof options === "string" ? options : options.message;

  const mask = options.type === "loading" ? true : options.mask;

  const {
    type = "",
    icon = "",
    image = "",
    duration = 2000,
    position = "middle",
    ghost = true,
    zIndex = 2001,
  } = options;

  if (!instance) {
    instance = new ToastConstructor({
      el: document.createElement("div"),

      data() {
        return {
          message,
          type,
          icon,
          image,
          mask,
          ghost,
          position,
          visible: true,
          zIndex,
        };
      },
    });
  } else {
    instance.message = message;
    instance.type = type;
    instance.icon = icon;
    instance.image = image;
    instance.mask = mask;
    instance.ghost = ghost;
    instance.position = position;
    instance.visible = true;
    instance.zIndex = zIndex;
  }

  document.body.appendChild(instance.$el);

  clearTimeout(timer);
  if (duration > 0) {
    timer = setTimeout(() => {
      instance.visible = false;
    }, duration);
  }

  return instance;
}

let removeDom = (event) => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function() {
  this.visible = false;
  // this.$el.addEventListener('transitionend', removeDom);
  // this.closed = true;
};

// 全局注册
// function Toast() {
//   Vue.prototype.$toast = _show
// }

export default Toast;
