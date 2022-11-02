/**
 * @jest-environment jsdom
 */
import IssueToggle from "../IssueToggle.vue";
import { shallowMount } from "@vue/test-utils";

it("При клике изменяется надпись Hide issues/View issues", async () => {
	const wrapper = shallowMount(IssueToggle);

	let toggler =  wrapper.find(".toggler");
	let togglerText =  wrapper.find(".toggler-text");
	let togglerContainet =  wrapper.find(".toogler__container");
	
	// начальное значение тоглера - "View issues"
	expect(togglerText.text()).toBe("View issues");
	
	// при клике, isShown становится true. Надпись меняется на "Hide issues"
	await togglerContainet.trigger("click");
	
	expect(togglerText.text()).toBe("Hide issues");
});
