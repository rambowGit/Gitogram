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
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: center;
}

/* iPad-mini */
@media only screen and (max-width: 768px) {
  .header__container {
    max-width: 768px;
    height: 262px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding-top: 40px;
    margin: 0 20px;
  }
  .header--top {
    margin-right: 25px;
    margin-bottom: 30px;
    padding-top: 30px;
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
