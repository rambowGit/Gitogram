<template>
  <div style="margin: 50px">
    <progress-bar />
  </div>
  <div>
    <button-component hoverText="Unfollow">Follow</button-component>
  </div>
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import ButtonComponent from "./ButtonComponent.vue";
export default {
	name: "slide-component",
	components: {
		ProgressBar,
		ButtonComponent
	}
};
</script>
<style></style>
