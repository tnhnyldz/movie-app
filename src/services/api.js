import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  https: config,
});

export default instance;

// import axios from "axios";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDI2Njc3NzY0YWI0NjcwNjFkODRhZGYxZmM1M2Y0MCIsInN1YiI6IjY0ZDIyMDc3NGQ2NzkxMDBjNTJkYjAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._88bsgtEaFC1687FqOijtXPYwekDQPxE97cCqKvPlVs'
//   },
// };

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   https: config,
// });

// export default instance;
