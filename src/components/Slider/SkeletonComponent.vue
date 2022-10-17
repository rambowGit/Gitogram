<template>
	<div class="skeleton-head">
		<div class="skeleton-rectangle"></div>
	</div>
	<div class="skeleton-body" v-for=" n in quantity" :key="n">
		<div class="skeleton-line--1"></div>
		<div class="skeleton-line--2"></div>
		<div class="skeleton-line--3"></div>
	</div>
		
		
</template>
<script>
export default {
	name: "skeleton-component",
	props: {
		quantity: {
			type: Number,
			required: false,
			default: 1
		}
	}
};
</script>
<style>
/* skeleton */
.skeleton-head {
	margin-bottom: 18px;
}
.skeleton-body {
	margin-bottom: 18px;
}	
.skeleton-rectangle {
	width: 266px;
	height: 136px;
	background: #DEDEDE;
	border-radius: 4px;
	margin: 18px;
}

.skeleton-line--1 {
	width: 177px;
	height: 14px;
	background: #DEDEDE;
	border-radius: 4px;
	margin: 18px;
}
.skeleton-line--2 {
	width: 218px;
	height: 14px;
	background: #DEDEDE;
	border-radius: 4px;
	margin: 18px;
}
.skeleton-line--3 {
	width: 139px;
	height: 14px;
	background: #DEDEDE;
	border-radius: 4px;
	margin: 18px;
}
</style>