import FeedPage from "../pages/FeedPage.vue";
import SliderPage from "../pages/SliderPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

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
		path: "/error",
		name: "error",
		component: ErrorPage
	}

];