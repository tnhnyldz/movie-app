<template>
  <div class="detail-container container-fluid">
    <div class="row row-1">
      <DetailSlider :photoArray="moviePhotos" />
    </div>
    <h2>Detail Page</h2>
    <p>Film ID: {{ filmId }}</p>
    <div class="row row-2"></div>
  </div>
</template>

<script>
import DetailSlider from "@/components/Common/DetailSlider.vue";
import BaseService from "@/services/BaseService.js";
export default {
  name: "DetailView",
  components: {
    DetailSlider,
  },
  data() {
    return {
      filmId: null,
      moviePhotos: [],
      photoBaseUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
  mounted() {
    this.filmId = this.$route.params.id;
    this.getDetailPhotosById(this.filmId);
  },
  methods: {
    async getDetailPhotosById(filmId) {
      try {
        var photos = await BaseService.getDetailPhotosById(filmId);
        if (photos && photos.backdrops) {
          this.moviePhotos = photos.backdrops.map((x) => {
            return {
              FilePath: this.photoBaseUrl + x.file_path,
              Height: x.height,
              Width: x.width,
              AspectRatio: x.aspect_ratio,
            };
          });
          console.log(this.moviePhotos);
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
