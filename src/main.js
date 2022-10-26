import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setHttpHeadereToken } from "@/api/Auth.service";


// устанавливаем HTTP-header во все запросы, если пользователь залогинился. Иначе не будет работать получение starred repos
if (localStorage.getItem("token")) {
	setHttpHeadereToken();
}


const app = createApp(App);
app.use(router);
app.use(store);

app.mount("#app");
