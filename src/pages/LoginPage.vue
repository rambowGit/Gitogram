<template >
	<div class="container">
		<header></header>
		<div class="login-container">
			<AuthComponentVue/>
		<div class="login-image">	</div>
		</div>
		
		<footer></footer>
	</div>

</template>
<script>
import AuthComponentVue from "@/components/Auth/AuthComponent.vue";

export default {
	name: "login-page",
	components: {
		AuthComponentVue,
	}
};
</script>
<style scoped>
.container{
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100vw;
	height: 100vh;
	/* background: rgb(121, 69, 69); */
	
}

header{
	height: 222px;
}
.login-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 142px;
}
.login-image{
	width: 1008px;
	height:	591px;
	background: url("../assets/img/login/back_01.png") center top / cover no-repeat;
}
	
</style>