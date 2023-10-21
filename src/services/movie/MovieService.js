import api from "@/services/api";

class MovieService {
  async getPopularMovies(language= "en-US", page=1) {
    //https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=
    return await api
      .get(
        `movie/popular?language=${language}&page=${page}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getNowPlayingMovies(language = "en-US", page=1) {
    //https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=
    return await api
      .get(
        `movie/now_playing?language=${language}&page=${page}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getTrendingMovies(language = "en-US") {
    return await api
      .get(
        `trending/movie/week?language=${language}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getMovieDetailBackdrops(MovieId) {
    // https://api.themoviedb.org/3/movie/346698/images?api_key=
    return await api
      .get(
        `movie/${MovieId}/images?api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
}

export default new MovieService();
