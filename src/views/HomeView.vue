<template>
  <div class="container-sample">
    <HomeSlider />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HomeSlider from "@/components/Common/HomeSlider.vue";

export default {
  name: "HomeView",
  components: {
    HomeSlider,
  },
};
</script>
<style>
.container-sample {
  background-color: brown;
  height: 95vh;
}
</style>
