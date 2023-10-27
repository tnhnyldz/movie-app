<template>
  <div id="progress-container"></div>
</template>

<script>
import ProgressBar from "progressbar.js";
export default {
  name: "ProgressBar",
  data() {
    return {
      Value: 0,
    };
  },
  props: {
    BarValue: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    BarValue: function(newVal, oldVal) {
      this.initProgressBar();
    }
  },
  methods: {
    initProgressBar() {
      // Replace 'progress-container' with the ID of your container div
      var container = document.getElementById("progress-container");

      // Create a new instance of ProgressBar.Circle
      var bar = new ProgressBar.Circle(container, {
        color: "#aaa",
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1400,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#333", width: 4 },
        step: (state, circle) => {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);
          var value = Math.round(this.BarValue);
          circle.setText(value === 0 ? "" : value);
        },
      });

      // Style the text
      bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      bar.text.style.fontSize = "2rem";

      // Start the animation
      console.log(this.BarValue);
      bar.animate(this.BarValue / 100);
    },
  },
};
</script>

<style scoped>
/* #progress-container {
  margin: 10px;
  width: 100px;
  height: 100px;
  position: relative;
} */
</style>
