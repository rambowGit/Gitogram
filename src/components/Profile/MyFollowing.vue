<!-- Отображение лайкнутых (starred) репозиториев -->
<template >
	<div class="repos-profile">
		
		<div class="header-container">
			<div class="section-header">Following</div>
			
			<div class="repos-quantity">
				{{myFollowings?.items?.length}}
			</div>
		</div>
		
		<div v-if="myFollowings?.loading" class="spinner">
			<IconComponent name="SpinnerIcon"/>
		</div>
		
		<div v-else>
			<div v-if="myFollowings">		
				<div class="repo follow-container" v-for="profile of myFollowings?.items" :key="profile.id">
					<div class="post-profile link-following">	
						<PostProfile 
						:post="profile"
						:avatWidth="72"
						:followingPage="true"
					/>			
					</div>
					<button-component 				
						size="small"
						v-on:onFollowClick="onFollowHandler(profile.status, profile.login)"
						:loading="myFollowings.loading"
						:theme="profile.status ? 'green' : 'grey' "
						>{{profile.status ? "following" : "unfollowed"}}
					</button-component>
				</div>		
			</div>
		</div>
		

	</div>
	
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import PostProfile from "@/components/Post/PostProfile.vue";
import ButtonComponent from "@/components/Slider/ButtonComponent.vue";
import IconComponent from "@/icons/IconComponent.vue";

const store = useStore();

defineEmits(["onFollowClick"]);
const myFollowings = computed(() => store.state.userModule.user.following_users);

// подписка/отписка
const onFollowHandler = (status, login) => {
	
	if (status){
		store.dispatch("userModule/unfollowUser", login);
		console.log("status: ", status, login );
	}
		
	else 	
		store.dispatch("userModule/followUser", login);

};

//const myFollowings = computed(() => store.getters["userModule/getFollowings"]);

</script>
<style scoped>
.repos-profile {
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items:flex-start; */
}
.chips-container {
	display: flex;
	margin-bottom: 20px;
}
.chips {
	width: 76px;
	/* height: 36px; */
	border-radius: 10%;
	margin: 10px;
	font-size: 1rem;
	font-weight: normal;
	padding: 6px;
}
.red {
	background-color: rgba(209, 43, 43, 0.486);
	box-shadow: 5px 5px 5px rgba(209, 43, 43, 0.486);
	color: rgb(87, 76, 76);
}
.green {
	background-color: rgba(53, 238, 136, 0.486);
	box-shadow: 5px 5px 5px rgba(53, 238, 136, 0.486);
	color: rgb(87, 76, 76);
}
.orange {
	background-color: rgba(238, 189, 53, 0.486);
	box-shadow: 5px 5px 5px rgba(238, 189, 53, 0.486);
	color: rgb(87, 76, 76);
	
}

.header-container {
	display: flex;
	justify-content: space-between;
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
}

.repos-quantity {
	width: 12px;
	height: 28px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 28px;
	text-align: right;
	color: #9E9E9E;
	margin-right: 10px;
}
.repo {
	margin-bottom: 18px;
}
.follow-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.link-following {
	cursor: pointer;
}

/* spinner */
.spinner-container {
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
}
.spinner {
	color: #31AE54;
	display: inline-block;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>