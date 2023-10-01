<template>
  <div class="container-sample">
    <HomeSlider />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from "@/components/Common/HomeSlider.vue";

export default {
  name: "HomeView",
  data() {
    return {
      photoBaseUrl: "https://image.tmdb.org/t/p/w500/",
    };
  },
  components: {
    HomeSlider,
  },
  methods: {
    formatDate(date) {zs
      return Helper.formatDate(date).toString();
    },
  },
};
</script>
<style scoped>
.container-sample {
  background-color: black;
  min-height: 95vh;
}
</style>
