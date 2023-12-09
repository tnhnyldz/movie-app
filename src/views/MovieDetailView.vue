<template>
  <div class="detail-container background-clr-blck container-fluid">
    <div class="container-fluid container-1">
      <div class="d-flex justify-content-center background-clr-blck row row-1">
        <SliderOne :photoArray="Backdrops" />
      </div>
    </div>
    <div class="container background-clr-blck container-2">
      <div class="row">
        <div class="d-flex col background-clr-blck col-md-12 row-col">
          <i class="fa fa-arrow-left" @click="goBack"></i>
        </div>
      </div>
      <div class="row row-2">
        <div class="d-flex col col-md-12 key-information-header">
          <p class="key-information roboto">Key Information</p>
        </div>
      </div>
    </div>
    <div class="container background-clr-blck container-3">
      <div class="row row-3">
        <div class="col col-3 background-clr-blck col-poster" v-if="Posters.length > 0">
          <SliderFour :photoArray="Posters" />
        </div>
        <div class="col col-9 background-clr-blck col-details">
          <div class="d-flex col background-clr-blck horizontal-row horizontal-row-1">
            <h1 class="roboto text-white">
              {{ Details.Title }} ({{ Details.Year }})
            </h1>
          </div>
          <div class="d-flex col background-clr-blck horizontal-row horizontal-row-2">
            <div class="d-flex justify-content-center background-clr-blck col-md-1 progress-bar-container">
              <p class="user-score bg-secondary roboto text-white">
                User Score
              </p>
            </div>
            <div class="d-flex justify-content-center col-md-1 progress-bar-container">
              <ProgressBar :BarValue="Details.VoteAverage" />
            </div>

            <div
              class="d-flex justify-content-center flex-column col-md-6 short-details-container"
              style="background-color: black"
            >
              <ShortDetailBadges :Details="Details" />
            </div>
            <div v-if="Details.Tagline" class="col-md-4 background-clr-blck tagline-container">
              <p class="movie-tagline background-clr-blck roboto">"{{ Details.Tagline }}"</p>
            </div>
          </div>
          <div class="d-flex justify-content-center flex-column background-clr-blck col horizontal-row horizontal-row-3">
            <span class="roboto text-white overview">Overview</span>
            <span class="roboto text-white overview-text">{{
              Details.Overview
            }}</span>
          </div>
          <div class="d-flex col horizontal-row background-clr-blck horizontal-row-4">
            <div class="d-flex flex-column background-clr-blck col-md-4 additional-info-container">
              <AdditionalInfos :Details="Details" />
            </div>
            <div class="d-flex justify-content-center background-clr-blck col-md-4 social-media-container">
              <SocialMediaIcons
                :SocialMediaObject="ExternalIds"
                :homePageLink="Details.HomePage"
              />
            </div>
            <div class="col-md-4 d-flex justify-content-center flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container background-clr-blck container-4">
      <div class="row row-4">
        <div class="d-flex justify-content-between background-clr-blck col col-md-12 cast-header">
          <p class="lead-actors roboto">Lead Actors</p>
          <p class="roboto keyword-header">Keywords</p>
        </div>
      </div>
      <div class="row row-5 cast-div">
        <div class="col col-md-9 cast-cards">
          <SliderFive :castArray="Cast" />
        </div>
        <div class="col col-md-3 mt-4 text-start">
          <Keywords :Keywords="Keywords" />
        </div>
      </div>
    </div>
    <div class="container container-5">
      <div class="row row-6">
        <div class="d-flex justify-content-between background-clr-blck col col-md-12 videos-header">
          <p class="videos-text roboto">Teasers and other videos</p>
        </div>
      </div>
      <div class="row row-7">
        <div class="col col-md-8 trailer-section">
          <SliderSix :LinkArray="Videos" />
        </div>
        <div class="col col-md-4 text-start trailer-info-section">
          <p>skldddds</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderOne from "@/components/Sliders/SliderOne.vue";
import SliderFour from "@/components/Sliders/SliderFour.vue";
import SliderFive from "@/components/Sliders/SliderFive.vue";
import SliderSix from "@/components/Sliders/SliderSix.vue";
import ProgressBar from "@/components/Common/ProgressBar.vue";
import SocialMediaIcons from "@/components/Common/SocialMediaIcons.vue";
import ShortDetailBadges from "@/components/Common/ShortDetailBadges.vue";
import AdditionalInfos from "@/components/Common/AdditionalInfos.vue";
import Keywords from "@/components/Common/Keywords.vue";
import "@/assets/css/app-global.css";
export default {
  name: "DetailView",
  components: {
    SliderOne,
    SliderFour,
    SliderFive,
    SliderSix,
    ProgressBar,
    SocialMediaIcons,
    ShortDetailBadges,
    AdditionalInfos,
    Keywords,
  },
  data() {
    return {
      MovieId: null,
      Backdrops: [],
      Posters: [],
      Cast: [],
      Keywords: [],
      Videos: [],
      Details: {},
      ExternalIds: {},
    };
  },
  beforeRouteLeave() {
    //beforeUnmount
    // console.log("Ok leaving");
    this.$store.commit("Movie/setEmpty");
  },
  created() {
    // barbide id 346698 
    // taylor swift 1160164
    // saw x 951491
    this.MovieId = this.$route.params.id;
    this.getAllDetailData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    getAllDetailData() {
      const fetchVideos = this.$store.dispatch(
        "Movie/fetchMovieDetailVideos",
        this.MovieId
      );
      const fetchBackdrops = this.$store.dispatch(
        "Movie/fetchMovieDetailBackdrops",
        this.MovieId
      );
      const fetchPosters = this.$store.dispatch(
        "Movie/fetchMovieDetailPosters",
        this.MovieId
      );
      const fetchCast = this.$store.dispatch(
        "Movie/fetchMovieDetailCast",
        this.MovieId
      );
      const fetchDetails = this.$store.dispatch(
        "Movie/fetchMovieDetails",
        this.MovieId
      );
      const fetchExternalIds = this.$store.dispatch(
        "Movie/fetchMovieDetailExternalIds",
        this.MovieId
      );
      const fetchKeywords = this.$store.dispatch(
        "Movie/fetchMovieDetailKeywords",
        this.MovieId
      );

      Promise.all([
        fetchVideos,
        fetchBackdrops,
        fetchPosters,
        fetchCast,
        fetchDetails,
        fetchExternalIds,
        fetchKeywords,
      ]).then(() => {
        this.Videos = this.$store.getters["Movie/getMovieDetailVideos"];
        this.Backdrops = this.$store.getters["Movie/getMovieDetailBackdrops"];
        this.Posters = this.$store.getters["Movie/getMovieDetailPosters"];
        this.Cast = this.$store.getters["Movie/getMovieDetailCast"];
        this.Details = this.$store.getters["Movie/getMovieDetails"];
        this.ExternalIds =
          this.$store.getters["Movie/getMovieDetailExternalIds"];
        this.Keywords = this.$store.getters["Movie/getMovieDetailKeywords"];
      });
    },
  },
};
</script>
<style scoped>
.trailer-info-section {
  background-color: royalblue;
}
.trailer-section {
  min-height: 500px;
  padding: 1% 1%;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='600' preserveAspectRatio='none' viewBox='0 0 1440 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1012%26quot%3b)' fill='none'%3e%3crect width='1440' height='600' x='0' y='0' fill='rgba(193%2c 163%2c 0%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c446.116C84.029%2c436.104%2c163.485%2c410.867%2c235.756%2c366.844C309.427%2c321.968%2c387.64%2c271.682%2c418.566%2c191.153C448.97%2c111.984%2c404.726%2c27.271%2c398.652%2c-57.318C391.988%2c-150.128%2c438.378%2c-256.897%2c381.128%2c-330.249C324.041%2c-403.392%2c213.308%2c-401.56%2c121.207%2c-412.794C41.179%2c-422.555%2c-34.707%2c-400.546%2c-114.728%2c-390.729C-212.869%2c-378.689%2c-319.282%2c-402.319%2c-402.277%2c-348.575C-494.418%2c-288.909%2c-591.146%2c-194.208%2c-587.645%2c-84.491C-584.067%2c27.643%2c-444.011%2c80.321%2c-385.537%2c176.069C-336.794%2c255.884%2c-351.457%2c374.032%2c-274.857%2c427.686C-198.092%2c481.456%2c-93.065%2c457.205%2c0%2c446.116' fill='%237e6a00'%3e%3c/path%3e%3cpath d='M1440 937.461C1514.062 951.0989999999999 1592.811 975.6990000000001 1661.241 944.258 1732.165 911.671 1772.108 837.348 1808.348 768.219 1846.2559999999999 695.909 1900 615.082 1874.463 537.534 1848.718 459.35400000000004 1738.843 449.932 1683.479 389.024 1630.1680000000001 330.374 1633.872 220.086 1559.942 191.515 1486.898 163.28699999999998 1410.416 223.85000000000002 1338.958 255.882 1276.362 283.942 1212.739 312.404 1170.205 366.222 1128.705 418.73199999999997 1114.3980000000001 485.568 1105.0529999999999 551.842 1095.73 617.963 1086.43 688.112 1116.405 747.781 1145.9940000000001 806.682 1208.717 838.065 1265.583 871.398 1320.327 903.4870000000001 1377.594 925.969 1440 937.461' fill='%23ffd806'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1012'%3e%3crect width='1440' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
.container-5 {
  margin-top: 1%;
  min-height: 700px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.videos-text {
  color: white;
  margin: 1% 0 1% 0;
  padding: 0 0 0 1%;
  font-size: 30px;
  border-left: 3px solid #ffd700;
}
.videos-header {
  padding-left: 1%;
  align-items: center;
}
.tagline-container {
  margin-top: 4.5%;
}
.additional-info-container {
  align-items: flex-start;
  justify-content: space-around;
  padding: 0 0 0 0.7%;
}
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
  justify-content: flex-start;
  align-items: flex-end;
  padding: 2% 0 2% 0.9%;
}
.list-group {
  width: 100%;
}
.social-media-container {
  flex-wrap: wrap;
}
.cast-cards {
  padding: 1%;
}

.cast-header {
  padding-left: 1%;
  align-items: center;
}
.keyword-header {
  color: white;
  margin: 0 0 0 0;
  padding: 0 11.6% 0 1%;
  font-size: 30px;
  border-left: 3px solid #ffd700;
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
.key-information-header {
  justify-content: flex-start;
  align-items: center;
}
.short-details-container {
  align-items: center;
}
.movie-tagline {
  font-style: italic;
  color: white;
  margin: 1%;
  text-align: left;
}
.progress-bar-container {
  margin-left: 0.5%;
  padding: 0.5%;
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
  height: 15%;
  padding: 0 1%;
  justify-content: left;
  align-items: center;
}
.horizontal-row-2 {
  height: 20%;
}
.horizontal-row-3 {
  height: 25%;
  padding: 0 1%;
  align-items: flex-start;
  text-align: left;
}
.horizontal-row-4 {
  height: 40%;
  padding: 0 1%;
  justify-content: space-around;
  align-items: center;
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
.container-4 {
  background-position: center;
  background-size: cover;
}
.col-poster {
  padding: 1%;
}
.col-details {
  padding: 1%;
}

.detail-container {
  min-height: 95vh;
}

.row-1 {
  padding: 2% 0;
  min-height: 5vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1022%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(204%2c 163%2c 0%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c452.667C83.249%2c433.543%2c164.671%2c414.22%2c236.173%2c367.492C307.259%2c321.037%2c365.437%2c259.841%2c407.736%2c186.207C453.229%2c107.013%2c491.394%2c21.151%2c487.546%2c-70.099C483.488%2c-166.333%2c452.99%2c-265.284%2c385.789%2c-334.288C319.953%2c-401.891%2c219.184%2c-411.534%2c128.759%2c-438.512C37.907%2c-465.618%2c-51.926%2c-512.439%2c-144.622%2c-492.536C-239.91%2c-472.077%2c-322.608%2c-408.041%2c-380.004%2c-329.275C-434.987%2c-253.821%2c-437.06%2c-156.998%2c-455.777%2c-65.531C-475.785%2c32.245%2c-517.338%2c128.461%2c-493.505%2c225.376C-467.381%2c331.609%2c-417.35%2c449.028%2c-317.984%2c494.792C-218.861%2c540.445%2c-106.361%2c477.1%2c0%2c452.667' fill='%23856a00'%3e%3c/path%3e%3cpath d='M1440 886.025C1498.589 868.7280000000001 1548.76 838.625 1606.785 819.5219999999999 1690.083 792.098 1806.62 822.7 1854.836 749.4490000000001 1900.975 679.353 1848.034 582.595 1812.901 506.385 1783.871 443.413 1716.9859999999999 411.645 1674.019 357.221 1628.138 299.106 1615.622 215.447 1552.566 176.635 1482.966 133.796 1390.986 104.87099999999998 1315.7 136.67200000000003 1240.4850000000001 168.44299999999998 1222.181 264.657 1179.454 334.235 1144.209 391.628 1093.944 442.251 1086.911 509.234 1079.987 575.18 1125.317 632.03 1141.433 696.351 1162.149 779.03 1123.162 895.356 1195.107 941.0609999999999 1267.188 986.8530000000001 1358.098 910.2049999999999 1440 886.025' fill='%23ffd014'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1022'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
</style>
