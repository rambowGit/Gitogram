//отображение user issue posts
<template>
  <div class="post__container">
    <div>
      <post-header />
    </div>
    <div>
      <post-footer />
    </div>
  </div>
</template>
<script>
import PostHeader from "./PostHeader.vue";
import PostFooter from "./PostFooter.vue";
export default {
  name: "post-component",
  components: {
    PostHeader,
    PostFooter,
  },
};
</script>
<style scoped>
.post__container {
  width: 980px;
}
</style>
