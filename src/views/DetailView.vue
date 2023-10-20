<template>
  <div class="detail-container container-fluid">
    <div class="row row-1">
      <SliderOne :photoArray="detailPhotos" />
    </div>
    <h2>Detail Page</h2>
    <p>Film ID: {{ MovieId }}</p>
    <div class="row row-2"></div>
  </div>
</template>

<script>
import SliderOne from "@/components/Sliders/SliderOne.vue";
import MovieService from "@/services/movie/MovieService.js";
export default {
  name: "DetailView",
  components: {
    SliderOne,
  },
  data() {
    return {
      MovieId: null,
      detailPhotos: [],
    };
  },
  computed: {
    detailPhotos() {
      return this.$store.getters["Movie/getMovieDetailPhotos"];
    },
  },
  beforeUnmount() {
    // console.log("Ok Unmounting");
    // this.$store.commit("Movie/setEmpty");
  },
  beforeRouteLeave() {
    // console.log("Ok leaving");
    // this.$store.commit("Movie/setEmpty");
  },
  created() {
    this.MovieId = this.$route.params.id;
    this.$store.dispatch("Movie/fetchMovieDetailPhotos", this.MovieId);
  },
  methods: {},
};
</script>
<style scoped>
.detail-container {
  min-height: 95vh;
  background-color: brown;
}

.row-1 {
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  min-height: 5vh;
  background-color: black;
}

.row-2 {
  background-color: yellow;
}
</style>
