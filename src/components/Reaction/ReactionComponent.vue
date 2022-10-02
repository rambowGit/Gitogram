<template>
  <div class="reaction__container">
    <div class="reaction__list">
      <div class="reaction__item star">
        <icon-component name="StarIcon" size="14px">Star</icon-component>
      </div>
      <div class="reaction__item star">156K</div>
      <div class="reaction__item fork">
        <icon-component name="ForkIcon" size="14px">Fork</icon-component>
      </div>
      <div class="reaction__item fork">4</div>
    </div>
  </div>
</template>
<script>
import IconComponent from "@/icons/IconComponent.vue";

export default {
  name: "reaction-component",
  components: {
    IconComponent,
  },
};
</script>
<style scoped>
ul {
  padding-inline-start: 0;
}
.reaction__list {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.reaction__item {
  color: #262626;
  margin-right: 10px;
  min-width: 24px;
}
.star {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #24292e;
}
.fork {
  /* font-family: "SF Pro Text"; */
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;

  display: flex;
  align-items: center;
  color: #24292e;
}
</style>
