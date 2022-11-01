<template >
	
	<div class="repos-profile">
		
		<!-- заголовок -->
		<div class="header-container">
			<div class="section-header">My Repositories</div>
			
			<div class="repos-quantity">
				{{myRepos?.items?.length}}
			</div>
		</div>
		
		<div v-if="myRepos?.loading" class="spinner">
			<IconComponent name="SpinnerIcon"/>
		</div>
		
		<div v-else>
			<!-- фильтры -->
			<div v-if="myRepos">
				<div class="chips-container">
					<button 
						@click="loadRepo('private')"
						class="chips red">
						<span>Private</span>			
					</button>
					
					<button 
						@click="loadRepo('public')"
						class="chips green">
						<span>Public</span>			
					</button>
					
					<button 
						@click="loadRepo('all')"
						class="chips orange">
						<span>All</span>			
					</button>
					
				</div>
			
				<!-- репозитории -->
				<div class="repo" v-for="repo of myRepos.items" :key="repo.id">
					<PostContent :post="repo" />
				</div>		
			</div>
		</div>
		
	</div>
	
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import PostContent from "../Post/PostContent.vue";
import IconComponent from "@/icons/IconComponent.vue";

const store = useStore();

const myRepos = computed(() => store.state.userModule.user.repos);

// const myRepos = computed(() => store.getters["userModule/getUserFromState"]);

/*
 repo filters
 TODO: сейчас фильтрация реализована в виде отдельных запросов на сервер - это для безопасности
 Можно переделать на вариант, когда фильтрация реализуется на основании уже имеющихся в  store значений
 */
const loadRepo = async (level) => await store.dispatch("userModule/loadMyrepos", level);
	
</script>

<style scoped>
.repos-profile {
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items:flex-start; */
}
.chips-container {
	display: flex;
	margin-bottom: 20px;
}
.chips {
	width: 76px;
	/* height: 36px; */
	border-radius: 10%;
	margin: 10px;
	font-size: 1rem;
	font-weight: normal;
	padding: 6px;
}
.red {
	background-color: rgba(209, 43, 43, 0.486);
	box-shadow: 5px 5px 5px rgba(209, 43, 43, 0.486);
	color: rgb(87, 76, 76);
}
.green {
	background-color: rgba(53, 238, 136, 0.486);
	box-shadow: 5px 5px 5px rgba(53, 238, 136, 0.486);
	color: rgb(87, 76, 76);
}
.orange {
	background-color: rgba(238, 189, 53, 0.486);
	box-shadow: 5px 5px 5px rgba(238, 189, 53, 0.486);
	color: rgb(87, 76, 76);
	
}

.header-container {
	display: flex;
	justify-content: space-between;
}

.section-header {
	text-align: left;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 26px;
	line-height: 28px;
	color: #262626;
	margin-bottom: 30px;
}

.repos-quantity {
	width: 12px;
	height: 28px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 28px;
	text-align: right;
	color: #9E9E9E;
	margin-right: 10px;
}
.repo {
	margin-bottom: 18px;
}

/* spinner */
.spinner-container {
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
}
.spinner {
	color: #31AE54;
	display: inline-block;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>