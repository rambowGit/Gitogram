import SlideComponent from "../../components/Slider/SlideComponent.vue";

export default {
	title: "SlideComponent",
	components: { SlideComponent },
};

const Template = (args) => <SlideComponent {...args}/>


export const DefaultView = Template.bind({});

