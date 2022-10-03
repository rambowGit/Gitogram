<template>
  <div class="top-line">
    <top-line />
  </div>
  <div class="container">
    <div class="post-container">
      <post-component />
    </div>
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
  margin: 0 230px;
  /* width: 980px; */
}

/* iPad-mini */
@media only screen and (max-width: 768px) {
  .post-container {
    margin: 0 20px;
  }
}

/* iPhone */
@media only screen and (max-width: 375px) {
  .main__wrapper {
  }
  .container {
    margin: 0 auto;
    width: 768px;
    /* background-color: #2c3e50; */
  }
}
</style>
