<template>
  <post-profile :story="post" />
  <div>
    <post-content :userId="post.id" />
  </div>
</template>
<script>
import PostProfile from "./PostProfile.vue";
import PostContent from "./PostContent.vue";
export default {
  name: "post-header",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    PostProfile,
    PostContent,
  },
  watch: {
    post(val, prevVal) {
      console.log("postHeader post:", val, prevVal);
    },
  },
};
</script>
<style scoped></style>
