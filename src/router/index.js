import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { getAuthUser } from "../api/Auth.service";

const router = createRouter({
	history: createWebHashHistory(),
	routes, 
});	


router.beforeEach(async (to, from, next) => {
	const authRoute = to.name === "auth";
		
	try {		
		await getAuthUser();
		next(authRoute ? { name: "feeds" } : null);
	} catch (e) {
		if (e.response.status === 401){
			next(authRoute ? null : { name: "auth" });
		}	else {
			next({name: "error"});
		}
	}
});

export default router;