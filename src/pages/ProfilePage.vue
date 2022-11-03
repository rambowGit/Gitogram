<template>
	<div class="profile-header">
		<ProfileHeader :heigth=126 />
	</div>
	<div>
		<ProfileContent />
	</div>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import ProfileHeader from "@/components/Profile/ProfileHeader.vue";
import ProfileContent from "@/components/Profile/ProfileContent.vue";



// get auth user
const store = useStore();


onMounted(async () => {
	// загруженный пользователь через getter вызывается в <header-menu/>
	await store.dispatch("userModule/getUser");
	
	// загрузка списка репозиториев для профиля пользователя
	await store.dispatch("userModule/loadMyrepos");	
	
	// загрузка отслеживаемых пользователей
	await store.dispatch("userModule/loadMyFollowings");
});


</script>
<style scoped>
.profile-header {
	
}
	
</style>