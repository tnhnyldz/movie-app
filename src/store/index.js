import { createStore } from 'vuex'
import MovieModule from "@/store/movie/MovieModule";
export default createStore({
  state: {
    //generalstate
    apikey:"e426677764ab467061d84adf1fc53f40",
    BaseUrls:{
      Original:"https://image.tmdb.org/t/p/original/",
      Large:"https://image.tmdb.org/t/p/w500/",
    },
    Languages: {
      Turkish: "tr-TR",
      English: "en-US",
      German: "de-DE",
      France: "fr-FR",
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
     Movie: MovieModule,
  }
})
