<template>
  <div class="detail-container container-fluid">
    <div class="row row-1">
      <SliderOne :photoArray="detailPhotos" />
    </div>
    <h2>Detail Page</h2>
    <p>Film ID: {{ filmId }}</p>
    <div class="row row-2"></div>
  </div>
</template>

<script>
import SliderOne from "@/components/Sliders/SliderOne.vue";
import MovieService from "@/services/movie/MovieService.js";
export default {
  name: "DetailView",
  components: {
    SliderOne,
  },
  data() {
    return {
      filmId: null,
      detailPhotos: [],
    };
  },
  mounted() {
    this.filmId = this.$route.params.id;
    this.getDetailPhotosById(this.filmId);
  },
  methods: {
    async getDetailPhotosById(filmId) {
      try {
        var photos = await MovieService.getDetailPhotosById(filmId);
        if (photos && photos.backdrops) {
          this.detailPhotos = photos.backdrops.map((x) => {
            return {
              FilePath: this.$store.state.BaseUrls.Original + x.file_path,
              Height: x.height,
              Width: x.width,
              AspectRatio: x.aspect_ratio,
            };
          });
          console.log(this.detailPhotos);
        } else {
          console.error("Format Error");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.detail-container {
  min-height: 95vh;
  background-color: brown;
}

.row-1 {
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  min-height: 5vh;
  background-color: black;
}

.row-2 {
  background-color: yellow;
}
</style>
