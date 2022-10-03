<template>
  <div class="post__container">
    <p class="post__name">
      {{ post.name }}
    </p>
    <p class="post__text">
      {{ post.text }}
    </p>
    <div class="reaction__container">
      <reaction-component />
    </div>
  </div>
</template>
<script>
import ReactionComponent from "../Reaction/ReactionComponent.vue";
export default {
  name: "post-content",
  components: { ReactionComponent },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.post__container {
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
.post__name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: #292929;
}
</style>
