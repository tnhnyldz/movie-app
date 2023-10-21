import MovieService from "@/services/movie/MovieService";
import Helper from "@/assets/Js/Helper";

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
    setEmpty: (state) => {
      state.movieDetailPhotos = [];
      state.nowPlayingMovies = [];
      state.popularMovies = [];
    },
    setPopularMovies: (state, movies) => {
      state.popularMovies = movies;
    },
    setNowPlayingMovies: (state, movies) => {
      state.nowPlayingMovies = movies;
    },
    setTrendingMovies: (state, { rootState, response }) => {
      state.trendingMovies = response.results.map((x) => {
        return {
          Id: x.id,
          Title: x.title,
          FilePath: rootState.BaseUrls.Original + x.backdrop_path,
          ReleaseDate: Helper.formatDate(x.release_date),
          VoteAverage: parseFloat(x.vote_average).toFixed(1),
        };
      });
    },
    setMovieDetailPhotos: (state, { rootState, response }) => {
      state.movieDetailPhotos = response.backdrops.map((x) => {
        return {
          //use original quality
          FilePath: rootState.BaseUrls.Original + x.file_path,
          Height: x.height,
          Width: x.width,
          AspectRatio: x.aspect_ratio,
        };
      });
    },
  },

  actions: {
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
    async fetchTrendingMovies({ commit, rootState }, language) {
      try {
        const response = await MovieService.getTrendingMovies(language);
        if (response && response.results && response.results.length > 0) {
          commit("setTrendingMovies", { rootState, response });
        } else {
          console.error("Invalid data for fetchTrendingMovies");
        }
      } catch (error) {
        console.error("Error fetching Trending Movies:", error);
      }
    },
    async fetchMovieDetailPhotos({ commit, rootState }, movieId) {
      try {
        const response = await MovieService.getMovieDetailPhotos(movieId);
        if (response && response.backdrops && response.backdrops.length > 0) {
          commit("setMovieDetailPhotos", { rootState, response });
        } else {
          console.error("Invalid data for fetchMovieDetailPhotos");
        }
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
