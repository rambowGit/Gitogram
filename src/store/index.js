import { createStore } from "vuex";
import repoModule from "./modules/repo";
 
export default createStore({
	modules: {
		repoModule
	}
});