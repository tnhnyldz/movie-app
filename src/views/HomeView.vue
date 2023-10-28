<template>
  <div class="container-fluid main-container">
    <div class="container-fluid slider-container">
      <SliderThree :Movies="Movies" />
    </div>
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
    <br>
    <span class="badge rounded-pill text-bg-primary">Primary</span>
    <span class="badge rounded-pill text-bg-secondary">Secondary</span>
    <span class="badge rounded-pill text-bg-success">Success</span>
    <span class="badge rounded-pill text-bg-danger">Danger</span>
    <span class="badge rounded-pill text-bg-warning">Warning</span>
    <span class="badge rounded-pill text-bg-info">Info</span>
    <span class="badge rounded-pill text-bg-light">Light</span>
    <span class="badge rounded-pill text-bg-dark">Dark</span>
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
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4424%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsRadialGradient4425%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L219.99 0L0 181.49z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 181.49L219.99 0L844.3100000000001 0L0 281.89z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 281.89L844.3100000000001 0L878.83 0L0 423.75z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 423.75L878.83 0L1123.08 0L0 449.97z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L948.39 560L1440 442.77z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 442.77L948.39 560L773.73 560L1440 407.47999999999996z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 407.48L773.73 560L407.39000000000004 560L1440 229.59000000000003z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 229.59000000000003L407.3900000000001 560L229.4800000000001 560L1440 125.11000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4424'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='50%25' cy='100%25' r='912.14' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient4425'%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='0.33'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.72'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e"); */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4618%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsRadialGradient4619%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L219.99 0L0 181.49z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 181.49L219.99 0L844.3100000000001 0L0 281.89z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 281.89L844.3100000000001 0L878.83 0L0 423.75z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 423.75L878.83 0L1123.08 0L0 449.97z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L948.39 560L1440 442.77z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 442.77L948.39 560L773.73 560L1440 407.47999999999996z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 407.48L773.73 560L407.39000000000004 560L1440 229.59000000000003z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 229.59000000000003L407.3900000000001 560L229.4800000000001 560L1440 125.11000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4618'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='50%25' cy='50%25' r='772.53' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient4619'%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='0.36'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.73'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask4692%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsRadialGradient4693%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L219.99 0L0 181.49z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 181.49L219.99 0L844.3100000000001 0L0 281.89z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 281.89L844.3100000000001 0L878.83 0L0 423.75z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 423.75L878.83 0L1123.08 0L0 449.97z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L948.39 560L1440 442.77z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 442.77L948.39 560L773.73 560L1440 407.47999999999996z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 407.48L773.73 560L407.39000000000004 560L1440 229.59000000000003z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 229.59000000000003L407.3900000000001 560L229.4800000000001 560L1440 125.11000000000003z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask4692'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cradialGradient cx='50%25' cy='50%25' r='772.53' gradientUnits='userSpaceOnUse' id='SvgjsRadialGradient4693'%3e%3cstop stop-color='rgba(255%2c 215%2c 0%2c 1)' offset='0.33'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.7'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e"); */
}
.slider-container:hover {
  background-color: #bba110;
}
</style>
