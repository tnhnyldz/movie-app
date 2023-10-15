import api from "@/services/api";

class MovieService {
  async getPopularFilms(language, page) {
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
  async getDetailsById(MovieId) {
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
  async getCreditsById(MovieId) {
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
  async getDetailPhotosById(MovieId) {
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
