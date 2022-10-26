<template>
	<div class="skeleton-body" v-for=" n in quantity" :key="n">
		<div class="skeleton-line--1 skeleton-animation"></div>
		<div class="skeleton-line--2 skeleton-animation"></div>
		<div class="skeleton-line--3 skeleton-animation"></div>
	</div>
		
		
</template>
<script>

export default {
	name: "skeleton-preloader",
	props: {
		quantity: {
			type: Number,
			required: false,
			default: 1
		}
	}
};
</script>
<style scoped>
/* skeleton */
.skeleton-head {
	margin-bottom: 18px;
}
.skeleton-body {
	margin-bottom: 18px;
}	


.skeleton-line--1 {
	width: 504px;
	height: 22px;
	background: linear-gradient(270deg, #FFFFFF -50%, rgba(255, 255, 255, 0) 100%), #EAEAEA;
	border-radius: 4px;
	margin: 10px;	
}
.skeleton-line--2 {
	width: 298px;
	height: 22px;
	background: linear-gradient(270deg, #FFFFFF -50%, rgba(255, 255, 255, 0) 100%), #EAEAEA;
	border-radius: 4px;
	margin: 10px;
}
.skeleton-line--3 {
	width: 216px;
	height: 22px;
	background: linear-gradient(270deg, #FFFFFF -50%, rgba(255, 255, 255, 0) 100%), #EAEAEA;
	border-radius: 4px;
	margin: 10px;
}

.skeleton-animation {
	background: linear-gradient(        
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
  lightgray;
  background-repeat: repeat-y;        
  background-size: 50px 200px;        
  background-position: 0 0;  
	animation: gradient 5s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>