<template >
	<div class="slider-wrapper">
		<div class="slider-header">
				<slider-header/> 
		</div>
		<div
			class = "slider"
			:style = "{transform: move}"
		>
			<div class="slider-container"  v-for="(repo, index) in repos" :key="repo.id">
				<div class= "active-slide" v-if="index == routeParam ? true : false">
					<!-- <pre>prop -> {{readmes[0]}}</pre> -->
					<slide-component 
						:isActive=true
						btnSize="big"
						:repo="activeSlideRepo"
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
import { mapState, mapActions, mapGetters } from "vuex";


export default {
	name: "slider-component",
	components: {
		SlideComponent,
		SliderHeader,
	},
	data() {
		return {
			readmeData: {},
			shiftVAlue: 350
		};
	},
	computed: {
		routeParam() {
			return this.$route.params.id;
		},
		routeParamNext() {
			return Number(this.routeParam) + 1;
		},
		routeParamPrev() {
			return Number(this.routeParam) - 1;
		},
		delta(){
			return Number(this.routeParam) * this.shiftVAlue;
		},
		move() {
			return `translateX(-${this.delta}px)`;
		} ,
		activeSlideRepo() {
			return this.repos[this.routeParam];
		},
		...mapState({
			repos: state => state.repoModule.repo.items,
		}),		
	},
	methods: {
		...mapGetters({
			getReadmeById: "readmeModule/getReadmeById"
		}),
		...mapActions({
			getReadme: "readmeModule/getReadme"
		}),
		// readme для активного слайда
		async getReadmeForActiveSlide() {
			const {id, owner, name} = this.repos[this.routeParam];
			// получаем и записываем в store
			await this.getReadme({id, owner: owner.login, repo: name});
		},

		// readme для след. слайда
		async getReadmeForNextSlide(routeParam) {
			const {id, owner, name} = this.repos[routeParam];
			// получаем и записываем в store
			this.readmeData = await this.getReadme({id, owner: owner.login, repo: name});
		},
		// листаем слайды влево
		async transformLeft() {
			this.delta = this.delta + this.shiftValue;
			this.move = `translateX(${this.delta}px)`;
			await this.getReadmeForNextSlide(this.routeParamPrev);
		},
		// листаем слайды вправо
		async transformRight(){
			this.delta = this.delta - this.shiftVAlue;
			this.move = `translateX(${this.delta}px)`;
			await this.getReadmeForNextSlide(this.routeParamNext);
		}
	},
	async created() {
		await this.getReadmeForActiveSlide();
		console.log (typeof this.readmes[0]);
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