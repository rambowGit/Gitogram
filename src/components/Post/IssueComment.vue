<template>
  <ul class="comment__container">
    <li class="comment__item" v-for="issue in issues" :key="issue.id">
      <div class="issue__auhtor-name">{{ issue.author }}</div>
      <div class="issue__comment">{{ issue.comment }}</div>
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
.comment__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline-start: 0;
  color: #262626;
}
.comment__item {
  list-style-type: none;
  margin-bottom: 6px;
}
.issue__auhtor-name {
  display: inline-block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  margin-right: 10px;
}
.issue__comment {
  display: inline-block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>
