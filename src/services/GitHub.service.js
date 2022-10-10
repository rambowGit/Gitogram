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
export const getIssuesForRepo = (repoOwner, repoName) => {
	return axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/issues`);
};