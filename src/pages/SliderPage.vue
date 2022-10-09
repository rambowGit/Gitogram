<template>
	<div class="slider-wrapper">
		<slide-component/>
	</div>
</template>
<script>
import SlideComponent from "../components/Slider/SlideComponent.vue";
export default {
	name: "slider-page",
	components: { SlideComponent }
};
</script>
<style scoped>
	.slider-wrapper {
		background: #292929;
		width: 100%;
		min-height: 100%;
	}
	
</style>