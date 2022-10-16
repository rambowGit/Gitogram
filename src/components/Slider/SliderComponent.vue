<template >
	<div class="slider-wrapper">
		<div class="slider-header">
				<slider-header/> 
		</div>
		<div class="slider">
			<div class="slider-container"  v-for="(n, index) in 10" :key="n">
				<div v-if="index+1 == 2 ? true : false">
					<slide-component 
						isActive
						btnSize="big"
					/>
				</div>
				<div v-else>
					<slide-component 
						:isActive="false"
						btnSize="middle"
					/>
				</div>
				
			</div>
		</div>		
	</div>
</template>
<script>

import SlideComponent from "../Slider/SlideComponent.vue";
import SliderHeader from "./SliderHeader.vue";


export default {
	name: "slider-component",
	components: {
		SlideComponent,
		SliderHeader,
	}	
};
</script>
<style scoped>
.slider-wrapper {
	background-color: #000000;
	min-width: 100vw;
	min-height: 100vh;
	margin: 0 auto;
	padding-top: 40px;
}
.slider {
	display: flex;

}
.slider-header {
	width: 100%;
	margin: 0 auto;
	margin-bottom: 55px;
}
</style>