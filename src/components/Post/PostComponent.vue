//отображение user issue posts
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
import  {getPopularRepos} from "../../services/GitHub.service";

export default {
	name: "post-component",
	components: {
		PostHeader,
		PostFooter,
	},
	data() {
		return {
			items: [],
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
.post__header {
  margin-bottom: 20px;
}
.post__item {
  margin-bottom: 25px;
}
</style>
