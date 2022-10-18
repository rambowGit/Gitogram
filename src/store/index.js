import { createStore } from "vuex";
import repoModule from "./modules/repo";
import readmeModule from "./modules/readme";
 
export default createStore({
	modules: {
		repoModule,
		readmeModule
	}
});