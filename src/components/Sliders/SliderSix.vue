<template>
  <swiper
    :pagination="{
      type: 'fraction',
    }"
    @slideChange="getPaginationValues()"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
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
import { Pagination, Navigation } from "swiper/modules";

export default {
  mounted() {
    this.getPaginationValues();
    const fractionPagination = document.querySelector(".swiper-pagination-fraction");
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    if (fractionPagination) {
      fractionPagination.style.color = "white";
      prevButton.style.color = "white";
      nextButton.style.color = "white";
    }
  },
  methods: {
    getPaginationValues() {
      const currentVideo = document.querySelector(".swiper-pagination-current");
      const totalVideo = document.querySelector(".swiper-pagination-total");
      if (currentVideo && totalVideo) {
        const currentVideoValue = currentVideo.textContent;
        const totalVideoValue = totalVideo.textContent;
        console.log("Total Video Value:", currentVideoValue-1);
      }
    },
  },
  name: "SliderSix",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
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
  background: green;
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
