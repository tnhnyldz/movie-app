<template>
  <swiper
    :effect="'coverflow'"
    :autoplay="{
      delay: 1800,
      disableOnInteraction: false,
    }"
    :centeredSlides="true"
    :slidesPerView="3"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-3.jpg"
    /></swiper-slide>
    <swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { Autoplay,EffectCoverflow } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,EffectCoverflow],
    };
  },
};
</script>
<style></style>
