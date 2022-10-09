<template>
	<div class="slide-container">
		<div class="slide-header">
			<div class="p-bar">
				<progress-bar />
			</div>
			<div class="avatar-container">
				<div class="avatar-img">
				<avatar-component 
				:userStory="user"
				:isProfile=true
				:avatarWidth="32"
			/>
			</div>
				<div class="avatar-name">
					{{user.name}}
				</div>
			</div>
			
		</div>
		<div class="slide-content">
			<div class="slide-img">
				<img src="../../assets/img/slider/slide_main_img.png" alt="main image"/>
			</div>
			<div class="slide-text">
				<p>
					<strong>The easiest</strong> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from 
					CLI and follow the instructions.
				</p>
				<p>
				For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. 
				We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
				</p>
				<p>
					In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, 
					and completed porting ContentPage from Xamarin.Forms
				</p>
				<p>
					For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. 
					We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.
				</p>	
			</div>
		</div>		
		<div class="slide-footer">
			<div class="btn-container">
				<button-component hoverText="Unfollow">Follow</button-component>
			</div>
		</div>		
	</div>
  
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import ButtonComponent from "./ButtonComponent.vue";
import AvatarComponent from "../TopLine/AvatarComponent.vue";
export default {
	name: "slide-component",
	components: {
		ProgressBar,
		ButtonComponent,
		AvatarComponent
	},
	data: function () {
		return {
			user: {
				id: 1,
				name: "React.reposit",
				pic: require("../../assets/img/avatars/ProfilePic_Andrew.png"),
			},			
		};
	}
};
</script>
<style scoped>
.slide-container {
	display: flex;
	flex-direction: column;
	width: 375px;
	height: 667px;
	border-radius: 8px;
	margin: 15px auto;
	background-color: #fff;
}	
.slide-header {
	flex: 0 0 auto;
	height: 67px;
	border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.p-bar {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 8px 8px 12px 8px;
}
.avatar-container {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.avatar-img {
	margin: 0 12px;
}
.avatar-name {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 22px;
	color: #292929;
}
.slide-content {
	background: #fafafa;
	flex: 1 0 auto;
	max-height: 500px;
	overflow-y: scroll;

}
.slide-text {
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 160%;
	color: #404040;
	text-align: start;
}
p {
	margin: 0;
	padding: 20px 20px 0 20px;
	text-align: start;
}
.slide-footer {
	height: 100px;
	flex: 0 0 auto;
}
.btn-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	margin-bottom: 32px;
}
</style>
