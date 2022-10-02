<template>
  <div class="toogler__container">
    <div class="toggler__text">
      {{ isShown ? "Hide issues" : "View issues" }}
    </div>
    <button
      class="toggler"
      @click="onToggle"
      :class="{ 'toggler--rotated': !isShown }"
    >
      <icon-component name="TogglerIcon" size="10px" />
    </button>
  </div>
</template>
<script>
import IconComponent from "@/icons/IconComponent.vue";
export default {
  name: "issue-toggle",
  components: {
    IconComponent,
  },
  data() {
    return {
      isShown: true,
    };
  },
  methods: {
    onToggle() {
      this.isShown = !this.isShown;
      console.log(this.isShown);
    },
  },
};
</script>
<style scoped>
.toogler__container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.toggler__text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #292929;
  margin-right: 5px;
}
.toggler {
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  /* margin-bottom: 5px; */
}
.toggler--rotated {
  transform: rotate(180deg);
  margin-bottom: 0;
}
</style>
