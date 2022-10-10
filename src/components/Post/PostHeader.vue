<template>
  <post-profile :story="post.owner" />
  <div class="post-content">
    <post-content :post="post" />
  </div>
</template>
<script>
import PostProfile from "./PostProfile.vue";
import PostContent from "./PostContent.vue";

export default {
	name: "post-header",
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	components: {
		PostProfile,
		PostContent,
	},
};
</script>
<style scoped>
.post-content {
  /* margin-right: 10px; */
}
</style>
