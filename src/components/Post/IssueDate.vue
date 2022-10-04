<template>
  <time class="issue__date">
    {{ issueDate }}
  </time>
</template>
<script>
export default {
  name: "issue-date",
  data() {
    return {
      issueDate: "15 may",
    };
  },
};
</script>
<style>
.issue__date {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.4);
}
</style>
