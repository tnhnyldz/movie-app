<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="10"
    :mousewheel="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    :speed="1000"
    class="mySwiper"
  >
    
  <swiper-slide v-for="(photo, index) in photoArray">
      <img :src="photo.BackDropPath" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "NowPlayingSlider",
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
      modules: [Mousewheel, Pagination, Autoplay],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 60%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
