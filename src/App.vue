<template>
  <div class="main__wrapper">
		<router-view />
	</div>
</template>

<script>
// import FeedPage from "./pages/FeedPage.vue";
// import SliderPage from "./pages/SliderPage.vue";

export default {
	// components: {
	// 	FeedPage,
	// 	SliderPage
	// },
	data() {
		return {
			window: {
				width: 0,
				height: 0,
			},
		};
	},
	created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	unmounted() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
			// console.log("this.window.width :", this.window.width);
			// console.log("this.window.height: ", this.window.height);
		},
	},
};
</script>

<style src="./main.css"></style>
