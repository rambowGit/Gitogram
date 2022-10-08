import AvatarComponent from "../components/TopLine/AvatarComponent.vue";

const users = [
  {
    id: 1,
    name: "Andrew",
    pic: require("../assets/img/avatars/ProfilePic_Andrew.png"),
  },
  {
    id: 2,
    name: "Camille",
    pic: require("../assets/img/avatars/ProfilePic_Camille.png"),
  },
];

export default {
  title: "AvatarComponent",
  components: { AvatarComponent },
  argTypes: {
    onClick: { action: "onPress" },
    isProfile: {
      type: Boolean,
      description: "Отображение имени и размер аватара",
      defaultValue: false,
      options: [true, false],
      control: {
        type: "radio",
      },
    },
    userStory: {
      type: Object,
      description: "Выбор отображаемого аватара",
      options: [users[0], users[1]],
      defaultValue: users[0],
      control: {
        type: "select",
      },
    },
    username: {
      type: String,
      description: "Выбор отображаемого имени",
      options: [users[0].name, users[1].name],
      defaultValue: users[0].name,
      control: {
        type: "radio",
      },
    },
  },
};

const Template = (args) => <AvatarComponent {...args} />;

export const DefaultView = Template.bind({});
DefaultView.args = {
  isProfile: false,
};

export const ProfileView = Template.bind({});
ProfileView.args = {
  isProfile: true,
};
