<template >
	<div class="user-profile">
		<div class="section-header">My profile</div>

		<div class="post-profile">	
			<PostProfile 
			:post="profile"
			:avatWidth="90"
			:profilePage="true"
			/>
		</div>
	</div>
	
	
</template>
<script setup>
import PostProfile from "@/components/Post/PostProfile.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const profile = computed(() => store.state.userModule.user);

// варианты загрузки репозиториев:  all, public, private

</script>
<style scoped>
.user-profile {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}
.section-header {
	text-align: left;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 28px;
	color: #262626;
	margin-bottom: 30px;
	margin-left: 122px;
}
.post-profile {
	margin-left: 115px;
}
	
</style>