<!-- Меню в правой части шапки -->
<template>
	<nav>
    <ul class="menu__list">
      <li 
				class="menu__item home-link"
				@click="goHome"
				>
        <icon-component name="HomeIcon"/>
      </li>
      <!-- текущий пользователь передается в пропсы компонента avatar-component -->
      <li class="menu__item"
				@click="goProfile"
				>
        <avatar-component
          :userStory="authUser"
          :isProfile="true"
					:avatarWidth=37
        />
      </li>
      <li 
				class="menu__item logout-link"
				@click="logout"
				>
        <icon-component name="LogoutIcon"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue";
import IconComponent from "../../icons/IconComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "header-menu",
	components: {
		AvatarComponent,
		IconComponent,
	},	
	computed: {
		...mapGetters({
			authUser: "userModule/getUserFromState"
		}),
	},
	methods: {
		...mapActions({
			logout: "userModule/logout",
		}),
		goProfile(){
			this.$router.push({ path: "/profile"});
		},
		goHome() {
			this.$router.push({ name: "feeds", params: {}});
		}
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
  /* height: 37px; */
  list-style-type: none;
}
.menu__item {
  margin: 0;
  color: #262626;
  width: 24px;
}
.logout-link, .home-link {
	cursor: pointer;
}


/* iPad-mini */
@media only screen and (max-width: 768px) {
}

/* iPhone */
@media only screen and (max-width: 375px) {
  .logo__container img {
    width: 100px;
    /* height: 35px; */
    vertical-align: middle;
  }
}
</style>
