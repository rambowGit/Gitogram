import FeedPage from "@/pages/FeedPage.vue";
import SliderPage from "@/pages/SliderPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";
import ProfilePage from "@/pages/ProfilePage";
import MyRepos from "@/components/Profile/MyRepos";
import MyFollowing from "@/components/Profile/MyFollowing";

export default [
	{ 
		path: "/", 
		name: "feeds",
		component: FeedPage 
	},
	{ 
		path: "/slider",
		name: "slider",
		component: SliderPage 
	},
	{ 
		path: "/slider/:id",
		component: SliderPage 
	},
	{
		path: "/auth",
		name: "auth",
		component: LoginPage
	},
	{
		path: "/profile",
		// name: "profile",
		component: ProfilePage,
		children: [
			{
				path: "",
				component: MyRepos,
			},
			{
				path: "following",
				name: "following",
				component: MyFollowing,
			},
		],
	},
	{
		path: "/error",
		name: "error",
		component: ErrorPage
	}

];