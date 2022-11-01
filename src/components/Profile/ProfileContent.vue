<template>
	<div class="container">
		<div class="profile-section">
			<ProfileSection />
		</div>
		<div class="content-section">
			<router-view />
		</div>
	</div>
	
</template>
<script setup>
import ProfileSection from "@/components/Profile/ProfileSection.vue";


</script>
<style scoped>
	.container{
		display: flex;
		height: 100%;
		margin: 0 auto;
    width: 1440px;		
		/* background-color: bisque; */
	}
	.profile-section{
		width: 500px;
		min-height: 100vh;
		border-right: 1px solid #D3D3D3;
		padding-top: 40px;

	}
	.content-section {
		width: 740px;
		margin-left: 74px;
		padding-top: 40px;
	}
</style>