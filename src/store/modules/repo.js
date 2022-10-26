import {
	setStarToRepo, 
	unstarRepo,
	getPopularRepos as getPopRepos,
} from "../../api/GitHub.service"; 


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
		
		getTrendingRepos(state) {
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
			state.repo.items = payload.map( item => {
				item.following = {
					status: false,
					loading: false,
					error: ""					
				};
				return item;
			});
		},
		SET_REPO_LOADING(state, payload) {
			state.repo.loading = payload;
		},
		SET_REPO_ERROR(state, payload) {
			state.repo.error = payload;
		},
		
		// мутация при клике на кнопку follow
		SET_FOLLOWING(state, payload) {
			state.repo.items = state.repo.items.map( repo => {
				if(payload.id === repo.id) {
					// заменили (смешали) то, что было на то, что передали - payload
					repo.following = {
						...repo.following,
						...payload.following
					};
				}
				// записываем в новый массив полученный объект с stars
				return repo;
			});
		},
		
		

		
	},
	actions: {
		/**
		 * 10 популярных JS репозиториев за последние 7 дней
		 * @param {*} param0 
		 */
		async getPopularRepos({commit}) {
			commit("SET_REPO_LOADING", true);
			try {
				const response = await getPopRepos();
				const data = await response.data;
				commit("SET_REPO_ITEMS", data.items);
			} catch (error) {
				commit("SET_REPO_ERROR", "Не удалось получить пользователя");
			} finally {
				commit("SET_REPO_LOADING", false);
			}
		},
		
		
		
		// поставить лайк репозиторию
		async setStar(ctx, id) {
			const { name: repo, owner } = ctx.getters.getRepoById(id);
			
			ctx.commit("SET_FOLLOWING", {
				id,
				following: {
					status: false,
					loading: true,
					error: "",
				}
			});
			
			// ставим star
			try {
			
				const resp = await setStarToRepo({owner: owner.login, repo});
				
				console.log("star resp: ", resp);
				
				ctx.commit("SET_FOLLOWING", {
					id,
					following: {
						status: true,
						loading: true,
						error: "",
					}
				});
				
			} catch (error) {
				ctx.commit("SET_FOLLOWING", {
					id,
					following: {
						loading: false,
						error: "Error while starred",
					}
				});
			} finally {
				ctx.commit("SET_FOLLOWING", {
					id,
					following: {
						loading: false,
					}
				});
			}
		},	
		
		
		// снять лайк репозиторию
		async unStar(ctx, id) {
			const { name: repo, owner } = ctx.getters.getRepoById(id);
		
			
			// снимаем star
			try {
			
				const resp = await unstarRepo({owner: owner.login, repo});
				
				console.log("unstar resp: ", resp);
				
				ctx.commit("SET_FOLLOWING", {
					id,
					following: {
						status: false,
						loading: true,
						error: "",
					}
				});
				
			} catch (error) {
				ctx.commit("SET_FOLLOWING", {
					id,
					following: {
						loading: false,
						error: "Error while starred",
					}
				});
			} finally {
				ctx.commit("SET_FOLLOWING", {
					id,
					following: {
						loading: false,
					}
				});
			}
		},	
		

		
	}
	
};