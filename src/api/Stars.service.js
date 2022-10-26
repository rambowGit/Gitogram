import axios from "axios";

// получение лайкнутых репозиториев
export async function getStarredRepos() {
	
	try {
		if (!localStorage.getItem("token")) {
			throw Error("Auth error: please login");
		}
		
		return axios({
			method: "get",
			url: "https://api.github.com/user/starred",
			// headers: {
			// 	"Authorization": `token ${localStorage.getItem("token")}`
			// }
		});
	} catch (e) {
		console.log("fetching starred: ", e);
	}
}

