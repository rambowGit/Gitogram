import axios from "axios";

// получение отслеживаемых пользователей
export async function getFollowing() {
	
	try {
		if (!localStorage.getItem("token")) {
			throw Error("Auth error: please login");
		}
		
		return axios({
			method: "get",
			url: "https://api.github.com/user/following",
			// headers: {
			// 	"Authorization": `token ${localStorage.getItem("token")}`
			// }
		});
	} catch (e) {
		console.log("getFollowing: ", e);
	}
}

// подписка на пользователя
export async function followUser(userName) {
	
	try {
		if (!localStorage.getItem("token")) {
			throw Error("Auth error: please login");
		}
		
		return axios({
			method: "put",
			url: `https://api.github.com/user/following/${userName}`,
			headers: {
				// "Authorization": `token ${localStorage.getItem("token")}`
				"Accept": "application/vnd.github+json"
			}
		});
	} catch (e) {
		console.log("followUser: ", e);
	}
}

// отписка от пользователя
export async function unfollowUser(userName) {
	
	try {
		if (!localStorage.getItem("token")) {
			throw Error("Auth error: please login");
		}
		
		return axios({
			method: "delete",
			url: `https://api.github.com/user/following/${userName}`,
			headers: {
				// "Authorization": `token ${localStorage.getItem("token")}`
				"Accept": "application/vnd.github+json"
			}
		});
	} catch (e) {
		console.log("unfollowUser: ", e);
	}
}

