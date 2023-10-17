import MovieService from "@/services/movie/MovieService";

const MovieModule = {
  namespaced: true,
  state: {
    popularMovies: [],
    nowPlayingMovies: [],
    trendingMovies: [],
    movieDetailPhotos: [],
  },

  getters: {
    getPopularMovies: (state) => state.popularMovies,
    getNowPlayingMovies: (state) => state.nowPlayingMovies,
    getTrendingMovies: (state) => state.trendingMovies,
    getMovieDetailPhotos: (state) => state.movieDetailPhotos,
  },

  mutations: {
    setPopularMovies: (state, movies) => {
      state.popularMovies = movies;
    },
    setNowPlayingMovies: (state, movies) => {
      state.nowPlayingMovies = movies;
    },
    setTrendingMovies: (state, movies) => {
      state.trendingMovies = movies;
    },
    setMovieDetailPhotos: (state, photos) => {
      state.moviePhotos = photos;
    },
  },

  actions: {
    //Vue actions always takes Js objects as payload
    // this.$store.dispatch("fetchPopularFilms", { sample using
    //     language: "en-US",
    //     page: 1,
    //   });
    async fetchPopularFilms({ commit }, { language, page }) {
      try {
        const response = await MovieService.getPopularMovies(language, page);
        commit("setPopularMovies", response);
      } catch (error) {
        console.error("Error fetching Popular Movies:", error);
      }
    },
    async fetchNowPlayingMovies({ commit }, { language, page }) {
      try {
        const response = await MovieService.getNowPlayingMovies(language, page);
        commit("setNowPlayingMovies", response);
      } catch (error) {
        console.error("Error fetching Now Playing Movies:", error);
      }
    },
    async fetchTrendingMovies({ commit }, language) {
      try {
        const response = await MovieService.getTrendingMovies(language);
        commit("setTrendingMovies", response);
      } catch (error) {
        console.error("Error fetching Trending Movies:", error);
      }
    },
    async fetchMovieDetailPhotos({ commit }, movieId) {
      try {
        const response = await MovieService.getMovieDetailPhotos(movieId);
        commit("setMovieDetailPhotos", response);
      } catch (error) {
        console.error("Error fetching Movie Details:", error);
      }
    },
  },
};

export default MovieModule;

//sample usage of action
// export default {
//   // ...
//   methods: {
//     async fetchTrendingMovies() {
//       // Bu, action'ı dispatch eder ve güncellenmiş filmleri alır
//       await this.$store.dispatch("movie/fetchTrendingMovies", this.$store.state.Languages.English);

//       // Şimdi güncellenmiş filmlere erişebilirsin
//       const trendingMovies = this.$store.getters["movie/getTrendingMovies"];
//       console.log("Trending Movies:", trendingMovies);
//     },
//   },
// };
// export default {
//   // ...
//   methods: {
//     async fetchMovieDetails(movieId) {
//       // Bu, action'ı dispatch eder ve güncellenmiş film detaylarını alır
//       await this.$store.dispatch("movie/fetchMovieDetails", movieId);

//       // Şimdi güncellenmiş film detaylarına erişebilirsin
//       const movieDetails = this.$store.getters["movie/getMovieDetails"];
//       console.log("Movie Details:", movieDetails);
//     },
//   },
// };
