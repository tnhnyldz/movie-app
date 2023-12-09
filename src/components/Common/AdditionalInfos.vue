<template>
  <div class="info-item" v-if="Details.Revenue">
    <span class="info-header"><b> Revenue: </b> </span>
    <span>{{ Details.Revenue }}</span>
  </div>
  <div class="info-item" v-if="Details.Budget">
    <span class="info-header"><b> Budget: </b> </span>
    <span>{{ Details.Budget }}</span>
  </div>
  <div class="info-item" v-if="Details.OriginalLanguage">
    <span class="info-header"><b> Language: </b> </span>
    <span>{{ Details.OriginalLanguage }}</span>
  </div>
  <div class="info-item" v-if="Details.Status">
    <span class="info-header"><b> Status: </b></span>
    <span>{{ Details.Status }}</span>
  </div>
</template>
<script>
export default {
  name: "AdditionalInfos",
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
.info-item {
  border-left: 2px gold solid;
  margin: 2% 0;
  color: white;
}
.info-header {
  margin-left: 5px;
}
</style>
