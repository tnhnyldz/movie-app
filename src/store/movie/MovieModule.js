import MovieService from "@/services/movie/MovieService";
import Helper from "@/assets/Js/Helper";

const MovieModule = {
  namespaced: true,
  state: {
    popularMovies: [],
    nowPlayingMovies: {},
    trendingMovies: [],
    movieDetails: {},
    movieDetailBackdrops: [],
    movieDetailPosters: [],
    movieDetailCast: [],
    movieDetailKeywords: [],
    movieDetailExternalIds: {},
    movieDetailVideos:[]
  },

  getters: {
    getPopularMovies: (state) => state.popularMovies,
    getTrendingMovies: (state) => state.trendingMovies,
    getNowPlayingMovies: (state) => state.nowPlayingMovies,
    getMovieDetails: (state) => state.movieDetails,
    getMovieDetailBackdrops: (state) => state.movieDetailBackdrops,
    getMovieDetailPosters: (state) => state.movieDetailPosters,
    getMovieDetailCast: (state) => state.movieDetailCast,
    getMovieDetailExternalIds: (state) => state.movieDetailExternalIds,
    getMovieDetailKeywords: (state) => state.movieDetailKeywords,
    getMovieDetailVideos: (state) => state.movieDetailVideos,
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
      var nowPlayingMovies = response.results.map((x) => {
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
      var sliderPhotos = response.results.map((x) => {
        return {
          Id: x.id,
          FilePath: rootState.BaseUrls.Original + x.backdrop_path,
        };
      });
      //create return object
      var nowPlayingMoviesObject = {
        CurrentPage: response.page,
        TotalPages: response.total_pages,
        NowPlayingMovies: nowPlayingMovies,
        SliderPhotos: sliderPhotos,
      };
      state.nowPlayingMovies = nowPlayingMoviesObject;
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
          Language: x.iso_639_1,
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
          VoteAverage: x.vote_average,
          VoteCount: x.vote_count,
          Language: x.iso_639_1,
          AspectRatio: x.aspect_ratio,
        };
      });
    },
    setMovieDetailCast: (state, { rootState, response }) => {
      state.movieDetailCast = response.cast.map((x) => {
        return {
          Gender: x.gender === 1 ? "Female" : x.gender === 2 ? "Male" : "Other",
          Id: x.id,
          Name: x.name,
          Popularity: x.popularity,
          Photo: x.profile_path
            ? rootState.BaseUrls.Large + x.profile_path
            : "no photo",
          CastId: x.cast_id,
          Character: x.character,
          CreditId: x.credit_id,
          Order: x.order,
        };
      });
      state.movieDetailCast = state.movieDetailCast.filter(
        (x) => x.Photo !== "no photo"
      );
    },
    setMovieDetails: (state, { response }) => {
      state.movieDetails = {
        Adult: response.adult,
        Budget: response.budget ? Helper.formatDollar(response.budget) : null,
        Genres: response.genres,
        HomePage: response.homepage,
        Id: response.id,
        ImdbId: response.imdb_id,
        OriginalLanguage: response.original_language
          ? response.original_language.toString().toUpperCase()
          : null,
        OriginalTitle: response.original_title,
        Overview: response.overview,
        Popularity: response.popularity,
        ProductionCountries: response.production_countries,
        ReleaseDate: response.release_date
          ? Helper.formatDate(response.release_date)
          : null,
        Revenue: response.revenue
          ? Helper.formatDollar(response.revenue)
          : null,
        Runtime: response.runtime,
        SpokenLanguages: response.spoken_languages,
        Status: response.status,
        Tagline: response.tagline,
        Title: response.title,
        Video: response.video,
        VoteAverage: response.vote_average
          ? Math.round(response.vote_average * 10).toString()
          : "N/A",
        VoteStar: response.vote_average
          ? response.vote_average.toString().slice(0, 3)
          : "N/A",
        VoteCount: response.vote_count,
        Year: Helper.getYear(response.release_date),
      };
    },
    setMovieDetailExternalIds: (state, { response }) => {
      state.movieDetailExternalIds = {
        Facebook: response.facebook_id
          ? "https://www.facebook.com/" + response.facebook_id
          : null,
        Instagram: response.instagram_id
          ? "https://www.instagram.com/" + response.instagram_id
          : null,
        Twitter: response.twitter_id
          ? "https://twitter.com/" + response.twitter_id
          : null,
        Imdb: response.imdb_id
          ? "https://www.imdb.com/title/" + response.imdb_id
          : null,
        Wikipedia: response.wikidata_id
          ? "https://www.wikidata.org/wiki/" + response.wikidata_id
          : null,
      };
    },
    setMovieDetailKeywords: (state, { response }) => {
     state.movieDetailKeywords=response.keywords.map((x)=>{
        return{
          Id:x.id,
          Keyword:x.name
        }
     })
    },
    setMovieDetailVideos: (state, { response }) => {
      state.movieDetailVideos=response.results.map((x)=>{
         return{
           Id:x.id,
           YoutubeKey:x.key,
           Name:x.name,
           Site:x.site,
           Resolution:x.size+"p",
           Type:x.type,
           Official:x.official,
           PublishedAt:Helper.formatDate(x.published_at),
           Language:x.iso_639_1+"-"+x.iso_3166_1,
         }
      })
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
          // console.log(response.posters)
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
    async fetchMovieDetails({ commit }, movieId) {
      try {
        const response = await MovieService.getMovieDetails(movieId);
        if (response && response.title) {
          commit("setMovieDetails", { response });
        } else {
          console.error("Invalid data for fetchMovieDetails");
        }
      } catch (error) {
        console.error("Error fetching Movie Details:", error);
      }
    },
    async fetchMovieDetailExternalIds({ commit }, movieId) {
      try {
        const response = await MovieService.getMovieDetailExternalIds(movieId);
        if (response && response.id) {
          commit("setMovieDetailExternalIds", { response });
        } else {
          console.error("Invalid data for fetchMovieDetailExternalIds");
        }
      } catch (error) {
        console.error("Error fetching Movie Detail external Ids:", error);
      }
    },
    async fetchMovieDetailKeywords({ commit }, movieId) {
      try {
        const response = await MovieService.getMovieDetailKeywords(movieId);
        if (response && response.keywords) {
          commit("setMovieDetailKeywords", { response });
        } else {
          console.error("Invalid data for fetchMovieDetailKeywords");
        }
      } catch (error) {
        console.error("Error fetching Movie Detail keywords: ", error);
      }
    },
    async fetchMovieDetailVideos({ commit }, movieId) {
      try {
        const response = await MovieService.getMovieDetailVideos(movieId);
        if (response && response.results) {
          commit("setMovieDetailVideos", { response });
        } else {
          console.error("Invalid data for fetchMovieDetailVideos");
        }
      } catch (error) {
        console.error("Error fetching Movie Detail videos: ", error);
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
