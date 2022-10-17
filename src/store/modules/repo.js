import axios from "axios";


export default{

	namespaced: true,

	state: {
		repo: {
			items: null,
			loading: false,
			error: ""
		}
	},
	// получение из массива нужного репозитория по его индексу в массиве. Используется в SliderComponent.vue
	getters: {
		getRepoById (state) {
			if (state.repo.items)
				return state.repo.items[0];
		}
	},
	mutations: {
		SET_REPO_ITEMS(state, payload) {
			state.repo.items = payload;
		},
		SET_REPO_LOADING(state, payload) {
			state.repo.loading = payload;
		},
		SET_REPO_ERROR(state, payload) {
			state.repo.error = payload;
		}
	},
	actions: {
		/**
		 * 10 популярных JS репозиториев за последние 7 дней
		 * @param {*} param0 
		 */
		async getPopularRepos({commit}) {
			commit("SET_REPO_LOADING", true);
			try {
				const weekAgoFormated = getRequiredDate(7);
				const params = new URLSearchParams;
				params.append("q", `language:javascript created:>${weekAgoFormated}`);
				params.append("sort", "stars");
				params.append("order", "desc");
				params.append("per_page", "10");

				const response = await axios.get("https://api.github.com/search/repositories" , {
					params: params
				});
				const data = await response.data;
				console.log("repos: ", data.items);

				commit("SET_REPO_ITEMS", data.items);
			} catch (error) {
				commit("SET_REPO_ERROR", "Не удалось получить пользователя");
			} finally {
				commit("SET_REPO_LOADING", false);
			}
		},


		/**
		 * получение Readme.md
		 * @param {*} daysMinus 
		 * @returns 
		 */
		async getReadme(ctx, {id, owner , repo}) {
			id;
			const contentHeader = "application/vnd.github.v3.html+json";
			try {
				const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/readme` , {
					headers: {
						accept: contentHeader
					}
				});
				return response.data;
			} catch(e) {
				console.log(e);
			}
			
		}

	}
};



// helper date

const getRequiredDate = (daysMinus) => {
	const weekMS = daysMinus * 24 * 60 * 60 * 1000;
	const weekAgo = new Date(Date.now() - weekMS);
	return weekAgo.toISOString().split("T")[0];
};
