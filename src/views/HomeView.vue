<template>
  <div class="container-fluid main-container">
    <div class="container-fluid slider-container">
      <SliderThree :Movies="Movies" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SliderThree from "@/components/Sliders/SliderThree.vue";
export default {
  name: "HomeView",
  data() {
    return {
      Movies: [],
    };
  },
  components: {
    SliderThree,
  },
  async created() {
    this.$store.dispatch("Movie/fetchTrendingMovies").then(() => {
      this.Movies = this.$store.getters["Movie/getTrendingMovies"];
    });
  },
  methods: {},
};
</script>
<style scoped>
@import "@/assets/css/app-global.css";
.main-container {
  background-color: black;
  min-height: 95vh;
  margin: 0;
  padding: 0;
}
.slider-container {
  margin: 0;
  padding: 2% 0 0 0;
  height: 50vh;
  background-color: rgb(100, 100, 100);
  transition: background-color 1s ease-in-out;
}
.slider-container:hover {
  background-color: #bba110;
}
</style>
