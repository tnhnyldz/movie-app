import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },
  {
    path: "/Popular",
    name: "Popular",
    component: () =>
      import("../views/PopularView.vue"),
  },
  {
    path: "/now-playing",
    name: "NowPlaying",
    component: () =>
      import("@/views/NowPlayingMoviesView.vue"),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () =>
    import("@/views/MovieDetailView.vue"),
    props: true, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
