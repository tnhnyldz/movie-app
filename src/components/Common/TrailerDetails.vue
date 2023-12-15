<template>
  <div v-if="videoObj.name" class="background-clr-blck d-flex justify-content-start">
    <span class="clr-white detail-header">Name :</span>
    <span
      class="clr-white detail-item"
      >{{ videoObj.name.length>24 ? videoObj.name.slice(0,24) + "..." : videoObj.name}}</span
    >
  </div>
  <div v-if="videoObj.publishedAt" class="background-clr-blck d-flex justify-content-start">
    <span class="clr-white detail-header">Publish Date :</span>
    <span class="clr-white detail-item">{{ videoObj.publishedAt }}</span>
  </div>
  <div v-if="videoObj.language" class="background-clr-blck d-flex justify-content-start">
    <span class="clr-white detail-header">Trailer Language :</span>
    <span class="clr-white detail-item">{{ videoObj.language }}</span>
  </div>
  <div v-if="videoObj.resolution" class="background-clr-blck d-flex justify-content-start">
    <span class="clr-white detail-header">Resolution :</span>
    <span class="clr-white detail-item">{{ videoObj.resolution }}</span>
  </div>
  <div v-if="videoObj.type" class="background-clr-blck d-flex justify-content-start">
    <span class="clr-white detail-header">Type :</span>
    <span class="clr-white detail-item">{{ videoObj.type }}</span>
  </div>
  <div v-if="videoObj.Official" class="background-clr-blck d-flex justify-content-start">
    <span class="clr-white detail-header">Is Official Trailer :</span>
    <template v-if="videoObj.Official">
      <span class="clr-white detail-item">Yes</span>
    </template>
    <template v-else>
      <span class="clr-white detail-item">No</span>
    </template>
  </div>
</template>
<script>
export default {
  name: "TrailerDetails",
  data() {
    return {};
  },
  props: {
    videoObj: {
      type: Object,
      default: () => {},
    },
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.detail-header {
  font-size: 24px;
  margin: 3% 0 3% 3%;
  padding-left: 2%;
  border-left: 3px gold solid;
}
.detail-item {
  font-size: 24px;
  margin: 3%;
}
</style>
