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
	getters: {
		getRepoById: (state) => id => {
			state.repo.items.find((item) => item.id == id);
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
				commit("SET_REPO_ITEMS", data.items);
			} catch (error) {
				commit("SET_REPO_ERROR", "Не удалось получить пользователя");
			} finally {
				commit("SET_REPO_LOADING", false);
			}
		},


	}
};



// helper date

const getRequiredDate = (daysMinus) => {
	const weekMS = daysMinus * 24 * 60 * 60 * 1000;
	const weekAgo = new Date(Date.now() - weekMS);
	return weekAgo.toISOString().split("T")[0];
};
