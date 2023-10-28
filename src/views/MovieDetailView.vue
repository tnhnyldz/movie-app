<template>
  <div class="detail-container container-fluid">
    <div class="container-fluid container-1">
      <div class="row row-1">
        <SliderOne :photoArray="Backdrops" />
      </div>
    </div>
    <div class="container container-2">
      <div class="row">
        <div class="col col-md-12 row-col">
          <i class="fa fa-arrow-left" @click="goBack"></i>
        </div>
      </div>
      <div class="row row-2">
        <div class="col col-md-12 key-information-header">
          <p class="key-information roboto">Key Information</p>
        </div>
      </div>
    </div>
    <div class="container container-3">
      <div class="row row-3">
        <div class="col col-3 col-poster" v-if="Posters.length > 0">
          <SliderFour :photoArray="Posters" />
        </div>
        <div class="col col-9 col-details">
          <div class="col horizontal-row horizontal-row-1">
            <h1 class="roboto text-white">
              {{ Details.Title }} ({{ Details.Year }})
            </h1>
          </div>
          <div class="col horizontal-row horizontal-row-2">
            <div
              class="col-md-1 progress-bar-container"
              style="background-color: black"
            >
              <p class="user-score bg-secondary roboto text-white">
                User Score
              </p>
            </div>
            <div
              class="col-md-1 progress-bar-container"
              style="background-color: black"
            >
              <ProgressBar :BarValue="Details.VoteAverage" />
            </div>

            <div
              class="col-md-4 short-details-container"
              style="background-color: black"
            >
              <p class="movie-tagline roboto">"{{ Details.Tagline }}"</p>
              <p class="movie-infos roboto">
                <span class="badge more-info-badges text-bg-secondary roboto"
                  >{{ Details.Runtime }} minutes</span
                ><span class="badge text-bg-secondary roboto more-info-badges"
                  ><i class="fas fa-star" style="color: #ffd700"></i>
                  {{ Details.VoteStar }}</span
                ><span
                  class="badge text-bg-secondary roboto more-info-badges"
                  >{{ Details.ReleaseDate }}</span
                >
              </p>
            </div>
            <div class="col-md-6" style="background-color: black"></div>
          </div>
          <div class="col horizontal-row horizontal-row-3">
            <span class="roboto text-white overview">Overview</span>
            <span class="roboto text-white overview-text">{{
              Details.Overview
            }}</span>
          </div>
          <div class="col horizontal-row horizontal-row-4">
            <div class="col-md-4 tags-container">
              <ul class="list-group">
                <li
                  class="list-group-item text-start roboto text-white bg-dark"
                >
                  Revenue:
                  <span class="badge text-bg-secondary">{{
                    Details.Revenue
                  }}</span>
                </li>
                <li
                  class="list-group-item text-start roboto text-white bg-dark"
                >
                  Budget:
                  <span class="badge text-bg-secondary">{{
                    Details.Budget
                  }}</span>
                </li>
                <li
                  class="list-group-item text-start roboto text-white bg-dark"
                >
                  Language:
                  <span class="badge text-bg-secondary">{{
                    Details.OriginalLanguage
                  }}</span>
                </li>
                <li
                  class="list-group-item text-start roboto text-white bg-dark"
                >
                  Status:
                  <span class="badge text-bg-secondary">{{
                    Details.Status
                  }}</span>
                </li>
              </ul>
            </div>
            <div class="col-md-4">şsdklsd</div>
            <div class="col-md-4">şsdklsd</div>
            <!-- <p class="roboto text-white row-4-text">
              Revenue:
              <span class="badge text-bg-secondary">{{ Details.Revenue }}</span>
            </p>
            <p class="roboto text-white row-4-text">
              Budget:
              <span class="badge text-bg-secondary">{{ Details.Budget }}</span>
            </p>
            <p class="roboto text-white row-4-text">
              Status:
              <span class="badge text-bg-secondary">{{ Details.Status }}</span>
            </p>
            <p class="roboto text-white row-4-text">
              Original Language:
              <span class="badge text-bg-secondary">{{
                Details.OriginalLanguage
              }}</span>
            </p>
            <p class="roboto text-white row-4-text">
              Popularity:
              <span class="badge text-bg-secondary">{{
                Details.Popularity
              }}</span>
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
              alt=""
              style="width: 10%; height: auto"
            /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="container container-4">
      <div class="row row-4">
        <div class="col col-md-12 cast-header">
          <p class="lead-actors roboto">Lead Actors</p>
        </div>
      </div>
      <div class="row row-5 cast-div">
        <div class="col col-md-9 cast-cards">
          <SliderFive :castArray="Cast" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderOne from "@/components/Sliders/SliderOne.vue";
import SliderFour from "@/components/Sliders/SliderFour.vue";
import SliderFive from "@/components/Sliders/SliderFive.vue";
import ProgressBar from "@/components/Common/ProgressBar.vue";
import "@/assets/css/app-global.css";

export default {
  name: "DetailView",
  components: {
    SliderOne,
    SliderFour,
    SliderFive,
    ProgressBar,
  },
  data() {
    return {
      MovieId: null,
      Backdrops: [],
      Posters: [],
      Cast: [],
      Details: {},
    };
  },
  beforeRouteLeave() {
    //beforeUnmount
    // console.log("Ok leaving");
    this.$store.commit("Movie/setEmpty");
  },
  created() {
    // 346698 barbide id
    // 1160164 taylor swift id
    this.MovieId = this.$route.params.id;

    this.$store
      .dispatch("Movie/fetchMovieDetailBackdrops", this.MovieId)
      .then(() => {
        this.Backdrops = this.$store.getters["Movie/getMovieDetailBackdrops"];
      });

    this.$store
      .dispatch("Movie/fetchMovieDetailPosters", this.MovieId)
      .then(() => {
        this.Posters = this.$store.getters["Movie/getMovieDetailPosters"];
      });
    this.$store
      .dispatch("Movie/fetchMovieDetailCast", this.MovieId)
      .then(() => {
        this.Cast = this.$store.getters["Movie/getMovieDetailCast"];
      });
    this.$store.dispatch("Movie/fetchMovieDetails", this.MovieId).then(() => {
      this.Details = this.$store.getters["Movie/getMovieDetails"];
    });
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.fa-arrow-left {
  color: white;
  font-size: 28px;
}
.fa-arrow-left:hover {
  color: white;
  cursor: pointer;
  font-size: 28px;
}
.row-col {
  display: flex;
  background-color: black;
  justify-content: flex-start;
  align-items: end;
  padding: 2% 0 2% 0.9%;
}
.list-group {
  width: 100%;
}
.horizontal-row-4 {
  background-color: black;
  height: 40%;
  padding: 0 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tags-container {
  background-color: black;
  display: flex;
  justify-content: center;
}
.cast-cards {
  /* max-height: 500px; */
  padding: 1%;
  /* background-color: black; */
}

.cast-header {
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: black; */
}
.key-information-header {
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: black; */
}
.container-4 {
  background-position: center;
  background-size: cover;
  /* min-height: 700px; */
  /* background-color: darkorange; */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1400' height='500' preserveAspectRatio='none' viewBox='0 0 1400 500'%3e%3cg mask='url(%26quot%3b%23SvgjsMask3069%26quot%3b)' fill='none'%3e%3crect width='1400' height='500' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask3071%26quot%3b)'%3e%3cpath d='M1175 275L1125 325M1225 275L1175 225M1475 275L1425 275L1375 275L1325 275L1275 275L1225 275L1175 275L1125 275' stroke='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M1112.5 275 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM1112.5 325 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM1162.5 225 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)'%3e%3c/path%3e%3cpath d='M1475 225L1425 225L1375 225L1325 225L1275 225' stroke='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M1262.5 225 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)'%3e%3c/path%3e%3cpath d='M1425 325L1375 375L1325 375L1275 425L1225 425M1475 325L1425 325L1375 325L1325 325L1275 325L1225 325' stroke='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M1212.5 325 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM1212.5 425 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)'%3e%3c/path%3e%3cpath d='M1225 175L1175 175L1125 175L1075 175M1325 175L1275 125L1225 125M1425 175L1375 125L1325 125M1475 175L1425 175L1375 175L1325 175L1275 175L1225 175L1175 125' stroke='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)' stroke-width='8.33'%3e%3c/path%3e%3cpath d='M1162.5 125 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM1062.5 175 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM1212.5 125 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0zM1312.5 125 a12.5 12.5 0 1 0 25 0 a12.5 12.5 0 1 0 -25 0z' fill='url(%26quot%3b%23SvgjsLinearGradient3070%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask3069'%3e%3crect width='1400' height='500' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='924' y1='250' x2='1400' y2='250' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient3070'%3e%3cstop stop-color='rgba(204%2c 163%2c 0%2c 1)' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cmask id='SvgjsMask3071'%3e%3crect width='1400' height='500' fill='white'%3e%3c/rect%3e%3cpath d='M1118.75 275 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1118.75 325 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1168.75 225 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M1268.75 225 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M1218.75 325 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1218.75 425 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3cpath d='M1168.75 125 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1068.75 175 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1218.75 125 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0zM1318.75 125 a6.25 6.25 0 1 0 12.5 0 a6.25 6.25 0 1 0 -12.5 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
.more-info-badges {
  margin: 5px 5px;
  font-size: 14px;
}
.lead-actors {
  color: white;
  margin: 1% 0 1% 0;
  padding: 0 0 0 1%;
  font-size: 30px;
  border-left: 3px solid #ffd700;
}
.key-information {
  color: white;
  margin: 1% 0 1% 0;
  padding: 0 0 0 1%;
  font-size: 30px;
  border-left: 3px solid #ffd700;
}
.short-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.movie-tagline {
  font-style: italic;
  background-color: black;
  color: white;
  margin: 1%;
}
.movie-infos {
  background-color: black;
  margin: 1%;
}
.progress-bar-container {
  padding: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-score {
  margin-top: 12px;
  margin-left: 10%;
  font-size: 18px;
  font-weight: 600;
  border-left: 3px solid #ffd700;
}
#progress-container {
  width: 65px;
  height: 66px;
  position: relative;
  background-color: black;
}
.horizontal-row-1 {
  background-color: black;
  height: 15%;
  padding: 0 1%;
  display: flex;
  justify-content: left;
  align-items: center;
}
.horizontal-row-2 {
  background-color: black;
  display: flex;
  /* height: 20%;
  padding: 0 1%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  text-align: left; */
  height: 20%;
}
.horizontal-row-3 {
  background-color: black;
  height: 25%;
  padding: 0 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
}

.multiple-text {
  font-size: 20px;
}
.overview {
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 1%;
}
.overview-text {
  letter-spacing: 1px;
  line-height: 1.25;
}
.row-4-text {
  font-size: 18px;
}
.container-1 {
  padding: 0;
}
.container-2 {
  background-color: black;
}
.container-3 {
  /* min-height: 700px; */
  background-color: black;
}
.col-poster {
  padding: 1%;
  background-color: black;
}
.col-details {
  padding: 1%;
  background-color: black;
}

.detail-container {
  min-height: 95vh;
  background-color: black;
}

.row-1 {
  padding: 2% 0;
  display: flex;
  justify-content: center;
  min-height: 5vh;
  background-color: black;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(204%2c 163%2c 0%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c452.667C83.249%2c433.543%2c164.671%2c414.22%2c236.173%2c367.492C307.259%2c321.037%2c365.437%2c259.841%2c407.736%2c186.207C453.229%2c107.013%2c491.394%2c21.151%2c487.546%2c-70.099C483.488%2c-166.333%2c452.99%2c-265.284%2c385.789%2c-334.288C319.953%2c-401.891%2c219.184%2c-411.534%2c128.759%2c-438.512C37.907%2c-465.618%2c-51.926%2c-512.439%2c-144.622%2c-492.536C-239.91%2c-472.077%2c-322.608%2c-408.041%2c-380.004%2c-329.275C-434.987%2c-253.821%2c-437.06%2c-156.998%2c-455.777%2c-65.531C-475.785%2c32.245%2c-517.338%2c128.461%2c-493.505%2c225.376C-467.381%2c331.609%2c-417.35%2c449.028%2c-317.984%2c494.792C-218.861%2c540.445%2c-106.361%2c477.1%2c0%2c452.667' fill='%23856a00'%3e%3c/path%3e%3cpath d='M1440 886.025C1498.589 868.7280000000001 1548.76 838.625 1606.785 819.5219999999999 1690.083 792.098 1806.62 822.7 1854.836 749.4490000000001 1900.975 679.353 1848.034 582.595 1812.901 506.385 1783.871 443.413 1716.9859999999999 411.645 1674.019 357.221 1628.138 299.106 1615.622 215.447 1552.566 176.635 1482.966 133.796 1390.986 104.87099999999998 1315.7 136.67200000000003 1240.4850000000001 168.44299999999998 1222.181 264.657 1179.454 334.235 1144.209 391.628 1093.944 442.251 1086.911 509.234 1079.987 575.18 1125.317 632.03 1141.433 696.351 1162.149 779.03 1123.162 895.356 1195.107 941.0609999999999 1267.188 986.8530000000001 1358.098 910.2049999999999 1440 886.025' fill='%23ffd014'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
</style>
