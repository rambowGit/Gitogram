<template>
  <div class="post__footer-container">
    <div class="issue-toggler">
      <issue-toggle v-on:togglerPressed="onShowComments" />
    </div>
    <div class="issue-comment" v-if="isShownComment">
      <issue-comment :issues="issues" />
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
import {getIssuesForRepo} from "../../services/GitHub.service";

export default {
	name: "post-footer",
	components: {
		IssueToggle,
		IssueComment,
		IssueDate,
	},
	props: {
		repo: {
			type: Object,
			required: false,
		},
	},
	data() {
		return {
			isShownComment: true,
			issues: []
		};
	},
	methods: {
		onShowComments(isShown) {
			this.isShownComment = isShown;
		},
	},
	async created(){
		try {
			const { data } = await getIssuesForRepo(this.repo.owner.login, this.repo.name);
			this.issues = data;
			// console.log("issues: ", this.issues);
		} catch (error) {
			console.log(error);
		}
	}
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
