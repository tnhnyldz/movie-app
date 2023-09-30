import api from "@/services/api";

class BaseService {
  async getPopularFilms(language,page) {
    return await api.get(`movie/popular?language=${language}&page=${page}&api_key=${process.env.VUE_APP_APIKEY}`).then(
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
