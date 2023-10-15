<template>
    <swiper
      :effect="'coverflow'"
      :autoplay="{
        delay: 1200,
        disableOnInteraction: false,
      }"
      :centeredSlides="true"
      :slidesPerView="3"
      :loop="true"
      :coverflowEffect="{
        rotate: 10,
        stretch: 5,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      }"
      :modules="modules"
      :speed="1800"
      class="mySwiper"
    >
      <swiper-slide v-for="movie in Movies" :key="movie.Id">
        <img :src="movie.FilePath" />
        <div class="title" data-swiper-parallax="-300">{{ movie.Title }}</div>
        <p class="subtitle" data-swiper-parallax="-300">
          <i class="fas fa-star" style="color: #ffd700"></i>
          {{ movie.VoteAverage }}
        </p>
        <p class="date" data-swiper-parallax="-300">
          <i class="far fa-calendar-alt" style="color: #df7bfe"></i>
          {{ movie.ReleaseDate }}
        </p>
      </swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js componentszs
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
export default {
  name: "SliderThree",
  props: {
    Movies: {
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
      modules: [Autoplay, EffectCoverflow],
    };
  },
};
</script>
<style scoped>
img {
  width: 60vh;
  height: 40vh;
  border-radius: 10px;
}

.title {
  font-size: 28px;
  color: white;
  font-style: normal;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: absolute;
  width: 100%;
  text-align: left;
  z-index: 1;
}
.subtitle,
.date {
  font-size: 18px;
  color: white;
  font-style: normal;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: absolute;
  width: 100%;
  text-align: left;
  z-index: 1;
}

.title {
  top: 5%;
  padding-left: 10%;
}
.subtitle {
  top: 14%;
  padding-left: 10%;
}
.date {
  top: 21%;
  padding-left: 10.5%;
}
</style>
