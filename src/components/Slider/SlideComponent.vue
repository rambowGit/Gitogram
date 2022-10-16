<template>
	<div :class="[isActive ? 'slide-wrapper' : 'wrapper-inactive']">
		<!-- left arrow -->
	<div class="arrow-left" v-if="isActive">
		<div class="arrow">
			<icon-component name="ArrowLeft" />
		</div>
	</div>
	<div :class="[isActive ? 'active' : 'inactive', 'slide-container']">
		<!-- slide box -->
		<div class="slide-header">
			<div class="p-bar">
				<progress-bar :activated="isActive" />
			</div>
			<div class="avatar-container">
				<div class="avatar-img">
				<avatar-component 
				:userStory="repo"
				:isProfile=true
				:avatarWidth="32"
			/>
			</div>
				<div class="avatar-name">
					{{repo.name}}
				</div>
			</div>
			
		</div>
	
		<div :class="[isActive ? 'slide-content' : 'slide-content--inactive']">
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
				<button-component 
				hoverText="Unfollow"
				:size="btnSize"				
				>Follow</button-component>
			</div>
		</div>	
	</div>
	<!-- right arrow -->
	<div class="arrow-right" v-if="isActive">
		<div class="arrow">
			<icon-component name="ArrowRight" />
		</div>
</div>	
	</div>	
</template>
<script>
import ProgressBar from "./ProgressBar.vue";
import ButtonComponent from "./ButtonComponent.vue";
import AvatarComponent from "../TopLine/AvatarComponent.vue";
import IconComponent from "../../icons/IconComponent.vue";
export default {
	name: "slide-component",
	components: {
		ProgressBar,
		ButtonComponent,
		AvatarComponent,
		IconComponent
	},
	props: {
		isActive: {
			type: Boolean,
			require: false
		},
		btnSize: {
			type: String,
			require: true,
			validator(value) {
				return ["big", "middle", "small"].includes(value);
			},
		}	
	},
	data() {
		return {
			repo: {
				id: 1,
				name: "Andrew",
				avatar_url: require("../../assets/img/avatars/ProfilePic_Andrew.png"),
			},
		
		};
	},
	watch: {
		btnSize(val, oldVal) {
			console.log("slide component recieve", val, oldVal);
		}
	}
};
</script>
<style scoped>
.slide-wrapper {
	/* width: 490px; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 60px;

}
.wrapper-inactive {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 130px;
	/* width: 320px; */
	/* margin: 0 38px; */
}
.slide-container {
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	margin: 0 auto;
	background-color: #fff;
}
.inactive {
	width: 300px;
	height: 538px;
	margin: 0 24px;
}
.active {
	width: 375px;
	height: 667px;
	margin: 0 38px;
}	
.slide-header {
	flex: 0 0 auto;
	height: 67px;
	border-bottom: 1px solid rgba(0, 0, 0, .2);
	/* background: #fff; */
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
	/* flex: 1 0 auto; */
	max-height: 500px;
	overflow-y: scroll;
}
.slide-content--inactive {
	background: #fafafa;
	max-height: 500px;
	overflow: hidden
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
	background-color: #fff;
}
.btn-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
	margin-bottom: 32px;
}

/* arrows */
.arrow-left {
	width: 37px;
	height: 37px;
	background: #fff;
	border-radius: 50%;
	border: 2px solid #000000;
	margin-right: 5px;
}
.arrow-right {
	width: 37px;
	height: 37px;
	background: #fff;
	border-radius: 50%;
	border: 2px solid #000000;
	color: #31AE54;
	margin-left: 5px;
}
.arrow {
	margin: 9px auto;
	width: 18px;
}
</style>
