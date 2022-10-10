<template>
  <ul class="comment-container">
    <li class="comment-item" v-for="issue in issues" :key="issue.id">
      <div class="issue-auhtor">{{ issue?.user.login }}</div>
      <div class="issue-comment">{{ issue?.title }}</div>
    </li>
  </ul>
</template>
<script>
export default {
	name: "issue-comment",
	props: {
		issues: {
			type: Array,
			required: false,
		},
	},
};
</script>
<style scoped>
.comment-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 0;
  color: #262626;
}
.comment-item {
  list-style-type: none;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.issue-auhtor {
  /* display: inline-block; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  margin-right: 10px;
}
.issue-comment {
  /* display: inline-block; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: start;
}
</style>
