<template>
  <div class="container-sample">
    <HomeSlider />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from "@/components/Sliders/HomeSlider.vue";

export default {
  name: "HomeView",
  data() {
    return {
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
