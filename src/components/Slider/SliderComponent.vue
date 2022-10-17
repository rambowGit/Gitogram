<template >
	<div class="slider-wrapper">
		<div class="slider-header">
				<slider-header/> 
		</div>
		<div
			class = "slider"
			:style = "{transform: move}"
		>
			<div class="slider-container"  v-for="(repo, index) in items" :key="repo.id">
				<div class= "active-slide" v-if="index == routeParam ? true : false">
					<slide-component 
						isActive
						btnSize="big"
						:repo="items[this.routeParam]"
						:readme="readmeData"
						@onMoveLeft="transformLeft()"
						@onMoveRight="transformRight()"
					/>
				</div>
				<div v-else>
					<slide-component 
						:isActive="false"
						btnSize="middle"
						:repo="repo"
					/>
				</div>
				
			</div>
		</div>		
	</div>
</template>
<script>

import SlideComponent from "../Slider/SlideComponent.vue";
import SliderHeader from "./SliderHeader.vue";
import { mapState, mapActions } from "vuex";


export default {
	name: "slider-component",
	components: {
		SlideComponent,
		SliderHeader,
	},
	data() {
		return {
			readmeData: "",
			move: "",
			delta: 0
		};
	},
	computed: {
		routeParam() {
			return this.$route.params.id;
		},
		routeParamNext() {
			return Number(this.routeParam) + 1;
		},
		...mapState({
			items: state => state.repoModule.repo.items
		}),
	},
	methods: {
		...mapActions({
			getReadme: "repoModule/getReadme"
		}),

		async getReadmeForActiveSlide() {
			const {id, owner, name} = this.items[this.routeParam];
			// console.log(this.items[this.routeParam])
			this.readmeData = await this.getReadme({id, owner: owner.login, repo: name});
		},
		async getReadmeForNextSlide() {
			const {id, owner, name} = this.items[this.routeParamNext];
			// console.log(this.items[this.routeParam])
			this.readmeData = await this.getReadme({id, owner: owner.login, repo: name});
		},

		async transformLeft() {
			console.log("cacthed event onMoveLeft");
			this.delta = this.delta + 400;
			this.move = `translateX(${this.delta}px)`;
		},
		async transformRight(){
			console.log("cacthed event onMoveRight");
			this.delta = this.delta - 400;
			this.move = `translateX(${this.delta}px)`;
			await this.getReadmeForNextSlide();
		}
	},

	async created() {
		// console.log("active slide is: ", this.items[this.routeParam]);
		await this.getReadmeForActiveSlide();
	},
};
</script>
<style scoped>
.slider-wrapper {
	background-color: #000000;
	min-width: 100vw;
	min-height: 100vh;
	margin: 0 auto;
	padding-top: 40px;
	position: relative;
}
.slide-container {
	position: relative;
}

.slider {
	display: flex;
	position:absolute;
	left: 50%;
	margin-left: -188px;
	transition: .4s;
}
.move-left {
	
	transform: translateX(-300px);
}
.move-right {
	transition: .4s;
	transform: translateX(300px);
}
.slider-header {
	width: 100%;
	margin: 0 auto;
	margin-bottom: 55px;
}
</style>