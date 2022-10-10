<template>
  <div class="post-profile__container">
    <div class="avatar">
      <avatar-component
        :userStory="story"
        :isProfile="true"
				:avatarWidth="44"
      />
    </div>
    <div class="user-name">
      {{ story.login }}
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
		story: {
			type: Object,
			required: true,
		},
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
</style>
