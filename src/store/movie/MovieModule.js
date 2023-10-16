import MovieService from "@/services/movie/MovieService";

const MovieModule = {
  namespaced: true,
  state: {
    popularFilms: [],
    nowPlayingMovies: [],
    trendingMovies: [],
    movieDetailsById: {},
    movieCredits: {},
    moviePhotos: [],
  },

  getters: {
    getPopularFilms: (state) => state.popularFilms,
    getNowPlayingMovies: (state) => state.nowPlayingMovies,
    getTrendingMovies: (state) => state.trendingMovies,
    getMovieDetailsById: (state) => state.movieDetailsById,
    getMovieCredits: (state) => state.movieCredits,
    getMoviePhotos: (state) => state.moviePhotos,
  },

  mutations: {
    setPopularFilms: (state, films) => {
      state.popularFilms = films;
    },
    setNowPlayingMovies: (state, movies) => {
      state.nowPlayingMovies = movies;
    },
    setTrendingMovies: (state, movies) => {
      state.trendingMovies = movies;
    },
    setMovieCredits: (state, credits) => {
      state.movieCredits = credits;
    },
    setMoviePhotos: (state, photos) => {
      state.moviePhotos = photos;
    },
    setMovieDetailsById: (state, details) => {
      state.movieDetailsById = details;
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
        const response = await MovieService.getPopularFilms(language, page);
        commit("setPopularMovies", response);
      } catch (error) {
        console.error("Error fetching Popular Movies:", error);
      }
    },
    async NowPlayingMovies({ commit }, { language, page }) {
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
    async fetchMovieDetailsById({ commit }, movieId) {
      try {
        const response = await MovieService.getDetailsById(movieId);
        commit("setMovieDetailsById", response);
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
