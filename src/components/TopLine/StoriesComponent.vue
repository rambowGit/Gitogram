<!--  Компонент содержит список пользователей. Отображает их в галерее header -->
<template lang="">
  <div class="stories__wrapper">
    <div class="story_item" v-for="(repo, index) in items" :key="repo.id">
      <!-- каждого из пользователей передайм в пропсы компонента avatar-component -->
      <avatar-component
        :userStory="repo.owner"
				:repoName="repo.name"
        @onPressUserStory="userStoryPressed(index)"
      />
    </div>
  </div>
</template>

<script>
import AvatarComponent from "./AvatarComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "stories-component",
	components: { AvatarComponent },
	data(){
		return {
			items: null
		};
	},
	computed: {
		// ...mapGetters({
		// 	items: "repoModule/getTrendingRepos"
		// }),
		...mapGetters(["getUnstarredRepos"]),
					
	},
	methods: {
		...mapActions({
			getPopularRepos: "repoModule/getPopularRepos"
		}),
		userStoryPressed(idx) {
			this.$router.push("/slider/"+idx);
		},
		// getItems() {
		// 	return this.getUnstarredRepos;
		// }
	},

	// getUnstarredRepos должен быть асинхронным, иначе null
	async created() {
		await this.getPopularRepos();
		this.items = await this.getUnstarredRepos;
	}
};
</script>
<style scoped>
.stories__wrapper {
  display: flex;
}
.story_item {
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
