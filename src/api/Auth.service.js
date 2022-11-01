import axios from "axios";
import env from "../../env";

const clientId = env.clientId;
const clientSecret = env.clientSecret;
	
// получение промежуточного кода
export function getAuthCode() {
	const params = new URLSearchParams;
	params.append("client_id", clientId);
	params.append("scope", "repo user");
	const githubAuthApi = "https://github.com/login/oauth/authorize";
	window.location.href = `${githubAuthApi}?${params}`;
}

// получение auth token
export function getToken(code) {
	try {		
		return axios({
			method: "post",
			url: "https://webdev-api.loftschool.com/github",
			data: JSON.stringify({
				clientId, 
				code, 
				clientSecret
			}),
			headers: {
				"Content-Type": "application/json",
			}
		});
		
	} catch (e) {
		console.log("cacthed error: ", e);
	}
}


// получение авторизованного пользователя
export async function getAuthUser() {
	
	try {
		return axios({
			method: "get",
			url: "https://api.github.com/user",
			headers: {
				"Authorization": `token ${localStorage.getItem("token")}`
			}
		});
	} catch (e) {
		console.log("cacthed error: ", e);
	}
}


// установка токена в заголовки request
export function setHttpHeadereToken() {
	
	try {
		axios.defaults.headers = {
			"Authorization": `token ${localStorage.getItem("token")}`
		}; 
	} catch(e) {
		throw "Error catched: " + e;
	}
}