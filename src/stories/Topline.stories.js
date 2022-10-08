import TopLine from "../components/TopLine/TopLine.vue";

export default {
  title: "TopLine",
  components: { TopLine },
};
const Template = (args) => <TopLine {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {};
