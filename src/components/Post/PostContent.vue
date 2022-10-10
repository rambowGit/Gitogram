<template>
  <div class="post__content-container">
    <div class="post__content-about">
      <p class="post__content-name">
        <a v-bind:href="post.html_url" target="_blank">{{ post.name }}</a>
      </p>
      <p ref="postText" class="post__content-text">
        {{ post.description }}
      </p>
    </div>

    <div class="reaction__container">
      <reaction-component
				:stargazersCount="post.stargazers_count"
				:forksCount="post.forks_count"
				/>
    </div>
  </div>
</template>
<script>
import ReactionComponent from "./ReactionComponent.vue";

export default {
	name: "post-content",
	components: { ReactionComponent },
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			postText: "",
		};
	},
	mounted() {
		this.postText = this.$refs.postText.textContent;
	},
	methods: {},
};
</script>
<style scoped>
.post__content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px 20px;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}
.post__content-about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
.post__content-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: #292929;
  margin-bottom: 15px;
}
.post__content-name a {
	text-decoration: none;
	color: #292929;
}
.post__content-text {
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 700; */
  font-size: 14px;
  line-height: 160%;
  color: #404040;
	text-align: start;
}
</style>
