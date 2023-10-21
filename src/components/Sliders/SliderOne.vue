<template>
  <swiper
    :spaceBetween="0"
    :slidesPerView="2"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    :speed="1000"
    class="mySwiper"
  >
    <swiper-slide v-for="(photo, index) in photoArray">
      <img :src="photo.FilePath" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "SliderOne",
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
  width: 47vw;
  object-fit: cover;
}
</style>
