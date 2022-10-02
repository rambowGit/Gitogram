/* Меню в правой части шапки */
<template>
  <nav>
    <ul class="menu__list">
      <li class="menu__item">
        <icon-component name="HomeIcon" size="24px" />
      </li>
      <!-- текущий пользователь передается в пропсы компонента avatar-component -->
      <li class="menu__item">
        <avatar-component
          style="with: 37px"
          :userStory="curentUser"
          :isProfile="true"
        ></avatar-component>
      </li>
      <li class="menu__item">
        <icon-component name="LogoutIcon" size="25px" />
      </li>
    </ul>
  </nav>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue";
import IconComponent from "@/icons/IconComponent.vue";

export default {
  components: {
    AvatarComponent,
    IconComponent,
  },
  name: "header-menu",
  data() {
    return {
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
  width: 140px;
  height: 37px;
  list-style-type: none;
}
.menu__item {
  margin: 0;
  color: #262626;
  width: 24px;
}
</style>
