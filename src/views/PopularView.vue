<template>
  <div
    class="container-fluid pt-5 d-flex justify-content-center flex-wrap"
    v-if="films"
  >
    <Card v-for="film in films" :key="film.Id" :Film="film" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import BaseService from "@/services/BaseService.js";
export default {
  name: "PopularView",
  components: {
    Card,
  },
  data() {
    return {
      photoBaseUrl: "https://image.tmdb.org/t/p/w500/",
      selectedLanguage: "tr-TR",
      films: [],
      page: 1,
      languages: {
        Turkish: "tr-TR",
        English: "en-US",
        German: "de-DE",
        France: "fr-FR",
      },
    };
  },
  methods: {
    async getPopularFilms() {
      try {
        var popularFilms = await BaseService.getPopularFilms(
          this.selectedLanguage
        );
        this.films = popularFilms.results.map((x) => {
          return {
            Id: x.id,
            Adult: x.adult,
            Title: x.title,
            Overview: x.overview
            ? x.overview
            : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            PosterPath: x.poster_path,
            ReleaseDate: x.release_date,
            VoteAverage: x.vote_average,
          };
        });
        // console.log(this.films);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.getPopularFilms();
  },
};
</script>
<style scoped>
* {
  background-color: black;
}
</style>
