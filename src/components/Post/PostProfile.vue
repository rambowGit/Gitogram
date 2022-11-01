<template>
  <div class="post-profile__container">
    <div class="avatar">
      <avatar-component
        :userStory="post"
        :isProfile="true"
				:avatarWidth="avatWidth"
      />
    </div>
    <div class="user-name profile-info">
      <div v-if="!followingPage" class="login">
				{{ post.login }}
			</div>
			<div v-else class="login">
				<a v-bind:href="post.html_url" target="_blank">{{ post.login }}</a>
			</div>
			<!-- только для страницы профиля /profile -->
			<div v-if="profilePage">
				<div class="counters">
					<span class="counter">{{post.followers}}&nbsp;</span>followers <span class="counter">{{post.following}}&nbsp;</span>
					<router-link :to="{name: 'following'}">following</router-link>
				</div>
				<div class="full-name">
					{{ post.name }}
				</div>
			</div>
			<!-- только для страницы following -->
			<div v-if="followingPage">
				<div class="profile-type">
					{{post.type}}
				</div>
			</div>
    </div>
	
		
  </div>
</template>
<script>
import AvatarComponent from "@/components/TopLine/AvatarComponent.vue";

export default {
	name: "post-profile",
	components: {
		AvatarComponent,
	},
	props: {
		post: {
			type: Object,
			required: true,
		},
		avatWidth: {
			type: Number,
			required: false,
			default: 44
		},
		profilePage: {
			type: Boolean
		},
		followingPage: {
			type: Boolean
		}
	},
};
</script>
<style scoped>
.post-profile__container {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.avatar {
  margin-right: 15px;
}
.user-name {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.1px;
  color: #262626;
}
.profile-info {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.login {
	margin-bottom: 8px;
}
.login > a {
	text-decoration: none;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: -0.1px;
	color: #262626;
}
.counters {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	text-align: center;
	letter-spacing: -0.1px;
	color: #404040;
	margin-bottom: 8px;
}
.counter {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 21px;
	text-align: center;
	letter-spacing: -0.3px;
	color: #262626;
}
.full-name {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #9E9E9E;
	text-align: left;
}
.profile-type {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: #9E9E9E;
}
</style>
