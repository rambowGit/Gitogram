import ProgressBar from "../../components/Slider/ProgressBar.vue";

export default {
	title: "ProgressBar",
	components: { ProgressBar },
	argTypes: {
		onTransitionend: {
			action: "emitOnFinish",
			description: "Вызывается, когда progressbar заполнится до конца" 
		},
	}
};

const Template = (args) => <ProgressBar {...args}/>


export const DefaultView = Template.bind({});


