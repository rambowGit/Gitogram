<template>
  <div class="post-footer__container">
    <div class="issue__toggler">
      <issue-toggle v-on:togglerPressed="onShowComments" />
    </div>
    <div class="issue__comment" v-if="isShownComment">
      <issue-comment :issues="post.issues" />
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

export default {
	name: "post-footer",
	components: {
		IssueToggle,
		IssueComment,
		IssueDate,
	},
	props: {
		post: {
			type: Object,
			required: false,
		},
	},
	data() {
		return {
			isShownComment: true,
		};
	},
	methods: {
		onShowComments(isShown) {
			this.isShownComment = isShown;
		},
	},
};
</script>
<style scoped>
.issue__toggler {
  margin-bottom: 10px;
}
.issue__comment {
  margin-bottom: 5px;
}
.post-footer__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
