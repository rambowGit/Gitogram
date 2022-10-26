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
						@onMoveLeft="transformLeft"
						@onMoveRight="transformRight"						
						@onFollow="starRepo"
						:isReadmeLoading="loading"
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
import { mapActions, mapGetters } from "vuex";


export default {
	name: "slider-component",
	components: {
		SlideComponent,
		SliderHeader,
	},
	data() {
		return {
			loading: false,
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
		// ...mapState({
		// 	repos: state => state.repoModule.repo.items,
		// }),		
		...mapGetters({
			getReadmeById: "readmeModule/getReadmeById",
			repos: ["getUnstarredRepos"]
			// repos: "repoModule/getTrendingRepos"
			
		})
	},
	methods: {		
		...mapActions({
			getReadme: "readmeModule/getReadme",
			setStar: "repoModule/setStar",
			unStar: "repoModule/unStar"
		}),
		starRepo(id, status) {
			// console.log("status: ", status);
			status ? this.unStar(id) : this.setStar(id);
		},
		// readme для активного слайда
		async getReadmeForActiveSlide(routeParam) {			
			this.loading = true;
			const {id, owner, name} = this.repos[routeParam];
			
			// получаем и записываем в store
			await this.getReadme({id, owner: owner.login, repo: name});
			this.loading = false;
		},
		
		// листаем слайды влево
		async transformLeft() {
			this.delta = this.delta + this.shiftValue;
			this.move = `translateX(${this.delta}px)`;
			await this.getReadmeForActiveSlide(this.routeParamPrev);
		},
		
		// листаем слайды вправо
		async transformRight(){
			this.delta = this.delta - this.shiftVAlue;
			this.move = `translateX(${this.delta}px)`;
			await this.getReadmeForActiveSlide(this.routeParamNext);
		}
	},

	async created() {
		await this.getReadmeForActiveSlide(this.routeParam);
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
	/* opacity: .5; */
}
.active-slide {

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