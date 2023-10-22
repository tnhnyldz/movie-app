<template>
  <div class="detail-container container-fluid">
    <div class="container-fluid container-1">
      <div class="row row-1">
        <SliderOne :photoArray="Backdrops" />
      </div>
    </div>
    <div class="container container-2">
      <div class="row row-2">
        <h2>Detail Page</h2>
        <p>Film ID: {{ MovieId }}</p>
        <p>Number of Backdrops : {{ Backdrops.length }}</p>
        <p>Number of Posters : {{ Posters.length }}</p>
        <p>Number of Cast : {{ Cast.length }}</p>
      </div>
    </div>
    <div class="container container-3">
      <div class="row row-3">
        <div class="col col-3 col-poster" v-if="Posters.length>0">
          <SliderFour :photoArray="Posters" />
        </div>
        <div class="col col-9 col-details">2 of 2</div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderOne from "@/components/Sliders/SliderOne.vue";
import SliderFour from "@/components/Sliders/SliderFour.vue";
import "@/assets/css/app-global.css";

export default {
  name: "DetailView",
  components: {
    SliderOne,
    SliderFour
  },
  data() {
    return {
      MovieId: null,
      Backdrops: [],
      Posters: [],
      Cast: [],
    };
  },
  beforeRouteLeave() {
    //beforeUnmount
    // console.log("Ok leaving");
    this.$store.commit("Movie/setEmpty");
  },
  created() {
    console.log("created");
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
  },
  methods: {},
};
</script>
<style scoped>

.container-1 {
  padding: 0;
}
.container-2 {
  background-color: purple;
}
.container-3 {
  min-height: 700px;
  background-color: cadetblue;
}
.col-poster {
  padding: 1% 1% 1% 1%;
  background-color: saddlebrown;
  min-height: 200px;
}
.col-details {
  background-color: darkgoldenrod;
  min-height: 200px;
}

.detail-container {
  min-height: 95vh;
  background-color: brown;
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
