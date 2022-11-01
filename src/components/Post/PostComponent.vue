<!-- отображение user issue posts -->
<template>
  <div class="post__item" v-for="post in items" :key="post.id">
    <div class="post__header">
      <post-header :post="post" />
    </div>
    <div class="post__footer">
      <post-footer :repo="post" />
    </div>
  </div>
</template>
<script>
import PostHeader from "./PostHeader.vue";
import PostFooter from "./PostFooter.vue";
import { mapGetters, mapActions } from "vuex";


export default {
	name: "post-component",
	components: {
		PostHeader,
		PostFooter,
	},
	computed: {
		...mapGetters({
			items: "starsModule/getStarredRepos"
		})
	},
	methods: {
		...mapActions({
			loadStarredRepos: "starsModule/loadStarredRepos"
		})
	},
	async created() {
		await this.loadStarredRepos();
	},
	
	


};
</script>
<style scoped>
.post__header {
  margin-bottom: 20px;
}
.post__item {
  margin-bottom: 25px;
}
</style>
