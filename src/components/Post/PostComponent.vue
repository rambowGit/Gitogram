//отображение user issue posts
<template>
  <div class="post__container">
    <div class="post__item" v-for="post in posts" :key="post.id">
      <div class="post__header">
        <post-header :post="post" />
      </div>
      <div class="post__footer">
        <post-footer :post="post" />
      </div>
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
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "Andrew",
          pic: require("@/assets/img/avatars/ProfilePic_Andrew.png"),
        },
        {
          id: 2,
          name: "Camille",
          pic: require("@/assets/img/avatars/ProfilePic_Camille.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.post__container {
  width: 980px;
}
.post__header {
  margin-bottom: 26px;
}
</style>
