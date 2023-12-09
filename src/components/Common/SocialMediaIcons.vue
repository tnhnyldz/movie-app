<template>
  <span v-if="SocialMediaObject.Imdb" class="social-media"
    ><a
      class="social-media-links"
      :href="SocialMediaObject.Imdb"
      target="_blank"
      ><i class="social-media-icons fa-brands fa-imdb"></i></a
  ></span>
  <span v-if="SocialMediaObject.Wikipedia" class="social-media"
    ><a
      class="social-media-links"
      :href="SocialMediaObject.Wikipedia"
      target="_blank"
      ><i class="social-media-icons fa-brands fa-wikipedia-w"></i></a
  ></span>
  <span v-if="SocialMediaObject.Twitter" class="social-media"
    ><a
      class="social-media-links"
      :href="SocialMediaObject.Twitter"
      target="_blank"
      ><i class="social-media-icons fa-brands fa-x-twitter"></i></a
  ></span>
  <span v-if="SocialMediaObject.Instagram" class="social-media"
    ><a
      class="social-media-links"
      :href="SocialMediaObject.Instagram"
      target="_blank"
      ><i class="social-media-icons fa-brands fa-instagram"></i></a
  ></span>
  <span v-if="SocialMediaObject.Facebook" class="social-media"
    ><a
      class="social-media-links"
      :href="SocialMediaObject.Facebook"
      target="_blank"
      ><i class="social-media-icons fa-brands fa-facebook"></i></a
  ></span>
  <span v-if="homePageLink" class="social-media"
    ><a class="social-media-links" :href="homePageLink" target="_blank"
      ><i class="social-media-icons fa-solid fa-link"></i></a
  ></span>
</template>
<script>
export default {
  name: "SocialMediaIcons",
  data() {
    return {};
  },
  props: {
    SocialMediaObject: {
      type: Object,
      default: () => {},
    },
    homePageLink: {
      type: String,
      default: "",
    },
  },
  created() {},
  methods: {},
};
</script>
<style>
.social-media-links {
  color: white;
}
.social-media-icons {
  font-size: 32px;
}
.social-media {
  margin: 6% 3%;
}
</style>
