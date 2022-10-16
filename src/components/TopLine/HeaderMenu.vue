/* Меню в правой части шапки */
<template>
	<nav>
    <ul class="menu__list">
      <li class="menu__item">
        <icon-component name="HomeIcon"/>
      </li>
      <!-- текущий пользователь передается в пропсы компонента avatar-component -->
      <li class="menu__item">
        <avatar-component
          :userStory="repo"
          :isProfile="true"
					:avatarWidth=37
        />
      </li>
      <li class="menu__item">
        <icon-component name="LogoutIcon"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue";
import IconComponent from "../../icons/IconComponent.vue";
import  {getPopularRepos} from "../../services/GitHub.service";

export default {
	components: {
		AvatarComponent,
		IconComponent,
	},
	name: "header-menu",
	data() {
		return {
			repo: {
				id: 1,
				name: "Andrew",
				avatar_url: require("../../assets/img/avatars/ProfilePic_Andrew.png"),
			},
		};
	},
	async created(){
		try {
			const { data } = await getPopularRepos();
			this.items = data.items;
			// console.log("items: ", this.items);
		} catch (error) {
			console.log(error);
		}
	}
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
