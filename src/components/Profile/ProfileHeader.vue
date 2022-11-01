<template>
	<header-component :heigth=126>
    <template #headerLogo>
      <header-logo />
    </template>

    <template #headerMenu>
      <header-menu />
    </template>

  </header-component>
</template>

<script setup>
import HeaderComponent from "@/components/TopLine/HeaderComponent.vue";
import HeaderLogo from "@/components/TopLine/HeaderLogo.vue";
import HeaderMenu from "@/components/TopLine/HeaderMenu.vue";

</script>
<style scoped>
	
</style>