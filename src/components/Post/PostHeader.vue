<template>
  <div v-for="story in userList" :key="story.id">
    <post-profile :story="story" />
    <div>
      <post-content :userId="story.id" />
    </div>
  </div>
</template>
<script>
import PostProfile from "./PostProfile.vue";
import PostContent from "./PostContent.vue";
export default {
  name: "post-header",
  components: {
    PostProfile,
    PostContent,
  },
  data() {
    return {
      userList: [
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
<style scoped></style>
