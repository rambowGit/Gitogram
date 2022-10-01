/* Компонент содержит список пользователей. Отображает их в галерее header */
<template lang="">
  <div class="stories__wrapper">
    <div class="story_item" v-for="user in userList" :key="user.id">
      <!-- каждого из пользователей передайм в пропсы компонента avatar-component -->
      <avatar-component :user="user" />
    </div>
  </div>
</template>

<script>
import AvatarComponent from "../avatar/AvatarComponent.vue";

export default {
  name: "stories-component",
  components: { AvatarComponent },
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
        {
          id: 3,
          name: "Camilr",
          pic: require("@/assets/img/avatars/ProfilePic_Camilr.png"),
        },
        {
          id: 4,
          name: "Can",
          pic: require("@/assets/img/avatars/ProfilePic_Can.png"),
        },
        {
          id: 5,
          name: "Diself",
          pic: require("@/assets/img/avatars/ProfilePic_Diself.png"),
        },
        {
          id: 6,
          name: "Gartor",
          pic: require("@/assets/img/avatars/ProfilePic_Gartor.png"),
        },
        {
          id: 7,
          name: "Iloveanime",
          pic: require("@/assets/img/avatars/ProfilePic_Iloveanime.png"),
        },
        {
          id: 8,
          name: "Josh",
          pic: require("@/assets/img/avatars/ProfilePic_Josh.png"),
        },
        {
          id: 9,
          name: "Marselle",
          pic: require("@/assets/img/avatars/ProfilePic_Marselle.png"),
        },
        {
          id: 10,
          name: "Piter",
          pic: require("@/assets/img/avatars/ProfilePic_Piter.png"),
        },
      ],
    };
  },
  methods: {
    getUsers() {
      console.log("users: ", this.userList);
    },
  },
};
</script>
<style scoped>
.stories__wrapper {
  display: flex;
  /* justify-content: space-between; */
  /* padding: 0 120px; */
  margin-left: 115px;
}
.story_item {
  /* margin-right: 43px; */
}
.storie_item:last-child {
  margin-right: 0;
}
</style>
