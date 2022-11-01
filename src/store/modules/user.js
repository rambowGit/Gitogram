import { getAuthUser } from "@/api/Auth.service";
import { loadMyRepos } from "@/api/GitHub.service";
import { getFollowing, followUser, unfollowUser } from "@/api/Follow.service";


export default{
	
	namespaced: true,

	state: {
		user: {name: "anonimous"}
	},
	
	getters: {
		getUserFromState(state) {
			return state.user;
		},
		
		getFollowings(state) {
			return state.user.following_users;
		},
		
		getFollowingByLogin: (state) => login => {
			return state.user.following_users.items.find((item) => item.login == login);
		},
	},
	
	mutations: {
		
		SET_USER(state, payload) {
			state.user = {
				...state.user,
				...payload
			};
		},
		
		SET_MY_REPOS(state, payload) {
			state.user.repos = {
				...state.user.repos,
				...payload				
			};
		},
		
		SET_FOLLOWINGS(state, payload) {
			state.user.following_users = {
				...state.user.following_users,
				...payload				
			};
		},
		
		SET_FOLLOWING_STATUS(state, payload) {
			// копия текущих followings
			const flw = state.user.following_users?.items?.concat();
			const idx = flw?.findIndex((fl) => fl.login === payload.login);
			
			const updatedFlw = flw[idx];
			console.log("updatedFlw: ", updatedFlw);
			flw[idx] = {
				...updatedFlw, 
				...payload
			};
			state.user.following_users.items = flw;	
		}
		
	},
	
	actions: {
		// получение авторизованного пользователя для логина и пр.
		async getUser(ctx) {
			const response = await getAuthUser();
			const authUser = response.data;
			ctx.commit("SET_USER", authUser);
		},
		
		logout() {
			localStorage.removeItem("token");
			window.location.reload();
		},
		
		// загрузка репозиториев авторизованного пользователя
		async loadMyrepos(ctx, level="all") {
			
			ctx.commit("SET_MY_REPOS", {
				items: [],
				loading: true,
				error: "",
			});
			
			try {
				const {data} = await loadMyRepos(level);
				
				ctx.commit("SET_MY_REPOS", {
					items: data,
					loading: true,
					error: "",
				});
		
			} catch (error) {				
				ctx.commit("SET_MY_REPOS", {
					loading: false,
					error: "Error while loading repos"					
				});
				throw Error("Error while loading repos: ", error);
			} finally {
				ctx.commit("SET_MY_REPOS", {
					loading: false,
					error: ""			
				});					
			}
		},
		
		// загрузка отслеживаемых пользователей
		async loadMyFollowings(ctx) {
			
			ctx.commit("SET_FOLLOWINGS", {
				items: [],
				loading: true,
				error: "",
			});

			try {
				const {data} = await getFollowing();
				// устанавливаем признак подписки
				data.forEach( user => user.status = true);
								
				ctx.commit("SET_FOLLOWINGS", {
					items: data,
					loading: true,
					error: "",
				});
		
			} catch (error) {				
				ctx.commit("SET_FOLLOWINGS", {
					loading: false,
					error: "Error while loading followings"					
				});
				throw Error("Error while loading followings: ", error);
			} finally {
				ctx.commit("SET_FOLLOWINGS", {
					loading: false,
					error: ""			
				});					
			}
		},	
		
		
		// подписка на пользователя
		async followUser(ctx, userName) {
			
			try {
				await followUser(userName);
				
				ctx.commit("SET_FOLLOWING_STATUS", {
					login : userName,
					loading: true,
					status: true,
					error: "",
				});				

			} catch (error) {				
				ctx.commit("SET_FOLLOWING_STATUS", {
					login : userName,
					error: "Error while trying to follow user",
				});
				throw Error("Error while trying to follow user: ", error);
			} finally {
				ctx.commit("SET_FOLLOWING_STATUS", {
					login : userName,
					status: true,
					loading: false,
					error: "",
				});			
			}
		},	
		
		// отписка от пользователя
		async unfollowUser(ctx, userName) {
			
			console.log("userNmae: ", userName);
			
			try {
				await unfollowUser(userName);
					
				ctx.commit("SET_FOLLOWING_STATUS", {
					login : userName,
					loading: true,
					status: false,
					error: "",
				});				
	
			} catch (error) {				
				ctx.commit("SET_FOLLOWING_STATUS", {
					login : userName,
					error: "Error while trying to unfollow user",
				});
				throw Error("Error while trying to unfollow user: ", error);
			} finally {
				ctx.commit("SET_FOLLOWING_STATUS", {
					login : userName,
					status: false,
					loading: false,
					error: "",
				});			
			}
		},	
		
		

	}
};

