import api from "@/services/api";

class BaseService {
  async getPopularFilms(language, page) {
    return await api
      .get(
        `movie/popular?language=${language}&page=${page}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          // console.log(response.data)
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getTrendingMovies(language = "en-US") {
    //https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=
    return await api
      .get(
        `trending/movie/week?language=${language}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          // console.log(response.data)
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getDetailsById(MovieId) {
    // https://api.themoviedb.org/3/movie/385687?append_to_response=images%2Cvideos&language=en-US&api_key=
    return await api
      .get(
        `trending/movie/week?language=${language}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          // console.log(response.data)
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getCreditsById(MovieId) {
    // https://api.themoviedb.org/3/movie/385687/credits?language=en-US&api_key=
    return await api
      .get(
        `trending/movie/week?language=${language}&api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          // console.log(response.data)
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
  async getDetailPhotosById(MovieId) {
    // https://api.themoviedb.org/3/original/movie/385687/images?api_key=
    // 49013
    return await api
      .get(
        `movie/${MovieId}/images?api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then(
        (response) => {
          // console.log(response.data) 
          return response.data;
        },
        (error) => {
          return error.data;
        }
      );
  }
}

export default new BaseService();
