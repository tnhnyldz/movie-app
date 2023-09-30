<template>
  <div
    class="card mb-3 border-black ms-1 me-1 main-div"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="photoBaseUrl + Film.PosterPath"
          class="img-fluid rounded-start"
        />
      </div>
      <div class="col-md-8 bg-dark">
        <div class="card-body bg-dark">
          <h5 class="card-title text-white bg-dark">{{ Film.Title }}</h5>
          <p class="card-text text-white bg-dark text-start">
            {{
              Film.Overview.length > 110
                ? Film.Overview.slice(0, 110) + "..."
                : Film.Overview
            }}
          </p>
          <div class="d-flex justify-content-around bg-dark">
            <p class="text-white bg-dark">
              (
              <i class="fas fa-star bg-dark" style="color: #ffd700"></i>
              {{ Film.VoteAverage }})
            </p>
            <p class="text-white bg-dark">
              (
              <i class="far fa-calendar-alt" style="color: #9e6acf"></i>
              {{ formatDate(Film.ReleaseDate) }})
            </p>
          </div>
          <button type="button" class="btn btn-danger">Go Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Helper from "@/assets/Js/Helper.js";

export default {
  name: "Card",
  data() {
    return {
      photoBaseUrl: "https://image.tmdb.org/t/p/w500/",
    };
  },
  props: {
    Film: Object,
  },
  methods: {
    formatDate(date) {
      return Helper.formatDate(date).toString();
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: larger;
}
.card-text {
  font-size: medium;
}
.main-div {
  max-width: 450px; 
  min-width: 450px; 
  min-height: 260px;
  background-color: black;
}

</style>
