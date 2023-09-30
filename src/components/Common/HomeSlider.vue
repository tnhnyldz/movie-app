<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      ><img src="https://source.unsplash.com/kZokA2VTKn4" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://source.unsplash.com/kZokA2VTKn4" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://source.unsplash.com/kZokA2VTKn4" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://source.unsplash.com/kZokA2VTKn4" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://source.unsplash.com/kZokA2VTKn4" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="https://source.unsplash.com/kZokA2VTKn4" alt=""
    /></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
