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
			posts: [
				{
					id: 1,
					name: "Vue.js",
					text: "JavaScript framework for building interactive web applications ⚡",
					author: {
						id: 1,
						name: "Andrew",
						pic: require("../../assets/img/avatars/ProfilePic_Andrew.png"),
					},
					issues: [
						{
							id: 1,
							author: "Andrew",
							comment:
                "Enable performance measuring in production, at the user's request",
						},
						{
							id: 2,
							author: "Camille",
							comment: "It's Impossible to Rename an Inherited Slot",
						},
						{
							id: 3,
							author: "Marselle",
							comment:
                "transition-group with flex parent causes removed items to fly",
						},
					],
				},
				{
					id: 2,
					name: "React.js",
					text: "Open source JavaScript library used for designing user interfaces",
					author: {
						id: 2,
						name: "Camille",
						pic: require("../../assets/img/avatars/ProfilePic_Camille.png"),
					},
					issues: [
						{
							id: 1,
							author: "Gartor",
							comment:
                " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
						},
						{
							id: 2,
							author: "Josh",
							comment:
                "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,",
						},
					],
				},
			],
		};
	},
	async created(){
		try {
			const { data } = await getPopularRepos();
			this.items = data.items;
			console.log("items: ", this.items);
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
