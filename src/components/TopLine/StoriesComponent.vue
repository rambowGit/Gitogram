/* Компонент содержит список пользователей. Отображает их в галерее header */
<template lang="">
  <div class="stories__wrapper">
		<pre @click="getRepos()">itemzz: {{$store.state.repo}}</pre>
    <div class="story_item" v-for="repo in items" :key="repo.id">
      <!-- каждого из пользователей передайм в пропсы компонента avatar-component -->
      <avatar-component
        :userStory="repo.owner"
				:username="repo.owner.login"
        @onPressUserStory="userStoryPressed()"
      />
    </div>
  </div>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue";
// import  {getPopularRepos} from "../../services/GitHub.service";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
	name: "stories-component",
	components: { AvatarComponent },

	computed: {
		...mapState({
			items: state => state.repo.items
		}),
		// ...mapGetters({
		// 	isFemale: "user/getIfUserIsFemale"
		// })
	},
	methods: {
		...mapActions({
			getPopularRepos: "getPopularRepos"
		}),
		userStoryPressed() {
			this.$router.push("/slider");
		},
		getRepos(){
			this.getPopularRepos();
			console.log("$store.state.repo.items ", this.$store.state.repo.items);
		}
	},

	created() {
		this.getPopularRepos();
		// console.log(this.items);
	}
};
</script>
<style scoped>
.stories__wrapper {
  display: flex;
  /* margin-left: 115px; */
}
.story_item {
  /* margin-right: 43px; */
}
.storie_item:last-child {
  margin-right: 0;
}

/* iPad-mini */
@media only screen and (max-width: 768px) {
  .stories__wrapper {
    display: flex;
    justify-content: flex-start;
  }
}

/* iPhone */
@media only screen and (max-width: 375px) {
  .main__wrapper {
  }
  .container {
    margin: 0 auto;
    width: 768px;
    /* background-color: #2c3e50; */
  }
}
</style>
