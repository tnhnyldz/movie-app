<template>
  <span
    class="badge text-bg-dark roboto keyword-span"
    v-for="keyword in Keywords.slice(0, 22)"
  >
    {{ "#" + keyword.Keyword }}
  </span>
</template>
<script>
export default {
  name: "Keywords",
  data() {
    return {};
  },
  props: {
    Keywords: {
      type: Array,
      default: () => null,
    },
  },
  created() {},
  methods: {},
};
</script>
<style>
.keyword-span {
  font-size: 13.5px;
  margin: 5px 5px;
}
</style>
