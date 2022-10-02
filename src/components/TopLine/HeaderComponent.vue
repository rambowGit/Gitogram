// шапка сайта. См. App.vue
<template>
  <header class="header__wrapper">
    <div class="header__container">
      <div class="header--top">
        <slot name="headerLogo"></slot>
        <slot name="headerMenu"></slot>
      </div>

      <slot name="stories"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-component",
};
</script>

<style scoped>
.header__wrapper {
  background: #fafafa;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
}
.header__container {
  width: 1200px;
  height: 228px;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  margin: 0 auto;
}
.header--top {
  /* padding: 0 120px; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
}
</style>
