/**
 * @jest-environment jsdom
 */

import PostFooter from "@/components/Post/PostFooter.vue";

import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
// import { state, mutations, getters } from "../../../store";
import starsModule from "../../../store/modules/stars";


// axios mock
jest.mock("axios", () => {
	console.log("Hello mock axios");
	get: jest.fn(() => Promise.resolve({
		data: 
			[
				{
					id: 222,
					user: {
						login: "Jonh Doe"
					},
					title: "New issue"
				},
				{
					id: 223,
					user: {
						login: "Mark Bat"
					},
					title: "Another issue"
				},
			
			]
	}),
	);
});


// подключаем модуль стора
const { state, mutations, getters } = starsModule;


let store, actions;
 
beforeEach(() => {
	actions = {
		"starsModule/loadIssues": jest.fn()
	};

	
	// console.log("actions ",  actions["starsModule/loadIssues"]);
 
	store = createStore({
		state: {...state},
		mutations: {...mutations},
		getters: {...getters},
		actions
	});
});
 
afterEach(() => { store = {}; });

test("При клике, если в Store еще нет issues, выполняется запрос к серверу", async () => {
		
	const wrapper = mount(PostFooter, {
		global: {
			plugins: [store]
		},
		props: {
			repo: {
				id: 222,
				issues: {					
					items: null, 					
					loading: false,
				}
			}	
		}
	});
	

	
	// проверяем, что сначала в сторе нет issues
	expect(state.repo.items).toBe(null);
	// клик по тоглеру
	await wrapper.find(".issue-toggler .toogler__container").trigger("click");
	
	//при клике, у тоглера срабатывает один раз событие togglerPressed
	expect(wrapper.emitted().click.length).toBe(1);
	
	
	/*
	 после клика срабатывает функция onShowComments, и переменная 
	 isShownComment становится true, комментарий показывается
	*/
	expect(wrapper.find(".issue-comment").exists()).toBe(true);
		
	// эмулируем загрузку starred repos в стор 
	store.commit("SET_REPO_ITEMS", [{id: 222}, {id:223}]);
	
	
	// так же при клике срабатывает action загрузки issues, если их нет в сторе
	expect(actions["starsModule/loadIssues"]).toHaveBeenCalled();
	
	// проверяем загрузку issues: того, что как-бы вернул mock-axios
	let id=222;
	store.commit("SET_ISSUES_FOR_REPO", {
		id,
		issues: {
			items: [
				{
					id: 111-11-3333,
					user: {
						login: "Jonh Doe"
					},
					title: "New issue"
				},
				{
					id: 222-222-111,
					user: {
						login: "Mark Bat"
					},
					title: "Another issue"
				},
			
			],
		}
	});
	
	console.log(store.state.repo.items[0].issues);
});

