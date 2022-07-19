<template>
  <page class="demo-page__swiper" title="轮播图 Swiper">
    <div style="height: 30px"></div>

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in swiperList"
        :key="item.id"
      >
        <div
          class="slide-image"
          :class="{ 'is-actived': index == currentDot }"
          :style="'background-color: ' + item.bgcolor"
        ></div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </page>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  name: "demo-swiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentDot: 0,
      swiperList: [
        {
          id: 0,
          bgcolor: "#FF6A7E",
        },
        {
          id: 1,
          bgcolor: "#57C6FF",
        },
        {
          id: 2,
          bgcolor: "#FFAF48",
        },
        {
          id: 3,
          bgcolor: "#FF7E5F",
        },
        {
          id: 4,
          bgcolor: "#48E3C5",
        },
      ],
      swiperOption: {
        direction: "horizontal",
        loop: true,
        autoplay: false,
        speed: 300,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang="scss">
.demo-page__swiper {
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    bottom: 0;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }

  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }

  .swiper-pagination-bullet {
    background: #fff;
    display: inline-block;
    margin: 0 4px;
    width: 30px;
    height: 6px;
    border-radius: 6px;
  }
  .swiper-pagination-bullet-active {
    background: #00cda2;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }

  .swiper-slide {
    height: 380px;
    text-align: center;
    font-size: 18px; /*no*/
    background: #fff;
    width: 650px;
    transition: transform 0.5s;
    transform: scale(0.92);
    .slide-image {
      height: 380px;
      border-radius: 8px;
    }
  }

  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    transform: scale(1);
  }
}
</style>
