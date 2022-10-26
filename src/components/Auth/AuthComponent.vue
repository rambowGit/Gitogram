<template >
	<div>
		<button	
			@click="getCode"
			class="btn-active btn"
			>
    <span class="btn-text">Login</span>       
  </button>
	</div>
</template>
<script>

import { getAuthCode, getToken } from "../../api/Auth.service";


export default {
	name: "auth-component",

	methods: {
		getCode () {
			getAuthCode();			
		}
	},
	async created() {
		const code = new URLSearchParams(window.location.search).get("code");
		
		if (code) {
			const resp = await getToken(code);
			const token = resp.data.token;
			localStorage.setItem("token", token);
			
			// редирект на гл. страницу после получения токена
			window.location.href = "/";
			// this.$router.replace({ 
			// 	name: "feeds", 
			// 	params: {}
			// });
		} 
	}
};
</script>
<style scoped>
	.btn {
    width: 270px;
    height: 44px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px auto;   
  }
	.btn-middle {
    width: 217px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px auto;   
  }
  .btn-text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #fff;
  }
	.btn-text--middle {
		font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #fff;
	}
  .btn-active {
    background: #31AE54;
    
  }
  .btn-inactive {
    background: #9E9E9E;
  }
</style>