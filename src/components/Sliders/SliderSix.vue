<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    @slideChange="getPaginationValues()"
    :navigation="true"
    :modules="modules"
    :effect="'fade'"
    class="mySwiper"
  >
    <swiper-slide v-for="(link, index) in LinkArray" :key="index">
      <iframe
        :src="`https://www.youtube.com/embed/${link.YoutubeKey}?rel=0&showinfo=0&autoplay=0`"
        allowfullscreen
        allowtransparency
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, EffectFade } from "swiper/modules";

export default {
  mounted() {
    this.getPaginationValues();
    let fractionPagination = document.querySelector(
      ".swiper-pagination-fraction"
    );
    let prevButton = document.querySelector(".swiper-button-prev");
    let nextButton = document.querySelector(".swiper-button-next");
    if (fractionPagination) {
      fractionPagination.style.color = "white";
      prevButton.style.color = "white";
      nextButton.style.color = "white";
    }
  },
  methods: {
    getPaginationValues() {
      let currentVideo = document.querySelector(".swiper-pagination-current");
      // const totalVideo = document.querySelector(".swiper-pagination-total");
      if (currentVideo) {
        let currentVideoValue = parseInt(currentVideo.textContent, 10);
        this.$emit('current-video',currentVideoValue);
      }
    },
  },
  name: "SliderSix",
  props: {
    LinkArray: {
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
      modules: [Pagination, Navigation, EffectFade],
    };
  },
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: black;
  border: 1px gray solid;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2%;
}
</style>
