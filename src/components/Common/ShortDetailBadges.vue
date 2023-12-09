<template>
  <p class="movie-infos roboto" style="background-color: black">
    <span class="badge more-info-badges text-bg-secondary roboto"
      >{{ Details.Runtime }} minutes</span
    ><span class="badge text-bg-secondary roboto more-info-badges"
      ><i class="fas fa-star" style="color: #ffd700"></i>
      {{ Details.VoteStar }}</span
    ><span class="badge text-bg-secondary roboto more-info-badges">{{
      Details.ReleaseDate
    }}</span
    ><br /><span
      class="badge text-bg-light roboto genre-span"
      v-for="genre in Details.Genres"
    >
      {{ genre.name }}
    </span>
  </p>
</template>
<script>
export default {
  name: "ShortDetailBadges",
  data() {
    return {};
  },
  props: {
    Details: {
      type: Object,
      default: () => {},
    },
  },
  created() {},
  methods: {},
};
</script>
<style>
.genre-span {
  font-size: 13.5px;
  margin: 5px 5px;
}
.more-info-badges {
  margin: 5px 5px;
  font-size: 14px;
}
.movie-infos {
  background-color: black;
  margin: 1%;
}
</style>
