<template>
  <div
    class="container-fluid container-popular pt-5 d-flex justify-content-center flex-wrap"
    v-if="films"
    @scroll="handleScroll"
  >
    <Card v-for="film in films" :key="film.Id" :Film="film" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MovieService from "@/services/movie/MovieService.js";
export default {
  name: "PopularView",
  components: {
    Card,
  },
  data() {
    return {
      selectedLanguage: "tr-TR",
      films: [],
      currentPage: 1,
      languages: {
        Turkish: "tr-TR",
        English: "en-US",
        German: "de-DE",
        France: "fr-FR",
      },
    };
  },
  methods: {
    async getPopularMovies() {
      try {
        var popularFilms = await MovieService.getPopularMovies(
          this.selectedLanguage,
          this.currentPage
        );
        this.films = popularFilms.results.map((x) => {
          return {
            Id: x.id,
            Adult: x.adult,
            Title: x.title,
            Overview: x.overview
              ? x.overview
              : "Lorem Ipsum is ssimply dummy of the printing and typesetting industry.",
            PosterPath: x.poster_path,
            ReleaseDate: x.release_date,
            VoteAverage: x.vote_average,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
    async loadMoreFilms() {
      this.currentPage++;
      try {
        var popularFilms = await MovieService.getPopularMovies(
          this.selectedLanguage,
          this.currentPage
        );
        this.films = this.films.concat(
          popularFilms.results.map((x) => {
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
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const threshold = 100;

      if (scrollY + windowHeight >= documentHeight - threshold) {
        setTimeout(async () => {
          await this.loadMoreFilms();
        }, 50);
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  async created() {
    this.getPopularMovies(this.selectedLanguage, this.currentPage);
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
* {
  background-color: black;
}
</style>
