import { getAuthUser } from "../../api/Auth.service";


export default{
	
	namespaced: true,

	state: {
		user: {name: "anonimous"}
	},
	getters: {
		getUserFromState(state) {
			return state.user;
		}
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload ;
		},
		
	},
	actions: {
		async getUser(ctx) {
			const response = await getAuthUser();
			const authUser = response.data;
			ctx.commit("SET_USER", authUser);
		},
		
		logout() {
			localStorage.removeItem("token");
			window.location.reload();
		}
	}
};

