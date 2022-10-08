import ButtonComponent from "../../components/Slider/ButtonComponent.vue";

export default {
	title: "ButtonComponent",
	components: { ButtonComponent },
	argTypes: {
		// onClick: { action: "onPress" },
		hoverText: {
			type: Text,
			description: "Текст кнопки",
			defaultValue: "Unfollow",
			control: {
				type: "text",
			},
		},
	},
};

const Template = (args) => <ButtonComponent {...args}><slot>Follow</slot></ButtonComponent>;


export const DefaultView = Template.bind({});
DefaultView.args = {
};

