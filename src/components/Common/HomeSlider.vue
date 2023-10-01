<template>
  <div class="container-slider">
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
      <swiper-slide v-for="movie in this.movies" :key="movie.Id">
        <img :src="photoBaseUrl + movie.BackDropPath" />
        <div class="title" data-swiper-parallax="-300">{{ movie.Title }}</div>
        <p class="subtitle" data-swiper-parallax="-300">
          <i class="fas fa-star" style="color: #ffd700"></i>
          {{ movie.VoteAverage }}
        </p>
        <p class="date" data-swiper-parallax="-300">
          <i class="far fa-calendar-alt" style="color: #df7bfe"></i>
          {{ formatDate(movie.ReleaseDate) }}
        </p>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import BaseService from "@/services/BaseService.js";
import Helper from "@/assets/Js/Helper";
// Import Swiper Vue.js componentszs
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
export default {
  name: "HomeSlider",
  data() {
    return {
      photoBaseUrl: "https://image.tmdb.org/t/p/original/",
      movies: [],
    };
  },
  methods: {
    formatDate(date) {
      return Helper.formatDate(date).toString();
    },
    async getTrendingMovies() {
      try {
        var trendingMovies = await BaseService.getTrendingMovies();
        this.movies = trendingMovies.results.map((x) => {
          return {
            Id: x.id,
            Title: x.title,
            BackDropPath: x.backdrop_path,
            ReleaseDate: x.release_date,
            VoteAverage: parseFloat(x.vote_average).toFixed(1),
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.getTrendingMovies();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    Film: Object,
  },
  setup() {
    return {
      modules: [Autoplay, EffectCoverflow],
    };
  },
};
</script>
<style scoped>
.container-slider {
  background-color: black;
  padding-top: 3%;
  padding-bottom: 3%;
}
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
  top: 13%;
  padding-left: 10%;
}
.date {
  top: 21%;
  padding-left: 10%;
}
</style>
