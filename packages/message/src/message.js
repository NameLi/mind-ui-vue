import Vue from "vue";

import messageComponent from "./message.vue";

const MessageConstructor = Vue.extend(messageComponent);

let instance = null;
let timer = null;

const defaults = {
  visible: false,
  duration: 2000,
  type: "primary",
  content: "",
  showClose: false,
  zIndex: 2001,
  offsetTop: 0,
};

const Message = (options = {}) => {
  if (typeof options === "string") {
    options = {
      content: options,
    };
  }

  options = Object.assign({}, defaults, options);

  if (!instance) {
    instance = new MessageConstructor({
      el: document.createElement("div"),
      data: options,
    });
  } else {
    instance = Object.assign(instance, defaults, options);
    instance.visible = true;
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

["success", "warning", "info", "danger"].forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === "string") {
      options = {
        content: options,
      };
    }
    options.type = type;
    return Message(options);
  };
});

MessageConstructor.prototype.close = function() {
  this.visible = false;
};

export default Message;
