import axios from "axios";


export default{

	namespaced: true,

	state: {
		readme: {
			items: [],
			loading: false,
			error: ""
		}
	},
	// получение из массива нужного репозитория по его индексу в массиве. Используется в SliderComponent.vue
	getters: {
		getReadmeById: (state) => id => {
			state.readme.items.forEach(element => {
				console.log(element.repoId, id, element.repoId == id);
			}); 
		}
	},
	mutations: {
		SET_README_ITEMS(state, payload) {
			state.readme.items.push(payload) ;
		},
		SET_README_LOADING(state, payload) {
			state.readme.loading = payload;
		},
		SET_README_ERROR(state, payload) {
			state.readme.error = payload;
		}
	},
	actions: {
		
		/**
		 * получение Readme.md
		 * @param {*} daysMinus 
		 * @returns 
		 */
		async getReadme(state, {repoId, owner , repo}) {
			const contentHeader = "application/vnd.github.v3.html+json";
			try {
				const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/readme` , {
					headers: {
						accept: contentHeader
					}
				});
				state.commit("SET_README_ITEMS", {
					repoId,
					readmeHtml: response.data
				});

				// console.log("getter ", state.getters.getReadmeById(552569233));

				return response.data;
			} catch(e) {
				console.log(e);
				state.commit("SET_README_ERROR", "Не удалось получить readme");
			} finally {
				state.commit("SET_README_LOADING", false);
			}
			
		}

	}
};

