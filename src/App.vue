<template>
  <div class="main__wrapper">
    <div class="container">
      <header-component>
        <template #headerLogo>
          <header-logo />
        </template>

        <template #headerMenu>
          <header-menu />
        </template>

        <template #stories>
          <stories-component />
        </template>
      </header-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue";
import StoriesComponent from "./components/stories/StoriesComponent.vue";
import HeaderLogo from "./components/header-logo/HeaderLogo.vue";
import HeaderMenu from "./components/header-menu/HeaderMenu.vue";

export default {
  components: {
    HeaderComponent,
    StoriesComponent,
    HeaderLogo,
    HeaderMenu,
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
}
ul {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main__wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 1440px;
  overflow: hidden;
}
.container {
  margin: 0 auto;
  width: 1440px;
}
</style>
