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
		async getReadme(ctx, {id, owner , repo}) {
			
			const contentHeader = "application/vnd.github.v3.html+json";
			try {
				const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/readme` , {
					headers: {
						accept: contentHeader
					}
				});
				
				ctx.commit("repoModule/SET_README", {id, content: response.data}, { root: true });

				return response.data;
			} catch(e) {
				console.log(e);
				ctx.commit("SET_README_ERROR", "Не удалось получить readme");
			} finally {
				ctx.commit("SET_README_LOADING", false);
			}
			
		}

	}
};

