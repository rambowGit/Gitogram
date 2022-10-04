<template>
  <div class="post-content__container">
    <div class="post-content__about">
      <p class="post-content__name">
        {{ post.name }}
      </p>
      <p ref="postText" class="post-content__text">
        {{ post.text }}
      </p>
    </div>

    <div class="reaction__container">
      <reaction-component />
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
    this.postText = this.$refs["postText"].textContent;
  },
  methods: {},
};
</script>
<style scoped>
.post-content__container {
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
.post-content__about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}
.post-content__name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: #292929;
  margin-bottom: 15px;
}
.post-content__text::first-word {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: #404040;
}
</style>
