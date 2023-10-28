<template>
  <div data-aos="zoom-in-up" data-aos-anchor-placement="top-bottom" class="card mb-3 bg-black border-black" style="max-width: 420px" >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="Movie.PosterPath"
          class="img-fluid"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>
      <div class="col-md-8 bg-dark">
        <div class="card-body text-white bg-dark">
          <p class="card-title bg-dark text-white text-start">{{ Movie.Title }}</p>
          <p class="card-text bg-dark text-start">
            {{
              Movie.Overview.length > 100
                ? Movie.Overview.slice(0, 100) + "..."
                : Movie.Overview
            }}
          </p>
          <div class="d-flex justify-content-around bg-dark">
            <p class="vote-text text-white bg-dark">
              
              (<i class="fas fa-star bg-dark" style="color: #ffd700"></i>
             {{ Movie.VoteAverage.toString().slice(0, 3)}})
            </p>
            <p class="vote-text text-white bg-dark">
              (
              <i class="far fa-calendar-alt" style="color: #9e6acf"></i>
              {{ formatDate(Movie.ReleaseDate) }})
            </p>
          </div>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            @click="goToDetailsPage(Movie.Id)"
          >
            Go Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Helper from "@/assets/Js/Helper.js";
export default {
  name: "CardLarge",
  data() {
    return {
      photoBaseUrl: "",
    };
  },
  props: {
    Movie: Object,
  },
  methods: {
    goToDetailsPage(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
    formatDate(date) {
      return Helper.formatDate(date).toString();
    },
  },
};
</script>
<style scoped>
.card-title{
  font-size: 18px;
}
.card-text{
  font-size: 14px;
}
.vote-text{
  font-size: 14px;
}
</style>
