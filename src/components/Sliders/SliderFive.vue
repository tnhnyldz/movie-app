<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(cast, index) in castArray.slice(0, 15)">
      <div class="card">
        <img :src="cast.Photo" class="card-img-top" />
        <div class="card-body bg-dark">
          <p class="roboto card-title text-white text-start field-1">
            {{ cast.Name }}
          </p>
          <p class="roboto card-text text-start text-white field-2">
            {{ cast.Character }}
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "@/assets/css/app-global.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  name: "SliderOne",
  props: {
    castArray: {
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
      modules: [Pagination],
    };
  },
};
</script>
<style scoped>
.field-1 {
  margin: 1% 0 0 1%;
  font-size: 14px;
  font-weight: bold;
}
.field-2 {
  margin: 0 0 0 1%;
  font-size: 13px;
  padding-bottom: 15%;
}
.swiper {
  width: 100%;
}
.card {
  border-radius: 0 !important;
}
.swiper-slide {
  border: 0px !important;
  margin: 0 2% 0 0 !important;
  text-align: center;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20% !important;
}
.card-body {
  padding: 2% 0 2% 5%;
}
.card img {
  border-radius: 0;
}
.swiper {
  width: 100%;
}
</style>
