<template>
  <div class="post__footer-container">
    <div class="issue-toggler">
      <issue-toggle v-on:togglerPressed="onShowComments" />
    </div>
    <div class="issue-comment" v-if="isShownComment">
			<div v-if="repo.issues.loading">
				<skeleton-preloader
					:quantity=1
				/>
			</div>
      <issue-comment :issues="repo.issues.items" />
    </div>
    <div>
      <issue-date />
    </div>
  </div>
</template>
<script>
import IssueToggle from "./IssueToggle.vue";
import IssueComment from "./IssueComment.vue";
import IssueDate from "./IssueDate.vue";
import SkeletonPreloader from "./SkeletonPreloader.vue";
import { mapActions } from "vuex";

export default {
	name: "post-footer",
	components: {
		IssueToggle,
		IssueComment,
		IssueDate,
		SkeletonPreloader
	},
	props: {
		repo: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isShownComment: false,
			issues: []
		};
	},
	methods: {
		...mapActions({
			loadIssues: "starsModule/loadIssues"
		}),
		
		async onShowComments(isShown) {
			this.isShownComment = isShown;
			// проверяем, есть ли уже issies в store
			if (this.repo?.issues) return;
			
			await this.loadIssues(this.repo?.id);	
		},
	},
	
};
</script>
<style scoped>
.issue-toggler {
  margin-bottom: 10px;
}
.issue-comment {
  margin-bottom: 5px;
}
.post__footer-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
