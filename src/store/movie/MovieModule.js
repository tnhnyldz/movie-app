import MovieService from "@/services/movie/MovieService";
import Helper from "@/assets/Js/Helper";

const MovieModule = {
  namespaced: true,
  state: {
    popularMovies: [],
    nowPlayingMovies: [],
    nowPlayingSliderPhotos: [],
    trendingMovies: [],
    movieDetailBackdrops: [],
    movieDetailPosters: [],
    movieDetailCast: [],
  },

  getters: {
    getPopularMovies: (state) => state.popularMovies,
    getTrendingMovies: (state) => state.trendingMovies,
    getNowPlayingMovies: (state) => state.nowPlayingMovies,
    getNowPlayingSliderPhotos: (state) => state.nowPlayingSliderPhotos,
    getMovieDetailBackdrops: (state) => state.movieDetailBackdrops,
    getMovieDetailPosters: (state) => state.movieDetailPosters,
    getMovieDetailCast: (state) => state.movieDetailCast,
  },

  mutations: {
    setEmpty: (state) => {
      state.movieDetailBackdrops = [];
      state.popularMovies = [];
    },
    setPopularMovies: (state, movies) => {
      state.popularMovies = movies;
    },
    setNowPlayingMovies: (state, { rootState, response }) => {
      state.nowPlayingMovies = response.results.map((x) => {
        return {
          Id: x.id,
          Title: x.title,
          Overview: x.overview
            ? x.overview
            : "Lorem Ipsum is ssimply dummy of the printing and typesetting industry.",
          PosterPath: x.poster_path
            ? rootState.BaseUrls.Original + x.poster_path
            : "https://user-images.githubusercontent.com/2279051/36819127-dc9e33ea-1c9c-11e8-9a93-0d3c0a674f02.png",
          ReleaseDate: x.release_date,
          VoteAverage: x.vote_average,
        };
      });
      state.nowPlayingSliderPhotos = response.results.map((x) => {
        return {
          Id: x.id,
          FilePath: rootState.BaseUrls.Original + x.backdrop_path,
        };
      });
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
    setMovieDetailBackdrops: (state, { rootState, response }) => {
      state.movieDetailBackdrops = response.backdrops.map((x) => {
        return {
          //use original quality
          FilePath: rootState.BaseUrls.Original + x.file_path,
          Height: x.height,
          Width: x.width,
          Language:x.iso_639_1
        };
      });
    },
    setMovieDetailPosters: (state, { rootState, response }) => {
      state.movieDetailPosters = response.posters.map((x) => {
        return {
          //use original quality
          FilePath: rootState.BaseUrls.Original + x.file_path,
          Height: x.height,
          Width: x.width,
          VoteAverage:x.vote_average,
          VoteCount:x.vote_count,
          Language:x.iso_639_1
        };
      });
    },
    setMovieDetailCast: (state, { rootState, response }) => {
      state.movieDetailCast= response.cast.map((x)=>{
        return{
          Gender: x.gender === 1 ? "Female" : x.gender === 2 ? "Male" : "Other",
          Id:x.id,
          Name:x.name,
          Popularity:x.popularity,
          Photo: rootState.BaseUrls.Original+x.profile_path,
          CastId:x.cast_id,
          Character:x.character,
          CreditId:x.credit_id,
          Order:x.order,
        }
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
    async fetchNowPlayingMovies({ commit, rootState }, { language, page }) {
      try {
        const response = await MovieService.getNowPlayingMovies(language, page);
        if (response && response.results && response.results.length > 0) {
          commit("setNowPlayingMovies", { rootState, response });
        } else {
          console.error("Invalid data for fetchNowPlayingMovies");
        }
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
    async fetchMovieDetailBackdrops({ commit, rootState }, movieId) {
      try {
        const response = await MovieService.getMovieDetailBackdrops(movieId);
        if (response && response.backdrops && response.backdrops.length > 0) {
          commit("setMovieDetailBackdrops", { rootState, response });
        } else {
          console.error("Invalid data for fetchMovieDetailBackdrops");
        }
      } catch (error) {
        console.error("Error fetching Movie Backdrops:", error);
      }
    },
    async fetchMovieDetailPosters({ commit, rootState }, movieId) {
      try {
        const response = await MovieService.getMovieDetailPosters(movieId);
        if (response && response.posters && response.posters.length > 0) {
          commit("setMovieDetailPosters", { rootState, response });
        } else {
          console.error("Invalid data for fetchMovieDetailPosters");
        }
      } catch (error) {
        console.error("Error fetching Movie Posters:", error);
      }
    },
    async fetchMovieDetailCast({ commit, rootState }, movieId) {
      try {
        const response = await MovieService.getMovieDetailCast(movieId);
        if (response && response.cast && response.cast.length > 0) {
          commit("setMovieDetailCast", { rootState, response });
        } else {
          console.error("Invalid data for fetchMovieDetailCast");
        }
      } catch (error) {
        console.error("Error fetching Movie Cast:", error);
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
