import FeedPage from "../pages/FeedPage.vue";
import SliderPage from "../pages/SliderPage.vue";

export default [
	{ path: "/", component: FeedPage },
	{ path: "/slider", component: SliderPage },
	{ path: "/slider/:id", component: SliderPage },

];