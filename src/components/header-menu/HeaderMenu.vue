/* Меню в правой части шапки */
<template>
  <nav>
    <ul class="menu__list">
      <li class="menu__item">
        <img :src="menu.home" alt="Home" />
      </li>
      <!-- текущий пользователь передается в пропсы компонента avatar-component -->
      <li class="menu__item">
        <avatar-component
          style="with: 37px"
          :user="curentUser"
          :isProfile="true"
        ></avatar-component>
      </li>
      <li class="menu__item">
        <img :src="menu.logout" alt="Logout" />
      </li>
    </ul>
  </nav>
</template>
<script>
import AvatarComponent from "../avatar/AvatarComponent.vue";
export default {
  components: { AvatarComponent },
  name: "header-menu",
  data() {
    return {
      menu: {
        home: require("@/assets/img/menu/home.png"),
        logout: require("@/assets/img/menu/logout.png"),
      },
      curentUser: {
        id: 1,
        name: "Andrew",
        pic: require("@/assets/img/avatars/ProfilePic_Andrew.png"),
      },
    };
  },
};
</script>
<style scoped>
ul {
  padding-inline-start: 0;
}
.menu__list {
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 145px;
  height: 37px;
  list-style-type: none;
}
.menu__item {
  margin: 0;
}
</style>
