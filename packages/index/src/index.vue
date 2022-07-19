<template>
  <div
    class="m-index"
    ref="wrap"
    :style="'height: ' + wrapH"
    @scroll="onScroll"
  >
    <div class="m-index__container">
      <!-- 索引内容 -->
      <slot />

      <!-- 右侧索引 -->
      <div
        class="m-index-fixed"
        ref="indexFixed"
        @touchstart="onTouchMove"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
        <div
          class="m-index-fixed__item"
          :class="{ 'is-active': currentName === item }"
          v-for="(item, index) in indexData"
          :key="index"
          @click="onClick(index)"
        >
          {{ item }}
        </div>
      </div>

      <div
        class="m-index-tooltip"
        :style="isTouches ? 'display:block' : 'display:none'"
      >
        {{ currentName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "m-index",
  props: {
    height: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      wrapDom: "",
      wrapOffsetTop: 0,
      wrapH: "",
      timer: null,
      scrollTop: 0, // 滚动距离
      indexData: [], // 索引数据
      startTop: 0, // 索引距离顶部距离
      indexHeight: 0, // 索引每格高度
      currentIndex: 0, // 当前项索引
      currentName: "", // 当前项名称
      children: [], // 当前所有子组件集合
      childLength: 0, // 子组件个数
      isTouches: false,
    };
  },

  watch: {
    scrollTop(val) {
      if (this.wrapDom) {
        this.wrapDom.scrollTop = val - this.wrapOffsetTop;
      }
    },
  },

  mounted() {
    this.wrapDom = this.$refs.wrap;
    this.wrapOffsetTop = this.wrapDom.offsetTop;

    if (this.height) {
      this.wrapH = this.height;
    } else {
      this.wrapH = `calc(100vh - ${this.wrapOffsetTop}px)`;
    }
  },

  methods: {
    _updateChildren() {
      // 防抖减少重复触发
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        const children = this.$slots.default.map((item) => {
          return item.child;
        });

        this.children = children;

        const len = children.length;

        this.childLength = len;

        if (len > 0) {
          let indexData = [];

          children.forEach((child, index) => {
            if (child.name && indexData.indexOf(child.name) === -1) {
              indexData.push(child.name);
              child.updateDataChange();
            }
          });

          this.indexData = indexData;

          //组件加载完成之后重新设置顶部高度
          this.$nextTick(() => {
            this.setTouchStartVal();
          });
        }
      }, 0);
    },

    // 滚动
    onScroll({ target }) {
      if (this.isTouches) return;

      const scrollTop = target.scrollTop;

      this.children.forEach((child, index) => {
        this.currentIndex = index;

        let { top, height, currentName } = child;

        let offset = top + height;

        if (scrollTop < offset && scrollTop >= top) {
          this.currentName = currentName;
        }
      });
    },

    triggerCallback(options) {
      this.$emit("change", options);
    },

    onClick(index) {
      const currentChild = this.children[index]; // 当前选中的 child

      this.scrollTop = currentChild.top;
      this.currentName = currentChild.currentName;
      this.isTouches = true;

      this.triggerCallback({
        index,
        current: currentChild.currentName,
      });

      setTimeout(() => {
        this.isTouches = false;
      }, 500);
    },

    //
    onTouchMove(ev) {
      ev.preventDefault(); // 阻止页面滚动

      const touch = ev.touches[0] || {};
      const pageY = touch.clientY;

      let index = Math.floor((pageY - this.startTop) / this.indexHeight);

      if (index < 0 || index >= this.childLength) return;

      let { name, top } = this.children[index];

      if (this.currentName === name) return;

      this.scrollTop = top;
      this.currentName = name;

      this.isTouches = true;

      this.triggerCallback({
        index: index,
        current: name,
      });
    },

    //
    onTouchEnd(ev) {
      setTimeout(() => {
        this.isTouches = false;
      }, 100);
    },

    // 索引起始位置
    setTouchStartVal() {
      const dom = this.$refs.indexFixed;

      this.indexHeight = dom.offsetHeight / this.childLength;
      this.startTop = dom.offsetTop - dom.offsetHeight / 2;
    },
  },
};
</script>

<style lang="scss">
.m-index {
  width: 100%;
  height: 80vh;
  overflow: auto;

  .m-index-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px; /*no*/
    background-color: #f7f7f7;
    top: 50%;
  }

  .m-index-content {
    background: #fff;
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0 20px;
  }

  .m-index-fixed {
    z-index: 1;
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 10;
    padding-left: 10px;
    transform: translateY(-50%);
    user-select: none;
  }

  .m-index-fixed__item {
    display: block;
    height: 36px;
    min-width: 40px;
    line-height: 36px;
    text-align: center;
    color: #777;
    font-size: 24px;
    &.is-active {
      color: $color-primary;
    }
  }

  .m-index-tooltip {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 48px;
    border-radius: 6px;
    width: 160px;
    height: 160px;
    line-height: 160px;
    text-align: center;
  }
}
</style>
