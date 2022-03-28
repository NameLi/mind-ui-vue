export const preventScroll = function (prevent = true) {
  if (prevent) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}