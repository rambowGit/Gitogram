/**
 * @jest-environment jsdom
 */

import PostFooter from "@/components/Post/PostFooter.vue";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { state, mutations, getters } from "../../../store";

const localVue = createLocalVue();
 
localVue.use(Vuex);
 
let actions, store;
 
beforeEach(() => {
   actions = {
       increment: jest.fn()
   }
 
   store = new Vuex.Store({
       state: {...state},
       mutations: {...mutations},
       getters: {...getters},
       actions
   });
});
 
afterEach(() => { store = {} });





it("При клике, если в Store еще нет issues, выполняется запрос к серверу", async () => {
	const wrapper = mount(PostFooter, {
		propsData: {
			repo: {
				id: 1,
				// issues: {
				// 	loading: false,
				// 	items: [
				// 		{
				// 		id: 222,
				// 		user: {
				// 			login: "Jonh Doe"
				// 		},
				// 		title: "New issue"
				// 	},
				// 	{
				// 		id: 223,
				// 		user: {
				// 			login: "Mark Bat"
				// 		},
				// 		title: "Another issue"
				// 	},
					
				// ],
					
				// }
			}
		}
	});
  wrapper.find(".issue-toggler .toogler__container").trigger("click");
	
	// console.log(wrapper.emitted());
	
	// let togglerText =  wrapper.find(".toggler-text");
	// let togglerContainet =  wrapper.find(".toogler__container");
	
	// // начальное значение тоглера - "View issues"
	// expect(togglerText.text()).toBe("View issues");
	
	// // при клике, isShown становится true. Надпись меняется на "Hide issues"
	// await togglerContainet.trigger("click");
	
	// expect(togglerText.text()).toBe("Hide issues");
});
