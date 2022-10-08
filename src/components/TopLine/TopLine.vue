<template>
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
</template>
<script>
import HeaderComponent from "./HeaderComponent.vue";
import StoriesComponent from "./StoriesComponent.vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderMenu from "./HeaderMenu.vue";

export default {
	name: "top-line",
	components: {
		HeaderComponent,
		StoriesComponent,
		HeaderLogo,
		HeaderMenu,
	},
};
</script>
<style scoped></style>
