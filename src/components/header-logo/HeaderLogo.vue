// логотип в шапке сайта
<template lang="">
  <div class="logo__container">
    <img src="../../assets/img/logo/logo.png" alt="logo" />
  </div>
</template>
<script>
export default {
  name: "header-logo",
};
</script>
<style scoped>
.logo__container {
  display: inline-block;
  height: 100%;
}
.logo__container img {
  width: 175px;
  height: 35px;
  vertical-align: middle;
}
</style>
