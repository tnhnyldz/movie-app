<template>
  <div class="container-fluid main-container">
    <div class="container-fluid slider-container">
      <SliderTwo :photoArray="SliderPhotos" />
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
      SliderPhotos: [],
      Movies: [],
      counter: 1,
      currentPage:0,
      totalPages:0,
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
        var nowPlayingMovieObject = this.$store.getters["Movie/getNowPlayingMovies"];
        this.Movies=nowPlayingMovieObject.NowPlayingMovies;
        this.SliderPhotos=nowPlayingMovieObject.SliderPhotos;
        this.totalPages=nowPlayingMovieObject.TotalPages;
        this.currentPage=nowPlayingMovieObject.CurrentPage;
      })
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
          this.Movies = this.Movies.concat(moreMovies.NowPlayingMovies);
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
  background-size: cover; 
  background-position: center center; 
  background-repeat: no-repeat; 
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2894%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient2895%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L330.29 0L0 227.38z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 227.38L330.29 0L761.26 0L0 411.15z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 411.15L761.26 0L1102.57 0L0 444.65z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 444.65L1102.57 0L1115.24 0L0 483z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L865.74 560L1440 401.15999999999997z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 401.15999999999997L865.74 560L678.84 560L1440 267.14z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 267.14L678.84 560L642.99 560L1440 110.48999999999998z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 110.49000000000001L642.99 560L504.48 560L1440 44.750000000000014z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2894'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='84.72%25' y1='139.29%25' x2='15.28%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2895'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.41'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='500' preserveAspectRatio='none' viewBox='0 0 1440 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1796%26quot%3b)' fill='none'%3e%3crect width='1440' height='500' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1797%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L467.68 0L0 37.51z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 37.51L467.68 0L764.22 0L0 245.88z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 245.88L764.22 0L1093.1100000000001 0L0 368.61z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 368.61L1093.1100000000001 0L1181.17 0L0 373.84000000000003z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 500L1130.58 500L1440 281.52z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 281.52L1130.58 500L598.8599999999999 500L1440 259.56z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 259.56L598.8599999999999 500L245.43999999999988 500L1440 124.42000000000002z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 124.42000000000002L245.43999999999983 500L191.67999999999984 500L1440 112.89000000000001z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1796'%3e%3crect width='1440' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='83.68%25' y1='147%25' x2='16.32%25' y2='-47%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1797'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.32'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='0.84'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
}
.more-to-explore-text {
  font-size: 30px;
}
.div-more-to-explore {
  text-align: left;
}
</style>
