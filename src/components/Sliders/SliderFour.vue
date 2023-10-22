<template>
  <swiper
    :effect="'fade'"
    :grabCursor="true"
    :modules="modules"
    :speed="750"
    class="mySwiper"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="(photo, index) in photoArray">
      <img :src="photo.FilePath" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "SliderFour",
  props: {
    photoArray: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay],
    };
  },
};
</script>
<style scoped>
.swiper-slide img {
  width: 100%;
}
</style>
