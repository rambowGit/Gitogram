import axios from "axios";


export const repo = {
	state: {
		repo: {
			items: null,
			loading: false,
			error: ""
		}
	},
	getters: {
		getItems (state) {
			return state.repo.items;
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
				// console.log("repos: ", data.items);

				commit("SET_REPO_ITEMS", data.items);
			} catch (error) {
				commit("SET_REPO_ERROR", "Не удалось получить пользователя");
			} finally {
				commit("SET_REPO_LOADING", false);
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
