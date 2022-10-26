import { createStore } from "vuex";
import repoModule from "./modules/repo";
import readmeModule from "./modules/readme";
import userModule from "./modules/user";
import starsModule from "./modules/stars";

 
export default createStore({
	getters: {
		getUnstarredRepos(state) {				
			if (!localStorage.getItem("token")) 
				return;			 		
			const popularRepos = state.repoModule.repo.items;
			const starredRepos = state.starsModule.repo.items;
			return popularRepos.filter( (repo) => !starredRepos.some( (starredRepo) => starredRepo.id === repo.id));	
			
		}
	},
	modules: {
		repoModule,
		readmeModule,
		userModule,
		starsModule
	}
});