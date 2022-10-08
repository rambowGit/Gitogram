<template>
  <div class="toogler__container" @click="toggleHandler">
    <div class="toggler-text">
      {{ isShown ? "Hide issues" : "View issues" }}
    </div>
    <button class="toggler" :class="{ 'toggler--rotated': !isShown }">
      <div class="toggler-btn">
        <icon-component name="TogglerIcon" />
      </div>
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
		toggleHandler() {
			this.isShown = !this.isShown;
			this.$emit("togglerPressed", this.isShown);
		},
	},
};
</script>
<style scoped>
.toogler__container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}
.toggler-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #292929;
  margin-right: 5px;
}
.toggler-btn {
  width: 10px;
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
