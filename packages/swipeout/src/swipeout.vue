<template>
  <div class="m-swipeout">
    <div
      class="m-swipeout__content"
      :style="getStyle"
      ref="swipeout"
      @mousedown="onButtonDown"
      @touchstart="onButtonDown"
    >
      <slot />
    </div>

    <div
      class="m-swipeout__button-group"
      :style="buttonStyle"
      ref="swipeout_button"
    >
      <slot name="button" />
    </div>
  </div>
</template>

<script>
let Instances = [];

export default {
  name: "m-swipeout",
  data() {
    return {
      btnWidth: 0,
      preventTouch: false,
      isMoving: false,
      touchStart: {}, // 记录滑动起始位置，模拟tap使用
      startX: 0, // 滑动起始pageX
      offset: 0, // 移动距离
      bounceTime: 0.5, // 回弹动画默认时长，单位秒
      getStyle: "", // 设置滑动位置的样式
      btnGroupWidth: 0,
      buttonStyle: "",
    };
  },

  mounted() {
    this.btnGroupWidth = this.$refs.swipeout_button.offsetWidth;

    Instances.push(this);
  },

  methods: {
    onButtonDown(ev) {
      ev.preventDefault();
      this.onTouchStart(ev);
      window.addEventListener("mousemove", this.onTouchMove);
      window.addEventListener("touchmove", this.onTouchMove);
      window.addEventListener("mouseup", this.onDragEnd);
      window.addEventListener("touchend", this.onDragEnd);
      window.addEventListener("contextmenu", this.onDragEnd);
    },

    onDragEnd(ev) {
      if (this.isMoving) {
        window.removeEventListener("mousemove", this.onTouchMove);
        window.removeEventListener("touchmove", this.onTouchMove);
        window.removeEventListener("mouseup", this.onDragEnd);
        window.removeEventListener("touchend", this.onDragEnd);
        window.removeEventListener("contextmenu", this.onDragEnd);

        this.handleTouchend(ev);
      }
    },

    // 开启滑动菜单
    _openSwipe(sec = this.bounceTime) {
      this.swipeMove(-this.btnWidth, sec);
      this.$emit("onSwipeEnd", true);
    },

    // 关闭滑动菜单
    _closeSwipe(sec = this.bounceTime) {
      this.swipeMove(0, sec);
      this.$emit("onSwipeEnd", false);
    },

    close() {
      this._closeSwipe(0);
    },

    // 设置滑块位置
    swipeMove(offset = 0, sec = 0) {
      this.offset = offset;
      this.sec = sec;

      const transform = `transform: translate3d(${offset}px, 0, 0);`;
      const transition = this.isMoving
        ? ""
        : `transition: ${sec}s cubic-bezier(0.18, 0.89, 0.32, 1);`;

      const getStyle = transform + transition;

      this.buttonStyle =
        transition +
        `transform: translate3d(${this.btnGroupWidth + this.offset}px, 0, 0);`;

      this.getStyle = getStyle;
    },

    touchEndSwipe(sec, ratio = 0.4) {
      const offset = this.offset;
      const limitDis = this.btnWidth;

      if (Math.abs(offset) > limitDis * ratio) {
        this._openSwipe(sec);

        this.$emit("change", this);
        this.$emit("open", this);
      } else {
        this._closeSwipe(sec);
        this.$emit("close", this);
      }
    },

    // 拖动起始
    onTouchStart(ev) {
      if (!this.btnWidth) {
        this.btnWidth = this.$refs.swipeout_button.offsetWidth;
      }

      Instances.forEach((item) => {
        if (item._uid !== this._uid) {
          if (item.offset !== 0) {
            item._closeSwipe();
            this.preventTouch = true;
            return;
          }
          item._closeSwipe();
        }
      });

      // 如果其它组件有打开，则阻止滑动
      if (this.isOpen && this.offset === 0) {
        this.preventTouch = true;
        this.$emit("swipeStart");
        return;
      }

      this.isMoving = true;
      this.startOffset = this.offset;
      const touch = ev.touches ? ev.touches[0] : ev;
      if (!touch.timeStamp) {
        touch.timeStamp = new Date().getTime();
      }
      this.touchStart = touch; // 记录起始点击信息，模拟点击事件
      this.startX = touch.pageX;
    },

    // 拖动
    onTouchMove(ev) {
      if (this.preventTouch) return; // 如果其它组件有打开，则阻止滑动

      const touch = ev.touches ? ev.touches[0] : ev;
      const direction = this.startX > touch.pageX ? "left" : "right";

      const moveDis = touch.pageX - this.startX;
      const offset = this.startOffset + moveDis;

      // 解决滑动不彻底导致位置瑕疵，
      // 例如：向右关闭滑动过快，offset 已超出范围，但实际未到达边缘时，重置位置
      if (direction === "right" && offset > 0 && this.offset !== 0) {
        this._closeSwipe();
      } else if (
        direction === "left" &&
        Math.abs(offset) > this.btnWidth &&
        offset !== -this.btnWidth
      ) {
        this._openSwipe();
      }

      // 已展开或关闭状态，向滑动时重写起始位置的pageX值，以便向滑动时能立即响应滑动效果
      if (
        (direction === "left" &&
          Math.abs(this.startOffset) === this.btnWidth) ||
        (direction === "right" && Math.abs(this.startOffset) === 0)
      ) {
        this.startX = touch.pageX;
        return;
      }

      // 向左滑动后又向右滑动，且超出范围时重写起始位置值，以便再向左滑动时能立即响应
      if (direction === "left" && offset >= 0) {
        this.startX = touch.pageX;
        return;
      }

      if (offset > 0 || Math.abs(offset) > this.btnWidth) return;

      this.swipeMove(offset);
    },

    // 拖动结束
    handleTouchend(ev) {
      // 如果其它组件有打开，则阻止滑动
      if (this.preventTouch) {
        this.preventTouch = false;
        return;
      }

      this.isMoving = false;

      const touch = ev.touches ? ev.touches[0] || ev.changedTouches[0] : ev;
      if (!touch.timeStamp) {
        touch.timeStamp = new Date().getTime();
      }

      const direction = this.startX > touch.pageX ? "left" : "right";

      // 模拟点击事件
      // 1.touchstart 时间与 touchend 时间间隔小于 200ms；
      // 2.touchstart 位置与 touchend 相较不大于 5px；
      // 如果为模拟点击事件且滑动关闭状态，向父组件传递 click 事件
      const touchStart = this.touchStart;

      const absX = Math.abs(touchStart.pageX - touch.pageX);
      const absY = Math.abs(touchStart.pageY - touch.pageY);
      const stamp = Math.abs(touch.timeStamp - touchStart.timeStamp);

      if (absX < 10 && absY < 10 && stamp <= 300) {
        if (this.offset === 0) {
          this.$emit("click");
          this._closeSwipe(0);
        } else {
          this._closeSwipe();
        }
        return;
      }

      // 设置回弹动画时长
      const bounceTime = this.bounceTime; // 回弹动画默认时长
      let moveDistance = Math.abs(touch.pageX - this.startX); //  移动距离
      let bounceSec = (moveDistance / this.btnWidth) * this.bounceTime; // 回弹动画时间，单位秒

      if (bounceSec > bounceTime / 2) bounceSec = bounceTime - bounceSec; // 时长过半则取反
      bounceSec = bounceSec.toFixed(2);

      const ratio = direction == "left" ? 0.4 : 0.6; // 划开时滑动过40%离开时就展开，关闭时右划超40%离开时关闭

      this.touchEndSwipe(bounceSec, ratio);
    },
  },
};
</script>

<style lang="scss">
.m-swipeout {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  font-size: 28px;
  overflow: hidden;

  .m-swipeout__content {
    white-space: nowrap;
    overflow: hidden;
  }

  .m-swipeout__button-group {
    z-index: 1;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    transform: translateX(100%);
    display: block;
  }

  .m-swipeout__button-item {
    height: 100%;
    float: left;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
