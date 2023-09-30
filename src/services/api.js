import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
    Authorization: process.env.VUE_APP_BEARER,
  },
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  https: config,
});

export default instance;
