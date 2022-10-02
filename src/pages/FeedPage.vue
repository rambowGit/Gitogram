<template>
  <div class="top-line">
    <top-line />
  </div>
  <div class="post-container">
    <post-component />
  </div>
</template>
<script>
import TopLine from "@/components/TopLine/TopLine.vue";
import PostComponent from "@/components/Post/PostComponent.vue";

export default {
  name: "header-page",
  components: {
    TopLine,
    PostComponent,
  },
};
</script>
<style scoped>
.top-line {
  margin-bottom: 32px;
}
.post-container {
  margin: 0 auto;
  width: 980px;
}
</style>
