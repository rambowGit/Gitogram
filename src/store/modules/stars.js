import { getStarredRepos as getStarsRepos} from "../../api/Stars.service"; 
import { getIssuesForRepo } from "../../api/GitHub.service"; 


export default{

	namespaced: true,

	state: {
		repo: {
			items: null,
			loading: false,
			error: ""
		}
	},
	getters: {
		getRepoById: (state) => id => {
			return state.repo.items.find((item) => item.id == id);
		},
		
		getStarredRepos(state) {
			return state.repo.items;		 
		}	
	},
	mutations: {
		SET_README(state, payload) {
			state.repo.items = state.repo.items.map( repo => {
				if (payload.id == repo.id) {
					repo.readme = payload.content;
				}
				return repo;
			});
		},
		SET_REPO_ITEMS(state, payload) {
			state.repo.items = payload;
		},
		SET_REPO_LOADING(state, payload) {
			state.repo.loading = payload;
		},
		SET_REPO_ERROR(state, payload) {
			state.repo.error = payload;
		},
		
		// мутация для записи issues в лайкнутые репо
		SET_ISSUES_FOR_REPO(state, payload) {			
			
			state.repo.items = state.repo.items.map( repo => {
				if(payload.id === repo.id) {
					// заменили (смешали) то, что было на то, что передали - payload
					repo.issues = {
						...repo.issues,
						...payload.issues
					};
				}
				
				// записываем в новый массив полученный объект с issues
				return repo;
			});
			
		}
		
	},
	actions: {
		/**
		 * получить лайкнутые репозитории
		 * @param {*} param0 
		 */
		async loadStarredRepos({commit}) {
			commit("SET_REPO_LOADING", true);
			try {
				const response = await getStarsRepos();
				const data = await response.data;
				// сразу добавим пустой объект issues issues для каждого репозитория
				data.forEach(repo => repo.issues={});
				
				commit("SET_REPO_ITEMS", data);
			} catch (error) {
				commit("SET_REPO_ERROR", "Не удалось получить репозитории");
			} finally {
				commit("SET_REPO_LOADING", false);
			}
		},
		
		/**
		 * получение issues для репозитория
		 */
		async loadIssues (ctx, id){			
			ctx.getters.getRepoById(id);			
			const { name, owner } = ctx.getters.getRepoById(id);
					
			ctx.commit("SET_ISSUES_FOR_REPO", {
				id,
				issues: {
					items: [],
					loading: true,
					error: "",
				}
			});
					
			// загружаем issues
			try {
				const { data } =  await getIssuesForRepo({repoOwner: owner.login, repoName: name});
				ctx.commit("SET_ISSUES_FOR_REPO", {
					id,
					issues: {
						items: data,
					}
				});
			} catch (error) {
				ctx.commit("SET_ISSUES_FOR_REPO", {
					id,
					issues: {
						error: "Error whle loadind issues",
					}
				});
				throw Error(" Error whle loadind issues: ", error);
			} finally {
				ctx.commit("SET_ISSUES_FOR_REPO", {
					id,
					issues: {
						loading: false,
					}
				});
			}
					
		}
				
		

	}
};

