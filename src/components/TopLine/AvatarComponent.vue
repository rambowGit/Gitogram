/* Компонент для отображения автарки пользователя. Т.к. компонент вызывается в
других компонентах, то нужны разные стили для автарок. Поэтому испольуем :class
*/
<template>
  <button
    class="avatar"
    :class="isProfile ? 'profile-container' : 'avatar-container'"
    @click="onPress"
  >
    <div 
		:class="isProfile ? 'profile__img' : 'avatar__img'"
		:style="{width: avatarWidth + 'px', height: avatarWidth + 'px'}"
		>
      <img :src="userStory.avatar_url" />
    </div>    
  </button>
	<div v-if="!isProfile" class="avatar__name">{{ username }}</div>
</template>
<script>
export default {
	name: "avatar-component",
	emits: ["onPressUserStory"],
	props: {
		avatarWidth: {
			type: Number,
			default: 80,
			required: false
		},
		userStory: {
			type: Object,
			required: true,
		},
		username: {
			type: String,
			required: false,
		},
		// когда вызываем автарку для профиля
		isProfile: {
			type: Boolean,
			required: false,
		},
	},
	methods: {
		onPress() {
			this.$emit("onPressUserStory");
		},
	},
	mounted() {
		// console.log("userStory ", this.userStory);
	}
};
</script>
<style scoped>
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  /* обнуление св-в кнопки */
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

.profile-container {
  margin-right: 0;
}
.avatar-container {
	border: 2px solid #a6328d;
  border-radius: 50%;
  padding: 5px;
	margin-bottom: 5px;
  transition: 0.3s;
}

.avatar-container:hover {
	border-color: #fafafa;
}

.avatar__img {
	overflow: hidden;
	position: relative;
}
.profile__img {
	overflow: hidden;
	position: relative;
}
img {
  /* width: 100%;
  height: 100%;
  object-fit: cover; */
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.profile__img {
	overflow: hidden;
	position: relative;
  width: 37px;
}

.avatar__name {
  font-size: 12px;
	max-width: 100px;
	overflow: hidden;
}

/* iPad-mini */
@media only screen and (max-width: 768px) {
  .avatar__container {
    margin-right: 12px;
  }
}

/* iPhone */
@media only screen and (max-width: 375px) {
  .main__wrapper {
  }
  .container {
    margin: 0 auto;
    width: 768px;
    /* background-color: #2c3e50; */
  }
}
</style>
