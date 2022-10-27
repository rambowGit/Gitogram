<template >
	<div class="main-container">
		<header></header>			
			<div class="login-container">
				<div class="logo-container">
					<img src="@/assets/img/login/Gitogram.png" alt="Gitogram" />
				</div>
				<div class="about">
					<p>
						More than just one repository.
						This is our digital world.
					</p>
				</div>
				<auth-component/>			
			</div>	
		
		<footer>
			{{footerText}}
		</footer>
	</div>

</template>
<script>
import AuthComponent from "@/components/Auth/AuthComponent.vue";

export default {
	name: "login-page",
	components: {
		AuthComponent,
	},
	data: () => {
		return {
			footerText: "© Gitogram from Loftschool"
		};
	}
};
</script>
<style scoped>
.main-container{
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	align-items: center;
	justify-content: space-between;
	background: url("../assets/img/login/back_01.png");
	background-position: bottom 20% right 20px;
	background-size: 37%;
	background-repeat: no-repeat;
}

header{
	height: 222px;
	width: 100%;
	flex: 0 0 auto;
	color: #744949;
}
.login-container {
	display: flex;
	flex-direction: column;
	justify-content:space-between;
	/* flex: 1 0 auto; */
	flex: 0 0 auto;
	align-items: center;
	width: 256px;
	height: 225px;
	align-self:flex-start;
	margin-left: 530px;

}
.logo-container {
	width: 200px;
	align-self: flex-start;
}

.about {
	width: 256px;
	height: 56px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 28px;
	color: #6F6F6F;
	text-align: left;
}
/* .login-image {
	width: 1008px;
	height:	591px;
	background: url("../assets/img/login/back_01.png") center top / cover no-repeat;
} */

footer {
	flex: 0 0 auto;
	height: 84px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	letter-spacing: -0.01px;
	color: rgba(0, 0, 0, 0.4);
	
	box-shadow: 0px -0.33px 0px rgba(60, 60, 67, 0.29);
}
	
</style>