import api from "@/services/api";

class BaseService {
  async getPopularFilms(language) {
    return await api.get(`movie/popular?language=${language}&page=1&api_key=${process.env.VUE_APP_APIKEY}`).then(
      (response) => {
        console.log(response.data)
        return response.data;
      },
      (error) => {
        return error.data;
      }
    );
  }
}

export default new BaseService();
