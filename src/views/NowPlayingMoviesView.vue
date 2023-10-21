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
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1626%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1627%26quot%3b)'%3e%3c/rect%3e%3cpath d='M1440 0L945.65 0L1440 41.13z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M945.65 0L1440 41.13L1440 50.2L670.5899999999999 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M670.5899999999999 0L1440 50.2L1440 112.99000000000001L357.7199999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M357.7199999999998 0L1440 112.99000000000001L1440 219.89000000000001L177.3499999999998 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 560L719.82 560L0 409.27z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 409.27L719.82 560L796.11 560L0 249.33999999999997z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 249.34000000000003L796.11 560L1011.48 560L0 165.18000000000004z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 165.18000000000006L1011.48 560L1057.41 560L0 162.48000000000008z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1626'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='50%25' y1='100%25' x2='50%25' y2='0%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1627'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.06'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"); */
  background-size: cover; 
  background-position: center top; 
  background-repeat: no-repeat; 
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2894%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient2895%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L330.29 0L0 227.38z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 227.38L330.29 0L761.26 0L0 411.15z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 411.15L761.26 0L1102.57 0L0 444.65z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 444.65L1102.57 0L1115.24 0L0 483z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L865.74 560L1440 401.15999999999997z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 401.15999999999997L865.74 560L678.84 560L1440 267.14z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 267.14L678.84 560L642.99 560L1440 110.48999999999998z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 110.49000000000001L642.99 560L504.48 560L1440 44.750000000000014z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2894'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='139.29%25' x2='15.28%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2895'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.41'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
}
.more-to-explore-text {
  font-size: 30px;
}
.div-more-to-explore {
  text-align: left;
}
</style>
