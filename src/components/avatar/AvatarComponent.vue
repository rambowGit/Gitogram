/* Компонент для отображения автарки пользователя. Т.к. компонент вызывается в
других компонентах, то нужны разные стили для автарок. Поэтому испольуем :class
*/
<template>
  <div class="avatar__container" :class="isProfile ? 'profile-container' : ''">
    <div :class="isProfile ? 'profile__img' : 'avatar__img'">
      <img :src="user.pic" />
    </div>
    <div v-if="!isProfile" class="avatar__name">{{ user.name }}</div>
  </div>
</template>
<script>
export default {
  name: "avatar-component",
  props: {
    user: {
      type: Object,
      required: true,
    },
    // когда вызываем автарку для профиля
    isProfile: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
<style scoped>
.avatar__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
}

.profile-container {
  margin-right: 0;
}

.avatar__img {
  border: 2px solid #a6328d;
  border-radius: 50%;
  padding: 5px;
  /* width: 90px; */
}
.avatar__img img {
  width: 80px;
}

.profile__img img {
  width: 37px;
}

.avatar__name {
  font-size: 12px;
}
</style>
