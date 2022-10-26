import { getReadmeForRepo } from "../../api/GitHub.service";


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
			
			try {		
				const readme = await getReadmeForRepo(owner, repo);
				// вызываем мутацию в соседнем модуле, записывая Readme в объект repo соседнего стора
				ctx.commit("repoModule/SET_README", {id, content: readme.data}, { root: true });
				// ctx.commit("starsModule/SET_README", {id, content: readme.data}, { root: true });

				return readme.data;
			} catch(e) {
				console.log(e);
				ctx.commit("SET_README_ERROR", "Не удалось получить readme");
			} finally {
				ctx.commit("SET_README_LOADING", false);
			}
			
		}

	}
};

