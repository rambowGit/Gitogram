// шапка сайта. См. App.vue
<template>
	<div class="header">
		<div class="logo" @click="this.$router.push('/')">
			<img src="../../assets/img/logo/logo_white.png" alt="logo" />
		</div>
		<button class="close-btn">
			<icon-component name="CloseIcon" @click="this.$router.push('/')"/>
		</button>
 </div>
</template>

<script>
import IconComponent from "../../icons/IconComponent.vue";
export default {
	name: "slider-header",
	components: {
		IconComponent
	}

};
</script>

<style scoped>
.header {
	width: 1200px;
	height: 45px;
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
}
.logo {
	display: inline-block;
  height: 100%;
	cursor: pointer;
}
.logo img {
	width: 175px;
  vertical-align: middle;
}
.close-btn {
	width: 22px;
	height: 22px;
	margin: 8px 0;
	vertical-align: middle;
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
  .header__container {
    max-width: 375px;
    height: 187px;
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
</style>
