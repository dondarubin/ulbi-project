import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import AvatarStorybook from '@/shared/assets/test/avatarStorybook.png';
import { ProfileCard } from '../ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const PrimaryWithoutAvatar = Template.bind({});
PrimaryWithoutAvatar.args = {
  profileFormData: {
    username: 'admin',
    firstname: 'Mama',
    lastname: 'Papa',
    age: 22,
    currency: Currency.USD,
    city: 'Saratov',
    country: Country.RUSSIA,
    avatar: '',
  },
};
PrimaryWithoutAvatar.decorators = [StoreDecorator({
  loginForm: { username: 'admin', password: 'admin' },
})];

export const PrimaryWithAvatar = Template.bind({});
PrimaryWithAvatar.args = {
  profileFormData: {
    username: 'admin',
    firstname: 'Mama',
    lastname: 'Papa',
    age: 22,
    currency: Currency.USD,
    city: 'Saratov',
    country: Country.RUSSIA,
    avatar: AvatarStorybook,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'TEST ERROR',
};
