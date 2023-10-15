<template>
  <div class="container-fluid main-container">
    <div class="container-fluid slider-container">
      <HomeSlider :Movies="Movies" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from "@/components/Sliders/SliderThree.vue";
import MovieService from "@/services/MovieService.js";
import Helper from "@/assets/Js/Helper";
export default {
  name: "HomeView",
  data() {
    return {
      Movies:[],
    };
  },
  components: {
    HomeSlider
  },
  async created() {
    this.getTrendingMovies();
  },
  methods: {
    formatDate(date) {
      return Helper.formatDate(date).toString();
    },
    async getTrendingMovies() {
      try {
        var trendingMovies = await MovieService.getTrendingMovies();
        this.Movies = trendingMovies.results.map((x) => {
          return {
            Id: x.id,
            Title: x.title,
            FilePath: this.$store.state.BaseUrls.Original+ x.backdrop_path,
            ReleaseDate: this.formatDate(x.release_date),
            VoteAverage: parseFloat(x.vote_average).toFixed(1),
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import "@/assets/css/app-global.css";
.main-container {
  background-color: black;
  min-height: 95vh;
  margin :0;
  padding: 0;
}
.slider-container {
  margin :0;
  padding: 2% 0 0 0;
  height: 50vh;
  background-color: rgb(100, 100, 100);
  transition: background-color 1s ease-in-out;
}
.slider-container:hover {
  background-color:#bba110;
}
</style>
