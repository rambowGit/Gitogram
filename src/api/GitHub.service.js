import axios from "axios";

// helper date
const getRequiredDate = (daysMinus) => {
	const weekMS = daysMinus * 24 * 60 * 60 * 1000;
	const weekAgo = new Date(Date.now() - weekMS);
	return weekAgo.toISOString().split("T")[0];
};



// получение популярных репозиториев за последние семь дней
export function getPopularRepos() {
	const weekAgoFormated = getRequiredDate(7);

	const params = new URLSearchParams;
	params.append("q", `language:javascript created:>${weekAgoFormated}`);
	params.append("sort", "stars");
	params.append("order", "desc");
	params.append("per_page", "10");

	return axios.get("https://api.github.com/search/repositories" , {
		params: params
	});
		
}


// получение issue по для указанного репозитория
export const getIssuesForRepo = ({repoOwner, repoName}) => {
	return axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`);
};


// получение readme.md для указанного репозитория
export const getReadmeForRepo= (owner, repo) => {
	const contentHeader = "application/vnd.github.v3.html+json";
	try {
		const response = axios.get(`https://api.github.com/repos/${owner}/${repo}/readme` , {
			headers: {
				accept: contentHeader
			}
		});
		
		return response;
		
	} catch(error) {
		console.log("error fetching readme: ", error);
	}
};

// поставить лайк репозиторию
export const setStarToRepo = ({owner, repo}) => {
	try {
		if (!localStorage.getItem("token")) {
			throw Error("Auth error: please login");
		}
		
		return axios({
			method: "put",
			url: `https://api.github.com/user/starred/${owner}/${repo}`,
			headers: {
				"Accept": "application/vnd.github+json",
				// "Authorization": `token ${localStorage.getItem("token")}`
			}
		});
	} catch (e) {
		console.log("Setting star: ", e);
	}
};

// снять лайк репозиторию
export const unstarRepo = ({owner, repo}) => {
	try {
		if (!localStorage.getItem("token")) {
			throw Error("Auth error: please login");
		}
		
		return axios({
			method: "delete",
			url: `https://api.github.com/user/starred/${owner}/${repo}`,
			headers: {
				"Accept": "application/vnd.github+json",
				// "Authorization": `token ${localStorage.getItem("token")}`
			}
		});
	} catch (e) {
		console.log("Unstar: ", e);
	}
};