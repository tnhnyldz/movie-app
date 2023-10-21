<template>
  <div class="container-fluid main-container">
    <div class="container-fluid slider-container">
      <SliderTwo :photoArray="SliderMovies" />
    </div>
    <div class="container nowplaying-container">
      <div class="row">
        <div
          class="col col-9 col-movie d-flex flex-wrap flex-row justify-content-around"
        >
          <CardLarge v-for="movie in Movies" :key="movie.Id" :Movie="movie" />
        </div>
        <div class="col col-3">
          <div class="div-more-to-explore">
            <p class="more-to-explore-text roboto text-white">
              More to explore
            </p>
            <ul class="list-explore">
              <li class="explore-list-item">
                <router-link to="/popular" class="explore-link"
                  >Popular Movies
                </router-link>
                <i class="icon-yellow fa fa-angle-right"></i>
              </li>
              <li class="explore-list-item">
                <router-link to="/popular" class="explore-link"
                  >Top Rated Movies </router-link
                ><i class="icon-yellow fa fa-angle-right"></i>
              </li>
              <li class="explore-list-item">
                <router-link to="/popular" class="explore-link"
                  >Upcoming Movies </router-link
                ><i class="icon-yellow fa fa-angle-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row-2">
        <div
          class="col col-9 d-flex flex-wrap flex-row justify-content-around pb-4"
        >
          <button @click="loadMoreMovies()" class="btn btn-warning">
            Load more movies
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <i class="icon-yellow fa fa-angle-right"></i> -->
<script>
import SliderTwo from "@/components/Sliders/SliderTwo.vue";
import CardLarge from "@/components/CardLarge.vue";
export default {
  name: "NowPlayingMoviesView",
  props: {
    InformationArray: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      SliderMovies: [],
      Movies: [],
      counter: 1,
    };
  },
  components: {
    CardLarge,
    SliderTwo,
  },
  created() {
    this.$store
      .dispatch("Movie/fetchNowPlayingMovies", {
        language: "en-US",
        page: this.counter, //passing the page value as 1
      })
      .then(() => {
        this.Movies = this.$store.getters["Movie/getNowPlayingMovies"];
      })
      .then(() => {
        this.SliderMovies =
          this.$store.getters["Movie/getNowPlayingSliderPhotos"];
      });
  },
  methods: {
    loadMoreMovies() {
      this.counter++;
      this.$store
        .dispatch("Movie/fetchNowPlayingMovies", {
          language: "en-US",
          page: this.counter, //increase value and add
        })
        .then(() => {
          //alternative way
          // var moreMovies = this.$store.getters["Movie/getNowPlayingMovies"];
          // this.Movies.push(...moreMovies);
          var moreMovies = this.$store.getters["Movie/getNowPlayingMovies"];
          this.Movies = this.Movies.concat(moreMovies);
        });
    },
  },
};
</script>
<style scoped>
@import "@/assets/css/app-global.css";
.main-container {
  background-color: black;
  min-height: 95vh;
  padding-left: 0;
  padding-right: 0;
}

.nowplaying-container {
  background-color: black;
}
.list-explore {
  padding-left: 0;
  list-style-type: none;
}
.explore-list-item {
  padding-left: 5%;
}
.col-movie {
  padding-top: 1%;
  background-color: black;
}

.col-3 {
  background-color: black;
}
.explore-link {
  text-decoration: none;
  font-size: 20px;
  color: white;
}
.slider-container {
  margin-left: 0;
  padding-top: 1%;
  padding-bottom: 1%;
  height: 55vh;
  background-color: rgb(100, 100, 100);
  /* background-color: black; */
  transition: background-color 1s ease-in-out;
}
.slider-container:hover {
  background-color: #bba110;
}
.more-to-explore-text {
  font-size: 30px;
}
.div-more-to-explore {
  text-align: left;
}
</style>
